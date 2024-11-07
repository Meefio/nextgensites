import { Metadata, Viewport } from 'next'

// Viewport configuration z preferencją dark mode
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark', 
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#020817' }, // tw-bg-background
    { media: 'print', color: 'white' }
  ],
}

// Core metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://nextgensites.pl'),
  
  title: {
    default: 'NextGen Sites - Nowoczesne Strony Internetowe | Next.js',
    template: '%s | NextGen Sites'
  },
  
  description: 'Tworzymy szybkie i nowoczesne strony internetowe w Next.js. Profesjonalne strony WWW dla firm z Polski z gwarancją wysokiej wydajności i pozycji w Google.',
  
  applicationName: 'NextGen Sites',
  authors: [{ name: 'Michał Rowiński', url: 'https://nextgensites.pl' }],
  generator: 'Next.js',
  keywords: ['strony internetowe', 'next.js', 'tworzenie stron www', 'strony dla firm', 'nowoczesne strony'],
  referrer: 'origin-when-cross-origin',
  creator: 'NextGen Sites',
  publisher: 'NextGen Sites',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    alternateLocale: ['en_US'],
    url: 'https://nextgensites.pl',
    siteName: 'NextGen Sites',
    title: 'NextGen Sites - Nowoczesne Strony Internetowe w Next.js',
    description: 'Tworzymy szybkie i nowoczesne strony internetowe wykorzystując Next.js. Profesjonalne strony WWW dla firm z Polski.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NextGen Sites - Nowoczesne Strony Internetowe',
        type: 'image/png',
        secureUrl: 'https://nextgensites.pl/images/og-image.png',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nextgensites',
    creator: '@nextgensites',
    title: 'NextGen Sites - Nowoczesne Strony Internetowe',
    description: 'Tworzymy szybkie i nowoczesne strony internetowe wykorzystując Next.js',
    images: ['https://nextgensites.pl/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://nextgensites.pl',
    languages: {
      'pl-PL': 'https://nextgensites.pl',
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'technology',

  // Dodajemy informacje o dark mode
  other: {
    'color-scheme': 'dark',
    'theme-color': '#020817', // tw-bg-background
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },

  // Aktualizujemy manifest
  manifest: '/manifest.json',

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
}

// Rozszerzony JSON-LD
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NextGen Sites',
  alternateName: 'NextGen Sites - Nowoczesne Strony Internetowe',
  url: 'https://nextgensites.pl',
  description: 'Tworzymy szybkie i nowoczesne strony internetowe wykorzystując Next.js',
  mainEntity: [
   {
     '@type': 'Question',
     name: 'Ile kosztuje strona internetowa w Next.js?',
     acceptedAnswer: {
       '@type': 'Answer',
       text: 'Cena strony internetowej w Next.js zależy od złożoności projektu i wymaganych funkcjonalności. Podstawowa strona firmowa zaczyna się od 5000 PLN. Skontaktuj się z nami po szczegółową wycenę.'
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
     name: 'Jaki jest czas realizacji strony internetowej?',
     acceptedAnswer: {
       '@type': 'Answer',
       text: 'Standardowy czas realizacji strony internetowej to 4-6 tygodni. Termin może się różnić w zależności od skomplikowania projektu i wymaganych funkcjonalności.'
     }
   },
   {
     '@type': 'Question',
     name: 'Czy zapewniacie wsparcie po wdrożeniu strony?',
     acceptedAnswer: {
       '@type': 'Answer',
       text: 'Tak, zapewniamy pełne wsparcie techniczne po wdrożeniu strony. Oferujemy regularne aktualizacje, monitoring wydajności oraz pomoc w rozwiązywaniu ewentualnych problemów.'
     }
   }
 ],
  publisher: {
    '@type': 'Organization',
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
      availableLanguage: ['Polish']
    },
  },
  sameAs: [
    'https://facebook.com/nextgensites',
    'https://twitter.com/nextgensites',
    'https://instagram.com/nextgensites',
    'https://linkedin.com/company/nextgensites'
  ],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://nextgensites.pl/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
} 