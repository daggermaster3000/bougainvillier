import './globals.css';

import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next';
import localFont from 'next/font/local'
 
const myFont = localFont({
  src: '../public/GreatVibes-Wmr4.ttf',
})


export const metadata: Metadata = {
  title: 'Bougainvillier',
  description: 'Le site officiel d\'ACTS Taekwondo Crissier. Rejoignez-nous et apprenez les techniques du Taekwondo.',
  openGraph: {
    title: 'Bougainvillier',
    description: 'Le site officiel d\'ACTS Taekwondo Crissier.',
    url: 'https://acts-crissier.ch',
    siteName: 'ACTS Taekwondo',
    images: [
      {
        url: '	https://acts-crissier.ch/_next/image?url=%2Fphoto_accueil.jpg&w=750&q=75', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'ACTS Taekwondo Crissier Logo',
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
