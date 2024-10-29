import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-10">
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center">
      Gotowy na nową stronę, która przyciągnie klientów?
      </h2>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
      Niezależnie od wielkości biznesu, mamy rozwiązanie, które pomoże Ci się wyróżnić.
      </p>
      <Button size="lg" asChild variant="default" className="cursor-pointer border-border">
        <Link href="#">Bezpłatna konsultacja</Link>
      </Button>
    </section>
  );
}
