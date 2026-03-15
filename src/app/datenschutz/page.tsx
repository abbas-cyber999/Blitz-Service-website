import { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { business, fullAddress } from "@/config/business";
import { legalDraftNotice } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Entwurf der Datenschutzerklaerung fuer Blitz Service GmbH."
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklaerung"
        description="Strukturierter Entwurf mit Fokus auf Kontaktformular, Betroffenenrechte und organisatorische Hinweise."
      />
      <section className="pb-24">
        <Container className="max-w-4xl space-y-8 rounded-[32px] border border-brand-blue/10 bg-white p-8 shadow-card">
          <p className="rounded-2xl bg-brand-cream px-5 py-4 text-sm leading-7 text-slate-700">
            {legalDraftNotice}
          </p>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">1. Verantwortliche Stelle</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>{business.legalName}</p>
              <p>{fullAddress}</p>
              <p>E-Mail: {business.email}</p>
              <p>Telefon: {business.phone}</p>
            </div>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">
              2. Verarbeitung von Kontaktformulardaten
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Wenn Nutzer das Kontaktformular verwenden, verarbeiten wir Name, E-Mail,
              Telefonnummer, Betreff, ausgewaehlten Service, Nachricht, Zustimmung zur
              Datenschutzerklaerung sowie technische Metadaten fuer die Bearbeitung der
              Anfrage. Die Daten werden in der Datenbank gespeichert und koennen optional an
              die Unternehmens-E-Mail-Adresse weitergeleitet werden.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">3. Zwecke und Rechtsgrundlagen</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die Verarbeitung erfolgt ausschliesslich zur Bearbeitung von Anfragen, zur
              Angebotserstellung und zur Dokumentation des Kundenkontakts. Die konkrete
              Rechtsgrundlage muss vor dem Livegang rechtlich geprueft und passend zum
              tatsaechlichen Einsatz ergaenzt werden.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">4. Empfaenger und Weitergabe</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Eine Weitergabe erfolgt nur, soweit dies fuer Hosting, E-Mail-Zustellung oder
              die Bearbeitung einer Anfrage erforderlich ist. Eingesetzte Dienstleister und
              Auftragsverarbeiter muessen vor Produktion konkret benannt und geprueft werden.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">5. Speicherdauer</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Kontaktanfragen werden nur so lange gespeichert, wie dies fuer die Bearbeitung,
              gesetzliche Aufbewahrungspflichten oder berechtigte organisatorische Zwecke
              erforderlich ist. Die finalen Fristen sind vor Produktivbetrieb festzulegen.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">6. Rechte betroffener Personen</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Betroffene Personen haben insbesondere das Recht auf Auskunft, Berichtigung,
              Loeschung, Einschraenkung der Verarbeitung, Datenuertragbarkeit sowie
              Widerspruch gegen bestimmte Verarbeitungen. Zudem besteht ein Beschwerderecht
              bei einer zustaendigen Datenschutzaufsichtsbehoerde.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-brand-blue">
              7. Technische und organisatorische Hinweise
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Diese Website nutzt serverseitige Validierung, Spam-Schutz via Honeypot und
              eine geschuetzte Administrationsoberflaeche fuer Kontaktanfragen. Vor dem
              Livegang muessen Hosting, Logging, Zugriffsschutz und Aufbewahrungsprozesse
              final dokumentiert werden.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}
