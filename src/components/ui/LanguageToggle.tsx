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
      🌐
    </button>
  );
};

export default LanguageToggle;

