import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import AIChatButton from '@/components/chat/AIChatButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Anu's Portfolio",
  description: "Full-stack developer passionate about creating intuitive and impactful digital solutions",
  icons: {
    icon: [
      { url: '/assets/icons/circleai.png', type: 'image/jpeg' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: [{ url: '/assets/icons/circleai.png', type: 'image/jpeg' }],
    apple: [{ url: '/assets/icons/circleai.png', type: 'image/jpeg' }],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/assets/icons/circleai.png',
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="icon" type="image/jpeg" href="/assets/icons/circleai.png" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/icons/circleai.png" />
        <link rel="mask-icon" href="/assets/icons/circleai.png" color="#498FD8" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <AIChatButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
