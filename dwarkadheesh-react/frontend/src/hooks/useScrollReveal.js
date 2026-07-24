import { useEffect } from 'react';

// Applies the same fade/slide-up reveal-on-scroll effect the original
// static site used, to any elements matching `selector` inside `root`.
export default function useScrollReveal(selector, deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!('IntersectionObserver' in window) || els.length === 0) return;

    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = `opacity .5s ease ${(i % 6) * 0.06}s, transform .5s ease ${(i % 6) * 0.06}s`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
