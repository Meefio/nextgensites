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
        <h2 className="text-2xl font-semibold mb-4">3. Pliki Cookies</h2>
        <p>Wykorzystujemy następujące rodzaje plików cookies:</p>
        <p className="font-semibold mt-4">Cookies własne (pierwszej strony):</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Niezbędne - umożliwiające podstawowe funkcjonowanie strony</li>
          <li>Preferencyjne - zapamiętujące wybrane ustawienia</li>
          <li>Statystyczne - do analizy ruchu na stronie</li>
        </ul>
        <p className="font-semibold mt-4">Cookies zewnętrzne (trzeciej strony):</p>
        <ul className="list-disc pl-6 mt-2">
          <li>PostHog - analiza zachowań użytkowników</li>
          <li>Sentry - monitorowanie błędów</li>
          <li>Google Analytics - statystyki odwiedzin</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Cele przetwarzania danych</h2>
        <p>Dane osobowe są przetwarzane w następujących celach:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Realizacja umowy (art. 6 ust. 1 lit. b RODO)</li>
          <li>Odpowiadanie na zapytania (art. 6 ust. 1 lit. f RODO)</li>
          <li>Marketing bezpośredni i profilowanie (art. 6 ust. 1 lit. f RODO)</li>
          <li>Analiza ruchu na stronie (art. 6 ust. 1 lit. f RODO)</li>
          <li>Marketing zautomatyzowany (art. 6 ust. 1 lit. a RODO - po uzyskaniu zgody)</li>
          <li>Dostosowywanie treści do preferencji użytkownika (art. 6 ust. 1 lit. f RODO)</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Szczegółowe informacje o zakresie i podstawach przetwarzania danych znajdują się w sekcji RODO.
        </p>
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
