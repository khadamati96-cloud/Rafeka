'use client';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'الصفحة الرئيسية | Home',
  description: 'Rafeka Agency | وكالة رافقة - حلول تطوير مواقع، تسويق رقمي، إدارة سوشيال ميديا، تصميم وهوية، وذكاء اصطناعي.',
  alternates: { canonical: '/' },
  keywords: ['Rafeka','وكالة رافقة','تطوير مواقع','التسويق الرقمي','Social Media','هوية بصرية','AI','Branding','Web agency'],
  openGraph: { title: 'Rafeka Agency | الصفحة الرئيسية', description: 'حلول رقمية متكاملة تدعم نمو علامتك.', type: 'website' }
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context':'https://schema.org',
            '@type':'WebPage',
            name:'Rafeka Home',
            inLanguage:'ar',
            description:'وكالة رافقة - حلول رقمية شاملة.',
            url:'/'
          })
        }}
      />
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
