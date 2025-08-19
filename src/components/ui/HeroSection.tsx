'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Text, Button } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    satisfaction: 0,
    campaigns: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  // مراقبة ظهور القسم
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // تحريك الأرقام
  useEffect(() => {
    if (isVisible) {
      // تحريك نسبة الرضا
      const satisfactionAnimation = setInterval(() => {
        setAnimatedStats(prev => {
          if (prev.satisfaction < 98) {
            return { ...prev, satisfaction: prev.satisfaction + 1 };
          }
          clearInterval(satisfactionAnimation);
          return prev;
        });
      }, 30);

      // تحريك عدد الحملات
      const campaignsAnimation = setInterval(() => {
        setAnimatedStats(prev => {
          if (prev.campaigns < 766) {
            return { ...prev, campaigns: prev.campaigns + 15 };
          }
          clearInterval(campaignsAnimation);
          return { ...prev, campaigns: 766 };
        });
      }, 25);

      return () => {
        clearInterval(satisfactionAnimation);
        clearInterval(campaignsAnimation);
      };
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="hero-section"
      style={{
        minHeight: '80vh',
        background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.1) 30%, var(--bg-primary) 50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 'var(--spacing-xl) var(--spacing-lg)',
      }}>
      {/* صورة الخلفية للموبايل فقط */}
      <div 
        className="hero-mobile-bg"
        style={{
          position: 'absolute',
          top: '20%',
          left: 0,
          width: '100%',
          height: '80%',
          backgroundImage: 'url(/heromobile.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          zIndex: 2,
          display: 'none',
          pointerEvents: 'none',
        }}
      />

      {/* ميديا كويري للجوال */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 4rem !important;
            min-height: 70vh !important;
            justify-content: flex-start !important;
            padding-bottom: 2rem !important;
          }
          .hero-container {
            margin-top: 1rem !important;
            position: relative !important;
            z-index: 3 !important;
          }
          .hero-title {
            margin-bottom: 1rem !important;
          }
          .hero-description {
            margin-bottom: 1.5rem !important;
          }
          .hero-mobile-bg {
            display: block !important;
          }
        }
      `}</style>
   
      <div className="container hero-container" style={{ 
        textAlign: 'center', 
        maxWidth: '900px',
        padding: 'var(--spacing-lg) var(--spacing-md)',
      }}>
        {/* العنوان الرئيسي */}
        <Text 
          size="5xl" 
          color="primary" 
          as="h1"
          className="hero-title"
          style={{
            fontWeight: 'bold',
            marginBottom: 'var(--spacing-lg)',
            lineHeight: '1.1',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
          }}
        >
          {language === 'ar' ? (
            <>
              ارفع و عزز
              <br />
              علامتك التجارية
            </>
          ) : (
            <>
              Elevate & Enhance
              <br />
              Your Brand
            </>
          )}
        </Text>
        
        {/* النص التوضيحي */}
        <Text 
          size="lg" 
          color="secondary"
          className="hero-description"
          style={{
            marginBottom: 'var(--spacing-xl)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-xl) auto',
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
          }}
        >
          {language === 'ar' ? (
            <>
              في رافقة نصمم استراتيجيات إعلانية مبتكرة وجذابة
              <br />
              ترفع علامتك التجارية إلى آفاق جديدة
            </>
          ) : (
            <>
              At Rafeka we design innovative and attractive advertising strategies
              <br />
              that elevate your brand to new horizons
            </>
          )}
        </Text>
        
        {/* زر من نحن */}
        <Button 
          variant="primary"
          className="hero-about-btn"
          style={{
            fontSize: 'var(--text-xl)',
            padding: 'var(--spacing-sm) var(--spacing-lg)',
            fontWeight: '600',
            borderRadius: 'var(--radius-md)',
            transition: 'all 0.3s ease',
            fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
            position: 'relative',
            overflow: 'hidden',
            border: 'none',
            marginBottom: 'var(--spacing-2xl)',
          }}
          onClick={() => router.push('/about')}
          aria-label={language === 'ar' ? 'الانتقال إلى صفحة من نحن' : 'Go to About Us page'}
        >
          {language === 'ar' ? 'من نحن' : 'About Us'}
        </Button>

        {/* الإحصائيات */}
        <div 
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)',
            maxWidth: '600px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* نسبة رضا العملاء */}
          <div 
            className="stat-card"
            style={{
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(220, 38, 38, 0.08)',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              transition: 'all 0.3s ease',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '0.2s',
              textAlign: 'center',
              minHeight: '140px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
              <Text 
                size="3xl" 
                color="brand" 
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-english)',
                  lineHeight: '1',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                }}
              >
                {animatedStats.satisfaction}%
              </Text>
            </div>
            <Text 
              size="lg" 
              color="primary"
              style={{
                fontWeight: '500',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                fontSize: 'clamp(0.875rem, 3vw, 1rem)',
                lineHeight: '1.3',
              }}
            >
              {language === 'ar' ? 'نسبة رضا العملاء' : 'Customer Satisfaction'}
            </Text>
          </div>

          {/* عدد الحملات الناجحة */}
          <div 
            className="stat-card"
            style={{
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(220, 38, 38, 0.08)',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              transition: 'all 0.3s ease',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '0.4s',
              textAlign: 'center',
              minHeight: '140px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
              <Text 
                size="3xl" 
                color="brand" 
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-english)',
                  lineHeight: '1',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                }}
              >
                +{animatedStats.campaigns}
              </Text>
            </div>
            <Text 
              size="lg" 
              color="primary"
              style={{
                fontWeight: '500',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                fontSize: 'clamp(0.875rem, 3vw, 1rem)',
                lineHeight: '1.3',
              }}
            >
              {language === 'ar' ? 'حملات  تم تنفيذها' : 'Successful Campaigns'}
            </Text>
          </div>
        </div>
      </div>
      
      {/* شعاع إضافي في الخلفية مع كسر في النهاية */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at top left, rgba(220, 38, 38, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    </section>
  );
};

export default HeroSection;
