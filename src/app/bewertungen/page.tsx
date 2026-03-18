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
        description="Die Rezensionen sind als hochwertige Platzhalter angelegt und können später sehr einfach durch echte Kundenbewertungen ersetzt oder ergänzt werden."
        actions={<ButtonLink href="/contact">Eigene Anfrage stellen</ButtonLink>}
      />
      <section className="pb-24">
        <Container>
          <div className="mb-10 rounded-[32px] border border-brandBlue/10 bg-white p-8 shadow-[0_22px_48px_rgba(15,45,82,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">
              Bewertungsbild
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Die Seite erhält durch großzügige Karten, klare Typografie und hochwertige
              Abstände mehr Glaubwürdigkeit. So wirken Bewertungen wie ein echter
              Vertrauensbaustein und nicht wie ein einfacher Textblock.
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
