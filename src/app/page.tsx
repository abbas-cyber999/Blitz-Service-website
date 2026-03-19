import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
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

const featuredServices = services.slice(0, 4);

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
              <div key={metric} className="flex items-center gap-3 rounded-2xl bg-brandCream px-4 py-3 text-sm text-brandBlue">
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
            title="Professionelle Services mit klarem Schwerpunkt auf Reinigung"
            description="Gebäudereinigung, Büroreinigung und Treppenhausreinigung stehen im Mittelpunkt. Transport und Umzug ergänzen das Angebot sinnvoll, wenn Projekte aus einer Hand umgesetzt werden sollen."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <article
                key={service.title}
                className="rounded-[30px] border border-brandBlue/10 bg-white p-8 shadow-[0_20px_45px_rgba(15,45,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(15,45,82,0.12)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandBlue text-white shadow-[0_14px_28px_rgba(15,45,82,0.18)]">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-brandBlue">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                  {service.benefits.slice(0, 2).map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brandGold" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Warum Blitz Service"
              title="Vertrauenswürdig, gepflegt im Auftritt und konsequent in der Ausführung"
              description="Die Website bleibt sachlich und professionell. Genau das erwarten Unternehmen, Hausverwaltungen und Privatkunden von einem seriösen Dienstleister."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {trustPoints.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-brandBlue/10 bg-white p-7 shadow-[0_18px_38px_rgba(15,45,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(15,45,82,0.12)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brandBlue text-white shadow-[0_12px_24px_rgba(15,45,82,0.18)]">
                  {index === 0 ? <ShieldCheck className="h-5 w-5" /> : index === 1 ? <Sparkles className="h-5 w-5" /> : <BadgeCheck className="h-5 w-5" />}
                </span>
                <h3 className="mt-5 font-display text-2xl text-brandBlue">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
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
              <article key={step.title} className="rounded-[30px] border border-brandBlue/10 bg-brandCream p-8 shadow-[0_20px_42px_rgba(15,45,82,0.08)]">
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
            title="Kundenstimmen mit glaubwürdigem, professionellem Ton"
            description="Die folgenden Rezensionen sind als realistische Platzhalter angelegt und können später direkt durch echte Kundenstimmen ersetzt werden."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={`${review.name}-${review.city}`} {...review} />
            ))}
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
              Dann sprechen wir über Ihr Objekt, Ihren Bedarf und einen sauberen Ablauf.
              Reinigung steht an erster Stelle, Transport ergänzt bei Bedarf.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>
              <ButtonLink href={whatsappHref} variant="secondary">
                WhatsApp schreiben <MessageCircleMore className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[34px] border border-brandBlue/10 bg-white p-8 shadow-[0_24px_56px_rgba(15,45,82,0.10)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">
              Häufige Fragen
            </p>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl bg-brandCream p-5">
                  <p className="font-semibold text-brandBlue">{faq.question}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
