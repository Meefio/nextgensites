"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Rocket, 
  Shield, 
  Zap, 
  BarChart, 
  Server, 
  Globe,
  FileEdit,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";

export const TechDetailsSection = () => {
  return (
    <section className="relative py-24 bg-background">
      <div className="container">
        {/* Nagłówek sekcji */}
        <div className="flex items-center gap-4 mb-16">
          <div className="rounded-full bg-primary/10 p-3">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Poznaj techniczne szczegóły
            </h2>
            <p className="text-muted-foreground">
              Odkryj, dlaczego nasze rozwiązania wyprzedzają konkurencję
            </p>
          </div>
        </div>

        {/* Sekcje techniczne */}
        <div className="space-y-24">
          {/* Sekcja 1: Next.js */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Next.js - Framework przyszłości
                </h3>
                <span className="text-muted-foreground mb-4 block">
                  Wykorzystujemy {" "}
                  <LinkPreview url="https://nextjs.org">
                    Next.js
                  </LinkPreview>
                  {" "} - technologię, której używają giganci tacy jak Netflix czy TikTok.
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Server className="h-4 w-4 text-primary" />
                      Server Components
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Strony ładują się błyskawicznie dzięki renderowaniu po stronie serwera.
                    </p>
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      Edge Runtime
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Globalna infrastruktura zapewnia szybki dostęp z każdego miejsca na świecie.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sekcja 2: Supabase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Supabase - Nowoczesna baza danych
                </h3>
                <span className="text-muted-foreground mb-4 block">
                  <LinkPreview url="https://supabase.com">
                    Supabase
                  </LinkPreview>
                  {" "} zapewnia bezpieczne przechowywanie danych i błyskawiczny dostęp.
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">Bezpieczeństwo</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Automatyczne backupy</li>
                      <li>• Szyfrowanie SSL/TLS</li>
                      <li>• Row Level Security</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">Wydajność</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Real-time subskrypcje</li>
                      <li>• Edge Functions</li>
                      <li>• Globalna replikacja</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sekcja 3: Monitoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Monitoring i analityka
                </h3>
                <span className="text-muted-foreground mb-4 block">
                  <LinkPreview url="https://posthog.com">
                    PostHog
                  </LinkPreview>
                  {" "} i {" "}
                  <LinkPreview url="https://sentry.io">
                    Sentry
                  </LinkPreview>
                  {" "} zapewniają pełną kontrolę nad działaniem strony.
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">PostHog</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Analiza zachowań użytkowników</li>
                      <li>• Ścieżki konwersji</li>
                      <li>• A/B testy</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">Sentry</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Monitoring błędów</li>
                      <li>• Performance monitoring</li>
                      <li>• Real-time alerty</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sekcja 4: CMS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <FileEdit className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Strapi - System zarządzania treścią
                </h3>
                <span className="text-muted-foreground mb-4 block">
                  <LinkPreview url="https://strapi.io">
                    Strapi
                  </LinkPreview>
                  {" "} pozwala na łatwe zarządzanie treścią bez wiedzy technicznej.
                </span>

                <div className="relative mt-8 rounded-xl border bg-gradient-to-b from-background to-background/50 p-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 rounded-xl" />
                  <h4 className="relative text-lg font-semibold mb-4">Dlaczego Strapi CMS?</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-background/50">
                      <h5 className="font-medium text-primary mb-3">Dla właściciela strony</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="size-1.5 rounded-full bg-primary" />
                          Intuicyjny panel administracyjny
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="size-1.5 rounded-full bg-primary" />
                          Łatwa edycja treści bez wiedzy technicznej
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="size-1.5 rounded-full bg-primary" />
                          Zarządzanie mediami (zdjęcia, pliki)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="size-1.5 rounded-full bg-primary" />
                          Darmowy dla podstawowych zastosowań
                        </li>
                      </ul>
                    </Card>

                    <Card className="p-6 bg-background/50">
                      <h5 className="font-medium text-primary mb-3">Dla developera</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="size-1.5 rounded-full bg-primary" />
                          Pełna kontrola nad strukturą danych
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="size-1.5 rounded-full bg-primary" />
                          REST API i GraphQL
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="size-1.5 rounded-full bg-primary" />
                          Łatwa integracja z Next.js
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="size-1.5 rounded-full bg-primary" />
                          Rozbudowane możliwości rozszerzeń
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};