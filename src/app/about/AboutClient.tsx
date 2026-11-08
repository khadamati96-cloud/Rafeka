"use client";
import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import QueryProvider from '@/providers/QueryProvider';
import { LanguageProvider, useLanguage } from '@/providers/LanguageProvider';
import { Text } from '@/components/ui/BrandComponents';
import type { Language } from '@/lib/translations';

type TranslationMap<T = string> = Record<Language, T>;

interface MissionItem {
  title: TranslationMap;
  content: TranslationMap;
}

interface SkillItem {
  name: TranslationMap;
  percentage: number;
}

interface AboutData {
  vision: {
    title: TranslationMap;
    content: TranslationMap;
  };
  mission: {
    title: TranslationMap;
    subtitle: TranslationMap;
    items: MissionItem[];
  };
  expertise: {
    title: TranslationMap;
    subtitle: TranslationMap;
    skills: SkillItem[];
  };
}

function AboutContent() {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [visibleItems, setVisibleItems] = React.useState<boolean[]>([]);
  const [progressVisible, setProgressVisible] = React.useState(false);
  const [progressValues, setProgressValues] = React.useState<number[]>([]);

  const visionRef = React.useRef<HTMLElement>(null);
  const missionRef = React.useRef<HTMLElement>(null);
  const expertiseRef = React.useRef<HTMLElement>(null);

  const select = React.useCallback(<T,>(map: TranslationMap<T>) => map[language], [language]);

  const aboutData = React.useMemo<AboutData>(() => ({
    vision: {
      title: { ar: 'رؤيتنا', en: 'Our Vision', tr: 'Vizyonumuz' },
      content: {
        ar: 'نسعى لتمكين الشركات عالميًا عبر حلول رقمية مبتكرة ومصممة خصيصًا لدعم نموها، وتعزيز تفاعلها، وإحداث تحول ملموس في حضورها الرقمي. نطمح لأن نكون الوكالة الرقمية الأولى التي يُضرب بها المثل في الإبداع، والتميز، والالتزام المطلق بنجاح عملائنا.',
        en: "We strive to empower companies globally through innovative digital solutions custom-designed to support their growth, enhance their engagement, and create tangible transformation in their digital presence. We aspire to be the premier digital agency that sets the standard for creativity, excellence, and absolute commitment to our clients' success.",
        tr: 'Küresel ölçekteki şirketleri, büyümelerini destekleyen, etkileşimlerini güçlendiren ve dijital varlıklarında somut dönüşüm sağlayan yenilikçi dijital çözümlerle güçlendirmeyi hedefliyoruz. Yaratıcılık, mükemmeliyet ve müşterilerimizin başarısına eksiksiz adanmışlığımızla örnek gösterilen öncü dijital ajans olmayı arzuluyoruz.',
      },
    },
    mission: {
      title: { ar: 'مهمتنا', en: 'Our Mission', tr: 'Misyonumuz' },
      subtitle: {
        ar: 'تحويل الأفكار الطموحة إلى إنجازات رقمية مؤثرة',
        en: 'Transforming ambitious ideas into impactful digital achievements',
        tr: 'İddialı fikirleri etkileyici dijital başarılara dönüştürüyoruz',
      },
      items: [
        {
          title: { ar: 'تحفيز الإبداع', en: 'Inspiring Creativity', tr: 'Yaratıcılığı Ateşlemek' },
          content: {
            ar: 'نؤمن بأن الابتكار هو جوهر النجاح، لذلك نعمل على تحفيز الإبداع في كل خطوة، لنقدّم حلولًا مبتكرة تواكب تطلعات عملائنا وتضمن ريادتهم في السوق.',
            en: "We believe innovation is the essence of success, so we work to inspire creativity at every step, delivering innovative solutions that meet our clients' aspirations and ensure their market leadership.",
            tr: 'Başarının özünde yeniliğin olduğuna inanıyoruz; bu yüzden her adımda yaratıcılığı tetikliyor, müşterilerimizin beklentilerini karşılayan ve onları pazarda öne taşıyan yenilikçi çözümler üretiyoruz.',
          },
        },
        {
          title: { ar: 'ترسيخ الشفافية', en: 'Establishing Transparency', tr: 'Şeffaflığı Pekiştirmek' },
          content: {
            ar: 'نجعل من الصراحة والوضوح أساسًا لكل تعاملاتنا، فنضمن لعملائنا معرفة كاملة بكل تفاصيل مشاريعهم، ما يعزز الثقة ويقوي الشراكة.',
            en: 'We make honesty and clarity the foundation of all our interactions, ensuring our clients have complete knowledge of every detail of their projects, which builds trust and strengthens partnerships.',
            tr: 'Tüm iletişimlerimizin temelini dürüstlük ve açıklık oluşturur; müşterilerimizin projelerinin her ayrıntısını bilmelerini sağlayarak güveni pekiştirir ve ortaklığı güçlendiririz.',
          },
        },
        {
          title: { ar: 'التعلم المستمر', en: 'Continuous Learning', tr: 'Sürekli Öğrenme' },
          content: {
            ar: 'نطوّر أنفسنا باستمرار ونواكب أحدث التقنيات وأفضل الممارسات، لنقدّم حلولًا متجددة ومتفوقة تلبي احتياجات المستقبل.',
            en: 'We continuously develop ourselves and keep up with the latest technologies and best practices, to deliver renewed and superior solutions that meet future needs.',
            tr: 'Sürekli kendimizi geliştirir, en yeni teknolojileri ve en iyi uygulamaları takip ederiz; böylece geleceğin ihtiyaçlarını karşılayan taze ve üstün çözümler sunarız.',
          },
        },
        {
          title: { ar: 'دعم الاستدامة', en: 'Supporting Sustainability', tr: 'Sürdürülebilirliği Desteklemek' },
          content: {
            ar: 'نلتزم بالممارسات التي تحافظ على البيئة وتدعم التنمية المستدامة، من خلال عمليات مسؤولة تسهم في صناعة أثر إيجابي طويل الأمد.',
            en: 'We are committed to practices that preserve the environment and support sustainable development, through responsible operations that contribute to creating a long-term positive impact.',
            tr: 'Çevreyi koruyan ve sürdürülebilir kalkınmayı destekleyen uygulamalara bağlıyız; sorumlu operasyonlarımızla uzun vadeli olumlu etkiler yaratıyoruz.',
          },
        },
        {
          title: { ar: 'المساهمة المجتمعية', en: 'Community Contribution', tr: 'Toplumsal Katkı' },
          content: {
            ar: 'نعمل على إحداث فرق حقيقي في مجتمعنا عبر دعم المبادرات المحلية، وتعزيز التأثير الاجتماعي الإيجابي في كل مشروع ننفذه.',
            en: 'We work to make a real difference in our community by supporting local initiatives and enhancing positive social impact in every project we execute.',
            tr: 'Yerel girişimleri destekleyerek ve yürüttüğümüz her projede olumlu sosyal etkiyi güçlendirerek topluluğumuzda gerçek bir fark yaratmak için çalışıyoruz.',
          },
        },
        {
          title: { ar: 'تحسين تجربة المستخدم', en: 'Improving User Experience', tr: 'Kullanıcı Deneyimini Geliştirmek' },
          content: {
            ar: 'نسعى لبناء تجارب استخدام متميزة وسلسة، تمنح جمهور عملائنا تفاعلًا ممتعًا وانطباعًا يدوم، بما يعكس قوة علامتهم التجارية.',
            en: "We strive to build exceptional and seamless user experiences that give our clients' audiences enjoyable interaction and lasting impressions, reflecting the strength of their brand.",
            tr: 'Müşterilerimizin kitlelerine keyifli etkileşim ve kalıcı izlenimler sunan, markalarının gücünü yansıtan benzersiz ve akıcı deneyimler inşa etmeye odaklanıyoruz.',
          },
        },
      ],
    },
    expertise: {
      title: { ar: 'إتقان فن الحلول الرقمية', en: 'Mastering the Art of Digital Solutions', tr: 'Dijital Çözümler Sanatında Ustalık' },
      subtitle: {
        ar: 'نتميز بخبرتنا بجودتها العالية حيث تمتد بين الابتكار والدقة وأفضل الممارسات بأسلوب استثمار توجهات العملاء',
        en: 'We excel with our high-quality expertise that spans innovation, precision, and best practices in a way that invests in client trends',
        tr: 'Yenilik, hassasiyet ve en iyi uygulamalar arasında uzanan yüksek nitelikli uzmanlığımızla öne çıkıyor, müşteri eğilimlerini doğru şekilde değerlendiriyoruz.',
      },
      skills: [
        { name: { ar: 'رضا العملاء', en: 'Client Satisfaction', tr: 'Müşteri Memnuniyeti' }, percentage: 98 },
        { name: { ar: 'معدل إنجاز المشاريع', en: 'Project Completion Rate', tr: 'Proje Tamamlama Oranı' }, percentage: 95 },
        { name: { ar: 'معدل نجاح الحملات', en: 'Campaign Success Rate', tr: 'Kampanya Başarı Oranı' }, percentage: 90 },
      ],
    },
  }), []);

  const missionItemsCount = aboutData.mission.items.length;
  const expertiseTargets = React.useMemo(
    () => aboutData.expertise.skills.map(skill => skill.percentage),
    [aboutData]
  );

  React.useEffect(() => {
    setProgressValues(Array.from({ length: expertiseTargets.length }, () => 0));
  }, [expertiseTargets.length]);

  React.useEffect(() => {
    setVisibleItems(Array.from({ length: missionItemsCount }, () => false));
  }, [missionItemsCount]);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    const observerOptions = { threshold: 0.3, rootMargin: '-50px 0px -50px 0px' };
    let visionTriggered = false;
    let missionTriggered = false;
    let expertiseTriggered = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = entry.target;

        if (target === visionRef.current && !visionTriggered) {
          visionTriggered = true;
          setIsVisible(true);
        }

        if (target === missionRef.current && !missionTriggered && isVisible && missionItemsCount > 0) {
          missionTriggered = true;
          setTimeout(() => {
            const baseVisibility = Array.from({ length: missionItemsCount }, () => false);
            setVisibleItems(baseVisibility);

            baseVisibility.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleItems(prev => {
                  const next = [...prev];
                  if (idx < next.length) {
                    next[idx] = true;
                  }
                  return next;
                });
              }, idx * 150);
            });
          }, 200);
        }

        if (target === expertiseRef.current && !expertiseTriggered) {
          expertiseTriggered = true;
          setProgressVisible(true);

          setTimeout(() => {
            expertiseTargets.forEach((goal, index) => {
              let current = 0;
              const increment = goal / 60;
              const timer = setInterval(() => {
                current += increment;
                if (current >= goal) {
                  current = goal;
                  clearInterval(timer);
                }
                setProgressValues(prev => {
                  const next = [...prev];
                    if (index < next.length) {
                      next[index] = Math.round(current);
                    }
                  return next;
                });
              }, 25);
            });
          }, 500);
        }
      });
    }, observerOptions);

    [visionRef, missionRef, expertiseRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [isVisible, missionItemsCount, expertiseTargets]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <section
        ref={visionRef}
        style={{
          padding: 'var(--spacing-4xl) var(--spacing-lg)',
          paddingTop: isMobile ? 'calc(70px + var(--spacing-3xl))' : 'calc(70px + var(--spacing-4xl))',
          background: 'var(--bg-primary)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all .8s ease-out',
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            <Text
              size="3xl"
              as="h2"
              style={{
                fontWeight: 'bold',
                fontSize: 'clamp(2rem,4vw,3rem)',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                background: 'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-xl)',
              }}
            >
              {select(aboutData.vision.title)}
            </Text>
            <div
              style={{
                maxWidth: 900,
                margin: '0 auto',
                padding: 'var(--spacing-xl)',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.02) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  borderRadius: 20,
                }}
              />
              <Text
                size="lg"
                style={{
                  lineHeight: 1.8,
                  fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                  fontSize: 'clamp(1.125rem,2.5vw,1.375rem)',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {select(aboutData.vision.content)}
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={missionRef}
        style={{
          padding: 'var(--spacing-4xl) var(--spacing-lg)',
          background: 'var(--bg-primary)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease-out .4s',
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            <Text
              size="3xl"
              as="h2"
              style={{
                fontWeight: 'bold',
                fontSize: 'clamp(2rem,4vw,3rem)',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                background: 'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-lg)',
              }}
            >
              {select(aboutData.mission.title)}
            </Text>
            <Text
              size="xl"
              style={{
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                color: 'var(--brand-red)',
                fontWeight: 600,
                fontSize: 'clamp(1.25rem,3vw,1.5rem)',
              }}
            >
              {select(aboutData.mission.subtitle)}
            </Text>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit,minmax(350px,1fr))',
              gap: 'var(--spacing-xl)',
              marginTop: 'var(--spacing-3xl)',
            }}
          >
            {aboutData.mission.items.map((item, index) => (
              <div
                key={`mission-${index}`}
                style={{
                  padding: 'var(--spacing-xl)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all .6s cubic-bezier(.175,.885,.32,1.275)',
                  opacity: visibleItems[index] ? 1 : 0,
                  transform: visibleItems[index] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(.9)',
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '.6s',
                }}
              >
                <div
                  className="number-circle"
                  style={{
                    position: 'absolute',
                    top: 15,
                    right: language === 'ar' ? 20 : 'auto',
                    left: language === 'ar' ? 'auto' : 20,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,var(--brand-red),#ff4757)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    transform: visibleItems[index] ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)',
                    transition: 'all .6s ease',
                    transitionDelay: `${index * 0.1 + 0.2}s`,
                  }}
                >
                  {index + 1}
                </div>
                <div
                  className="content-area"
                  style={{
                    marginTop: 'var(--spacing-xl)',
                    paddingTop: 'var(--spacing-sm)',
                    opacity: visibleItems[index] ? 1 : 0,
                    transform: visibleItems[index]
                      ? 'translateX(0)'
                      : `translateX(${language === 'ar' ? '30px' : '-30px'})`,
                    transition: 'all .6s ease',
                    transitionDelay: `${index * 0.1 + 0.4}s`,
                  }}
                >
                  <Text
                    size="xl"
                    as="h3"
                    style={{
                      fontWeight: 'bold',
                      fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--spacing-md)',
                      fontSize: 'clamp(1.25rem,2.5vw,1.5rem)',
                    }}
                  >
                    {select(item.title)}
                  </Text>
                  <Text
                    size="base"
                    style={{
                      lineHeight: 1.7,
                      fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                      color: 'var(--text-secondary)',
                      fontSize: 'clamp(1rem,2vw,1.125rem)',
                    }}
                  >
                    {select(item.content)}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={expertiseRef}
        style={{
          padding: 'var(--spacing-4xl) var(--spacing-lg)',
          background: 'var(--bg-primary)',
          opacity: progressVisible ? 1 : 0,
          transform: progressVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease-out',
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            <Text
              size="3xl"
              as="h2"
              style={{
                fontWeight: 'bold',
                fontSize: 'clamp(2rem,4vw,3rem)',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                background: 'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-lg)',
              }}
            >
              {select(aboutData.expertise.title)}
            </Text>
            <Text
              size="lg"
              style={{
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1.125rem,2.5vw,1.25rem)',
                maxWidth: 800,
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              {select(aboutData.expertise.subtitle)}
            </Text>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'var(--spacing-3xl)', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', order: 2 }}>
              <svg
                width={isMobile ? 280 : 400}
                height={isMobile ? 280 : 400}
                viewBox="0 0 400 400"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(220,38,38,0.2))' }}
              >
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
                <rect
                  width="400"
                  height="400"
                  rx="20"
                  fill="url(#bgGradient)"
                  style={{ animation: progressVisible ? 'pulse 2s ease-in-out infinite' : 'none' }}
                />
                {[{ x: 100, y: 100, d: 0 }, { x: 300, y: 120, d: 0.2 }, { x: 80, y: 250, d: 0.4 }, { x: 320, y: 280, d: 0.6 }, { x: 200, y: 300, d: 0.8 }].map((node, idx) => (
                  <circle
                    key={`node-${idx}`}
                    cx={node.x}
                    cy={node.y}
                    r="20"
                    fill="url(#nodeGradient)"
                    style={{
                      opacity: progressVisible ? 1 : 0,
                      transform: progressVisible ? 'scale(1)' : 'scale(0)',
                      transformOrigin: `${node.x}px ${node.y}px`,
                      transition: `all .6s ease ${node.d}s`,
                    }}
                  />
                ))}
                {[{ x1: 100, y1: 100, x2: 300, y2: 120, d: 1 }, { x1: 100, y1: 100, x2: 80, y2: 250, d: 1.2 }, { x1: 300, y1: 120, x2: 320, y2: 280, d: 1.4 }, { x1: 80, y1: 250, x2: 200, y2: 300, d: 1.6 }, { x1: 320, y1: 280, x2: 200, y2: 300, d: 1.8 }].map((line, idx) => (
                  <line
                    key={`line-${idx}`}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth={3}
                    style={{
                      strokeDasharray: progressVisible ? 'none' : '200',
                      strokeDashoffset: progressVisible ? 0 : 200,
                      transition: `stroke-dashoffset 1s ease ${line.d}s`,
                    }}
                  />
                ))}
                <style>{`@keyframes pulse{0%,100%{opacity:.9;}50%{opacity:1;}}`}</style>
              </svg>
            </div>
            <div style={{ order: 1 }}>
              {aboutData.expertise.skills.map((skill, idx) => (
                <div
                  key={`skill-${idx}`}
                  style={{
                    marginBottom: 'var(--spacing-xl)',
                    opacity: progressVisible ? 1 : 0,
                    transform: progressVisible ? 'translateX(0)' : `translateX(${language === 'ar' ? '50px' : '-50px'})`,
                    transition: `all .8s ease ${idx * 0.2 + 0.5}s`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                    <Text
                      size="lg"
                      style={{ fontWeight: 600, fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)', color: 'var(--text-primary)' }}
                    >
                      {select(skill.name)}
                    </Text>
                    <Text size="lg" style={{ fontWeight: 'bold', color: 'var(--brand-red)', fontSize: '1.2rem' }}>
                      {progressValues[idx]}%
                    </Text>
                  </div>
                  <div style={{ width: '100%', height: 12, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 6, overflow: 'hidden', position: 'relative' }}>
                    <div
                      style={{
                        width: `${progressValues[idx]}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg,var(--brand-red),#ff4757)',
                        borderRadius: 6,
                        transition: 'width 1.5s cubic-bezier(.4,0,.2,1)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)',
                          animation: progressVisible ? 'shine 2s ease-in-out infinite' : 'none',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`@keyframes shine{0%{left:-100%;}100%{left:100%;}}`}</style>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default function AboutClient() {
  return (
    <QueryProvider>
      <LanguageProvider>
        <AboutContent />
      </LanguageProvider>
    </QueryProvider>
  );
}
