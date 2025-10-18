import type { Metadata } from 'next';
import ServicesClient from '@/app/services/ServicesClient';
import { LanguageProvider } from '@/providers/LanguageProvider';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'مجموعة خدمات رافقة: تطوير مواقع، تسويق رقمي، هوية بصرية، ذكاء اصطناعي، دعم فني واستضافة. Rafeka services: web development, marketing, branding, AI, support & hosting. Rafeka Ajansı hizmetleri: web geliştirme, dijital pazarlama, marka tasarımı, yapay zeka, destek ve barındırma.',
  alternates: { canonical: '/services' },
  keywords: ['خدمات رقمية','digital services','Rafeka services','وكالة رافقة','web development','digital marketing','brand design','AI solutions'],
  openGraph: { title: 'Our Services', description: 'حلول رقمية متكاملة متوافقة مع أهدافك. Integrated solutions aligned with your goals. Hedeflerinize uyumlu entegre dijital çözümler.', type: 'website' }
};

export default function ServicesPage() {
  return (
    <LanguageProvider>
      <ServicesClient />
    </LanguageProvider>
  );
}
