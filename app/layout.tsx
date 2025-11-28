// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import { Roboto } from 'next/font/google';
import { CookieBanner } from '@/components/CookieBanner';
import { SiteFooter } from '@/components/SiteFooter';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata = {
  title: 'We pay your prompt',
  description: 'Sponsored prompts mit Virtual Privacy Prompt (VPP)',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body
        className={`${roboto.className} bg-slate-950 text-slate-50 antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
