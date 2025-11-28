// components/SponsorStrip.tsx

const SPONSORS = [
  { name: 'Promptify Labs' },
  { name: 'BannerBoost' },
  { name: 'AdStack AI' },
  { name: 'CloudScale Hosting' },
];

export function SponsorStrip() {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
          Supported by
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {SPONSORS.map((s) => (
            <div
              key={s.name}
              className="rounded-full border border-zinc-700 px-4 py-1 text-[11px] text-zinc-100 bg-black"
            >
              {s.name}
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-zinc-500 max-w-xl mx-auto">
          These sponsors help cover the ongoing API calls and server costs for
          <span className="font-semibold"> We pay your prompt</span>. Your
          prompts remain anonymous in this prototype – we do not sell your data.
        </p>

        {/* Arrow + hint to the explanation section below */}
        <div className="mt-5 flex flex-col items-center gap-1">
         
          <a
            href="#how-it-works"
            className="mt-3 inline-flex flex-col items-center text-white hover:text-zinc-100 transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] mb-0.5">
              Learn more below
            </span>
            <span className="text-xl leading-none">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
