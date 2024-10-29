import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { TextShimmer } from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="inline-flex h-7 items-center justify-between rounded-full border bg-secondary text-secondary-foreground px-3 text-xs transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in">
          <TextShimmer className="inline-flex items-center justify-center">
            <span className="text-xs text-secondary-foreground/80">
              Zacznij już za 150 PLN / miesiąc
            </span>
            <ArrowRight
              size={20}
              className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </TextShimmer>
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl lg:text-left tracking-tight animate-fade-in">
          Stwórz stronę, która przyciągnie klientów
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left animate-fade-in">
          Nowoczesne strony internetowe z wykorzystaniem technologii Next.js – szybciej, lepiej,
          skuteczniej
        </p>
        <div className="grid gap-3">
          <Button size="lg" asChild className="cursor-pointer animate-fade-in">
            <Link href="#">Dowiedz się więcej!</Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1 animate-fade-in">
        <BorderBeam
          size={200}
          anchor={90}
          colorTo="#0000"
          duration={10}
          borderWidth={1.8}
          className="rounded-xl"
        />
        <Image
          alt="SaaS Dashboard"
          src="/images/dashboard.png"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
