import React from 'react';
import { Logo, Button } from './BrandComponents';
import { NavLink, LanguageButton } from './NavigationComponents';

const Header: React.FC = () => {
  return (
    <header 
      style={{
        backgroundColor: 'var(--bg-primary)',
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
          }}
        >
          {/* الشعار */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Logo type="name" size="normal" />
          </div>

          {/* قائمة التنقل */}
          <ul 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-xl)',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li><NavLink href="#home">الرئيسية</NavLink></li>
            <li><NavLink href="#about">من نحن</NavLink></li>
            <li><NavLink href="#services">خدماتنا</NavLink></li>
            <li><NavLink href="#portfolio">أعمالنا</NavLink></li>
            <li><NavLink href="#partnerships">الشراكات</NavLink></li>
            <li><NavLink href="#contact">تواصل معنا</NavLink></li>
          </ul>

          {/* الجانب الأيمن */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
            }}
          >
            {/* أيقونة اللغة */}
            <LanguageButton onClick={() => console.log('تغيير اللغة')} />

            {/* زر تواصل معنا */}
            <Button 
              variant="primary"
              style={{
                fontSize: 'var(--text-sm)',
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                fontWeight: '600',
              }}
              onClick={() => console.log('تواصل معنا')}
            >
              تواصل معنا
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
