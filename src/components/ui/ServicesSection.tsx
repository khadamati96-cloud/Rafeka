'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';
import Link from 'next/link';

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      id: 1,
      href: '/services/web-development',
      titleAr: 'تطوير المواقع الإلكترونية',
      titleEn: 'Web Development',
      descriptionAr: 'نصمم ونطور مواقع إلكترونية متطورة وسريعة الاستجابة تعكس هوية علامتك التجارية بأحدث التقنيات',
      descriptionEn: 'We design and develop advanced, responsive websites that reflect your brand identity using the latest technologies',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M3 8H21" stroke="currentColor" strokeWidth="1.4"/>
          <circle cx="6.5" cy="5.5" r="0.5" fill="currentColor"/>
          <circle cx="8.5" cy="5.5" r="0.5" fill="currentColor"/>
          <circle cx="10.5" cy="5.5" r="0.5" fill="currentColor"/>
          <path d="M8 11H16M8 13H14" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M3 19H21" stroke="currentColor" strokeWidth="1.4"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
      delay: '0s'
    },
    {
      id: 2,
      href: '/services/digital-marketing',
      titleAr: 'التسويق الرقمي',
      titleEn: 'Digital Marketing',
      descriptionAr: 'استراتيجيات تسويقية مبتكرة ومدروسة لزيادة الوصول والمبيعات عبر جميع المنصات الرقمية',
      descriptionEn: 'Innovative and strategic marketing approaches to increase reach and sales across all digital platforms',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M3 12L21 12" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M3 6L21 6" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M3 18L21 18" stroke="currentColor" strokeWidth="1.4"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <path d="M16 8L20 4M20 8L16 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M8 16L4 20M4 16L8 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <circle cx="18" cy="6" r="1" fill="currentColor"/>
          <circle cx="6" cy="18" r="1" fill="currentColor"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
      delay: '0.2s'
    },
    {
      id: 3,
      href: '/services/social-media-management',
      titleAr: 'إدارة وسائل التواصل الاجتماعي',
      titleEn: 'Social Media Management',
      descriptionAr: 'إدارة شاملة واحترافية لحساباتك على منصات التواصل الاجتماعي مع محتوى جذاب ومؤثر',
      descriptionEn: 'Comprehensive and professional management of your social media accounts with engaging and impactful content',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/>
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.4"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M8.5 16.5L10.5 14.5" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M13.5 9.5L15.5 7.5" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M9 15L15 9" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
          <circle cx="18" cy="18" r="1" fill="currentColor"/>
          <circle cx="6" cy="6" r="1" fill="currentColor"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #B91C1C 0%, #DC2626 100%)',
      delay: '0.4s'
    },
    {
      id: 4,
      href: '/services/brand-design',
      titleAr: 'تصميم وتطوير العلامات التجارية',
      titleEn: 'Brand Design & Development',
      descriptionAr: 'تصميم هوية بصرية متكاملة ومميزة تعبر عن قيم علامتك التجارية وتترك انطباعاً لا يُنسى',
      descriptionEn: 'Complete and distinctive visual identity design that expresses your brand values and leaves an unforgettable impression',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.4"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M12 9V15M9 12H15" stroke="currentColor" strokeWidth="0.9"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
      delay: '0.6s'
    }
  ];

  // مراقبة ظهور القسم
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'var(--spacing-3xl) var(--spacing-lg)',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* خلفية متدرجة */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ 
        maxWidth: '1200px',
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
            size="4xl" 
            color="primary" 
            as="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 'var(--spacing-lg)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              /* Updated gradient: pure reds (light -> dark) instead of white -> red to avoid pink look */
              background: 'linear-gradient(135deg, var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {language === 'ar' ? 'خدماتنا' : 'Our Services'}
          </Text>
          
          <Text 
            size="xl" 
            color="secondary"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            {language === 'ar' 
              ? 'نقدم مجموعة شاملة من الخدمات الرقمية المتطورة لتعزيز حضورك الرقمي وتحقيق أهدافك التجارية'
              : 'We offer a comprehensive range of advanced digital services to enhance your digital presence and achieve your business goals'
            }
          </Text>
        </div>

        {/* شبكة الخدمات */}
        <div 
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // ستُعدل عبر الميديا كويري
            gap: 'var(--spacing-lg)',
            alignItems: 'stretch',
          }}
        >
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              aria-label={language === 'ar' ? service.titleAr : service.titleEn}
              className="service-card"
              style={{
                position: 'relative',
                padding: 'var(--spacing-lg) var(--spacing-lg)', // تقليل الحشو ليصبح الصندوق أقرب للمحتوى
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.8s ease',
                transform: isVisible 
                  ? 'translateY(0) rotateX(0)' 
                  : 'translateY(80px) rotateX(15deg)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: service.delay,
                cursor: 'pointer',
                overflow: 'hidden',
                textDecoration: 'none',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                setHoveredService(service.id);
                const icon = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                if (icon) icon.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                setHoveredService(null);
                const icon = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                if (icon) icon.style.color = 'var(--text-primary)';
              }}
              onFocus={() => setHoveredService(service.id)}
              onBlur={() => setHoveredService(null)}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: service.gradient,
                  opacity: hoveredService === service.id ? 0.1 : 0,
                  transition: 'opacity 0.5s ease',
                  borderRadius: '20px',
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: service.gradient,
                  borderRadius: '20px',
                  opacity: hoveredService === service.id ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  zIndex: -1,
                  filter: 'blur(10px)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div 
                  className="service-icon"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--text-primary)',
                    transform: hoveredService === service.id ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                    transition: 'all 0.5s ease',
                  }}>
                  {service.icon}
                </div>
                <Text 
                  size="xl" 
                  color="primary" 
                  as="h3"
                  style={{
                    fontWeight: 'bold',
                    marginBottom: 'var(--spacing-md)',
                    textAlign: 'center',
                    fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                    fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
                    lineHeight: '1.3',
                  }}
                >
                  {language === 'ar' ? service.titleAr : service.titleEn}
                </Text>
                <Text 
                  size="lg" 
                  color="secondary"
                  style={{
                    fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                    fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                    lineHeight: '1.6',
                    textAlign: 'center',
                    transform: hoveredService === service.id ? 'translateY(-5px)' : 'translateY(0)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                </Text>
                <div className="service-hint" style={{
                  marginTop: 'var(--spacing-sm)',
                  textAlign: 'center',
                  opacity: hoveredService === service.id ? 1 : 0,
                  transform: hoveredService === service.id ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'all 0.3s ease',
                  fontSize: '.7rem',
                  letterSpacing: '.4px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(6px)'
                }}>
                  {language === 'ar' ? 'اضغط للمزيد' : 'Tap / Click for details'}
                </div>
              </div>
              {hoveredService === service.id && (
                <>
                  <div className="fx-particle" style={{position:'absolute',top:'18%',left:'12%',width:4,height:4,background:'var(--brand-red)',borderRadius:'50%',animation:'float-particle 3s ease-in-out infinite'}} />
                  <div className="fx-particle" style={{position:'absolute',top:'58%',right:'15%',width:3,height:3,background:'var(--brand-red-light)',borderRadius:'50%',animation:'float-particle 3s ease-in-out infinite 1s'}} />
                  <div className="fx-particle" style={{position:'absolute',bottom:'32%',left:'22%',width:2,height:2,background:'var(--brand-red)',borderRadius:'50%',animation:'float-particle 3s ease-in-out infinite 2s'}} />
                </>
              )}
            </Link>
          ))}
        </div>

        {/* خط فاصل سفلي */}
        <div 
          style={{
            marginTop: 'var(--spacing-3xl)',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, var(--brand-red) 50%, transparent 100%)',
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 1.2s ease',
            transitionDelay: '1s',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* تأثيرات خلفية إضافية */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: isVisible ? 'pulse-glow 6s ease-in-out infinite' : 'none',
        }}
      />
      
      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '-15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: isVisible ? 'pulse-glow 8s ease-in-out infinite 2s' : 'none',
        }}
      />
      {/* ميديا كويري لضبط الشبكة والحجم على الشاشات الأصغر */}
      <style>{`
        @media (max-width: 1200px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); gap: var(--spacing-lg); }
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); gap: var(--spacing-md); }
          .service-card { padding: var(--spacing-lg) var(--spacing-md) !important; }
          .service-card .service-icon svg { width:40px; height:40px; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; gap: 12px; }
          .service-card { 
            padding: 14px 16px 40px !important;
            max-width: 300px; 
            width: 100%; 
            margin-left: auto; 
            margin-right: auto; 
            position: relative;
            min-height: unset !important; 
            transform: none !important;
          }
          .service-card .service-icon { margin-bottom: 12px; }
          .service-card .service-icon svg { width:36px; height:36px; }
          .service-card h3 { margin-bottom: 10px !important; }
          .service-card p { 
            margin: 0 0 6px !important; 
            line-height: 1.4 !important; 
            transform: none !important;
          }
          .service-card .service-hint { display: none !important; }
          .service-card .card-overlay-tint,
          .service-card .card-overlay-glow,
          .service-card .fx-particle { display:none !important; }
          .service-card:active, .service-card:focus { 
            background: linear-gradient(135deg, rgba(220,38,38,0.10) 0%, rgba(220,38,38,0.06) 55%, rgba(220,38,38,0.10) 100%) !important;
            border-color: rgba(220,38,38,0.35) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
