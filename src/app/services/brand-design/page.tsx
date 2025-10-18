import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Brand Design',
  description: 'Distinctive brand identity design: logo systems, typography, color, guidelines. بناء هوية بصرية قوية ومتكاملة. Ayırt edici marka kimliği tasarımı: logo sistemleri, tipografi, renk ve kılavuzlar.',
  alternates: { canonical: '/services/brand-design' },
  keywords: ['brand design','تصميم الهوية','visual identity','Rafeka'],
  openGraph: { title: 'Brand Design', description: 'Strategic, scalable & distinctive brand identity systems. أنظمة هوية استراتيجية وقابلة للتوسع ومميزة. Stratejik, ölçeklenebilir ve ayırt edici marka kimliği sistemleri.', type: 'article' }
};
import BrandDesignClient from './BrandDesignClient';
export default function BrandDesignPage(){ return <BrandDesignClient />; }
