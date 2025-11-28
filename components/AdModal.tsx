// components/AdModal.tsx
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import type { AdMode } from '@/lib/types';
import type { Ad } from '@/lib/ads';

type Props = {
  open: boolean;
  ad: Ad | null;
  mode: AdMode;
  onFinished: () => void;
};

export function AdModal({ open, ad, mode, onFinished }: Props) {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Body-Scroll sperren, solange das Modal geöffnet ist
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Timer zurücksetzen, wenn Modal geschlossen wird
  useEffect(() => {
    if (!open) {
      setSecondsLeft(null);
    }
  }, [open]);

  const modeLabel =
    mode === 'banner'
      ? 'Banner mode · short sponsor break'
      : 'Video / thinking mode · sponsor break while the model responds';

  const handleLoadedMetadata = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const el = e.currentTarget;
      if (!el.duration || !isFinite(el.duration)) return;
      const total = Math.ceil(el.duration);
      setSecondsLeft(total);
    },
    []
  );

  const handleTimeUpdate = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const el = e.currentTarget;
      if (!el.duration || !isFinite(el.duration)) return;
      const remaining = Math.max(
        0,
        Math.ceil(el.duration - el.currentTime)
      );
      // Nur updaten, wenn sich der Wert wirklich ändert → weniger Re-Renders
      setSecondsLeft((prev) =>
        prev === remaining ? prev : remaining
      );
    },
    []
  );

  const handleEnded = useCallback(() => {
    setSecondsLeft(0);
    // Eine Sekunde nach Ende des Videos: Modal schließen / Antwort anzeigen
    setTimeout(() => {
      onFinished();
    }, 1000);
  }, [onFinished]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      <div className="relative w-full max-w-xl mx-4 rounded-3xl border border-zinc-800 bg-black px-5 py-5 md:px-6 md:py-6 shadow-lg shadow-black/40 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Sponsored prompt
            </p>
            <p className="mt-1 text-xs text-zinc-100">
              This sponsor is currently paying for your active model
              request.
            </p>
            <p className="mt-0.5 text-[11px] text-zinc-400">
              The revenue from this banner or video is used to cover the
              API and server costs of{' '}
              <span className="font-semibold">We pay your prompt</span> –
              so you don&apos;t have to pay for this prompt yourself.
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
                  ref={videoRef}
                  src={ad.mediaUrl}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-auto"
                  onLoadedMetadata={handleLoadedMetadata}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleEnded}
                />
              </div>
            )}

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
              In this prototype, this ad does not track personal data on
              our site. Your prompt is forwarded anonymously to the
              selected model, and the session history only lives in your
              browser.
            </p>

            <p className="text-[10px] text-zinc-500">
              Your answer will appear automatically once the sponsoring
              time window has finished. You don&apos;t need to click
              anything – just wait for the banner or video to complete.
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
