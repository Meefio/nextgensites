import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";
import { TimelineSection } from "@/components/TimelineSection";
import { CtaSection } from "@/components/cta";
import { SocialProof } from "@/components/SocialProof";
import { ContactForm } from "@/components/contact-form";
import { TechDetailsSection } from "@/components/tech-details-section";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <TimelineSection />
        <CtaSection />
        <Pricing />
        <Testimonials />
        <Faq />
        <ContactForm />
        <TechDetailsSection />
      </main>
      <div className="relative z-10 bg-background">
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
}
