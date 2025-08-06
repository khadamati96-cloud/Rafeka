'use client';

import { Text } from '@/components/ui/BrandComponents';
import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';
import LogosSection from '@/components/ui/LogosSection';
import ServicesSection from '@/components/ui/ServicesSection';
import VideoSection from '@/components/ui/VideoSection';
import WhyChooseUsSection from '@/components/ui/WhyChooseUsSection';
import StatsSection from '@/components/ui/StatsSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import NewProjectSection from '@/components/ui/NewProjectSection';
import Footer from '@/components/ui/Footer';

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
      <StatsSection />
      <TestimonialsSection />
      <NewProjectSection />
      <Footer />
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
