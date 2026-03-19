import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: ["500", "600", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-family",
  weight: ["400", "500", "600", "700"]
});

const siteUrl = "https://www.deutschhero.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DeutschHero | German Learning Platform",
    template: `%s | DeutschHero`
  },
  description:
    "DeutschHero is a modern German learning platform built for structured lessons, progress tracking, and scalable multilingual learning.",
  openGraph: {
    title: "DeutschHero | German Learning Platform",
    description:
      "Structured German learning with lessons, grammar, placement, progress tracking, and a scalable platform foundation.",
    locale: "en_US",
    type: "website",
    url: siteUrl,
    siteName: "DeutschHero"
  },
  twitter: {
    card: "summary_large_image",
    title: "DeutschHero",
    description:
      "A production-focused German learning platform foundation built with Next.js, Prisma, PostgreSQL, and Auth.js."
  },
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_32%),radial-gradient(circle_at_20%_80%,_rgba(250,204,21,0.10),_transparent_24%),linear-gradient(180deg,_#020617,_#0f172a)]" />
        <main id="content" className="overflow-x-clip">
          {children}
        </main>
      </body>
    </html>
  );
}
