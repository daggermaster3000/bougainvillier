import './globals.css';

import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next';
import localFont from 'next/font/local'
 
const myFont = localFont({
  src: '../public/GreatVibes-Wmr4.ttf',
})


export const metadata: Metadata = {
  title: 'Bougainvillier',
  description: '',
  openGraph: {
    title: 'Bougainvillier',
    description: '',
    url: '',
    siteName: 'Bougainvillier',
    images: [
      {
        url: '', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
    locale: 'fr_CH',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <Analytics/>
      <body className='' >{children}</body>
    </html>
  );
}
