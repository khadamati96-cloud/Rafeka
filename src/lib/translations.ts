// ========== نظام الترجمة ==========

export type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // الهيدر
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    portfolio: 'أعمالنا',
    partnerships: 'الشراكات',
    contact: 'تواصل معنا',
    contactUs: 'تواصل معنا',
    
    // صفحة رئيسية
    mainTitle: 'رافقة',
    
    // عام
    language: 'العربية',
    switchLanguage: 'English',
  },
  en: {
    // الهيدر
    home: 'Home',
    about: 'About Us',
    services: 'Our Services',
    portfolio: 'Our Work', 
    partnerships: 'Partnerships',
    contact: 'Contact',
    contactUs: 'Contact Us',
    
    // صفحة رئيسية
    mainTitle: 'RAFEKA',
    
    // عام
    language: 'English',
    switchLanguage: 'العربية',
  },
} as const;

export type TranslationKey = keyof typeof translations.ar;
