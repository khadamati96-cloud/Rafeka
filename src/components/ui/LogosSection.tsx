'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const LogosSection: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const logos = [
    { src: '/gemini.png', alt: 'Gemini', name: 'Gemini' },
    { src: '/intel.png', alt: 'Intel', name: 'Intel' },
    { src: '/masterpass.png', alt: 'Masterpass', name: 'Masterpass' },
    { src: '/meta.png', alt: 'Meta', name: 'Meta' },
    { src: '/uber.png', alt: 'Uber', name: 'Uber' },
    { src: '/x.png', alt: 'X', name: 'X' }
  ];

  // مراقبة ظهور القسم
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
        padding: 'var(--spacing-3xl) var(--spacing-lg)',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* كسر الشعاع الأحمر من الهيرو */}
      <div 
        style={{
          position: 'absolute',
          top: '-50px',
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* العنوان */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-2xl)',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease',
        }}>
          <Text 
            size="2xl" 
            color="primary" 
            as="h2"
            style={{
              fontWeight: '600',
              marginBottom: 'var(--spacing-md)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
            }}
          >
            {language === 'ar' ? 'العلامات التجارية التي تثق بنا' : 'Trusted by Leading Brands'}
          </Text>
          <Text 
            size="lg" 
            color="secondary"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
            }}
          >
            {language === 'ar' ? 'نعمل مع أفضل الشركات في العالم' : 'Working with the world\'s best companies'}
          </Text>
        </div>

        {/* الشعارات */}
        <div 
          className="logos-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 'var(--spacing-xl)',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="logo-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.6s ease',
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.1}s`,
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                width: '100%',
                minHeight: '100px',
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.2)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
                e.currentTarget.style.background = 'rgba(220, 38, 38, 0.1)';
              }}
              onTouchEnd={(e) => {
                setTimeout(() => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                }, 100);
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                style={{
                  maxWidth: '120px',
                  height: 'auto',
                  filter: 'grayscale(1) brightness(0.8)',
                  transition: 'all 0.3s ease',
                  width: 'auto'
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth > 768) {
                    (e.currentTarget as HTMLElement).style.filter = 'grayscale(0) brightness(1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth > 768) {
                    (e.currentTarget as HTMLElement).style.filter = 'grayscale(1) brightness(0.8)';
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* خط فاصل في الأسفل */}
        <div 
          style={{
            marginTop: 'var(--spacing-3xl)',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(220, 38, 38, 0.3) 50%, transparent 100%)',
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 1s ease',
            transitionDelay: '0.8s',
          }}
        />
      </div>

      {/* تأثير خلفي إضافي */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: isVisible ? 'pulse-glow 4s ease-in-out infinite' : 'none',
        }}
      />
    </section>
  );
};

export default LogosSection;
