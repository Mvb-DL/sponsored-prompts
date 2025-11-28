// components/AdModal.tsx
'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import type { AdMode } from '@/lib/types';
import type { Ad } from '@/lib/ads';

type Props = {
  open: boolean;
  ad: Ad | null;
  mode: AdMode;
  onFinished?: () => void; // wird 1s nach Video-Ende aufgerufen
};

export function AdModal({ open, ad, mode, onFinished }: Props) {
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

  // Bei neuem Öffnen / neuem Ad den Timer zurücksetzen
  useEffect(() => {
    if (open) {
      setSecondsLeft(null);
    }
  }, [open, ad?.id]);

  const modeLabel =
    mode === 'banner'
      ? 'Banner mode · short sponsor break'
      : 'Sponsor break';

  if (!open) return null;

  // Fallback-Video für deinen Rehflektiert-Spot
  const rehflektiertVideoSrc = '/videos/rehflektiert.mp4';

  // Wenn Metadaten geladen sind, initiale Sekunden setzen
  const handleVideoLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (Number.isFinite(video.duration) && video.duration > 0) {
      setSecondsLeft(Math.ceil(video.duration));
    }
  };

  // Bei jeder Zeitaktualisierung die verbleibenden Sekunden berechnen
  const handleVideoTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;

    const remaining = Math.max(
      0,
      Math.ceil(video.duration - video.currentTime)
    );
    setSecondsLeft(remaining);
  };

  // Wenn das Video fertig ist: Timer auf 0, nach 1s Modal schließen
  const handleVideoEnded = () => {
    setSecondsLeft(0);
    window.setTimeout(() => {
      if (onFinished) onFinished();
    }, 1000);
  };

  const renderCountdown = () =>
    secondsLeft !== null && (
      <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400">
        <span>Sponsored time remaining</span>
        <span className="font-mono text-zinc-100">
          {secondsLeft}s
        </span>
      </div>
    );

  const effectiveAd = ad ?? {
    id: 'rehflektiert-fallback',
    label: 'Rehflektiert fallback',
    kind: 'video' as const,
    title: 'Rehflektiert – reflective running jacket (example spot)',
    description:
      'Example sponsor video demonstrating how a reflective running jacket can literally stop a deer in its tracks.',
    mediaUrl: rehflektiertVideoSrc,
    targetUrl: '#',
  };

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

        <>
          <div>
            <h4 className="text-sm font-semibold text-white">
              {effectiveAd.title}
            </h4>
            {effectiveAd.description && (
              <p className="mt-1 text-xs text-zinc-300">
                {effectiveAd.description}
              </p>
            )}
          </div>

          {effectiveAd.kind === 'banner' && (
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black">
              <img
                src={effectiveAd.mediaUrl}
                alt={effectiveAd.title}
                className="w-full object-cover"
              />
            </div>
          )}

          {effectiveAd.kind === 'video' && (
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black">
              <video
                src={effectiveAd.mediaUrl || rehflektiertVideoSrc}
                autoPlay
                muted
                // WICHTIG: kein loop → nur einmal abspielen
                onLoadedMetadata={handleVideoLoadedMetadata}
                onTimeUpdate={handleVideoTimeUpdate}
                onEnded={handleVideoEnded}
                className="w-full"
              />
            </div>
          )}

          {renderCountdown()}

          {effectiveAd.targetUrl && effectiveAd.targetUrl !== '#' && (
            <a
              href={effectiveAd.targetUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-[11px] text-zinc-200 underline underline-offset-2 hover:text-white"
            >
              Learn more about this sponsor
            </a>
          )}

          <p className="text-[10px] text-zinc-500">
            In this prototype, this ad does not track personal data on our
            site. Your prompt is forwarded anonymously to the selected model,
            and the session history only lives in your browser.
          </p>

          <p className="text-[10px] text-zinc-500">
            Your answer will appear automatically once the sponsoring time
            window has finished. You don&apos;t need to click anything – just
            watch the short sponsor video until it ends.
          </p>
        </>
      </div>
    </div>
  );
}
