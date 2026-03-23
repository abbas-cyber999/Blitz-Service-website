import { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Blitz Service GmbH mit Informationen zu Hosting über Vercel, Server-Logfiles, Kontaktverarbeitung und Betroffenenrechten."
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        description="Informationen zur Verarbeitung personenbezogener Daten auf der Website der Blitz Service GmbH."
      />
      <section className="pb-24">
        <Container className="max-w-4xl space-y-8 rounded-[32px] border border-brandBlue/10 bg-white p-8 shadow-card">
          <section>
            <h2 className="font-display text-3xl text-brandBlue">1. Verantwortlicher</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>Blitz Service GmbH</p>
              <p>Zwickauer Str. 23</p>
              <p>47443 Moers</p>
              <p>Deutschland</p>
              <p>Geschäftsführer: Othman Hasan</p>
              <p>
                E-Mail:{" "}
                <a className="text-brandBlue hover:text-brandGold" href="mailto:info@blitzservic.de">
                  info@blitzservic.de
                </a>
              </p>
              <p>Telefon: +49 179 6995057</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">2. Hosting über Vercel</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Diese Website wird über die Plattform Vercel gehostet. Beim Aufruf der Website
              verarbeitet Vercel technisch notwendige Daten, die zur sicheren Bereitstellung,
              Auslieferung und Stabilität der Website erforderlich sind. Hierzu können insbesondere
              IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte Inhalte, Browser-Informationen,
              Betriebssystem, Referrer-URL sowie weitere technische Verbindungsdaten gehören.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres
              berechtigten Interesses an einer sicheren, stabilen und leistungsfähigen Bereitstellung
              unseres Onlineangebots.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">3. Server-Logfiles</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Beim Besuch dieser Website werden Server-Logfiles verarbeitet. Dazu zählen insbesondere
              IP-Adresse, Zugriffszeitpunkt, aufgerufene Datei oder URL, Meldung über erfolgreichen
              Abruf, Browsertyp und Browserversion, Betriebssystem sowie Referrer-URL. Die
              Verarbeitung erfolgt zur Gewährleistung der Systemsicherheit, zur Fehleranalyse und zur
              Abwehr von Missbrauch.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">4. E-Mail- und Kontaktverarbeitung</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, verarbeiten wir die
              von Ihnen übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage und zur
              Kommunikation mit Ihnen. Dies betrifft insbesondere Ihren Namen, Ihre Kontaktdaten,
              Inhaltsdaten Ihrer Nachricht sowie gegebenenfalls weitere freiwillig mitgeteilte
              Informationen.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die Verarbeitung erfolgt je nach Anlass auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              zur Durchführung vorvertraglicher Maßnahmen oder auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO aufgrund unseres berechtigten Interesses an einer ordnungsgemäßen Bearbeitung von
              Anfragen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">5. WhatsApp-Kommunikation</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Wenn Sie mit uns über WhatsApp kommunizieren, erfolgt die Kommunikation über den Dienst
              WhatsApp bzw. den dahinterstehenden Anbieter Meta. Dabei können insbesondere Ihre
              Telefonnummer, Kommunikationsinhalte, Metadaten und weitere nutzungsbezogene
              Informationen verarbeitet werden.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Bitte nutzen Sie WhatsApp nur, wenn Sie mit dieser Kommunikationsform einverstanden
              sind. Alternativ können Sie uns jederzeit per E-Mail oder telefonisch kontaktieren.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">6. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers mit „https://“ beginnt und an dem
              Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">7. Speicherdauer</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen
              Verarbeitungszwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
              Danach werden die Daten gelöscht, sofern keine weitere Verarbeitung rechtlich zulässig
              ist.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">8. Ihre Rechte nach der DSGVO</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft über die zu Ihrer
              Person gespeicherten Daten, auf Berichtigung unrichtiger Daten, auf Löschung, auf
              Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie auf Widerspruch gegen
              bestimmte Datenverarbeitungen. Eine erteilte Einwilligung können Sie jederzeit mit
              Wirkung für die Zukunft widerrufen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">
              9. Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie
              der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO
              verstößt. Zuständig ist insbesondere die Aufsichtsbehörde Ihres gewöhnlichen
              Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}
