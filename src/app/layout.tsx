import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/floating-actions";
import { cn } from "@/lib/utils";

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blitzservic.de"),
  title: {
    default: "Blitz Service GmbH | Reinigung & Umzug",
    template: "%s | Blitz Service GmbH"
  },
  description:
    "Professionelle Reinigungs- und Umzugsservices. Zuverlässig, flexibel und sauber ausgeführt.",
  openGraph: {
    title: "Blitz Service GmbH | Reinigung & Umzug",
    description:
      "Professionelle Reinigungs- und Umzugsservices. Zuverlässig, flexibel und sauber ausgeführt.",
    url: "https://blitzservic.de",
    siteName: "Blitz Service GmbH",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blitz Service GmbH | Reinigung & Umzug",
    description:
      "Professionelle Reinigungs- und Umzugsservices. Zuverlässig, flexibel und sauber ausgeführt."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr" suppressHydrationWarning className={cn(displayFont.variable, sansFont.variable)}>
      <body>
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
