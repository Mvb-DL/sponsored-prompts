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
  accentClass: string; // Tailwind gradient for the icon (fallback)
  iconText: string; // Fallback text if no logo is available
  logoSrc?: string; // Path to logo in /public
  logoAlt?: string;
};

export const MODELS: ModelInfo[] = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT-4o mini',
    tagline: 'Fast & affordable',
    description: 'Ideal for quick, cost-efficient prompts.',
    accentClass: 'from-sky-500 to-cyan-400',
    iconText: '4o',
    logoSrc: '/images/gpt-4o.png',
    logoAlt: 'GPT-4o mini logo',
  },
  {
    id: 'gpt-4o',
    label: 'GPT-4o',
    tagline: 'Balanced',
    description: 'A good balance of quality and speed.',
    accentClass: 'from-violet-500 to-fuchsia-500',
    iconText: '4o',
    logoSrc: '/images/gpt-4o.png',
    logoAlt: 'GPT-4o logo',
  },
  {
    id: 'claude-3-opus',
    label: 'Claude 3 Opus',
    tagline: 'Large reasoning',
    description: 'For more complex, longer answers.',
    accentClass: 'from-emerald-500 to-lime-400',
    iconText: 'C3',
    logoSrc: '/images/claude.png',
    logoAlt: 'Claude 3 Opus logo',
  },
  {
    id: 'gemini-1.5-pro',
    label: 'Gemini 1.5 Pro',
    tagline: 'Multimodal',
    description: 'Strong with mixed content and broader context.',
    accentClass: 'from-amber-400 to-orange-500',
    iconText: 'G',
    logoSrc: '/images/gemini.jpg',
    logoAlt: 'Gemini 1.5 Pro logo',
  },
];
