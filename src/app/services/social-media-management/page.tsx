import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Social Media Management',
  description: 'Strategic social media management, content creation, engagement & analytics. إدارة السوشيال ميديا باحتراف وتحليل التفاعل. Stratejik sosyal medya yönetimi, içerik üretimi, etkileşim ve analitik.',
  alternates: { canonical: '/services/social-media-management' },
  keywords: ['social media management','إدارة السوشيال ميديا','Rafeka','community management'],
  openGraph: { title: 'Social Media Management', description: 'Content, engagement, optimization & reporting excellence. محتوى وتفاعل وتحسين وتقارير بمستوى متقدم. İçerik, etkileşim, optimizasyon ve raporlama mükemmeliyeti.', type: 'article' }
};
import SocialMediaClient from '@/app/services/social-media-management/SocialMediaClient';
export default function SocialMediaManagementPage(){ return <SocialMediaClient />; }
