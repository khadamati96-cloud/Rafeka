import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development | تطوير المواقع',
  description: 'High-performance, secure, scalable web development solutions. حلول تطوير مواقع عالية الأداء وآمنة وقابلة للتوسع.',
  alternates: { canonical: '/services/web-development' },
  keywords: ['web development','تطوير مواقع','Rafeka','وكالة رافقة','Next.js agency'],
  openGraph: { title: 'Web Development | تطوير المواقع', description: 'High-performance web platforms with SEO, performance & security.', type: 'article' }
};

import WebDevelopmentClient from '@/app/services/web-development/WebDevelopmentClient';

export default function WebDevelopmentPage() { return <WebDevelopmentClient />; }
