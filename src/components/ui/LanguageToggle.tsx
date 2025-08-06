'use client';

import React from 'react';
import { useLanguage } from '../../providers/LanguageProvider';
import { useHoverEffect } from './NavigationComponents';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const hoverProps = useHoverEffect(
    {
      cursor: 'pointer',
      padding: 'var(--spacing-sm)',
      borderRadius: 'var(--radius-md)',
      backgroundColor: 'transparent',
      transition: 'all var(--transition-normal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      border: 'none',
    },
    {
      backgroundColor: 'var(--bg-secondary)',
      transform: 'translateY(-1px)',
    }
  );

  return (
    <button
      onClick={toggleLanguage}
      {...hoverProps}
      style={{
        ...hoverProps.style,
        color: 'var(--text-primary)',
      }}
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="var(--text-primary)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          stroke="var(--text-primary)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M2 12h20"
          stroke="var(--text-primary)"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default LanguageToggle;

