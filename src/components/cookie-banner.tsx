"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(newConsent);
  };

  const handleRejectAll = () => {
    const newConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(newConsent);
  };

  const handleAcceptSelected = () => {
    saveConsent(consent);
  };

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem("cookieConsent", JSON.stringify(consentData));
    setShowBanner(false);
    
    if (consentData.analytics) {
      // Włącz PostHog
    }
    
    if (consentData.marketing) {
      // Włącz skrypty marketingowe
    }
  };

  if (!showBanner) return null;

  return (
    <div 
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4" 
      role="dialog" 
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="relative mx-auto max-w-4xl">
        <Card className="p-4 shadow-lg md:p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={() => setShowBanner(false)}
            aria-label="Zamknij banner plików cookie"
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="space-y-3">
            <h3 id="cookie-title" className="text-lg font-semibold">
              Szanujemy Twoją prywatność
            </h3>
            
            {!showDetails ? (
              <div className="space-y-4">
                <p id="cookie-description" className="text-sm text-muted-foreground">
                  Ta strona używa plików cookie, aby zapewnić najlepsze wrażenia z korzystania z naszej witryny. 
                  Możesz zaakceptować wszystkie, odrzucić opcjonalne lub dostosować swoje preferencje.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <Button 
                    variant="outline" 
                    onClick={handleRejectAll}
                    aria-label="Odrzuć wszystkie pliki cookie"
                  >
                    Odrzuć wszystkie
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowDetails(true)}
                    aria-label="Dostosuj ustawienia plików cookie"
                  >
                    Dostosuj
                  </Button>
                  <Button 
                    onClick={handleAcceptAll}
                    aria-label="Zaakceptuj wszystkie pliki cookie"
                  >
                    Zaakceptuj wszystkie
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p id="cookie-description" className="text-sm text-muted-foreground">
                  Używamy plików cookie, aby poprawić Twoje wrażenia z korzystania z naszej strony. 
                  Niektóre z nich są niezbędne do funkcjonowania podstawowych funkcji, podczas gdy 
                  inne pomagają nam zrozumieć, w jaki sposób korzystasz z witryny i jak możemy ją ulepszyć.
                </p>

                <div className="space-y-4 pt-4" role="group" aria-label="Ustawienia plików cookie">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="necessary" 
                      checked={consent.necessary} 
                      disabled 
                      aria-label="Niezbędne pliki cookie (wymagane)"
                    />
                    <label 
                      htmlFor="necessary" 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Niezbędne (wymagane)
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="analytics" 
                      checked={consent.analytics}
                      onCheckedChange={(checked) => 
                        setConsent(prev => ({...prev, analytics: checked as boolean}))
                      }
                      aria-label="Analityczne pliki cookie (PostHog)"
                    />
                    <label htmlFor="analytics" className="text-sm font-medium leading-none">
                      Analityczne (PostHog)
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="marketing" 
                      checked={consent.marketing}
                      onCheckedChange={(checked) => 
                        setConsent(prev => ({...prev, marketing: checked as boolean}))
                      }
                      aria-label="Marketingowe pliki cookie"
                    />
                    <label htmlFor="marketing" className="text-sm font-medium leading-none">
                      Marketingowe
                    </label>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Więcej informacji znajdziesz w naszej{" "}
                  <Link href="/polityka-prywatnosci" className="underline hover:text-foreground">
                    Polityce Prywatności
                  </Link>
                  .
                </p>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <Button 
                    variant="outline" 
                    onClick={handleRejectAll}
                    aria-label="Odrzuć wszystkie pliki cookie"
                  >
                    Odrzuć wszystkie
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleAcceptSelected}
                    aria-label="Zaakceptuj wybrane pliki cookie"
                  >
                    Zaakceptuj wybrane
                  </Button>
                  <Button 
                    onClick={handleAcceptAll}
                    aria-label="Zaakceptuj wszystkie pliki cookie"
                  >
                    Zaakceptuj wszystkie
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
} 