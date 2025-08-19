'use client';

import React, { useState, useEffect } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // التقليب التلقائي البسيط
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section style={{
      padding: 'var(--spacing-4xl) var(--spacing-lg)',
      background: 'var(--bg-primary)',
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* العنوان */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-3xl)',
        }}>
          <Text 
            size="3xl" 
            as="h2"
            style={{
              fontWeight: 'bold',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            {language === 'ar' ? 'شهادات العملاء' : 'Client Testimonials'}
          </Text>
          <Text 
            size="lg"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              color: 'var(--text-secondary)',
            }}
          >
            {language === 'ar' ? 'نتائج حقيقية، وآراء حقيقية' : 'Real Results, Real Opinions'}
          </Text>
        </div>

        {/* صندوق الشهادة */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: 'var(--spacing-3xl)',
          textAlign: 'center',
        }}>
          {/* النجوم */}
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                style={{
                  color: '#FFD700',
                  fontSize: '1.5rem',
                  marginRight: '4px',
                }}
              >
                ★
              </span>
            ))}
          </div>

          {/* النص */}
          <Text 
            size="xl"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              lineHeight: '1.7',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-xl)',
              fontStyle: 'italic',
            }}
          >
            &quot;{language === 'ar' ? currentTestimonial.contentAr : currentTestimonial.contentEn}&quot;
          </Text>

          {/* معلومات العميل */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-md)',
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--brand-red), var(--brand-red-light))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
            }}>
              {currentTestimonial.image}
            </div>
            <div style={{ textAlign: 'left' }}>
              <Text 
                size="lg"
                style={{
                  fontWeight: 'bold',
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                  fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                }}
              >
                {language === 'ar' ? currentTestimonial.nameAr : currentTestimonial.nameEn}
              </Text>
              <Text 
                size="sm"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                }}
              >
                {language === 'ar' ? currentTestimonial.titleAr : currentTestimonial.titleEn}
              </Text>
            </div>
          </div>
        </div>

        {/* النقاط */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--spacing-sm)',
          marginTop: 'var(--spacing-xl)',
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
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
