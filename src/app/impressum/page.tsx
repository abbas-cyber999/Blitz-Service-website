import { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Blitz Service GmbH mit den gesetzlich erforderlichen Angaben für eine GmbH in Deutschland."
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        description="Pflichtangaben für den geschäftsmäßigen Internetauftritt der Blitz Service GmbH."
      />
      <section className="pb-24">
        <Container className="max-w-4xl space-y-8 rounded-[32px] border border-brandBlue/10 bg-white p-8 shadow-card">
          <section>
            <h2 className="font-display text-3xl text-brandBlue">
              Angaben gemäß § 5 DDG
            </h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>Blitz Service GmbH</p>
              <p>Zwickauer Str. 23</p>
              <p>47443 Moers</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Vertreten durch</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Geschäftsführer: Othman Hasan
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Kontakt</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>Telefon: +49 179 6995057</p>
              <p>
                E-Mail:{" "}
                <a className="text-brandBlue hover:text-brandGold" href="mailto:info@blitzservic.de">
                  info@blitzservic.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Handelsregister</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>Registergericht: Amtsgericht Kleve</p>
              <p>Handelsregisternummer: HRB 20203</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Umsatzsteuer-ID</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE454824077
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>Othman Hasan</p>
              <p>Zwickauer Str. 23</p>
              <p>47443 Moers</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Hinweis zur Nutzung der Kontaktdaten</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten dürfen nicht zur
              Übersendung von nicht ausdrücklich angeforderter Werbung oder Informationsmaterialien
              verwendet werden. Der Nutzung der Kontaktdaten zu Zwecken der Direktwerbung wird
              hiermit widersprochen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Haftung für Inhalte</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Als Diensteanbieter ist die Blitz Service GmbH gemäß den allgemeinen Gesetzen für
              eigene Inhalte auf diesen Seiten verantwortlich. Trotz sorgfältiger inhaltlicher
              Kontrolle übernehmen wir keine Gewähr für die Aktualität, Richtigkeit und
              Vollständigkeit der bereitgestellten Informationen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Haftung für Links</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Unsere Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte
              haben wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">Verbraucherstreitbeilegung</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die Blitz Service GmbH ist nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen,
              sofern keine gesetzliche Verpflichtung im Einzelfall besteht.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}
