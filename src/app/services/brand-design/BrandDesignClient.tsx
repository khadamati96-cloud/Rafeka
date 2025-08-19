'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Text, Button } from '@/components/ui/BrandComponents';
import Link from 'next/link';

const BrandDesignClient: React.FC = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: .2 });
    if (ref.current) obs.observe(ref.current); return () => obs.disconnect();
  }, []);
  const t = (ar: string, en: string) => language === 'ar' ? ar : en;

  const layers = [
    t('صياغة جوهر العلامة وقيمها', 'Brand essence & values articulation'),
    t('استكشاف هوية مرئية متعددة الاتجاهات', 'Multi-direction visual identity exploration'),
    t('هندسة نظام شعارات مرن', 'Flexible logo system engineering'),
    t('لوحة ألوان متوازنة عالية التباين', 'Balanced, high-contrast color system'),
    t('توصيف حوكمة الخطوط والطباعة', 'Typographic hierarchy & governance'),
    t('حركيات وهوية تفاعلية اختيارية', 'Motion & interactive identity (optional)')
  ];

  const deliverables = [
    t('دليل استخدام الهوية كامل','Comprehensive brand usage guidelines'),
    t('شعارات بكافة الصيغ والأحجام','Logo assets in all formats & sizes'),
    t('نظام ألوان أساسي وثانوي','Primary & secondary color palette system'),
    t('مكتبة أنماط واستخدامات','Pattern & application library'),
    t('قوالب جاهزة (عرض / اجتماعي)','Ready-to-use templates (deck & social)'),
    t('مواصفات رقمية للطباعة والشاشات','Technical specs for print & digital')
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context':'https://schema.org',
            '@type':'Service',
            name:'Brand Design',
            alternateName:'تصميم الهوية البصرية',
            serviceType:'BrandIdentityDesign',
            provider:{ '@type':'Organization', name:'Rafeka Agency' },
            areaServed:'Worldwide',
            availableChannel:{ '@type':'ServiceChannel', serviceUrl:'/services/brand-design' }
          })
        }}
      />
      <section style={{ padding:'clamp(3rem,6vw,5rem) var(--spacing-lg)', background:'linear-gradient(135deg, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.08) 45%, var(--bg-primary) 75%)', textAlign:'center', position:'relative' }}>
        <div style={{ maxWidth: 1000, margin:'0 auto' }}>
          <Text as='h1' size='4xl' style={{ fontWeight:'bold', fontSize:'clamp(2.25rem,5vw,3.5rem)', background:'linear-gradient(135deg,var(--text-primary),var(--brand-red))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:'var(--spacing-xl)' }}>
            {t('تصميم الهوية البصرية', 'Brand Design')}
          </Text>
          <Text size='xl' color='secondary' style={{ maxWidth:700, margin:'0 auto', fontSize:'clamp(1.05rem,2.2vw,1.35rem)', lineHeight:1.6 }}>
            {t('نبني أنظمة هوية متسقة، مرنة، مميزة وقابلة للتوسع تدفع الإدراك وتُسرّع الثقة بالسوق.', 'We build consistent, flexible & distinctive identity systems that accelerate perception & market trust.')}
          </Text>
        </div>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 15% 20%, rgba(220,38,38,0.15), transparent 60%)' }}/>
      </section>
      <section ref={ref} style={{ padding:'var(--spacing-4xl) var(--spacing-lg)', maxWidth:1200, margin:'0 auto' }}>
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--text-primary),var(--brand-red))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('طبقات بناء الهوية', 'Identity Construction Layers')}</Text>
          <div style={{ display:'grid', gap:'var(--spacing-xl)', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))' }}>
            {layers.map((p,i)=> (
              <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', padding:'var(--spacing-xl)', borderRadius:20, transform: visible ? 'translateY(0)' : 'translateY(50px)', opacity: visible ? 1 : 0, transition:'all .8s ease', transitionDelay:`${i*0.1}s` }}>
                <Text as='h3' size='lg' style={{ fontWeight:700, marginBottom:'var(--spacing-sm)' }}>{p}</Text>
                <Text size='sm' color='secondary' style={{ lineHeight:1.6 }}>{t('عنصر جوهري يرسّخ هوية فريدة متماسكة.','Foundational element reinforcing a cohesive unique identity.')}</Text>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--text-primary),var(--brand-red))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('المخرجات الرئيسية', 'Key Deliverables')}</Text>
          <div style={{ display:'grid', gap:'var(--spacing-xl)', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
            {deliverables.map((o,i)=> (
              <div key={i} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.09)', padding:'var(--spacing-lg)', borderRadius:18, transform: visible ? 'translateY(0)': 'translateY(40px)', opacity: visible?1:0, transition:'all .8s ease', transitionDelay:`${0.2 + i*0.08}s` }}>
                <Text size='sm' style={{ fontWeight:600 }}>{o}</Text>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign:'center', marginBottom:'var(--spacing-6xl)' }}>
          <Text as='h2' size='2xl' style={{ fontWeight:700, marginBottom:'var(--spacing-lg)' }}>{t('لنبتكر هوية تنمو معك', 'Let’s craft a brand identity that scales')}</Text>
          <div style={{ display:'flex', justifyContent:'center', gap:'var(--spacing-lg)', flexWrap:'wrap' }}>
            <Link href="/#contact" style={{ textDecoration:'none' }}><Button variant='primary' style={{ padding:'var(--spacing-md) var(--spacing-xl)', fontWeight:600 }}>{t('ابدأ مشروعك','Start Your Project')}</Button></Link>
            <Link href="/services" style={{ textDecoration:'none' }}><Button variant='secondary' style={{ padding:'var(--spacing-md) var(--spacing-xl)', fontWeight:600 }}>{t('رجوع للخدمات','Back to Services')}</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandDesignClient;
