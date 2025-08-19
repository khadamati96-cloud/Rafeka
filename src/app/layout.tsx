import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { siteBaseUrl, defaultKeywords } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: 'Rafeka Agency | وكالة رافقة',
    template: '%s | Rafeka Agency'
  },
  description: 'Rafeka Agency (وكالة رافقة) تقدم حلول تطوير الويب، التسويق الرقمي، إدارة السوشيال ميديا، التصميم والهوية، وحلول ذكاء اصطناعي حديثة تدعم نمو علامتك. Web development, digital marketing, branding, social media & AI solutions.',
  keywords: defaultKeywords,
  openGraph: {
    title: 'Rafeka Agency | وكالة رافقة',
    description: 'حلول رقمية متكاملة: تطوير مواقع، تسويق رقمي، سوشيال ميديا، تصميم وهوية، ذكاء اصطناعي.',
    url: siteBaseUrl,
    siteName: 'Rafeka Agency',
    locale: 'ar',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafeka Agency | وكالة رافقة',
    description: 'Digital & Arabic-first agency: Web, Marketing, Branding, AI.',
  },
  alternates: {
    canonical: siteBaseUrl
  },
  icons: {
    icon: '/favicon.ico'
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0b0b0d" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" hrefLang="ar" href={siteBaseUrl + '/'} />
        <link rel="alternate" hrefLang="en" href={siteBaseUrl + '/'} />
        <link rel="alternate" hrefLang="x-default" href={siteBaseUrl + '/'} />
        {/* Organization & Website JSON-LD */}
        <script
          type="application/ld+json"
          // Arabic + English combined for richer context
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rafeka Agency',
              alternateName: 'وكالة رافقة',
              url: siteBaseUrl,
              logo: siteBaseUrl + '/logo.png',
              sameAs: [
                'https://www.facebook.com/Rafekaagency',
                'https://www.instagram.com/rafekaagency',
                'https://www.behance.net/RAFEKA'
              ],
              description: 'وكالة رقمية تقدم حلول تطوير مواقع، تسويق رقمي، إدارة سوشيال ميديا، تصميم وهوية، وحلول ذكاء اصطناعي. Digital agency for web, marketing, branding & AI.'
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Rafeka Agency',
              alternateName: 'وكالة رافقة',
              url: siteBaseUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: siteBaseUrl + '/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        {/* Google Analytics (add NEXT_PUBLIC_GA_ID in env) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`
              }}
            />
          </>
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('language');
                  var lang = (saved === 'ar' || saved === 'en') ? saved : 'ar';
                  document.documentElement.lang = lang;
                  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                  document.documentElement.setAttribute('data-lang', lang);
                } catch (e) {
                  document.documentElement.lang = 'ar';
                  document.documentElement.dir = 'rtl';
                  document.documentElement.setAttribute('data-lang', 'ar');
                }
              })();
            `
          }}
        />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          margin: 0,
          padding: 0,
          width: '100vw',
          minHeight: '100vh',
          overflow: 'hidden auto',
        }}
      >
  {children}
  <ScrollToTop />
      </body>
    </html>
  );
}
