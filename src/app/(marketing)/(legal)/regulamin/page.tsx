import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Regulamin',
  description: 'Regulamin świadczenia usług przez NextGen Sites',
  openGraph: {
    title: 'Regulamin - NextGen Sites',
    description: 'Regulamin świadczenia usług przez NextGen Sites',
  }
};

export default function Terms() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold tracking-tight mb-3">
          Regulamin świadczenia usług
        </h1>
        <p className="text-lg text-muted-foreground">
          Zapoznaj się z zasadami korzystania z naszych usług
        </p>
      </div>

      <p className="text-muted-foreground">
        Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§1. Postanowienia ogólne</h2>
        <p>1. Niniejszy regulamin określa zasady świadczenia usług przez NextGen Sites.</p>
        <p>2. Złożenie zamówienia oznacza akceptację regulaminu.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§2. Definicje</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Usługodawca - NextGen Sites</li>
          <li>Klient - osoba fizyczna lub prawna zamawiająca usługi</li>
          <li>Usługi - tworzenie i utrzymanie stron internetowych</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§3. Zakres usług</h2>
        <p>1. Usługodawca świadczy usługi w zakresie:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Projektowania i wdrażania stron internetowych</li>
          <li>Hostingu i utrzymania stron</li>
          <li>Optymalizacji SEO</li>
          <li>Wsparcia technicznego</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§4. Warunki płatności</h2>
        <p>1. Model subskrypcyjny:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Opłata miesięczna zgodnie z wybranym pakietem</li>
          <li>Płatność z góry za każdy miesiąc</li>
          <li>Możliwość rezygnacji z miesięcznym wypowiedzeniem</li>
        </ul>
        <p className="mt-4">2. Model jednorazowy:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Zaliczka 500 zł przed rozpoczęciem prac</li>
          <li>Pozostała kwota po akceptacji projektu</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§5. Prawa własności</h2>
        <p>1. W modelu subskrypcyjnym:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Prawa do kodu przechodzą na Klienta po 3 latach</li>
          <li>Wcześniejsza rezygnacja oznacza utratę praw do kodu</li>
        </ul>
        <p className="mt-4">2. W modelu jednorazowym:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Pełne prawa własności po opłaceniu całości</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§6. Odpowiedzialność</h2>
        <p>1. Usługodawca zobowiązuje się do:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Świadczenia usług z należytą starannością</li>
          <li>Zachowania poufności danych</li>
          <li>Zapewnienia wsparcia technicznego</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§7. Postanowienia końcowe</h2>
        <p>1. W sprawach nieuregulowanych zastosowanie mają przepisy prawa polskiego.</p>
        <p>2. Wszelkie spory będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.</p>
      </section>
    </div>
  );
}
