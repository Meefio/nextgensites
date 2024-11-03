"use client";

import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CtaSection() {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    
    // Animacja przy hover
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        y: -5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    };

    // Pulsująca animacja
    gsap.to(button, {
      scale: 1.02,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    button?.addEventListener("mouseenter", handleMouseEnter);
    button?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button?.removeEventListener("mouseenter", handleMouseEnter);
      button?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative container flex flex-col items-center gap-6 py-14 md:py-24 sm:gap-10 rounded-md border border-border bg-secondary overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-[0.03] select-none pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-12 gap-4 transform -rotate-12 scale-150">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="text-2xl font-bold text-foreground">
              $
            </div>
          ))}
        </div>
      </div>
      
      <h2 className="relative font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center">
        Gotowy na nową stronę, która przyciągnie klientów?
      </h2>
      <p className="relative text-lg text-muted-foreground text-balance max-w-lg text-center">
        Niezależnie od wielkości biznesu, mamy rozwiązanie, które pomoże Ci się wyróżnić.
      </p>
      <div ref={buttonRef}>
        <Button size="lg" asChild variant="default" className="relative cursor-pointer border-border">
          <Link href="#">Wycena w 2 minuty</Link>
        </Button>
      </div>
    </section>
  );
}
