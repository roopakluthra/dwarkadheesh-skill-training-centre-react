import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-hero" style={{ textAlign: 'center', minHeight: '60vh' }}>
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>404</div>
        <h1>Page not found.</h1>
        <p style={{ margin: '0 auto 30px' }}>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
