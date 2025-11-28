// components/CookieBanner.tsx
'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'wepayyourprompt_cookie_consent';
const CONSENT_EVENT = 'wepayyourprompt_consent_set';

type ConsentValue = 'necessary' | 'all';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function setConsent(value: ConsentValue) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value);
      // Signal to other components (like SponsorInvite) that consent was given
      window.dispatchEvent(
        new CustomEvent(CONSENT_EVENT, { detail: { value } })
      );
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-4 sm:px-4">
      <div className="w-full max-w-3xl rounded-2xl border border-zinc-800 bg-black/95 px-4 py-3 shadow-xl shadow-black/60 backdrop-blur">
        <div className="flex flex-col gap-3">
          {/* Textblock */}
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Cookies, storage & sponsoring
            </p>
            <p className="text-sm text-zinc-100">
              We use cookies and local storage so that{' '}
              <span className="font-semibold">We pay your prompt</span> runs
              reliably and your choice is remembered. At the same time, our
              sponsors help cover the ongoing API and server costs of your
              prompts.
            </p>
            <p className="text-[11px] text-zinc-300">
              In this prototype, we do not build user profiles and we do not set
              third-party tracking cookies. We currently store:
            </p>
            <ul className="ml-4 list-disc text-[11px] text-zinc-300 space-y-0.5">
              <li>
                your cookie decision (locally in your browser via{' '}
                <code className="ml-1 rounded bg-zinc-900 px-1 py-0.5 text-[10px]">
                  localStorage
                </code>
                )
              </li>
              <li>
                technically necessary information for operating the site (for
                example, basic server logs)
              </li>
            </ul>
            <p className="text-[11px] text-zinc-400">
              The ads shown here are exclusively used to finance the underlying
              AI APIs and server costs. For more details, see our{' '}
              <a
                href="/datenschutz"
                className="underline underline-offset-2 text-zinc-200 hover:text-white"
              >
                privacy policy
              </a>{' '}
              and{' '}
              <a
                href="/impressum"
                className="underline underline-offset-2 text-zinc-200 hover:text-white"
              >
                legal notice
              </a>
              .
            </p>
          </div>

          {/* Buttons darunter */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => setConsent('necessary')}
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-black px-4 py-2 text-xs font-medium text-zinc-100 hover:bg-zinc-900"
            >
              Only essential storage
            </button>
            <button
              type="button"
              onClick={() => setConsent('all')}
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-sm hover:bg-zinc-200"
            >
              Accept all
            </button>
          </div>

          <span className="text-[10px] text-zinc-500">
            You can reset your choice at any time by clearing website data in
            your browser settings.
          </span>
        </div>
      </div>
    </div>
  );
}
