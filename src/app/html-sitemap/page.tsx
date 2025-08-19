import type { Metadata } from 'next';
import HtmlSitemapClient from '@/app/html-sitemap/HtmlSitemapClient';

export const metadata: Metadata = {
  title: 'خريطة HTML | HTML Sitemap',
  description: 'خريطة HTML لجميع صفحات موقع وكالة رافقة (Rafeka Agency HTML sitemap).',
  alternates: { canonical: '/html-sitemap' }
};

export default function HtmlSitemapPage() { return <HtmlSitemapClient />; }
