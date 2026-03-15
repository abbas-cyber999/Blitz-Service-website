import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { business } from "@/config/business";
import {
  homeHighlights,
  processSteps,
  reviews,
  services
} from "@/data/site-content";

const featuredServices = services.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-hero-rings text-white">
        <Container className="grid gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold-soft">
              Professionelle Reinigung mit Prioritaet
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight sm:text-6xl">
              Sauberkeit, auf die Unternehmen und Haushalte sich verlassen koennen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              {business.name} bietet hochwertige Reinigungsleistungen fuer Gebaeude,
              Buero und Treppenhaus. Ergaenzend stehen Transport- und Umzugsservices zur
              Verfuegung, wenn mehrere Leistungen aus einer Hand gewuenscht sind.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="bg-white/10 text-white">
                Services entdecken
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {homeHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-100 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-card backdrop-blur">
            <div className="absolute -right-12 -top-10 h-40 w-40 rounded-full bg-brand-gold/20 blur-3xl" />
            <div className="absolute -bottom-16 left-0 h-44 w-44 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="relative space-y-6">
              <div className="rounded-[24px] bg-white p-6 text-brand-blue shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue-soft">
                  Reinigungsfokus
                </p>
                <p className="mt-4 font-display text-3xl">Gebaeude. Buero. Treppenhaus.</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Unsere Hauptleistung ist die professionelle Reinigung mit planbaren
                  Standards, festen Ansprechpartnern und sauber dokumentierten Absprachen.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Sauberkeit",
                    icon: Sparkles,
                    text: "Sichtbar gepflegte Immobilien und Arbeitsbereiche."
                  },
                  {
                    title: "Zuverlaessigkeit",
                    icon: ShieldCheck,
                    text: "Verbindliche Ausfuehrung und klare Kommunikation."
                  },
                  {
                    title: "Schnelligkeit",
                    icon: Clock3,
                    text: "Kurze Reaktionszeiten bei neuen Anfragen."
                  }
                ].map((item) => (
                  <div key={item.title} className="rounded-[24px] bg-white/90 p-5 text-brand-blue">
                    <item.icon className="text-brand-gold" />
                    <p className="mt-4 font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Reinigung zuerst, Transport sinnvoll ergaenzt"
            description="Die Marke Blitz Service GmbH steht im Auftritt bewusst fuer professionelle Reinigungsleistungen. Transport- und Umzugsservices ergaenzen das Angebot dort, wo Kunden eine koordinierte Gesamtausfuehrung benoetigen."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <article
                key={service.title}
                className={`rounded-[28px] border p-8 shadow-card ${
                  index === 0
                    ? "border-brand-gold/40 bg-brand-cream"
                    : "border-brand-blue/10 bg-white"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue-soft">
                  {index === 0 ? "Hauptservice" : "Service"}
                </p>
                <h2 className="mt-4 font-display text-3xl text-brand-blue">{service.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.summary}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 text-brand-gold" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Warum wir"
              title="Professionell, klar organisiert und auf dauerhafte Qualitaet ausgerichtet"
              description="Wir verbinden einen gepflegten Markenauftritt mit der Nuechternheit, die Kunden von einem verlaesslichen Dienstleister erwarten."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Klare Standards",
                text: "Reinigung wird nicht improvisiert, sondern nach nachvollziehbaren Schritten geplant und umgesetzt."
              },
              {
                title: "Verbindliche Betreuung",
                text: "Anfragen, Rueckfragen und laufende Abstimmungen erhalten feste Ansprechpartner und kurze Wege."
              },
              {
                title: "Flexibler Einsatz",
                text: "Regelmaessige Intervalle und individuelle Termine lassen sich passend zu Objekt und Nutzung organisieren."
              },
              {
                title: "Vertrauenswuerdiger Auftritt",
                text: "Das visuelle Erscheinungsbild bleibt hochwertig und serioes, passend fuer eine deutsche Servicegesellschaft."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-brand-blue/10 bg-white p-7 shadow-card">
                <h3 className="font-display text-2xl text-brand-blue">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="Ablauf"
            title="So laeuft die Zusammenarbeit"
            description="Vom Erstkontakt bis zur laufenden Betreuung bleibt der Ablauf transparent, unkompliziert und terminsicher."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-[28px] bg-white p-8 shadow-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-lg font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl text-brand-blue">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Bewertungen"
            title="Kundenstimmen"
            description="Beispielhafte Rezensionen, die spaeter einfach durch echte Kundenbewertungen ersetzt werden koennen."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={`${review.name}-${review.city}`} {...review} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="rounded-[36px] bg-brand-blue px-8 py-12 text-white shadow-card sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold-soft">
              Kontakt
            </p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl">
                  Sie benoetigen eine verlaessliche Reinigung oder ein passendes Angebot?
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-200">
                  Wir erstellen gerne ein unverbindliches Angebot fuer Ihr Objekt oder Ihr
                  Vorhaben. Reinigung steht dabei immer im Mittelpunkt unseres Auftritts und
                  unserer Leistung.
                </p>
              </div>
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                {business.ctaSecondary} <ArrowRight className="ml-2" size={16} />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
