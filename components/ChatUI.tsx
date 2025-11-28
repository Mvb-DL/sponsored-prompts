// components/ChatUI.tsx
'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import type { ChatMessage, AdMode, ModelId } from '@/lib/types';
import { MODELS } from '@/lib/types';
import { ModelGrid } from './ModelGrid';
import { ModeSelector } from './ModeSelector';
import type { Ad } from '@/lib/ads';
import { AdModal } from './AdModal';

export function ChatUI() {
  const [selectedModelId, setSelectedModelId] = useState<ModelId | null>(null);
  const [mode, setMode] = useState<AdMode>('banner'); // wird im Submit auf 'video' gesetzt

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');

  const [ad, setAd] = useState<Ad | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [showAdModal, setShowAdModal] = useState<boolean>(false);

  // Promise-Ref für die noch laufende Modell-Antwort
  const answerPromiseRef = useRef<Promise<string> | null>(null);

  // Copy-Feedback für Antworten
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Desktop: gesamter Bereich (ModelGrid + Chat)
  const chatSectionRef = useRef<HTMLElement | null>(null);
  // Mobile: nur die Chat-Card ("Your chat with …")
  const chatCardRef = useRef<HTMLDivElement | null>(null);
  // Conversation-Box selbst (für zentriertes Scrolling nach erster Antwort)
  const conversationRef = useRef<HTMLDivElement | null>(null);

  function handleSelectModel(id: ModelId) {
    setSelectedModelId(id);
    // Session zurücksetzen, wenn das Modell gewechselt wird
    setMessages([]);
    setAd(null);
    setError('');
  }

  // Name des ausgewählten Modells für die Chat-Bubbles
  const currentModelLabel =
    selectedModelId
      ? MODELS.find((m) => m.id === selectedModelId)?.label ?? 'Model'
      : 'Model';

  // Extra-smooth Scroll-Logik bei Modellwechsel (scroll zur Chat-Karte)
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
        const MOBILE_OFFSET_PX = 96;
        top = targetTopInDocument - MOBILE_OFFSET_PX;
      } else {
        // Desktop: annähernd zentrieren
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
    setError('');

    // --- Fester Sponsor für den Prototyp: Rehflektiert-Video ---
    const sponsorAd: Ad = {
      id: 'rehflektiert-demo',
      label: 'Rehflektiert demo sponsor',
      kind: 'video',
      title: 'Rehflektiert – reflective running jacket (example sponsor)',
      description:
        'Example sponsor video demonstrating how a reflective running jacket can literally stop a deer in its tracks.',
      mediaUrl: '/videos/rehflektiert.mp4',
      targetUrl: '#',
    };

    setAd(sponsorAd);

    // Für den Demo-Flow: immer Video-/Thinking-Mode anzeigen
    setMode('video');

    // Simulierter Backend-Call – später durch echte API ersetzen
    const simulatedBackend = new Promise<string>((resolve) => {
      const answer =
        'This is a simulated answer. In the final version, this will be replaced by the real model response via an API call.';
      setTimeout(() => resolve(answer), 800);
    });

    // Promise merken, aber noch NICHT auflösen – wir warten, bis das Sponsoring fertig ist
    answerPromiseRef.current = simulatedBackend;

    // Pop-up sofort öffnen – Video startet per autoPlay im AdModal
    setShowAdModal(true);
  }

  // Wird von AdModal 1s nach Video-Ende aufgerufen
  async function handleSponsorFinished() {
    const promise = answerPromiseRef.current;
    answerPromiseRef.current = null;

    try {
      const answer =
        promise
          ? await promise
          : 'This is a simulated answer. In the final version, this will be replaced by the real model response via an API call.';

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setError('An error occurred in the simulation.');
    } finally {
      setLoading(false);
      setShowAdModal(false);
    }
  }

  async function handleCopy(content: string, index: number) {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(content);
        setCopiedIndex(index);
        // kleines Timeout, um "Copied" kurz anzuzeigen
        setTimeout(() => {
          setCopiedIndex((prev) => (prev === index ? null : prev));
        }, 1500);
      }
    } catch (err) {
      console.error('Copy failed', err);
    }
  }

  // Flag: gibt es bereits mindestens eine Assistant-Antwort?
  const hasAssistantMessages = messages.some((m) => m.role === 'assistant');

  // Conversation-Box-Größe
  const chatBoxSizeClasses =
    'min-h-[320px] max-h-[520px] md:min-h-[380px] md:max-h-[640px]';

  // Input-Textarea-Höhe: wenn noch keine Antwort, größer
  const inputMinHeightClass = hasAssistantMessages
    ? 'min-h-[60px]'
    : 'min-h-[110px]';

  // Sobald zum ersten Mal eine Assistant-Antwort existiert → Conversation-Box zentrieren
  useEffect(() => {
    if (!hasAssistantMessages) return;
    if (typeof window === 'undefined') return;

    const el = conversationRef.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    const rect = el.getBoundingClientRect();
    const elementHeight = rect.height;
    const viewportHeight = window.innerHeight;
    const targetTopInDocument = rect.top + window.scrollY;

    let top: number;

    if (isMobile) {
      // auf Mobile etwas höher als Mitte, damit Input noch sichtbar bleibt
      const MOBILE_OFFSET = 80;
      top = targetTopInDocument - MOBILE_OFFSET;
    } else {
      // Desktop: möglichst genau zentrieren
      top =
        targetTopInDocument - (viewportHeight - elementHeight) / 2;
    }

    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    });
  }, [hasAssistantMessages]);

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
            className="mt-8 border border-zinc-800 rounded-3xl p-4 md:p-5 bg-black/90 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Your chat with {currentModelLabel}
                </h3>
                <p className="text-[11px] text-zinc-500 mt-1">
                  Prompts and answers behave like a classic chat. This Virtual
                  Privacy Prompt session disappears when you close or reload
                  the page.
                </p>
              </div>
              {/* Zeigt nur den automatisch gesetzten Mode + Tooltip */}
              <ModeSelector mode={mode} />
            </div>

            {/* Output + Input, aber Conversation-Box erst sichtbar, wenn es Output gibt */}
            <div className="mt-4 flex flex-col gap-3">
              {/* Conversation / Output – erscheint erst, wenn es mindestens eine Assistant-Antwort gibt */}
              {hasAssistantMessages && (
                <div
                  ref={conversationRef}
                  className={[
                    'rounded-2xl border border-zinc-700 bg-zinc-950/95',
                    'backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.7)]',
                    'flex flex-col px-3 pt-3 pb-3',
                    chatBoxSizeClasses,
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      Conversation
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      {currentModelLabel}
                    </span>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                    {messages.map((m, idx) => {
                      const isAssistant = m.role === 'assistant';

                      // Alignment wie WhatsApp: User rechts, Modell links
                      const wrapperClass = isAssistant
                        ? 'items-start'
                        : 'items-end';

                      const bubbleClasses = isAssistant
                        ? 'bg-zinc-900 text-zinc-50 border-zinc-700 rounded-2xl rounded-tl-none'
                        : 'bg-white text-black border-zinc-200 rounded-2xl rounded-tr-none';

                      return (
                        <div
                          key={idx}
                          className={`flex flex-col ${wrapperClass} gap-1`}
                        >
                          <span
                            className={[
                              'text-[10px] font-medium uppercase tracking-[0.16em]',
                              isAssistant ? 'text-zinc-300' : 'text-zinc-500',
                            ].join(' ')}
                          >
                            {isAssistant ? currentModelLabel : 'You'}
                          </span>

                          <div
                            className={[
                              'border px-3 py-2 text-[13px] leading-relaxed max-w-[80%]',
                              'shadow-sm',
                              bubbleClasses,
                            ].join(' ')}
                          >
                            {m.content}
                          </div>

                          {isAssistant && (
                            <button
                              type="button"
                              onClick={() => handleCopy(m.content, idx)}
                              className="mt-0.5 inline-flex items-center gap-1 rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-200 hover:border-white hover:text-white transition"
                            >
                              {copiedIndex === idx ? 'Copied' : 'Copy'}
                            </button>
                          )}
                        </div>
                      );
                    })}

                    {loading && (
                      <p className="text-[11px] text-zinc-500">
                        Your request is being processed. The answer will appear
                        here as soon as the sponsoring video has finished.
                      </p>
                    )}

                    {error && (
                      <p className="text-[11px] text-red-400">
                        Error: {error}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Input-Bereich – steht anfangs alleine höher da, Button in der Box mit Abstand */}
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-zinc-700 bg-zinc-950/95 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.7)] px-3 py-3"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-2">
                  Your message
                </div>

                <div className="relative">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message ${currentModelLabel} anonymously…`}
                    className={[
                      'w-full rounded-xl border border-zinc-700 bg-black px-3 py-2 text-sm text-zinc-100',
                      'placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300',
                      // extra space für Button innen
                      'pr-24 pb-10',
                      'resize-none',
                      inputMinHeightClass,
                    ].join(' ')}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-2 bottom-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-black shadow-sm hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sponsoring…' : 'Send'}
                  </button>
                </div>

                <p className="mt-2 text-[11px] text-zinc-500">
                  No login. No permanent history. This chat only lives in your
                  current browser session. While you wait for the answer, a short
                  sponsor banner or video covers the API cost.
                </p>
              </form>
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
        onFinished={handleSponsorFinished}
      />
    </>
  );
}
