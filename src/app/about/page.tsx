'use client';

import React from 'react';
import { Text } from '../../components/ui/BrandComponents';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import { LanguageProvider } from '../../providers/LanguageProvider';
import QueryProvider from '../../providers/QueryProvider';

const AboutPage: React.FC = () => {
  return (
    <QueryProvider>
      <LanguageProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <main style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-primary)',
            padding: 'var(--spacing-xl)',
            paddingTop: 'calc(70px + var(--spacing-xl))', // إضافة مسافة للهيدر الثابت
          }}>
            <div style={{
              textAlign: 'center',
              maxWidth: '800px',
            }}>
              <Text 
                size="4xl" 
                color="primary" 
                as="h1"
                style={{
                  fontWeight: 'bold',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontFamily: 'var(--font-arabic)',
                }}
              >
                من نحن
              </Text>
            </div>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </QueryProvider>
  );
};

export default AboutPage;
