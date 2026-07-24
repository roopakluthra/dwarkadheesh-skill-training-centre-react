import { useState } from 'react';
import { courses } from '../data/siteData.js';

const initialState = { name: '', phone: '', email: '', course: '', message: '' };

export default function EnquiryForm({ variant = 'contact' }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: variant })
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {variant === 'admission' ? (
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
            </div>
          </div>
        ) : (
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
          </div>
        )}

        {variant === 'contact' && (
          <div className="field-row">
            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
            </div>
          </div>
        )}

        {variant === 'admission' && (
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          </div>
        )}

        <div className="field">
          <label htmlFor="course">Course Interested In</label>
          <select id="course" name="course" required={variant === 'admission'} value={form.course} onChange={handleChange}>
            <option value="">{variant === 'admission' ? 'Select a course' : 'Select a course (optional)'}</option>
            {courses.map((c) => (
              <option key={c.id} value={c.name}>{c.name} — {c.fullName}</option>
            ))}
            <option>Not sure — need guidance</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="message">{variant === 'admission' ? 'Anything else we should know?' : 'Message'}</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required={variant === 'contact'}
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : variant === 'admission' ? 'Submit Application' : 'Send Enquiry'}
        </button>

        {variant === 'admission' && (
          <p className="form-note">By submitting, you agree to be contacted by our admissions team regarding your enquiry.</p>
        )}
      </form>

      <div className={`form-success${status === 'success' ? ' show' : ''}`}>
        {variant === 'admission'
          ? 'Thank you! Your application has been received — our admissions team will contact you shortly.'
          : "Thanks for reaching out! We'll get back to you within one business day."}
      </div>

      {status === 'error' && (
        <div className="form-success show" style={{ background: '#fbdada', borderColor: '#e58a8a' }}>
          Something went wrong sending your enquiry. Please call or WhatsApp us directly, or try again.
        </div>
      )}
    </>
  );
}
