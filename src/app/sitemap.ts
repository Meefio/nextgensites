import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextgensites.pl'
  const lastModified = new Date()

  // Główne strony
  const mainPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Strony usług
  const servicePages = [
    {
      url: `${baseUrl}/uslugi/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/uslugi/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Strony prawne
  const legalPages = [
    {
      url: `${baseUrl}/regulamin`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/rodo`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  return [...mainPages, ...servicePages, ...legalPages]
} 