'use client';
import Link from 'next/link';
import { LanguageProvider, useLanguage } from '@/providers/LanguageProvider';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { Text } from '@/components/ui/BrandComponents';

const links = [
  { path: '/', ar: 'الرئيسية', en: 'Home' },
  { path: '/services', ar: 'الخدمات', en: 'Services' },
  { path: '/services/web-development', ar: 'تطوير المواقع', en: 'Web Development' },
  { path: '/services/digital-marketing', ar: 'التسويق الرقمي', en: 'Digital Marketing' },
  { path: '/services/social-media-management', ar: 'إدارة السوشيال ميديا', en: 'Social Media Management' },
  { path: '/services/brand-design', ar: 'تصميم الهوية', en: 'Brand Design' },
  { path: '/html-sitemap', ar: 'خريطة HTML', en: 'HTML Sitemap' },
];

function Inner() {
  const { language } = useLanguage();
  const ar = language === 'ar';
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Header />
      <main style={{ flex:1, padding:'var(--spacing-4xl) var(--spacing-lg)', maxWidth:1200, margin:'0 auto' }}>
  <Text as='h1' size='3xl' style={{ fontWeight:'bold', marginBottom:'var(--spacing-2xl)', background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
          {ar ? 'خريطة الموقع (HTML)' : 'HTML Sitemap'}
        </Text>
        <Text size='lg' color='secondary' style={{ marginBottom:'var(--spacing-3xl)', lineHeight:1.7 }}>
          {ar ? 'هذه الصفحة تساعد محركات البحث والمستخدمين على استعراض جميع الروابط الرئيسية بسهولة.' : 'This page helps users and crawlers quickly see core site links.'}
        </Text>
        <ul style={{ listStyle:'none', padding:0, margin:0, columns: 2, columnGap:'var(--spacing-2xl)' }}>
          {links.map(l => (
            <li key={l.path} style={{ breakInside:'avoid', marginBottom:'var(--spacing-lg)' }}>
              <Link href={l.path} style={{ textDecoration:'none', color:'var(--text-primary)', fontWeight:600 }}>
                {ar ? l.ar : l.en}
              </Link>
              <div style={{ fontSize:12, opacity:.6, marginTop:4 }} dir='ltr'>
                {l.path}
              </div>
            </li>
          ))}
        </ul>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context':'https://schema.org',
              '@type':'SiteNavigationElement',
              name: links.map(l => l.en),
              url: links.map(l => l.path)
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default function HtmlSitemapClient(){
  return <LanguageProvider><Inner /></LanguageProvider>;
}
