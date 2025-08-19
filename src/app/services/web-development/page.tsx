'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Text, Button } from '@/components/ui/BrandComponents';
import Link from 'next/link';

// Page content component (client side for language + animations)
const WebDevContent: React.FC = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const t = (ar: string, en: string) => language === 'ar' ? ar : en;

  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 9H22" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 13L6 15L8 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13L18 15L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 13L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M13 13L11 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: t('شفافية ونظافة الكود', 'Clean & Transparent Code'),
      desc: t('هيكلة برمجية قابلة للتوسع وسهلة الصيانة.', 'Scalable, maintainable architecture.')
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2C15 5 16.5 8.5 16.5 12C16.5 15.5 15 19 12 22C9 19 7.5 15.5 7.5 12C7.5 8.5 9 5 12 2Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: t('أداء وتحسين متقدم', 'Performance & Optimization'),
      desc: t('تحسين الصور، التخزين المؤقت، التحميل الكسول، و Core Web Vitals.', 'Image optimization, caching, lazy loading, Core Web Vitals focus.')
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 4H20V16H5.17L4 17.17V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M8 8H16M8 12H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 16V18L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t('مُدمج مع التحليلات', 'Integrated Analytics'),
      desc: t('قياس سلوك المستخدم وتحسين التحويل.', 'Track user behavior & optimize conversion.')
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 14H21V21H14V14Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M6.5 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 6.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: t('قابلية التوسع والنمذجة', 'Modular & Extensible'),
      desc: t('مكونات قابلة لإعادة الاستخدام مع فصل الطبقات.', 'Reusable components & layered separation.')
    }
  ];

  const process = [
    t('اكتشاف وتحليل الاحتياج', 'Discovery & Requirement Analysis'),
    t('تصميم التجربة والواجهة', 'UX / UI Design'),
    t('البنية وواجهة البرمجة', 'Architecture & API Integration'),
    t('الجودة والأمان', 'Quality & Security Hardening'),
    t('النشر والمراقبة', 'Deployment & Monitoring'),
    t('التحسين المستمر', 'Continuous Optimization'),
  ];

  const stack = {
    frontend: ['Next.js', 'React 19', 'TypeScript', 'PandaCSS', 'SVG Systems'],
    backend: ['Edge Functions', 'Server Components', 'API Routes (Planned)'],
    perf: ['Lazy Loading', 'Image Optimization', 'Bundle Splitting', 'Caching'],
    tooling: ['ESLint', 'TypeScript', 'React Query (Ready)', 'Zustand'],
  };

  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Hero */}
      <section
        style={{
          padding: 'clamp(3rem,6vw,5rem) var(--spacing-lg)',
          background: 'linear-gradient(135deg, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.08) 45%, var(--bg-primary) 75%)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Text as="h1" size="4xl" style={{
            fontWeight: 'bold',
            fontSize: 'clamp(2.25rem,5vw,3.5rem)',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'var(--spacing-xl)'
          }}>
            {t('تطوير المواقع الإلكترونية', 'Web Development')}
          </Text>
          <Text size="xl" color="secondary" style={{
            maxWidth: 700,
            margin: '0 auto',
            fontSize: 'clamp(1.05rem,2.2vw,1.35rem)',
            lineHeight: 1.6
          }}>
            {t('نبني منصات ويب عالية الأداء، آمنة، سريعة، وقابلة للتوسع تربط جمهورك بتجربة سلسة وتخلق قيمة تجارية مستدامة.', 'We build high‑performance, secure, fast and scalable web platforms delivering seamless user experience and lasting business value.')}
          </Text>
        </div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 15% 22%, rgba(220,38,38,0.16), transparent 62%)',
          pointerEvents: 'none'
        }} />
      </section>

      {/* Key Metrics / Value Props */}
      <section ref={sectionRef} style={{
        padding: 'var(--spacing-4xl) var(--spacing-lg)',
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-4xl)'
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: 'var(--spacing-xl)',
              borderRadius: 20,
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
              transform: visible ? 'translateY(0)' : 'translateY(50px)',
              opacity: visible ? 1 : 0,
              transition: 'all 0.8s ease',
              transitionDelay: `${i * 0.1}s`
            }}>
              <div style={{
                width: 70,
                height: 70,
                margin: '0 auto var(--spacing-lg)',
                background: 'linear-gradient(135deg,#DC2626,#B91C1C)',
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 10px 25px rgba(220,38,38,0.35)',
                transition: 'transform .4s'
              }}>
                {f.icon}
              </div>
              <Text as="h3" size="xl" style={{
                fontWeight: '700',
                marginBottom: 'var(--spacing-sm)',
                fontSize: 'clamp(1.1rem,2vw,1.35rem)'
              }}>{f.title}</Text>
              <Text size="base" color="secondary" style={{
                lineHeight: 1.6,
                fontSize: '0.95rem'
              }}>{f.desc}</Text>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: visible ? 60 : 0,
                height: 3,
                background: 'linear-gradient(90deg,var(--brand-red),var(--brand-red-light))',
                borderRadius: 2,
                transform: 'translateX(-50%)',
                transition: 'width 0.8s ease',
                transitionDelay: `${0.4 + i * 0.1}s`
              }}/>
            </div>
          ))}
        </div>

        {/* Process */}
        <div style={{ marginBottom: 'var(--spacing-5xl)' }}>
          <Text as="h2" size="3xl" style={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 'var(--spacing-3xl)',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>{t('منهجية التنفيذ', 'Delivery Methodology')}</Text>
          <div style={{
            display: 'grid',
            gap: 'var(--spacing-lg)',
            gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))'
          }}>
            {process.map((step, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: 'var(--spacing-lg)',
                borderRadius: 16,
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
                transform: visible ? 'scale(1)' : 'scale(.85)',
                opacity: visible ? 1 : 0,
                transition: 'all .8s ease',
                transitionDelay: `${0.2 + i * 0.08}s`
              }}>
                <div style={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  fontSize: 12,
                  background: 'rgba(220,38,38,0.15)',
                  color: 'var(--brand-red)',
                  padding: '2px 8px',
                  borderRadius: 999,
                  fontWeight: 600
                }}>#{i+1}</div>
                <Text size="sm" style={{ fontWeight: 600 }}>{step}</Text>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: 'var(--spacing-5xl)' }}>
          <Text as="h2" size="3xl" style={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 'var(--spacing-3xl)',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>{t('تقنيات نعتمد عليها', 'Technologies We Use')}</Text>
          <div style={{
            display: 'grid',
            gap: 'var(--spacing-xl)',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))'
          }}>
            {Object.entries(stack).map(([group, items], i) => (
              <div key={group} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: 'var(--spacing-xl)',
                borderRadius: 20,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                opacity: visible ? 1 : 0,
                transition: 'all .8s ease',
                transitionDelay: `${0.15 + i * 0.1}s`
              }}>
                <Text as="h3" size="lg" style={{ fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>
                  {t(
                    group === 'frontend' ? 'الواجهة الأمامية' : group === 'backend' ? 'الواجهة الخلفية' : group === 'perf' ? 'الأداء' : 'الأدوات',
                    group === 'frontend' ? 'Frontend' : group === 'backend' ? 'Backend' : group === 'perf' ? 'Performance' : 'Tooling'
                  )}
                </Text>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {items.map(item => (
                    <li key={item} style={{
                      padding: '6px 12px',
                      background: 'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(220,38,38,0.05))',
                      border: '1px solid rgba(220,38,38,0.25)',
                      borderRadius: 50,
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: .5
                    }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div style={{ marginBottom: 'var(--spacing-5xl)' }}>
          <Text as="h2" size="3xl" style={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 'var(--spacing-3xl)',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>{t('لماذا حلولنا في تطوير الويب', 'Why Our Web Solutions')}</Text>
          <div style={{
            display: 'grid',
            gap: 'var(--spacing-xl)',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))'
          }}>
            {[
              t('تصميم مخصص وهوية متكاملة', 'Custom design & cohesive identity'),
              t('جاهزية لتحسين محركات البحث من الأساس', 'SEO-ready foundations'),
              t('مرونة وتوسع دون إعادة البناء', 'Elastic scalability'),
              t('حماية وطبقات أمن محدثة', 'Updated security layers'),
              t('تحليل وتحسين مستمرين', 'Continuous measurement & optimization'),
              t('دعم تقني سريع واستباقي', 'Proactive & fast technical support'),
            ].map((b, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.09)',
                padding: 'var(--spacing-lg)',
                borderRadius: 18,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                opacity: visible ? 1 : 0,
                transition: 'all .8s ease',
                transitionDelay: `${0.2 + i * 0.08}s`
              }}>
                <div style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg,#DC2626,#B91C1C)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 700
                }}>✓</div>
                <Text size="sm" style={{ fontWeight: 600 }}>{b}</Text>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-6xl)' }}>
          <Text as="h2" size="2xl" style={{ fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
            {t('جاهز لبدء مشروع ويب قوي؟', 'Ready to launch a powerful web project?')}
          </Text>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ textDecoration: 'none' }}>
              <Button variant="primary" style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                fontWeight: 600,
                fontSize: '1rem',
                border: 'none'
              }}>
                {t('تواصل معنا', 'Contact Us')}
              </Button>
            </Link>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                {t('رجوع للخدمات', 'Back to Services')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default function WebDevelopmentPage() { return <WebDevContent />; }
