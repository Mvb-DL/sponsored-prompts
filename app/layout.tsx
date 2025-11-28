// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import { Roboto } from 'next/font/google';
import { CookieBanner } from '@/components/CookieBanner';
import { SiteFooter } from '@/components/SiteFooter';
import { BackgroundLines } from '@/components/BackgroundLines';
import { SponsorInvite } from '@/components/SponsorInvite';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata = {
  title: 'We pay your prompt',
  description: 'Sponsored prompts with a Virtual Privacy Prompt (VPP) proxy',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-black text-white antialiased`}
      >
        {/* Fancy animated lines in the background */}
        <BackgroundLines />

        {/* Content on top of the background */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>

         <SponsorInvite />

        {/* Cookie banner stays on top of everything */}
        <CookieBanner />
      </body>
    </html>
  );
}
