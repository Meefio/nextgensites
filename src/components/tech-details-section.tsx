"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Rocket, 
  Shield, 
  Zap, 
  BarChart, 
  Server, 
  Globe,
  ArrowRight
} from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { LinkPreview } from "@/components/ui/link-preview";
import { Card } from "@/components/ui/card";

const PREVIEW_URLS = {
  'nextjs.org': `https://api.microlink.io/?url=https://nextjs.org&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.width=1200&viewport.height=630`,
  'supabase.com': `https://api.microlink.io/?url=https://supabase.com&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.width=1200&viewport.height=630`,
  'posthog.com': `https://api.microlink.io/?url=https://posthog.com&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.width=1200&viewport.height=630`,
  'sentry.io': `https://api.microlink.io/?url=https://sentry.io&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.width=1200&viewport.height=630`
};

const StorySection1 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Zap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Szybkość i wydajność na pierwszym miejscu
          </h3>
          <p className="text-muted-foreground mb-4">
            Wykorzystujemy{" "}
            <LinkPreview url="https://nextjs.org">
              Next.js
            </LinkPreview>
            {" "} - technologię, której używają giganci tacy jak Netflix czy TikTok. W porównaniu do tradycyjnych rozwiązań:
          </p>

          <div className="relative mt-8 rounded-xl border bg-gradient-to-b from-background to-background/50 p-6">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 rounded-xl" />
            <h4 className="relative text-lg font-semibold mb-4">Porównanie z tradycyjnymi rozwiązaniami:</h4>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-medium text-primary">Nasze rozwiązanie</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Renderowanie po stronie serwera
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Globalna infrastruktura
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="font-medium text-muted-foreground">Tradycyjne rozwiązania</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-muted" />
                    Renderowanie po stronie klienta
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-muted" />
                    Lokalna infrastruktura
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StorySection2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Bezpieczeństwo i skalowalność
          </h3>
          <p className="text-muted-foreground mb-4">
            Korzystamy z {" "}
            <LinkPreview url="https://supabase.com">Supabase</LinkPreview>
            {" "} oraz innych nowoczesnych baz danych, dobierając technologię pod konkretne potrzeby projektu.
          </p>

          <div className="relative mt-8 rounded-xl border bg-gradient-to-b from-background to-background/50 p-6">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 rounded-xl" />
            <h4 className="relative text-lg font-semibold mb-4">Porównanie z tradycyjnymi rozwiązaniami:</h4>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-medium text-primary">Nasze rozwiązanie</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Automatyczne backupy i replikacja danych
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Szyfrowanie SSL/TLS i szyfrowanie w spoczynku
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Skalowalność do milionów użytkowników
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    Real-time aktualizacje danych
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="font-medium text-muted-foreground">Tradycyjne rozwiązania</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-muted" />
                    Manualne backupy, ryzyko utraty danych
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-muted" />
                    Podstawowe zabezpieczenia
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-muted" />
                    Ograniczona skalowalność
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-muted" />
                    Opóźnienia w aktualizacji danych
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StorySection3 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <BarChart className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Analityka i monitoring w czasie rzeczywistym
          </h3>
          <p className="text-muted-foreground mb-4">
            Wykorzystujemy {" "}
            <LinkPreview url="https://posthog.com">PostHog</LinkPreview>
            {" "} do zaawansowanej analityki i {" "}
            <LinkPreview url="https://sentry.io">Sentry</LinkPreview>
            {" "} do monitorowania błędów.
          </p>

          {/* Interaktywny diagram */}
          <div className="mt-8 rounded-xl border bg-card p-6">
            <h4 className="text-lg font-semibold mb-6">Kompleksowy monitoring strony</h4>
            
            <div className="relative">
              {/* Linia łącząca elementy */}
              <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2" />
              
              <div className="space-y-8">
                {/* Wydajność */}
                <motion.div 
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="md:text-right md:pr-8">
                    <h5 className="font-medium text-primary mb-2">Wydajność</h5>
                    <p className="text-sm text-muted-foreground">
                      Monitorowanie czasu ładowania i optymalizacja w czasie rzeczywistym
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="rounded-lg border bg-secondary/50 p-3">
                      <p className="text-sm">
                        Średni czas ładowania: <span className="text-primary font-medium">{"<"}0.5s</span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Zachowanie użytkowników */}
                <motion.div 
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="md:text-right md:pr-8">
                    <h5 className="font-medium text-primary mb-2">Zachowanie użytkowników</h5>
                    <p className="text-sm text-muted-foreground">
                      Analiza ścieżek i interakcji użytkowników
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="rounded-lg border bg-secondary/50 p-3">
                      <p className="text-sm">
                        Szczegółowe raporty i heatmapy interakcji
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Błędy i problemy */}
                <motion.div 
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="md:text-right md:pr-8">
                    <h5 className="font-medium text-primary mb-2">Błędy i problemy</h5>
                    <p className="text-sm text-muted-foreground">
                      Natychmiastowe powiadomienia o problemach
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="rounded-lg border bg-secondary/50 p-3">
                      <p className="text-sm">
                        Automatyczne wykrywanie i naprawa błędów
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Podsumowanie */}
            <div className="mt-8 rounded-lg border bg-primary/5 p-4">
              <p className="text-sm text-muted-foreground">
                Dzięki zaawansowanym narzędziom monitoringu, Twoja strona jest zawsze pod kontrolą. 
                Wykrywamy i naprawiamy problemy zanim wpłyną na Twoich użytkowników.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const TechDetailsSection = () => {
  return (
    <section className="container relative py-14 md:py-24 mb-24 bg-background">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="tech-details" className="border rounded-lg">
          <AccordionTrigger className="group flex w-full justify-between py-6 text-left text-lg hover:no-underline bg-background">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">
                  Niezdecydowany? Poznaj techniczne szczegóły
                </h3>
                <p className="text-sm text-muted-foreground">
                  Odkryj, dlaczego nasze rozwiązania wyprzedzają konkurencję
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </AccordionTrigger>
          
          <AccordionContent className="bg-background">
            <div className="space-y-12 py-6">
              <StorySection1 />
              <StorySection2 />
              <StorySection3 />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}; 