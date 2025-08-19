import type { Metadata } from 'next';
import ServicesClient from '@/app/services/ServicesClient';
import { LanguageProvider } from '@/providers/LanguageProvider';

export const metadata: Metadata = {
  title: 'خدماتنا | Our Services',
  description: 'مجموعة خدمات رافقة: تطوير مواقع، تسويق رقمي، هوية بصرية، ذكاء اصطناعي، دعم فني واستضافة.',
  alternates: { canonical: '/services' },
  keywords: ['خدمات رقمية','digital services','Rafeka services','وكالة رافقة','web development','digital marketing','brand design','AI solutions'],
  openGraph: { title: 'خدمات رافقة | Rafeka Services', description: 'حلول رقمية متكاملة متوافقة مع أهدافك.', type: 'website' }
};

export default function ServicesPage() {
  return (
    <LanguageProvider>
      <ServicesClient />
    </LanguageProvider>
  );
}
