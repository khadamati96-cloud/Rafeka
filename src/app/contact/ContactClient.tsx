"use client";
import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import QueryProvider from '@/providers/QueryProvider';
import { LanguageProvider, useLanguage } from '@/providers/LanguageProvider';
import { Button, Text } from '@/components/ui/BrandComponents';
import type { Language } from '@/lib/translations';

const whatsappNumber = '905380330087';

type TranslationMap<T = string> = Record<Language, T>;

interface ContactData {
  hero: {
    title: TranslationMap;
    subtitle: TranslationMap;
  };
  methods: {
    whatsapp: {
      title: TranslationMap;
      description: TranslationMap;
      button: TranslationMap;
      message: TranslationMap;
    };
    email: {
      title: TranslationMap;
      description: TranslationMap;
    };
    phone: {
      title: TranslationMap;
      description: TranslationMap;
    };
  };
  form: {
    title: TranslationMap;
    labels: {
      name: TranslationMap;
      email: TranslationMap;
      message: TranslationMap;
    };
    placeholders: {
      name: TranslationMap;
      email: TranslationMap;
      message: TranslationMap;
    };
    submit: TranslationMap;
    subject: TranslationMap;
  };
  schema: {
    name: TranslationMap;
    alternateName: TranslationMap;
  };
}

