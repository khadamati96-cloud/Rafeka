'use client';

import React, { useState } from 'react';
import { Logo, Button } from './BrandComponents';
import { NavLink } from './NavigationComponents';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../../providers/LanguageProvider';

const Header: React.FC = () => {
  const { t, dir } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      style={{
        background: 'linear-gradient(to right, rgba(220, 38, 38, 0.5) 0%, rgba(220, 38, 38, 0.2) 25%, var(--bg-primary) 45%)',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
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
              <NavLink href="#home">{t('home')}</NavLink>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <NavLink href="#about">{t('about')}</NavLink>
            </li>
            <li style={{ whiteSpace: 'nowrap' }}>
              <NavLink href="#services">{t('services')}</NavLink>
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

        {/* قائمة الجوال المنسدلة */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-nav"
            style={{
              display: 'none',
              backgroundColor: 'var(--bg-secondary)',
              borderTop: '1px solid var(--border-color)',
              padding: 'var(--spacing-lg)',
            }}
          >
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
            }}>
              <li>
                <NavLink href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('home')}
                </NavLink>
              </li>
              <li>
                <NavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('about')}
                </NavLink>
              </li>
              <li>
                <NavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('services')}
                </NavLink>
              </li>
              <li>
                <NavLink href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('portfolio')}
                </NavLink>
              </li>
              <li>
                <NavLink href="#partnerships" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('partnerships')}
                </NavLink>
              </li>
              <li>
                <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('contact')}
                </NavLink>
              </li>
            </ul>
            
            {/* زر تواصل معنا للجوال */}
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <Button 
                variant="primary"
                style={{
                  width: '100%',
                  fontSize: 'var(--text-sm)',
                  padding: 'var(--spacing-md)',
                  fontWeight: '600',
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
        )}
      </div>
    </header>
  );
};

export default Header;
