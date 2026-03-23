import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ReviewCard } from "@/components/review-card";
import { reviews } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Bewertungen",
  description: "Kundenstimmen zu den Leistungen von Blitz Service GmbH."
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kundenbewertungen"
        title="Vertrauen entsteht durch verlässliche Leistung"
        description="Kunden schätzen bei Blitz Service vor allem saubere Ergebnisse, klare Absprachen und eine professionelle Betreuung im Alltag."
        actions={<ButtonLink href="/contact">Eigene Anfrage stellen</ButtonLink>}
      />
      <section className="pb-24">
        <Container>
          <div className="mb-10 rounded-[32px] border border-brandBlue/10 bg-white p-8 shadow-[0_22px_48px_rgba(15,45,82,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">
              Kundenstimmen
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Die folgenden Rückmeldungen zeigen, worauf Kunden bei Reinigung und ergänzenden
              Serviceleistungen besonderen Wert legen: Verlässlichkeit, gute Erreichbarkeit und
              eine saubere, professionelle Ausführung.
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
