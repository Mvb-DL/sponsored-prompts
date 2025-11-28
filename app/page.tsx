// app/page.tsx

import { ChatUI } from '@/components/ChatUI';
import { SponsorStrip } from '@/components/SponsorStrip';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.18),_transparent_55%)]" />
        <section className="relative max-w-5xl mx-auto px-4 pt-10 pb-14">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
              We pay your prompt
            </h1>
            <p className="text-sm md:text-base text-slate-200/90 mb-4">
              Du schreibst deinen Prompt, wir leiten ihn anonym weiter – und
              unsere Sponsoren übernehmen die Kosten. Alles, was du siehst, ist
              ein kurzer Banner oder ein Video, während dein Modell rechnet.
            </p>
          </div>

          <ChatUI />
        </section>
      </div>

      <SponsorStrip />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-lg font-semibold mb-2">
          Wie funktioniert &quot;We pay your prompt&quot;?
        </h2>
        <p className="text-sm text-slate-200 mb-3">
          <strong>We pay your prompt</strong> ist dein Proxy für anonyme
          Modell-Nutzung. Du musst dich nicht registrieren, kein Login, keine
          E-Mail. Du wählst ein Modell, gibst deinen Prompt ein und wir
          leiten ihn im Hintergrund weiter. Während das Modell rechnet,
          finanzieren Sponsoren deine Anfrage durch Banner oder kurze Videos.
        </p>
        <p className="text-sm text-slate-300 mb-3">
          Jede Chat-Sitzung ist ein <strong>Virtual Privacy Prompt (VPP)</strong>:
          Dein Verlauf existiert nur in deinem Browser. Wir speichern keine
          Inhalte deiner Prompts oder Antworten serverseitig. Schließt du die
          Seite oder lädst sie neu, ist die Session weg – und mit ihr dein
          Prompt-Verlauf.
        </p>
        <p className="text-sm text-slate-300">
          Im Prototyp zeigen wir dir vier Beispiel-Modelle und Demo-Sponsoren.
          Später können echte Werbepartner, weitere Modelle und feinere
          Einstellungen hinzukommen. Die eigentliche API-Anfrage zum gewählten
          Modell ist bewusst noch simuliert – sie wird im letzten Schritt durch
          den echten LLM-Call ersetzt.
        </p>
      </section>
    </main>
  );
}
