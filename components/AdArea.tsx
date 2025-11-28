// components/AdArea.tsx
'use client';

import type { AdMode } from '@/lib/types';
import type { Ad } from '@/lib/ads';

type Props = {
  ad: Ad | null;
  mode: AdMode;
  loading: boolean;
};

export function AdArea({ ad, mode, loading }: Props) {
  const label = ad?.label ?? 'Sponsoring wird geladen…';

  return (
    <aside className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4 md:p-5 shadow-lg flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          Sponsored
        </p>
        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] text-slate-300">
          {mode === 'banner' ? 'Banner-Sponsoring' : 'Video-Sponsoring'}
        </span>
      </div>

      {loading && !ad && (
        <div className="mt-1 text-xs text-slate-400">
          {mode === 'banner'
            ? 'Banner wird eingeblendet, während dein Prompt vorbereitet wird…'
            : 'Video wird abgespielt, während dein Prompt vorbereitet wird…'}
        </div>
      )}

      {ad && (
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
            <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950/60">
              <img
                src={ad.mediaUrl}
                alt={ad.title}
                className="w-full object-cover"
              />
            </div>
          )}

          {ad.kind === 'video' && (
            <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950/60">
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
            className="mt-1 inline-flex text-[11px] text-sky-300 hover:text-sky-200 underline underline-offset-2"
          >
            Mehr über diesen Sponsor
          </a>

          <span className="mt-1 text-[10px] text-slate-500">
            Kennzeichnung: {label}
          </span>
        </>
      )}

      {!ad && !loading && (
        <div className="mt-1 text-xs text-slate-400">
          Hier wird das Sponsoring für deinen nächsten Prompt angezeigt.
        </div>
      )}
    </aside>
  );
}
