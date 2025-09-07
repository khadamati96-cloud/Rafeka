'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const VideoSection: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  // تحميل الفيديو
  useEffect(() => {
    if (isVisible && videoRef.current && !videoLoaded) {
      setIsLoading(true);
      // استخدام الرابط مباشرة بدون fetch لتجنب مشاكل CORS
      const videoUrl = 'https://storage.googleapis.com/maintenanceapp-public/users/VideoCo.mp4';
      
      if (videoRef.current) {
        videoRef.current.src = videoUrl;
        setVideoLoaded(true);
      }
    }
  }, [isVisible, videoLoaded]);

  const handlePlayPause = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setVideoError(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section 
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'var(--spacing-3xl) var(--spacing-lg)',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
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
          background: 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.02) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ 
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* العنوان */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-3xl)',
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease',
        }}>
          <Text 
            size="3xl" 
            color="primary" 
            as="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 'var(--spacing-lg)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              /* Match ServicesSection heading gradient (remove white to avoid pink look) */
              background: 'linear-gradient(135deg, var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {language === 'ar' ? 'شاهد خدماتنا في العمل' : 'Watch Our Services in Action'}
          </Text>
          
          <Text 
            size="lg" 
            color="secondary"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            {language === 'ar' 
              ? 'اكتشف كيف نحول أفكارك إلى واقع رقمي مبهر'
              : 'Discover how we transform your ideas into stunning digital reality'
            }
          </Text>
        </div>

        {/* حاوي الفيديو */}
        <div 
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)',
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.9)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1.2s ease',
            transitionDelay: '0.3s',
          }}
        >
          {/* تأثير الإطار المضيء */}
          <div 
            style={{
              position: 'absolute',
              top: '-2px',
              left: '-2px',
              right: '-2px',
              bottom: '-2px',
              background: 'linear-gradient(45deg, var(--brand-red), transparent, var(--brand-red))',
              borderRadius: '24px',
              zIndex: -1,
              opacity: isVisible ? 0.6 : 0,
              transition: 'opacity 1s ease',
              animation: isVisible ? 'pulse-border 3s ease-in-out infinite' : 'none',
            }}
          />

          {/* مؤشر التحميل أو رسالة الخطأ */}
          {(isLoading || videoError) && (
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                color: 'var(--text-primary)',
                fontSize: '1.25rem',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                textAlign: 'center',
              }}
            >
              {videoError ? (
                <div>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>⚠️</div>
                  <div>{language === 'ar' ? 'عذراً، حدث خطأ في تحميل الفيديو' : 'Sorry, video loading error occurred'}</div>
                  <button
                    onClick={() => {
                      setVideoError(false);
                      setVideoLoaded(false);
                      setIsLoading(true);
                    }}
                    style={{
                      marginTop: 'var(--spacing-md)',
                      padding: 'var(--spacing-sm) var(--spacing-lg)',
                      background: 'var(--brand-red)',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      color: 'white',
                      cursor: 'pointer',
                      fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                    }}
                  >
                    {language === 'ar' ? 'إعادة المحاولة' : 'Retry'}
                  </button>
                </div>
              ) : (
                <div>
                  <div 
                    style={{
                      width: '50px',
                      height: '50px',
                      border: '3px solid rgba(220, 38, 38, 0.3)',
                      borderTop: '3px solid var(--brand-red)',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      margin: '0 auto var(--spacing-md) auto',
                    }}
                  />
                  {language === 'ar' ? 'جاري التحميل الآمن...' : 'Secure loading...'}
                </div>
              )}
            </div>
          )}

          {/* الفيديو */}
          <video
            ref={videoRef}
            poster="/video.png"
            style={{
              width: '100%',
              height: 'auto',
              minHeight: '300px',
              display: (isLoading || videoError) ? 'none' : 'block',
              borderRadius: '22px',
            }}
            controls={false}
            playsInline
            preload="metadata"
            onLoadedData={() => {
              setIsLoading(false);
              setVideoLoaded(true);
              setVideoError(false);
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => {
              setVideoError(true);
              setIsLoading(false);
            }}
            // منع التحميل المباشر
            onContextMenu={(e) => e.preventDefault()}
            controlsList="nodownload nofullscreen noremoteplayback"
          />

          {/* تحكم مخصص */}
          {!isLoading && !videoError && (
            <div 
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 5,
              }}
            >
              <button
                onClick={handlePlayPause}
                style={{
                  background: 'rgba(220, 38, 38, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '70px',
                  height: '70px',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(220, 38, 38, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.9)';
                }}
              >
                {isPlaying ? (
                  // أيقونة الإيقاف
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    style={{ color: 'black' }}
                  >
                    <rect x="6" y="4" width="4" height="16" fill="black" />
                    <rect x="14" y="4" width="4" height="16" fill="black" />
                  </svg>
                ) : (
                  // أيقونة التشغيل
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    style={{ color: 'black', marginLeft: '2px' }}
                  >
                    <polygon points="8,5 19,12 8,19" fill="black" />
                  </svg>
                )}
              </button>
            </div>
          )}

          {/* تأثيرات بصرية إضافية */}
          <div 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              width: '20px',
              height: '20px',
              background: 'var(--brand-red)',
              borderRadius: '50%',
              opacity: 0.7,
              animation: isVisible ? 'pulse-dot 2s ease-in-out infinite' : 'none',
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '20px',
              width: '15px',
              height: '15px',
              background: 'var(--brand-red-light)',
              borderRadius: '50%',
              opacity: 0.5,
              animation: isVisible ? 'pulse-dot 2s ease-in-out infinite 1s' : 'none',
            }}
          />
        </div>
      </div>

      {/* تأثيرات خلفية */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: isVisible ? 'float-slow 8s ease-in-out infinite' : 'none',
        }}
      />
      
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: isVisible ? 'float-slow 6s ease-in-out infinite 2s' : 'none',
        }}
      />
    </section>
  );
};

export default VideoSection;
