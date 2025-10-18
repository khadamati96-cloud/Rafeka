'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';
import type { Language } from '../../lib/translations';

// Hoist features so reference remains stable
const FEATURES: Array<{
    icon: React.ReactElement;
    title: Record<Language, string>;
    description: Record<Language, string>;
  }> = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{display:'block'}}>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.25"/>
          <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="1.25"/>
          <circle cx="12" cy="12" r="1" fill="currentColor"/>
          <path d="M8 10L16 14M16 10L8 14" stroke="currentColor" strokeWidth="0.9" opacity="0.6"/>
        </svg>
      ),
      title: {
        ar: 'محورنا العميل',
        en: 'Client-Focused',
        tr: 'Müşteri Odaklı',
      },
      description: {
        ar: 'العملاء أولويتنا، نركز على التواصل والشفافية والتعاون لتحقيق النجاح المستدام',
        en: 'Our clients are our priority; we focus on communication, transparency, and collaboration to achieve sustainable success.',
        tr: 'Müşterilerimiz önceliğimizdir; sürdürülebilir başarı için iletişime, şeffaflığa ve iş birliğine odaklanıyoruz.',
      },
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{display:'block'}}>
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.25"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1"/>
          <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="0.85"/>
        </svg>
      ),
      title: {
        ar: 'حلول مخصصة',
        en: 'Custom Solutions',
        tr: 'Özel Çözümler',
      },
      description: {
        ar: 'نقوم بإنشاء استراتيجيات مخصصة لتلبية احتياجات وأهداف كل عميل',
        en: 'We create tailored strategies to meet the unique needs and goals of every client.',
        tr: 'Her müşteri için ihtiyaç ve hedeflerine uygun stratejiler oluşturuyoruz.',
      },
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{display:'block'}}>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.25"/>
          <path d="M12 6V8M12 16V18M6 12H8M16 12H18" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: {
        ar: 'خبرة مثبتة',
        en: 'Proven Experience',
        tr: 'Kanıtlanmış Deneyim',
      },
      description: {
        ar: 'وكالة رافقة تقدم تسويقًا رقميًا ناجحًا باستخدام أحدث الاتجاهات والتقنيات',
        en: 'Rafeka delivers successful digital marketing by leveraging the latest trends and technologies.',
        tr: 'Rafeka ajansı, en güncel trend ve teknolojileri kullanarak başarılı dijital pazarlama sunar.',
      },
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{display:'block'}}>
          <path d="M12 2L14.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.25"/>
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1"/>
          <circle cx="8" cy="8" r="1" fill="currentColor"/>
          <circle cx="16" cy="8" r="1" fill="currentColor"/>
          <circle cx="8" cy="16" r="1" fill="currentColor"/>
          <circle cx="16" cy="16" r="1" fill="currentColor"/>
        </svg>
      ),
      title: {
        ar: 'إبداع متميز',
        en: 'Distinguished Creativity',
        tr: 'Özgün Yaratıcılık',
      },
      description: {
        ar: 'نمزج بين الاستراتيجية والإبداع لنصنع حملات جذابة تقوي علامتك التجارية',
        en: 'We blend strategy and creativity to craft engaging campaigns that strengthen your brand.',
        tr: 'Strateji ve yaratıcılığı harmanlayarak markanızı güçlendiren etkileyici kampanyalar oluşturuyoruz.',
      },
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{display:'block'}}>
          <path d="M3 13L9 7L13 11L21 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
          <path d="M21 3V9M21 3H15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="1" fill="currentColor"/>
          <circle cx="13" cy="11" r="1" fill="currentColor"/>
          <circle cx="21" cy="3" r="1" fill="currentColor"/>
          <path d="M3 21H21" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: {
        ar: 'نركز على النتائج',
        en: 'Results-Focused',
        tr: 'Sonuç Odaklı',
      },
      description: {
        ar: 'نحقق نتائج قابلة للقياس باستخدام البيانات لتحسين الأداء وضمان العائد الاستثماري',
        en: 'We achieve measurable outcomes using data to enhance performance and guarantee ROI.',
        tr: 'Performansı iyileştirmek ve yatırım getirisini sağlamak için verilerden yararlanarak ölçülebilir sonuçlar elde ediyoruz.',
      },
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{display:'block'}}>
          <path d="M9.663 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H14.337" stroke="currentColor" strokeWidth="1.25"/>
          <path d="M12 17L8 21L12 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
          <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1"/>
          <path d="M7 7H9M15 7H17M7 13H17" stroke="currentColor" strokeWidth="0.85"/>
        </svg>
      ),
      title: {
        ar: 'استراتيجيات مبتكرة',
        en: 'Innovative Strategies',
        tr: 'Yenilikçi Stratejiler',
      },
      description: {
        ar: 'نعتمد على الابتكار والإبداع لتطوير استراتيجيات مدفوعة بالنمو',
        en: 'We rely on innovation and creativity to craft growth-driven strategies.',
        tr: 'Büyümeye odaklanan stratejiler geliştirmek için yenilik ve yaratıcılığa güveniyoruz.',
      },
    }
  ];

