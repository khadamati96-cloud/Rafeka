import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Digital Marketing | التسويق الرقمي',
  description: 'Data-driven digital marketing, SEO, paid media, conversion optimization. تسويق رقمي قائم على البيانات وتحسين محركات البحث والإعلانات.',
  alternates: { canonical: '/services/digital-marketing' },
  keywords: ['digital marketing','التسويق الرقمي','SEO','Rafeka','PPC agency'],
  openGraph: { title: 'Digital Marketing | التسويق الرقمي', description: 'Full-funnel growth marketing & advanced analytics.', type: 'article' }
};
import DigitalMarketingClient from '@/app/services/digital-marketing/DigitalMarketingClient';
export default function DigitalMarketingPage(){ return <DigitalMarketingClient />; }
