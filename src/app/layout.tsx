import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteMetadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  icons: {
    icon: siteMetadata.siteLogo,
    shortcut: siteMetadata.siteLogo,
    apple: siteMetadata.siteLogo,
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
        <link rel="icon" href={siteMetadata.siteLogo} />
        <meta property="og:image" content={siteMetadata.socialBanner} />
        <meta name="twitter:image" content={siteMetadata.socialBanner} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
