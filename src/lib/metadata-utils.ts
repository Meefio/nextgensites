import { Metadata } from 'next'

interface GenerateMetadataProps {
  title: string
  description: string
  path: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage = '/images/og-image.png',
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const url = `https://nextgensites.pl${path}`

  return {
    title: {
      default: `${title} | NextGen Sites`,
      template: '%s | NextGen Sites',
    },
    description,
    metadataBase: new URL('https://nextgensites.pl'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'NextGen Sites',
      locale: 'pl_PL',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@nextgensites',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'color-scheme': 'dark',
      'theme-color': '#020817',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'msapplication-TileColor': '#020817',
    },
  }
}

// Generator JSON-LD dla różnych typów stron
export function generateJsonLd(type: 'website' | 'article' | 'service' | 'contact', data: any) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type.charAt(0).toUpperCase() + type.slice(1),
    url: `https://nextgensites.pl${data.path}`,
    name: data.title,
    description: data.description,
    publisher: {
      '@type': 'Organization',
      name: 'NextGen Sites',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nextgensites.pl/logo.png',
      },
    },
  }

  switch (type) {
    case 'article':
      return {
        ...baseData,
        author: {
          '@type': 'Person',
          name: data.author,
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        image: data.image,
      }
    case 'service':
      return {
        ...baseData,
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: 'PLN',
        },
        areaServed: 'PL',
      }
    case 'contact':
      return {
        ...baseData,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+48-694-671-786',
          contactType: 'customer service',
          areaServed: 'PL',
          availableLanguage: ['Polish'],
        },
      }
    default:
      return baseData
  }
} 