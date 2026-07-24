const paths = {
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" /></>,
  'check-badge': <><path d="M12 3l2.4 1.4 2.6-.3 1 2.4 2.4 1-.3 2.6L21 12l-1.4 2.4.3 2.6-2.4 1-1 2.4-2.6-.3L12 21l-2.4-1.4-2.6.3-1-2.4-2.4-1 .3-2.6L3 12l1.4-2.4-.3-2.6 2.4-1 1-2.4 2.6.3z" /><path d="M9 12l2 2 4-4" /></>,
  megaphone: <><path d="M3 11l18-7-7 18-2-8-9-3z" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" /></>,
  code: <><path d="M8 6L2 12l6 6M16 6l6 6-6 6" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" fill="currentColor" /></>,
  compass: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M8 13h4" /></>,
  pin: <><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
  phone: <><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></>,
  star: <><path d="M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.5L12 17.2l-5.9 3.2 1.2-6.5-4.8-4.6 6.6-.8L12 2.5z" /></>,
  shield: <><path d="M12 2l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V5l8-3z" /><path d="M9 12l2 2 4-4" /></>
};

export default function Icon({ name, className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || paths.check}
    </svg>
  );
}
