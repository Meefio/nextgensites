import { Gauge, BarChart2, MonitorSmartphone, CreditCard, Headphones, Layers } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="bg-primary/50 [filter:blur(100px)] absolute md:size-64 size-32 top-[1200px] left-0 -z-10" />
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Dlaczego nextgen sites?
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Nowoczesność, która się opłaca
        </h2>
        <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
          Nowoczesna technologia, lepsze wyniki – przyciągnij klientów i wyprzedź konkurencję!
        </p>
      </div>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg relative">
          <CardContent className="flex flex-col items-start gap-5 relative p-6">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <Gauge size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Lepsza wydajność i szybkość
                <br />
              </h4>
              <p className="text-muted-foreground">
                Strony zbudowane w Next.js ładują się o 30% szybciej niż 80% konkurencji, co oznacza
                lepsze wrażenia użytkowników i wyższe pozycje SEO.
                <br />
                <br />
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg relative">
          <BorderBeam
            size={200}
            anchor={90}
            colorTo="#0000"
            duration={15}
            borderWidth={1.2}
            className="rounded-xl"
          />
          <CardContent className="flex flex-col items-start gap-5 relative p-6">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <BarChart2 size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Zaawansowane SEO</h4>
              <p className="text-muted-foreground">
                Twoja strona będzie zoptymalizowana do osiągania lepszych wyników w Google, co
                zwiększy widoczność Twojego biznesu.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg relative">
          <CardContent className="flex flex-col items-start gap-5 relative p-6">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <MonitorSmartphone size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Responsywność i nowoczesność
                <br />
              </h4>
              <p className="text-muted-foreground">
                Strony idealnie dostosowują się do urządzeń mobilnych i komputerów, co zapewnia
                płynne korzystanie na każdym urządzeniu.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg relative">
          <BorderBeam
            size={200}
            anchor={90}
            colorTo="#0000"
            duration={15}
            borderWidth={1.2}
            className="rounded-xl"
          />
          <CardContent className="flex flex-col items-start gap-5 relative p-6">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <CreditCard size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Oszczędność kosztów i elastyczny model płatności
              </h4>
              <p className="text-muted-foreground">
                Elastyczna płatność umożliwia korzystanie ze strony bez dużych wydatków
                początkowych.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg relative">
          <CardContent className="flex flex-col items-start gap-5 relative p-6">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <Headphones size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Wsparcie techniczne po uruchomieniu strony
              </h4>
              <p className="text-muted-foreground">
                Zapewniamy wsparcie techniczne po uruchomieniu strony, by wszystko działało bez
                zarzutu
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg relative">
          <BorderBeam
            size={200}
            anchor={90}
            colorTo="#0000"
            duration={15}
            borderWidth={1.2}
            className="rounded-xl"
          />
          <CardContent className="flex flex-col items-start gap-5 relative p-6">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <Layers size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Elastyczność i możliwość rozbudowy
              </h4>
              <p className="text-muted-foreground">
                Nasze strony są elastyczne i łatwe do rozbudowy w miarę rozwoju Twojego biznesu.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
