import { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPin,
  MessageCircleMore,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { HomeServiceShowcase } from "@/components/home-service-showcase";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { business, whatsappHref } from "@/config/business";
import { faqs, processSteps, reviews, services, trustPoints } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Gebäudereinigung & Büroreinigung in Moers | Blitz Service GmbH",
  description:
    "Professionelle Gebäudereinigung, Büroreinigung und ergänzende Transportservices im Raum Moers, Duisburg, Krefeld und Umgebung. Jetzt unverbindlich anfragen.",
  openGraph: {
    title: "Gebäudereinigung & Büroreinigung in Moers | Blitz Service GmbH",
    description:
      "Professionelle Gebäudereinigung, Büroreinigung und ergänzende Transportservices im Raum Moers, Duisburg, Krefeld und Umgebung. Jetzt unverbindlich anfragen."
  }
};

const featuredServices = services.slice(0, 4);
const trustCards = [
  ...trustPoints,
  {
    title: "Sauberer professioneller Auftritt",
    text: "Gepflegte Objekte, strukturierte Kommunikation und ein Service, der im Alltag spürbar entlastet."
  }
];
const trustIcons = [ShieldCheck, Sparkles, BadgeCheck, CheckCircle2];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-hero-rings text-white">
        <Container className="relative py-20 lg:py-28">
          <HomeServiceShowcase />
        </Container>
      </section>

      <section className="-mt-8 pb-6">
        <Container>
          <div className="grid gap-4 rounded-[28px] border border-brandBlue/10 bg-white/92 p-5 shadow-[0_20px_40px_rgba(15,45,82,0.08)] backdrop-blur sm:grid-cols-2 xl:grid-cols-4">
            {[
              "schnelle Rückmeldung",
              "zufriedene Kunden",
              "flexible Termine",
              "zuverlässiger Service"
            ].map((metric) => (
              <div
                key={metric}
                className="flex items-center gap-3 rounded-2xl bg-brandCream px-4 py-3 text-sm text-brandBlue"
              >
                <CheckCircle2 className="h-4 w-4 text-brandGold" />
                <span className="font-medium">{metric}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-divider py-24">
        <Container>
          <SectionHeading
            eyebrow="Leistungen"
            title="Professionelle Dienstleistungen für saubere, gepflegte und zuverlässige Objektbetreuung"
            description="Blitz Service konzentriert sich auf Reinigung mit klaren Abläufen, verbindlicher Kommunikation und einem Ergebnis, das im Alltag sichtbar entlastet. So erhalten Unternehmen, Hausverwaltungen und Privatkunden einen Service, auf den sie sich verlassen können."
          />
          <div className="mt-8 flex flex-col gap-5 rounded-[30px] border border-brandBlue/10 bg-brandCream p-6 shadow-[0_18px_40px_rgba(15,45,82,0.08)] lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-base leading-8 text-slate-700">
                Ob laufende Unterhaltsreinigung, Treppenhauspflege oder kurzfristige Unterstützung
                vor einer Übergabe: Wir planen Einsätze sauber, reagieren schnell und halten die
                Abstimmung für Sie so unkompliziert wie möglich.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact">
                {business.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappHref} variant="whatsapp">
                Per WhatsApp kontaktieren <MessageCircleMore className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <div className="mt-12 grid gap-6 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-brandBlue/10 bg-white p-7 shadow-[0_16px_34px_rgba(15,45,82,0.07)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,45,82,0.10)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brandBlue text-white shadow-[0_10px_20px_rgba(15,45,82,0.14)]">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-brandBlue">{service.title}</h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-7 text-slate-600">
                  {service.summary}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-brandBlue/10 bg-white p-6 shadow-[0_18px_38px_rgba(15,45,82,0.08)]">
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Sie brauchen eine Reinigungskraft mit klarer Terminplanung und professioneller
              Ausführung? Wir stimmen den passenden Ablauf für Ihr Objekt direkt mit Ihnen ab.
            </p>
            <ButtonLink href="/contact" variant="dark">
              {business.ctaPrimary} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Warum Blitz Service?"
              title="Vier gute Gründe für eine Zusammenarbeit mit klaren Standards"
              description="Unsere Leistungen sollen nicht nur ordentlich aussehen, sondern im Alltag zuverlässig funktionieren. Darauf legen Kunden bei Reinigung und Objektbetreuung den größten Wert."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {trustCards.map((item, index) => {
              const Icon = trustIcons[index] ?? BadgeCheck;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-brandBlue/10 bg-white p-7 shadow-[0_18px_38px_rgba(15,45,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(15,45,82,0.12)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brandBlue text-white shadow-[0_12px_24px_rgba(15,45,82,0.18)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-brandBlue">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Ablauf"
            title="So läuft die Zusammenarbeit"
            description="Vom Erstkontakt bis zur laufenden Betreuung bleibt der Prozess klar, schnell und nachvollziehbar."
            centered
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[30px] border border-brandBlue/10 bg-brandCream p-8 shadow-[0_20px_42px_rgba(15,45,82,0.08)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brandBlue text-lg font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl text-brandBlue">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Bewertungen"
            title="Das sagen unsere Kunden"
            description="Zufriedene Kunden sind für uns die beste Empfehlung."
          />
          <div className="mt-6 rounded-[28px] border border-brandBlue/10 bg-brandCream/70 px-6 py-5 text-sm leading-7 text-slate-600 shadow-[0_16px_34px_rgba(15,45,82,0.06)]">
            Verlässlichkeit, saubere Ergebnisse und eine unkomplizierte Abstimmung machen im Alltag
            den Unterschied. Genau darauf beziehen sich die folgenden Stimmen aus unserem regionalen
            Einsatzgebiet.
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={`${review.name}-${review.city}`} {...review} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Häufige Fragen"
            description="Die wichtigsten Antworten auf typische Fragen zu Reinigung, Einsatzgebiet und Anfrageprozess."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[28px] border border-brandBlue/10 bg-white p-7 shadow-[0_18px_40px_rgba(15,45,82,0.08)]"
              >
                <h3 className="font-display text-2xl text-brandBlue">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <div className="rounded-[34px] border border-brandBlue/10 bg-brandCream px-8 py-10 shadow-[0_24px_56px_rgba(15,45,82,0.10)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">
              Schnelle Anfrage
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl text-brandBlue">
              Sie brauchen kurzfristig ein Angebot oder möchten direkt einen Termin abstimmen?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Senden Sie uns Ihre Anfrage mit Objektart, Leistungswunsch und Ort. Wir melden uns
              schnell zur weiteren Abstimmung zurück.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">
                {business.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappHref} variant="whatsapp">
                Per WhatsApp kontaktieren <MessageCircleMore className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[34px] bg-brandBlue px-8 py-10 text-white shadow-[0_28px_60px_rgba(15,45,82,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandGoldSoft">
              Kontakt
            </p>
            <h2 className="mt-5 font-display text-4xl">
              Sie möchten ein gepflegtes Objekt und einen Dienstleister, der verbindlich liefert?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
              Dann sprechen wir über Ihr Objekt, Ihren Bedarf und einen sauberen Ablauf. Reinigung
              steht an erster Stelle, Transport ergänzt bei Bedarf.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>
              <ButtonLink href={whatsappHref} variant="whatsapp">
                Per WhatsApp kontaktieren <MessageCircleMore className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[34px] border border-brandBlue/10 bg-white p-8 shadow-[0_24px_56px_rgba(15,45,82,0.10)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">
              Regional im Einsatz
            </p>
            <h2 className="mt-4 font-display text-3xl text-brandBlue">
              Einsätze in Moers und im regionalen Umfeld
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-brandCream p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brandBlue text-white">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-brandBlue">
                    Wir arbeiten in Moers sowie in allen Städten im Umkreis von bis zu 150 km.
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Dazu zählen unter anderem Duisburg, Krefeld und Düsseldorf. Weitere Einsatzorte
                    stimmen wir gern individuell mit Ihnen ab.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {business.serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_10px_22px_rgba(15,45,82,0.06)]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brandBlue text-white">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <p className="font-semibold text-brandBlue">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
