'use client';

import { Text } from '@/components/ui/BrandComponents';
import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';

import { LanguageProvider, useLanguage } from '@/providers/LanguageProvider';

function HomeContent() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />
      <HeroSection />
     
      
      {/* باقي الأقسام ممكن تضاف هنا */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        backgroundColor: 'var(--bg-primary)'
      }}>
        <Text size="2xl" color="secondary" as="h2">
          {t('mainTitle')}
        </Text>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
