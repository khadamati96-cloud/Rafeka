'use client';
import Link from 'next/link';
import { LanguageProvider, useLanguage } from '@/providers/LanguageProvider';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { Text, Button } from '@/components/ui/BrandComponents';

function Inner() {
  const { language } = useLanguage();
  const ar = language === 'ar';
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Header />
      <main style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'var(--spacing-4xl) var(--spacing-lg)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 30% 40%, rgba(220,38,38,0.10), transparent 70%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:780, textAlign:'center', position:'relative', zIndex:2 }}>
          <Text as='h1' size='4xl' style={{ fontWeight:'800', fontSize:'clamp(3rem,7vw,5rem)', marginBottom:'var(--spacing-lg)', background:'linear-gradient(135deg,var(--text-primary),var(--brand-red))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>404</Text>
          <Text as='h2' size='2xl' style={{ fontWeight:700, marginBottom:'var(--spacing-lg)' }}>
            {ar ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </Text>
          <Text size='lg' color='secondary' style={{ maxWidth:620, margin:'0 auto var(--spacing-3xl)', lineHeight:1.7 }}>
            {ar ? 'يبدو أنك وصلت إلى رابط غير متاح. تحقّق من العنوان أو ارجع للصفحات الرئيسية.' : "It looks like you reached a URL that doesn't exist. Check the address or return to a core section."}
          </Text>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'var(--spacing-md)', justifyContent:'center' }}>
            <Link href='/'><Button variant='primary'>{ar ? 'العودة للرئيسية' : 'Back Home'}</Button></Link>
            <Link href='/services'><Button variant='secondary'>{ar ? 'كل الخدمات' : 'All Services'}</Button></Link>
            <a href='https://wa.me/905380330087?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9' target='_blank' rel='noopener noreferrer'>
              <Button variant='secondary'>{ar ? 'تواصل واتساب' : 'WhatsApp'}</Button>
            </a>
          </div>
          <div style={{ marginTop:'var(--spacing-4xl)', opacity:.7, fontSize:12 }}>
            <code style={{ fontFamily:'monospace' }}>{ar ? 'رمز الخطأ: 404 • مسار غير معروف' : 'Error code: 404 • Unknown path'}</code>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function NotFoundClient(){ return <LanguageProvider><Inner /></LanguageProvider>; }
