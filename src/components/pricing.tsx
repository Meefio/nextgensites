import { Check } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3 animate-fade-in">
        <span className="font-bold uppercase text-primary text-center">Cennik</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Przyjazne ceny
        </h2>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
          Cennik, który dopasuje się do Twoich potrzeb
        </p>
      </div>
      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
        <Card className="relative shadow-lg">
          <CardContent className="divide-y p-0">
            <div className="flex flex-col items-center px-7 py-10">
              <h4 className="font-heading text-2xl font-semibold text-foreground">Jednorazowy</h4>
              <p className="mt-2 text-muted-foreground text-center">
                Zapłać raz i ciesz się pełnym dostępem do swojej strony. Doskonałe rozwiązanie dla
                firm, które wiedzą, czego chcą.
              </p>
              <div className="mt-5">
                <span className="font-heading font-semibold text-4xl">2 500zł</span>
                <span className="text-sm">+23% VAT</span>
                <span className="text-sm">/jednorazowo</span>
              </div>
              <Button size="lg" asChild className="mt-10 w-full">
                <a href="#">Get started</a>
              </Button>
            </div>
            <ul className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Optymalizacja SEO</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Zintegorwane narzędzia analityczne</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Najwyższa wydajność</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Formularz kontaktowy</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Custom branding</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="relative shadow-lg border-2 border-primary">
          <CardContent className="divide-y p-0">
            <div className="flex flex-col items-center px-7 py-10">
              <span className="absolute inset-x-0 -top-5 mx-auto rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md w-40">
                Najpopularniejsze
              </span>
              <h4 className="font-heading text-2xl font-semibold text-foreground">Subskrypcyjny</h4>
              <p className="mt-2 text-muted-foreground text-center">
                idealne rozwiązanie dla startupów lub firm, które dopiero wchodzą na rynek.{" "}
              </p>
              <div className="mt-5">
                <span className="font-heading font-semibold text-4xl">150zł</span>
                <span className="text-sm">/miesięcznie</span>
                <span className="text-sm">/miesięcznie</span>
              </div>
              <Button size="lg" asChild className="mt-10 w-full">
                <a href="#">Get started</a>
              </Button>
            </div>
            <ul className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Zrezygnuj w dowolnym momencie</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Advanced analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Unlimited users</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Custom domain</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="relative shadow-lg">
          <CardContent className="divide-y p-0">
            <div className="flex flex-col items-center px-7 py-10">
              <h4 className="font-heading text-2xl font-semibold text-foreground">Indywidualny</h4>
              <p className="mt-2 text-muted-foreground text-center">
                Dla wymagających klientów :)
                <br />
              </p>
              <div className="mt-5">
                <span className="font-heading font-semibold text-4xl">+150zł</span>
                <span className="text-sm">/miesięcznie</span>
                <span className="text-sm">/miesięcznie</span>
              </div>
              <Button size="lg" asChild className="mt-10 w-full">
                <a href="#">Get started</a>
              </Button>
            </div>
            <ul className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Everything in Pro</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Single sign-on</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Custom SLA</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Custom integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Custom reporting</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
