// components/ModelGrid.tsx
'use client';

import type { ModelId } from '@/lib/types';
import { MODELS } from '@/lib/types';

type Props = {
  selectedModelId: ModelId | null;
  onSelectModel: (id: ModelId) => void;
};

export function ModelGrid({ selectedModelId, onSelectModel }: Props) {
  return (
    <div className="mt-8">
      <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-3">
        Modelle
      </h3>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {MODELS.map((model) => {
          const selected = model.id === selectedModelId;
          return (
            <button
              key={model.id}
              type="button"
              onClick={() => onSelectModel(model.id)}
              className={[
                'group relative flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition',
                'bg-slate-900/70 border-slate-700/80 hover:border-sky-400/80 hover:bg-slate-900',
                selected ? 'ring-2 ring-sky-400 border-sky-400' : '',
              ].join(' ')}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr ${model.accentClass}`}
                >
                  <span className="text-xs font-semibold text-slate-950">
                    {model.iconText}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-50">
                    {model.label}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {model.tagline}
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                {model.description}
              </p>
              {selected && (
                <span className="absolute right-3 top-3 rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-medium text-sky-300">
                  ausgewählt
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
