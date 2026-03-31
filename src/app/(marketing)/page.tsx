import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Sparkles, Star, Truck } from "lucide-react";
import { MarketingFooter } from "@/components/navigation/marketing-footer";
import { MarketingNavbar } from "@/components/navigation/marketing-navbar";
import { ReviewCard } from "@/components/review-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { business } from "@/config/business";
import { reviews } from "@/data/site-content";

const trustItems = [
  "Klare Kommunikation und schnelle Rückmeldung",
  "Reinigung als Hauptservice mit hoher Priorität",
  "Transport & Umzug als ergänzende Servicewelt",
  "Flexible Einsatzgebiete auf Anfrage"
] as const;

export const metadata: Metadata = {
  title: "Blitz Service GmbH | Reinigung & Umzug",
  description:
    "Professionelle Reinigungs- und Umzugsservices. Zuverlässig, flexibel und sauber ausgeführt."
};

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <MarketingNavbar />
      <main id="main-content">
        <section className="relative overflow-hidden py-6 md:py-10">
          <Container>
            <div className="homepage-split-worlds">
              <article className="premium-world premium-world-cleaning">
                <div className="premium-world-orbit premium-world-orbit-right" />
                <div className="premium-world-lightning premium-world-lightning-top" />
                <div className="premium-world-lightning premium-world-lightning-bottom" />

                <div className="premium-world-content">
                  <div className="premium-world-copy">
                    <p className="homepage-kicker">{business.name}</p>
                    <p className="premium-world-kicker">
                      <Sparkles className="h-4 w-4" />
                      Reinigung
                    </p>
                    <h1 className="premium-world-title">Reinigung</h1>
                    <p className="premium-world-text">
                      Professionelle Reinigung für Büros, Gebäude und Treppenhäuser. Gründlich,
                      verlässlich und mit einem sauberen Auftritt, der Vertrauen schafft.
                    </p>
                    <div className="premium-world-note">
                      Klare Abläufe, pünktliche Einsätze und hochwertige Reinigung mit sichtbarer
                      Wirkung.
                    </div>
                    <div className="premium-world-actions">
                      <ButtonLink href="/reinigung">
                        Zur Reinigungswelt <ArrowRight className="h-4 w-4" />
                      </ButtonLink>
                      <ButtonLink href="/contact" variant="secondary">
                        Reinigung anfragen
                      </ButtonLink>
                    </div>
                  </div>

                  <div className="premium-world-media-shell">
                    <div className="premium-world-media">
                      <Image
                        src="/images/uploads/reinigung-uploaded.jpeg"
                        alt="Professionelle Gebäudereinigung in einem Büro"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </article>

              <article className="premium-world premium-world-moving">
                <div className="premium-world-orbit premium-world-orbit-left" />
                <div className="premium-world-lightning premium-world-lightning-top" />
                <div className="premium-world-lightning premium-world-lightning-bottom" />

                <div className="premium-world-content">
                  <div className="premium-world-copy">
                    <p className="homepage-kicker">{business.name}</p>
                    <p className="premium-world-kicker">
                      <Truck className="h-4 w-4" />
                      Transport & Umzug
                    </p>
                    <h2 className="premium-world-title">Transport & Umzug</h2>
                    <p className="premium-world-text">
                      Flexible Unterstützung für Umzüge, Möbeltransport und schnelle Einsätze.
                      Strukturiert geplant, sauber durchgeführt und zuverlässig begleitet.
                    </p>
                    <div className="premium-world-note">
                      Für private und gewerbliche Transporte mit klarer Kommunikation und fairer
                      Terminplanung.
                    </div>
                    <div className="premium-world-actions">
                      <ButtonLink href="/umzug">
                        Zur Umzugswelt <ArrowRight className="h-4 w-4" />
                      </ButtonLink>
                      <ButtonLink href="/contact" variant="secondary">
                        Transport anfragen
                      </ButtonLink>
                    </div>
                  </div>

                  <div className="premium-world-media-shell">
                    <div className="premium-world-media">
                      <Image
                        src="/images/uploads/umzug-uploaded.jpeg"
                        alt="Umzug und Möbeltransport mit Transportfahrzeug"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </Container>
        </section>

        <section className="pb-16">
          <Container>
            <div className="homepage-guidance">
              <div>
                <p className="homepage-guidance-kicker">Schneller Überblick</p>
                <h2 className="homepage-guidance-title">
                  Reinigung und Transport klar auf einen Blick.
                </h2>
                <div className="homepage-guidance-grid">
                  {trustItems.map((item) => (
                    <div key={item} className="homepage-guidance-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="homepage-guidance-actions">
                <ButtonLink href="/contact">Angebot anfragen</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Leistungen im Detail
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <div className="surface-card rounded-[34px] p-6 md:p-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--primary-strong)]">
                  Kundenbewertungen
                </p>
                <h2 className="mt-3 text-3xl text-[color:var(--foreground)] md:text-4xl">
                  Was unsere Kunden sagen
                </h2>
                <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-[color:var(--secondary)] px-4 py-2.5 text-sm font-semibold text-[color:var(--foreground)]">
                  <span className="inline-flex items-center gap-1 text-[color:var(--accent)]">
                    <Star className="h-4 w-4 fill-current" />
                    <span>4.9 / 5</span>
                  </span>
                  <span className="text-[color:var(--foreground-muted)]">
                    basierend auf Kundenbewertungen
                  </span>
                </div>
                <p className="mt-5 text-base leading-8 text-[color:var(--foreground-muted)]">
                  Saubere Ausführung, gute Erreichbarkeit und verlässliche Abläufe sind die Punkte,
                  die in den Rückmeldungen unserer Kunden besonders häufig genannt werden.
                </p>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {reviews.map((review) => (
                  <ReviewCard key={`${review.name}-${review.city}`} {...review} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
