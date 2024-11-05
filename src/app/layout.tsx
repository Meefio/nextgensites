import "./globals.css";

import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { CookieBanner } from "@/components/cookie-banner";

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
  title: 'NextGen Sites - Nowoczesne strony internetowe',
  description: 'Tworzymy szybkie i nowoczesne strony internetowe wykorzystując Next.js',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://nextgensites.pl',
    siteName: 'NextGen Sites',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NextGen Sites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextGen Sites - Nowoczesne strony internetowe',
    description: 'Tworzymy szybkie i nowoczesne strony internetowe wykorzystując Next.js',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

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
        {children}
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
