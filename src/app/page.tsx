import type { Metadata } from 'next';
import { LanguageProvider } from '@/providers/LanguageProvider';
import HomeContent from '@/app/HomeContent';

export const metadata: Metadata = {
  title: 'الصفحة الرئيسية | Home',
  description: 'Rafeka Agency | وكالة رافقة - حلول تطوير مواقع، تسويق رقمي، إدارة سوشيال ميديا، تصميم وهوية، وذكاء اصطناعي.',
  alternates: { canonical: '/' },
  keywords: ['Rafeka','وكالة رافقة','تطوير مواقع','التسويق الرقمي','Social Media','هوية بصرية','AI','Branding','Web agency'],
  openGraph: { title: 'Rafeka Agency | الصفحة الرئيسية', description: 'حلول رقمية متكاملة تدعم نمو علامتك.', type: 'website' }
};

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
