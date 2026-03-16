import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ReviewCard } from "@/components/review-card";
import { reviews } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Bewertungen",
  description:
    "Beispielhafte Kundenbewertungen für die Leistungen von Blitz Service GmbH."
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kundenbewertungen"
        title="Vertrauen entsteht durch verlässliche Leistung"
        description="Diese Rezensionen sind realistische Platzhalter und können später direkt durch echte Bewertungen ersetzt oder erweitert werden."
        actions={<ButtonLink href="/contact">Eigene Anfrage stellen</ButtonLink>}
      />
      <section className="pb-24">
        <Container className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={`${review.name}-${review.city}`} {...review} />
          ))}
        </Container>
      </section>
    </>
  );
}
