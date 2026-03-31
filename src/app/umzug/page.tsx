import Image from "next/image";
import { Metadata } from "next";
import { Boxes, Check, Truck, Zap } from "lucide-react";
import { MarketingFooter } from "@/components/navigation/marketing-footer";
import { MarketingNavbar } from "@/components/navigation/marketing-navbar";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { WorkGallery } from "@/components/work-gallery";

const movingServices = [
  "Privatumzüge & Firmenumzüge",
  "Möbeltransport & Umzugsservice",
  "Palettentransport & Warentransport",
  "Express- und Direktfahrten",
  "Flexible Termine – auch kurzfristig"
] as const;

const movingGallery = [
  {
    src: "/images/gallery/umzug/umzug-1.jpeg",
    alt: "Umzug und Möbeltransport mit Transportfahrzeug"
  },
  {
    src: "/images/gallery/umzug/umzug-2.jpeg",
    alt: "Transportservice mit Umzugskartons"
  },
  {
    src: "/images/gallery/umzug/umzug-4.jpeg",
    alt: "Transportfahrzeug für Umzug und Transport"
  },
  {
    src: "/images/gallery/umzug/umzug-5.jpeg",
    alt: "Fuhrpark für Umzug und Transportservice"
  },
  {
    src: "/images/gallery/umzug/umzug-6.jpeg",
    alt: "Transportservice mit Firmenfahrzeug"
  },
  {
    src: "/images/gallery/umzug/umzug-7.jpeg",
    alt: "Beladung eines Transporters für einen Umzug"
  },
  {
    src: "/images/gallery/umzug/umzug-8.jpeg",
    alt: "Professioneller Umzug mit großem Transporter"
  },
  {
    src: "/images/gallery/umzug/umzug-9.jpeg",
    alt: "Beladener Transporter für einen gewerblichen Transport"
  }
] as const;

const movingHighlights = [
  {
    title: "Kurzfristig planbar",
    text: "Flexible Termine für private und gewerbliche Einsätze."
  },
  {
    title: "Sauber organisiert",
    text: "Klare Abstimmung zu Umfang, Zeitfenster und Ablauf."
  },
  {
    title: "Direkt erreichbar",
    text: "Schnelle Rückmeldung für Transport, Umzug und Direktfahrten."
  }
] as const;

export const metadata: Metadata = {
  title: "Umzug & Transport Service",
  description:
    "Professioneller Umzug und Transportservice. Sichere und zuverlässige Durchführung."
};

export default function UmzugPage() {
  return (
    <div className="relative overflow-hidden">
      <MarketingNavbar />
      <main id="main-content" className="py-10 md:py-16">
        <Container className="space-y-10">
          <section className="surface-card-strong overflow-hidden rounded-[42px] p-4 md:p-6">
            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
              <div className="relative min-h-[24rem] overflow-hidden rounded-[34px] md:min-h-[34rem]">
                <Image
                  src="/images/gallery/umzug/umzug-8.jpeg"
                  alt="Professioneller Umzug mit Transportfahrzeug"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 54vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,44,71,0.08),rgba(20,44,71,0.3))]" />
              </div>

              <div className="flex flex-col justify-between rounded-[34px] bg-white/88 p-7 shadow-[var(--shadow-soft)] md:p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--foreground-muted)]">
                    Schnell vor Ort • Faire Preise • Zuverlässiger Service
                  </p>
                  <h1 className="mt-4 text-5xl leading-[0.94] text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
                    Umzug &amp; Transport
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--foreground-muted)] md:text-lg">
                    Wir bieten professionelle Umzüge und Transportlösungen für Privat- und
                    Gewerbekunden. Der Leistungsbereich ist klar erkennbar, leicht verständlich und
                    für schnelle Anfragen direkt vorbereitet.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact">Jetzt kostenloses Angebot anfordern!</ButtonLink>
                  <ButtonLink href="/services" variant="secondary">
                    Alle Leistungen
                  </ButtonLink>
                </div>

                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {movingHighlights.map((item) => (
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
            <article className="surface-card rounded-[34px] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-[color:var(--primary)]">
                  <Truck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                    Leistungsübersicht
                  </p>
                  <h2 className="mt-2 text-3xl text-[color:var(--foreground)] md:text-4xl">
                    Unsere Transportleistungen
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-base leading-8 text-[color:var(--foreground-muted)]">
                Der Bereich Umzug und Transport ist sofort erkennbar und klar strukturiert. Kunden
                sehen auf einen Blick, welche Leistungen verfügbar sind und wie schnell eine Anfrage
                gestellt werden kann.
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {movingServices.map((item) => (
                  <div key={item} className="service-item-card">
                    <span className="service-item-icon">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="service-item-text">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 rounded-[26px] border border-[var(--border)] bg-[color:var(--secondary)] px-5 py-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-[color:var(--primary)]">
                    <Zap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                      Highlight
                    </p>
                    <p className="mt-2 text-lg leading-8 text-[color:var(--foreground)]">
                      Schnell vor Ort • Faire Preise • Zuverlässiger Service
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <div className="surface-card overflow-hidden rounded-[34px] p-4">
              <div className="relative min-h-[22rem] overflow-hidden rounded-[28px] md:min-h-[33rem]">
                <Image
                  src="/images/gallery/umzug/umzug-7.jpeg"
                  alt="Transportservice beim Beladen eines Fahrzeugs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(20,44,71,0.18))]" />
              </div>
            </div>
          </section>

          <WorkGallery
            title="Einblicke in unsere Transport- und Umzugsarbeiten"
            description="Mehrere reale Beispiele zeigen Transporte, Umzugseinsätze und unterstützende Arbeiten aus dem Alltag von Blitz Service. Mit den Pfeilen wechseln Sie direkt zwischen den Fotos."
            items={movingGallery}
          />

          <section className="surface-card rounded-[34px] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                  Direkt anfragen
                </p>
                <h2 className="mt-3 text-3xl text-[color:var(--foreground)] md:text-4xl">
                  Jetzt kostenloses Angebot anfordern!
                </h2>
                <p className="mt-4 text-base leading-8 text-[color:var(--foreground-muted)]">
                  Wir prüfen Ihren Einsatz schnell und stimmen Transport, Termin und Umfang
                  persönlich mit Ihnen ab.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact">
                  Anfrage senden <Boxes className="h-4 w-4" />
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
