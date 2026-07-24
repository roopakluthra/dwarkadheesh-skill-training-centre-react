import { useState, useRef } from 'react';

function FaqItem({ q, a, isOpen, onToggle }) {
  const ref = useRef(null);
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={isOpen}>
        {q}
        <span className="plus">+</span>
      </button>
      <div
        className="faq-a"
        ref={ref}
        style={{ maxHeight: isOpen && ref.current ? ref.current.scrollHeight + 'px' : isOpen ? '400px' : '0' }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      {items.map((item, i) => (
        <FaqItem
          key={i}
          q={item.q}
          a={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
