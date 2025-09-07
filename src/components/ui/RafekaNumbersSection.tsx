'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '@/providers/LanguageProvider';

const RafekaNumbersSection: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    satisfaction: 0,
    campaigns: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const satisfactionAnimation = setInterval(() => {
      setAnimatedStats(prev => {
        if (prev.satisfaction < 98) return { ...prev, satisfaction: prev.satisfaction + 1 };
        clearInterval(satisfactionAnimation);
        return prev;
      });
    }, 30);

    const campaignsAnimation = setInterval(() => {
      setAnimatedStats(prev => {
        if (prev.campaigns < 766) return { ...prev, campaigns: prev.campaigns + 15 };
        clearInterval(campaignsAnimation);
        return { ...prev, campaigns: 766 };
      });
    }, 25);

    return () => {
      clearInterval(satisfactionAnimation);
      clearInterval(campaignsAnimation);
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="rafeka-numbers-section"
      style={{
        padding: 'var(--spacing-3xl) var(--spacing-lg)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--spacing-2xl)'
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .rafeka-numbers-section { 
            padding: var(--spacing-2xl) var(--spacing-md); 
          }
          .rafeka-numbers-grid { 
            gap: var(--spacing-lg) !important; 
          }
        }
      `}</style>


      <div
        className="rafeka-numbers-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
          gap: 'var(--spacing-2xl)',
          width: '100%',
          maxWidth: '700px'
        }}
      >
        {/* Satisfaction */}
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
            alignItems: 'center'
          }}
        >
          <div style={{ marginBottom: 'var(--spacing-sm)' }}>
            <Text
              size="3xl"
              color="brand"
              style={{
                fontWeight: 'bold',
                fontFamily: 'var(--font-english)',
                lineHeight: 1,
                fontSize: 'clamp(2rem,5vw,3rem)'
              }}
            >
              {animatedStats.satisfaction}%
            </Text>
          </div>
          <Text
            size="lg"
            color="primary"
            style={{
              fontWeight: 500,
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              fontSize: 'clamp(0.875rem,3vw,1rem)',
              lineHeight: 1.3
            }}
          >
            {language === 'ar' ? 'نسبة رضا العملاء' : 'Customer Satisfaction'}
          </Text>
        </div>

        {/* Campaigns */}
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
            alignItems: 'center'
          }}
        >
          <div style={{ marginBottom: 'var(--spacing-sm)' }}>
            <Text
              size="3xl"
              color="brand"
              style={{
                fontWeight: 'bold',
                fontFamily: 'var(--font-english)',
                lineHeight: 1,
                fontSize: 'clamp(2rem,5vw,3rem)'
              }}
            >
              +{animatedStats.campaigns}
            </Text>
          </div>
          <Text
            size="lg"
            color="primary"
            style={{
              fontWeight: 500,
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              fontSize: 'clamp(0.875rem,3vw,1rem)',
              lineHeight: 1.3
            }}
          >
            {language === 'ar' ? 'حملات تم تنفيذها' : 'Successful Campaigns'}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default RafekaNumbersSection;
