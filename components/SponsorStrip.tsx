// components/SponsorStrip.tsx

const SPONSORS = [
  { name: 'Promptify Labs' },
  { name: 'BannerBoost' },
  { name: 'AdStack AI' },
  { name: 'CloudScale Hosting' },
];

export function SponsorStrip() {
  return (
    <div className="border-t border-slate-800 bg-slate-950/95">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-2">
        <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
          Supported by
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {SPONSORS.map((s) => (
            <div
              key={s.name}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] text-slate-200"
            >
              {s.name}
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-500 mt-1">
          Diese Sponsoren helfen dabei, die laufenden API-Aufrufe und
          Serverkosten von <span className="font-semibold">We pay your prompt</span> zu finanzieren.
          Deine Prompts bleiben dabei anonym – wir verkaufen keine Daten.
        </p>
      </div>
    </div>
  );
}
