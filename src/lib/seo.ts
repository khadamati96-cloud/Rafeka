export const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rafeka.com';

export const defaultKeywords = [
  'Rafeka','Rafeka Agency','وكالة رافقة','تطوير مواقع','تسويق رقمي','تصميم هوية','ذكاء اصطناعي','إدارة سوشيال ميديا',
  'web development agency','digital marketing agency','branding','AI solutions','social media management'
];

export interface PageSEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  lastMod?: string;
}

export const servicePages: PageSEOConfig[] = [
  {
    title: 'Web Development | تطوير المواقع',
    description: 'High-performance, secure, scalable web development solutions. حلول تطوير مواقع عالية الأداء وآمنة وقابلة للتوسع.',
    path: '/services/web-development'
  },
  {
    title: 'Digital Marketing | التسويق الرقمي',
    description: 'Data-driven digital marketing & growth strategies. استراتيجيات تسويق رقمية مدعومة بالبيانات.',
    path: '/services/digital-marketing'
  },
  {
    title: 'Social Media Management | إدارة السوشيال ميديا',
    description: 'Social media management, content & engagement. إدارة السوشيال ميديا وصناعة محتوى وتفاعل.',
    path: '/services/social-media-management'
  },
  {
    title: 'Brand Design | تصميم الهوية',
    description: 'Brand identity design & visual systems. تصميم الهوية البصرية وبناء نظام مرئي متكامل.',
    path: '/services/brand-design'
  }
];
