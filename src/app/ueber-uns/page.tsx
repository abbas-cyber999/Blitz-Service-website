import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderImageCard } from "@/components/placeholder-image-card";
import { SectionHeading } from "@/components/section-heading";
import { aboutValues } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Blitz Service GmbH als zuverlässigen, strukturierten und regionalen Dienstleister für Reinigung und ergänzende Transportleistungen kennen."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Unternehmen"
        title="Verlässlicher Service mit klaren Qualitätsstandards"
        description="Blitz Service GmbH steht für saubere Ausführung, strukturierte Abläufe und einen professionellen Auftritt bei jedem Einsatz. Wir betreuen Kunden im Raum Moers und Umgebung zuverlässig, diskret und mit festem Qualitätsanspruch."
        actions={<ButtonLink href="/contact">Kostenloses Angebot</ButtonLink>}
      />
      <section className="pb-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Unser Anspruch"
              title="Regional präsent, professionell organisiert und verlässlich im Alltag"
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Wir arbeiten für Unternehmen, Hausverwaltungen und Privatkunden, die einen
                Dienstleister mit klarer Terminplanung, sauberer Kommunikation und konstant guter
                Ausführung erwarten. Im Mittelpunkt steht eine Reinigung, die im Alltag spürbar
                entlastet und einen gepflegten Eindruck hinterlässt.
              </p>
              <p>
                Unsere Einsätze werden strukturiert vorbereitet, nachvollziehbar abgestimmt und mit
                festen Qualitätsmaßstäben umgesetzt. So entstehen verlässliche Abläufe statt
                improvisierter Lösungen.
              </p>
              <p>
                Im Raum Moers, Duisburg, Krefeld und Umgebung stehen wir für pünktlichen Service,
                gute Erreichbarkeit und einen professionellen Auftritt, auf den sich Kunden
                langfristig verlassen können.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <PlaceholderImageCard
              badge="Unternehmensbild"
              title="Bereich für spätere echte Fotos von Team, Objekt oder Einsatz"
              description="Die Seite ist so vorbereitet, dass hochwertige Bilder später direkt eingesetzt werden können."
              imageSrc="/images/reliable-service.svg"
              imageAlt="Illustration für zuverlässigen Service und professionelle Betreuung"
              replacementNote="Datei austauschen: public/images/reliable-service.svg"
            />
            <div className="rounded-[32px] border border-brandBlue/10 bg-white p-8 shadow-[0_22px_48px_rgba(15,45,82,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">
                Werte
              </p>
              <ul className="mt-6 space-y-4">
                {aboutValues.map((value) => (
                  <li
                    key={value}
                    className="rounded-2xl bg-brandCream px-5 py-4 text-sm leading-7 text-slate-700"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
