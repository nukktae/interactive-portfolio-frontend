import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Anu's Portfolio",
  description: "Full-stack developer passionate about creating intuitive and impactful digital solutions",
  icons: {
    icon: [
      { url: '/assets/icons/bubble.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: [{ url: '/assets/icons/bubble.jpg', type: 'image/jpeg' }],
    apple: [{ url: '/assets/icons/bubble.jpg', type: 'image/jpeg' }],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/assets/icons/bubble.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/assets/icons/bubble.jpg" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/icons/bubble.jpg" />
        <link rel="mask-icon" href="/assets/icons/bubble.jpg" color="#498FD8" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
