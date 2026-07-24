import { Link } from 'react-router-dom';

export default function Logo({ dark = false }) {
  return (
    <Link to="/" className="logo">
      <svg className="mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill={dark ? '#1C3160' : '#142544'} />
        <path d="M9 29V20C9 14.4772 13.4772 10 19 10H21C26.5228 10 31 14.4772 31 20V29" stroke="#E6C878" strokeWidth="2" />
        <path d="M13 29V22C13 18.134 16.134 15 20 15C23.866 15 27 18.134 27 22V29" stroke="#C9972F" strokeWidth="2" />
        <path d="M9 29H31" stroke="#E6C878" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span>
        Dwarkadheesh
        <span className="sub">Skill Training Centre</span>
      </span>
    </Link>
  );
}
