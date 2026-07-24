import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

const PORT = process.env.PORT || 5000;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'preet@dwarkadheeshpolytechnic.online';
const CORS_ORIGIN = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*';

// Ensure data dir/file exist so submissions can always be saved as a fallback
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]', 'utf-8');

// Only build a mail transporter if SMTP credentials were actually provided
let transporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
}

const app = express();
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Very small in-memory rate limiter (per IP) to deter spam without a DB
const hits = new Map();
function rateLimit(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const windowMs = 60 * 1000;
  const max = 5;
  const record = hits.get(ip) || { count: 0, start: now };
  if (now - record.start > windowMs) {
    record.count = 0;
    record.start = now;
  }
  record.count += 1;
  hits.set(ip, record);
  if (record.count > max) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again in a minute.' });
  }
  next();
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'dwarkadheesh-backend', time: new Date().toISOString() });
});

app.post('/api/contact', rateLimit, async (req, res) => {
  try {
    const { name, phone, email, course, message, source } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ ok: false, error: 'Name and phone number are required.' });
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : '',
      course: course ? String(course).trim() : '',
      message: message ? String(message).trim() : '',
      source: source === 'admission' ? 'admission' : 'contact',
      submittedAt: new Date().toISOString()
    };

    // 1. Persist to disk as a durable fallback / simple record-keeping store
    const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8') || '[]');
    existing.push(entry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2), 'utf-8');

    // 2. Try to email a notification if SMTP is configured (best-effort)
    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"${entry.name} via Website" <${process.env.SMTP_USER}>`,
          to: NOTIFY_EMAIL,
          replyTo: entry.email || undefined,
          subject: `New ${entry.source === 'admission' ? 'admission application' : 'enquiry'} — ${entry.name}`,
          text: [
            `Name: ${entry.name}`,
            `Phone: ${entry.phone}`,
            `Email: ${entry.email || '-'}`,
            `Course: ${entry.course || '-'}`,
            `Message: ${entry.message || '-'}`,
            `Submitted: ${entry.submittedAt}`
          ].join('\n')
        });
      } catch (mailErr) {
        // Email is best-effort — the submission is already saved, so don't fail the request
        console.error('Email notification failed:', mailErr.message);
      }
    }

    res.status(201).json({ ok: true, message: 'Enquiry received.' });
  } catch (err) {
    console.error('Error handling /api/contact:', err);
    res.status(500).json({ ok: false, error: 'Something went wrong. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Dwarkadheesh backend listening on http://localhost:${PORT}`);
  if (!transporter) {
    console.log('SMTP not configured — enquiries will be saved to backend/data/submissions.json only.');
  }
});
