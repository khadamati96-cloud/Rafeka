import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Brand Design | تصميم الهوية البصرية',
  description: 'Distinctive brand identity design: logo systems, typography, color, guidelines. بناء هوية بصرية قوية ومتكاملة.',
  alternates: { canonical: '/services/brand-design' },
  keywords: ['brand design','تصميم الهوية','visual identity','Rafeka'],
  openGraph: { title: 'Brand Design | تصميم الهوية البصرية', description: 'Strategic, scalable & distinctive brand identity systems.', type: 'article' }
};
import BrandDesignClient from './BrandDesignClient';
export default function BrandDesignPage(){ return <BrandDesignClient />; }
