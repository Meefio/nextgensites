import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '*/private/*',
          '*.pdf',
          '/tmp/',
          '/cms/',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: 'https://nextgensites.pl/sitemap.xml',
    host: 'https://nextgensites.pl',
  }
} 