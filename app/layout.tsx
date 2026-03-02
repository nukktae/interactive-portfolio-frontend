import type { Metadata } from "next";
import "./globals.css";
import { DeferFonts } from "./components/DeferFonts";

export const metadata: Metadata = {
  title: "ANU | Engineering Logic, Designing Strategy",
  description:
    "Software Engineering student & Marketing double major. Bridging high-performance code and compelling brand narratives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        {/* Deferred so they don't block first paint; DeferFonts switches to media="all" after mount */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin="anonymous"
          media="print"
          data-defer-css="true"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          crossOrigin="anonymous"
          media="print"
          data-defer-css="true"
        />
      </head>
      <body className="font-['Pretendard',sans-serif] text-[#000000] antialiased">
        <DeferFonts />
        {children}
      </body>
    </html>
  );
}
