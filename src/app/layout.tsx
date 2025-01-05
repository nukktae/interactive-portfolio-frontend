import type { Metadata } from "next";
import "./globals.css";
import AIChatButton from '../components/AIChatButton';
import RootLayout from '@/components/RootLayout';

export const metadata: Metadata = {
  title: "Interactive Portfolio",
  description: "My interactive portfolio with GPT integration",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RootLayout>
          {children}
        </RootLayout>
        <AIChatButton />
      </body>
    </html>
  )
}
