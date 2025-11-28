// lib/types.ts

export type ChatRole = 'user' | 'assistant' | 'system';

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type AdMode = 'banner' | 'video';

export type ModelId =
  | 'gpt-4o-mini'
  | 'gpt-4o'
  | 'claude-3-opus'
  | 'gemini-1.5-pro';

export type ModelInfo = {
  id: ModelId;
  label: string;
  tagline: string;
  description: string;
  accentClass: string; // Tailwind-Gradient für Icon
  iconText: string;
};

export const MODELS: ModelInfo[] = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT-4o mini',
    tagline: 'Schnell & günstig',
    description: 'Ideal für schnelle, kostengünstige Prompts.',
    accentClass: 'from-sky-500 to-cyan-400',
    iconText: '4o',
  },
  {
    id: 'gpt-4o',
    label: 'GPT-4o',
    tagline: 'Balanced',
    description: 'Gute Mischung aus Qualität und Tempo.',
    accentClass: 'from-violet-500 to-fuchsia-500',
    iconText: '4o',
  },
  {
    id: 'claude-3-opus',
    label: 'Claude 3 Opus',
    tagline: 'Large Reasoning',
    description: 'Für komplexere, längere Antworten.',
    accentClass: 'from-emerald-500 to-lime-400',
    iconText: 'C3',
  },
  {
    id: 'gemini-1.5-pro',
    label: 'Gemini 1.5 Pro',
    tagline: 'Multimodal',
    description: 'Stark bei gemischten Inhalten & Kontext.',
    accentClass: 'from-amber-400 to-orange-500',
    iconText: 'G',
  },
];
