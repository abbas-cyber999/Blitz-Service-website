import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { business } from "@/config/business";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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

const siteUrl = "https://www.blitz-service-gmbh.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Professionelle Reinigung und Transport`,
    template: `%s | ${business.name}`
  },
  description:
    "Premium Reinigungsdienstleistungen für Gebäude, Büro und Treppenhaus sowie ergänzende Transportservices in NRW.",
  openGraph: {
    title: `${business.name} | Professionelle Reinigung und Transport`,
    description:
      "Gebäudereinigung, Büroreinigung, Treppenhausreinigung und Transportservices mit Fokus auf Qualität und Zuverlässigkeit.",
    locale: "de_DE",
    type: "website",
    url: siteUrl,
    siteName: business.name
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description:
      "Professionelle Reinigungsleistungen und Transportservices für Unternehmen und Privatkunden."
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
    <html lang="de" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-[var(--brand-cream)] text-[var(--brand-dark)]">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-gold focus:px-4 focus:py-2 focus:text-brand-blue"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
