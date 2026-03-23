import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { business, fullAddress } from "@/config/business";
import { legalDraftNotice } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Blitz Service GmbH mit Pflichtangaben für eine deutsche Unternehmenswebsite."
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        description="Pflichtangaben für den geschäftsmäßigen Auftritt der Blitz Service GmbH."
      />
      <section className="pb-24">
        <Container className="max-w-4xl space-y-8 rounded-[32px] border border-brandBlue/10 bg-white p-8 shadow-card">
          <p className="rounded-2xl bg-brandCream px-5 py-4 text-sm leading-7 text-slate-700">
            {legalDraftNotice}
          </p>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">
              Angaben gemäß § 5 DDG (früher § 5 TMG)
            </h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>{business.legalName}</p>
              <p>{business.legalForm}</p>
              <p>Sitz der Gesellschaft: {business.address.city}</p>
              <p>{fullAddress}</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Vertreten durch</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Geschäftsführer: {business.managingDirector}
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Kontakt</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>Telefon: {business.phones.office}</p>
              <p>Weitere Kontaktmöglichkeit: {business.phones.managingDirector}</p>
              <p>
                E-Mail:{" "}
                <a className="text-brandBlue hover:text-brandGold" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Handelsregister</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>Registergericht: {business.registerCourt}</p>
              <p>Handelsregisternummer: {business.commercialRegisterNumber}</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Umsatzsteuer-ID</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: {business.vatId}
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {business.contentResponsible}
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Hinweis zur Nutzung der Kontaktdaten</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die im Impressum veröffentlichten Kontaktdaten dürfen nicht zur Übersendung von
              nicht ausdrücklich angeforderter Werbung oder Informationsmaterialien verwendet
              werden. Der Nutzung der Kontaktdaten zu Zwecken der Direktwerbung wird hiermit
              widersprochen, soweit keine ausdrückliche Einwilligung vorliegt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Bildnachweise und Nutzungsrechte</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Auf dieser Website verwendete Bilder und Grafiken stammen teilweise aus
                lizenzfreien Quellen oder aus lokal für dieses Projekt erstellten Grafiken.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                {business.imageAttribution.map((item) => (
                  <li key={item.label}>
                    <span className="font-semibold text-slate-700">{item.label}:</span> {item.note}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Haftung für Inhalte</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr
              übernommen. Als Diensteanbieter ist die Blitz Service GmbH für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Haftung für Links</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte
              besteht kein Einfluss. Für fremde Inhalte wird daher keine Gewähr übernommen.
              Verantwortlich für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Online-Streitbeilegung</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die europäische Online-Streitbeilegungsplattform (OS-Plattform) wurde zum 20. Juli
              2025 eingestellt. Daher steht derzeit kein aktiver Link zu einer EU-Online-
              Streitbeilegungsplattform mehr zur Verfügung.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Verbraucherstreitbeilegung</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die Blitz Service GmbH ist weder verpflichtet noch bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen,
              sofern nicht eine gesetzliche Verpflichtung im Einzelfall besteht.
            </p>
          </section>

          <p className="text-sm leading-7 text-slate-500">
            Hinweis: Für individuelle rechtliche Anforderungen, Branchenbesonderheiten oder
            abweichende Registrierungsdaten sollte das Impressum vor dem produktiven Einsatz durch
            eine qualifizierte Rechtsberatung geprüft werden.
          </p>
        </Container>
      </section>
    </>
  );
}
