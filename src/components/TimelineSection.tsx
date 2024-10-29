import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
   const data = [
      {
        title: "Kontakt i konsultacja",
        content: (
          <p className="text-muted-foreground">
            Skontaktuj się z nami przez formularz, telefon lub e-mail, aby przedstawić swoje potrzeby i oczekiwania. Umówimy się na konsultację, aby lepiej poznać Twój projekt.
          </p>
        ),
      },
      {
        title: "Kwestionariusz projektowy",
        content: (
          <p className="text-muted-foreground">
            Po rozmowie poprosimy Cię o odpowiedź na kilka pytań, które pomogą nam zrozumieć wymagania i cele biznesowe. Dzięki temu lepiej dopasujemy zakres usług i przygotujemy wycenę.
          </p>
        ),
      },
      {
        title: "Otrzymanie wyceny i akceptacja kosztów",
        content: (
          <p className="text-muted-foreground">
            Na podstawie informacji przygotujemy wycenę i harmonogram projektu. Po akceptacji kosztów, przystępujemy do realizacji.
          </p>
        ),
      },
      {
        title: "Przygotowanie draftu treści na stronę",
        content: (
          <p className="text-muted-foreground">
            Rozpoczynamy od opracowania treści na stronę, zgodnie z wytycznymi i celem biznesowym. Przedstawimy draft do Twojej akceptacji lub poprawek.
          </p>
        ),
      },
      {
        title: "Projekt strony i układ graficzny",
        content: (
          <p className="text-muted-foreground">
            Tworzymy wstępny projekt strony, uwzględniając UX/UI oraz estetykę dopasowaną do Twojej marki. Projekt zostanie przesłany do akceptacji lub ewentualnych poprawek.
          </p>
        ),
      },
      {
        title: "Poprawki i finalizacja",
        content: (
          <p className="text-muted-foreground">
            Po uwzględnieniu uwag dokonujemy ostatnich poprawek. Po finalnej akceptacji wdrażamy stronę na serwer, a Ty otrzymujesz w pełni funkcjonalny i zoptymalizowany serwis gotowy do działania.
          </p>
        ),
      },
    ];
  return (
    <div className="w-full relative">
      <div className="bg-primary/50 [filter:blur(100px)] absolute right-0 top-[50%] md:size-64 size-32" />
      <Timeline data={data} />
    </div>
  );
}
