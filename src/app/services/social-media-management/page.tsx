import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Social Media Management | إدارة السوشيال ميديا',
  description: 'Strategic social media management, content creation, engagement & analytics. إدارة السوشيال ميديا باحتراف وتحليل التفاعل.',
  alternates: { canonical: '/services/social-media-management' },
  keywords: ['social media management','إدارة السوشيال ميديا','Rafeka','community management'],
  openGraph: { title: 'Social Media Management | إدارة السوشيال ميديا', description: 'Content, engagement, optimization & reporting excellence.', type: 'article' }
};
// @ts-expect-error - client component local file (ensure tsconfig includes app directory)
import SocialMediaClient from './SocialMediaClient';
export default function SocialMediaManagementPage(){ return <SocialMediaClient />; }
