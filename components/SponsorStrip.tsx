// components/SponsorStrip.tsx
'use client';

import Image from 'next/image';

const SPONSORS = [
  {
    name: 'Promptify Labs',
    logoSrc: '/images/logo1.png',
    logoAlt: 'Promptify Labs logo',
  },
  {
    name: 'BannerBoost',
    logoSrc: '/images/logo2.png',
    logoAlt: 'BannerBoost logo',
  },
  {
    name: 'AdStack AI',
    logoSrc: '/images/logo3.png',
    logoAlt: 'AdStack AI logo',
  },
  {
    name: 'CloudScale Hosting',
    logoSrc: '/images/logo4.png',
    logoAlt: 'CloudScale Hosting logo',
  },
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
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-white px-4 py-1 shadow-sm"
            >
              <div className="relative h-6 w-6 rounded-full overflow-hidden bg-white">
                <Image
                  src={s.logoSrc}
                  alt={s.logoAlt}
                  fill
                  sizes="28px"
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] font-medium text-black whitespace-nowrap">
                {s.name}
              </span>
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
