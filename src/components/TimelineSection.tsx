import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
   const data = [
      {
        title: "Kontakt i szczegóły projektu",
        content: (
          <p className="text-muted-foreground">
            Skontaktuj się z nami przez formularz kontaktowy, telefon lub e-mail, aby przedstawić swoje potrzeby i oczekiwania. Przekaż nam zdjęcia, informacje o kolorystyce, logo oraz sekcjach na których Ci zależy abyśmy mogli lepiej zrozumieć wymagania oraz cele biznesowe.
          </p>
        ),
      },
      {
        title: "Wycena i akceptacja kosztów",
        content: (
          <p className="text-muted-foreground">
            Na podstawie uzyskanych informacji przygotujemy wycenę i harmonogram projektu. Po akceptacji kosztów, przystępujemy do realizacji.
          </p>
        ),
      },
      {
        title: "Draft oraz treści na stronę",
        content: (
          <p className="text-muted-foreground">
            Przedstawiamy treści na stronę oraz draft Twojej nowej strony internetowej do akceptacji lub poprawek.
          </p>
        ),
      },
      {
        title: "Poprawki i finalizacja",
        content: (
          <p className="text-muted-foreground">
            Po uwzględnieniu uwag dokonujemy ostatnich poprawek. Po finalnej akceptacji wdrażamy stronę na serwer, konfigurujemy pocztę, dodajemy narzędzia do śledzenia ruchu, a Ty otrzymujesz w pełni funkcjonalny i zoptymalizowany serwis gotowy do działania.
          </p>
        ),
      },
    ];
  return (
    <div className="w-full relative">
      <div className="bg-primary/20 [filter:blur(180px)] absolute right-0 top-[50%] md:size-64 size-32" />
      <Timeline data={data} />
    </div>
  );
}
