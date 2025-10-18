import type { Metadata } from 'next';
import { LanguageProvider } from '@/providers/LanguageProvider';
import HomeContent from '@/app/HomeContent';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Rafeka Agency | وكالة رافقة | Rafeka Ajansı - حلول تطوير مواقع، تسويق رقمي، إدارة سوشيال ميديا، تصميم وهوية، وذكاء اصطناعي. Comprehensive web, marketing, branding & AI solutions. Rafeka Ajansı web geliştirme, dijital pazarlama, sosyal medya yönetimi ve marka tasarımı sunar.',
  alternates: { canonical: '/' },
  keywords: ['Rafeka','وكالة رافقة','تطوير مواقع','التسويق الرقمي','Social Media','هوية بصرية','AI','Branding','Web agency'],
  openGraph: { title: 'Home', description: 'حلول رقمية متكاملة تدعم نمو علامتك. Integrated solutions powering your growth. Büyümenizi destekleyen kapsamlı dijital çözümler.', type: 'website' }
};

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
