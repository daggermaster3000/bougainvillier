import './globals.css';
import { PT_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Normal and bold
});

export const metadata = {
  title: 'ACTS Taekwondo',
  description: 'Bienvenue à ACTS Taekwondo Crissier',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <Analytics/>
      <body className={ptSans.className}>{children}</body>
    </html>
  );
}
