'use client';

import React from 'react';
import { useLanguage } from '../../providers/LanguageProvider';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      title={`Switch to ${t('switchLanguage')}`}
      style={{
        background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
        border: '1px solid var(--border-color)',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all var(--transition-normal)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: `
          0 4px 8px rgba(0, 0, 0, 0.3),
          inset 0 1px 2px rgba(255, 255, 255, 0.1),
          inset 0 -1px 2px rgba(0, 0, 0, 0.3)
        `,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
        e.currentTarget.style.boxShadow = `
          0 8px 16px rgba(220, 38, 38, 0.3),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -1px 2px rgba(0, 0, 0, 0.4),
          0 0 20px rgba(220, 38, 38, 0.2)
        `;
        e.currentTarget.style.borderColor = 'var(--brand-red)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = `
          0 4px 8px rgba(0, 0, 0, 0.3),
          inset 0 1px 2px rgba(255, 255, 255, 0.1),
          inset 0 -1px 2px rgba(0, 0, 0, 0.3)
        `;
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(1px) scale(0.98)';
        e.currentTarget.style.boxShadow = `
          0 2px 4px rgba(0, 0, 0, 0.4),
          inset 0 2px 4px rgba(0, 0, 0, 0.3)
        `;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
      }}
    >
      {/* الكرة الأرضية مع تأثير ثلاثي الأبعاد */}
      <div
        style={{
          fontSize: '22px',
          color: '#4A90E2',
          filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))',
          transform: language === 'ar' ? 'rotateY(0deg)' : 'rotateY(180deg)',
          transition: 'transform 0.6s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        🌍
      </div>
      
      {/* تأثير الإضاءة */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          left: '12px',
          width: '10px',
          height: '10px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      
      {/* نص اللغة الصغير */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '10px',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-english)',
          fontWeight: '500',
          opacity: 0,
          transition: 'opacity var(--transition-normal)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
        className="language-hint"
      >
        {language === 'ar' ? 'EN' : 'AR'}
      </div>
      
      <style jsx>{`
        button:hover .language-hint {
          opacity: 1;
        }
      `}</style>
    </button>
  );
};

export default LanguageToggle;
