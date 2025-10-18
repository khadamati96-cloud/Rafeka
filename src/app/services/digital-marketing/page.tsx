import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Digital Marketing',
  description: 'Data-driven digital marketing, SEO, paid media, conversion optimization. تسويق رقمي قائم على البيانات وتحسين محركات البحث والإعلانات. Veri odaklı dijital pazarlama, SEO, ücretli medya ve dönüşüm optimizasyonu.',
  alternates: { canonical: '/services/digital-marketing' },
  keywords: ['digital marketing','التسويق الرقمي','SEO','Rafeka','PPC agency'],
  openGraph: { title: 'Digital Marketing', description: 'Full-funnel growth marketing & advanced analytics. تسويق نمو شامل وتحليلات متقدمة. Uçtan uca büyüme pazarlaması ve ileri analitik.', type: 'article' }
};
import DigitalMarketingClient from '@/app/services/digital-marketing/DigitalMarketingClient';
export default function DigitalMarketingPage(){ return <DigitalMarketingClient />; }
