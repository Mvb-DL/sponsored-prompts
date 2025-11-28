// components/ModeSelector.tsx
'use client';

import type { Dispatch, SetStateAction } from 'react';
import type { AdMode } from '@/lib/types';

type Props = {
  mode: AdMode;
  setMode: Dispatch<SetStateAction<AdMode>>;
};

export function ModeSelector({ mode, setMode }: Props) {
  const options: { value: AdMode; label: string; subtitle: string }[] = [
    {
      value: 'banner',
      label: 'Banner',
      subtitle: 'min. 5 Sekunden',
    },
    {
      value: 'video',
      label: 'Video',
      subtitle: 'min. 10 Sekunden',
    },
  ];

  return (
    <div className="flex flex-col items-start gap-1">
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
        Modus
      </span>
      <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/60 p-1 text-xs">
        {options.map((opt) => {
          const active = opt.value === mode;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setMode(opt.value)}
              className={[
                'flex flex-col px-3 py-1.5 rounded-full transition',
                active
                  ? 'bg-sky-500 text-slate-950'
                  : 'text-slate-300 hover:bg-slate-800',
              ].join(' ')}
            >
              <span className="font-semibold leading-none">
                {opt.label}
              </span>
              <span className="text-[10px] opacity-80">
                {opt.subtitle}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