const WhyChooseUsSection: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const features = useMemo(() => FEATURES, []);

  // مراقبة ظهور القسم
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // تحريك العناصر تدريجياً
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [features]);

  return (
    <section 
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'var(--spacing-4xl) var(--spacing-lg)',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* العنوان الرئيسي */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-5xl)',
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease',
        }}>
          <Text 
            size="3xl" 
            color="primary" 
            as="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 'var(--spacing-lg)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              /* Unified red gradient (remove white to avoid pink tint) */
              background: 'linear-gradient(135deg, var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {(
              {
                ar: 'لماذا تختارنا',
                en: 'Why Choose Us',
                tr: 'Neden Bizi Tercih Etmelisiniz',
              } as const
            )[language]}
          </Text>
          
          <Text 
            size="xl" 
            color="secondary"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontWeight: '600',
            }}
          >
            {(
              {
                ar: 'شريكك الموثوق في النجاح الرقمي',
                en: 'Your Trusted Partner in Digital Success',
                tr: 'Dijital başarıda güvendiğiniz ortağınız',
              } as const
            )[language]}
          </Text>
        </div>

        {/* شبكة المميزات */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--spacing-xl)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transform: visibleItems[index] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                opacity: visibleItems[index] ? 1 : 0,
                transition: 'all 0.8s ease',
                transitionDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)';
                e.currentTarget.style.background = 'rgba(220, 38, 38, 0.05)';
                setHoveredCard(index);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                setHoveredCard(null);
              }}
            >
              {/* تأثير خلفي متحرك */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
                  transform: 'rotate(45deg)',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                }}
                className="hover-effect"
              />

              {/* أيقونة */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: '#dc2626',
                  borderRadius: '1rem',
                  /* Center the icon box horizontally */
                  margin: '0 auto var(--spacing-lg)',
                  filter: 'drop-shadow(0 4px 8px rgba(220, 38, 38, 0.5))',
                  transform: visibleItems[index] ? 'scale(1)' : 'scale(0)',
                  transition: 'transform 0.6s ease',
                  transitionDelay: `${index * 0.1 + 0.3}s`,
                }}
              >
                <div
                  style={{
                    color: hoveredCard === index ? '#000' : '#fff',
                    transform: hoveredCard === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {feature.icon}
                </div>
              </div>

              {/* العنوان */}
              <Text 
                size="xl" 
                color="primary"
                as="h3"
                style={{
                  fontWeight: 'bold',
                  marginBottom: 'var(--spacing-md)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                  textAlign: 'center',
                  color: 'var(--text-primary)',
                }}
              >
                {feature.title[language]}
              </Text>

              {/* الوصف */}
              <Text 
                size="base" 
                color="secondary"
                style={{
                  fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  textAlign: 'center',
                  color: 'var(--text-secondary)',
                  opacity: 0.9,
                }}
              >
                {feature.description[language]}
              </Text>

              {/* خط سفلي متحرك */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: visibleItems[index] ? '60px' : '0px',
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--brand-red) 0%, var(--brand-red-light) 100%)',
                  transform: 'translateX(-50%)',
                  borderRadius: '2px',
                  transition: 'width 1s ease',
                  transitionDelay: `${index * 0.1 + 0.5}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* تأثيرات خلفية */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          left: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: isVisible ? 'float-slow 10s ease-in-out infinite' : 'none',
        }}
      />
      
      <div 
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-10%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: isVisible ? 'float-slow 8s ease-in-out infinite 3s' : 'none',
        }}
      />
    </section>
  );
};

export default WhyChooseUsSection;
