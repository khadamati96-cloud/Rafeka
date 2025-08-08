'use client';

import { useState, CSSProperties } from 'react';
import { useLanguage } from '../../providers/LanguageProvider';

// Hook لتأثيرات الهوفر
export const useHoverEffect = (
  defaultStyle: CSSProperties,
  hoverStyle: CSSProperties
) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle;

  const hoverProps = {
    style,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return hoverProps;
};

// مكون رابط التنقل مع تأثيرات الهوفر
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const { language, isLoaded } = useLanguage();
  
  // عدم إظهار المحتوى حتى يتم تحميل اللغة
  if (!isLoaded) {
    return (
      <a href={href} onClick={onClick} style={{
        display: 'inline-block',
        padding: 'var(--spacing-sm) var(--spacing-md)',
        color: 'transparent',
        textDecoration: 'none',
      }}>
        {children}
      </a>
    );
  }
  
  const hoverProps = useHoverEffect(
    {
      color: 'var(--text-primary)',
      textDecoration: 'none',
      fontFamily: language === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)',
      fontSize: 'var(--text-base)',
      fontWeight: '500',
      transition: 'all var(--transition-normal)',
      padding: 'var(--spacing-sm) var(--spacing-md)',
      borderRadius: 'var(--radius-md)',
      backgroundColor: 'transparent',
      whiteSpace: 'nowrap',
      display: 'inline-block',
    },
    {
      color: 'var(--brand-red)',
      backgroundColor: 'var(--bg-secondary)',
      transform: 'translateY(-1px)',
    }
  );

  return (
    <a 
      href={href} 
      {...hoverProps}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </a>
  );
};

// مكون زر اللغة مع تأثيرات الهوفر
interface LanguageButtonProps {
  onClick?: () => void;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({ onClick }) => {
  const hoverProps = useHoverEffect(
    {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'var(--text-primary)',
      cursor: 'pointer',
      padding: 'var(--spacing-sm)',
      borderRadius: 'var(--radius-md)',
      transition: 'all var(--transition-normal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      fontSize: '18px',
    },
    {
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--brand-red)',
      transform: 'scale(1.1)',
    }
  );

  return (
    <button {...hoverProps} onClick={onClick}>
      🌐
    </button>
  );
};
