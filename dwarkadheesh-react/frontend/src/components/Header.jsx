import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import { site } from '../data/siteData.js';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav">
        <Logo />
        <ul className={`nav-links${open ? ' mobile-open' : ''}`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a href={site.phoneHref} className="btn btn-outline">Call Us</a>
          <NavLink to="/contact" className="btn btn-primary">Free Counselling</NavLink>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
