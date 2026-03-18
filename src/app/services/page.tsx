import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderImageCard } from "@/components/placeholder-image-card";
import { ServiceCard } from "@/components/service-card";
import { business } from "@/config/business";
import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Gebäudereinigung, Büroreinigung, Treppenhausreinigung, Endreinigung und Transportservices von Blitz Service GmbH."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Reinigung professionell umgesetzt, Transport sinnvoll ergänzt"
        description="Blitz Service GmbH konzentriert sich im Markenauftritt und in der Leistungserbringung vor allem auf hochwertige Reinigungsarbeiten. Transport und Umzug unterstützen wir ergänzend, wenn Kunden eine koordinierte Gesamtlösung wünschen."
        actions={<ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>}
      />
      <section className="pb-24">
        <Container>
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <PlaceholderImageCard
              badge="Gebäudereinigung"
              title="Visueller Platzhalter für hochwertige Reinigungsfotos"
              description="Hier kann später ein professionelles Bild von Gebäude-, Büro- oder Treppenhausreinigung eingesetzt werden."
              imageSrc="/images/building-cleaning.svg"
              imageAlt="Illustration für Gebäudereinigung"
              replacementNote="Datei austauschen: public/images/building-cleaning.svg"
            />
            <div className="rounded-[32px] border border-brandBlue/10 bg-white p-8 shadow-[0_22px_48px_rgba(15,45,82,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">
                Leistungsverständnis
              </p>
              <h2 className="mt-4 font-display text-4xl text-brandBlue">
                Klarer Schwerpunkt auf Reinigung
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Die Leistungsdarstellung ist bewusst so aufgebaut, dass Reinigung als
                Hauptservice zuerst wahrgenommen wird. Das erhöht Klarheit, Vertrauen und
                Relevanz für die meisten Anfragen.
              </p>
            </div>
          </div>
          <div className="mb-10 grid gap-6 lg:grid-cols-2">
            <PlaceholderImageCard
              badge="Büroreinigung"
              title="Moderne Arbeitsumgebungen gepflegt betreut"
              description="Ein zusätzlicher Bildblock für spätere echte Motive aus Büroreinigung, Empfangszonen oder gemeinschaftlich genutzten Arbeitsbereichen."
              imageSrc="/images/office-cleaning.svg"
              imageAlt="Illustration einer professionellen Büroreinigung"
              replacementNote="Datei austauschen: public/images/office-cleaning.svg"
            />
            <PlaceholderImageCard
              badge="Transport / Umzug"
              title="Ergänzende Visualisierung für Transport und Umzug"
              description="Der sekundäre Service bleibt sichtbar, aber klar nachgeordnet zur Reinigung. Die Bildfläche kann später direkt mit einem passenden Foto ersetzt werden."
              imageSrc="/images/transport-service.svg"
              imageAlt="Illustration eines Transport- und Umzugsservices"
              replacementNote="Datei austauschen: public/images/transport-service.svg"
            />
          </div>
          <div className="grid gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
