import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Faq</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Najczęściej zadawane pytania
        </h2>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
          Jeśli masz jakieś dodatkowe pytania, napisz do nas!
        </p>
      </div>
      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Dlaczego model subskrypcyjny?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Wiemy, że otwarcie nowego biznesu wiąże się z wieloma ryzykami, a wysokie koszty
            stworzenia strony internetowej mogą być obciążeniem, zwłaszcza gdy firma nie generuje
            jeszcze przychodów. Dlatego wychodzimy naprzeciw przedsiębiorcom, oferując możliwość
            miesięcznej opłaty, która nie nadwyręży Twojego budżetu i pozwoli Ci inwestować w inne
            obszary w celu szybszego rozwoju firmy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Ile czasu zajmuje stworzenie nowej strony?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Przybliżony czas realizacji zależy od skomplikowania projektu. Zazwyczaj jest to od
            kilku dni do kilku tygodni.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Dlaczego miałbym skorzystać z waszych usług a nie konkurencji?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            W przeciwieństwie do konkurencji, która w większości tworzy strony internetowe na
            przestarzałych technologiach jak WordPress - Elementor, nasze rozwiązanie oparte na
            Next.js pozwala na serwerowe renderowanie stron, co zapewnia lepszą szybkość i
            wydajność. Otrzymujesz gotowy, zoptymalizowany produkt, który ładuje się błyskawicznie,
            jest przyjazny dla SEO i dostarcza lepsze wrażenia użytkownikom – co wyróżnia nas na tle
            konkurencji.”
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Czy strona będzie responsywna i dobrze wyglądała na urządzeniach mobilnych?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Tak, wszystkie nasze strony są w pełni responsywne, co oznacza, że będą doskonale
            wyglądać na komputerach, tabletach i smartfonach.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Will the exported website look exactly like the preview?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Yes, the exported website will look exactly like you see in the editor and in the
            preview.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
