'use client';

import React, { useState, useEffect } from 'react';
import { Text } from '../../components/ui/BrandComponents';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import { LanguageProvider } from '../../providers/LanguageProvider';
import QueryProvider from '../../providers/QueryProvider';

const AboutPage: React.FC = () => {
  const [activeSquare, setActiveSquare] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // تحديد حجم الشبكة حسب الشاشة
  const gridSize = isMobile 
    ? { cols: 3, rows: 4 }  // شبكة صغيرة للموبايل (12 مربع)
    : { cols: 12, rows: 3 }; // شبكة مخفضة للشاشات الكبيرة (36 مربع) - حذف 3 صفوف كاملة
  
  const totalSquares = gridSize.cols * gridSize.rows;

  // تحديد حجم الشاشة
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // إعادة تعيين المربع النشط عند تغيير حجم الشبكة
  useEffect(() => {
    setActiveSquare(0);
  }, [isMobile]);

  // تحريك المربع الأحمر كل 3 ثوان
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSquare(prev => {
        // حركة منظمة: الانتقال للمربع التالي أو العشوائي المنظم
        const possibleMoves = [];
        const currentRow = Math.floor(prev / gridSize.cols);
        const currentCol = prev % gridSize.cols;
        
        // إضافة المربعات المجاورة
        if (currentRow > 0) possibleMoves.push(prev - gridSize.cols); // فوق
        if (currentRow < gridSize.rows - 1) possibleMoves.push(prev + gridSize.cols); // تحت
        if (currentCol > 0) possibleMoves.push(prev - 1); // يسار
        if (currentCol < gridSize.cols - 1) possibleMoves.push(prev + 1); // يمين
        
        // اختيار حركة عشوائية من الحركات المتاحة
        return possibleMoves[Math.floor(Math.random() * possibleMoves.length)] || 0;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [gridSize.cols, gridSize.rows, totalSquares]);

  return (
    <QueryProvider>
      <LanguageProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          
          {/* الهيرو مع شبكة المربعات */}
          <section style={{
            position: 'relative',
            height: isMobile ? '50vh' : '60vh', // ارتفاع متوسط
            background: 'var(--bg-primary)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'flex-start', // محاذاة لأعلى للجميع
            justifyContent: 'center',
            marginTop: 0, // إزالة أي فاصل مع الهيدر
            paddingTop: isMobile ? '1rem' : '1.5rem', // مسافة مريحة للجميع
            width: '100vw', // عرض كامل للشاشة
            marginLeft: 'calc(-50vw + 50%)', // توسيط وتوسيع للشاشة الكاملة
          }}>
            
            {/* شبكة المربعات في الخلفية */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: isMobile ? '350px' : '480px', // ارتفاع ثابت حسب الشاشة
              display: 'grid',
              gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
              gap: isMobile ? '1px' : '2px',
              padding: 0, // إزالة جميع الحشو
              margin: 0,  // إزالة جميع الهوامش
              zIndex: 1,
            }}>
              {Array.from({ length: totalSquares }).map((_, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: index === activeSquare 
                      ? 'rgba(220, 38, 38, 0.15)' 
                      : 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '4px',
                    transition: 'all 1.5s ease-in-out',
                    transform: index === activeSquare ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
              ))}
            </div>

            {/* المحتوى فوق الشبكة */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              width: '100vw', // عرض كامل للشاشة
              marginLeft: 'calc(-50vw + 50%)', // توسيط وتوسيع للشاشة الكاملة
              padding: 0,
            }}>
              {/* النص فوق الصورة */}
             

              {/* صورة الفريق */}
              <div style={{
                width: '100%',
                margin: 0,
                padding: 0,
                marginTop: '-12rem', // نزول صغير للصورة
              }}>
                <img 
                  src="/all-team.png" 
                  alt="فريق رفيقة"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain', // عرض كامل بدون قطع
                    borderRadius: 0,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                  }}
                />
              </div>
            </div>
          </section>
          
          {/* المحتوى الإضافي */}
          <main style={{
            flex: 1,
            background: 'var(--bg-primary)',
          }}>
            {/* قسم رؤيتنا */}
            <section style={{
              padding: '0.5rem var(--spacing-lg)',
              background: 'var(--bg-primary)',
              position: 'relative',
            }}>
              {/* خلفية متدرجة خفيفة */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.02) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div className="container" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
              }}>
                {/* العنوان */}
                <Text 
                  size="3xl" 
                  color="primary" 
                  as="h2"
                  style={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontFamily: 'var(--font-arabic)',
                    background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  رؤيتنا
                </Text>

                {/* النص الرئيسي */}
                <div style={{
                  maxWidth: '900px',
                  margin: '0 auto',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* تأثير الإضاءة */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />

                  <Text 
                    size="lg" 
                    color="secondary"
                    style={{
                      lineHeight: '1.8',
                      fontFamily: 'var(--font-arabic)',
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    نهدف إلى تمكين الشركات حول العالم من خلال تقديم حلول رقمية مبتكرة ومخصصة تدعم النمو، وتعزز التفاعل، وتُحدث تحولاً في حضورها الرقمي. نسعى لأن نكون الوكالة الرقمية الرائدة المعروفة بتميزها، وإبداعها، والتزامها بنجاح العملاء.
                  </Text>
                </div>
              </div>
            </section>
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </QueryProvider>
  );
};

export default AboutPage;
