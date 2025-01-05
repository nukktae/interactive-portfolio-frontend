import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Anu's Portfolio",
  description: "Full-stack developer passionate about creating intuitive and impactful digital solutions",
  icons: [
    { rel: 'icon', url: '/assets/icons/bubble.jpg' },
    { rel: 'apple-touch-icon', url: '/assets/icons/bubble.jpg' },
    { rel: 'shortcut icon', url: '/assets/icons/bubble.jpg' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/bubble.jpg" />
        <link rel="shortcut icon" href="/assets/icons/bubble.jpg" />
        <link rel="apple-touch-icon" href="/assets/icons/bubble.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
