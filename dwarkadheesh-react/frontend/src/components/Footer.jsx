import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { site } from '../data/siteData.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo dark />
            <p>Practical, job-focused IT & vocational training in Dwarka, New Delhi — affiliated with the {site.affiliation}.</p>
            <div className="social-row">
              <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
              <a href={site.whatsappHref} aria-label="WhatsApp" target="_blank" rel="noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg></a>
              <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.5 6.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.4 3 12 3 12 3h0s-4.4 0-7.3.2c-.5.1-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S1.3 8.4 1.3 10.3v1.4C1.3 13.6 1.5 15.5 1.5 15.5s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .2 8 .2s4.4 0 7.3-.2c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8z"/><path d="M9.8 14.5l6-3.5-6-3.5z" fill="currentColor"/></svg></a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">All Courses</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Popular Courses</h4>
            <ul>
              <li><Link to="/courses#web-development">Web Development</Link></li>
              <li><Link to="/courses#digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/courses#o-level">O Level</Link></li>
              <li><Link to="/courses#adca">ADCA</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{site.address.line1}, {site.address.line2}, {site.address.line3}</li>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>{site.hours.display}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} {site.name}. All rights reserved.</span>
          <span>Designed &amp; developed with care.</span>
        </div>
      </div>
    </footer>
  );
}
