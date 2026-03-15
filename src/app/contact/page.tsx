import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { business, fullAddress } from "@/config/business";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Blitz Service GmbH fuer Reinigungs- und Transportanfragen."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Anfrage senden"
        description="Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns mit einer Rueckmeldung oder einem Angebot bei Ihnen zurueck."
      />
      <section className="pb-24">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[32px] border border-brand-blue/10 bg-brand-blue p-8 text-white shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold-soft">
              Kontaktinformationen
            </p>
            <div className="mt-8 space-y-6 text-sm leading-7 text-slate-100">
              <div>
                <p className="font-semibold text-white">Adresse</p>
                <p>{fullAddress}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Telefon</p>
                <a href={`tel:${business.phone}`} className="hover:text-brand-gold-soft">
                  {business.phone}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">E-Mail</p>
                <a href={`mailto:${business.email}`} className="hover:text-brand-gold-soft">
                  {business.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Einsatzgebiete</p>
                <p>{business.serviceAreas.join(", ")}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Geschaeftszeiten</p>
                <ul>
                  {business.businessHours.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
