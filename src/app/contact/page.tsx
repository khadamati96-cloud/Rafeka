import type { Metadata } from 'next';
// Using alias import to avoid any transient relative resolution issue
import ContactClient from '@/app/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Rafeka',
  description: 'Get in touch with Rafeka Agency via WhatsApp, email or contact form. تواصل مع وكالة رافقة عبر الواتساب أو البريد أو النموذج. Rafeka Ajansı ile WhatsApp, e-posta veya iletişim formu üzerinden iletişime geçin.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Rafeka Agency',
    description: 'Connect with our digital team for projects & partnerships. تواصل مع فريقنا الرقمي للمشاريع والشراكات. Projeler ve iş birlikleri için dijital ekibimizle iletişime geçin.',
    type: 'website',
    url: '/contact'
  }
};

export default function ContactPage() { return <ContactClient />; }
