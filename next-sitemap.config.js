/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nextgensites.pl',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // Wyklucz ścieżki, które nie powinny być w mapie
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://nextgensites.pl/server-sitemap.xml', // Jeśli masz dynamiczną sidemapę
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*'] // Dostosuj według potrzeb
      }
    ]
  }
} 