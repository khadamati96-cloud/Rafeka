'use client';

import React, { useState, useEffect } from 'react';
import { Text } from '../../components/ui/BrandComponents';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import { LanguageProvider, useLanguage } from '../../providers/LanguageProvider';
import QueryProvider from '../../providers/QueryProvider';

function ServicesContent() {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [whyUsVisible, setWhyUsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  // المراجع للعناصر
  const heroRef = React.useRef<HTMLElement>(null);
  const servicesRef = React.useRef<HTMLElement>(null);
  const whyUsRef = React.useRef<HTMLElement>(null);
  const ctaRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer للسكرول
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px -50px 0px'
    };

    let heroTriggered = false;
    let servicesTriggered = false;
    let whyUsTriggered = false;
    let ctaTriggered = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // قسم البطل
          if (element === heroRef.current && !heroTriggered) {
            heroTriggered = true;
            setIsVisible(true);
          }
          
          // قسم الخدمات
          if (element === servicesRef.current && !servicesTriggered && isVisible) {
            servicesTriggered = true;
            setTimeout(() => {
              const newVisibleItems = new Array(5).fill(false);
              setVisibleItems(newVisibleItems);
              
              // إظهار العناصر واحد واحد
              newVisibleItems.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleItems(prev => {
                    const updated = [...prev];
                    updated[index] = true;
                    return updated;
                  });
                }, index * 200);
              });
            }, 200);
          }
          
          // قسم لماذا نحن
          if (element === whyUsRef.current && !whyUsTriggered) {
            whyUsTriggered = true;
            setWhyUsVisible(true);
          }
          
          // قسم الدعوة للتواصل
          if (element === ctaRef.current && !ctaTriggered) {
            ctaTriggered = true;
            setCtaVisible(true);
          }
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (whyUsRef.current) observer.observe(whyUsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  // بيانات الصفحة
  const servicesData = {
    hero: {
      titleAr: 'خدماتنا',
      titleEn: 'Our Services',
      subtitleAr: 'حلول رقمية متكاملة تدفع أعمالك نحو المستقبل',
      subtitleEn: 'Comprehensive digital solutions that drive your business toward the future',
      introAr: 'نقدّم باقة من الخدمات الرقمية المبتكرة التي تجمع بين الإبداع، والتقنية، والخبرة لضمان نجاح أعمالك وتحقيق أهدافك.',
      introEn: 'We offer a suite of innovative digital services that combine creativity, technology, and expertise to ensure your business success and achieve your goals.'
    },
    services: [
      {
        titleAr: 'تطوير المواقع والتطبيقات',
        titleEn: 'Web & App Development',
        descriptionAr: 'تصميم وتطوير مواقع احترافية وتطبيقات ذكية تلبي احتياجات السوق وتمنح تجربة مستخدم سلسة.',
        descriptionEn: 'Design and develop professional websites and smart applications that meet market needs and provide a seamless user experience.',
        features: [
          {
            ar: 'مواقع شركات ومتاجر إلكترونية',
            en: 'Corporate websites and e-commerce stores'
          },
          {
            ar: 'تطبيقات موبايل (iOS / Android)',
            en: 'Mobile applications (iOS / Android)'
          },
          {
            ar: 'أنظمة إدارة محتوى مخصصة',
            en: 'Custom content management systems'
          }
        ],
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path d="M4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5C3 4.44772 3.44772 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
      },
      {
        titleAr: 'التسويق الرقمي',
        titleEn: 'Digital Marketing',
        descriptionAr: 'خطط تسويقية مدروسة لتعزيز ظهورك وجذب العملاء المستهدفين.',
        descriptionEn: 'Strategic marketing plans to enhance your visibility and attract target customers.',
        features: [
          {
            ar: 'إدارة الحملات الإعلانية (Google, Meta, TikTok)',
            en: 'Advertising campaign management (Google, Meta, TikTok)'
          },
          {
            ar: 'تحسين محركات البحث (SEO)',
            en: 'Search engine optimization (SEO)'
          },
          {
            ar: 'تسويق عبر البريد الإلكتروني',
            en: 'Email marketing'
          }
        ],
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
      },
      {
        titleAr: 'الهوية البصرية والتصميم',
        titleEn: 'Visual Identity & Design',
        descriptionAr: 'بناء هوية بصرية قوية تعكس شخصية علامتك التجارية.',
        descriptionEn: 'Building a strong visual identity that reflects your brand personality.',
        features: [
          {
            ar: 'تصميم الشعارات والمواد الدعائية',
            en: 'Logo and promotional material design'
          },
          {
            ar: 'تصاميم واجهات المستخدم (UI/UX)',
            en: 'User interface design (UI/UX)'
          },
          {
            ar: 'تصميم محتوى للسوشيال ميديا',
            en: 'Social media content design'
          }
        ],
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
      },
      {
        titleAr: 'حلول الذكاء الاصطناعي',
        titleEn: 'AI Solutions',
        descriptionAr: 'دمج أحدث تقنيات الذكاء الاصطناعي في أعمالك لزيادة الكفاءة وتحسين القرارات.',
        descriptionEn: 'Integrating the latest AI technologies into your business to increase efficiency and improve decision-making.',
        features: [
          {
            ar: 'تحليل البيانات الذكي',
            en: 'Smart data analysis'
          },
          {
            ar: 'شات بوت وخدمات الدعم الآلي',
            en: 'Chatbots and automated support services'
          },
          {
            ar: 'أتمتة المهام والإجراءات',
            en: 'Task and process automation'
          }
        ],
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path d="M12 1L15.09 7.26L22 8L17 13L18.18 20L12 16.77L5.82 20L7 13L2 8L8.91 7.26L12 1Z" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
      },
      {
        titleAr: 'الاستضافة والدعم الفني',
        titleEn: 'Hosting & Technical Support',
        descriptionAr: 'خدمات استضافة آمنة ودعم فني متواصل لضمان استمرار أعمالك بلا انقطاع.',
        descriptionEn: 'Secure hosting services and continuous technical support to ensure your business continuity without interruption.',
        features: [
          {
            ar: 'استضافة مواقع سريعة وآمنة',
            en: 'Fast and secure website hosting'
          },
          {
            ar: 'صيانة وتحديثات دورية',
            en: 'Regular maintenance and updates'
          },
          {
            ar: 'نسخ احتياطي وحماية من الاختراقات',
            en: 'Backup and security protection'
          }
        ],
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
      }
    ],
    whyUs: {
      titleAr: 'لماذا نحن؟',
      titleEn: 'Why Choose Us?',
      reasons: [
        {
          titleAr: 'خبرة في السوق المحلي والعالمي',
          titleEn: 'Experience in local and global markets',
          icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
              <path d="M5 7H19" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M5 17H19" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )
        },
        {
          titleAr: 'حلول مخصصة لكل عميل',
          titleEn: 'Customized solutions for each client',
          icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 15C19.1 14.6 18.7 14.2 18.2 13.9" stroke="currentColor" strokeWidth="2"/>
              <path d="M4.6 9C4.9 9.4 5.3 9.8 5.8 10.1" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 9C19.1 9.4 18.7 9.8 18.2 10.1" stroke="currentColor" strokeWidth="2"/>
              <path d="M4.6 15C4.9 14.6 5.3 14.2 5.8 13.9" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 1V3" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 21V23" stroke="currentColor" strokeWidth="2"/>
              <path d="M22 12H20" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 12H2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )
        },
        {
          titleAr: 'التزام بالمواعيد والجودة',
          titleEn: 'Commitment to deadlines and quality',
          icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          )
        },
        {
          titleAr: 'دعم فني متواصل',
          titleEn: 'Continuous technical support',
          icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M14.7 6.3C16.2 7.8 16.2 10.2 14.7 11.7L11.7 14.7C10.2 16.2 7.8 16.2 6.3 14.7C4.8 13.2 4.8 10.8 6.3 9.3L9.3 6.3" stroke="currentColor" strokeWidth="2"/>
              <path d="M9.3 17.7C7.8 16.2 7.8 13.8 9.3 12.3L12.3 9.3C13.8 7.8 16.2 7.8 17.7 9.3C19.2 10.8 19.2 13.2 17.7 14.7L14.7 17.7" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 10L10 14" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )
        }
      ]
    },
    cta: {
      titleAr: 'جاهز لبدء مشروعك؟',
      titleEn: 'Ready to start your project?',
      subtitleAr: 'تواصل معنا الآن واحصل على استشارة مجانية',
      subtitleEn: 'Contact us now and get a free consultation',
      buttonAr: 'ابدأ مشروعك الآن',
      buttonEn: 'Start Your Project Now'
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* قسم البطل - العنوان الرئيسي */}
      <section 
        ref={heroRef}
        style={{
          padding: 'var(--spacing-4xl) var(--spacing-lg)',
          paddingTop: isMobile ? 'calc(70px + var(--spacing-3xl))' : 'calc(70px + var(--spacing-4xl))',
          background: 'var(--bg-primary)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-3xl)',
          }}>
            <Text 
              size="3xl" 
              as="h1"
              style={{
                fontWeight: 'bold',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-lg)',
              }}
            >
              {language === 'ar' ? servicesData.hero.titleAr : servicesData.hero.titleEn}
            </Text>
            
            <Text 
              size="xl"
              style={{
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                color: 'var(--brand-red)',
                fontWeight: '600',
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                marginBottom: 'var(--spacing-xl)',
              }}
            >
              {language === 'ar' ? servicesData.hero.subtitleAr : servicesData.hero.subtitleEn}
            </Text>
            
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding: 'var(--spacing-xl)',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.02) 0%, transparent 70%)',
                pointerEvents: 'none',
                borderRadius: '20px',
              }} />
              
              <Text 
                size="lg"
                style={{
                  lineHeight: '1.8',
                  fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {language === 'ar' ? servicesData.hero.introAr : servicesData.hero.introEn}
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الخدمات */}
      <section 
        ref={servicesRef}
        style={{
          padding: 'var(--spacing-4xl) var(--spacing-lg)',
          background: 'var(--bg-primary)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease-out 0.4s',
        }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginTop: 'var(--spacing-2xl)',
          }}>
            {servicesData.services.map((service, index) => (
              <div
                key={index}
                style={{
                  padding: 'var(--spacing-xl)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  opacity: visibleItems[index] ? 1 : 0,
                  transform: visibleItems[index] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '0.6s',
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const icon = card.querySelector('.service-icon') as HTMLElement;
                  
                  card.style.transform = 'translateY(-10px) scale(1.02)';
                  card.style.borderColor = 'rgba(220, 38, 38, 0.4)';
                  card.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.15)';
                  card.style.background = 'rgba(255, 255, 255, 0.06)';
                  
                  if (icon) {
                    icon.style.transform = 'rotate(10deg) scale(1.1)';
                    icon.style.color = 'var(--brand-red)';
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  const icon = card.querySelector('.service-icon') as HTMLElement;
                  
                  card.style.transform = visibleItems[index] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)';
                  card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  card.style.boxShadow = 'none';
                  card.style.background = 'rgba(255, 255, 255, 0.03)';
                  
                  if (icon) {
                    icon.style.transform = 'rotate(0deg) scale(1)';
                    icon.style.color = 'var(--text-primary)';
                  }
                }}
              >
                {/* أيقونة الخدمة */}
                <div 
                  className="service-icon"
                  style={{
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--spacing-lg)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                  }}>
                  {service.icon}
                </div>

                <div>
                  <Text 
                    size="xl"
                    as="h3"
                    style={{
                      fontWeight: 'bold',
                      fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-md)',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                    }}
                  >
                    {language === 'ar' ? service.titleAr : service.titleEn}
                  </Text>
                  
                  <Text 
                    size="base"
                    style={{
                      lineHeight: '1.7',
                      fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      color: 'var(--text-secondary)',
                      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                      marginBottom: 'var(--spacing-lg)',
                    }}
                  >
                    {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                  </Text>

                  {/* قائمة المميزات */}
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 'var(--spacing-sm)',
                        fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                        color: 'var(--text-secondary)',
                        fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      }}>
                        <span style={{
                          color: 'var(--brand-red)',
                          marginRight: language === 'ar' ? 'var(--spacing-sm)' : '0',
                          marginLeft: language === 'en' ? 'var(--spacing-sm)' : '0',
                          fontSize: '1.1rem',
                        }}>
                          •
                        </span>
                        {language === 'ar' ? feature.ar : feature.en}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم لماذا نحن */}
      <section 
        ref={whyUsRef}
        style={{
          padding: 'var(--spacing-4xl) var(--spacing-lg)',
          background: 'var(--bg-primary)',
          opacity: whyUsVisible ? 1 : 0,
          transform: whyUsVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease-out',
        }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-3xl)',
          }}>
            <Text 
              size="3xl" 
              as="h2"
              style={{
                fontWeight: 'bold',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-xl)',
              }}
            >
              {language === 'ar' ? servicesData.whyUs.titleAr : servicesData.whyUs.titleEn}
            </Text>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 'var(--spacing-xl)',
          }}>
            {servicesData.whyUs.reasons.map((reason, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  padding: 'var(--spacing-lg)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  opacity: whyUsVisible ? 1 : 0,
                  transform: whyUsVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 0.2}s`,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const icon = card.querySelector('.why-us-icon') as HTMLElement;
                  
                  card.style.transform = 'translateY(-10px) scale(1.02)';
                  card.style.borderColor = 'rgba(220, 38, 38, 0.4)';
                  card.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.15)';
                  card.style.background = 'rgba(255, 255, 255, 0.06)';
                  
                  if (icon) {
                    icon.style.transform = 'rotate(10deg) scale(1.1)';
                    icon.style.color = 'var(--brand-red)';
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  const icon = card.querySelector('.why-us-icon') as HTMLElement;
                  
                  card.style.transform = whyUsVisible ? 'translateY(0)' : 'translateY(20px)';
                  card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  card.style.boxShadow = 'none';
                  card.style.background = 'rgba(255, 255, 255, 0.03)';
                  
                  if (icon) {
                    icon.style.transform = 'rotate(0deg) scale(1)';
                    icon.style.color = 'var(--text-primary)';
                  }
                }}
              >
                <div 
                  className="why-us-icon"
                  style={{
                    color: 'var(--text-primary)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}>
                  {reason.icon}
                </div>
                
                <Text 
                  size="lg"
                  style={{
                    fontWeight: '600',
                    fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                  }}
                >
                  {language === 'ar' ? reason.titleAr : reason.titleEn}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الدعوة للتواصل */}
      <section 
        ref={ctaRef}
        style={{
          padding: 'var(--spacing-4xl) var(--spacing-lg)',
          background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, var(--bg-primary) 50%, rgba(220, 38, 38, 0.05) 100%)',
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease-out',
        }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <Text 
            size="3xl" 
            as="h2"
            style={{
              fontWeight: 'bold',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            {language === 'ar' ? servicesData.cta.titleAr : servicesData.cta.titleEn}
          </Text>
          
          <Text 
            size="lg"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              marginBottom: 'var(--spacing-2xl)',
            }}
          >
            {language === 'ar' ? servicesData.cta.subtitleAr : servicesData.cta.subtitleEn}
          </Text>
          
          <button
            style={{
              padding: 'var(--spacing-lg) var(--spacing-2xl)',
              background: 'linear-gradient(135deg, var(--brand-red) 0%, #ff4757 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
              fontWeight: '600',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: ctaVisible ? 'scale(1)' : 'scale(0.8)',
              transitionDelay: '0.5s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 38, 38, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {language === 'ar' ? servicesData.cta.buttonAr : servicesData.cta.buttonEn}
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <QueryProvider>
      <LanguageProvider>
        <ServicesContent />
      </LanguageProvider>
    </QueryProvider>
  );
}
