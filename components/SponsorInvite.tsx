// components/SponsorInvite.tsx
'use client';

import { useEffect, useState } from 'react';

export function SponsorInvite() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Nach ein paar Sekunden anzeigen
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md-Breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 8000); // nach 8s anzeigen

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.clearTimeout(timer);
    };
  }, []);

  if (!open) return null;

  const content = (
    <div className="rounded-2xl border border-zinc-800 bg-black/95 px-4 py-3 md:px-4 md:py-3 shadow-xl shadow-black/60 max-w-xs">
      <div className="flex items-start gap-2">
       
        <div className="flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-1">
            Sponsor this experiment
          </p>
          <p className="text-xs text-zinc-100 mb-1.5">
            Are you a company, university or organisation interested in
            sponsoring or extending <span className="font-semibold">We pay your prompt</span>?
          </p>
          <p className="text-[11px] text-zinc-400 mb-2">
            Drop me a line at{' '}
            <a
              href="mailto:mariovonbassen@gmail.com"
              className="underline underline-offset-2 text-zinc-100 hover:text-white"
            >
              mariovonbassen@gmail.com
            </a>{' '}
            and we can explore how to grow this Virtual Privacy Prompt idea
            together.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="mailto:mariovonbassen@gmail.com?subject=Sponsor%20We%20pay%20your%20prompt"
              className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-3 py-1 text-[11px] font-medium text-zinc-100 hover:border-white hover:bg-zinc-900"
            >
              Email Mario
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-[10px] text-zinc-500 hover:text-zinc-300"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Desktop: kleines Popup unten rechts (statt links)
  if (!isMobile) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        {content}
      </div>
    );
  }

  // Mobile: nach ein paar Sekunden im Vordergrund (Overlay)
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-6">
      <div className="relative w-full max-w-sm">
        {content}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-zinc-900 border border-zinc-700 text-[11px] text-zinc-300 flex items-center justify-center"
        >
          ×
        </button>
      </div>
    </div>
  );
}
