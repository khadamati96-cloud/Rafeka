'use client';

import React, { ChangeEvent } from 'react';
import { useLanguage } from '../../providers/LanguageProvider';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, languages, isLoaded } = useLanguage();

  const labels: Record<typeof language, string> = {
    ar: 'العربية',
    en: 'English',
    tr: 'Türkçe',
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as typeof language);
  };

  // Placeholder أثناء التحميل
  if (!isLoaded) {
    return (
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'transparent',
      }} />
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 var(--spacing-sm)',
        borderRadius: 'var(--radius-md)',
        backgroundColor: '#111',
        border: '1px solid rgba(255,255,255,0.12)',
      }}
    >
      <select
        value={language}
        onChange={handleChange}
        aria-label="Change language"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: '#fff',
          fontFamily: 'inherit',
          fontSize: 'var(--text-sm)',
          padding: 'var(--spacing-sm)',
          cursor: 'pointer',
          outline: 'none',
          direction: 'ltr',
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
        }}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang} style={{ color: '#000' }}>
            {labels[lang] ?? lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageToggle;

