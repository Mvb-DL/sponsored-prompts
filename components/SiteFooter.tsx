// components/SiteFooter.tsx

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="text-[11px] leading-relaxed text-slate-400 space-y-1.5 max-w-xl">
          <p className="text-slate-300">
            © {year} Mario Muster – <span className="font-semibold">We pay your prompt</span>.
          </p>
          <p>
            Idee &amp; Konzeption:{' '}
            <span className="font-semibold">
              werbefinanzierte Prompt-Ausführung über einen anonymen Virtual
              Privacy Prompt (VPP)-Proxy
            </span>
            .
          </p>
          <p>
            Diese Website dient auch als{' '}
            <span className="font-semibold">öffentlich nachvollziehbarer Zeitstempel</span>{' '}
            dafür, dass dieses Konzept (Sponsored Prompts / VPP mit
            Banner-/Video-Sponsoring zur Finanzierung von API-Kosten) spätestens
            seit dem <span className="font-semibold">28.11.2025</span> in dieser Form
            durch mich beschrieben und veröffentlicht wurde.
          </p>
          <p className="text-[10px] text-slate-500">
            Hinweis: Die rechtliche Bewertung der Priorität und Schutzfähigkeit
            der Idee obliegt im Streitfall Gerichten oder Behörden. Diese Seite
            liefert lediglich öffentlich zugängliche Indizien (z.B. Domain,
            Deploy-Datum, Commits, Archivierung).
          </p>
        </div>

        <div className="flex flex-row md:flex-col gap-3 text-[11px] text-slate-300">
          <a
            href="/impressum"
            className="underline underline-offset-2 hover:text-sky-300"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="underline underline-offset-2 hover:text-sky-300"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
