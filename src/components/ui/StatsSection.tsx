'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

// Hoist stats so reference is stable across renders
const STATS = [
    {
      number: 544,
      suffix: '+',
      titleAr: 'عملاء سعداء',
      titleEn: 'Happy Clients',
      descriptionAr: 'عدد العملاء الراضين الذين استفادوا من خدماتنا',
      descriptionEn: 'Number of satisfied clients who benefited from our services',
      icon: '😊',
      color: '#22c55e'
    },
    {
      number: 621,
      suffix: '+',
      titleAr: 'مشاريع مكتملة',
      titleEn: 'Completed Projects',
      descriptionAr: 'إجمالي المشاريع التي تم تسليمها بنجاح في مختلف الصناعات',
      descriptionEn: 'Total projects successfully delivered across various industries',
      icon: '🎯',
      color: '#3b82f6'
    },
    {
      number: 119,
      suffix: '+',
      titleAr: 'مواقع جاهزة',
      titleEn: 'Ready Websites',
      descriptionAr: 'إجمالي المواقع التي قمنا بتسليمها للعملاء',
      descriptionEn: 'Total websites we have delivered to clients',
      icon: '🌐',
      color: '#8b5cf6'
    },
    {
      number: 44,
      suffix: '+',
      titleAr: 'تطبيق موبايل',
      titleEn: 'Mobile Apps',
      descriptionAr: 'إجمالي تطبيقات الموبايل والمشاريع التي تم إنجازها',
      descriptionEn: 'Total mobile applications and projects completed',
      icon: '📱',
      color: '#DC2626'
    }
];

const StatsSection: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const stats = STATS;

  // مراقبة ظهور القسم وتحريك الأرقام
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // تحريك كل رقم على حدة
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateNumber(index, stat.number);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []); // stats is static

  const animateNumber = (index: number, targetNumber: number) => {
    const duration = 2000; // مدة الأنيميشن
    const steps = 60; // عدد الخطوات
    const stepValue = targetNumber / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(Math.floor(stepValue * currentStep), targetNumber);
      
      setAnimatedStats(prev => {
        const newStats = [...prev];
        newStats[index] = currentValue;
        return newStats;
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  return (
    <section 
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'var(--spacing-4xl) var(--spacing-lg)',
        marginTop: '60px',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ 
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* العنوان الرئيسي */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-3xl)',
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
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
            }}
          >
            {language === 'ar' ? 'أرقـام رافـقة' : 'Rafeka Numbers'}
            {/* تأثير لامع */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                animation: isVisible ? 'shine 3s ease-in-out infinite' : 'none',
              }}
            />
          </Text>
        </div>

        {/* شبكة الإحصائيات */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-2xl)',
          }}
          className="stats-grid"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-lg)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.8)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 1s ease',
                transitionDelay: `${index * 0.2}s`,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              {/* تأثير خلفي ملون */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%)',
                  transform: 'rotate(45deg)',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                }}
                className="stat-hover-effect"
              />

              {/* الرقم الكبير */}
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <span 
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '900',
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1',
                    display: 'inline-block',
                  }}
                >
                  {animatedStats[index].toLocaleString()}
                </span>
                <span 
                  style={{
                    fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginLeft: '4px',
                  }}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* عنوان الإحصائية */}
              <Text 
                size="xl" 
                color="primary"
                as="h3"
                style={{
                  fontWeight: 'bold',
                  marginBottom: 'var(--spacing-md)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                  fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                  color: 'var(--text-primary)',
                }}
              >
                {language === 'ar' ? stat.titleAr : stat.titleEn}
              </Text>

              {/* وصف الإحصائية */}
              <Text 
                size="base" 
                color="secondary"
                style={{
                  fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  opacity: 0.8,
                }}
              >
                {language === 'ar' ? stat.descriptionAr : stat.descriptionEn}
              </Text>

              {/* خط سفلي متحرك */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: isVisible ? '60px' : '0px',
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--brand-red) 0%, var(--brand-red-light) 100%)',
                  transform: 'translateX(-50%)',
                  borderRadius: '2px',
                  transition: 'width 1.2s ease',
                  transitionDelay: `${index * 0.2 + 0.8}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
