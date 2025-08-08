'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationKey } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // قراءة اللغة من localStorage مباشرة (بدون وميض)
  const [language, setLanguage] = useState<Language>(() => {
    // إذا كنا على الكلاينت، اقرأ من localStorage فوراً
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      return (saved === 'ar' || saved === 'en') ? saved : 'ar';
    }
    return 'ar';
  });

  // تحديث الـ HTML عند تغيير اللغة أو التحميل الأولي
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
      
      // تحديث الـ CSS custom property للـ direction
      document.documentElement.style.setProperty('--text-direction', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    // حفظ اللغة في localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    t,
    dir,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
