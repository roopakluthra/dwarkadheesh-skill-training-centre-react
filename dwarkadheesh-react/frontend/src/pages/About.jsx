import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { site } from '../data/siteData.js';

export default function About() {
  useScrollReveal('.info-card, .faculty-card');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / About</div>
          <div className="eyebrow">About the Centre</div>
          <h1>Practical training, honest guidance.</h1>
          <p>We built {site.name} around one belief: a course is only worth its fee if it changes what you can actually do. Everything here is built around that.</p>
        </div>
      </section>

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
            <div className="eyebrow">Who We Are</div>
            <h2>{site.legalName}</h2>
            <p>
              Also known as {site.name}, we are an IT and vocational skill-training institute based in Sector 19,
              Dwarka, offering courses affiliated with the {site.affiliation}. Our programs range from foundational
              computer literacy (CCC) to career-oriented diplomas (DCA, ADCA, O Level) and specialised skills like
              Web Development and Digital Marketing.
            </p>
            <p>Students consistently rate us {site.rating}★ based on {site.reviewCount} Google reviews — feedback we take as a benchmark to keep raising, not a finish line.</p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory-100)' }}>
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Mission & Vision</div>
            <h2>What we're working towards.</h2>
          </div>
          <div className="two-col">
            <div className="info-card">
              <h3><Icon name="target" /> Our Mission</h3>
              <p>To deliver practical, affordable, and industry-relevant skill training that gives every student in and around Dwarka a genuine path to employment or self-employment — regardless of their starting point.</p>
            </div>
            <div className="info-card">
              <h3><Icon name="compass" /> Our Vision</h3>
              <p>To be a trusted vocational and IT training centre in West Delhi — known as much for honest counselling as for quality teaching.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Our Approach</div>
            <h2>Learn from trainers who focus on practice.</h2>
          </div>
          <div className="faculty-grid">
            <div className="faculty-card">
              <div className="faculty-photo"><Icon name="user" className="" /></div>
              <div className="faculty-body">
                <span>IT & Diploma Courses</span>
                <h3>Dedicated Faculty</h3>
                <p>Trainers focused on DCA, ADCA, O Level and CCC, guiding students from computer basics to full proficiency.</p>
              </div>
            </div>
            <div className="faculty-card">
              <div className="faculty-photo"><Icon name="user" className="" /></div>
              <div className="faculty-body">
                <span>Web Development & Programming</span>
                <h3>Practical Instructors</h3>
                <p>Project-based teaching in Web Development and Programming Languages so students leave with real, working skills.</p>
              </div>
            </div>
            <div className="faculty-card">
              <div className="faculty-photo"><Icon name="user" className="" /></div>
              <div className="faculty-body">
                <span>Digital Marketing & Office Automation</span>
                <h3>Industry-Aware Trainers</h3>
                <p>Up-to-date coaching in Digital Marketing tools and Office Automation software used in real workplaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy-950)', paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-banner">
            <div>
              <h2>Want to see the campus first?</h2>
              <p>Visit us in Sector 19, Dwarka, or book a free counselling call — either way, we'll walk you through the right course for your goals.</p>
            </div>
            <div className="actions">
              <Link to="/contact" className="btn btn-primary">Book a Visit</Link>
              <Link to="/courses" className="btn btn-ghost">Browse Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
