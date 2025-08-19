import { MetadataRoute } from 'next';
import { siteBaseUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const base = siteBaseUrl.replace(/\/$/, '');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/private']
    },
    sitemap: base + '/sitemap.xml'
  };
}
