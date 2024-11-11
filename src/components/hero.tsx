'use client'

import dynamic from 'next/dynamic'
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


import { TextShimmer } from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";

// Dynamiczny import komponentów motion
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false })
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false })
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false })

export function Hero() {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="container flex flex-col items-center gap-10 pb-14 pt-10 md:pb-28 md:pt-20 sm:gap-14 lg:flex-row">
      <MotionDiv 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10"
      >
        <MotionDiv variants={itemVariants}>
          <Link href="#cennik" scroll={true} className="inline-flex h-7 items-center justify-between rounded-full border bg-secondary text-secondary-foreground px-3 text-xs transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1">
            <TextShimmer className="inline-flex items-center justify-center">
              <span className="text-xs text-secondary-foreground/80">
                Zacznij już za 150 PLN / miesiąc
              </span>
              <ArrowRight
                size={20}
                className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
              />
            </TextShimmer>
          </Link>
        </MotionDiv>

        <MotionH1 
          variants={itemVariants}
          className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl lg:text-left tracking-tight"
        >
          Stwórz stronę, która przyciągnie klientów
        </MotionH1>

        <MotionP 
          variants={itemVariants}
          className="max-w-md text-center text-lg text-muted-foreground lg:text-left"
        >
          Tworzymy szybkie i nowoczesne strony internetowe z wykorzystaniem technologii Next.js, które zwiększają sprzedaż i budują wiarygodność Twojej firmy.
        </MotionP>

        <MotionDiv 
          variants={itemVariants}
          className="grid gap-3"
        >
          <Button size="lg" asChild>
            <Link href="#korzysci" scroll={true}>
              Dowiedz się więcej!
            </Link>
          </Button>
        </MotionDiv>
      </MotionDiv>

      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="relative flex-1"
      >
        <BorderBeam
          size={200}
          anchor={90}
          colorTo="#0000"
          duration={10}
          borderWidth={1.8}
          className="rounded-xl"
        />
        <Image
          alt="Przykład nowoczesnej strony internetowej"
          src="/images/hero-image.webp"
          width={1482}
          height={899}
          priority
			 quality={90}
			 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1482px"
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </MotionDiv>
    </section>
  );
}
