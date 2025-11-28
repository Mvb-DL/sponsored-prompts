// components/ChatUI.tsx
'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import type { ChatMessage, AdMode, ModelId } from '@/lib/types';
import { ModelGrid } from './ModelGrid';
import { ModeSelector } from './ModeSelector';
import type { Ad } from '@/lib/ads';
import { pickAdForPrompt } from '@/lib/ads';
import { AdModal } from './AdModal';

export function ChatUI() {
  const [selectedModelId, setSelectedModelId] = useState<ModelId | null>(null);
  const [mode, setMode] = useState<AdMode>('banner'); // chosen automatically

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');

  const [ad, setAd] = useState<Ad | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [showAdModal, setShowAdModal] = useState<boolean>(false);
  const [sponsorDurationMs, setSponsorDurationMs] = useState<number | null>(
    null
  );

  // Desktop: gesamter Bereich (ModelGrid + Chat)
  const chatSectionRef = useRef<HTMLElement | null>(null);
  // Mobile: nur die Chat-Card ("Your prompt")
  const chatCardRef = useRef<HTMLDivElement | null>(null);

  function handleSelectModel(id: ModelId) {
    setSelectedModelId(id);
    // Session zurücksetzen, wenn das Modell gewechselt wird
    setMessages([]);
    setAd(null);
    setError('');
  }

  // Extra-smooth Scroll-Logik bei Modellwechsel
  useEffect(() => {
    if (!selectedModelId) return;
    if (typeof window === 'undefined') return;

    const isMobile = window.innerWidth < 768; // Tailwind md-Breakpoint
    const target = isMobile ? chatCardRef.current : chatSectionRef.current;
    if (!target) return;

    const scrollToPosition = () => {
      const rect = target.getBoundingClientRect();
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const targetTopInDocument = rect.top + window.scrollY;

      let top: number;

      if (isMobile) {
        // Auf Mobile: Karte etwas höher im Viewport stehen lassen
        const MOBILE_OFFSET_PX = 96; // nach Bedarf anpassen (z.B. 80, 96, 112 …)
        top = targetTopInDocument - MOBILE_OFFSET_PX;
      } else {
        // Desktop: weiterhin annähernd zentrieren
        top =
          targetTopInDocument - (viewportHeight - elementHeight) / 2;
      }

      window.scrollTo({
        top: Math.max(0, top),
        behavior: 'smooth',
      });
    };

    if ('requestAnimationFrame' in window) {
      requestAnimationFrame(scrollToPosition);
    } else {
      scrollToPosition();
    }
  }, [selectedModelId]);

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

    // --- MODE AUTO-SELECTION ---
    const wordCount = trimmed.split(/\s+/).filter(Boolean).length;
    let decidedMode: AdMode = 'banner';

    if (trimmed.length > 220 || wordCount > 40) {
      decidedMode = 'video';
    }

    setMode(decidedMode);

    // Banner: ~5s, Video/Thinking: ~10–20s
    const duration =
      decidedMode === 'banner'
        ? 5000
        : 10000 + Math.floor(Math.random() * 10000);

    setSponsorDurationMs(duration);
    setShowAdModal(true);

    // Simulierter Backend-Call – später durch echte API ersetzen
    const simulatedBackend = new Promise<{ answer: string; ad: Ad }>(
      (resolve) => {
        const pickedAd = pickAdForPrompt(trimmed, decidedMode);
        setAd(pickedAd);

        const answer =
          'This is a simulated answer. In the final version, this will be replaced by the real model response via an API call.';
        setTimeout(() => resolve({ answer, ad: pickedAd }), 800);
      }
    );

    try {
      const [{ answer, ad }] = await Promise.all([
        simulatedBackend,
        new Promise((r) => setTimeout(r, duration)),
      ]);

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setAd(ad);
    } catch (err) {
      console.error(err);
      setError('An error occurred in the simulation.');
    } finally {
      setLoading(false);
      setShowAdModal(false);
    }
  }

  return (
    <>
      <section ref={chatSectionRef} className="mt-8">
        {/* Model grid */}
        <ModelGrid
          selectedModelId={selectedModelId}
          onSelectModel={handleSelectModel}
        />

        {selectedModelId ? (
          <div
            ref={chatCardRef}
            className="mt-8 border border-zinc-800 rounded-3xl p-4 md:p-5 bg-black"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Your prompt
                </h3>
                <p className="text-[11px] text-zinc-500 mt-1">
                  Multiple prompts build on each other – the history only lives
                  in this session (VPP) and disappears when you close the page.
                </p>
              </div>
              {/* Zeigt nur den automatisch gewählten Mode + Tooltip */}
              <ModeSelector mode={mode} />
            </div>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question, anonymously…"
                className="min-h-[120px] w-full rounded-2xl border border-zinc-800 bg-black px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300"
              />

              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p className="text-[11px] text-zinc-500">
                  No login. No permanent history. Everything stays inside this
                  Virtual Privacy Prompt session.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-sm hover:bg-zinc-200 disabled:opacity-60"
                >
                  {loading ? 'Prompt is being sponsored…' : 'Send prompt'}
                </button>
              </div>
            </form>

            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 mb-2">
                Session history
              </h4>
              <div className="max-h-72 overflow-y-auto rounded-2xl border border-zinc-800 bg-black px-3 py-3 text-sm text-zinc-100 space-y-3">
                {messages.length === 0 && (
                  <p className="text-xs text-zinc-500">
                    No messages yet. Start with a prompt above.
                  </p>
                )}

                {messages.map((m, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                      {m.role === 'user' ? 'You' : 'Assistant'}
                    </span>
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  </div>
                ))}

                {loading && (
                  <p className="text-[11px] text-zinc-500">
                    Your request is being processed. The answer will appear once
                    the sponsoring time window is over.
                  </p>
                )}

                {error && (
                  <p className="text-[11px] text-red-400">Error: {error}</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-xs text-zinc-400 text-center">
              Select a model above to start your first sponsored prompt.
            </p>
            {/* How it works + Pfeil NUR auf Mobile */}
            <a
              href="#how-it-works"
              className="inline-flex flex-col items-center text-zinc-500 hover:text-zinc-100 transition-colors md:hidden"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] mb-0.5">
                How it works
              </span>
              <span className="text-xl leading-none">↓</span>
            </a>
          </div>
        )}
      </section>

      <AdModal
        open={showAdModal}
        ad={ad}
        mode={mode}
        durationMs={sponsorDurationMs ?? undefined}
      />
    </>
  );
}
