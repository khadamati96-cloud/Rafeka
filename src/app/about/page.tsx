import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Rafeka | عن رافقة',
  description: 'Learn about Rafeka Agency vision, mission and expertise. تعرف على رؤية ومهمة وكالة رافقة وخبراتنا.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Rafeka Agency', description: 'Vision, mission & expertise of Rafeka digital agency.', type: 'profile' }
};

export default function AboutPage() { return <AboutClient />; }
