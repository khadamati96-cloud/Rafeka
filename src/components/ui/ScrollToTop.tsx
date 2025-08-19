'use client';
import React, { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(y > 400);
      setAtBottom(y > h - 200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="أعلى / Up"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        insetInlineEnd: 'clamp(0.75rem, 1.2vw, 1.25rem)',
        bottom: 'clamp(1rem,2.5vw,2rem)',
        zIndex: 1100,
        width: 54,
        height: 54,
        borderRadius: 18,
        border: '1px solid rgba(255,255,255,0.12)',
        background: 'linear-gradient(135deg, rgba(220,38,38,0.9), rgba(185,28,28,0.85))',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 10px 30px -5px rgba(220,38,38,0.45), 0 0 0 1px rgba(255,255,255,0.05)',
        color: '#fff',
        transition: 'transform .35s ease, box-shadow .35s ease',
        transform: atBottom ? 'scale(1.08)' : 'scale(1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.12)';
        e.currentTarget.style.boxShadow = '0 12px 34px -4px rgba(220,38,38,0.55), 0 0 0 1px rgba(255,255,255,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = atBottom ? 'scale(1.08)' : 'scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(220,38,38,0.45), 0 0 0 1px rgba(255,255,255,0.05)';
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>
        <path d="M12 19V5" />
        <path d="M6 11L12 5L18 11" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
