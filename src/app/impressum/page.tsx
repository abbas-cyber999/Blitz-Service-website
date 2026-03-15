import { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { business, fullAddress } from "@/config/business";
import { legalDraftNotice } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Entwurf des Impressums fuer Blitz Service GmbH."
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        description="Strukturierter Entwurf fuer die spaetere rechtliche Finalisierung."
      />
      <section className="pb-24">
        <Container className="max-w-4xl space-y-8 rounded-[32px] border border-brand-blue/10 bg-white p-8 shadow-card">
          <p className="rounded-2xl bg-brand-cream px-5 py-4 text-sm leading-7 text-slate-700">
            {legalDraftNotice}
          </p>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">Angaben gemaess § 5 TMG</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>{business.legalName}</p>
              <p>{fullAddress}</p>
              <p>Telefon: {business.phone}</p>
              <p>E-Mail: {business.email}</p>
            </div>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">Vertreten durch</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Geschaeftsfuehrung: {business.managingDirector}
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">Registereintrag</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Handelsregister: {business.commercialRegister}
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">Umsatzsteuer-ID</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Umsatzsteuer-Identifikationsnummer gemaess § 27 a Umsatzsteuergesetz: {business.vatId}
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">
              Haftung fuer Inhalte und Links
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Dieser Abschnitt ist als Platzhalter vorgesehen und muss vor dem Livegang durch
              rechtlich gepruefte, unternehmensspezifische Inhalte ersetzt werden.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}
