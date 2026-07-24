import fs from 'fs';
import path from 'path';

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

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, error: 'Method not allowed.' });
    return;
  }

  res.status(200).json({
    ok: true,
    service: 'dwarkadheesh-backend',
    time: new Date().toISOString(),
    dataDir: DATA_DIR
  });
}
