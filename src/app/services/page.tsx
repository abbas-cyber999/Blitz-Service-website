import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { business, whatsappHref } from "@/config/business";
import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "Gebäudereinigung, Büroreinigung, Treppenhausreinigung, Endreinigung und ergänzende Transportservices von Blitz Service GmbH."
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
          <SectionHeading
            eyebrow="Dienstleistungen"
            title="Klar strukturierte Leistungen für gepflegte Immobilien und professionelle Objektbetreuung"
            description="Unser Angebot ist bewusst übersichtlich aufgebaut. Reinigung steht im Mittelpunkt. Ergänzende Transport- und Umzugsleistungen bleiben dort sichtbar, wo Kunden eine koordinierte Lösung aus einer Hand wünschen."
          />

          <div className="mt-10 rounded-[30px] border border-brandBlue/10 bg-white p-8 shadow-[0_18px_42px_rgba(15,45,82,0.08)]">
            <h2 className="font-display text-3xl text-brandBlue">Leistungen mit klarem Schwerpunkt auf Qualität und Verlässlichkeit</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              Wir arbeiten strukturiert, stimmen Leistungen transparent ab und legen Wert auf saubere,
              gut planbare Abläufe. So entsteht eine Servicestruktur, die ruhig, professionell und für
              Unternehmen, Hausverwaltungen und Privatkunden gleichermaßen nachvollziehbar bleibt.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                summary={service.summary}
                featured={service.title === "Gebäudereinigung"}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-5 rounded-[30px] border border-brandBlue/10 bg-brandCream p-6 shadow-[0_18px_38px_rgba(15,45,82,0.08)] lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-base leading-8 text-slate-700">
                Sie möchten eine passende Leistung für Ihr Objekt abstimmen? Wir beraten Sie gern
                persönlich und erstellen ein unverbindliches Angebot.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact">
                Angebot anfragen <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappHref} variant="whatsapp">
                Per WhatsApp anfragen
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
