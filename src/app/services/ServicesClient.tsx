"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Text, Button } from '@/components/ui/BrandComponents';
import Link from 'next/link';

// Extract static data outside component so references are stable and don't trigger useEffect re-runs
const SERVICES_DATA = {
		hero: {
			titleAr: 'خدماتنا',
			titleEn: 'Our Services',
			subtitleAr: 'حلول رقمية متكاملة تدفع أعمالك نحو المستقبل',
			subtitleEn: 'Comprehensive digital solutions that drive your business toward the future',
			introAr: 'نقدّم باقة من الخدمات الرقمية المبتكرة التي تجمع بين الإبداع، والتقنية، والخبرة لضمان نجاح أعمالك وتحقيق أهدافك.',
			introEn: 'We offer a suite of innovative digital services that combine creativity, technology, and expertise to ensure your business success.'
		},
		services: [
			{
				titleAr: 'تطوير المواقع والتطبيقات', titleEn: 'Web & App Development',
				descriptionAr: 'مواقع احترافية وتطبيقات ذكية بتجربة استخدام سلسة.',
				descriptionEn: 'Professional websites & smart applications with a seamless UX.',
				features: [
					{ ar: 'مواقع شركات ومتاجر إلكترونية', en: 'Corporate websites & e-commerce' },
					{ ar: 'تطبيقات موبايل (iOS / Android)', en: 'Mobile applications (iOS / Android)' },
					{ ar: 'أنظمة إدارة محتوى مخصصة', en: 'Custom CMS platforms' }
				],
				icon: (
					<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
						<path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" />
						<path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" />
					</svg>
				)
			},
			{
				titleAr: 'التسويق الرقمي', titleEn: 'Digital Marketing',
				descriptionAr: 'استراتيجيات تسويق مدروسة تعزّز ظهورك وتزيد التحويل.',
				descriptionEn: 'Strategic marketing to elevate visibility & conversions.',
				features: [
					{ ar: 'حملات إعلانية (Google / Meta / TikTok)', en: 'Ad campaigns (Google / Meta / TikTok)' },
					{ ar: 'تحسين محركات البحث (SEO)', en: 'Search engine optimization (SEO)' },
					{ ar: 'تسويق عبر البريد الإلكتروني', en: 'Email marketing automation' }
				],
				icon: (
					<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
						<path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" />
					</svg>
				)
			},
			{
				titleAr: 'الهوية البصرية والتصميم', titleEn: 'Brand & Visual Identity',
				descriptionAr: 'بناء هوية متسقة تعكس شخصية علامتك.',
				descriptionEn: 'Building cohesive & defensible brand systems.',
				features: [
					{ ar: 'تصميم شعارات ومواد دعائية', en: 'Logo & collateral design' },
					{ ar: 'تصاميم واجهات المستخدم', en: 'UI / UX design' },
					{ ar: 'محتوى للسوشيال ميديا', en: 'Social content design' }
				],
				icon: (
					<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
						<path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5V21H19V9H21Z" stroke="currentColor" strokeWidth="2" />
					</svg>
				)
			},
			{
				titleAr: 'حلول الذكاء الاصطناعي', titleEn: 'AI Solutions',
				descriptionAr: 'دمج تقنيات الذكاء الاصطناعي لتعزيز الكفاءة.',
				descriptionEn: 'Embedding modern AI to boost efficiency & decision quality.',
				features: [
					{ ar: 'تحليلات و تنبؤ بالبيانات', en: 'Predictive & data analytics' },
						{ ar: 'شات بوت ودعم آلي', en: 'Chatbots & automated support' },
					{ ar: 'أتمتة مهام وعمليات', en: 'Workflow & task automation' }
				],
				icon: (
					<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
						<path d="M12 1L15.09 7.26L22 8L17 13L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 1Z" stroke="currentColor" strokeWidth="2" />
						<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
					</svg>
				)
			}
		],
		whyUs: {
			titleAr: 'لماذا نحن؟', titleEn: 'Why Choose Us?',
			reasons: [
				{ titleAr: 'حلول مخصصة لكل عميل', titleEn: 'Tailored solutions per client', icon: (
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M4 12H2M22 12H20M12 2V4M12 20V22" stroke="currentColor" strokeWidth="2"/></svg>
				)},
				{ titleAr: 'التزام بالمواعيد والجودة', titleEn: 'On-time & quality delivery', icon: (
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
				)},
				{ titleAr: 'شراكة طويلة الأمد', titleEn: 'Long-term partnership focus', icon: (
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 5 16 5 10.5C5 7 7.5 5 9.75 5C11.25 5 12 6 12 6C12 6 12.75 5 14.25 5C16.5 5 19 7 19 10.5C19 16 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
				)}
			]
		},
		cta: {
			titleAr: 'جاهز لبدء مشروعك؟', titleEn: 'Ready to start your project?',
			subtitleAr: 'تواصل معنا الآن واحصل على استشارة مجانية',
			subtitleEn: 'Get in touch now for a free consultation',
			buttonAr: 'ابدأ الآن', buttonEn: 'Start Now'
		}
};

