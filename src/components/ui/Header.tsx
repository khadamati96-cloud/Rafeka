'use client';

import React, { useState } from 'react';
import { Logo, Button } from './BrandComponents';
import { NavLink } from './NavigationComponents';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../../providers/LanguageProvider';

const Header: React.FC = () => {
  const { t, dir, isLoaded } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // عدم إظهار المحتوى حتى يتم تحميل اللغة
  if (!isLoaded) {
    return (
      <header 
        style={{
          background: 'linear-gradient(to right, rgba(220, 38, 38, 0.5) 0%, rgba(220, 38, 38, 0.2) 25%, var(--bg-primary) 45%)',
          borderBottom: '1px solid var(--border-color)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
          margin: 0,
          padding: 0,
          height: '70px',
        }}
      >
        <div className="container" style={{ height: '100%' }}></div>
      </header>
    );
  }

  return (
    <header 
      style={{
        background: 'linear-gradient(to right, rgba(220, 38, 38, 0.5) 0%, rgba(220, 38, 38, 0.2) 25%, var(--bg-primary) 45%)',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        margin: 0,
        padding: 0,
      }}
    >
      <div className="container">
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
            padding: '0 var(--spacing-lg)',
            direction: dir,
          }}
        >
          {/* الشعار */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
          }}>
            <Logo type="name" size="normal" />
          </div>

          {/* قائمة التنقل - للشاشات الكبيرة */}
          <ul 
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-lg)',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              whiteSpace: 'nowrap',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <li style={{ whiteSpace: 'nowrap' }}>
              <NavLink href="/">{t('home')}</NavLink>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <NavLink href="/about">{t('about')}</NavLink>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <NavLink href="/services">{t('services')}</NavLink>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <NavLink href="#portfolio">{t('portfolio')}</NavLink>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <NavLink href="#partnerships">{t('partnerships')}</NavLink>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <NavLink href="#contact">{t('contact')}</NavLink>
            </li>
          </ul>

          {/* الجانب الأيمن */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-lg)',
            }}
          >
            {/* زر تغيير اللغة ثلاثي الأبعاد */}
            <LanguageToggle />

            {/* زر تواصل معنا - للشاشات الكبيرة */}
            <div className="desktop-contact">
              <Button 
                variant="primary"
                style={{
                  fontSize: 'var(--text-sm)',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => console.log('تواصل معنا')}
              >
                {t('contactUs')}
              </Button>
            </div>

            {/* hamburger menu للجوال */}
            <button 
              className="mobile-menu-btn"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 'var(--spacing-sm)',
                color: 'var(--text-primary)',
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </nav>

        {/* Overlay للخلفية */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
              backdropFilter: 'blur(2px)',
            }}
          />
        )}

        {/* قائمة الجوال الجانبية */}
        <div 
          className="mobile-sidebar"
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100vh',
            width: '280px',
            backgroundColor: 'var(--bg-secondary)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
          }}
        >
          {/* رأس الـ Sidebar */}
          <div style={{
            padding: 'var(--spacing-lg)',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(to left, rgba(220, 38, 38, 0.1) 0%, transparent 50%)',
          }}>
            <Logo type="name" size="normal" />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: 'var(--spacing-sm)',
                borderRadius: 'var(--radius-md)',
                transition: 'background-color 0.2s ease',
              }}
            >
              ✕
            </button>
          </div>

          {/* قائمة التنقل */}
          <nav style={{
            flex: 1,
            padding: 'var(--spacing-lg)',
            paddingTop: 'var(--spacing-xl)',
          }}>
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
            }}>
              <li>
                <a
                  href="/"
                  className="sidebar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="sidebar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('about')}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="sidebar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('services')}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="sidebar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('portfolio')}
                </a>
              </li>
              <li>
                <a
                  href="#partnerships"
                  className="sidebar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('partnerships')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="sidebar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </nav>

          {/* زر تواصل معنا وتغيير اللغة */}
          <div style={{
            padding: 'var(--spacing-lg)',
            borderTop: '1px solid var(--border-color)',
            background: 'linear-gradient(to right, rgba(220, 38, 38, 0.05) 0%, transparent 100%)',
          }}>
            {/* زر تغيير اللغة */}
            <div style={{ 
              marginBottom: 'var(--spacing-lg)',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <LanguageToggle />
            </div>
            
            {/* زر تواصل معنا */}
            <Button 
              variant="primary"
              style={{
                width: 'auto',
                fontSize: 'var(--text-base)',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                fontWeight: '500',
                borderRadius: 'var(--radius-md)',
                margin: '0 auto',
                display: 'block',
              }}
              onClick={() => {
                console.log('تواصل معنا');
                setIsMobileMenuOpen(false);
              }}
            >
              {t('contactUs')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