function ContactContent(){
  const { language } = useLanguage();

  const select = React.useCallback(<T,>(map: TranslationMap<T>) => map[language], [language]);

  const contactData = React.useMemo<ContactData>(() => ({
    hero: {
      title: { ar: 'تواصل معنا', en: 'Contact Us', tr: 'Bizimle İletişime Geçin' },
      subtitle: {
        ar: 'نحن هنا لدعمك في كل مرحلة من رحلتك الرقمية. اختر الطريقة الأنسب وتواصل معنا الآن.',
        en: 'We are here to support you at every stage of your digital journey. Choose the best channel and reach out now.',
        tr: 'Dijital yolculuğunuzun her adımında yanınızdayız. Size en uygun kanalı seçin ve şimdi bizimle iletişime geçin.',
      },
    },
    methods: {
      whatsapp: {
        title: { ar: 'واتساب مباشر', en: 'Direct WhatsApp', tr: 'Doğrudan WhatsApp' },
        description: {
          ar: 'تواصل فوري للاستفسارات العاجلة أو للبدء بالتعاون.',
          en: 'Instant chat for quick questions or to start working together.',
          tr: 'Acil sorular veya iş birliğine başlamak için anında sohbet.',
        },
        button: { ar: 'افتح المحادثة', en: 'Open Chat', tr: 'Sohbeti Aç' },
        message: {
          ar: 'مرحبا، أود مناقشة مشروع جديد.',
          en: 'Hello, I would like to discuss a new project.',
          tr: 'Merhaba, yeni bir projeyi görüşmek isterim.',
        },
      },
      email: {
        title: { ar: 'البريد الإلكتروني', en: 'Email', tr: 'E-posta' },
        description: {
          ar: 'للتفاصيل الرسمية، أرسل لنا رسالة.',
          en: 'For formal details, send us a message.',
          tr: 'Resmi detaylar için bize bir mesaj gönderin.',
        },
      },
      phone: {
        title: { ar: 'اتصال هاتفي', en: 'Phone Call', tr: 'Telefon Görüşmesi' },
        description: {
          ar: 'مناسب للمناقشات السريعة أو المتابعة.',
          en: 'Good for quick discussions or follow-up.',
          tr: 'Hızlı görüşmeler veya takip için ideal.',
        },
      },
    },
    form: {
      title: { ar: 'أرسل رسالة مباشرة', en: 'Send a Direct Message', tr: 'Doğrudan Mesaj Gönder' },
      labels: {
        name: { ar: 'الاسم', en: 'Name', tr: 'Adınız' },
        email: { ar: 'البريد الإلكتروني', en: 'Email', tr: 'E-posta' },
        message: { ar: 'رسالتك', en: 'Message', tr: 'Mesajınız' },
      },
      placeholders: {
        name: { ar: 'اكتب اسمك', en: 'Enter your name', tr: 'Adınızı yazın' },
        email: { ar: 'بريدك الإلكتروني', en: 'Your email', tr: 'E-postanızı yazın' },
        message: { ar: 'اكتب رسالتك هنا', en: 'Write your message here', tr: 'Mesajınızı buraya yazın' },
      },
      submit: { ar: 'إرسال', en: 'Send', tr: 'Gönder' },
      subject: { ar: 'استفسار موقع', en: 'Website Inquiry', tr: 'Web Sitesi Talebi' },
    },
    schema: {
      name: { ar: 'تواصل مع رافقة', en: 'Contact Rafeka', tr: 'Rafeka ile İletişim' },
      alternateName: { ar: 'صفحة تواصل رافقة', en: 'Rafeka Contact Page', tr: 'Rafeka İletişim Sayfası' },
    },
  }), []);

  const contactSchema = React.useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: select(contactData.schema.name),
    alternateName: select(contactData.schema.alternateName),
    url: '/contact',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+905380330087',
        contactType: 'sales',
        availableLanguage: ['Arabic', 'English', 'Turkish'],
      },
      {
        '@type': 'ContactPoint',
        email: 'info@rafeka.com',
        contactType: 'sales',
        availableLanguage: ['Arabic', 'English', 'Turkish'],
      },
    ],
  }), [select, contactData]);

  const [mounted,setMounted] = React.useState(false);
  React.useEffect(()=>{ setMounted(true); },[]);
  if(!mounted) return null;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(select(contactData.methods.whatsapp.message));
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
            <Text as="h1" size="4xl" style={{fontWeight:'bold',fontSize:'clamp(2.25rem,5vw,3.5rem)',background:'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',marginBottom:'var(--spacing-xl)'}}>{select(contactData.hero.title)}</Text>
            <Text size="xl" color="secondary" style={{maxWidth:780,margin:'0 auto',fontSize:'clamp(1.05rem,2.2vw,1.35rem)',lineHeight:1.6}}>{select(contactData.hero.subtitle)}</Text>
          </div>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 15% 20%, rgba(220,38,38,0.18), transparent 60%)'}} />
        </section>

        {/* Contact Grid */}
        <section style={{padding:'var(--spacing-5xl) var(--spacing-lg)',maxWidth:1200,margin:'0 auto'}}>
          <div style={{display:'grid',gap:'var(--spacing-2xl)',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))'}}>
            {/* WhatsApp Card */}
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-2xl)',borderRadius:24,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at top right, rgba(220,38,38,0.15), transparent 70%)',pointerEvents:'none'}} />
              <Text as="h3" size="xl" style={{fontWeight:700,marginBottom:'var(--spacing-md)'}}>{select(contactData.methods.whatsapp.title)}</Text>
              <Text size="sm" color="secondary" style={{lineHeight:1.7,marginBottom:'var(--spacing-lg)'}}>{select(contactData.methods.whatsapp.description)}</Text>
              <Button variant="primary" style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}} onClick={handleWhatsApp}>{select(contactData.methods.whatsapp.button)}</Button>
            </div>

            {/* Email Card */}
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-2xl)',borderRadius:24,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at top left, rgba(220,38,38,0.15), transparent 70%)',pointerEvents:'none'}} />
              <Text as="h3" size="xl" style={{fontWeight:700,marginBottom:'var(--spacing-md)'}}>{select(contactData.methods.email.title)}</Text>
              <Text size="sm" color="secondary" style={{lineHeight:1.7,marginBottom:'var(--spacing-lg)'}}>{select(contactData.methods.email.description)}</Text>
              <a href="mailto:info@rafeka.com" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                <Button variant="secondary" style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}}>info@rafeka.com</Button>
              </a>
            </div>

            {/* Phone Card */}
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',padding:'var(--spacing-2xl)',borderRadius:24,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at bottom right, rgba(220,38,38,0.15), transparent 70%)',pointerEvents:'none'}} />
              <Text as="h3" size="xl" style={{fontWeight:700,marginBottom:'var(--spacing-md)'}}>{select(contactData.methods.phone.title)}</Text>
              <Text size="sm" color="secondary" style={{lineHeight:1.7,marginBottom:'var(--spacing-lg)'}}>{select(contactData.methods.phone.description)}</Text>
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
            <Text as="h2" size="2xl" style={{fontWeight:700,textAlign:'center',marginBottom:'var(--spacing-3xl)'}}>{select(contactData.form.title)}</Text>
            <form onSubmit={(e)=>{e.preventDefault(); const fd=new FormData(e.currentTarget); const name=fd.get('name'); const email=fd.get('email'); const message=fd.get('message'); const body=`Name: ${name}\nEmail: ${email}\nMessage: ${message}`; window.location.href=`mailto:info@rafeka.com?subject=${encodeURIComponent(select(contactData.form.subject))}&body=${encodeURIComponent(body)}`;}} style={{display:'grid',gap:'var(--spacing-xl)',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))'}}>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                <label style={{fontSize:14,fontWeight:600}}>{select(contactData.form.labels.name)}</label>
                <input name="name" required placeholder={select(contactData.form.placeholders.name)} style={{padding:'14px 16px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,color:'var(--text-primary)',fontSize:14}} />
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                <label style={{fontSize:14,fontWeight:600}}>{select(contactData.form.labels.email)}</label>
                <input type="email" name="email" required placeholder={select(contactData.form.placeholders.email)} style={{padding:'14px 16px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,color:'var(--text-primary)',fontSize:14}} />
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:8,gridColumn:'1 / -1'}}>
                <label style={{fontSize:14,fontWeight:600}}>{select(contactData.form.labels.message)}</label>
                <textarea name="message" required rows={5} placeholder={select(contactData.form.placeholders.message)} style={{padding:'14px 16px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,color:'var(--text-primary)',fontSize:14,resize:'vertical'}} />
              </div>
              <div style={{gridColumn:'1 / -1',textAlign:'center'}}>
                <Button variant="primary" style={{padding:'var(--spacing-md) var(--spacing-xl)',fontWeight:600}} type="submit">{select(contactData.form.submit)}</Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(contactSchema)}} />
    </div>
  );
}

export default function ContactClient(){
  return <QueryProvider><LanguageProvider><ContactContent /></LanguageProvider></QueryProvider>;
}
