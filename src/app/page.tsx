'use client';

import { Text } from '@/components/ui/BrandComponents';
import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';
import LogosSection from '@/components/ui/LogosSection';
import ServicesSection from '@/components/ui/ServicesSection';
import VideoSection from '@/components/ui/VideoSection';
import WhyChooseUsSection from '@/components/ui/WhyChooseUsSection';

import { LanguageProvider, useLanguage } from '@/providers/LanguageProvider';

function HomeContent() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />
      <HeroSection />
      <LogosSection />
      <ServicesSection />
      <VideoSection />
      <WhyChooseUsSection />
     
      
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
