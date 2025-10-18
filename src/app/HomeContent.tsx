'use client';
import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';
import LogosSection from '@/components/ui/LogosSection';
import ServicesSection from '@/components/ui/ServicesSection';
import VideoSection from '@/components/ui/VideoSection';
import WhyChooseUsSection from '@/components/ui/WhyChooseUsSection';
import StatsSection from '@/components/ui/StatsSection';
import RafekaNumbersSection from '@/components/ui/RafekaNumbersSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import NewProjectSection from '@/components/ui/NewProjectSection';
import Footer from '@/components/ui/Footer';
import { useLanguage } from '@/providers/LanguageProvider';
import React from 'react';

export default function HomeContent() {
  const { language } = useLanguage(); // ensure provider hook hydration
  const schemaByLanguage = {
    ar: {
      name: 'رافقة الرئيسية',
      description: 'وكالة رافقة - حلول رقمية شاملة.',
    },
    en: {
      name: 'Rafeka Home',
      description: 'Rafeka Agency - Comprehensive digital solutions.',
    },
    tr: {
      name: 'Rafeka Ana Sayfa',
      description: 'Rafeka Ajansı - Kapsamlı dijital çözümler.',
    },
  } as const;
  const schemaContent = schemaByLanguage[language];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context':'https://schema.org',
            '@type':'WebPage',
            name: schemaContent.name,
            inLanguage: language,
            description: schemaContent.description,
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
  <RafekaNumbersSection />
      <TestimonialsSection />
      <NewProjectSection />
      <Footer />
    </>
  );
}
