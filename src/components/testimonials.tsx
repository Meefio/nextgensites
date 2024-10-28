import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Opinie</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Co myślą nasi klienci
        </h2>
      </div>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="flex items-center gap-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/testimonial-1.avif"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Paweł</p>
                <p className="mt-1 leading-none text-muted-foreground">@johndoe</p>
              </div>
            </div>
            <p className="text-foreground">
              &quot;NextGen Sites stworzyło dla nas stronę, która nie tylko świetnie wygląda, ale
              też przyciąga więcej klientów dzięki lepszemu pozycjonowaniu w Google. Jesteśmy bardzo
              zadowoleni z efektu i z pewnością polecamy!&quot;
              <br />
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="flex items-center gap-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/testimonial-2.avif"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Max</p>
                <p className="mt-1 leading-none text-muted-foreground">@maxcook</p>
              </div>
            </div>
            <p className="text-foreground">
              &quot;Zdecydowaliśmy się na model miesięcznej opłaty i to była świetna decyzja. Bez
              dużych kosztów początkowych mogliśmy przetestować stronę i przekonać się, że spełnia
              wszystkie nasze oczekiwania. Dziękujemy za profesjonalizm!&quot;
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="flex items-center gap-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/testimonial-3.avif"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Bob</p>
                <p className="mt-1 leading-none text-muted-foreground">@thisisbob</p>
              </div>
            </div>
            <p className="text-foreground">
              „Współpraca z NextGen Sites była strzałem w dziesiątkę! Strona jest szybka,
              responsywna i idealnie dopasowana do naszych potrzeb. Proces był jasny i przejrzysty,
              a efekt końcowy – rewelacyjny!”
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
