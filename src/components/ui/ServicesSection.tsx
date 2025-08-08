'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      id: 1,
      titleAr: 'تطوير المواقع الإلكترونية',
      titleEn: 'Web Development',
      descriptionAr: 'نصمم ونطور مواقع إلكترونية متطورة وسريعة الاستجابة تعكس هوية علامتك التجارية بأحدث التقنيات',
      descriptionEn: 'We design and develop advanced, responsive websites that reflect your brand identity using the latest technologies',
  icon: '/web.svg',
      gradient: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
      delay: '0s'
    },
    {
      id: 2,
      titleAr: 'التسويق الرقمي',
      titleEn: 'Digital Marketing',
      descriptionAr: 'استراتيجيات تسويقية مبتكرة ومدروسة لزيادة الوصول والمبيعات عبر جميع المنصات الرقمية',
      descriptionEn: 'Innovative and strategic marketing approaches to increase reach and sales across all digital platforms',
  icon: '/DigitalMarketing.svg',
      gradient: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
      delay: '0.2s'
    },
    {
      id: 3,
      titleAr: 'إدارة وسائل التواصل الاجتماعي',
      titleEn: 'Social Media Management',
      descriptionAr: 'إدارة شاملة واحترافية لحساباتك على منصات التواصل الاجتماعي مع محتوى جذاب ومؤثر',
      descriptionEn: 'Comprehensive and professional management of your social media accounts with engaging and impactful content',
  icon: '/SocialMediaManagement.svg',
      gradient: 'linear-gradient(135deg, #B91C1C 0%, #DC2626 100%)',
      delay: '0.4s'
    },
    {
      id: 4,
      titleAr: 'تصميم وتطوير العلامات التجارية',
      titleEn: 'Brand Design & Development',
      descriptionAr: 'تصميم هوية بصرية متكاملة ومميزة تعبر عن قيم علامتك التجارية وتترك انطباعاً لا يُنسى',
      descriptionEn: 'Complete and distinctive visual identity design that expresses your brand values and leaves an unforgettable impression',
  icon: '/BrandDesignandDevelopment.svg',
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
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
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
            gridTemplateColumns: 'repeat(4, 1fr)', // 4 خدمات في سطر واحد للشاشات الكبيرة
            gap: 'var(--spacing-lg)',
            alignItems: 'stretch',
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{
                position: 'relative',
                padding: 'var(--spacing-xl)',
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
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onTouchStart={() => setHoveredService(service.id)}
              onTouchEnd={() => setTimeout(() => setHoveredService(null), 2000)}
            >
              {/* تأثير الخلفية المتحركة */}
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

              {/* شعاع متحرك */}
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

              {/* محتوى الكارد */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* الأيقونة */}
                  <div style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3rem)', // زيادة حجم الأيقونة للجوال
                    marginBottom: 'var(--spacing-lg)',
                    textAlign: 'center',
                    color: '#000', // جعل لون الأيقونة أسود
                    transform: hoveredService === service.id ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                    transition: 'transform 0.5s ease',
                  }}>
                  <img src={service.icon} alt={language === 'ar' ? service.titleAr : service.titleEn} style={{width: '3rem', height: '3rem', objectFit: 'contain', filter: 'brightness(0)' }} />
                </div>

                {/* العنوان */}
                <Text 
                  size="xl" 
                  color="primary" 
                  as="h3"
                  style={{
                    fontWeight: 'bold',
                    marginBottom: 'var(--spacing-md)',
                    textAlign: 'center',
                    fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                    fontSize: 'clamp(1.125rem, 3vw, 1.375rem)', // تحسين حجم العنوان
                    lineHeight: '1.3',
                  }}
                >
                  {language === 'ar' ? service.titleAr : service.titleEn}
                </Text>

                {/* الوصف */}
                <Text 
                  size="lg" 
                  color="secondary"
                  style={{
                    fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                    fontSize: 'clamp(1rem, 2.2vw, 1.125rem)', // تحسين حجم الوصف
                    lineHeight: '1.6',
                    textAlign: 'center',
                    transform: hoveredService === service.id ? 'translateY(-5px)' : 'translateY(0)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                </Text>

                {/* زر التفاصيل */}
                <div style={{
                  marginTop: 'var(--spacing-lg)',
                  textAlign: 'center',
                  opacity: hoveredService === service.id ? 1 : 0,
                  transform: hoveredService === service.id ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.3s ease',
                }}>
                  <button
                    style={{
                      padding: 'var(--spacing-sm) var(--spacing-lg)',
                      background: service.gradient,
                      border: 'none',
                      borderRadius: '50px',
                      color: 'white',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (window.innerWidth > 768) {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (window.innerWidth > 768) {
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </button>
                </div>
              </div>

              {/* جزيئات متحركة */}
              {hoveredService === service.id && (
                <>
                  <div 
                    style={{
                      position: 'absolute',
                      top: '20%',
                      left: '10%',
                      width: '4px',
                      height: '4px',
                      background: 'var(--brand-red)',
                      borderRadius: '50%',
                      animation: 'float-particle 3s ease-in-out infinite',
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '60%',
                      right: '15%',
                      width: '3px',
                      height: '3px',
                      background: 'var(--brand-red-light)',
                      borderRadius: '50%',
                      animation: 'float-particle 3s ease-in-out infinite 1s',
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '30%',
                      left: '20%',
                      width: '2px',
                      height: '2px',
                      background: 'var(--brand-red)',
                      borderRadius: '50%',
                      animation: 'float-particle 3s ease-in-out infinite 2s',
                    }}
                  />
                </>
              )}
            </div>
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
    </section>
  );
};

export default ServicesSection;
