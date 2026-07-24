import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { site } from '../data/siteData.js';

export default function Contact() {
  useScrollReveal('.info-card');
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Contact</div>
          <div className="eyebrow">Get in Touch</div>
          <h1>Visit us in Sector 19, Dwarka.</h1>
          <p>Drop by for a campus tour, call for quick questions, or send an enquiry below — we typically respond within one business day.</p>
        </div>
      </section>

      <section>
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">Contact Details</div>
            <h2>Reach us directly</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
              <div className="info-card">
                <h3><Icon name="pin" /> Campus Address</h3>
                <p>
                  {site.address.line1}<br />
                  {site.address.line2}<br />
                  {site.address.line3}
                </p>
              </div>
              <div className="info-card">
                <h3><Icon name="phone" /> Phone & WhatsApp</h3>
                <p>
                  <a href={site.phoneHref} style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{site.phone}</a><br />
                  <a href={site.whatsappHref} target="_blank" rel="noreferrer" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Chat on WhatsApp</a>
                </p>
              </div>
              <div className="info-card">
                <h3><Icon name="mail" /> Email</h3>
                <p><a href={`mailto:${site.email}`} style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{site.email}</a></p>
              </div>
              <div className="info-card">
                <h3><Icon name="clock" /> Office Hours</h3>
                <p>{site.hours.days}: {site.hours.time}<br />Sunday: Closed</p>
              </div>
              <div className="info-card">
                <h3><Icon name="shield" /> Affiliation</h3>
                <p>Affiliated with the {site.affiliation}.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="form-card">
              <h3 style={{ marginBottom: 6 }}>Send us an enquiry</h3>
              <p style={{ marginBottom: 24 }}>Have a question or want a callback? Fill this in and we'll get back to you.</p>
              <EnquiryForm variant="contact" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow">Find Us</div>
          <h2 style={{ marginBottom: 26 }}>Campus location</h2>
          <div className="map-block">
            <iframe src={mapSrc} loading="lazy" allowFullScreen title="Campus location map"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
