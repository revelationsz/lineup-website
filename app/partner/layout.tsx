import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Launch Partner Program - Bar Me | Fill Seats in Real Time',
  description: 'Join Bar Me\'s Launch Partner Program and turn real-time demand into revenue. Zero upfront cost, 30-day performance guarantee. Limited to 25 Boston venues.',
  keywords: 'bar marketing, nightlife app, Boston bars, venue partners, foot traffic, bar promotion',
  openGraph: {
    title: 'Launch Partner Program - Bar Me',
    description: 'Fill seats in real time with Bar Me\'s Launch Partner Program. Risk-free 30-day pilot for Boston venues.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Bar Me',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launch Partner Program - Bar Me',
    description: 'Fill seats in real time with Bar Me\'s Launch Partner Program. Risk-free 30-day pilot for Boston venues.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Bar Me Launch Partner Program",
            "description": "Join Bar Me's Launch Partner Program and turn real-time demand into revenue for your Boston venue.",
            "url": "https://barme.com/partner",
            "mainEntity": {
              "@type": "Organization",
              "name": "Bar Me",
              "description": "Real-time nightlife app connecting bars with customers",
              "url": "https://barme.com"
            }
          })
        }}
      />
      {children}
    </>
  );
} 