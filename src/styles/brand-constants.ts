// ========== ثوابت الهوية البصرية لرافقة ==========

export const BRAND_COLORS = {
  // الألوان الأساسية
  red: '#DC2626',
  redDark: '#B91C1C',
  redLight: '#EF4444',
  
  // الخلفيات
  bgPrimary: '#0A0A0A',
  bgSecondary: '#1A1A1A',
  bgCard: '#262626',
  
  // النصوص
  textPrimary: '#FFFFFF',
  textSecondary: '#9CA3AF',
  textMuted: '#6B7280',
  
  // الحدود
  border: '#374151',
  borderLight: '#4B5563',
} as const;

export const BRAND_FONTS = {
  arabic: "'ExpoArabic', 'Cairo', 'Noto Sans Arabic', Arial, sans-serif",
  english: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
} as const;

export const BRAND_SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
} as const;

export const BRAND_TEXT_SIZES = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
} as const;

export const BRAND_RADIUS = {
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
} as const;

export const BRAND_SHADOWS = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
  md: '0 4px 6px rgba(0, 0, 0, 0.3)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.4)',
} as const;

export const BRAND_TRANSITIONS = {
  fast: '0.15s ease-in-out',
  normal: '0.3s ease-in-out',
  slow: '0.5s ease-in-out',
} as const;

// الكلاسات الجاهزة
export const BRAND_CLASSES = {
  // ألوان النصوص
  textBrand: 'text-brand',
  textPrimary: 'text-primary',
  textSecondary: 'text-secondary',
  textMuted: 'text-muted',
  
  // ألوان الخلفيات
  bgBrand: 'bg-brand',
  bgPrimary: 'bg-primary',
  bgSecondary: 'bg-secondary',
  bgCard: 'bg-card',
  
  // الخطوط
  fontArabic: 'font-arabic',
  fontEnglish: 'font-english',
  
  // الأزرار
  btnPrimary: 'btn btn-primary',
  btnSecondary: 'btn btn-secondary',
  
  // التخطيط
  container: 'container',
  flex: 'flex',
  flexCol: 'flex-col',
  itemsCenter: 'items-center',
  justifyCenter: 'justify-center',
  justifyBetween: 'justify-between',
  
  // الكاردات
  card: 'card',
  
  // الشعارات
  logo: 'logo',
  logoLarge: 'logo-large',
} as const;
