import { Metadata } from "next";
import { Mail, MessageCircleMore, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderImageCard } from "@/components/placeholder-image-card";
import { business, contactAnchorId, fullAddress, whatsappHref } from "@/config/business";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie Blitz Service GmbH für Reinigungs- und Transportanfragen."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Anfrage senden und schnell Rückmeldung erhalten"
        description="Ob regelmäßige Reinigung, einmalige Endreinigung oder ergänzende Transportleistung: Beschreiben Sie Ihr Vorhaben kurz und wir melden uns zeitnah mit einer passenden Rückmeldung."
        actions={
          <>
            <ButtonLink href={whatsappHref} variant="whatsapp">
              WhatsApp starten
            </ButtonLink>
            <ButtonLink href={`mailto:${business.email}`} variant="dark">
              E-Mail senden
            </ButtonLink>
          </>
        }
      />
      <section className="pb-24">
        <Container className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] bg-brandBlue p-8 text-white shadow-[0_28px_56px_rgba(15,45,82,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandGoldSoft">
                Direkter Kontakt
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={whatsappHref}
                  className="flex items-center gap-4 rounded-2xl border border-[#25D366]/35 bg-[#25D366]/12 px-5 py-4 hover:border-[#1fb458]/70 hover:bg-[#25D366]/18"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_12px_24px_rgba(37,211,102,0.28)]">
                    <MessageCircleMore className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/70">WhatsApp</span>
                    <span className="font-semibold">{business.whatsappNumber}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 px-5 py-4 hover:border-brandGold/50 hover:bg-white/10"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brandBlue">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/70">E-Mail</span>
                    <span className="font-semibold">{business.email}</span>
                  </span>
                </a>
                <a
                  href={`tel:${business.phones.managingDirector}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 px-5 py-4 hover:border-brandGold/50 hover:bg-white/10"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brandBlue">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/70">Geschäftsführer</span>
                    <span className="font-semibold">{business.phones.managingDirector}</span>
                  </span>
                </a>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/8 p-5 text-sm leading-7 text-slate-100">
                <p className="font-semibold text-white">Adresse</p>
                <p>{fullAddress}</p>
                <p className="mt-4 font-semibold text-white">Geschäftszeiten</p>
                <ul className="mt-1">
                  {business.businessHours.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <PlaceholderImageCard
              badge="Blitz Service GmbH"
              title="Verlässlicher Service mit klarer Erreichbarkeit"
              description="Ob Reinigung oder ergänzende Transportleistung: Wir reagieren schnell, stimmen Leistungen transparent ab und begleiten Ihr Anliegen verbindlich."
              imageSrc="/images/reliable-service.svg"
              imageAlt="Professioneller Service und persönliche Kundenbetreuung"
            />
          </div>

          <div id={contactAnchorId} className="scroll-mt-32 space-y-6">
            <ContactForm />
            <div className="rounded-[30px] border border-brandBlue/10 bg-white px-6 py-5 text-sm leading-7 text-slate-600 shadow-[0_20px_42px_rgba(15,45,82,0.08)]">
              <p className="font-semibold text-brandBlue">Schnelle und persönliche Rückmeldung</p>
              <p className="mt-2">
                Nutzen Sie das Formular für strukturierte Anfragen oder kontaktieren Sie uns direkt
                per WhatsApp, E-Mail oder Telefon. So erreichen Sie uns auf dem Weg, der für Sie am
                besten passt.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
