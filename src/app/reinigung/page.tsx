import Image from "next/image";
import { Metadata } from "next";
import { Check, ShieldCheck, Sparkles, Trash2, Wrench } from "lucide-react";
import { MarketingFooter } from "@/components/navigation/marketing-footer";
import { MarketingNavbar } from "@/components/navigation/marketing-navbar";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { WorkGallery } from "@/components/work-gallery";

const cleaningServices = [
  "Unterhaltsreinigung (Büro, Praxis, Gewerbe)",
  "Treppenhausreinigung",
  "Glas- und Fensterreinigung",
  "Grundreinigung",
  "Baureinigung",
  "Umzugsreinigung (Endreinigung mit Abnahmegarantie)",
  "Spezialreinigung",
  "Reinigung von Messie-Wohnungen",
  "Sonderreinigungen"
] as const;

const clearingServices = [
  "Entrümpelung von Wohnungen, Kellern und Häusern",
  "Haushaltsauflösungen"
] as const;

const additionalServices = [
  "Hausmeisterservice (kleine Reparaturen & Instandhaltung)",
  "Gartenpflege"
] as const;

const cleaningGallery = [
  {
    src: "/images/gallery/reinigung/reinigung-2.jpeg",
    alt: "Professionelle Bodenreinigung mit Reinigungsmaschine"
  },
  {
    src: "/images/gallery/reinigung/reinigung-3.jpeg",
    alt: "Reinigung eines Büros"
  },
  {
    src: "/images/gallery/reinigung/reinigung-4.jpeg",
    alt: "Professionelle Gebäudereinigung durch ein Reinigungsteam"
  },
  {
    src: "/images/gallery/reinigung/reinigung-6.jpeg",
    alt: "Maschinelle Reinigung eines Innenbereichs"
  }
] as const;

const cleaningHighlights = [
  {
    title: "Planbare Einsätze",
    text: "Regelmäßig oder projektbezogen mit klar abgestimmten Zeiten."
  },
  {
    title: "Saubere Übergaben",
    text: "Gründliche Ausführung für Büros, Praxen und Wohnobjekte."
  },
  {
    title: "Direkte Abstimmung",
    text: "Kurze Wege, schnelle Rückmeldung und persönliche Erreichbarkeit."
  }
] as const;

export const metadata: Metadata = {
  title: "Professionelle Reinigung",
  description:
    "Professionelle Reinigung für Wohnungen, Büros und Gebäude. Sauber, zuverlässig und effizient."
};

export default function ReinigungPage() {
  return (
    <div className="relative overflow-hidden">
      <MarketingNavbar />
      <main id="main-content" className="py-10 md:py-16">
        <Container className="space-y-10">
          <section className="surface-card-strong overflow-hidden rounded-[42px] p-4 md:p-6">
            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
              <div className="relative min-h-[24rem] overflow-hidden rounded-[34px] md:min-h-[34rem]">
                <Image
                  src="/images/gallery/reinigung/reinigung-4.jpeg"
                  alt="Professionelle Gebäudereinigung in einer modernen Büroumgebung"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 54vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,44,71,0.1),rgba(20,44,71,0.36))]" />
              </div>

              <div className="flex flex-col justify-between rounded-[34px] bg-white/88 p-7 shadow-[var(--shadow-soft)] md:p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--foreground-muted)]">
                    Zuverlässig • Schnell • Professionell
                  </p>
                  <h1 className="mt-4 text-6xl leading-[0.9] text-[color:var(--foreground)] sm:text-7xl xl:text-8xl">
                    Reinigung
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--foreground-muted)] md:text-lg">
                    Professionelle Reinigungslösungen für Unternehmen, Praxen, Wohnobjekte und
                    Spezialfälle. Die Leistungen sind klar strukturiert, leicht erfassbar und auf
                    schnelle Anfragewege ausgerichtet.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact">Kontaktieren Sie uns für ein kostenloses Angebot</ButtonLink>
                  <ButtonLink href="/services" variant="secondary">
                    Alle Leistungen
                  </ButtonLink>
                </div>

                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {cleaningHighlights.map((item) => (
                    <div key={item.title} className="mini-highlight-card">
                      <p className="mini-highlight-title">{item.title}</p>
                      <p className="mini-highlight-text">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="surface-card rounded-[34px] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-[color:var(--primary)]">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                    Leistungsübersicht
                  </p>
                  <h2 className="mt-2 text-3xl text-[color:var(--foreground)] md:text-4xl">Unsere Leistungen</h2>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--foreground-muted)]">
                Alle Leistungen sind klar gegliedert und auf eine schnelle Einschätzung für
                Unternehmen, Praxen und private Objekte ausgerichtet.
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {cleaningServices.map((item) => (
                  <div key={item} className="service-item-card">
                    <span className="service-item-icon">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="service-item-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card overflow-hidden rounded-[34px] p-4">
              <div className="relative min-h-[22rem] overflow-hidden rounded-[28px] md:min-h-[33rem]">
                <Image
                  src="/images/gallery/reinigung/reinigung-6.jpeg"
                  alt="Professionelle Reinigung mit Bodenreinigungsmaschine"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(20,44,71,0.22))]" />
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <article className="surface-card rounded-[34px] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-[color:var(--primary)]">
                  <Trash2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                    Ergänzend
                  </p>
                  <h2 className="mt-2 text-3xl text-[color:var(--foreground)] md:text-4xl">Entrümpelung</h2>
                </div>
              </div>
              <p className="mt-4 text-base leading-8 text-[color:var(--foreground-muted)]">
                Ergänzende Leistungen für Wohnungsauflösungen, Keller und Haushalte mit klarer
                Organisation und sauberer Übergabe.
              </p>
              <div className="mt-7 grid gap-4">
                {clearingServices.map((item) => (
                  <div key={item} className="service-item-card">
                    <span className="service-item-icon">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="service-item-text">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card rounded-[34px] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-[color:var(--primary)]">
                  <Wrench className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                    Erweiterbar
                  </p>
                  <h2 className="mt-2 text-3xl text-[color:var(--foreground)] md:text-4xl">Zusatzservice</h2>
                </div>
              </div>
              <p className="mt-4 text-base leading-8 text-[color:var(--foreground-muted)]">
                Praktische Ergänzungen für Objektpflege, kleinere Instandhaltung und gepflegte
                Außenbereiche.
              </p>
              <div className="mt-7 grid gap-4">
                {additionalServices.map((item) => (
                  <div key={item} className="service-item-card">
                    <span className="service-item-icon">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="service-item-text">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <WorkGallery
            title="Einblicke in unsere Reinigungsarbeiten"
            description="Mehrere reale Arbeitsbeispiele zeigen unterschiedliche Einsätze aus Reinigung, Baureinigung, Pflege und Büroservice. Mit den Pfeilen wechseln Sie direkt zwischen den Fotos."
            items={cleaningGallery}
          />

          <section className="surface-card rounded-[34px] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                  Direkt anfragen
                </p>
                <h2 className="mt-3 text-3xl text-[color:var(--foreground)] md:text-4xl">
                  Kontaktieren Sie uns für ein kostenloses Angebot
                </h2>
                <p className="mt-4 text-base leading-8 text-[color:var(--foreground-muted)]">
                  Wir melden uns zeitnah zurück und besprechen den passenden Reinigungsumfang für
                  Ihr Objekt oder Projekt.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact">
                  Jetzt anfragen <ShieldCheck className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Leistungen ansehen
                </ButtonLink>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <MarketingFooter />
    </div>
  );
}
