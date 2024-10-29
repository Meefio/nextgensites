import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";
import { TimelineSection } from "@/components/TimelineSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <TimelineSection />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
      <BlogSection />
    </>
  );
}
