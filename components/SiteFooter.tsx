// components/SiteFooter.tsx

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="text-[11px] leading-relaxed text-zinc-400 space-y-1.5 max-w-xl">
          <p className="text-zinc-200">
            © {year} Mario von Bassen – <span className="font-semibold">We pay your prompt</span>.
          </p>
          <p>
            Idea &amp; concept:{' '}
            <span className="font-semibold">
              ad-funded prompt execution via an anonymous Virtual Privacy Prompt (VPP) proxy
            </span>
            , where sponsors pay the underlying LLM API and server costs while prompts stay anonymous.
          </p>
          <p>
            This website also serves as a{' '}
            <span className="font-semibold">publicly verifiable timestamp</span>{' '}
            showing that this specific concept (sponsored prompts / VPP with
            blocking banner/video sponsoring to finance API usage) has been
            described and implemented by me at least as of{' '}
            <span className="font-semibold">28 November 2025</span>.
          </p>
          <p className="text-[10px] text-zinc-500">
            Note: The legal assessment of priority and protectability of this
            idea is ultimately up to courts or authorities. This site provides
            publicly accessible indicators (repository history, deployment,
            domain, archiving) of authorship and timing.
          </p>
        </div>

        <div className="flex flex-row md:flex-col gap-3 text-[11px] text-zinc-200">
          <a
            href="/impressum"
            className="underline underline-offset-2 hover:text-white"
          >
            Legal notice
          </a>
          <a
            href="/datenschutz"
            className="underline underline-offset-2 hover:text-white"
          >
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
