import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Hello, I'm Sebastián and this is my portfolio",
  keywords: ['developer', 'frontend', 'react', 'nextjs', 'portfolio'],
  authors: [{ name: "Sebastián Yepes", url: "https://github.com/sebastianyepes" }],
  metadataBase: new URL('https://sebastianyepes.com'),
  openGraph: {
    title: "My Portfolio",
    description: "Hello, I'm Sebastián and this is my portfolio",
    url: "https://sebastianyepes.com",
    siteName: "My Portfolio",
  },
};

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
