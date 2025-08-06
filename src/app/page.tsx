'use client';

import { Text } from '@/components/ui/BrandComponents';
import Header from '@/components/ui/Header';
import { LanguageProvider, useLanguage } from '@/providers/LanguageProvider';

function HomeContent() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 90px)', // طرح ارتفاع الهيدر + المسافة من فوق
        backgroundColor: 'var(--bg-primary)'
      }}>
        <Text size="5xl" color="brand" as="h1">
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
