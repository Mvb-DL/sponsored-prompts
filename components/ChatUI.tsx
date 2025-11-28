// components/ChatUI.tsx
'use client';

import { FormEvent, useState } from 'react';
import type { ChatMessage, AdMode, ModelId } from '@/lib/types';
import { ModelGrid } from './ModelGrid';
import { ModeSelector } from './ModeSelector';
import { AdArea } from './AdArea';
import type { Ad } from '@/lib/ads';
import { pickAdForPrompt } from '@/lib/ads';

export function ChatUI() {
  const [selectedModelId, setSelectedModelId] = useState<ModelId | null>(null);
  const [mode, setMode] = useState<AdMode>('banner');

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');

  const [ad, setAd] = useState<Ad | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  function handleSelectModel(id: ModelId) {
    setSelectedModelId(id);
    // Neue Session: Verlauf & Ads zurücksetzen
    setMessages([]);
    setAd(null);
    setError('');
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!selectedModelId) return;

    const trimmed = input.trim();
    if (!trimmed) return;

    const newUserMessage: ChatMessage = { role: 'user', content: trimmed };
    const newMessages = [...messages, newUserMessage];

    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setAd(null);
    setError('');

    // Mindest-Anzeigedauer: 5s für Banner, 10s für Video
    const minDurationMs = mode === 'banner' ? 5000 : 10000;

    // Fake-"Backend": später hier echten API-Call einbauen
    const simulatedBackend = new Promise<{ answer: string; ad: Ad }>(
      (resolve) => {
        const ad = pickAdForPrompt(trimmed, mode);
        const answer =
          'Dies ist eine simulierte Antwort. In der finalen Version kommt hier die echte Modell-Antwort über die API.';
        setTimeout(() => resolve({ answer, ad }), 800);
      }
    );

    try {
      const [{ answer, ad }] = await Promise.all([
        simulatedBackend,
        new Promise((r) => setTimeout(r, minDurationMs)),
      ]);

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setAd(ad);
    } catch (err) {
      console.error(err);
      setError('Es ist ein Fehler in der Simulation aufgetreten.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-8">
      <ModelGrid
        selectedModelId={selectedModelId}
        onSelectModel={handleSelectModel}
      />

      {selectedModelId ? (
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.1fr)] items-start">
          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-4 md:p-5 shadow-xl shadow-sky-500/10">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Dein Prompt
                </h3>
                <p className="text-[11px] text-slate-400 mt-1">
                  Mehrere Prompts bauen aufeinander auf – dein Verlauf bleibt
                  nur in dieser Session.
                </p>
              </div>
              <ModeSelector mode={mode} setMode={setMode} />
            </div>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Stelle deine Frage, komplett anonym…"
                className="min-h-[120px] w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
              />

              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] text-slate-500">
                  Keine Anmeldung. Kein permanenter Verlauf. Alles bleibt in
                  dieser VPP-Session.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 disabled:opacity-60"
                >
                  {loading ? 'Prompt wird gesponsert…' : 'Prompt senden'}
                </button>
              </div>
            </form>

            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">
                Verlauf dieser VPP-Session
              </h4>
              <div className="max-h-72 overflow-y-auto rounded-xl border border-slate-700/70 bg-slate-950/60 p-3 text-sm text-slate-100 space-y-3">
                {messages.length === 0 && (
                  <p className="text-xs text-slate-500">
                    Noch keine Nachrichten. Starte mit einem Prompt oben.
                  </p>
                )}

                {messages.map((m, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                      {m.role === 'user' ? 'Du' : 'Assistant'}
                    </span>
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  </div>
                ))}

                {loading && (
                  <p className="text-[11px] text-slate-500">
                    Deine Anfrage wird bearbeitet. Die Antwort erscheint, sobald
                    das Sponsoring-Zeitfenster abgelaufen ist.
                  </p>
                )}

                {error && (
                  <p className="text-[11px] text-red-400">Fehler: {error}</p>
                )}
              </div>
            </div>
          </div>

          <AdArea ad={ad} mode={mode} loading={loading} />
        </div>
      ) : (
        <p className="mt-6 text-xs text-slate-300">
          Wähle zuerst ein Modell oben aus, um deinen ersten gesponserten Prompt
          zu starten.
        </p>
      )}
    </section>
  );
}
