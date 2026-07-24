# Dwarkadheesh Skill Training Centre — Website

A full React + Node.js/Express website for **Dwarkadheesh Skill Training Centre**
(Dwarkadheesh Academy & Polytechnic – Kaushal Vikas Kendra), Sector 19, Dwarka, Delhi.

- **Frontend:** React 18 + Vite + React Router (in `/frontend`)
- **Backend:** Node.js + Express API for the enquiry/admission forms (in `/backend`)

Pages: Home, About, Courses (DCA, ADCA, O Level, CCC, Digital Marketing, Office
Automation, Programming Languages, Web Development), Admissions, Contact —
fully responsive, with a working enquiry form, WhatsApp button, and Google Maps embed.

---

## 1. Project structure

```
dwarkadheesh-react/
├── frontend/          React (Vite) website
│   └── src/
│       ├── data/siteData.js   ← all business details in ONE place (edit here)
│       ├── components/
│       ├── pages/
│       └── index.css
├── backend/            Express API (handles the enquiry/admission forms)
│   ├── server.js
│   ├── .env.example
│   └── data/submissions.json   ← form submissions are saved here automatically
└── package.json         convenience scripts to run both together
```

## 2. Requirements

- [Node.js](https://nodejs.org) 18+ and npm (comes with Node)

## 3. Install

From the project root:

```bash
npm run install:all
```

(or manually: `cd backend && npm install`, then `cd ../frontend && npm install`)

## 4. Configure the backend (optional but recommended)

The contact form works out of the box and saves every submission to
`backend/data/submissions.json` even with zero configuration.

To also receive an **email** whenever someone submits the form:

1. `cd backend`
2. Copy `.env.example` to `.env`
3. Fill in `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` (e.g. a Gmail App Password, or your
   hosting provider's SMTP details) and `NOTIFY_EMAIL` (already set to
   `preet@dwarkadheeshpolytechnic.online`)

If you skip this step, the site still works perfectly — form submissions are just
stored as JSON on the server instead of also being emailed.

## 5. Run it locally

From the project root (runs both frontend and backend together):

```bash
npm run dev
```

- Website: http://localhost:5173
- API: http://localhost:5000

Or run them separately in two terminals:

```bash
npm run dev:backend    # starts Express on :5000
npm run dev:frontend   # starts Vite on :5173
```

## 6. Editing content

Almost everything you'll want to change — address, phone, email, hours, rating,
courses, FAQs — lives in **one file**:

```
frontend/src/data/siteData.js
```

Update it there and every page (Home, Courses, Admissions, Contact, Footer)
updates automatically.

Things worth reviewing before you go live:
- **Testimonials on the Home page** are placeholders — replace with real,
  permission-given quotes from your Google reviews.
- **Course fees** are intentionally not published on the site (common for this
  type of institute) — the Admissions page directs enquirers to call/WhatsApp
  instead. Add a fee table to `Courses.jsx` / `siteData.js` if you'd rather show
  fees publicly.
- **Logo:** the site currently uses a simple gateway/arch monogram (matching the
  "Dwarkadheesh" gateway theme) since no logo file was supplied. Swap
  `frontend/src/components/Logo.jsx` for a real logo image whenever one is ready.

## 7. Building for production

```bash
npm run build:frontend
```

This outputs static files to `frontend/dist/` — deploy that folder to any static
host (Netlify, Vercel, Hostinger, GitHub Pages, etc.). Deploy `backend/` separately
to any Node host (Render, Railway, a VPS, etc.) and point the frontend's `/api`
calls at that backend's URL in production (update the fetch URL in
`frontend/src/components/EnquiryForm.jsx` or set up a reverse proxy).

## 8. Tech notes

- Design system: navy/gold "gateway" theme (Fraunces + Manrope + IBM Plex Mono
  fonts), fully responsive with a mobile nav drawer.
- No external UI framework — plain CSS via `frontend/src/index.css`, so it's easy
  to restyle without fighting a component library.
- Backend has a small in-memory rate limiter on `/api/contact` to reduce spam.
