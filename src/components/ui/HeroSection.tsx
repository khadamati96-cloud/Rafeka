'use client';

import React from 'react';
import { Text, Button } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section 
      style={{
        minHeight: 'calc(100vh - 70px)', // طرح ارتفاع الهيدر
        background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.1) 30%, var(--bg-primary) 50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 'var(--spacing-2xl) var(--spacing-lg)',
      }}
    >
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        {/* العنوان الرئيسي */}
        <Text 
          size="5xl" 
          color="primary" 
          as="h1"
          style={{
            fontWeight: 'bold',
            marginBottom: 'var(--spacing-lg)',
            lineHeight: '1.2',
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
          style={{
            marginBottom: 'var(--spacing-xl)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-xl) auto',
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
          style={{
            fontSize: 'var(--text-lg)',
            padding: 'var(--spacing-lg) var(--spacing-2xl)',
            fontWeight: '600',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
            transition: 'all var(--transition-normal)',
            fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
          }}
          onClick={() => console.log('من نحن')}
        >
          {language === 'ar' ? 'من نحن' : 'About Us'}
        </Button>
      </div>
      
      {/* شعاع إضافي في الخلفية */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at top left, rgba(220, 38, 38, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    </section>
  );
};

export default HeroSection;
