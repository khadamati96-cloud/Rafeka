import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development',
  description: 'High-performance, secure, scalable web development solutions. حلول تطوير مواقع عالية الأداء وآمنة وقابلة للتوسع. Yüksek performanslı, güvenli ve ölçeklenebilir web geliştirme çözümleri.',
  alternates: { canonical: '/services/web-development' },
  keywords: ['web development','تطوير مواقع','Rafeka','وكالة رافقة','Next.js agency'],
  openGraph: { title: 'Web Development', description: 'High-performance web platforms with SEO, performance & security. منصات ويب عالية الأداء مع تحسين وأمان. SEO, performans ve güvenliğe odaklı web platformları.', type: 'article' }
};

import WebDevelopmentClient from '@/app/services/web-development/WebDevelopmentClient';

export default function WebDevelopmentPage() { return <WebDevelopmentClient />; }
