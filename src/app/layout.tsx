import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { business } from "@/config/business";
import { FloatingActions } from "@/components/floating-actions";
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

const siteUrl = `https://${business.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Professionelle Reinigung in Moers`,
    template: `%s | ${business.name}`
  },
  description:
    "Premium Reinigungsdienstleistungen für Gebäude, Büros und Treppenhäuser sowie ergänzende Transportservices im Raum Moers und Niederrhein.",
  openGraph: {
    title: `${business.name} | Professionelle Reinigung in Moers`,
    description:
      "Gebäudereinigung, Büroreinigung, Treppenhausreinigung und ergänzende Transportservices mit Fokus auf Qualität, Verlässlichkeit und schnelle Ausführung.",
    locale: "de_DE",
    type: "website",
    url: siteUrl,
    siteName: business.name
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description:
      "Professionelle Reinigungsleistungen und ergänzende Transportservices für Unternehmen und Privatkunden."
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
      <body className="font-sans text-brandDark antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brandGold focus:px-4 focus:py-2 focus:text-brandBlue"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="content" className="overflow-x-clip">
          {children}
        </main>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
