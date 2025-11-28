// app/page.tsx

import { ChatUI } from '@/components/ChatUI';
import { SponsorStrip } from '@/components/SponsorStrip';

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero: Title + Short Explanation */}
      {/* Top/Bottom spacing:
          - base (small): pt-16 pb-10
          - md (medium): md:pt-20 md:pb-12
          - lg (large): lg:pt-24 lg:pb-14
         => diese Werte kannst du nach Geschmack anpassen */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14 min-h-[100vh] md:min-h-0 flex flex-col justify-center md:justify-start">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            We pay your prompt
          </h1>
          <p className="text-sm md:text-base text-zinc-300">
            Choose a model, send your prompt anonymously – and let sponsors pay
            the API and server costs while a short banner or video is shown.
          </p>
        </div>

        {/* Mobile: show "Models" label in the hero, grid comes below when scrolling */}
        <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 text-center md:hidden">
          Models
        </p>
      </section>

      {/* Chat section: models + prompt UI */}
      {/* Abstand NACH OBEN/NACH UNTEN:
          - base (small): mt-0 pb-8
          - md (medium): md:mt-2 md:pb-10
          - lg (large): lg:mt-4 lg:pb-12
         => mt steuert Abstand nach oben zur Hero-Section, pb den unteren Abstand */}
      <section className="max-w-5xl mx-auto px-4 mt-0 pb-8 md:mt-2 md:pb-10 lg:mt-4 lg:pb-12">
        <ChatUI />
      </section>

      {/* Freestanding sponsor strip */}
      {/* Abstand nach oben/unten:
          - base: py-8
          - md: md:py-10
          - lg: lg:py-12 */}
      <section className="py-8 md:py-10 lg:py-12">
        <SponsorStrip />
      </section>

      {/* Explanation box below the fold */}
      {/* Abstand nach oben/unten:
          - base: mt-4 pb-12
          - md: md:mt-6 md:pb-16
          - lg: lg:mt-8 lg:pb-20 */}
            {/* Explanation box below the fold */}
      {/* Abstand nach oben/unten:
          - base: mt-4 pb-12
          - md: md:mt-6 md:pb-16
          - lg: lg:mt-8 lg:pb-20 */}
      <section className="max-w-3xl mx-auto px-4 mt-4 pb-12 md:mt-6 md:pb-16 lg:mt-8 lg:pb-20">
        <div className="border border-zinc-800 rounded-3xl px-5 py-6 md:px-6 md:py-7 bg-black">
          <h2 className="text-lg font-semibold mb-4">
            How &quot;We pay your prompt&quot; works
          </h2>

          <div className="space-y-5 text-sm text-zinc-200">
            {/* 1. Grundkonzept */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 mb-2">
                A proxy, not another chatbot
              </h3>
              <p className="mb-3">
                <strong>We pay your prompt</strong> acts as a proxy between you
                and large language models. You select a model, type your prompt,
                and we forward it to the provider. While the model is
                processing, a full-screen banner or video is shown. That
                sponsorship is used to cover the underlying API and server costs
                of your request.
              </p>
              <p className="text-zinc-300 mb-3">
                You do not need an account. In this prototype, we do not store
                your chat history on our servers. The conversation only lives in
                your browser session. Once you close or reload the page, the
                session and its prompts are gone. This is why we refer to it as
                a <strong>Virtual Privacy Prompt (VPP)</strong> – similar to a
                VPN, but for your prompts.
              </p>
              <p className="text-zinc-300">
                The ads you see are not there by accident: we want to be as
                transparent as possible that{' '}
                <strong>these sponsors are paying for the running costs of the
                models</strong> you are using. The prototype does not build
                tracking profiles, and only technically necessary storage (such
                as your consent choice) is used.
              </p>
            </div>

            {/* 2. Bestehende Ansätze & Probleme */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 mb-2">
                Existing approaches & their trade-offs
              </h3>
              <p className="mb-2">
                There are already ideas out there to make model usage &quot;free&quot;:
                for example, systems where you collect credits by watching ads,
                which you then spend on prompts. And some LLM providers are
                starting to experiment with weaving advertising directly into
                the model experience itself.
              </p>
              <p className="mb-2 text-zinc-300">
                That comes with issues: the answer you get can be biased because
                it was shaped or influenced by commercial interests. You might
                not always be able to tell where the helpful answer stops and
                the ad begins. And with credit systems, you still spend time
                waiting – but that waiting time is disconnected from the actual
                moment when your model is thinking.
              </p>
              <p className="text-zinc-300">
                <strong>We pay your prompt</strong> tries a different angle:
                the ad is clearly separated from the answer and only lives in
                the waiting window while your prompt is being processed. The
                model&apos;s output itself is not modified or branded; only the
                time you would be waiting anyway is monetized.
              </p>
            </div>

            {/* 3. Persönliche Motivation */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 mb-2">
                Why I built this (personal note)
              </h3>
              <p className="mb-2">
                Right now I&apos;m a student and spend a lot of time working on
                development projects. To hit timelines, I&apos;m using AI more
                and more – which means I also spend a lot of time sitting in
                front of loading spinners, waiting for models to respond.
              </p>
              <p className="mb-2 text-zinc-300">
                What usually happens? I grab my phone, open some app and start
                watching short videos or reels. Every second or third one is an
                ad anyway. That time is completely detached from the actual
                prompt I just sent – it&apos;s just &quot;dead air&quot; while I
                wait.
              </p>
              <p className="text-zinc-300">
                So the question became:{' '}
                <strong>
                  why not show those ads directly in the prompt flow
                </strong>
                ? If I&apos;m going to watch ads while the model is loading
                anyway, they might as well pay for the API call I just made. In
                the future, you could even imagine actual short-form videos or
                reels being shown directly on this website instead of on a
                separate app.
              </p>
            </div>

            {/* 4. Was dieses Projekt ist (und nicht ist) */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 mb-2">
                What this prototype is (and isn&apos;t)
              </h3>
              <p className="mb-2 text-zinc-300">
                This project is not meant to replace full-blown AI platforms or
                handle massive, long-running workloads. The goal is much more
                focused: <strong>cover the basic costs</strong> for everyday,
                simple tasks – drafting an email, summarising a document,
                rewriting a paragraph, answering a quick question.
              </p>
              <p className="mb-2 text-zinc-300">
                Everything here is designed to stay as anonymous as possible in
                this prototype. There is no login, no persistent chat storage on
                the server, and nothing here changes how your own personal
                chatbot behaves on other platforms. This is just a thin,
                transparent sponsoring layer in front of existing models.
              </p>
              <p className="text-zinc-300">
                If this concept works, it could become a small utility: a place
                where you can offload quick prompts without paying directly,
                knowing that the sponsors are covering the bill – and that your
                own AI setups elsewhere remain untouched.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
