// components/AdModal.tsx
'use client';

import { useEffect, useState } from 'react';
import type { AdMode } from '@/lib/types';
import type { Ad } from '@/lib/ads';

type Props = {
  open: boolean;
  ad: Ad | null;
  mode: AdMode;
  durationMs?: number | null; // gesamte Sponsoring-Zeit in ms
};

export function AdModal({ open, ad, mode, durationMs }: Props) {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  // Body-Scroll sperren, solange das Modal geöffnet ist
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Countdown-Timer steuern
  useEffect(() => {
    if (!open || !durationMs) {
      setSecondsLeft(null);
      return;
    }

    const totalSeconds = Math.max(1, Math.ceil(durationMs / 1000));
    setSecondsLeft(totalSeconds);

    const start = Date.now();
    const interval = window.setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - start) / 1000);
      const remaining = totalSeconds - elapsedSeconds;

      if (remaining <= 0) {
        setSecondsLeft(0);
        window.clearInterval(interval);
      } else {
        setSecondsLeft(remaining);
      }
    }, 250);

    return () => {
      window.clearInterval(interval);
    };
  }, [open, durationMs]);

  const modeLabel =
    mode === 'banner'
      ? 'Banner mode · ~5s sponsor break'
      : 'Video / thinking mode · ~10–20s sponsor break';

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-xl mx-4 rounded-3xl border border-zinc-800 bg-black/95 shadow-xl shadow-black/60 p-5 md:p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Sponsored prompt
            </p>
            <p className="mt-1 text-xs text-zinc-100">
              This sponsor is currently paying for your active model request.
            </p>
            <p className="mt-0.5 text-[11px] text-zinc-400">
              The revenue from this banner or video is used to cover the API and
              server costs of <span className="font-semibold">We pay your prompt</span>{' '}
              – so you don&apos;t have to pay for this prompt yourself.
            </p>
          </div>
          <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-200">
            {modeLabel}
          </span>
        </div>

        {ad ? (
          <>
            <div>
              <h4 className="text-sm font-semibold text-white">
                {ad.title}
              </h4>
              {ad.description && (
                <p className="mt-1 text-xs text-zinc-300">
                  {ad.description}
                </p>
              )}
            </div>

            {ad.kind === 'banner' && (
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black">
                <img
                  src={ad.mediaUrl}
                  alt={ad.title}
                  className="w-full object-cover"
                />
              </div>
            )}

            {ad.kind === 'video' && (
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black">
                <video
                  src={ad.mediaUrl}
                  autoPlay
                  muted
                  loop
                  className="w-full"
                />
              </div>
            )}

            {/* Countdown unter der Werbung */}
            {secondsLeft !== null && (
              <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Sponsored time remaining</span>
                <span className="font-mono text-zinc-100">
                  {secondsLeft}s
                </span>
              </div>
            )}

            <a
              href={ad.targetUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-[11px] text-zinc-200 underline underline-offset-2 hover:text-white"
            >
              Learn more about this sponsor
            </a>

            <p className="text-[10px] text-zinc-500">
              In this prototype, this ad does not track personal data on our
              site. Your prompt is forwarded anonymously to the selected model,
              and the session history only lives in your browser.
            </p>

            <p className="text-[10px] text-zinc-500">
              Your answer will appear automatically once the sponsoring time
              window has finished. You don&apos;t need to click anything – just
              wait for the banner (~5 seconds) or video (~10–20 seconds) to
              complete.
            </p>
          </>
        ) : (
          <div className="mt-2 text-xs text-zinc-400">
            Loading sponsoring information…
          </div>
        )}
      </div>
    </div>
  );
}
