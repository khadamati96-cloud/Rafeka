'use client';

import React, { useState, useEffect } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: {
        ar: 'جوير علي',
        en: 'Jaweer Ali',
        tr: 'Jaweer Ali',
      },
      title: {
        ar: 'مدير متجر إلكتروني',
        en: 'E-commerce Manager',
        tr: 'E-ticaret Yöneticisi',
      },
      content: {
        ar: 'حولت رافقة متجرنا الإلكتروني إلى منصة أنيقة وسهلة الاستخدام. ارتفعت مبيعاتنا بنسبة 35٪ خلال ثلاثة أشهر فقط! فريقهم محترف ومبدع وسريع الاستجابة.',
        en: 'Rafeka transformed our e-commerce store into an elegant and user-friendly platform. Our sales increased by 35% in just three months! Their team is professional, creative, and responsive.',
        tr: 'Rafeka, e-ticaret mağazamızı şık ve kullanıcı dostu bir platforma dönüştürdü. Sadece üç ayda satışlarımız %35 arttı! Ekipleri profesyonel, yaratıcı ve hızlı çözüm üretiyor.',
      },
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: {
        ar: 'يزن عبدالله',
        en: 'Yazan Abdallah',
        tr: 'Yazan Abdallah',
      },
      title: {
        ar: 'مدير تسويق رقمي',
        en: 'Digital Marketing Manager',
        tr: 'Dijital Pazarlama Müdürü',
      },
      content: {
        ar: 'استراتيجيات السيو التي نفذتها رافقة غيرت قواعد اللعبة لنا. شهدنا زيادة بنسبة 50٪ في الزيارات العضوية وأصبحنا الآن في صدارة نتائج البحث. نوصي بخدماتهم بشدة!',
        en: 'The SEO strategies implemented by Rafeka were game-changing for us. We saw a 50% increase in organic traffic and are now at the top of search results. We highly recommend their services!',
        tr: 'Rafeka’nın uyguladığı SEO stratejileri bizim için oyunun kurallarını değiştirdi. Organik trafikte %50 artış gördük ve arama sonuçlarında zirveye çıktık. Hizmetlerini şiddetle tavsiye ederiz!',
      },
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: {
        ar: 'هبة جابر',
        en: 'Hiba Gaber',
        tr: 'Hiba Gaber',
      },
      title: {
        ar: 'مديرة علامة تجارية',
        en: 'Brand Manager',
        tr: 'Marka Yöneticisi',
      },
      content: {
        ar: 'تفاعلنا على وسائل التواصل ارتفع بشكل كبير بفضل رافقة. حملتهم المبتكرة زادت التفاعل بنسبة 70٪ وعززت الطلبات عبر الإنترنت.',
        en: 'Our social media engagement increased significantly thanks to Rafeka. Their innovative campaign increased engagement by 70% and boosted online orders.',
        tr: 'Rafeka sayesinde sosyal medya etkileşimimiz önemli ölçüde arttı. Yenilikçi kampanyaları etkileşimi %70 artırdı ve çevrim içi siparişleri güçlendirdi.',
      },
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: {
        ar: 'إسراء صبري',
        en: 'Esraa Sabry',
        tr: 'Esraa Sabry',
      },
      title: {
        ar: 'مؤسسة شركة ناشئة',
        en: 'Startup Founder',
        tr: 'Girişim Kurucusu',
      },
      content: {
        ar: 'العمل مع رافقة كان رائعًا. إبداعهم في المحتوى فاق توقعاتنا وزاد التفاعل على موقعنا بنسبة 60٪. فهمهم لصناعتنا وجمهورنا مذهل.',
        en: 'Working with Rafeka was amazing. Their creativity in content exceeded our expectations and increased engagement on our site by 60%. Their understanding of our industry and audience is remarkable.',
        tr: 'Rafeka ile çalışmak harikaydı. İçerikteki yaratıcılıkları beklentilerimizin ötesine geçti ve sitemizdeki etkileşimi %60 artırdı. Sektörümüzü ve kitlemizi çok iyi anlıyorlar.',
      },
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
            {(
              {
                ar: 'شهادات العملاء',
                en: 'Client Testimonials',
                tr: 'Müşteri Referansları',
              } as const
            )[language]}
          </Text>
          <Text 
            size="lg"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              color: 'var(--text-secondary)',
            }}
          >
            {(
              {
                ar: 'نتائج حقيقية، وآراء حقيقية',
                en: 'Real Results, Real Opinions',
                tr: 'Gerçek Sonuçlar, Gerçek Görüşler',
              } as const
            )[language]}
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
            &quot;{currentTestimonial.content[language]}&quot;
          </Text>

          {/* معلومات العميل (بدون صورة) */}
          <div style={{ textAlign:'center' }}>
            <Text 
              size="lg"
              style={{
                fontWeight: 'bold',
                color: 'var(--text-primary)',
                marginBottom: '4px',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              }}
            >
              {currentTestimonial.name[language]}
            </Text>
            <Text 
              size="sm"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              }}
            >
              {currentTestimonial.title[language]}
            </Text>
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
