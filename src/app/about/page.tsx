import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Rafeka',
  description: 'Learn about Rafeka Agency vision, mission and expertise. تعرف على رؤية ومهمة وكالة رافقة وخبراتنا. Rafeka Ajansı vizyonu, misyonu ve uzmanlık alanlarımızı keşfedin.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Rafeka Agency', description: 'Vision, mission & expertise of Rafeka digital agency. رؤية ومهمة وخبرات وكالة رافقة الرقمية. Rafeka Ajansı’nın vizyonu, misyonu ve uzmanlığı.', type: 'profile' }
};

export default function AboutPage() { return <AboutClient />; }
