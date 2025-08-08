'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const WhyChooseUsSection: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
  icon: '/customer.svg',
      titleAr: 'محورنا العميل',
      titleEn: 'Client-Focused',
      descriptionAr: 'العملاء أولويتنا، نركز على التواصل والشفافية والتعاون لتحقيق النجاح المستدام',
      descriptionEn: 'Our clients are our priority, we focus on communication, transparency and collaboration to achieve sustainable success'
    },
    {
  icon: '/Customizedsolutions.svg',
      titleAr: 'حلول مخصصة',
      titleEn: 'Custom Solutions',
      descriptionAr: 'نقوم بإنشاء استراتيجيات مخصصة لتلبية احتياجات وأهداف كل عميل',
      descriptionEn: 'We create customized strategies to meet the needs and goals of each client'
    },
    {
  icon: '/Provenexperience.svg',
      titleAr: 'خبرة مثبتة',
      titleEn: 'Proven Experience',
      descriptionAr: 'وكالة رفيقة تقدم تسويقًا رقميًا ناجحًا باستخدام أحدث الاتجاهات والتقنيات',
      descriptionEn: 'Rafeka agency delivers successful digital marketing using the latest trends and technologies'
    },
    {
  icon: '/Distinctivecreativity.svg',
      titleAr: 'إبداع متميز',
      titleEn: 'Distinguished Creativity',
      descriptionAr: 'نمزج بين الاستراتيجية والإبداع لنصنع حملات جذابة تقوي علامتك التجارية',
      descriptionEn: 'We blend strategy and creativity to create engaging campaigns that strengthen your brand'
    },
    {
  icon: '/Wefocusonresults.svg',
      titleAr: 'نركز على النتائج',
      titleEn: 'Results-Focused',
      descriptionAr: 'نحقق نتائج قابلة للقياس باستخدام البيانات لتحسين الأداء وضمان العائد الاستثماري',
      descriptionEn: 'We achieve measurable results using data to improve performance and ensure ROI'
    },
    {
  icon: '/Innovativestrategies.svg',
      titleAr: 'استراتيجيات مبتكرة',
      titleEn: 'Innovative Strategies',
      descriptionAr: 'نعتمد على الابتكار والإبداع لتطوير استراتيجيات مدفوعة بالنمو',
      descriptionEn: 'We rely on innovation and creativity to develop growth-driven strategies'
    }
  ];

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
  }, []);

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
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {language === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
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
            {language === 'ar' 
              ? 'شريكك الموثوق في النجاح الرقمي'
              : 'Your Trusted Partner in Digital Success'
            }
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
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
                  fontSize: '3rem',
                  marginBottom: 'var(--spacing-lg)',
                  textAlign: 'center',
                  filter: 'drop-shadow(0 4px 8px rgba(220, 38, 38, 0.5))',
                  transform: visibleItems[index] ? 'scale(1)' : 'scale(0)',
                  transition: 'transform 0.6s ease',
                  transitionDelay: `${index * 0.1 + 0.3}s`,
                }}
              >
                <img src={feature.icon} alt={language === 'ar' ? feature.titleAr : feature.titleEn} style={{width: '3rem', height: '3rem', objectFit: 'contain', filter: 'brightness(0)' }} />
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
                {language === 'ar' ? feature.titleAr : feature.titleEn}
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
                {language === 'ar' ? feature.descriptionAr : feature.descriptionEn}
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