export default function ServicesClient() {
	const { language } = useLanguage();
	const heroRef = useRef<HTMLElement | null>(null);
	const servicesRef = useRef<HTMLElement | null>(null);
	const whyUsRef = useRef<HTMLElement | null>(null);
	const ctaRef = useRef<HTMLElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
	const [whyUsVisible, setWhyUsVisible] = useState(false);
	const [ctaVisible, setCtaVisible] = useState(false);
	const isMobile = typeof window !== 'undefined' ? window.innerWidth < 900 : false;

	const servicesData = SERVICES_DATA; // alias for current naming

	useEffect(() => {
		const observerOptions: IntersectionObserverInit = { threshold: 0.25 };
		let heroTriggered = false, whyUsTriggered = false, ctaTriggered = false;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return;
				if (entry.target === heroRef.current && !heroTriggered) {
					heroTriggered = true;
					setIsVisible(true);
					// animate services cards sequentially
					setTimeout(() => {
						const total = servicesData.services.length;
						setVisibleItems(Array(total).fill(false));
						servicesData.services.forEach((_, i) => {
							setTimeout(() => setVisibleItems(prev => {
								const copy = [...prev]; copy[i] = true; return copy;
							}), i * 120);
						});
					}, 250);
				}
				if (entry.target === whyUsRef.current && !whyUsTriggered) { whyUsTriggered = true; setWhyUsVisible(true); }
				if (entry.target === ctaRef.current && !ctaTriggered) { ctaTriggered = true; setCtaVisible(true); }
			});
		}, observerOptions);
		[heroRef, servicesRef, whyUsRef, ctaRef].forEach(r => r.current && obs.observe(r.current));
		return () => obs.disconnect();
	}, []); // static data moved outside so no dependency needed

	const t = (ar: string, en: string) => language === 'ar' ? ar : en;

	return (
		<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org', '@type': 'CollectionPage',
						name: 'Rafeka Services',
						description: 'صفحة الخدمات تشمل التطوير والتسويق والهوية والذكاء الاصطناعي.',
						hasPart: servicesData.services.map(s => ({ '@type': 'Service', name: s.titleEn, alternateName: s.titleAr }))
					})
				}}
			/>
			{/* Hero */}
			<section ref={heroRef} style={{
				padding: 'var(--spacing-4xl) var(--spacing-lg)',
				paddingTop: isMobile ? 'calc(70px + var(--spacing-3xl))' : 'calc(70px + var(--spacing-4xl))',
				background: 'var(--bg-primary)',
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
				transition: 'all .8s ease'
			}}>
				<div style={{ maxWidth: 1180, margin: '0 auto', textAlign: 'center' }}>
					<Text as="h1" size="4xl" style={{
						fontWeight: 800,
						fontSize: 'clamp(2.3rem,5vw,3.8rem)',
						background: 'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)',
						WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 'var(--spacing-lg)'
					}}>{t(servicesData.hero.titleAr, servicesData.hero.titleEn)}</Text>
					<Text size="xl" style={{
						color: 'var(--brand-red)', fontWeight: 600,
						fontSize: 'clamp(1.2rem,2.8vw,1.75rem)', marginBottom: 'var(--spacing-xl)'
					}}>{t(servicesData.hero.subtitleAr, servicesData.hero.subtitleEn)}</Text>
					<Text size="lg" style={{
						maxWidth: 880, margin: '0 auto', lineHeight: 1.75, color: 'var(--text-secondary)',
						fontSize: 'clamp(1.05rem,2.3vw,1.3rem)'
					}}>{t(servicesData.hero.introAr, servicesData.hero.introEn)}</Text>
				</div>
			</section>
			{/* Services Grid */}
			<section ref={servicesRef} style={{
				padding: 'var(--spacing-4xl) var(--spacing-lg)', background: 'var(--bg-primary)'
			}}>
				<div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gap: 'var(--spacing-xl)', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
					{servicesData.services.map((service, i) => (
						<div key={i} style={{
							padding: 'var(--spacing-xl)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 22,
							background: 'rgba(255,255,255,0.03)', position: 'relative', overflow: 'hidden',
							opacity: visibleItems[i] ? 1 : 0, transform: visibleItems[i] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(.9)',
							transition: 'all .75s cubic-bezier(.175,.885,.32,1.275)', transitionDelay: `${i * 0.08}s`
						}}>
							<div style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>{service.icon}</div>
							<Text as="h3" size="xl" style={{ fontWeight: 700, marginBottom: 'var(--spacing-sm)' }}>{t(service.titleAr, service.titleEn)}</Text>
							<Text size="sm" style={{ lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>{t(service.descriptionAr, service.descriptionEn)}</Text>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
								{service.features.map((f, fi) => (
									<li key={fi} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, fontSize: '.85rem', color: 'var(--text-secondary)' }}>
										<span style={{ color: 'var(--brand-red)', fontSize: '1.2rem', lineHeight: 1 }}>•</span>
										{t(f.ar, f.en)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
			{/* Why Us */}
			<section ref={whyUsRef} style={{
				padding: 'var(--spacing-4xl) var(--spacing-lg)', background: 'var(--bg-primary)',
				opacity: whyUsVisible ? 1 : 0, transform: whyUsVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all .9s ease'
			}}>
				<div style={{ maxWidth: 1180, margin: '0 auto' }}>
					<Text as="h2" size="3xl" style={{
						fontWeight: 'bold', textAlign: 'center', marginBottom: 'var(--spacing-3xl)',
						background: 'linear-gradient(135deg,var(--brand-red-light) 0%, var(--brand-red) 45%, var(--brand-red-dark) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
					}}>{t(servicesData.whyUs.titleAr, servicesData.whyUs.titleEn)}</Text>
					<div style={{ display: 'grid', gap: 'var(--spacing-xl)', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
						{servicesData.whyUs.reasons.map((r, i) => (
							<div key={i} style={{
								display: 'flex', alignItems: 'center', gap: 14, padding: 'var(--spacing-lg)',
								background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18,
								opacity: whyUsVisible ? 1 : 0, transform: whyUsVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all .7s ease', transitionDelay: `${i * 0.12}s`
							}}>
								<div style={{ color: 'var(--text-primary)' }}>{r.icon}</div>
								<Text size="sm" style={{ fontWeight: 600 }}>{t(r.titleAr, r.titleEn)}</Text>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* CTA */}
			<section ref={ctaRef} style={{
				padding: 'var(--spacing-5xl) var(--spacing-lg)',
				background: 'linear-gradient(135deg, rgba(220,38,38,.12) 0%, var(--bg-primary) 60%)',
				textAlign: 'center', opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'all .9s ease'
			}}>
				<Text as="h2" size="3xl" style={{ fontWeight: 800, marginBottom: 'var(--spacing-lg)' }}>{t(servicesData.cta.titleAr, servicesData.cta.titleEn)}</Text>
				<Text size="lg" style={{ maxWidth: 760, margin: '0 auto var(--spacing-2xl)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{t(servicesData.cta.subtitleAr, servicesData.cta.subtitleEn)}</Text>
				<div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
					<Link href="/contact" style={{ textDecoration: 'none' }}>
						<Button variant="primary" style={{ padding: 'var(--spacing-md) var(--spacing-xl)', fontWeight: 600 }}>{t(servicesData.cta.buttonAr, servicesData.cta.buttonEn)}</Button>
					</Link>
					{/* زر واتساب مباشر */}
					<a
						href={`https://wa.me/905380330087?text=${encodeURIComponent(language === 'ar' ? 'مرحبا، أود البدء الآن.' : 'Hello, I want to start now.')}`}
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: 'none' }}
					>
						<Button
							variant="secondary"
							style={{
								padding: 'var(--spacing-md) var(--spacing-xl)',
								fontWeight: 600,
								display: 'flex',
								alignItems: 'center',
								gap: '8px'
							}}
							aria-label={language === 'ar' ? 'تواصل واتساب' : 'WhatsApp Chat'}
						>
							<span style={{ fontSize: '18px' }}>💬</span>
							{language === 'ar' ? 'واتساب' : 'WhatsApp'}
						</Button>
					</a>
					<Link href="/" style={{ textDecoration: 'none' }}>
						<Button variant="secondary" style={{ padding: 'var(--spacing-md) var(--spacing-xl)', fontWeight: 600 }}>{t('الصفحة الرئيسية','Home')}</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
