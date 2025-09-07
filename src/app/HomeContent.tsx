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
  useLanguage(); // ensure provider hook hydration
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
  <RafekaNumbersSection />
      <TestimonialsSection />
      <NewProjectSection />
      <Footer />
    </>
  );
}
