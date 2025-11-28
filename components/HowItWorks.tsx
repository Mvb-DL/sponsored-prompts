// components/HowItWorks.tsx

'use client';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 mb-2">
      {children}
    </p>
  );
}

function ProxySection() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-black/80 px-4 py-4 md:px-5 md:py-5">
      <SectionLabel>A proxy, not another chatbot</SectionLabel>
      <div className="space-y-3 text-sm text-zinc-200">
        <p>
          <strong>We pay your prompt</strong> acts as a proxy between you and
          large language models. You select a model, type your prompt, and we
          forward it to the provider. While the model is processing, a
          full-screen banner or video is shown. That sponsorship is used to
          cover the underlying API and server costs of your request.
        </p>
        <p className="text-zinc-300">
          You do not need an account. In this prototype, we do not store your
          chat history on our servers. The conversation only lives in your
          browser session. Once you close or reload the page, the session and
          its prompts are gone. This is why we refer to it as a{' '}
          <strong>Virtual Privacy Prompt (VPP)</strong> – similar to a VPN, but
          for your prompts.
        </p>
        <p className="text-zinc-300">
          The ads you see are not there by accident: we want to be as
          transparent as possible that{' '}
          <strong>these sponsors are paying for the running costs of the
          models</strong> you are using. The prototype does not build tracking
          profiles, and only technically necessary storage (such as your consent
          choice) is used.
        </p>
      </div>
    </section>
  );
}

function ExistingApproachesSection() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-black/80 px-4 py-4 md:px-5 md:py-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-4">
        <div className="md:w-40 flex items-center md:items-start md:justify-start justify-center">
          <span className="inline-flex items-center rounded-full border border-zinc-700 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-zinc-400">
            Ads, credits &amp; bias
          </span>
        </div>
        <div className="flex-1 space-y-3 text-sm text-zinc-200">
          <SectionLabel>Existing approaches & their trade-offs</SectionLabel>
          <p>
            There are already ideas out there to make model usage &quot;free&quot;:
            for example, systems where you collect credits by watching ads,
            which you then spend on prompts. And some LLM providers are starting
            to experiment with weaving advertising directly into the model
            experience itself.
          </p>
          <p className="text-zinc-300">
            That comes with issues: the answer you get can be biased because it
            was shaped or influenced by commercial interests. You might not
            always be able to tell where the helpful answer stops and the ad
            begins. And with credit systems, you still spend time waiting – but
            that waiting time is disconnected from the actual moment when your
            model is thinking.
          </p>
          <p className="text-zinc-300">
            <strong>We pay your prompt</strong> tries a different angle: the ad
            is clearly separated from the answer and only lives in the waiting
            window while your prompt is being processed. The model&apos;s output
            itself is not modified or branded; only the time you would be
            waiting anyway is monetized.
          </p>
        </div>
      </div>
    </section>
  );
}

function PersonalNoteSection() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 px-4 py-4 md:px-5 md:py-5">
      <SectionLabel>Why I built this (personal note)</SectionLabel>
      <div className="space-y-3 text-sm text-zinc-200">
        <p>
          Right now I&apos;m a student and spend a lot of time working on
          development projects. To hit timelines, I&apos;m using AI more and
          more – which means I also spend a lot of time sitting in front of
          loading spinners, waiting for models to respond.
        </p>
        <p className="text-zinc-300">
          What usually happens? I grab my phone, open some app and start
          watching short videos or reels. Every second or third one is an ad
          anyway. That time is completely detached from the actual prompt I just
          sent – it&apos;s just &quot;dead air&quot; while I wait.
        </p>
        <p className="text-zinc-300">
          So the question became:{' '}
          <strong>
            why not show those ads directly in the prompt flow
          </strong>
          ? If I&apos;m going to watch ads while the model is loading anyway,
          they might as well pay for the API call I just made. In the future,
          you could even imagine actual short-form videos or reels being shown
          directly on this website instead of on a separate app.
        </p>
      </div>
    </section>
  );
}

