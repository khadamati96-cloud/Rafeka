'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationKey } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
  dir: 'rtl' | 'ltr';
  isLoaded: boolean;
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
  const [language, setLanguage] = useState<Language>('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  // تحميل اللغة من localStorage عند التحميل
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    const initialLanguage = (saved === 'ar' || saved === 'en') ? saved : 'ar';
    setLanguage(initialLanguage);
    setIsLoaded(true);
    
    // تحديث الـ HTML
    document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = initialLanguage;
    document.documentElement.setAttribute('data-lang', initialLanguage);
    
    // تحديث الـ CSS custom property للـ direction
    document.documentElement.style.setProperty('--text-direction', initialLanguage === 'ar' ? 'rtl' : 'ltr');
  }, []);

  // تحديث الـ HTML عند تغيير اللغة
  useEffect(() => {
    if (isLoaded) {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
      document.documentElement.setAttribute('data-lang', language);
      
      // تحديث الـ CSS custom property للـ direction
      document.documentElement.style.setProperty('--text-direction', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language, isLoaded]);

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
    isLoaded,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
