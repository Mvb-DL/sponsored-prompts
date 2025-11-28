// app/page.tsx

import { ChatUI } from '@/components/ChatUI';
import { SponsorStrip } from '@/components/SponsorStrip';
import { HowItWorks } from '@/components/HowItWorks';

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero: Title + Short Explanation */}
      {/* Top/Bottom spacing:
          - base (small): pt-16 pb-10
          - md (medium): md:pt-20 md:pb-12
          - lg (large): lg:pt-24 lg:pb-14
      */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14 min-h-[100vh] md:min-h-0 flex flex-col justify-center md:justify-start">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            We pay your prompt
          </h1>
          <p className="text-sm md:text-base text-zinc-300">
  Choose an LLM model, send your prompt anonymously – and let sponsors pay
  the API and server costs by showing a short banner or video while you wait
  for your answer.
</p>
        </div>

        {/* Mobile: "Models" label + arrow that scrolls down to the model selection */}
        <div className="mt-10 flex flex-col items-center gap-2 md:hidden">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 text-center">
            Select a sponsored Model
          </p>
          <a
            href="#models"
            className="inline-flex flex-col items-center text-zinc-500 hover:text-zinc-100 transition-colors"
          >
           
            <span className="text-xl text-white leading-none">↓</span>
          </a>
        </div>
      </section>

      {/* Chat section: models + prompt UI */}
      {/* Abstand NACH OBEN/NACH UNTEN:
          - base (small): mt-0 pb-8
          - md (medium): md:mt-2 md:pb-10
          - lg (large): lg:mt-4 lg:pb-12
      */}
      <section
        id="models"
        className="max-w-5xl mx-auto px-4 mt-0 pb-8 md:mt-2 md:pb-10 lg:mt-4 lg:pb-12"
      >
        <ChatUI />
      </section>

      {/* Freestanding sponsor strip */}
      {/* Abstand nach oben/unten:
          - base: py-8
          - md: md:py-10
          - lg: lg:py-12
      */}
      <section className="py-8 md:py-10 lg:py-12">
        <SponsorStrip />
      </section>

      {/* Explanation box below the fold */}
      {/* Abstand nach oben/unten:
          - base: mt-4 pb-12
          - md: md:mt-6 md:pb-16
          - lg: lg:mt-8 lg:pb-20
      */}
      <section
        id="how-it-works"
        className="max-w-3xl mx-auto px-4 mt-4 pb-12 md:mt-6 md:pb-16 lg:mt-8 lg:pb-20"
      >
        <div className="border border-zinc-800 rounded-3xl px-5 py-6 md:px-6 md:py-7 bg-black">
          <h2 className="text-lg font-semibold mb-4">
            How &quot;We pay your prompt&quot; works
          </h2>
          <HowItWorks />
        </div>
      </section>
    </main>
  );
}