function CostsBusinessModelSection() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-black/80 px-4 py-4 md:px-5 md:py-5">
      <div className="flex items-center justify-between gap-2 mb-2">
        <SectionLabel>Costs, assumptions & business model</SectionLabel>
        <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-400">
          Illustrative example only
        </span>
      </div>

      <p className="mb-2 text-sm text-zinc-300">
        To be transparent: this is a prototype, not a finished business model.
        But we can still outline rough assumptions for when the concept starts
        to sustain itself. The numbers below are only illustrative, not exact
        pricing.
      </p>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-[11px] text-left border border-zinc-800 rounded-xl overflow-hidden">
          <thead className="bg-zinc-900/80">
            <tr>
              <th className="px-3 py-2 border-b border-zinc-800">Item</th>
              <th className="px-3 py-2 border-b border-zinc-800">Assumption</th>
              <th className="px-3 py-2 border-b border-zinc-800">
                Example value
              </th>
            </tr>
          </thead>
          <tbody className="bg-black">
            <tr className="border-b border-zinc-800">
              <td className="px-3 py-2">
                API cost (simple prompt, cheap model)
              </td>
              <td className="px-3 py-2">
                1 small prompt with a lightweight model
              </td>
              <td className="px-3 py-2">≈ €0.002 per prompt</td>
            </tr>
            <tr className="border-b border-zinc-800">
              <td className="px-3 py-2">
                API cost (complex prompt, premium model)
              </td>
              <td className="px-3 py-2">
                Longer prompt + longer answer, premium model
              </td>
              <td className="px-3 py-2">≈ €0.03 per prompt</td>
            </tr>
            <tr className="border-b border-zinc-800">
              <td className="px-3 py-2">
                Blended API cost per 1,000 prompts
              </td>
              <td className="px-3 py-2">80% simple, 20% complex prompts</td>
              <td className="px-3 py-2">
                ≈ €8.00 per 1,000 prompts (≈ €0.008 per prompt)
              </td>
            </tr>
            <tr className="border-b border-zinc-800">
              <td className="px-3 py-2">
                Required ad revenue (break-even)
              </td>
              <td className="px-3 py-2">
                1 ad impression per prompt on average
              </td>
              <td className="px-3 py-2">
                ≈ €8.00 per 1,000 impressions (≈ €8 CPM)
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2">
                Alternative: 2 ad slots per prompt
              </td>
              <td className="px-3 py-2">
                2 short sponsors per prompt (banner + video)
              </td>
              <td className="px-3 py-2">
                ≈ €4 CPM per slot to reach the same €8 per 1,000 prompts
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-2 text-[11px] text-zinc-500">
        These numbers are simplified and only meant to show the order of
        magnitude: if the average ad revenue per prompt is slightly higher than
        the average API cost per prompt, the system can sustain itself and pay
        for basic usage without charging users directly.
      </p>

      <div className="mt-3 space-y-2 text-sm text-zinc-300">
        <p>
          The idea is especially aimed at people who don&apos;t have large
          budgets but still depend on premium models for their studies or
          learning – for example students, researchers, or people re-skilling
          into new careers. Instead of locking access behind a paywall, sponsors
          help create a more{' '}
          <strong>democratic way to participate in AI</strong>.
        </p>
        <p>
          Institutions like universities, libraries, non-profits or public
          learning spaces could, in theory, sponsor a pool of prompts this way.
          Many users sharing the same API endpoints can be more efficient than
          everyone running their own isolated setup: the infrastructure (GPUs,
          servers, networking) is kept busy and amortised across many requests,
          which usually leads to better utilisation and less wasteful idle time.
          Each individual prompt still consumes energy, but a well-used shared
          backend is often more energy-efficient per prompt than many small,
          underused deployments.
        </p>
      </div>
    </section>
  );
}

function PrototypeScopeSection() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-black/80 px-4 py-4 md:px-5 md:py-5">
      <SectionLabel>What this prototype is (and isn&apos;t)</SectionLabel>
      <div className="space-y-3 text-sm text-zinc-300">
        <p>
          This project is not meant to replace full-blown AI platforms or handle
          massive, long-running workloads. The goal is much more focused:{' '}
          <strong>cover the basic costs</strong> for everyday, simple tasks –
          drafting an email, summarising a document, rewriting a paragraph,
          answering a quick question.
        </p>
        <p>
          Everything here is designed to stay as anonymous as possible in this
          prototype. There is no login, no persistent chat storage on the
          server, and nothing here changes how your own personal chatbot behaves
          on other platforms. This is just a thin, transparent sponsoring layer
          in front of existing models.
        </p>
        <p>
          If this concept works, it could become a small utility: a place where
          you can offload quick prompts without paying directly, knowing that
          the sponsors are covering the bill – and that your own AI setups
          elsewhere remain untouched.
        </p>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <div className="space-y-6">
      <ProxySection />
      <ExistingApproachesSection />
      <PersonalNoteSection />
      <CostsBusinessModelSection />
      <PrototypeScopeSection />
    </div>
  );
}
