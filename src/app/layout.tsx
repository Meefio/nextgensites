import "./globals.css";
import { Inter, Instrument_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { CookieBanner } from "@/components/cookie-banner";
import { defaultMetadata } from './metadata';
import { Metadata, Viewport } from 'next'
import { MetadataRoute } from 'next'


const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Instrument_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL('https://nextgensites.pl'),
  
  title: {
    default: 'Tworzenie nowoczesnych stron internetowych w Next.js | NextGen Sites',
    template: '%s | NextGen Sites - Profesjonalne Tworzenie Stron WWW'
  },
  
  description: 'Nowoczesne strony WWW dla firm z gwarancją wysokiej wydajności i najlepszych praktyk SEO. Oferujemy strony internetowe z abonamentem.',
  
  applicationName: 'NextGen Sites - Profesjonalne Tworzenie Stron Internetowych',
  authors: [{ name: 'Michał Rowiński', url: 'https://nextgensites.pl' }],
  generator: 'Next.js',
  
  keywords: [
    'tworzenie stron internetowych',
    'strony internetowe next.js',
    'nowoczesne strony www',
    'strona internetowa dla małej firmy',
    'tworzenie landing page',
    'projektowanie stron www',
    'strony internetowe warszawa',
    'responsywne strony www',
    'szybkie strony internetowe',
    'profesjonalne strony www',
    'wizytówka online',
    'landing page',
    'strony internetowe z abonamentem',
  ],
  
  referrer: 'origin-when-cross-origin',
  creator: 'NextGen Sites - Profesjonalne Tworzenie Stron WWW',
  publisher: 'NextGen Sites',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://nextgensites.pl',
    languages: {
      'pl-PL': 'https://nextgensites.pl',
    },
  },

  openGraph: {
    type: 'website',
    siteName: 'NextGen Sites - Profesjonalne Tworzenie Stron Internetowych',
    title: 'Tworzenie Stron Internetowych i Landing Page | Strony w Next.js | NextGen Sites',
    description: 'Profesjonalne tworzenie stron internetowych w Next.js. Nowoczesne strony WWW dla firm z gwarancją wysokiej wydajności i najlepszych praktyk SEO. Sprawdź naszą ofertę!',
    url: 'https://nextgensites.pl',
    locale: 'pl_PL',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NextGen Sites - Profesjonalne Tworzenie Stron Internetowych w Next.js',
        type: 'image/png',
        secureUrl: 'https://nextgensites.pl/images/og-image.png',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nextgensites',
    creator: '@nextgensites',
    title: 'Tworzenie Stron Internetowych w Next.js | NextGen Sites',
    description: 'Profesjonalne strony WWW i landing page. Nowoczesne rozwiązania oparte o Next.js z gwarancją wydajności.',
    images: ['https://nextgensites.pl/images/og-image.png'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#020817',
      },
    ],
  },

  manifest: '/manifest.json',
  
  category: 'technology',
  
  other: {
    'color-scheme': 'dark',
    'theme-color': '#020817',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msvalidate.01': '4DF508BDA9824D31C606EEF153D9F5C2',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 4,
  userScalable: true,
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#020817' },
    { media: 'print', color: 'white' }
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NextGen Sites',
  alternateName: 'NextGen Sites - Profesjonalne Tworzenie Stron Internetowych',
  url: 'https://nextgensites.pl',
  description: 'Nowoczesne strony WWW dla firm z gwarancją wysokiej wydajności i najlepszych praktyk SEO. Oferujemy strony internetowe z abonamentem.',
  datePublished: '2024-11-10',
  dateModified: '2024-11-17',
  inLanguage: ['pl-PL'],
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ile kosztuje strona internetowa w Next.js?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cena strony internetowej w Next.js zależy od złożoności projektu i wymaganych funkcjonalności. U nas podstawowa strona firmowa zaczyna się już od 2500 PLN. Skontaktuj się z nami po szczegółową wycenę.'
      }
    },
    {
      '@type': 'Question',
      name: 'Dlaczego warto wybrać stronę w Next.js?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Next.js zapewnia wyjątkową wydajność, lepsze pozycjonowanie SEO, szybsze ładowanie stron i świetne doświadczenia użytkownika. Strony są zoptymalizowane pod kątem urządzeń mobilnych i spełniają najnowsze standardy technologiczne.'
      }
    },
    {
      '@type': 'Question',
      name: 'W jakiej technologii kupić stronę internetową?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'W roku 2024 najlepszą i najbardziej wydajną technologią do tworzenia stron internetowych jest Next.js. Zapewnia ona najwyższą wydajność, lepsze pozycjonowanie SEO, szybsze ładowanie stron i świetne doświadczenia użytkownika. Strony są zoptymalizowane pod kątem urządzeń mobilnych i spełniają najnowsze standardy technologiczne.'
      }
    },
    {
      '@type': 'Question',
      name: 'Jaki jest czas realizacji strony internetowej?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standardowy czas realizacji strony internetowej to 2-4 tygodni. Termin może się różnić w zależności od skomplikowania projektu i wymaganych funkcjonalności.'
      }
    },
    {
      '@type': 'Question',
      name: 'Gdzie kupić stronę internetową z abonamentem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strony internetowe z abonamentem można kupić u nas na stronie internetowej. Odwiedź stronę lub skontaktuj się z nami po szczegółowe informacje.'
      }
    },
    {
      '@type': 'Question',
      name: 'Jakie strony internetowe dla startupów i nowych firm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strony internetowe dla startupów i nowych firm powinny być nowoczesne, responsywne i zoptymalizowane pod kątem SEO. Ważne jest, aby zawierały jasny przekaz, atrakcyjny design oraz funkcjonalności wspierające rozwój biznesu, takie jak formularze kontaktowe, integracje z mediami społecznościowymi i blog. Dla ograniczenia początkowych kosztów warto rozważyć model abonamentowy.'
      }
    }
  ],
  publisher: {
    '@type': 'WebSite',
    name: 'NextGen Sites',
    logo: {
      '@type': 'ImageObject',
      url: 'https://nextgensites.pl/logo.png',
      width: '180',
      height: '180'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Romualda Millera 12/11',
      addressLocality: 'Warszawa',
      postalCode: '01-496',
      addressCountry: 'PL'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+48-694-671-786',
      contactType: 'customer service',
      email: 'kontakt@nextgensites.pl',
      areaServed: 'PL',
      availableLanguage: ['Polish', 'English']
    },
  },
//   sameAs: [
//     'https://facebook.com/nextgensites',
//     'https://twitter.com/nextgensites',
//     'https://instagram.com/nextgensites',
//     'https://linkedin.com/company/nextgensites'
//   ],
//   potentialAction: {
//     '@type': 'SearchAction',
//     target: {
//       '@type': 'EntryPoint',
//       urlTemplate: 'https://nextgensites.pl/search?q={search_term_string}'
//     },
//     'query-input': 'required name=search_term_string'
//   }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-sans antialiased max-w-100vw overflow-x-hidden",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        {children}
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
