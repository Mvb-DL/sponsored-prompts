// components/SponsorInvite.tsx
'use client';

import { useEffect, useState } from 'react';

const COOKIE_STORAGE_KEY = 'wepayyourprompt_cookie_consent';
const CONSENT_EVENT = 'wepayyourprompt_consent_set';
const SPONSOR_INVITE_KEY = 'wepayyourprompt_sponsor_invite_shown';

export function SponsorInvite() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md-Breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    let timer: number | undefined;
    let consentListener: ((event: Event) => void) | undefined;
    let started = false;

    const startTimer = () => {
      if (started) return;
      started = true;

      // Wenn SponsorInvite schon einmal angezeigt wurde, gar nicht erst starten
      const inviteAlreadyShown = window.localStorage.getItem(SPONSOR_INVITE_KEY);
      if (inviteAlreadyShown) return;

      timer = window.setTimeout(() => {
        setOpen(true);
        // Merken, dass der Invite bereits angezeigt wurde
        window.localStorage.setItem(SPONSOR_INVITE_KEY, 'shown');
      }, 8000); // 8s nach Consent
    };

    // Wenn der Invite schon früher gezeigt wurde, gar nichts mehr tun
    const alreadyShown = window.localStorage.getItem(SPONSOR_INVITE_KEY);
    if (alreadyShown) {
      // Cleanup-Handler trotzdem einrichten
      return () => {
        window.removeEventListener('resize', checkIsMobile);
        if (timer) window.clearTimeout(timer);
        if (consentListener) {
          window.removeEventListener(CONSENT_EVENT, consentListener);
        }
      };
    }

    // 1. Prüfen, ob Cookie-Consent bereits existiert (Cookie-Banner schon weg)
    const storedConsent = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (storedConsent) {
      startTimer();
    } else {
      // 2. Sonst auf Consent-Event vom CookieBanner warten
      consentListener = () => {
        startTimer();
      };
      window.addEventListener(CONSENT_EVENT, consentListener);
    }

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      if (consentListener) {
        window.removeEventListener(CONSENT_EVENT, consentListener);
      }
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, []);

  if (!open) return null;

  const content = (
    <div className="rounded-2xl border border-zinc-800 bg-black/95 px-4 py-3 md:px-4 md:py-3 shadow-xl shadow-black/60 max-w-xs">
      <div className="flex items-start gap-2">
        <div className="mt-0.5 h-6 w-6 rounded-full bg-white text-black flex items-center justify-center text-[11px] font-semibold">
          Ad
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-1">
            Sponsor this experiment
          </p>
          <p className="text-xs text-zinc-100 mb-1.5">
            Are you a company, university or organisation interested in
            sponsoring or extending{' '}
            <span className="font-semibold">We pay your prompt</span>?
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

  // Desktop: kleines Popup unten rechts
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
