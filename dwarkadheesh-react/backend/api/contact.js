import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

function getDataDir() {
  const candidates = [
    path.join(process.cwd(), 'data'),
    path.join('/tmp', 'dwarkadheesh-data')
  ];

  for (const dir of candidates) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      return dir;
    } catch {
      // Try the next candidate.
    }
  }

  return '/tmp/dwarkadheesh-data';
}

const DATA_DIR = getDataDir();
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

let transporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed.' });
    return;
  }

  try {
    const body = await parseBody(req);
    const { name, phone, email, course, message, source } = body || {};

    if (!name || !phone) {
      res.status(400).json({ ok: false, error: 'Name and phone number are required.' });
      return;
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

    const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8') || '[]');
    existing.push(entry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2), 'utf8');

    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"${entry.name} via Website" <${process.env.SMTP_USER}>`,
          to: process.env.NOTIFY_EMAIL || 'preet@dwarkadheeshpolytechnic.online',
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
        console.error('Email notification failed:', mailErr.message);
      }
    }

    res.status(201).json({ ok: true, message: 'Enquiry received.' });
  } catch (error) {
    console.error('Error handling /api/contact:', error);
    res.status(500).json({ ok: false, error: 'Something went wrong. Please try again later.' });
  }
}
