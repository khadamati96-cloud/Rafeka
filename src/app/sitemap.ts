import { MetadataRoute } from 'next';
import { siteBaseUrl, servicePages } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteBaseUrl.replace(/\/$/, '');
  const now = new Date().toISOString();
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/services'
  ].map(path => ({
    url: base + path,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8
  }));

  const services: MetadataRoute.Sitemap = servicePages.map(p => ({
    url: base + p.path,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...staticPages, ...services];
}
