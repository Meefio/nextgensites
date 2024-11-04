import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NextGen Sites',
    short_name: 'NextGen',
    description: 'Nowoczesne strony internetowe w Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#020817',
    theme_color: '#020817',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    orientation: 'portrait',
    categories: ['business', 'technology', 'web development'],
    shortcuts: [
      {
        name: 'Kontakt',
        url: '/kontakt',
        description: 'Skontaktuj się z nami',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/home.png',
        sizes: '1920x1080',
        type: 'image/png',
      },
    ],
  }
} 