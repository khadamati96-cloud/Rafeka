'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Text, Button } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const router = useRouter();
  // تمت إزالة الإحصائيات من الهيرو بناءً على الطلب

  return (
  <section 
      className="hero-section"
      style={{
        minHeight: '80vh',
        background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.1) 30%, var(--bg-primary) 50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
  /* Reduced bottom padding to tighten space before next section */
  padding: 'var(--spacing-xl) var(--spacing-lg) var(--spacing-lg)',
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
        /* Force hero about button to hug its text */
        .hero-about-btn { 
          width: auto !important; 
          min-width: 0 !important; 
          display: inline-flex !important; 
          align-items: center; 
          justify-content: center; 
          padding: 4px 14px !important; 
          white-space: nowrap !important; 
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 3rem !important; /* was 4rem */
            min-height: 60vh !important; /* was 70vh */
            justify-content: flex-start !important;
            padding-bottom: 0.75rem !important; /* was 2rem – tighter gap */
          }
          .hero-container {
            margin-top: 1rem !important;
            position: relative !important;
            z-index: 3 !important;
          }
          .hero-title {
            margin-bottom: 1rem !important;
            margin-top: 6.0rem !important; /* دفع العنوان لأسفل قليلاً على الجوال */
            font-size: clamp(1.9rem, 1vw, 1.5rem) !important; /* تصغير الخط على الجوال فقط */
            line-height: 1.15 !important; /* توازن بعد التصغير */
          }
          .hero-description {
            margin-bottom: 1.5rem !important;
          }
          .hero-about-btn { 
            padding: 4px 12px !important; /* slightly tighter on mobile */
          }
          .hero-mobile-bg {
            display: block !important;
            /* Adjustments to show the whole image more clearly */
            background-size: contain !important; /* ensure full image is visible */
            background-position: top center !important; /* keep important top content visible */
            background-repeat: no-repeat !important;
            top: 0 !important; /* start from top */
            height: 60vh !important; /* smaller so it fits fully */
            opacity: 0.45 !important; /* a bit more visible for clarity */
            filter: drop-shadow(0 4px 10px rgba(0,0,0,0.05));
            /* Optional subtle scale for very small phones */
          }
          @media (max-width: 420px) {
            .hero-mobile-bg {
              height: 55vh !important;
            }
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
            fontWeight: 800, /* more bold (أعرض) */
            marginBottom: 'var(--spacing-lg)',
            lineHeight: '1.1',
            fontSize: 'clamp(2.6rem, 6.2vw, 4.2rem)', /* slightly larger */
            fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
            /* Gradient from white to neutral gray */
            background: 'linear-gradient(135deg, #FFFFFF 0%, #D1D5DB 60%, #9CA3AF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: language === 'ar' ? '0' : '0.5px',
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

        
        {/* زر من نحن */}
        <Button 
          variant="primary"
          className="hero-about-btn"
          style={{
            fontSize: 'var(--text-xl)',
            padding: '4px 14px', /* tighter padding; width now hugs text */
            fontWeight: '600',
            borderRadius: 'var(--radius-md)',
            transition: 'all 0.3s ease',
            fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
            position: 'relative',
            overflow: 'hidden',
            border: 'none',
            marginBottom: 'var(--spacing-2xl)',
            lineHeight: 1.15,
            minWidth: '0',
            width: 'auto',
            display: 'inline-flex',
            whiteSpace: 'nowrap'
          }}
          onClick={() => router.push('/about')}
          aria-label={language === 'ar' ? 'الانتقال إلى صفحة من نحن' : 'Go to About Us page'}
        >
          {language === 'ar' ? 'من نحن' : 'About Us'}
        </Button>

  {/* تم حذف الإحصائيات من الهيرو */}
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
