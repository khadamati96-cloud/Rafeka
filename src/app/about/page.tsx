'use client';

import React, { useState, useEffect } from 'react';
import { Text } from '../../components/ui/BrandComponents';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import { LanguageProvider, useLanguage } from '../../providers/LanguageProvider';
import QueryProvider from '../../providers/QueryProvider';

function AboutContent() {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [progressVisible, setProgressVisible] = useState(false);
  const [progressValues, setProgressValues] = useState([0, 0, 0]);

  // المراجع للعناصر
  const visionRef = React.useRef<HTMLElement>(null);
  const missionRef = React.useRef<HTMLElement>(null);
  const expertiseRef = React.useRef<HTMLElement>(null);

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
      threshold: 0.3, // العنصر يظهر لما 30% منه يكون مرئي
      rootMargin: '-50px 0px -50px 0px'
    };

    // متغيرات لتتبع حالة العرض لكل قسم
    let visionTriggered = false;
    let missionTriggered = false;
    let expertiseTriggered = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // قسم الرؤية - يشتغل مرة واحدة فقط
          if (element === visionRef.current && !visionTriggered) {
            visionTriggered = true;
            setIsVisible(true);
          }
          
          // قسم المهمة - يشتغل مرة واحدة فقط
          if (element === missionRef.current && !missionTriggered && isVisible) {
            missionTriggered = true;
            setTimeout(() => {
              const newVisibleItems = new Array(6).fill(false);
              setVisibleItems(newVisibleItems);
              
              // إظهار العناصر واحد واحد
              newVisibleItems.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleItems(prev => {
                    const updated = [...prev];
                    updated[index] = true;
                    return updated;
                  });
                }, index * 150);
              });
            }, 200);
          }
          
          // قسم الإتقان - يشتغل مرة واحدة فقط
          if (element === expertiseRef.current && !expertiseTriggered) {
            expertiseTriggered = true;
            setProgressVisible(true);
            
            // أنيميشن البروجرس بارز
            setTimeout(() => {
              const targetValues = [98, 95, 90];
              targetValues.forEach((target, index) => {
                let current = 0;
                const increment = target / 60;
                
                const progressTimer = setInterval(() => {
                  current += increment;
                  if (current >= target) {
                    current = target;
                    clearInterval(progressTimer);
                  }
                  
                  setProgressValues(prev => {
                    const updated = [...prev];
                    updated[index] = Math.round(current);
                    return updated;
                  });
                }, 25);
              });
            }, 500);
          }
        }
      });
    }, observerOptions);

    // مراقبة العناصر
    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (expertiseRef.current) observer.observe(expertiseRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  // بيانات الرؤية والمهمة
  const aboutData = {
    vision: {
      titleAr: 'رؤيتنا',
      titleEn: 'Our Vision',
      contentAr: 'نسعى لتمكين الشركات عالميًا عبر حلول رقمية مبتكرة ومصممة خصيصًا لدعم نموها، وتعزيز تفاعلها، وإحداث تحول ملموس في حضورها الرقمي. نطمح لأن نكون الوكالة الرقمية الأولى التي يُضرب بها المثل في الإبداع، والتميز، والالتزام المطلق بنجاح عملائنا.',
      contentEn: 'We strive to empower companies globally through innovative digital solutions custom-designed to support their growth, enhance their engagement, and create tangible transformation in their digital presence. We aspire to be the premier digital agency that sets the standard for creativity, excellence, and absolute commitment to our clients\' success.'
    },
    mission: {
      titleAr: 'مهمتنا',
      titleEn: 'Our Mission',
      subtitleAr: 'تحويل الأفكار الطموحة إلى إنجازات رقمية مؤثرة',
      subtitleEn: 'Transforming ambitious ideas into impactful digital achievements',
      items: [
        {
          titleAr: 'تحفيز الإبداع',
          titleEn: 'Inspiring Creativity',
          contentAr: 'نؤمن بأن الابتكار هو جوهر النجاح، لذلك نعمل على تحفيز الإبداع في كل خطوة، لنقدّم حلولًا مبتكرة تواكب تطلعات عملائنا وتضمن ريادتهم في السوق.',
          contentEn: 'We believe innovation is the essence of success, so we work to inspire creativity at every step, delivering innovative solutions that meet our clients\' aspirations and ensure their market leadership.'
        },
        {
          titleAr: 'ترسيخ الشفافية',
          titleEn: 'Establishing Transparency',
          contentAr: 'نجعل من الصراحة والوضوح أساسًا لكل تعاملاتنا، فنضمن لعملائنا معرفة كاملة بكل تفاصيل مشاريعهم، ما يعزز الثقة ويقوي الشراكة.',
          contentEn: 'We make honesty and clarity the foundation of all our interactions, ensuring our clients have complete knowledge of every detail of their projects, which builds trust and strengthens partnerships.'
        },
        {
          titleAr: 'التعلم المستمر',
          titleEn: 'Continuous Learning',
          contentAr: 'نطوّر أنفسنا باستمرار ونواكب أحدث التقنيات وأفضل الممارسات، لنقدّم حلولًا متجددة ومتفوقة تلبي احتياجات المستقبل.',
          contentEn: 'We continuously develop ourselves and keep up with the latest technologies and best practices, to deliver renewed and superior solutions that meet future needs.'
        },
        {
          titleAr: 'دعم الاستدامة',
          titleEn: 'Supporting Sustainability',
          contentAr: 'نلتزم بالممارسات التي تحافظ على البيئة وتدعم التنمية المستدامة، من خلال عمليات مسؤولة تسهم في صناعة أثر إيجابي طويل الأمد.',
          contentEn: 'We are committed to practices that preserve the environment and support sustainable development, through responsible operations that contribute to creating a long-term positive impact.'
        },
        {
          titleAr: 'المساهمة المجتمعية',
          titleEn: 'Community Contribution',
          contentAr: 'نعمل على إحداث فرق حقيقي في مجتمعنا عبر دعم المبادرات المحلية، وتعزيز التأثير الاجتماعي الإيجابي في كل مشروع ننفذه.',
          contentEn: 'We work to make a real difference in our community by supporting local initiatives and enhancing positive social impact in every project we execute.'
        },
        {
          titleAr: 'تحسين تجربة المستخدم',
          titleEn: 'Improving User Experience',
          contentAr: 'نسعى لبناء تجارب استخدام متميزة وسلسة، تمنح جمهور عملائنا تفاعلًا ممتعًا وانطباعًا يدوم، بما يعكس قوة علامتهم التجارية.',
          contentEn: 'We strive to build exceptional and seamless user experiences that give our clients\' audiences enjoyable interaction and lasting impressions, reflecting the strength of their brand.'
        }
      ]
    },
    expertise: {
      titleAr: 'إتقان فن الحلول الرقمية',
      titleEn: 'Mastering the Art of Digital Solutions',
      subtitleAr: 'نتميز بخبرتنا بجودتها العالية حيث تمتد بين الابتكار والدقة وأفضل الممارسات بأسلوب استثمار توجهات العملاء',
      subtitleEn: 'We excel with our high-quality expertise that spans innovation, precision, and best practices in a way that invests in client trends',
      skills: [
        {
          nameAr: 'رضا العملاء',
          nameEn: 'Client Satisfaction',
          percentage: 98
        },
        {
          nameAr: 'معدل إنجاز المشاريع',
          nameEn: 'Project Completion Rate',
          percentage: 95
        },
        {
          nameAr: 'معدل نجاح الحملات',
          nameEn: 'Campaign Success Rate',
          percentage: 90
        }
      ]
    }
  };

  return (
  
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* قسم الرؤية */}
      <section 
        ref={visionRef}
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
              {language === 'ar' ? aboutData.vision.titleAr : aboutData.vision.titleEn}
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
              {/* خلفية متدرجة خفيفة */}
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
                {language === 'ar' ? aboutData.vision.contentAr : aboutData.vision.contentEn}
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المهمة */}
      <section 
        ref={missionRef}
        style={{
          padding: 'var(--spacing-4xl) var(--spacing-lg)',
          background: 'var(--bg-primary)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease-out 0.4s',
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
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-lg)',
              }}
            >
              {language === 'ar' ? aboutData.mission.titleAr : aboutData.mission.titleEn}
            </Text>
            
            <Text 
              size="xl"
              style={{
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                color: 'var(--brand-red)',
                fontWeight: '600',
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              }}
            >
              {language === 'ar' ? aboutData.mission.subtitleAr : aboutData.mission.subtitleEn}
            </Text>
          </div>

          {/* عناصر المهمة */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginTop: 'var(--spacing-3xl)',
          }}>
            {aboutData.mission.items.map((item, index) => (
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
                  const number = card.querySelector('.number-circle') as HTMLElement;
                  const content = card.querySelector('.content-area') as HTMLElement;
                  
                  card.style.transform = 'translateY(-10px) scale(1.02)';
                  card.style.borderColor = 'rgba(220, 38, 38, 0.4)';
                  card.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.15)';
                  card.style.background = 'rgba(255, 255, 255, 0.06)';
                  
                  if (number) {
                    number.style.transform = 'rotate(360deg) scale(1.1)';
                    number.style.background = 'linear-gradient(135deg, #ff4757, var(--brand-red))';
                  }
                  
                  if (content) {
                    content.style.transform = 'translateX(0) scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  const number = card.querySelector('.number-circle') as HTMLElement;
                  const content = card.querySelector('.content-area') as HTMLElement;
                  
                  card.style.transform = visibleItems[index] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)';
                  card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  card.style.boxShadow = 'none';
                  card.style.background = 'rgba(255, 255, 255, 0.03)';
                  
                  if (number) {
                    number.style.transform = visibleItems[index] ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)';
                    number.style.background = 'linear-gradient(135deg, var(--brand-red), #ff4757)';
                  }
                  
                  if (content) {
                    content.style.transform = visibleItems[index] ? 'translateX(0) scale(1)' : `translateX(${language === 'ar' ? '30px' : '-30px'}) scale(1)`;
                  }
                }}
              >
                {/* رقم العنصر */}
                <div 
                  className="number-circle"
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: language === 'ar' ? '20px' : 'auto',
                    left: language === 'en' ? '20px' : 'auto',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--brand-red), #ff4757)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    transform: visibleItems[index] ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)',
                    transition: 'all 0.6s ease',
                    transitionDelay: `${index * 0.1 + 0.2}s`,
                  }}>
                  {index + 1}
                </div>

                <div 
                  className="content-area"
                  style={{ 
                    marginTop: 'var(--spacing-xl)',
                    paddingTop: 'var(--spacing-sm)',
                    opacity: visibleItems[index] ? 1 : 0,
                    transform: visibleItems[index] ? 'translateX(0)' : `translateX(${language === 'ar' ? '30px' : '-30px'})`,
                    transition: 'all 0.6s ease',
                    transitionDelay: `${index * 0.1 + 0.4}s`,
                  }}>
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
                    {language === 'ar' ? item.titleAr : item.titleEn}
                  </Text>
                  
                  <Text 
                    size="base"
                    style={{
                      lineHeight: '1.7',
                      fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      color: 'var(--text-secondary)',
                      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    }}
                  >
                    {language === 'ar' ? item.contentAr : item.contentEn}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم إتقان فن الحلول الرقمية */}
      <section 
        ref={expertiseRef}
        style={{
          padding: 'var(--spacing-4xl) var(--spacing-lg)',
          background: 'var(--bg-primary)',
          opacity: progressVisible ? 1 : 0,
          transform: progressVisible ? 'translateY(0)' : 'translateY(30px)',
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
                marginBottom: 'var(--spacing-lg)',
              }}
            >
              {language === 'ar' ? aboutData.expertise.titleAr : aboutData.expertise.titleEn}
            </Text>
            
            <Text 
              size="lg"
              style={{
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7',
              }}
            >
              {language === 'ar' ? aboutData.expertise.subtitleAr : aboutData.expertise.subtitleEn}
            </Text>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: 'var(--spacing-3xl)',
            alignItems: 'center',
          }}>
            {/* الصورة SVG */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              order: isMobile ? 2 : 2, // الصورة على اليسار
            }}>
              <svg
                width={isMobile ? "280" : "400"}
                height={isMobile ? "280" : "400"}
                viewBox="0 0 400 400"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(220, 38, 38, 0.2))',
                }}
              >
                {/* الخلفية المتدرجة */}
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                  <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#F8FAFC" />
                  </linearGradient>
                </defs>

                {/* الخلفية */}
                <rect
                  width="400"
                  height="400"
                  rx="20"
                  fill="url(#bgGradient)"
                  style={{
                    animation: progressVisible ? 'pulse 2s ease-in-out infinite' : 'none',
                  }}
                />

                {/* العقد (النقاط) */}
                {[
                  { x: 100, y: 100, delay: 0 },
                  { x: 300, y: 120, delay: 0.2 },
                  { x: 80, y: 250, delay: 0.4 },
                  { x: 320, y: 280, delay: 0.6 },
                  { x: 200, y: 300, delay: 0.8 },
                ].map((node, index) => (
                  <circle
                    key={index}
                    cx={node.x}
                    cy={node.y}
                    r="20"
                    fill="url(#nodeGradient)"
                    style={{
                      opacity: progressVisible ? 1 : 0,
                      transform: progressVisible ? 'scale(1)' : 'scale(0)',
                      transformOrigin: `${node.x}px ${node.y}px`,
                      transition: `all 0.6s ease ${node.delay}s`,
                    }}
                  />
                ))}

                {/* الخطوط الرابطة */}
                {[
                  { x1: 100, y1: 100, x2: 300, y2: 120, delay: 1 },
                  { x1: 100, y1: 100, x2: 80, y2: 250, delay: 1.2 },
                  { x1: 300, y1: 120, x2: 320, y2: 280, delay: 1.4 },
                  { x1: 80, y1: 250, x2: 200, y2: 300, delay: 1.6 },
                  { x1: 320, y1: 280, x2: 200, y2: 300, delay: 1.8 },
                ].map((line, index) => (
                  <line
                    key={index}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="3"
                    style={{
                      strokeDasharray: progressVisible ? 'none' : '200',
                      strokeDashoffset: progressVisible ? 0 : 200,
                      transition: `stroke-dashoffset 1s ease ${line.delay}s`,
                    }}
                  />
                ))}

                {/* أضافة CSS للأنيميشن */}
                <style>
                  {`
                    @keyframes pulse {
                      0%, 100% { opacity: 0.9; }
                      50% { opacity: 1; }
                    }
                  `}
                </style>
              </svg>
            </div>

            {/* الإحصائيات */}
            <div style={{
              order: isMobile ? 1 : 1, // الأرقام على اليمين
            }}>
              {aboutData.expertise.skills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: 'var(--spacing-xl)',
                    opacity: progressVisible ? 1 : 0,
                    transform: progressVisible ? 'translateX(0)' : `translateX(${language === 'ar' ? '50px' : '-50px'})`,
                    transition: `all 0.8s ease ${index * 0.2 + 0.5}s`,
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                  }}>
                    <Text
                      size="lg"
                      style={{
                        fontWeight: '600',
                        fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {language === 'ar' ? skill.nameAr : skill.nameEn}
                    </Text>
                    <Text
                      size="lg"
                      style={{
                        fontWeight: 'bold',
                        color: 'var(--brand-red)',
                        fontSize: '1.2rem',
                      }}
                    >
                      {progressValues[index]}%
                    </Text>
                  </div>
                  
                  {/* البروجرس بار */}
                  <div style={{
                    width: '100%',
                    height: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <div style={{
                      width: `${progressValues[index]}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--brand-red), #ff4757)',
                      borderRadius: '6px',
                      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {/* تأثير اللمعان */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                        animation: progressVisible ? 'shine 2s ease-in-out infinite' : 'none',
                      }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS للأنيميشن */}
        <style jsx>{`
          @keyframes shine {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}</style>
      </section>
      
      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <QueryProvider>
      <LanguageProvider>
        <AboutContent />
      </LanguageProvider>
    </QueryProvider>
  );
}
