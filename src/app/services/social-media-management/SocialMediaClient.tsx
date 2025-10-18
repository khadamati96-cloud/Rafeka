'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Text, Button } from '@/components/ui/BrandComponents';
import Link from 'next/link';

const SocialMediaClient: React.FC = () => {
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

  const pillars = [
    { ar:'استراتيجية محتوى أصيلة', en:'Authentic Content Strategy', tr:'Gerçek ve özgün içerik stratejisi' },
    { ar:'إدارة مجتمعات فعّالة', en:'Active Community Management', tr:'Aktif topluluk yönetimi' },
    { ar:'ابتكار تنسيقات إبداعية', en:'Creative Format Innovation', tr:'Yaratıcı format inovasyonu' },
    { ar:'جدولة ونشر متقن', en:'Precision Scheduling & Publishing', tr:'Hassas zamanlama ve yayınlama' },
    { ar:'تحليلات تفاعل فورية', en:'Real-time Engagement Analytics', tr:'Gerçek zamanlı etkileşim analitiği' },
    { ar:'عمليات تحسين مستمرة', en:'Continuous Optimization Loops', tr:'Sürekli optimizasyon döngüleri' }
  ];

  const platforms = ['Instagram','TikTok','X','LinkedIn','Facebook','YouTube','Snap','Pinterest','Threads'];

  const ops = [
    { ar:'بناء تقاويم محتوى شهرية ديناميكية', en:'Dynamic rolling monthly content calendars', tr:'Dinamik aylık içerik takvimleri' },
    { ar:'إدارة رسائل خاصة وتعليقات بسرعة', en:'Rapid DM & comment triage / response', tr:'Hızlı DM ve yorum yönetimi' },
    { ar:'تحليل سلوك الجمهور وتقسيمه', en:'Audience behavior segmentation & personas', tr:'Kitle davranışı segmentasyonu ve persona oluşturma' },
    { ar:'تنسيق الإنتاج (تصوير، مونتاج، موشن)', en:'Production coordination (shooting, editing, motion)', tr:'Prodüksiyon koordinasyonu (çekim, kurgu, motion)' },
    { ar:'اختبار صيغ وعناوين وجداول نشر', en:'Testing formats, hooks & posting cadence', tr:'Formatlar, açılış kancaları ve paylaşım ritminin test edilmesi' },
    { ar:'تقارير أداء تنفيذية قابلة للتنفيذ', en:'Actionable executive performance reports', tr:'Stratejik kararları destekleyen performans raporları' }
  ];

  const schemaContent = {
    ar: {
      name: 'إدارة السوشيال ميديا',
      description: 'إدارة شاملة لقنوات التواصل تبني محتوى أصيلاً وتحقق تفاعلاً مستداماً مع قياس دقيق للأداء.',
    },
    en: {
      name: 'Social Media Management',
      description: 'Full-funnel social media management delivering strategic content, meaningful engagement, and measurable growth.',
    },
    tr: {
      name: 'Sosyal Medya Yönetimi',
      description: 'Stratejik içerik, anlamlı etkileşim ve ölçülebilir büyüme sağlayan kapsamlı sosyal medya yönetimi.',
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
            serviceType:'SocialMediaManagement',
            provider:{ '@type':'Organization', name:'Rafeka Agency' },
            areaServed:'Worldwide',
            availableChannel:{ '@type':'ServiceChannel', serviceUrl:'/services/social-media-management' }
          })
        }}
      />
      <section style={{ padding:'clamp(3rem,6vw,5rem) var(--spacing-lg)', background:'linear-gradient(135deg, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.08) 45%, var(--bg-primary) 75%)', textAlign:'center', position:'relative' }}>
        <div style={{ maxWidth: 1000, margin:'0 auto' }}>
          <Text as='h1' size='4xl' style={{ fontWeight:'bold', fontSize:'clamp(2.25rem,5vw,3.5rem)', background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:'var(--spacing-xl)' }}>
            {t('إدارة السوشيال ميديا', 'Social Media Management', 'Sosyal Medya Yönetimi')}
          </Text>
          <Text size='xl' color='secondary' style={{ maxWidth:700, margin:'0 auto', fontSize:'clamp(1.05rem,2.2vw,1.35rem)', lineHeight:1.6 }}>
            {t('نحوّل حضورك الاجتماعي إلى محرك نمو مستدام عبر محتوى استراتيجي وتفاعل حقيقي وقياس دقيق.', 'We turn your social presence into a sustainable growth engine through strategic content, genuine interaction and sharp measurement.', 'Stratejik içerik, gerçek etkileşim ve keskin ölçümle sosyal varlığınızı sürdürülebilir bir büyüme motoruna dönüştürüyoruz.')}
          </Text>
        </div>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 15% 20%, rgba(220,38,38,0.15), transparent 60%)' }}/>
      </section>
      <section ref={ref} style={{ padding:'var(--spacing-4xl) var(--spacing-lg)', maxWidth:1200, margin:'0 auto' }}>
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('مرتكزات إدارتنا', 'Our Management Pillars', 'Yönetim Sütunlarımız')}</Text>
          <div style={{ display:'grid', gap:'var(--spacing-xl)', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))' }}>
            {pillars.map((p,i)=> (
              <div key={p.en} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', padding:'var(--spacing-xl)', borderRadius:20, transform: visible ? 'translateY(0)' : 'translateY(50px)', opacity: visible ? 1 : 0, transition:'all .8s ease', transitionDelay:`${i*0.1}s` }}>
                <Text as='h3' size='lg' style={{ fontWeight:700, marginBottom:'var(--spacing-sm)' }}>{t(p.ar, p.en, p.tr)}</Text>
                <Text size='sm' color='secondary' style={{ lineHeight:1.6 }}>{t('عنصر أساسي في تطوير الأداء المتراكم.','A critical driver in compounding channel performance.','Kanalların performansını büyüten kritik itici güç.')}</Text>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('المنصات', 'Platforms', 'Platformlar')}</Text>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', justifyContent:'center' }}>
            {platforms.map(p => <div key={p} style={{ padding:'8px 14px', background:'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(220,38,38,0.05))', border:'1px solid rgba(220,38,38,0.25)', borderRadius:40, fontSize:12, fontWeight:600 }}>{p}</div>)}
          </div>
        </div>
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('عملياتنا الأساسية', 'Our Core Operations', 'Temel Operasyonlarımız')}</Text>
          <div style={{ display:'grid', gap:'var(--spacing-xl)', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
            {ops.map((o,i)=> (
              <div key={o.en} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.09)', padding:'var(--spacing-lg)', borderRadius:18, transform: visible ? 'translateY(0)': 'translateY(40px)', opacity: visible?1:0, transition:'all .8s ease', transitionDelay:`${0.2 + i*0.08}s` }}>
                <Text size='sm' style={{ fontWeight:600 }}>{t(o.ar, o.en, o.tr)}</Text>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign:'center', marginBottom:'var(--spacing-6xl)' }}>
          <Text as='h2' size='2xl' style={{ fontWeight:700, marginBottom:'var(--spacing-lg)' }}>{t('ارفع تفاعلك وولاء جمهورك', 'Elevate your engagement & audience loyalty', 'Etkileşiminizi ve topluluk sadakatinizi yükseltin')}</Text>
          <div style={{ display:'flex', justifyContent:'center', gap:'var(--spacing-lg)', flexWrap:'wrap' }}>
            <Link href="/contact" style={{ textDecoration:'none' }}><Button variant='primary' style={{ padding:'var(--spacing-md) var(--spacing-xl)', fontWeight:600 }}>{t('تواصل معنا','Contact Us','Bizimle İletişime Geçin')}</Button></Link>
            <Link href="/services" style={{ textDecoration:'none' }}><Button variant='secondary' style={{ padding:'var(--spacing-md) var(--spacing-xl)', fontWeight:600 }}>{t('رجوع للخدمات','Back to Services','Hizmetlere Dön')}</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SocialMediaClient;
