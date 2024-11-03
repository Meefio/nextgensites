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
  Lock,
  Database,
  LineChart,
  ArrowUpRight,
  SplitSquareVertical,
  AlertCircle,
  Activity,
  Bell,
  Sparkles,
  Smartphone,
  Eye,
  MousePointer,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";

export const TechDetailsSection = () => {
  return (
    <section className="relative py-24 bg-background">
      <div className="container">
        {/* Nagłówek sekcji */}
        <div className="flex flex-col gap-3 animate-fade-in">
          <span className="font-bold uppercase text-primary text-center">Technologie</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
            Poznaj techniczne szczegóły
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-lg text-center mx-auto">
            Odkryj, dlaczego nasze rozwiązania wyprzedzają konkurencję
          </p>
        </div>

        {/* Sekcje techniczne */}
        <div className="space-y-24 mt-7">
          {/* Sekcja 1: Next.js */}
          <motion.div className="w-full">
            <div className="flex items-start gap-4 w-full">
              <div className="rounded-full bg-primary/10 p-3 shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="w-full">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      Wydajność
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-primary" />
                        Błyskawiczne ładowanie
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        Optymalizacja SEO
                      </li>
                      <li className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-primary" />
                        Płynne działanie
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        Stabilna praca
                      </li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      Zasięg
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <ArrowUpRight className="h-4 w-4 text-primary" />
                        Globalna dostępność
                      </li>
                      <li className="flex items-center gap-2">
                        <LineChart className="h-4 w-4 text-primary" />
                        Szybkość działania
                      </li>
                      <li className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-primary" />
                        Niezawodność
                      </li>
                      <li className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        Stałe aktualizacje
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Innowacje
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <FileEdit className="h-4 w-4 text-primary" />
                        Łatwa aktualizacja
                      </li>
                      <li className="flex items-center gap-2">
                        <SplitSquareVertical className="h-4 w-4 text-primary" />
                        Nowoczesny design
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-primary" />
                        Bezpieczeństwo
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-primary" />
                        Analityka
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-primary" />
                      Dostępność
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        Responsywny design
                      </li>
                      <li className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-primary" />
                        Przyjazny interfejs
                      </li>
                      <li className="flex items-center gap-2">
                        <MousePointer className="h-4 w-4 text-primary" />
                        Intuicyjna obsługa
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        Dla każdego użytkownika
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sekcja 2: Supabase i PostHog */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24 w-full">
            {/* Supabase */}
            <motion.div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Database className="h-6 w-6 text-primary" />
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

                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">Bezpieczeństwo i wydajność</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        Automatyczne backupy
                      </li>
                      <li className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-primary" />
                        Szyfrowanie SSL/TLS
                      </li>
                      <li className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-primary" />
                        Row Level Security
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowUpRight className="h-4 w-4 text-primary" />
                        Real-time subskrypcje
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* PostHog */}
            <motion.div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    PostHog - Analiza użytkowników
                  </h3>
                  <span className="text-muted-foreground mb-4 block">
                    <LinkPreview url="https://posthog.com">
                      PostHog
                    </LinkPreview>
                    {" "} dostarcza szczegółowych informacji o zachowaniu użytkowników na stronie.
                  </span>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">Kluczowe funkcje</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <LineChart className="h-4 w-4 text-primary" />
                        Analiza zachowań użytkowników
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowUpRight className="h-4 w-4 text-primary" />
                        Ścieżki konwersji
                      </li>
                      <li className="flex items-center gap-2">
                        <SplitSquareVertical className="h-4 w-4 text-primary" />
                        A/B testy
                      </li>
                      <li className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-primary" />
                        Heatmapy i nagrania sesji
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sekcja 3: Strapi i Sentry */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24 w-full">
            {/* Strapi */}
            <motion.div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileEdit className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    System zarządzania treścią
                  </h3>
                  <span className="text-muted-foreground mb-4 block">
                    <LinkPreview url="https://strapi.io">
                      Strapi
                    </LinkPreview>
                    {" "} umożliwia samodzielną aktualizację treści na stronie bez pomocy programisty.
                  </span>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">Zarządzanie treścią</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <FileEdit className="h-4 w-4 text-primary" />
                        Intuicyjny panel administracyjny
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        Edycja tekstów i zdjęć
                      </li>
                      <li className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-primary" />
                        Podgląd zmian na żywo
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        Historia modyfikacji
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Sentry */}
            <motion.div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Sentry - Monitoring błędów
                  </h3>
                  <span className="text-muted-foreground mb-4 block">
                    <LinkPreview url="https://sentry.io">
                      Sentry
                    </LinkPreview>
                    {" "} zapewnia stabilność i wydajność aplikacji w czasie rzeczywistym.
                  </span>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">Monitorowanie</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-primary" />
                        Monitoring błędów
                      </li>
                      <li className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-primary" />
                        Performance monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        Real-time alerty
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-primary" />
                        Diagnostyka problemów
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};