/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'nextjs.org',
      'supabase.com',
      'posthog.com',
      'sentry.io',
    ],
  },
};

export default nextConfig;
