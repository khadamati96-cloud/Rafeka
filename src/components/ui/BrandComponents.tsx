// ========== مكونات الهوية البصرية ==========

import React from 'react';
import { BRAND_CLASSES } from '../../styles/brand-constants';

// مكون الزر الأساسي
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '',
  ...props 
}) => {
  const baseClass = variant === 'primary' ? BRAND_CLASSES.btnPrimary : BRAND_CLASSES.btnSecondary;
  const sizeClass = size === 'sm' ? 'text-sm p-sm' : size === 'lg' ? 'text-lg p-lg' : 'text-base p-md';
  
  return (
    <button 
      className={`${baseClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// مكون النص مع الخط العربي
export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  color?: 'primary' | 'secondary' | 'muted' | 'brand';
  children: React.ReactNode;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}

export const Text: React.FC<TextProps> = ({
  size = 'base',
  color = 'primary',
  children,
  as: Component = 'div',
  className = '',
  ...props
}) => {
  const sizeClass = `text-${size}`;
  const colorClass = `text-${color}`;
  
  return (
    <Component 
      className={`${BRAND_CLASSES.fontArabic} ${sizeClass} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// مكون الكارد
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'lg',
  className = '',
  ...props
}) => {
  const paddingClass = `p-${padding}`;
  
  return (
    <div 
      className={`${BRAND_CLASSES.card} ${paddingClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// مكون الحاوية
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'lg',
  className = '',
  ...props
}) => {
  const maxWidthClass = maxWidth === 'full' ? 'max-w-full' : 'container';
  
  return (
    <div 
      className={`${maxWidthClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// مكون الشعار
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'normal' | 'large';
  type?: 'logo' | 'name';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'normal',
  type = 'logo',
  className = '',
  ...props
}) => {
  const sizeClass = size === 'large' ? BRAND_CLASSES.logoLarge : BRAND_CLASSES.logo;
  const src = type === 'logo' ? '/logo.png' : '/name.png';
  
  return (
    <img 
      src={src}
      alt="رافقة"
      className={`${sizeClass} ${className}`}
      {...props}
    />
  );
};

// مكون الشبكة
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  gap = 'md',
  className = '',
  ...props
}) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: `var(--spacing-${gap})`,
  };
  
  return (
    <div 
      style={gridStyle}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};
