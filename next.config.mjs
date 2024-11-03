/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'supabase.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'posthog.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sentry.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'strapi.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
