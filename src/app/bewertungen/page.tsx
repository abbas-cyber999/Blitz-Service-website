import { Metadata } from "next";
import { Star } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ReviewCard } from "@/components/review-card";
import { reviews } from "@/data/site-content";
import { business, whatsappHref } from "@/config/business";

export const metadata: Metadata = {
  title: "Bewertungen",
  description: "Kundenstimmen zu den Leistungen von Blitz Service GmbH."
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kundenbewertungen"
        title="Was unsere Kunden sagen"
        description="Echte Rückmeldungen zu Reinigung, Transport und unserer täglichen Zusammenarbeit mit privaten und gewerblichen Kunden."
        actions={
          <>
            <ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>
            <ButtonLink href={whatsappHref} variant="whatsapp">
              Per WhatsApp kontaktieren
            </ButtonLink>
          </>
        }
      />
      <section className="pb-24">
        <Container>
          <div className="mb-10 rounded-[32px] border border-[var(--border)] bg-white/94 p-8 shadow-[0_22px_48px_rgba(15,76,129,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary-strong)]">
              Kundenbewertungen
            </p>
            <h2 className="mt-4 text-3xl text-[color:var(--foreground)] md:text-4xl">
              Vertrauen durch verlässliche Leistung
            </h2>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-[color:var(--secondary)] px-4 py-2.5 text-sm font-semibold text-[color:var(--foreground)]">
              <span className="inline-flex items-center gap-1 text-[color:var(--accent)]">
                <Star className="h-4 w-4 fill-current" />
                <span>4.9 / 5</span>
              </span>
              <span className="text-[color:var(--foreground-muted)]">basierend auf Kundenbewertungen</span>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--foreground-muted)]">
              Die folgenden Rückmeldungen zeigen, worauf Kunden bei Blitz Service besonderen Wert
              legen: Zuverlässigkeit, gute Erreichbarkeit und eine professionelle Ausführung.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={`${review.name}-${review.city}`} {...review} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
