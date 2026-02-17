import type { Metadata } from "next";
import "./globals.css";

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-['Pretendard',sans-serif] text-[#000000] antialiased">
        {children}
      </body>
    </html>
  );
}
