import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { site } from '../data/siteData.js';

export default function Admissions() {
  useScrollReveal('.info-card, .timeline-item');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Admissions</div>
          <div className="eyebrow">Join a Batch</div>
          <h1>Getting started is simple.</h1>
          <p>Four steps, most of which can be done in a single visit or call. Ask our counsellor for the next batch start date.</p>
        </div>
      </section>

      <section>
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">Admission Process</div>
            <h2>From enquiry to your first class</h2>
            <div className="timeline mt-lg">
              <div className="timeline-item">
                <span className="num">STEP 01</span>
                <h3>Free counselling session</h3>
                <p>Tell us your goals and background — we'll recommend the right course and batch timing. No cost, no obligation.</p>
              </div>
              <div className="timeline-item">
                <span className="num">STEP 02</span>
                <h3>Registration</h3>
                <p>Fill out the admission form and submit basic documents (ID proof, address proof, passport photos, last qualification marksheet).</p>
              </div>
              <div className="timeline-item">
                <span className="num">STEP 03</span>
                <h3>Fee payment</h3>
                <p>Pay the course fee — ask about EMI options. Payment can be made by cash, UPI, card, or bank transfer.</p>
              </div>
              <div className="timeline-item">
                <span className="num">STEP 04</span>
                <h3>Orientation & first class</h3>
                <p>Meet your trainer, get your study materials and lab access, and begin your course on the scheduled start date.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="info-card">
              <h3><Icon name="check" /> Eligibility & Documents</h3>
              <p><b>General eligibility:</b> Class 10/12 pass or equivalent for most courses (CCC and select short courses are open to all education levels — check individual course pages).</p>
              <p><b>Documents required:</b></p>
              <ul style={{ listStyle: 'disc', paddingLeft: 20, color: 'var(--ink-600)' }}>
                <li>Government-issued photo ID (Aadhaar / Passport / Voter ID)</li>
                <li>Address proof</li>
                <li>2 passport-size photographs</li>
                <li>Last qualification marksheet (photocopy)</li>
              </ul>
            </div>
            <div className="info-card mt-lg">
              <h3><Icon name="card" /> Fees & Payment</h3>
              <p>
                See course durations and content on the <Link to="/courses" style={{ color: 'var(--navy-800)', fontWeight: 700, textDecoration: 'underline' }}>Courses page</Link>.
                For current fees and EMI plans, call or WhatsApp us at <a href={site.phoneHref} style={{ fontWeight: 700 }}>{site.phone}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory-100)' }}>
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Start Your Application</div>
            <h2>Admission enquiry form</h2>
          </div>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div className="form-card">
              <EnquiryForm variant="admission" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
