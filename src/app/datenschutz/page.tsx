import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { business, fullAddress, whatsappHref } from "@/config/business";
import { legalDraftNotice } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Blitz Service GmbH für Website, Kontaktformulare, E-Mail- und WhatsApp-Kommunikation."
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
          <p className="rounded-2xl bg-brandCream px-5 py-4 text-sm leading-7 text-slate-700">
            {legalDraftNotice}
          </p>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">1. Verantwortlicher</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <p>{business.legalName}</p>
              <p>{fullAddress}</p>
              <p>
                E-Mail:{" "}
                <a className="text-brandBlue hover:text-brandGold" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </p>
              <p>Telefon: {business.phones.office}</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">2. Hosting über Vercel</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Diese Website wird über Vercel bereitgestellt. Beim Aufruf der Website können durch
              das Hosting technisch erforderliche Daten verarbeitet werden, insbesondere IP-Adresse,
              Datum und Uhrzeit des Zugriffs, angeforderte Inhalte, Referrer, Browsertyp,
              Betriebssystem und Protokolldaten. Die Verarbeitung erfolgt zur sicheren Bereitstellung,
              Stabilität und technischen Administration der Website.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Vor dem produktiven Einsatz sollte geprüft werden, welche Regionen, Subdienstleister,
              Auftragsverarbeitungsverträge und Standardvertragsklauseln bei Vercel konkret
              eingesetzt werden.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">3. Server-Logfiles</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Beim Besuch der Website werden technisch notwendige Server-Logfiles verarbeitet. Dazu
              können insbesondere IP-Adresse, Zeitpunkt des Abrufs, angeforderte URL,
              Antwortstatuscode, Browser-Informationen und Referrer gehören. Die Verarbeitung dient
              der Sicherheit, Fehleranalyse und Missbrauchserkennung.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">4. Kontaktformular</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Bei Nutzung des Kontaktformulars verarbeiten wir die von Ihnen eingegebenen Daten,
              insbesondere Name, E-Mail-Adresse, Telefonnummer, Betreff, ausgewählten Service,
              Nachricht sowie die Bestätigung zur Kenntnisnahme der Datenschutzerklärung. Zusätzlich
              werden technische Daten verarbeitet, soweit dies zur sicheren Übermittlung und
              Missbrauchsvermeidung erforderlich ist.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage, zur Vorbereitung von Angeboten
              und zur Kommunikation mit Ihnen. Rechtsgrundlage ist in der Regel Art. 6 Abs. 1 lit. b
              DSGVO bei vorvertraglichen Maßnahmen oder Art. 6 Abs. 1 lit. f DSGVO bei allgemeinen
              Kontaktanfragen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">5. E-Mail-Kommunikation</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten
              Daten zur Bearbeitung Ihres Anliegens. Dies betrifft typischerweise Absenderdaten,
              Inhaltsdaten, Zeitpunkte und etwaige Anhänge. Die Verarbeitung erfolgt zur
              Kommunikation und Anbahnung oder Durchführung geschäftlicher Kontakte.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">6. WhatsApp-Kontakt</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Wenn Sie den angebotenen WhatsApp-Kontakt nutzen, verlassen Sie diese Website und
              kommunizieren über den Dienst WhatsApp. Dabei können personenbezogene Daten durch den
              jeweiligen Anbieter verarbeitet werden. Dazu können insbesondere Telefonnummer,
              Profildaten, Inhaltsdaten und Metadaten der Kommunikation gehören.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Bitte nutzen Sie WhatsApp nur, wenn Sie mit dieser Kommunikationsform einverstanden
              sind. Alternativ können Sie uns jederzeit per E-Mail, Telefon oder über das
              Kontaktformular erreichen. Der aktuelle WhatsApp-Link lautet{" "}
              <Link className="text-brandBlue hover:text-brandGold" href={whatsappHref}>
                hier
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">7. Cookies und ähnliche Technologien</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Nach dem aktuellen Stand der Website werden keine erkennbaren nicht notwendigen
              Tracking- oder Marketing-Cookies eingesetzt. Technisch erforderliche Funktionen können
              jedoch im Rahmen des Hostings oder der Sitzungsverwaltung erforderlich sein.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Ein gesonderter Cookie-Consent-Banner ist insbesondere dann erforderlich, wenn künftig
              Analyse-, Marketing-, Retargeting- oder andere einwilligungspflichtige Technologien
              ergänzt werden. Für diesen Fall sollte vor Aktivierung eine Consent-Lösung
              implementiert werden.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">8. Empfänger und Dienstleister</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Personenbezogene Daten können an technische Dienstleister weitergegeben werden, soweit
              dies für Hosting, E-Mail-Zustellung, Datenbankspeicherung, Sicherheitsfunktionen oder
              die Bearbeitung Ihrer Anfrage erforderlich ist. Vor dem produktiven Einsatz sollten die
              konkret eingesetzten Auftragsverarbeiter dokumentiert und vertraglich abgesichert
              werden.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">9. Speicherdauer</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Wir speichern personenbezogene Daten nur so lange, wie dies für die Bearbeitung Ihrer
              Anfrage, für gesetzliche Aufbewahrungspflichten oder für berechtigte organisatorische
              Zwecke erforderlich ist. Kontaktanfragen ohne anschließenden Vertragsschluss sollten in
              angemessenen Zeitabständen geprüft und gelöscht werden, sofern keine weitere
              Aufbewahrung erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">10. Sicherheitsmaßnahmen</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Wir treffen technische und organisatorische Maßnahmen, um personenbezogene Daten gegen
              Verlust, Manipulation, unberechtigten Zugriff und sonstige unzulässige Verarbeitung zu
              schützen. Dazu gehören insbesondere serverseitige Validierungen, Zugriffsbegrenzungen,
              Spam-Schutzmechanismen und die Beschränkung administrativer Zugriffe.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">11. Externe Bilder und Bildquellen</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Einzelne Bilder dieser Website stammen aus lizenzfreien Quellen oder aus lokal
                erstellten Grafikdateien. Beim bloßen Anzeigen lokal eingebundener Bilddateien werden
                nach aktuellem Stand keine zusätzlichen Daten an externe Bildplattformen übermittelt.
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
            <h2 className="font-display text-3xl text-brandBlue">12. Ihre Rechte</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sie haben nach Maßgabe der DSGVO insbesondere das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen
              die Verarbeitung Ihrer personenbezogenen Daten. Bereits erteilte Einwilligungen können
              Sie mit Wirkung für die Zukunft widerrufen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-brandBlue">
              13. Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn
              Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die
              DSGVO verstößt. Zuständig ist insbesondere die Aufsichtsbehörde Ihres gewöhnlichen
              Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
            </p>
          </section>

          <p className="text-sm leading-7 text-slate-500">
            Hinweis: Diese Datenschutzerklärung ist als belastbarer Entwurf für eine deutsche
            Unternehmenswebsite formuliert. Vor dem produktiven Einsatz sollten die tatsächlich
            eingesetzten Tools, Dienstleister, Speicherfristen und Zuständigkeiten rechtlich
            überprüft und final ergänzt werden.
          </p>
        </Container>
      </section>
    </>
  );
}
