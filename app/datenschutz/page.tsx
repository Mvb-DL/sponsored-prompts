// app/datenschutz/page.tsx

export const metadata = {
  title: 'Datenschutz | We pay your prompt',
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-4">
          Datenschutzerklärung (DSGVO)
        </h1>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">1. Verantwortlicher</h2>
          <p>
            Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p>
            {/* TODO: Eigene Daten eintragen */}
            Mario Muster
            <br />
            Musterstraße 1
            <br />
            1010 Wien, Österreich
            <br />
            E-Mail:{' '}
            <a
              href="mailto:datenschutz@example.com"
              className="underline underline-offset-2 text-sky-300"
            >
              datenschutz@example.com
            </a>
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            2. Zweck von &quot;We pay your prompt&quot;
          </h2>
          <p>
            <strong>We pay your prompt</strong> ist ein Proxy-Dienst für
            KI-Modelle. Nutzer können ohne Registrierung ein Modell auswählen
            und Prompts eingeben. Der Prompt wird von uns an einen
            externen KI-Anbieter (z.&nbsp;B. OpenAI oder vergleichbare Anbieter)
            weitergeleitet. Die angezeigte Werbung dient dazu, die laufenden
            Kosten für API-Aufrufe und Serverbetrieb zu finanzieren.
          </p>
          <p>
            Wir speichern im Prototyp keine Chat-Verläufe serverseitig. Der
            Verlauf verbleibt ausschließlich in der jeweiligen Browsersession
            des Nutzers und wird beim Schließen/Neuladen der Seite verworfen.
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            3. Verarbeitete Daten & Rechtsgrundlagen
          </h2>
          <h3 className="text-sm font-semibold mt-2">3.1 Prompts & KI-Anfragen</h3>
          <p>
            Wenn du einen Prompt eingibst, wird dieser über unsere Server an den
            jeweiligen KI-Anbieter weitergeleitet. Je nach Inhalt können
            personenbezogene Daten enthalten sein, die du freiwillig angibst.
            Bitte gib keine sensiblen Daten (z.B. Gesundheitsdaten,
            besonders geschützte Kategorien nach Art. 9 DSGVO) ein.
          </p>
          <p>
            <strong>Zweck:</strong> Bereitstellung des KI-Dienstes (Beantwortung
            deiner Anfrage).
            <br />
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
            (Vertragserfüllung bzw. vorvertragliche Maßnahmen) bzw. bei rein
            freiwilliger Nutzung unser berechtigtes Interesse nach Art. 6 Abs. 1
            lit. f DSGVO an einem sicheren und wirtschaftlichen Betrieb des
            Angebots.
          </p>

          <h3 className="text-sm font-semibold mt-3">
            3.2 Server-Logfiles (technisch notwendige Daten)
          </h3>
          <p>
            Beim Aufruf unserer Website werden aus technischen Gründen u.a.
            folgende Daten verarbeitet und temporär in Server-Logfiles
            gespeichert:
          </p>
          <ul className="ml-4 list-disc text-[13px] text-slate-200 space-y-0.5">
            <li>IP-Adresse (gekürzt oder pseudonymisiert, soweit möglich)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene URL und Statuscode</li>
            <li>Browsertyp, Betriebssystem (User-Agent)</li>
          </ul>
          <p>
            <strong>Zweck:</strong> Sicherstellung des technischen Betriebs,
            Fehleranalyse, Schutz vor Missbrauch.
            <br />
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse).
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            4. Werbung & Sponsoring
          </h2>
          <p>
            Auf der Seite werden während der Verarbeitung deiner Prompts Banner
            oder Videos angezeigt. Diese Sponsoren finanzieren die laufenden
            Kosten der KI-APIs und des Serverbetriebs. Im aktuellen Prototyp
            werden die Anzeigen statisch oder kontextarm eingebunden; es findet
            keine personenbezogene Profilbildung durch uns statt.
          </p>
          <p>
            Sollten zukünftig externe Werbenetzwerke eingebunden werden, die
            eigene Cookies oder Tracking-Technologien verwenden, werden wir
            dich gesondert informieren und ggf. eine gesonderte Einwilligung
            (Opt-In) einholen.
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            5. Cookies & lokale Speicherung
          </h2>
          <p>
            Wir verwenden im Prototyp keine Tracking- oder Marketing-Cookies.
            Es kommen ausschließlich technisch notwendige Mechanismen zum
            Einsatz:
          </p>
          <ul className="ml-4 list-disc text-[13px] text-slate-200 space-y-0.5">
            <li>
              ein Eintrag im lokalen Speicher deines Browsers (
              <code className="rounded bg-slate-800 px-1 py-0.5 text-[11px]">
                localStorage
              </code>
              ), um deine Cookie-/Sponsoring-Entscheidung zu merken
            </li>
            <li>
              ggf. Session-Daten, die für die Auslieferung der Website
              technisch erforderlich sind
            </li>
          </ul>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an einem nutzerfreundlichen, stabilen
            Betrieb) und § 96 TKG (bzw. nationale Bestimmungen) für technisch
            notwendige Speicherungen.
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            6. Weitergabe an Auftragsverarbeiter / Drittländer
          </h2>
          <p>
            Für die eigentliche KI-Verarbeitung werden die eingegebenen Prompts
            an externe KI-Anbieter (z.&nbsp;B. OpenAI oder vergleichbare Dienste)
            übermittelt. Diese können ihren Sitz außerhalb der EU/EWR haben (z.B.
            in den USA).
          </p>
          <p>
            Wir wählen unsere Dienstleister sorgfältig aus und achten – soweit
            möglich – auf geeignete Garantien für ein angemessenes
            Datenschutzniveau (z.B. Standardvertragsklauseln, zusätzliche
            Schutzmaßnahmen).
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            7. Speicherdauer
          </h2>
          <p>
            Chat-Verläufe werden von uns im Prototyp nicht serverseitig
            gespeichert. Der Verlauf existiert nur in deiner aktuellen
            Browsersession und geht beim Schließen oder Neuladen der Seite
            verloren.
          </p>
          <p>
            Server-Logfiles werden nur so lange gespeichert, wie es zur
            Sicherstellung von Betrieb, Sicherheit und Fehlersuche erforderlich
            ist. Die konkrete Dauer hängt von den technischen Einstellungen und
            gesetzlichen Aufbewahrungspflichten ab.
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            8. Deine Rechte (Betroffenenrechte)
          </h2>
          <p>
            Dir stehen nach der DSGVO insbesondere folgende Rechte zu:
          </p>
          <ul className="ml-4 list-disc text-[13px] text-slate-200 space-y-0.5">
            <li>Recht auf Auskunft über die verarbeiteten personenbezogenen Daten</li>
            <li>Recht auf Berichtigung unrichtiger Daten</li>
            <li>Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;)</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen</li>
            <li>
              Recht auf Beschwerde bei einer Aufsichtsbehörde (z.B.
              Datenschutzbehörde in Österreich)
            </li>
          </ul>
          <p>
            Du kannst dich hierfür jederzeit unter der im Impressum genannten
            Adresse oder per E-Mail an uns wenden.
          </p>
        </section>

        <section className="space-y-2 text-xs text-slate-400 mt-8">
          <p>
            Hinweis: Diese Datenschutzerklärung ist ein Muster, das speziell auf
            den beschriebenen Prototypen (&quot;We pay your prompt&quot;) und
            dessen Funktionsweise zugeschnitten ist. Sie ersetzt keine
            individuelle Rechtsberatung. Bitte lass sie von einer rechtlich
            qualifizierten Person prüfen und an deine tatsächlichen Prozesse und
            verwendeten Dienstleister anpassen.
          </p>
        </section>
      </div>
    </main>
  );
}
