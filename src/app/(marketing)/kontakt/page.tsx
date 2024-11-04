import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";

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
};

// Schema.org JSON-LD
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt | NextGenSites",
  description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
  url: "https://nextgensites.pl/kontakt",
  mainEntity: {
    "@type": "Organization",
    name: "NextGenSites",
    telephone: "+48 694 671 786",
    email: "kontakt@nextgensites.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Romualda Millera 12",
      addressLocality: "Warszawa",
      postalCode: "01-496",
      addressCountry: "PL"
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <main className="container py-8 md:py-12">
        <ContactForm />
      </main>
    </>
  );
} 