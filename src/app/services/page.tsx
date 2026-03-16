import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
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
        title="Professionelle Services mit klarer Priorität auf Reinigung"
        description="Blitz Service GmbH konzentriert sich im Markenauftritt und in der Leistungserbringung vor allem auf hochwertige Reinigungsarbeiten. Transport- und Umzugsleistungen stehen als ergänzender Service zur Verfügung."
        actions={<ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>}
      />
      <section className="pb-24">
        <Container className="grid gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </Container>
      </section>
    </>
  );
}
