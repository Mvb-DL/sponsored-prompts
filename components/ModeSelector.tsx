// components/ModeSelector.tsx
'use client';

import { useState } from 'react';
import type { AdMode } from '@/lib/types';

type Props = {
  mode: AdMode;
};

export function ModeSelector({ mode }: Props) {
  const [hovered, setHovered] = useState(false);

  const options: { value: AdMode; label: string; subtitle: string }[] = [
    {
      value: 'banner',
      label: 'Banner mode',
      subtitle: '~5 seconds sponsor break',
    },
    {
      value: 'video',
      label: 'Video / Thinking mode',
      subtitle: '~10–20 seconds sponsor break',
    },
  ];

  return (
    <div
      className="relative flex flex-col items-start gap-2 max-w-xs"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
        Mode (chosen automatically)
      </span>

      {/* Chips – nur Anzeige, nicht klickbar */}
      <div className="inline-flex rounded-full border border-zinc-700 bg-black p-1 text-xs">
        {options.map((opt) => {
          const active = opt.value === mode;
          return (
            <div
              key={opt.value}
              className={[
                'flex flex-col px-3 py-1.5 rounded-full transition text-left cursor-default select-none',
                active
                  ? 'bg-white text-black'
                  : 'text-zinc-300 opacity-50',
              ].join(' ')}
            >
              <span className="font-semibold leading-none">
                {opt.label}
              </span>
              <span className="text-[10px] opacity-80">
                {opt.subtitle}
              </span>
            </div>
          );
        })}
      </div>

      {/* Hover-Tooltip: absolute, überlagert darunterliegende Inhalte */}
      <div
        className={[
          'pointer-events-none absolute right-0 top-full mt-2 w-72 rounded-xl border border-zinc-700 bg-black/95 px-3 py-3 text-[10px] text-zinc-300 shadow-lg shadow-black/60 transition-all duration-200',
          hovered
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-1',
        ].join(' ')}
      >
        <p className="mb-1">
          <span className="font-semibold">Banner mode</span> is meant for
          shorter, simpler prompts: we show a light banner and wait at least
          about <span className="font-semibold">5 seconds</span> before
          revealing the answer.
        </p>
        <p className="mb-1">
          <span className="font-semibold">Video / Thinking mode</span> assumes
          a longer &quot;thinking&quot; time: we show a sponsor video and keep
          the answer hidden for roughly{' '}
          <span className="font-semibold">10–20 seconds</span> – about as long
          as you would expect to wait for a more complex prompt anyway.
        </p>
        <p className="text-[9px] text-zinc-500">
          The mode shown here is chosen automatically based on how long and
          complex your prompt looks. You don&apos;t have to choose anything –
          we just tell you which sponsoring style is being used for this
          request.
        </p>
      </div>
    </div>
  );
}
