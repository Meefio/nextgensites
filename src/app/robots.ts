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
          '/private/',
          '/tmp/',
          '/cms/',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/admin/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/admin/'],
      },
    ],
    sitemap: 'https://nextgensites.pl/sitemap.xml',
  }
} 