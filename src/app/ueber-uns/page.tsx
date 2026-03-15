import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutValues } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Ueber uns",
  description:
    "Lernen Sie Blitz Service GmbH als zuverlaessigen, puenktlichen und kundenorientierten Dienstleister kennen."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Unternehmen"
        title="Verlaesslicher Service fuer Immobilien, Arbeitsumgebungen und Umzugsphasen"
        description="Blitz Service GmbH versteht sich als professioneller Dienstleister mit Fokus auf saubere Ergebnisse, klare Kommunikation und puenktliche Ausfuehrung. Unser Anspruch ist nicht laute Werbung, sondern belastbare Leistung im Alltag unserer Kunden."
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
                Wir arbeiten fuer Unternehmen, Hausverwaltungen und Privatkunden, die einen
                zuverlaessigen Partner fuer wiederkehrende oder einmalige Leistungen
                suchen. Im Mittelpunkt steht die Reinigung: gruendlich geplant, sauber
                ausgefuehrt und passend zur Nutzung der jeweiligen Flaechen.
              </p>
              <p>
                Puenktlichkeit, gute Erreichbarkeit und ein strukturierter Ablauf sind fuer
                uns Teil der eigentlichen Leistung. Deshalb stimmen wir Einsaetze klar ab,
                reagieren zuegig auf Rueckfragen und halten den Aufwand fuer unsere Kunden so
                gering wie moeglich.
              </p>
              <p>
                Wo es sinnvoll ist, ergaenzen wir unser Angebot durch Transport- und
                Umzugsleistungen. So koennen Kunden mehrere Aufgaben koordiniert ueber einen
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
