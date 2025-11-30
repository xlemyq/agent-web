import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { faqs } from '@/data/content';
import { ServiceWorkerInitializer } from '@/components/providers/ServiceWorkerInitializer';

export const metadata: Metadata = {
  title: 'UP5Star SEO | Agencja SEO klasy enterprise',
  description:
    'UP5Star to agencja SEO premium łącząca audyty 360°, topical authority i growth ops. Dostarczamy KPI, poprawiamy Core Web Vitals i skalujemy leady.',
  keywords: [
    'agencja SEO',
    'SEO enterprise',
    'Core Web Vitals',
    'topical authority',
    'link building',
    'growth operations',
    'SEO audyt',
    'UP5Star'
  ],
  openGraph: {
    title: 'UP5Star SEO | Agencja SEO klasy enterprise',
    description:
      'Premium SEO & Growth Engine. Audyty techniczne, content ops, link building i growth operations w jednym zespole.',
    url: 'https://up5star.com',
    siteName: 'UP5Star SEO',
    locale: 'pl_PL',
    type: 'website'
  },
  metadataBase: new URL('https://up5star.com'),
  themeColor: '#0F0F0F',
  alternates: {
    canonical: 'https://up5star.com'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UP5Star SEO',
    url: 'https://up5star.com',
    logo: 'https://up5star.com/icons/brand.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@up5star.com',
      telephone: '+48 555 555 555'
    },
    sameAs: ['https://www.linkedin.com']
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'UP5Star SEO',
    url: 'https://up5star.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://up5star.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="pl" className="dark">
      <body className="antialiased">
        <ServiceWorkerInitializer />
        <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqSchema)}
        </Script>
        <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
