// components/CookieBanner.tsx
'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'wepayyourprompt_cookie_consent';

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
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-4 sm:px-4">
      <div className="w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900/95 px-4 py-3 shadow-xl shadow-sky-500/30 backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Cookies & Sponsoring
            </p>
            <p className="text-sm text-slate-50">
              Wir verwenden Cookies und lokale Speicherung, damit{' '}
              <span className="font-semibold">We pay your prompt</span> stabil
              läuft und deine Entscheidung gespeichert wird. Gleichzeitig
              finanzieren unsere Sponsoren die laufenden API- und Serverkosten
              deiner Prompts.
            </p>
            <p className="text-[11px] text-slate-300">
              Im aktuellen Prototyp erfassen wir keine Nutzungsprofile und
              setzen keine Third-Party-Tracking-Cookies. Wir speichern nur:
            </p>
            <ul className="ml-4 list-disc text-[11px] text-slate-300 space-y-0.5">
              <li>
                deine Cookie-Entscheidung (lokal im Browser, über
                <code className="ml-1 rounded bg-slate-800 px-1 py-0.5 text-[10px]">
                  localStorage
                </code>
                )
              </li>
              <li>
                technisch notwendige Daten für den Betrieb der Seite (z.B.
                Server-Logs)
              </li>
            </ul>
            <p className="text-[11px] text-slate-400">
              Die angezeigte Werbung dient ausschließlich dazu, die Kosten der
              zugrunde liegenden KI-APIs und der Server zu finanzieren. Details
              findest du in unserer{' '}
              <a
                href="/datenschutz"
                className="underline underline-offset-2 text-sky-300 hover:text-sky-200"
              >
                Datenschutzerklärung
              </a>{' '}
              und im{' '}
              <a
                href="/impressum"
                className="underline underline-offset-2 text-sky-300 hover:text-sky-200"
              >
                Impressum
              </a>
              .
            </p>
          </div>

          <div className="flex flex-shrink-0 flex-col gap-2 pt-1 sm:pt-0 sm:pl-4">
            <button
              type="button"
              onClick={() => setConsent('necessary')}
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-800"
            >
              Nur technisch notwendige speichern
            </button>
            <button
              type="button"
              onClick={() => setConsent('all')}
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm shadow-sky-500/40 hover:bg-sky-400"
            >
              Alle akzeptieren
            </button>
            <span className="text-[10px] text-slate-500">
              Du kannst deine Entscheidung jederzeit über die
              Browsereinstellungen (Löschen von Website-Daten) zurücksetzen.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
