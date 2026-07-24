import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Faq from '../components/Faq.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { courses, faqs } from '../data/siteData.js';

export default function Courses() {
  useScrollReveal('.info-card');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Courses</div>
          <div className="eyebrow">Full Catalogue</div>
          <h1>Every course, and exactly what it covers.</h1>
          <p>Durations shown are typical ranges — actual batch length can vary. Contact our counsellors for the current fee structure, EMI options and next batch start date.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Course Directory</div>
              <h2>Choose your path</h2>
            </div>
            <p>All courses include hands-on practice and a completion certificate. Jump straight to a course below.</p>
          </div>
          <div className="course-grid">
            {courses.map((c) => (
              <a href={`#${c.id}`} className="course-card" key={c.id} style={{ display: 'block' }}>
                <Icon name={c.icon} className="course-arch" />
                <h3>{c.name}</h3>
                <p>{c.fullName}</p>
                <div className="course-meta"><span>⏰ {c.duration}</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory-100)', paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Course Details</div>
              <h2>What each program covers</h2>
            </div>
          </div>

          {courses.map((c) => (
            <div id={c.id} className="info-card mt-lg" key={c.id}>
              <h3><Icon name={c.icon} /> {c.name} — {c.fullName}</h3>
              <p>{c.summary}</p>
              <p><b>Covers:</b> {c.covers.join(', ')}.</p>
              <p><b>Duration:</b> {c.duration} &middot; <b>Eligibility:</b> {c.eligibility}.</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Common Questions</div>
            <h2>Course FAQs</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <section style={{ background: 'var(--navy-950)', paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-banner">
            <div>
              <h2>Not sure which course fits you?</h2>
              <p>Talk to a counsellor — it's free, and there's no obligation to enroll.</p>
            </div>
            <div className="actions">
              <Link to="/contact" className="btn btn-primary">Book Free Counselling</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
