'use client';

import React from 'react';
import { Text } from './BrandComponents';
import { useLanguage } from '../../providers/LanguageProvider';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Behance',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.67 1.45.67 2.37 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.767-.64.168-1.32.252-2.05.252H0V4.503h6.938zm9.002 12.162c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.297.68-.663.78-1.093h2.588c-.403 1.28-1.048 2.207-1.944 2.78-.896.573-1.996.86-3.302.86-0.842 0-1.613-.123-2.31-.368-.697-.245-1.29-.595-1.777-1.05-.488-.455-.863-1.01-1.125-1.667-.263-.658-.394-1.408-.394-2.25 0-.832.135-1.58.406-2.245.27-.666.651-1.222 1.12-1.67.47-.445 1.05-.784 1.736-1.015.686-.23 1.45-.345 2.28-.345.902 0 1.685.13 2.355.39.67.26 1.22.624 1.654 1.097.434.473.75 1.042.947 1.706.196.664.294 1.405.294 2.22 0 .132-.006.26-.02.384H14.26c.06.97.38 1.698.82 2.125z"/>
        </svg>
      )
    }
  ];

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: 'var(--spacing-4xl) var(--spacing-lg) var(--spacing-xl)',
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* الشعار والعنوان */}
        <div style={{
          marginBottom: 'var(--spacing-3xl)',
        }}>
          <Text 
            size="4xl"
            style={{
              fontWeight: 'bold',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-md)',
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-red) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {language === 'ar' ? 'وكالة رافقة' : 'Rafeka Agency'}
          </Text>
          
          <Text 
            size="lg"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            {language === 'ar' 
              ? 'نحول أفكارك إلى واقع رقمي مبهر'
              : 'Transforming your ideas into stunning digital reality'
            }
          </Text>
        </div>

        {/* أيقونات التواصل الاجتماعي */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-3xl)',
          flexWrap: 'wrap',
        }}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-md) var(--spacing-lg)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem',
                fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
                gap: 'var(--spacing-sm)',
                minWidth: '120px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand-red)';
                e.currentTarget.style.borderColor = 'var(--brand-red)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* خط فاصل */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
          marginBottom: 'var(--spacing-xl)',
        }} />

        {/* حقوق النشر */}
        <div>
          <Text 
            size="sm"
            style={{
              fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
              color: 'var(--text-secondary)',
              opacity: 0.8,
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            }}
          >
            {language === 'ar' 
              ? `© ${new Date().getFullYear()} وكالة رافقة • جميع الحقوق محفوظة`
              : `© ${new Date().getFullYear()} Rafeka Agency • All rights reserved`
            }
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
