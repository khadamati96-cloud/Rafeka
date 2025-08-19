'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Text, Button } from '@/components/ui/BrandComponents';
import Link from 'next/link';

const BrandContent: React.FC = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: .2 });
    if (ref.current) obs.observe(ref.current); return () => obs.disconnect();
  }, []);
  const t = (ar: string, en: string) => language === 'ar' ? ar : en;

  const pillars = [
    t('منهجية بحث معمقة', 'Deep Discovery Methodology'),
    t('هندسة هوية متسقة', 'Consistent Identity Architecture'),
    t('نظام بصري قابل للتوسع', 'Scalable Visual System'),
    t('لغة ورسائل واضحة', 'Clear Messaging & Tone'),
    t('حماية ومرونة العلامة', 'Brand Protection & Flexibility'),
    t('أدلة تنفيذ شاملة', 'Comprehensive Implementation Guides')
  ];

  const deliverables = [
    t('الشعار والتصاميم الثانوية','Primary & secondary logos'),
    t('نظام الألوان','Color system & accessibility contrast'),
    t('الخطوط والطباعة','Typography scale & usage'),
    t('أيقونات ورسومات','Iconography & illustration style'),
    t('نمط الصور والمعالجة','Imagery direction & treatments'),
    t('مكونات UI أساسية','Core UI component primitives'),
    t('نبرة الصوت والكتابة','Voice & messaging matrix'),
    t('دليل استخدام PDF/ويب','Interactive brand guidelines (PDF / web)')
  ];

  const process = [
    t('الاستكشاف والتحليل','Discovery & research'),
    t('الاستراتيجية والتموضع','Positioning & strategy'),
    t('الاتجاهات الإبداعية','Creative directions'),
    t('التطوير والتنقيح','Development & refinement'),
    t('الهندسة النظامية','System architecture'),
    t('التوثيق وإطلاق الأصول','Documentation & asset launch')
  ];

  return (
    <main>
      <section style={{ padding:'clamp(3rem,6vw,5rem) var(--spacing-lg)', background:'linear-gradient(135deg, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.08) 45%, var(--bg-primary) 75%)', textAlign:'center', position:'relative' }}>
        <div style={{ maxWidth: 1000, margin:'0 auto' }}>
          <Text as='h1' size='4xl' style={{ fontWeight:'bold', fontSize:'clamp(2.25rem,5vw,3.5rem)', background:'linear-gradient(135deg,var(--text-primary) 0%,var(--brand-red) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:'var(--spacing-xl)' }}>
            {t('تصميم وتطوير الهوية', 'Brand Design & Development')}
          </Text>
          <Text size='xl' color='secondary' style={{ maxWidth:700, margin:'0 auto', fontSize:'clamp(1.05rem,2.2vw,1.35rem)', lineHeight:1.6 }}>
            {t('نبني هويات محمية، أنظمة تصميم قابلة للتوسع، ورسائل متسقة تدفع القيمة وتخلق ثقة طويلة الأمد.', 'We craft defensible identities, scalable design systems and coherent messaging that drive value and long-term trust.')}
          </Text>
        </div>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 15% 22%, rgba(220,38,38,0.16), transparent 62%)' }}/>
      </section>
      <section ref={ref} style={{ padding:'var(--spacing-4xl) var(--spacing-lg)', maxWidth:1200, margin:'0 auto' }}>
        {/* Pillars */}
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--text-primary),var(--brand-purple,var(--text-secondary)))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('مرتكزات المنهج', 'Foundational Pillars')}</Text>
          <div style={{ display:'grid', gap:'var(--spacing-xl)', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))' }}>
            {pillars.map((p,i)=> (
              <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', padding:'var(--spacing-xl)', borderRadius:20, transform: visible ? 'translateY(0)' : 'translateY(50px)', opacity: visible ? 1 : 0, transition:'all .8s ease', transitionDelay:`${i*0.1}s` }}>
                <Text as='h3' size='lg' style={{ fontWeight:700, marginBottom:'var(--spacing-sm)' }}>{p}</Text>
                <Text size='sm' color='secondary' style={{ lineHeight:1.6 }}>{t('كل عنصر مبني ليتكامل مع النظام.', 'Each piece is engineered to integrate cohesively.')}</Text>
              </div>
            ))}
          </div>
        </div>
        {/* Deliverables */}
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--text-primary),var(--brand-purple,var(--text-secondary)))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('المخرجات الأساسية', 'Key Deliverables')}</Text>
          <div style={{ display:'grid', gap:'var(--spacing-xl)', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
            {deliverables.map((d,i)=> (
              <div key={i} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.09)', padding:'var(--spacing-lg)', borderRadius:18, transform: visible ? 'translateY(0)': 'translateY(40px)', opacity: visible?1:0, transition:'all .8s ease', transitionDelay:`${0.15 + i*0.08}s` }}>
                <Text size='sm' style={{ fontWeight:600 }}>{d}</Text>
              </div>
            ))}
          </div>
        </div>
        {/* Process */}
        <div style={{ marginBottom:'var(--spacing-5xl)' }}>
          <Text as='h2' size='3xl' style={{ fontWeight:'bold', textAlign:'center', marginBottom:'var(--spacing-3xl)', background:'linear-gradient(135deg,var(--text-primary),var(--brand-purple,var(--text-secondary)))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{t('منهجية العمل', 'Process Framework')}</Text>
          <ol style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:'var(--spacing-xl)', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
            {process.map((s,i)=> {
              const delay = `${i*0.1}s`;
              return (
                <li
                  key={i}
                  style={{
                    background:'rgba(255,255,255,0.04)',
                    border:'1px solid rgba(255,255,255,0.1)',
                    padding:'var(--spacing-lg)',
                    borderRadius:20,
                    display:'flex',
                    alignItems:'center',
                    gap:'var(--spacing-md)',
                    direction: language === 'ar' ? 'rtl' : 'ltr',
                    transform: visible ? 'translateY(0)' : 'translateY(50px)',
                    opacity: visible ? 1 : 0,
                    transition:'all .85s ease',
                    transitionDelay: delay,
                    minHeight: 90
                  }}
                >
                  <div
                    style={{
                      flexShrink:0,
                      width:46,
                      height:46,
                      borderRadius:'50%',
                      background:'linear-gradient(135deg,var(--brand-purple,#9333ea) 0%, rgba(147,51,234,0.25) 100%)',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      fontSize:15,
                      fontWeight:700,
                      color:'var(--text-primary)',
                      boxShadow:'0 4px 14px -4px rgba(147,51,234,0.5)',
                      backdropFilter:'blur(4px)'
                    }}
                  >
                    {i+1}
                  </div>
                  <Text
                    size='sm'
                    style={{
                      fontWeight:600,
                      lineHeight:1.5,
                      flex:1,
                      fontSize:'0.9rem'
                    }}
                  >
                    {s}
                  </Text>
                </li>
              );
            })}
          </ol>
        </div>
        {/* CTA */}
        <div style={{ textAlign:'center', marginBottom:'var(--spacing-6xl)' }}>
          <Text as='h2' size='2xl' style={{ fontWeight:700, marginBottom:'var(--spacing-lg)' }}>{t('ابن علامة قابلة للتوسع والتذكر', 'Build a scalable, memorable brand system')}</Text>
          <div style={{ display:'flex', justifyContent:'center', gap:'var(--spacing-lg)', flexWrap:'wrap' }}>
            <Link href="/#contact" style={{ textDecoration:'none' }}><Button variant='primary' style={{ padding:'var(--spacing-md) var(--spacing-xl)', fontWeight:600 }}>{t('تواصل معنا','Contact Us')}</Button></Link>
            <Link href="/services" style={{ textDecoration:'none' }}><Button variant='secondary' style={{ padding:'var(--spacing-md) var(--spacing-xl)', fontWeight:600 }}>{t('رجوع للخدمات','Back to Services')}</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default function BrandDesignPage(){ return <BrandContent />; }
