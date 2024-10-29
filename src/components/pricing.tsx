"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true)

  const plans = [
    {
      name: "Podstawowy",
      monthlyPrice: "150zł",
      oneTimePrice: "2 500zł",
      description: "Zapłać raz i ciesz się pełnym dostępem do swojej strony. Doskonałe rozwiązanie dla firm, które wiedzą, czego chcą.",
      features: [
        "Optymalizacja SEO",
        "Zintegorwane narzędzia analityczne",
        "Najwyższa wydajność",
        "Formularz kontaktowy",
        "Custom branding",
      ],
    },
    {
      name: "Subskrypcyjny",
      monthlyPrice: "150zł",
      oneTimePrice: "1 800zł",
      description: "Idealne rozwiązanie dla startupów lub firm, które dopiero wchodzą na rynek.",
      features: [
        "Zrezygnuj w dowolnym momencie",
        "Priority support",
        "Advanced analytics",
        "Unlimited users",
        "Custom domain",
      ],
      isPopular: true,
    },
    {
      name: "Indywidualny",
      monthlyPrice: "+150zł",
      oneTimePrice: "Wycena indywidualna",
      description: "Dla wymagających klientów :)",
      features: [
        "Everything in Pro",
        "Single sign-on",
        "Custom SLA",
        "Custom integrations",
        "Custom reporting",
      ],
    },
  ]

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
      <div className="flex items-center gap-2 mt-4">
        <span className={isMonthly ? "text-foreground" : "text-muted-foreground"}>Subskrypcyjnie</span>
        <Switch
          checked={!isMonthly}
          onCheckedChange={() => setIsMonthly(!isMonthly)}
          className="data-[state=checked]:bg-primary"
        />
        <span className={!isMonthly ? "text-foreground" : "text-muted-foreground"}>Jednorazowo</span>
      </div>
      <div className="mt-7 grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative shadow-lg ${plan.isPopular ? "border-2 border-primary" : ""}`}>
            <CardContent className="divide-y p-0">
              <div className="flex flex-col items-center px-7 py-10">
                {plan.isPopular && (
                  <span className="absolute inset-x-0 -top-5 mx-auto rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md w-40">
                    Najpopularniejsze
                  </span>
                )}
                <h4 className="font-heading text-2xl font-semibold text-foreground">{plan.name}</h4>
                <p className="mt-2 text-muted-foreground text-center">
                  {plan.description}
                </p>
                <div className="mt-5">
                  <span className="font-heading font-semibold text-4xl">
                    {isMonthly ? plan.monthlyPrice : plan.oneTimePrice}
                  </span>
                  {isMonthly && <span className="text-sm">/miesięcznie</span>}
                  {!isMonthly && plan.name !== "Indywidualny" && <span className="text-sm">+23% VAT</span>}
                  {!isMonthly && plan.name !== "Indywidualny" && <span className="text-sm">/jednorazowo</span>}
                </div>
                <Button size="lg" asChild className="mt-10 w-full">
                  <a href="#">Get started</a>
                </Button>
              </div>
              <ul className="space-y-2 px-7 py-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={24} className="text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}