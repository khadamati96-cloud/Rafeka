"use client";
import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import QueryProvider from '@/providers/QueryProvider';
import { LanguageProvider, useLanguage } from '@/providers/LanguageProvider';
import { Button, Text } from '@/components/ui/BrandComponents';

const whatsappNumber = '905380330087';

function ContactContent(){
  const { language } = useLanguage();
  const t = (ar:string,en:string)=> language==='ar'?ar:en;

  const [mounted,setMounted] = React.useState(false);
  React.useEffect(()=>{ setMounted(true); },[]);
  if(!mounted) return null;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(t('مرحبا، أود مناقشة مشروع جديد.','Hello, I would like to discuss a new project.'));
    const url = `https://wa.me/${whatsappNumber}?text=${msg}`;
    window.open(url,'_blank','noopener,noreferrer');
  };

  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <Header />
      <main style={{flex:1}}>
        {/* Hero */}
        <section style={{padding:'clamp(3rem,6vw,5rem) var(--spacing-lg)',background:'linear-gradient(135deg, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.08) 45%, var(--bg-primary) 75%)',position:'relative',overflow:'hidden'}}>
          <div style={{maxWidth:1100,margin:'0 auto',textAlign:'center'}}>
            <Text as="h1" size="4xl" style={{fontWeight:'bold',fontSize:'clamp(2.25rem,5vw,3.5rem)',background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',marginBottom:'var(--spacing-xl)'}}>{t('تواصل معنا','Contact Us')}</Text>
            <Text size="xl" color="secondary" style={{maxWidth:780,margin:'0 auto',fontSize:'clamp(1.05rem,2.2vw,1.35rem)',lineHeight:1.6}}>{t('نحن هنا لدعمك في كل مرحلة من رحلتك الرقمية. اختر الطريقة الأنسب وتواصل معنا الآن.','We are here to support you at every stage of your digital journey. Choose the best channel and reach out now.')}</Text>
          </div>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 15% 20%, rgba(220,38,38,0.18), transparent 60%)'}} />
        </section>

        {/* Contact Grid */}
        <section style={{padding:'var(--spacing-5xl) var(--spacing-lg)',maxWidth:1200,margin:'0 auto'}}>
          <div style={{display:'grid',gap:'var(--spacing-2xl)',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))'}}>
            {/* WhatsApp Card */}
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-2xl)',borderRadius:24,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at top right, rgba(220,38,38,0.15), transparent 70%)',pointerEvents:'none'}} />
              <Text as="h3" size="xl" style={{fontWeight:700,marginBottom:'var(--spacing-md)'}}>{t('واتساب مباشر','Direct WhatsApp')}</Text>
              <Text size="sm" color="secondary" style={{lineHeight:1.7,marginBottom:'var(--spacing-lg)'}}>{t('تواصل الفوري للاستفسارات العاجلة   .','Instant chat for quick questions or to start working together.')}</Text>
              <Button variant="primary" style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}} onClick={handleWhatsApp}>{t('افتح المحادثة','Open Chat')}</Button>
            </div>

            {/* Email Card */}
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-2xl)',borderRadius:24,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at top left, rgba(220,38,38,0.15), transparent 70%)',pointerEvents:'none'}} />
              <Text as="h3" size="xl" style={{fontWeight:700,marginBottom:'var(--spacing-md)'}}>{t('البريد الإلكتروني','Email')}</Text>
              <Text size="sm" color="secondary" style={{lineHeight:1.7,marginBottom:'var(--spacing-lg)'}}>{t('للتفاصيل الرسمية، أرسل لنا رسالة.','For formal details, send us a message.')}</Text>
              <a href="mailto:info@rafeka.com" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                <Button variant="secondary" style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}}>info@rafeka.com</Button>
              </a>
            </div>

            {/* Phone Card */}
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-2xl)',borderRadius:24,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at bottom right, rgba(220,38,38,0.15), transparent 70%)',pointerEvents:'none'}} />
              <Text as="h3" size="xl" style={{fontWeight:700,marginBottom:'var(--spacing-md)'}}>{t('اتصال هاتفي','Phone Call')}</Text>
              <Text size="sm" color="secondary" style={{lineHeight:1.7,marginBottom:'var(--spacing-lg)'}}>{t('مناسب للمناقشات السريعة أو المتابعة.','Good for quick discussions or follow-up.')}</Text>
              <a href="tel:+905380330087" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                <Button variant="secondary" style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}}>
                  <span style={{direction:'ltr',unicodeBidi:'bidi-override',display:'inline-block',fontFamily:'monospace',letterSpacing:'0.5px'}}>+90 538 033 0087</span>
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Simple Contact Form */}
        <section style={{padding:'var(--spacing-4xl) var(--spacing-lg)',background:'linear-gradient(135deg, rgba(220,38,38,0.05) 0%, rgba(220,38,38,0.0) 70%)'}}>
          <div style={{maxWidth:900,margin:'0 auto'}}>
            <Text as="h2" size="2xl" style={{fontWeight:700,textAlign:'center',marginBottom:'var(--spacing-3xl)'}}>{t('أرسل رسالة مباشرة','Send a Direct Message')}</Text>
            <form onSubmit={(e)=>{e.preventDefault(); const fd=new FormData(e.currentTarget); const name=fd.get('name'); const email=fd.get('email'); const message=fd.get('message'); const body=`Name: ${name}\nEmail: ${email}\nMessage: ${message}`; window.location.href=`mailto:info@rafeka.com?subject=${encodeURIComponent(t('استفسار موقع','Website Inquiry'))}&body=${encodeURIComponent(body)}`;}} style={{display:'grid',gap:'var(--spacing-xl)',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))'}}>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                <label style={{fontSize:14,fontWeight:600}}>{t('الاسم','Name')}</label>
                <input name="name" required placeholder={t('اكتب اسمك','Enter your name')} style={{padding:'14px 16px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,color:'var(--text-primary)',fontSize:14}} />
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                <label style={{fontSize:14,fontWeight:600}}>{t('البريد الإلكتروني','Email')}</label>
                <input type="email" name="email" required placeholder={t('بريدك الإلكتروني','Your email')} style={{padding:'14px 16px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,color:'var(--text-primary)',fontSize:14}} />
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:8,gridColumn:'1 / -1'}}>
                <label style={{fontSize:14,fontWeight:600}}>{t('رسالتك','Message')}</label>
                <textarea name="message" required rows={5} placeholder={t('اكتب رسالتك هنا','Write your message here')} style={{padding:'14px 16px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,color:'var(--text-primary)',fontSize:14,resize:'vertical'}} />
              </div>
              <div style={{gridColumn:'1 / -1',textAlign:'center'}}>
                <Button variant="primary" style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}} type="submit">{t('إرسال','Send')}</Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"ContactPage","name":"Contact Rafeka","alternateName":"صفحة تواصل رافقة","url":"/contact","contactPoint":[{"@type":"ContactPoint","telephone":"+905380330087","contactType":"sales","availableLanguage":["Arabic","English"]},{"@type":"ContactPoint","email":"info@rafeka.com","contactType":"sales"}]})}} />
    </div>
  );
}

export default function ContactClient(){
  return <QueryProvider><LanguageProvider><ContactContent /></LanguageProvider></QueryProvider>;
}
