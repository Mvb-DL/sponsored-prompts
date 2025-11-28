// app/impressum/page.tsx

export const metadata = {
  title: 'Impressum | We pay your prompt',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-4">Impressum</h1>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            Angaben gemäß § 5 TMG / § 14 UGB
          </h2>
          <p>
            <strong>Betreiber der Website &amp; Dienste</strong>
            <br />
            {/* TODO: Eigene Daten eintragen */}
            Mario Muster
            <br />
            Musterstraße 1
            <br />
            1010 Wien
            <br />
            Österreich
          </p>
          <p>
            E-Mail:{' '}
            <a
              href="mailto:kontakt@example.com"
              className="underline underline-offset-2 text-sky-300"
            >
              kontakt@example.com
            </a>
            <br />
            {/* optional */}
            Telefon: +43&nbsp;000&nbsp;000000
          </p>
          <p>
            {/* TODO: falls vorhanden */}
            Firmenbuchnummer: FN&nbsp;123456&nbsp;z
            <br />
            Firmenbuchgericht: Handelsgericht Wien
            <br />
            UID-Nummer: ATU&nbsp;12345678
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind
            wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich.
          </p>
          <p>
            Inhalte, die durch KI-Modelle generiert werden, dienen lediglich als
            Vorschläge und ersetzen keine individuelle Fachberatung (z.B.
            rechtlich, steuerlich, medizinisch). Eine Haftung für Handlungen,
            die auf Grundlage von KI-Antworten vorgenommen werden, ist
            ausgeschlossen.
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">Haftung für Links</h2>
          <p>
            Unser Angebot kann Links zu externen Websites Dritter enthalten, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich.
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte auf dieser Website
            unterliegen dem Urheberrecht. Beiträge Dritter sind als solche
            gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und
            jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
            Erstellers.
          </p>
        </section>

        <section className="space-y-2 text-xs text-slate-400 mt-8">
          <p>
            Hinweis: Dieses Impressum ist ein generisches Muster und ersetzt
            keine individuelle Rechtsberatung. Bitte lass die Angaben von einer
            fachkundigen Person (z.B. Rechtsanwalt) prüfen.
          </p>
        </section>
      </div>
    </main>
  );
}
