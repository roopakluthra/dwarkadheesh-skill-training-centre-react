import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { site, courses } from '../data/siteData.js';

export default function Home() {
  useScrollReveal('.course-card, .why-item, .testi-card, .pillar');

  const featured = courses.slice(0, 6);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Skill Training Centre &middot; Dwarka, New Delhi</div>
            <h1>Your gateway to a <em>skilled</em> career.</h1>
            <p className="lede">
              Practical, industry-linked training in IT and vocational skills — DCA, ADCA, O Level, CCC, Digital
              Marketing, Office Automation, Programming Languages & Web Development. Affiliated with the {site.affiliation}.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
              <Link to="/contact" className="btn btn-ghost">Book Free Counselling</Link>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>{site.rating}★</b><span>{site.reviewCount} Google Reviews</span></div>
              <div className="stat"><b>8</b><span>Career Courses</span></div>
              <div className="stat"><b>Govt.</b><span>Affiliated Programs</span></div>
              <div className="stat"><b>Mon–Sat</b><span>9 AM – 7 PM</span></div>
            </div>
          </div>
          <div className="hero-art">
            <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="240" cy="240" r="190" stroke="#E6C878" strokeOpacity="0.15" strokeWidth="1"/>
              <circle cx="240" cy="240" r="140" stroke="#E6C878" strokeOpacity="0.22" strokeWidth="1"/>
              <path d="M80 420V300C80 210 150 140 240 140C330 140 400 210 400 300V420" stroke="#E6C878" strokeWidth="2.5"/>
              <path d="M120 420V320C120 254 174 200 240 200C306 200 360 254 360 320V420" stroke="#C9972F" strokeWidth="2.5"/>
              <path d="M160 420V340C160 296 196 260 240 260C284 260 320 296 320 340V420" stroke="#E6C878" strokeWidth="2.5"/>
              <line x1="60" y1="420" x2="420" y2="420" stroke="#E6C878" strokeWidth="2.5" strokeLinecap="round"/>
              <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#FAF7EF" fillOpacity="0.75">
                <rect x="270" y="80" width="132" height="30" rx="15" fill="#1C3160" stroke="#E6C878" strokeOpacity="0.4"/>
                <text x="286" y="99">Web Development</text>
                <rect x="60" y="150" width="120" height="30" rx="15" fill="#1C3160" stroke="#E6C878" strokeOpacity="0.4"/>
                <text x="76" y="169">O Level</text>
                <rect x="310" y="380" width="130" height="30" rx="15" fill="#1C3160" stroke="#E6C878" strokeOpacity="0.4"/>
                <text x="326" y="399">Digital Marketing</text>
              </g>
            </svg>
          </div>
        </div>
        <div className="hero-floor">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 L0 20 L40 20 L40 0 L80 0 L80 20 L120 20 L120 0 L160 0 L160 20 L1200 20 L1200 40 Z" fill="#FAF7EF"/>
          </svg>
        </div>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <div className="trust-strip">
        <div className="wrap">
          <span>{site.affiliation} Affiliated</span>
          <span>{site.rating}★ Rated ({site.reviewCount} Reviews)</span>
          <span>Hands-on Labs</span>
          <span>Placement Assistance</span>
          <span>Flexible Batches</span>
        </div>
      </div>

      {/* ===================== ABOUT SNAPSHOT ===================== */}
      <section className="about-snap">
        <div className="wrap about-grid">
          <div className="arch-photo">
            <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 210V130C20 78 55 40 100 40C145 40 180 78 180 130V210" stroke="#E6C878" strokeWidth="3"/>
              <path d="M45 210V150C45 116 69 90 100 90C131 90 155 116 155 150V210" stroke="#C9972F" strokeWidth="3"/>
              <circle cx="100" cy="70" r="10" fill="#E6C878"/>
              <line x1="10" y1="210" x2="190" y2="210" stroke="#E6C878" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="eyebrow">About the Centre</div>
            <h2>Named for the gateway, built for the journey.</h2>
            <p>
              "Dwarkadheesh" means the Lord of Dwarka — a city known as a gateway between worlds. In that spirit,
              {' '}{site.name} exists as a gateway of our own: the passage between where our students start and
              the skilled, employable professionals they become.
            </p>
            <p>We keep our batches practical and our trainers close to industry — so what you learn in the classroom is what you'll be asked to do at work.</p>
            <div className="pillars">
              <div className="pillar">
                <span className="num">01</span>
                <b>Practice-first curriculum</b>
                <p>Every course pairs concepts with hands-on practice you can show employers.</p>
              </div>
              <div className="pillar">
                <span className="num">02</span>
                <b>Placement support</b>
                <p>Resume building, interview preparation and guidance towards job opportunities.</p>
              </div>
              <div className="pillar">
                <span className="num">03</span>
                <b>Flexible scheduling</b>
                <p>Batches through the week for students and working professionals alike.</p>
              </div>
              <div className="pillar">
                <span className="num">04</span>
                <b>Local, accessible campus</b>
                <p>Centrally located in Sector 19, Dwarka.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== COURSES ===================== */}
      <section className="courses">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">What You Can Learn</div>
              <h2>Courses built around real jobs.</h2>
            </div>
            <p>A shortlist of our programs. See the full catalogue and details on the courses page.</p>
          </div>
          <div className="course-grid">
            {featured.map((c) => (
              <div className="course-card" key={c.id} id={c.id}>
                <Icon name={c.icon} className="course-arch" />
                <h3>{c.fullName}</h3>
                <p>{c.summary}</p>
                <div className="course-meta"><span>⏰ {c.duration}</span><span>🎓 {c.eligibility.split(',')[0]}</span></div>
                <Link to={`/courses#${c.id}`} className="link">
                  View details
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY US ===================== */}
      <section className="why">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Why Dwarkadheesh</div>
            <h2>Training built to get you hired, not just certified.</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <span className="num">01</span>
              <h3>Experienced Trainers</h3>
              <p>Instructors with real industry & teaching experience, not just scripts.</p>
            </div>
            <div className="why-item">
              <span className="num">02</span>
              <h3>Government-Affiliated</h3>
              <p>Courses run under affiliation with the {site.affiliation}.</p>
            </div>
            <div className="why-item">
              <span className="num">03</span>
              <h3>Placement Assistance</h3>
              <p>Resume support, interview preparation and guidance towards hiring partners.</p>
            </div>
            <div className="why-item">
              <span className="num">04</span>
              <h3>Flexible & Local</h3>
              <p>Batches that fit around your schedule, right here in Dwarka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RATING / SOCIAL PROOF ===================== */}
      <section className="testimonials">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Trusted Locally</div>
            <h2>Rated {site.rating}★ by our students on Google.</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="quote">Hands-on training and a trainer who actually sits with you while you practice — that made the difference for me.</p>
              <div className="testi-person">
                <div className="avatar">A</div>
                <div><b>Google Review</b><span>Verified Student</span></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="quote">Flexible batch timing meant I could keep working while finishing my course — and the campus is easy to reach.</p>
              <div className="testi-person">
                <div className="avatar">R</div>
                <div><b>Google Review</b><span>Verified Student</span></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="quote">Good guidance from the counselling stage itself — they helped me pick the right course for my goals.</p>
              <div className="testi-person">
                <div className="avatar">P</div>
                <div><b>Google Review</b><span>Verified Student</span></div>
              </div>
            </div>
          </div>
          <p className="form-note center" style={{ marginTop: 20 }}>
            Based on {site.reviewCount} Google reviews at {site.rating}★. Replace with direct quotes from your reviews (with permission) before publishing.
          </p>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section>
        <div className="wrap">
          <div className="cta-banner">
            <div>
              <h2>Ready to start your next chapter?</h2>
              <p>Book a free, no-obligation counselling session with our academic advisors.</p>
            </div>
            <div className="actions">
              <Link to="/contact" className="btn btn-primary">Book Free Counselling</Link>
              <a href={site.phoneHref} className="btn btn-ghost">Call {site.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
