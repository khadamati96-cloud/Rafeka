"use client";
import React,{useEffect,useRef,useState} from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Text, Button } from '@/components/ui/BrandComponents';
import Link from 'next/link';

export default function DigitalMarketingClient(){
  const { language } = useLanguage();
  const ref=useRef<HTMLElement>(null); const [visible,setVisible]=useState(false);
  useEffect(()=>{const o=new IntersectionObserver(([e])=>e.isIntersecting&&setVisible(true),{threshold:.2}); if(ref.current) o.observe(ref.current); return()=>o.disconnect();},[]);
  const t=(ar:string,en:string,tr?:string)=>{ if(language==='ar') return ar; if(language==='tr') return tr ?? en; return en; };
  const pillars=[
    {ar:'استراتيجية مدفوعة بالبيانات',en:'Data-Driven Strategy',tr:'Veri Odaklı Strateji'},
    {ar:'تحسين محركات البحث المتقدم',en:'Advanced SEO / SEM',tr:'Gelişmiş SEO / SEM'},
    {ar:'إعلانات مدفوعة عالية العائد',en:'High-ROAS Paid Media',tr:"Yüksek ROAS'lı Ücretli Medya"},
    {ar:'تحسين التحويل والمسار',en:'Conversion Optimization',tr:'Dönüşüm Optimizasyonu'},
    {ar:'تحليلات معمقة',en:'Deep Analytics',tr:'Derin Analitik'},
    {ar:'أتمتة التسويق',en:'Marketing Automation',tr:'Pazarlama Otomasyonu'},
  ];
  const channels=['SEO','SEM','Google Ads','Meta Ads','TikTok Ads','LinkedIn Ads','Email','Retargeting'];
  const schemaContent={
    ar:{
      name:'التسويق الرقمي',
      description:'حملات نمو رقمية متكاملة تركز على الاستحواذ والتحويل عبر القنوات المدفوعة والعضوية.',
    },
    en:{
      name:'Digital Marketing',
      description:'Integrated digital marketing campaigns focused on acquisition and conversion across paid and organic channels.',
    },
    tr:{
      name:'Dijital Pazarlama',
      description:'Ücretli ve organik kanallarda edinim ve dönüşüme odaklanan bütünleşik dijital pazarlama kampanyaları.',
    },
  } as const;
  return <main style={{position:'relative'}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Service',name:schemaContent[language].name,alternateName:[schemaContent.ar.name,schemaContent.tr.name],description:schemaContent[language].description,inLanguage:language,serviceType:'DigitalMarketing',provider:{'@type':'Organization',name:'Rafeka Agency'},areaServed:'Worldwide',availableChannel:{'@type':'ServiceChannel',serviceUrl:'/services/digital-marketing'}})}} />
    <section style={{padding:'clamp(3rem,6vw,5rem) var(--spacing-lg)',background:'linear-gradient(135deg, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.08) 45%, var(--bg-primary) 75%)',textAlign:'center',position:'relative'}}>
      <div style={{maxWidth:1000,margin:'0 auto'}}>
  <Text as='h1' size='4xl' style={{fontWeight:'bold',fontSize:'clamp(2.25rem,5vw,3.5rem)',background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',marginBottom:'var(--spacing-xl)'}}>{t('التسويق الرقمي','Digital Marketing','Dijital Pazarlama')}</Text>
        <Text size='xl' color='secondary' style={{maxWidth:700,margin:'0 auto',fontSize:'clamp(1.05rem,2.2vw,1.35rem)',lineHeight:1.6}}>{t('حملات نمو رقمية متكاملة تركز على الاكتساب والتحويل.','Integrated growth campaigns focused on acquisition & conversion.','Edinim ve dönüşüme odaklanan bütünleşik büyüme kampanyaları kurguluyoruz.')}</Text>
      </div>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 15% 20%, rgba(220,38,38,0.15), transparent 60%)'}} />
    </section>
    <section ref={ref} style={{padding:'var(--spacing-4xl) var(--spacing-lg)',maxWidth:1200,margin:'0 auto'}}>
      <div style={{marginBottom:'var(--spacing-5xl)'}}>
  <Text as='h2' size='3xl' style={{fontWeight:'bold',textAlign:'center',marginBottom:'var(--spacing-3xl)',background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{t('مرتكزات النجاح','Core Pillars','Başarı Sütunları')}</Text>
        <div style={{display:'grid',gap:'var(--spacing-xl)',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
          {pillars.map((p,i)=><div key={p.en} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-xl)',borderRadius:20,transform:visible?'translateY(0)':'translateY(50px)',opacity:visible?1:0,transition:'all .8s ease',transitionDelay:`${i*0.1}s`}}><Text as='h3' size='lg' style={{fontWeight:700,marginBottom:'var(--spacing-sm)'}}>{t(p.ar,p.en,p.tr)}</Text><Text size='sm' color='secondary' style={{lineHeight:1.6}}>{t('عنصر رئيسي في خططنا.','Integral to every plan.','Her planımızın temel bileşeni.')}</Text></div>)}
        </div>
      </div>
      <div style={{marginBottom:'var(--spacing-5xl)'}}>
  <Text as='h2' size='3xl' style={{fontWeight:'bold',textAlign:'center',marginBottom:'var(--spacing-3xl)',background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{t('القنوات','Channels','Kanallar')}</Text>
        <div style={{display:'flex',flexWrap:'wrap',gap:10,justifyContent:'center'}}>
          {channels.map(c=> <div key={c} style={{padding:'8px 14px',background:'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(220,38,38,0.05))',border:'1px solid rgba(220,38,38,0.25)',borderRadius:40,fontSize:12,fontWeight:600}}>{c}</div>)}
        </div>
      </div>
      <div style={{textAlign:'center',marginBottom:'var(--spacing-6xl)'}}>
        <Text as='h2' size='2xl' style={{fontWeight:700,marginBottom:'var(--spacing-lg)'}}>{t('ابدأ تسريع النمو','Your growth acceleration starts here','Büyüme ivmeniz burada başlıyor')}</Text>
        <div style={{display:'flex',justifyContent:'center',gap:'var(--spacing-lg)',flexWrap:'wrap'}}>
          <Link href="/contact" style={{textDecoration:'none'}}><Button variant='primary' style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}}>{t('تواصل معنا','Contact Us','Bizimle İletişime Geçin')}</Button></Link>
          <Link href="/services" style={{textDecoration:'none'}}><Button variant='secondary' style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}}>{t('رجوع للخدمات','Back to Services','Hizmetlere Dön')}</Button></Link>
        </div>
      </div>
    </section>
  </main>;
}
