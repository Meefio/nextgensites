import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Polityka Prywatności',
  description: 'Polityka Prywatności NextGen Sites - dowiedz się jak chronimy Twoje dane',
  openGraph: {
    title: 'Polityka Prywatności - NextGen Sites',
    description: 'Polityka Prywatności NextGen Sites - dowiedz się jak chronimy Twoje dane',
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold tracking-tight mb-3">
          Polityka Prywatności
        </h1>
        <p className="text-lg text-muted-foreground">
          Dowiedz się, w jaki sposób chronimy i przetwarzamy Twoje dane osobowe
        </p>
      </div>

      <p className="text-muted-foreground">
        Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Informacje ogólne</h2>
        <p>Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej NextGen Sites.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Administrator danych</h2>
        <p>Administratorem danych osobowych jest NextGen Sites z siedzibą w Warszawie.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Gromadzone dane</h2>
        <p>Podczas korzystania z naszej strony możemy gromadzić następujące dane:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Imię i nazwisko</li>
          <li>Adres e-mail</li>
          <li>Numer telefonu</li>
          <li>Dane zawarte w treści wiadomości</li>
          <li>Informacje o urządzeniu i przeglądarce</li>
          <li>Adres IP</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Cele przetwarzania danych</h2>
        <p>Dane osobowe są przetwarzane w następujących celach:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Realizacja usług tworzenia i utrzymania stron internetowych</li>
          <li>Odpowiadanie na zapytania poprzez formularz kontaktowy</li>
          <li>Wysyłanie informacji marketingowych (po uzyskaniu zgody)</li>
          <li>Analiza ruchu na stronie przy użyciu PostHog</li>
          <li>Monitoring błędów i wydajności strony przy użyciu Sentry</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Narzędzia analityczne</h2>
        <p>Korzystamy z następujących narzędzi:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>PostHog - do analizy zachowań użytkowników</li>
          <li>Sentry - do monitorowania błędów i wydajności</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Prawa użytkownika</h2>
        <p>Użytkownik ma prawo do:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Dostępu do swoich danych</li>
          <li>Sprostowania danych</li>
          <li>Usunięcia danych</li>
          <li>Ograniczenia przetwarzania</li>
          <li>Przenoszenia danych</li>
          <li>Wniesienia sprzeciwu</li>
          <li>Cofnięcia zgody na przetwarzanie</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Kontakt</h2>
        <p>W sprawach związanych z ochroną danych osobowych można kontaktować się z nami pod adresem email: kontakt@nextgensites.pl</p>
      </section>
    </div>
  );
}
