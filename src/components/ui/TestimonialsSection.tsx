'use client';

import React, { useState, useEffect } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      nameAr: 'جوير علي',
      nameEn: 'Jaweer Ali',
      titleAr: 'مدير متجر إلكتروني',
      titleEn: 'E-commerce Manager',
      contentAr: 'حولت رافقة متجرنا الإلكتروني إلى منصة أنيقة وسهلة الاستخدام. ارتفعت مبيعاتنا بنسبة 35٪ خلال ثلاثة أشهر فقط! فريقهم محترف ومبدع وسريع الاستجابة.',
      contentEn: 'Rafeka transformed our e-commerce store into an elegant and user-friendly platform. Our sales increased by 35% in just three months! Their team is professional, creative, and responsive.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      nameAr: 'يزن عبدالله',
      nameEn: 'Yazan Abdallah',
      titleAr: 'مدير تسويق رقمي',
      titleEn: 'Digital Marketing Manager',
      contentAr: 'استراتيجيات السيو التي نفذتها رافقة غيرت قواعد اللعبة لنا. شهدنا زيادة بنسبة 50٪ في الزيارات العضوية وأصبحنا الآن في صدارة نتائج البحث. نوصي بخدماتهم بشدة!',
      contentEn: 'The SEO strategies implemented by Rafeka were game-changing for us. We saw a 50% increase in organic traffic and are now at the top of search results. We highly recommend their services!',
      rating: 5,
      image: '👨‍💻'
    },
    {
      nameAr: 'هبة جابر',
      nameEn: 'Hiba Gaber',
      titleAr: 'مديرة علامة تجارية',
      titleEn: 'Brand Manager',
      contentAr: 'تفاعلنا على وسائل التواصل ارتفع بشكل كبير بفضل رافقة. حملتهم المبتكرة زادت التفاعل بنسبة 70٪ وعززت الطلبات عبر الإنترنت.',
      contentEn: 'Our social media engagement increased significantly thanks to Rafeka. Their innovative campaign increased engagement by 70% and boosted online orders.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      nameAr: 'إسراء صبري',
      nameEn: 'Esraa Sabry',
      titleAr: 'مؤسسة شركة ناشئة',
      titleEn: 'Startup Founder',
      contentAr: 'العمل مع رافقة كان رائعًا. إبداعهم في المحتوى فاق توقعاتنا وزاد التفاعل على موقعنا بنسبة 60٪. فهمهم لصناعتنا وجمهورنا مذهل.',
      contentEn: 'Working with Rafeka was amazing. Their creativity in content exceeded our expectations and increased engagement on our site by 60%. Their understanding of our industry and audience is remarkable.',
      rating: 5,
      image: '👩‍🚀'
    }
  ];

  // التحكم التلقائي في السلايدات
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // تغيير كل 5 ثوانٍ

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        style={{
          color: i < rating ? '#FFD700' : '#444',
          fontSize: '1.2rem',
          marginRight: '2px',
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <section 
      style={{
        position: 'relative',
        padding: 'var(--spacing-4xl) var(--spacing-lg)',
        marginTop: '60px',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* خلفية بسيطة */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--bg-primary)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ 
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* العنوان الرئيسي */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-3xl)',
        }}>
          <Text 
            size="3xl" 
            color="primary" 
            as="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 'var(--spacing-lg)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {language === 'ar' ? 'شهادات العملاء' : 'Client Testimonials'}
          </Text>
          <Text 
            size="lg" 
            color="secondary"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              opacity: 0.9,
            }}
          >
            {language === 'ar' ? 'نتائج حقيقية، وآراء حقيقية' : 'Real Results, Real Opinions'}
          </Text>
        </div>

        {/* حاوية السلايدات */}
        <div 
          className="testimonial-container"
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            overflow: 'hidden',
            borderRadius: 'var(--radius-xl)',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(15px)',
          }}
        >
          {/* السلايدات */}
          <div 
            style={{
              display: 'flex',
              transform: `translateX(${currentIndex * -100}%)`,
              transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-slide"
                style={{
                  minWidth: '100%',
                  padding: 'var(--spacing-3xl)',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* أيقونة الاقتباس */}
                <div 
                  style={{
                    fontSize: '3rem',
                    color: 'var(--brand-red)',
                    marginBottom: 'var(--spacing-lg)',
                    opacity: 0.3,
                  }}
                >
                  "
                </div>

                {/* محتوى الشهادة */}
                <div className="testimonial-quote">
                  <Text 
                    size="lg"
                    style={{
                      fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                      lineHeight: '1.8',
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-xl)',
                      fontStyle: 'italic',
                    }}
                  >
                    {language === 'ar' ? testimonial.contentAr : testimonial.contentEn}
                  </Text>
                  {/* Debug: تحقق من وجود المحتوى */}
                  {process.env.NODE_ENV === 'development' && (
                    <div style={{ fontSize: '10px', color: 'red', marginTop: '5px' }}>
                      Debug: {language} - Content: {(language === 'ar' ? testimonial.contentAr : testimonial.contentEn)?.substring(0, 50)}...
                    </div>
                  )}
                </div>

                {/* النجوم */}
                <div className="star-rating" style={{ marginBottom: 'var(--spacing-lg)' }}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* معلومات العميل */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-md)',
                }}>
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--brand-red), var(--brand-red-light))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {testimonial.image}
                  </div>
                  <div style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
                    <Text 
                      size="lg"
                      style={{
                        fontWeight: 'bold',
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                        fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      }}
                    >
                      {language === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                    </Text>
                    <Text 
                      size="sm"
                      style={{
                        color: 'var(--text-secondary)',
                        fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      }}
                    >
                      {language === 'ar' ? testimonial.titleAr : testimonial.titleEn}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* نقاط التنقل */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-sm)',
            marginTop: 'var(--spacing-xl)',
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: currentIndex === index ? '30px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                background: currentIndex === index 
                  ? 'var(--brand-red)' 
                  : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
