// components/AdModal.tsx
'use client';

import type { AdMode } from '@/lib/types';
import type { Ad } from '@/lib/ads';

type Props = {
  open: boolean;
  ad: Ad | null;
  mode: AdMode;
};

export function AdModal({ open, ad, mode }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm">
      <div className="relative w-full max-w-xl mx-4 rounded-3xl border border-slate-700 bg-slate-900/95 shadow-2xl shadow-sky-500/30 p-5 md:p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Sponsored Prompt
            </p>
            <p className="mt-1 text-xs text-slate-200">
              Diese Werbung finanziert gerade deine laufende Modell-Anfrage.
            </p>
            <p className="mt-0.5 text-[11px] text-slate-400">
              Wir verwenden die Einnahmen ausschließlich, um die API- und
              Serverkosten von <span className="font-semibold">We pay your prompt</span> zu decken.
            </p>
          </div>
          <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] text-slate-300">
            {mode === 'banner' ? 'Banner · min. 5s' : 'Video · min. 10s'}
          </span>
        </div>

        {ad ? (
          <>
            <div>
              <h4 className="text-sm font-semibold text-slate-50">
                {ad.title}
              </h4>
              {ad.description && (
                <p className="mt-1 text-xs text-slate-400">
                  {ad.description}
                </p>
              )}
            </div>

            {ad.kind === 'banner' && (
              <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80">
                <img
                  src={ad.mediaUrl}
                  alt={ad.title}
                  className="w-full object-cover"
                />
              </div>
            )}

            {ad.kind === 'video' && (
              <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80">
                <video
                  src={ad.mediaUrl}
                  autoPlay
                  muted
                  loop
                  className="w-full"
                />
              </div>
            )}

            <a
              href={ad.targetUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] text-sky-300 underline underline-offset-2 hover:text-sky-200"
            >
              Mehr über diesen Sponsor
            </a>

            <p className="text-[10px] text-slate-500">
              Hinweis: Diese Anzeige trackt keine persönlichen Daten auf
              unserer Seite. Dein Prompt wird anonym an das ausgewählte Modell
              weitergeleitet, der Verlauf bleibt nur in deinem Browser.
            </p>

            <p className="text-[10px] text-slate-500">
              Deine Antwort erscheint automatisch, sobald das
              Sponsoring-Zeitfenster abgeschlossen ist. Du musst nichts klicken.
            </p>
          </>
        ) : (
          <div className="mt-2 text-xs text-slate-400">
            Sponsoring wird geladen…
          </div>
        )}
      </div>
    </div>
  );
}
