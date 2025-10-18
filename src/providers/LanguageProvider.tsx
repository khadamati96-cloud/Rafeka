'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Language, translations, TranslationKey } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
  dir: 'rtl' | 'ltr';
  isLoaded: boolean;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const PAGE_TITLES: Record<string, Record<Language, string>> = {
  '/': { ar: 'الصفحة الرئيسية', en: 'Home', tr: 'Ana Sayfa' },
  '/about': { ar: 'عن رافقة', en: 'About Rafeka', tr: 'Rafeka Hakkında' },
  '/contact': { ar: 'تواصل مع رافقة', en: 'Contact Rafeka', tr: 'Rafeka ile İletişime Geçin' },
  '/services': { ar: 'خدماتنا', en: 'Our Services', tr: 'Hizmetlerimiz' },
  '/services/web-development': { ar: 'تطوير المواقع', en: 'Web Development', tr: 'Web Geliştirme' },
  '/services/digital-marketing': { ar: 'التسويق الرقمي', en: 'Digital Marketing', tr: 'Dijital Pazarlama' },
  '/services/brand-design': { ar: 'تصميم الهوية البصرية', en: 'Brand Design', tr: 'Marka Tasarımı' },
  '/services/social-media-management': { ar: 'إدارة السوشيال ميديا', en: 'Social Media Management', tr: 'Sosyal Medya Yönetimi' },
};

const TITLE_SUFFIX: Record<Language, string> = {
  ar: 'وكالة رافقة',
  en: 'Rafeka Agency',
  tr: 'Rafeka Ajansı',
};

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
  const supportedLanguages = useMemo(() => Object.keys(translations) as Language[], []);
  const pathname = usePathname();

  const applyLanguageToDocument = useCallback((lang: Language) => {
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.style.setProperty('--text-direction', direction);
  }, []);

  const updateDocumentTitle = useCallback((lang: Language, path: string | null) => {
    if (typeof document === 'undefined' || !path) {
      return;
    }

    const normalized = path === '/' ? '/' : path.replace(/\/$/, '') || '/';
    const titleMap = PAGE_TITLES[normalized];
    const suffix = TITLE_SUFFIX[lang] ?? TITLE_SUFFIX.en;
    const baseTitle = titleMap?.[lang] ?? suffix;
    document.title = `${baseTitle} | ${suffix}`;
  }, []);

  // تحميل اللغة من localStorage عند التحميل
  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const saved = localStorage.getItem('language') as Language;
    const domLang = document.documentElement.getAttribute('data-lang') as Language | null;
    const initialLanguage = supportedLanguages.includes(saved)
      ? saved
      : supportedLanguages.includes(domLang as Language)
        ? (domLang as Language)
        : 'ar';

    setLanguage(initialLanguage);
    applyLanguageToDocument(initialLanguage);
    setIsLoaded(true);
  }, [applyLanguageToDocument, supportedLanguages]);

  // تحديث الـ HTML عند تغيير اللغة
  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    applyLanguageToDocument(language);
    updateDocumentTitle(language, pathname);

    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [applyLanguageToDocument, isLoaded, language, pathname, updateDocumentTitle]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    updateDocumentTitle(language, pathname);
  }, [isLoaded, language, pathname, updateDocumentTitle]);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const currentIndex = supportedLanguages.indexOf(language);
    const nextLanguage = supportedLanguages[(currentIndex + 1) % supportedLanguages.length];
    setLanguage(nextLanguage);
  }, [language, supportedLanguages]);

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    toggleLanguage,
    t,
    dir,
    isLoaded,
    languages: supportedLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
