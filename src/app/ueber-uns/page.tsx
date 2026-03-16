import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutValues } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Blitz Service GmbH als zuverlässigen, pünktlichen und kundenorientierten Dienstleister kennen."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Unternehmen"
        title="Verlässlicher Service für Immobilien, Arbeitsumgebungen und Umzugsphasen"
        description="Blitz Service GmbH versteht sich als professioneller Dienstleister mit Fokus auf saubere Ergebnisse, klare Kommunikation und pünktliche Ausführung. Unser Anspruch ist nicht laute Werbung, sondern belastbare Leistung im Alltag unserer Kunden."
        actions={<ButtonLink href="/contact">Kostenloses Angebot</ButtonLink>}
      />
      <section className="pb-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Unser Anspruch"
              title="Sachlich, professionell und kundenorientiert"
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Wir arbeiten für Unternehmen, Hausverwaltungen und Privatkunden, die einen
                zuverlässigen Partner für wiederkehrende oder einmalige Leistungen
                suchen. Im Mittelpunkt steht die Reinigung: gründlich geplant, sauber
                ausgeführt und passend zur Nutzung der jeweiligen Flächen.
              </p>
              <p>
                Pünktlichkeit, gute Erreichbarkeit und ein strukturierter Ablauf sind für
                uns Teil der eigentlichen Leistung. Deshalb stimmen wir Einsätze klar ab,
                reagieren zügig auf Rückfragen und halten den Aufwand für unsere Kunden so
                gering wie möglich.
              </p>
              <p>
                Wo es sinnvoll ist, ergänzen wir unser Angebot durch Transport- und
                Umzugsleistungen. So können Kunden mehrere Aufgaben koordiniert über einen
                Ansprechpartner abwickeln, ohne dass der Schwerpunkt auf Reinigung verloren
                geht.
              </p>
            </div>
          </div>
          <div className="rounded-[32px] border border-brand-blue/10 bg-white p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue-soft">
              Werte
            </p>
            <ul className="mt-6 space-y-4">
              {aboutValues.map((value) => (
                <li
                  key={value}
                  className="rounded-2xl bg-brand-cream px-5 py-4 text-sm leading-7 text-slate-700"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
