'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const NewProjectSection: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleStartProject = () => {
    const phone = '905380330087'; // بدون علامة + لرابط wa.me
    const message = language === 'ar'
      ? 'مرحباً، أود تحديد مكالمة لمناقشة مشروع جديد.'
      : 'Hello, I would like to schedule a call to discuss a new project.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'var(--spacing-4xl) var(--spacing-lg)',
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, rgba(220, 38, 38, 0.02) 100%)',
        overflow: 'hidden',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

      {/* تأثيرات خلفية متحركة */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: isVisible ? 'float-slow 8s ease-in-out infinite 2s' : 'none',
        }}
      />

      <div className="container" style={{ 
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
      }}>
        
        {/* العلامة العلوية */}
        <div style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease',
          marginBottom: 'var(--spacing-xl)',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)',
            padding: 'var(--spacing-sm) var(--spacing-lg)',
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)',
            border: '1px solid rgba(220, 38, 38, 0.2)',
            borderRadius: '25px',
            fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
            fontSize: '0.9rem',
            color: 'var(--brand-red)',
            fontWeight: '600',
          }}>
            
            {language === 'ar' ? 'متاحون لمشروع جديد' : 'Available for New Project'}
          </div>
        </div>

        {/* العنوان الرئيسي */}
        <div style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease',
          transitionDelay: '0.2s',
          marginBottom: 'var(--spacing-xl)',
        }}>
          <Text 
            size="4xl" 
            color="primary" 
            as="h2"
            style={{
              fontWeight: 'bold',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              /* Unified pure red gradient (remove white to avoid pink tint) */
              background: 'linear-gradient(135deg, var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'var(--spacing-lg)',
              lineHeight: '1.2',
            }}
          >
            {language === 'ar' ? 'مهتم بالتعاون معنا؟' : 'Interested in Working with Us?'}
          </Text>
        </div>

        {/* الوصف */}
        <div style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease',
          transitionDelay: '0.4s',
          marginBottom: 'var(--spacing-3xl)',
        }}>
          <Text 
            size="xl" 
            color="secondary"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            {language === 'ar' 
              ? 'دعنا نتواصل ونناقش كيف يمكننا أن نساعدك في تحقيق أهدافك. نحن متخصصون لتحويل رؤيتك إلى واقع'
              : 'Let\'s connect and discuss how we can help you achieve your goals. We specialize in transforming your vision into reality'
            }
          </Text>
        </div>

        {/* الزر */}
        <div style={{
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease',
          transitionDelay: '0.6s',
        }}>
          <button
            onClick={handleStartProject}
            aria-label={language === 'ar' ? 'حدد موعد مكالمة عبر واتساب' : 'Schedule a WhatsApp call'}
            style={{
              background: 'linear-gradient(135deg, var(--brand-red) 0%, rgba(220, 38, 38, 0.8) 100%)',
              border: '2px solid transparent',
              borderRadius: '50px',
              padding: 'var(--spacing-lg) var(--spacing-3xl)',
              color: 'white',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              fontWeight: '700',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(220, 38, 38, 0.3)',
              minWidth: '250px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(220, 38, 38, 0.4)';
              e.currentTarget.style.borderColor = 'var(--brand-red)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 38, 38, 0.3)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            {/* تأثير الإضاءة */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '0',
                height: '0',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.5s ease',
                pointerEvents: 'none',
              }}
              className="button-glow"
            />
            
            <span style={{ position: 'relative', zIndex: 2 }}>
              {language === 'ar' ? 'حدد موعداً لمكالمة' : 'Schedule a Call'}
            </span>
          </button>
        </div>

        {/* نقاط صغيرة متحركة */}
        <div 
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '8px',
            height: '8px',
            background: 'var(--brand-red)',
            borderRadius: '50%',
            opacity: 0.6,
            animation: isVisible ? 'pulse-dot 3s ease-in-out infinite' : 'none',
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '15%',
            width: '6px',
            height: '6px',
            background: 'var(--brand-red-light)',
            borderRadius: '50%',
            opacity: 0.4,
            animation: isVisible ? 'pulse-dot 3s ease-in-out infinite 1.5s' : 'none',
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: '60%',
            right: '20%',
            width: '10px',
            height: '10px',
            background: 'var(--brand-red)',
            borderRadius: '50%',
            opacity: 0.3,
            animation: isVisible ? 'pulse-dot 4s ease-in-out infinite 0.5s' : 'none',
          }}
        />
      </div>
    </section>
  );
};

export default NewProjectSection;
