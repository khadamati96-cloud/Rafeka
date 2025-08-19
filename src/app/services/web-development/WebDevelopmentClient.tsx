"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Text, Button } from '@/components/ui/BrandComponents';
import Link from 'next/link';

export default function WebDevelopmentClient(){
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(()=>{ const o=new IntersectionObserver(([e])=>e.isIntersecting&&setVisible(true),{threshold:.2}); if(sectionRef.current) o.observe(sectionRef.current); return ()=>o.disconnect(); },[]);
  const t=(ar:string,en:string)=>language==='ar'?ar:en;
  const features=[
    { icon:(<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M2 9H22" stroke="currentColor" strokeWidth="2"/></svg>), title:t('شفافية ونظافة الكود','Clean & Transparent Code'), desc:t('هيكلة قابلة للتوسع وسهلة الصيانة.','Scalable, maintainable architecture.')},
    { icon:(<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M2 12H22" stroke="currentColor" strokeWidth="2"/></svg>), title:t('أداء وتحسين متقدم','Performance & Optimization'), desc:t('صور محسنة، تخزين، تحميل كسول، Core Web Vitals.','Images, caching, lazy loading, Core Web Vitals focus.')},
    { icon:(<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M4 4H20V16H5.17L4 17.17V4Z" stroke="currentColor" strokeWidth="2"/></svg>), title:t('مُدمج مع التحليلات','Integrated Analytics'), desc:t('قياس سلوك المستخدم والتحويل.','Measure behavior & conversion.')},
    { icon:(<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/></svg>), title:t('قابلية التوسع والنمذجة','Modular & Extensible'), desc:t('مكونات قابلة لإعادة الاستخدام.','Reusable component system.')}
  ];
  const process=[t('اكتشاف وتحليل الاحتياج','Discovery & Analysis'),t('تصميم UX/UI','UX / UI Design'),t('التطوير والبنية','Architecture & Build'),t('الجودة والأمان','Quality & Security'),t('النشر والمراقبة','Deployment & Monitoring'),t('التحسين المستمر','Continuous Optimization')];
  const stack={frontend:['Next.js','React 19','TypeScript'],perf:['Image Opt','Lazy Loading','Caching'],tooling:['ESLint','React Query','Zustand']};
  return <main style={{position:'relative'}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({ '@context':'https://schema.org','@type':'Service', name:'Web Development', alternateName:'تطوير المواقع', serviceType:'WebDevelopment', provider:{'@type':'Organization',name:'Rafeka Agency'}, areaServed:'Worldwide', availableChannel:{'@type':'ServiceChannel', serviceUrl:'/services/web-development'} })}} />
    <section style={{padding:'clamp(3rem,6vw,5rem) var(--spacing-lg)',background:'linear-gradient(135deg, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.08) 45%, var(--bg-primary) 75%)',textAlign:'center'}}>
      <div style={{maxWidth:1000,margin:'0 auto'}}>
        <Text as='h1' size='4xl' style={{fontWeight:'bold',fontSize:'clamp(2.25rem,5vw,3.5rem)',background:'linear-gradient(135deg,var(--text-primary),var(--brand-red))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',marginBottom:'var(--spacing-xl)'}}>{t('تطوير المواقع الإلكترونية','Web Development')}</Text>
        <Text size='xl' color='secondary' style={{maxWidth:700,margin:'0 auto',fontSize:'clamp(1.05rem,2.2vw,1.35rem)',lineHeight:1.6}}>{t('نبني منصات عالية الأداء وقابلة للتوسع.','We build high-performance, secure and scalable platforms.')}</Text>
      </div>
    </section>
    <section ref={sectionRef} style={{padding:'var(--spacing-4xl) var(--spacing-lg)',maxWidth:1200,margin:'0 auto'}}>
      <div style={{display:'grid',gap:'var(--spacing-xl)',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',marginBottom:'var(--spacing-4xl)'}}>
        {features.map((f,i)=><div key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-xl)',borderRadius:20,textAlign:'center',transform:visible?'translateY(0)':'translateY(50px)',opacity:visible?1:0,transition:'all .8s ease',transitionDelay:`${i*0.1}s`}}>
          <div style={{width:60,height:60,margin:'0 auto var(--spacing-lg)',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,#DC2626,#B91C1C)',borderRadius:16,color:'#fff'}}>{f.icon}</div>
          <Text as='h3' size='lg' style={{fontWeight:700,marginBottom:'var(--spacing-sm)'}}>{f.title}</Text>
          <Text size='sm' color='secondary' style={{lineHeight:1.6}}>{f.desc}</Text>
        </div>)}
      </div>
      <div style={{marginBottom:'var(--spacing-5xl)'}}>
        <Text as='h2' size='3xl' style={{fontWeight:'bold',textAlign:'center',marginBottom:'var(--spacing-3xl)',background:'linear-gradient(135deg,var(--text-primary),var(--brand-red))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{t('منهجية التنفيذ','Delivery Methodology')}</Text>
        <div style={{display:'grid',gap:'var(--spacing-lg)',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))'}}>
          {process.map((p,i)=><div key={i} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-lg)',borderRadius:16,textAlign:'center',transform:visible?'scale(1)':'scale(.85)',opacity:visible?1:0,transition:'all .8s ease',transitionDelay:`${0.2+i*0.08}s`}}><Text size='sm' style={{fontWeight:600}}>{p}</Text></div>)}
        </div>
      </div>
      <div style={{marginBottom:'var(--spacing-5xl)'}}>
        <Text as='h2' size='3xl' style={{fontWeight:'bold',textAlign:'center',marginBottom:'var(--spacing-3xl)',background:'linear-gradient(135deg,var(--text-primary),var(--brand-red))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{t('التقنيات','Technologies')}</Text>
        <div style={{display:'grid',gap:'var(--spacing-xl)',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
          {Object.entries(stack).map(([g,items],i)=><div key={g} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-xl)',borderRadius:20,transform:visible?'translateY(0)':'translateY(40px)',opacity:visible?1:0,transition:'all .8s ease',transitionDelay:`${0.15+i*0.1}s`}}>
            <Text as='h3' size='lg' style={{fontWeight:700,marginBottom:'var(--spacing-md)'}}>{t(g==='frontend'?'الواجهة الأمامية':g==='perf'?'الأداء':'الأدوات', g==='frontend'?'Frontend':g==='perf'?'Performance':'Tooling')}</Text>
            <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexWrap:'wrap',gap:6}}>{items.map(it=> <li key={it} style={{padding:'6px 12px',background:'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(220,38,38,0.05))',border:'1px solid rgba(220,38,38,0.25)',borderRadius:50,fontSize:12,fontWeight:600}}>{it}</li>)}</ul>
          </div>)}
        </div>
      </div>
      <div style={{textAlign:'center',marginBottom:'var(--spacing-6xl)'}}>
        <Text as='h2' size='2xl' style={{fontWeight:700,marginBottom:'var(--spacing-lg)'}}>{t('جاهز لبدء مشروع ويب قوي؟','Ready to launch a powerful web project?')}</Text>
        <div style={{display:'flex',justifyContent:'center',gap:'var(--spacing-lg)',flexWrap:'wrap'}}>
          <Link href="/#contact" style={{textDecoration:'none'}}><Button variant='primary' style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}}>{t('تواصل معنا','Contact Us')}</Button></Link>
          <Link href="/services" style={{textDecoration:'none'}}><Button variant='secondary' style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}}>{t('رجوع للخدمات','Back to Services')}</Button></Link>
        </div>
      </div>
    </section>
  </main>;
}
