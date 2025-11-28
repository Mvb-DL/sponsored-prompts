// components/ModelGrid.tsx
'use client';

import Image from 'next/image';
import type { ModelId } from '@/lib/types';
import { MODELS } from '@/lib/types';

type Props = {
  selectedModelId: ModelId | null;
  onSelectModel: (id: ModelId) => void;
};

export function ModelGrid({ selectedModelId, onSelectModel }: Props) {
  return (
    <div className="mt-0 md:mt-8">
      {/* Desktop: heading inside the grid, mobile: handled in the hero */}
      <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-3 text-center hidden md:block">
        Models
      </h3>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {MODELS.map((model) => {
          const selected = model.id === selectedModelId;
          const isClaude = model.id === 'claude-3-opus';

          return (
            <button
              key={model.id}
              type="button"
              onClick={() => onSelectModel(model.id)}
              className={[
                'group relative flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition',
                'bg-black border-zinc-800 hover:border-white hover:bg-zinc-900',
                selected ? 'border-white' : '',
              ].join(' ')}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-black overflow-hidden">
                  {model.logoSrc ? (
                    <Image
                      src={model.logoSrc}
                      alt={model.logoAlt ?? model.label}
                      width={40}
                      height={40}
                      className={[
                        'h-full w-full object-contain',
                        // Claude-Logo etwas kleiner anzeigen
                        isClaude ? 'scale-[0.75]' : '',
                      ].join(' ')}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-zinc-100 to-zinc-400">
                      <span className="text-xs font-semibold text-black">
                        {model.iconText}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {model.label}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {model.tagline}
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400">
                {model.description}
              </p>
              {selected && (
                <span className="absolute right-3 top-3 rounded-full border border-white px-2 py-0.5 text-[10px] font-medium text-white">
                  selected
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
