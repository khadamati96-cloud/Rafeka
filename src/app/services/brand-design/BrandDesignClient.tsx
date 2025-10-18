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
  const t = (ar: string, en: string, tr?: string) => {
    if (language === 'ar') return ar;
    if (language === 'tr') return tr ?? en;
    return en;
  };

  const layers = [
    { ar:'صياغة جوهر العلامة وقيمها', en:'Brand essence & values articulation', tr:'Marka özü ve değerlerinin tanımlanması' },
    { ar:'استكشاف هوية مرئية متعددة الاتجاهات', en:'Multi-direction visual identity exploration', tr:'Çok yönlü görsel kimlik keşfi' },
    { ar:'هندسة نظام شعارات مرن', en:'Flexible logo system engineering', tr:'Esnek logo sistemi tasarımı' },
    { ar:'لوحة ألوان متوازنة عالية التباين', en:'Balanced, high-contrast color system', tr:'Dengeli ve yüksek kontrastlı renk sistemi' },
    { ar:'توصيف حوكمة الخطوط والطباعة', en:'Typographic hierarchy & governance', tr:'Tipografik hiyerarşi ve kullanım kuralları' },
    { ar:'حركيات وهوية تفاعلية اختيارية', en:'Motion & interactive identity (optional)', tr:'Hareketli ve etkileşimli kimlik (opsiyonel)' }
  ];

  const deliverables = [
    { ar:'دليل استخدام الهوية كامل', en:'Comprehensive brand usage guidelines', tr:'Kapsamlı marka kullanım kılavuzu' },
    { ar:'شعارات بكافة الصيغ والأحجام', en:'Logo assets in all formats & sizes', tr:'Tüm format ve boyutlarda logo dosyaları' },
    { ar:'نظام ألوان أساسي وثانوي', en:'Primary & secondary color palette system', tr:'Birincil ve ikincil renk paleti sistemi' },
    { ar:'مكتبة أنماط واستخدامات', en:'Pattern & application library', tr:'Desen ve uygulama kütüphanesi' },
    { ar:'قوالب جاهزة (عرض / اجتماعي)', en:'Ready-to-use templates (deck & social)', tr:'Hazır sunum ve sosyal medya şablonları' },
    { ar:'مواصفات رقمية للطباعة والشاشات', en:'Technical specs for print & digital', tr:'Baskı ve dijital için teknik spesifikasyonlar' }
  ];

  const schemaContent = {
    ar: {
      name: 'تصميم الهوية البصرية',
      description: 'نبتكر أنظمة هوية متكاملة ومميزة تدعم الثقة وتحقق حضوراً متسقاً وقابلاً للتوسع.',
    },
    en: {
      name: 'Brand Design',
      description: 'We craft distinctive, scalable visual identity systems that build trust and consistent market presence.',
    },
    tr: {
      name: 'Marka Tasarımı',
      description: 'Güven oluşturan ve tutarlı pazar varlığı sağlayan ayırt edici ve ölçeklenebilir görsel kimlik sistemleri tasarlıyoruz.',
    },
  } as const;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context':'https://schema.org',
            '@type':'Service',
            name: schemaContent[language].name,
            alternateName: [schemaContent.ar.name, schemaContent.tr.name],
            description: schemaContent[language].description,
            inLanguage: language,
            serviceType:'BrandIdentityDesign',
            provider:{ '@type':'Organization', name:'Rafeka Agency' },
            areaServed:'Worldwide',
            availableChannel:{ '@type':'ServiceChannel', serviceUrl:'/services/brand-design' }
          })
        }}
      />
      <section style={{ padding:'clamp(3rem,6vw,5rem) var(--spacing-lg)', background:'linear-gradient(135deg, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.08) 45%, var(--bg-primary) 75%)', textAlign:'center', position:'relative' }}>
        <div style={{ maxWidth: 1000, margin:'0 auto' }}>
          <Text as='h1' size='4xl' style={{ fontWeight:'bold', fontSize:'clamp(2.25rem,5vw,3.5rem)', background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:'var(--spacing-xl)' }}>
            {t('تصميم الهوية البصرية', 'Brand Design', 'Marka Tasarımı')}
          </Text>
          <Text size='xl' color='secondary' style={{ maxWidth:700, margin:'0 auto', fontSize:'clamp(1.05rem,2.2vw,1.35rem)', lineHeight:1.6 }}>
            {t('نبني أنظمة هوية متسقة، مرنة، مميزة وقابلة للتوسع تدفع الإدراك وتُسرّع الثقة بالسوق.', 'We build consistent, flexible & distinctive identity systems that accelerate perception & market trust.', 'Algıyı hızlandıran ve pazarda güven inşa eden tutarlı, esnek ve ayırt edici kimlik sistemleri tasarlıyoruz.')}
          </Text>
        </div>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 15% 20%, rgba(220,38,38,0.15), transparent 60%)' }}/>
      </section>
      <section ref={ref} style={{ padding:'var(--spacing-4xl) var(--spacing-lg)', maxWidth:1200, margin:'0 auto' }}>
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('طبقات بناء الهوية', 'Identity Construction Layers', 'Kimlik Oluşturma Katmanları')}</Text>
          <div style={{ display:'grid', gap:'var(--spacing-xl)', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))' }}>
            {layers.map((p,i)=> (
              <div key={p.en} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', padding:'var(--spacing-xl)', borderRadius:20, transform: visible ? 'translateY(0)' : 'translateY(50px)', opacity: visible ? 1 : 0, transition:'all .8s ease', transitionDelay:`${i*0.1}s` }}>
                <Text as='h3' size='lg' style={{ fontWeight:700, marginBottom:'var(--spacing-sm)' }}>{t(p.ar, p.en, p.tr)}</Text>
                <Text size='sm' color='secondary' style={{ lineHeight:1.6 }}>{t('عنصر جوهري يرسّخ هوية فريدة متماسكة.','Foundational element reinforcing a cohesive unique identity.','Tutarlı ve özgün bir kimlik oluşturan temel katman.')}</Text>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('المخرجات الرئيسية', 'Key Deliverables', 'Ana Teslimatlar')}</Text>
          <div style={{ display:'grid', gap:'var(--spacing-xl)', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
            {deliverables.map((o,i)=> (
              <div key={o.en} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.09)', padding:'var(--spacing-lg)', borderRadius:18, transform: visible ? 'translateY(0)': 'translateY(40px)', opacity: visible?1:0, transition:'all .8s ease', transitionDelay:`${0.2 + i*0.08}s` }}>
                <Text size='sm' style={{ fontWeight:600 }}>{t(o.ar, o.en, o.tr)}</Text>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign:'center', marginBottom:'var(--spacing-6xl)' }}>
          <Text as='h2' size='2xl' style={{ fontWeight:700, marginBottom:'var(--spacing-lg)' }}>{t('لنبتكر هوية تنمو معك', 'Let’s craft a brand identity that scales', 'Birlikte büyüyen bir marka kimliği oluşturalım')}</Text>
          <div style={{ display:'flex', justifyContent:'center', gap:'var(--spacing-lg)', flexWrap:'wrap' }}>
            <Link href="/contact" style={{ textDecoration:'none' }}><Button variant='primary' style={{ padding:'var(--spacing-md) var(--spacing-xl)', fontWeight:600 }}>{t('ابدأ مشروعك','Start Your Project','Projenizi Başlatın')}</Button></Link>
            <Link href="/services" style={{ textDecoration:'none' }}><Button variant='secondary' style={{ padding:'var(--spacing-md) var(--spacing-xl)', fontWeight:600 }}>{t('رجوع للخدمات','Back to Services','Hizmetlere Dön')}</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandDesignClient;
