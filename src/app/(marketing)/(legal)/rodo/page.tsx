import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'RODO',
  description: 'Informacje o przetwarzaniu danych osobowych zgodnie z RODO',
  openGraph: {
    title: 'RODO - NextGen Sites',
    description: 'Informacje o przetwarzaniu danych osobowych zgodnie z RODO',
  }
};

export default function RODO() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold tracking-tight mb-3">
          Informacja o przetwarzaniu danych osobowych (RODO)
        </h1>
        <p className="text-lg text-muted-foreground">
          Szczegółowe informacje o tym, jak przetwarzamy Twoje dane zgodnie z RODO
        </p>
      </div>

      <p className="text-muted-foreground">
        Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Administrator danych</h2>
        <p>Administratorem Państwa danych osobowych jest NextGen Sites z siedzibą w [Adres].</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Cele przetwarzania</h2>
        <p>Dane osobowe przetwarzamy w następujących celach:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Realizacja umowy (art. 6 ust. 1 lit. b RODO)</li>
          <li>Odpowiadanie na zapytania (art. 6 ust. 1 lit. f RODO)</li>
          <li>Marketing bezpośredni (art. 6 ust. 1 lit. f RODO)</li>
          <li>Analiza ruchu na stronie (art. 6 ust. 1 lit. f RODO)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Odbiorcy danych</h2>
        <p>Państwa dane mogą być przekazywane:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Dostawcom usług IT (Sentry, PostHog)</li>
          <li>Firmom hostingowym</li>
          <li>Podmiotom świadczącym usługi prawne i księgowe</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Okres przechowywania</h2>
        <p>Dane przechowujemy przez okres:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Trwania umowy i do 6 lat po jej zakończeniu</li>
          <li>Do momentu wniesienia sprzeciwu dla celów marketingowych</li>
          <li>3 miesiące dla danych z formularza kontaktowego</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Prawa osób</h2>
        <p>Przysługuje Państwu prawo do:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Dostępu do danych</li>
          <li>Sprostowania danych</li>
          <li>Usunięcia danych</li>
          <li>Ograniczenia przetwarzania</li>
          <li>Przenoszenia danych</li>
          <li>Wniesienia sprzeciwu</li>
          <li>Cofnięcia zgody</li>
          <li>Skargi do Prezesa UODO</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Przekazywanie danych</h2>
        <p>Dane mogą być przekazywane poza EOG w związku z korzystaniem z usług:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Sentry (USA) - monitoring błędów</li>
          <li>PostHog (USA) - analityka</li>
        </ul>
        <p>Przekazywanie odbywa się na podstawie standardowych klauzul umownych.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Kontakt</h2>
        <p>W sprawach dotyczących ochrony danych osobowych można kontaktować się z nami:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Email: kontakt@nextgensites.pl</li>
          <li>Telefon: 694-671-786</li>
        </ul>
      </section>
    </div>
  );
}
