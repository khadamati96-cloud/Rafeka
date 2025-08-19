'use client';
import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { LanguageProvider } from '@/providers/LanguageProvider';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
