// lib/ads.ts

import type { AdMode } from './types';

export type Ad = {
  id: string;
  kind: AdMode;       // 'banner' | 'video'
  title: string;
  description?: string;
  mediaUrl: string;   // Bild (Banner) oder Video-URL
  targetUrl: string;
  label: string;      // z.B. "Anzeige" oder "Sponsored"
};

const BANNER_ADS: Ad[] = [
  {
    id: 'crm-banner',
    kind: 'banner',
    title: 'CRM für Freelancer – 30 Tage gratis',
    description: 'Verwalte Kunden, Projekte und Rechnungen an einem Ort.',
    mediaUrl: 'https://via.placeholder.com/728x90?text=CRM+Anzeige',
    targetUrl: 'https://example.com/crm',
    label: 'Anzeige',
  },
  {
    id: 'hosting-banner',
    kind: 'banner',
    title: 'SSD-Hosting für deine AI-Prototypen',
    description: 'Server in Sekunden starten – skalierbar & günstig.',
    mediaUrl: 'https://via.placeholder.com/728x90?text=Hosting+Anzeige',
    targetUrl: 'https://example.com/hosting',
    label: 'Sponsored',
  },
];

const VIDEO_ADS: Ad[] = [
  {
    id: 'crm-video',
    kind: 'video',
    title: 'CRM für Teams – 30 Sekunden Demo',
    description: 'Kurzes Produktvideo, während dein Prompt denkt.',
    mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    targetUrl: 'https://example.com/crm-video',
    label: 'Anzeige',
  },
  {
    id: 'cloud-video',
    kind: 'video',
    title: 'Cloud-Plattform für AI-Workloads',
    description: 'Skaliere von Prototyp zu Produktion.',
    mediaUrl: 'https://www.w3schools.com/html/movie.mp4',
    targetUrl: 'https://example.com/cloud',
    label: 'Sponsored',
  },
];

/**
 * Wählt bei jedem Prompt zufällig eine Anzeige für den gewählten Modus.
 * Dadurch bekommst du „immer wieder wechselnde Werbung“.
 */
export function pickAdForPrompt(_prompt: string, mode: AdMode): Ad {
  const pool = mode === 'banner' ? BANNER_ADS : VIDEO_ADS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}
