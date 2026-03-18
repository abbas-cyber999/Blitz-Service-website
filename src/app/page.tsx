import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PlaceholderImageCard } from "@/components/placeholder-image-card";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { business, whatsappHref } from "@/config/business";
import {
  faqs,
  homeHighlights,
  processSteps,
  reviews,
  services,
  trustPoints
} from "@/data/site-content";

const featuredServices = services.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-hero-rings text-white">
        <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brandGoldSoft">
              blitzservic.de · Reinigung zuerst
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Professionelle Reinigung mit starkem Auftritt und verlässlicher Ausführung.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Blitz Service GmbH steht für gepflegte Gebäude, saubere Arbeitsumgebungen
              und schnelle Rückmeldungen. Reinigung ist unser Schwerpunkt, Transport ist
              ein ergänzender Service für koordinierte Projekte.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact" className="px-7 py-4 text-base">
                {business.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappHref} variant="secondary" className="px-7 py-4 text-base">
                WhatsApp schreiben <MessageCircleMore className="h-4 w-4" />
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {homeHighlights.map((item) => (
                <div
                  key={item}
                  className="glass-panel rounded-2xl border border-white/12 px-5 py-4 text-sm text-slate-100 shadow-[0_18px_34px_rgba(11,25,47,0.14)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="float-soft glass-panel rounded-[34px] border border-white/14 p-6 shadow-[0_30px_60px_rgba(10,25,46,0.22)]">
              <PlaceholderImageCard
                badge="Premium Reinigung"
                title="Gebäude, Büros und Treppenhäuser in gepflegtem Zustand."
                description="Diese Bildfläche ist als hochwertiger Platzhalter für spätere echte Reinigungs- oder Objektfotos vorbereitet."
                imageSrc="/images/building-cleaning.svg"
                imageAlt="Moderne Gebäudereinigung in einem gepflegten Objekt"
                replacementNote="Datei später durch echtes Reinigungsfoto ersetzen"
                overlay={
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-brandBlue/10 bg-white/90 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandBlueSoft">
                        Einsatzgebiet
                      </p>
                      <p className="mt-2 text-sm text-slate-600">{business.serviceAreas.join(" · ")}</p>
                    </div>
                    <div className="rounded-2xl border border-brandBlue/10 bg-white/90 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandBlueSoft">
                        Rückmeldung
                      </p>
                      <p className="mt-2 text-sm text-slate-600">Kurzfristige Angebots- und Besichtigungstermine</p>
                    </div>
                  </div>
                }
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: "24h", text: "schnelle Reaktion", icon: Clock3 },
                { label: "100%", text: "Fokus auf Reinigung", icon: Sparkles },
                { label: "Direkt", text: "WhatsApp & Kontakt", icon: ShieldCheck }
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/10 p-5 text-white shadow-[0_18px_32px_rgba(11,25,47,0.16)] backdrop-blur">
                  <item.icon className="h-5 w-5 text-brandGold" />
                  <p className="mt-4 font-display text-3xl">{item.label}</p>
                  <p className="mt-2 text-sm text-slate-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
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
                <Star className="h-4 w-4 text-brandGold" />
                <span className="font-medium">{metric}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-divider py-24">
        <Container>
          <SectionHeading
            eyebrow="Servicefokus"
            title="Starke Leistungen mit sichtbarer Priorität auf Reinigung"
            description="Die Website kommuniziert Reinigung bewusst als Hauptleistung. Transport und Umzug erscheinen als ergänzender Service, nicht als gleichwertiger Schwerpunkt."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <div key={service.title}>
                <div className="mb-6">
                  <PlaceholderImageCard
                    badge={service.featured ? "Hauptservice" : "Service"}
                    title={service.title}
                    description={service.summary}
                    className="min-h-full"
                  />
                </div>
                <div className="-mt-8 px-2">
                  <div className="rounded-[30px] bg-white p-2 shadow-[0_24px_40px_rgba(15,45,82,0.10)]">
                    <div className="rounded-[26px] bg-brandCream p-4">
                      <p className="text-sm leading-7 text-slate-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <PlaceholderImageCard
              badge="Büroreinigung"
              title="Visueller Akzent für moderne Büro- und Empfangsbereiche"
              description="Dieser Bildblock ergänzt die bestehende Startseite um eine hochwertige Fläche für spätere reale Fotos aus Büro- und Unterhaltsreinigung."
              imageSrc="/images/office-cleaning.svg"
              imageAlt="Illustration einer modernen Büroreinigung"
              replacementNote="Austauschbar unter public/images/office-cleaning.svg"
            />
            <PlaceholderImageCard
              badge="Transport ergänzend"
              title="Sekundärer Visual-Block für Umzug und Transport"
              description="Transport bleibt ein zusätzlicher Service. Der Bildblock macht das sichtbar, ohne den Reinigungsfokus der Startseite zu verschieben."
              imageSrc="/images/transport-service.svg"
              imageAlt="Illustration eines Umzugs- und Transportservices"
              replacementNote="Austauschbar unter public/images/transport-service.svg"
            />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Warum Blitz Service"
              title="Vertrauenswürdig, gepflegt im Auftritt und konsequent in der Ausführung"
              description="Die Gestaltung wirkt wertig, die Leistung bleibt sachlich und professionell. Genau das erwarten Unternehmen, Hausverwaltungen und Privatkunden von einem seriösen Dienstleister."
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
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Vorher / Nachher"
              title="Ein professioneller Eindruck beginnt bei sichtbar gepflegten Flächen"
              description="Die folgenden Flächen sind bewusst als elegante Platzhalter für spätere echte Reinigungsbilder vorbereitet."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-amber-200/60 bg-[linear-gradient(180deg,#fff7e6,#ffffff)] p-6 shadow-[0_16px_34px_rgba(200,163,79,0.12)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandBlueSoft">Vorher</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Hohe Beanspruchung, sichtbarer Alltagsschmutz und uneinheitlicher Eindruck in stark genutzten Bereichen.
                </p>
              </div>
              <div className="rounded-[28px] border border-brandBlue/10 bg-[linear-gradient(180deg,#ffffff,#eef4fb)] p-6 shadow-[0_16px_34px_rgba(15,45,82,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandBlueSoft">Nachher</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Geordnete, saubere Flächen mit deutlich ruhigerem und professionellerem Gesamteindruck.
                </p>
              </div>
            </div>
          </div>
          <PlaceholderImageCard
            badge="Austauschbar"
            title="Platzhalter für hochwertige Reinigungsfotos"
            description="Hier kann später ein echtes Bild aus Büro-, Gebäude- oder Treppenhausreinigung eingesetzt werden, ohne die Struktur der Seite zu ändern."
            imageSrc="/images/building-cleaning.svg"
            imageAlt="Illustration eines hochwertigen Reinigungsbereichs"
            replacementNote="Empfohlen: horizontales Foto mit heller Architektur oder modernem Office-Kontext"
            overlay={
              <div className="rounded-2xl border border-brandBlue/10 bg-white/92 p-4 text-sm text-slate-600">
                Empfohlen: horizontale Bilder mit heller Architektur, gepflegten Böden, Glasflächen oder modernem Office-Kontext.
              </div>
            }
          />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Ablauf"
            title="So läuft die Zusammenarbeit"
            description="Vom Erstkontakt bis zur laufenden Betreuung bleibt der Prozess klar, schnell und nachvollziehbar."
            centered
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-[30px] border border-brandBlue/10 bg-white p-8 shadow-[0_20px_42px_rgba(15,45,82,0.08)]">
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

      <section className="bg-white py-24">
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

      <section className="py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[34px] bg-brandBlue px-8 py-10 text-white shadow-[0_28px_60px_rgba(15,45,82,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandGoldSoft">
              Premium Kontaktblock
            </p>
            <h2 className="mt-5 font-display text-4xl">
              Sie möchten ein gepflegtes Objekt und einen Dienstleister, der verbindlich liefert?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
              Dann sprechen wir über Ihr Objekt, Ihren Bedarf und einen sauberen Ablauf.
              Reinigung steht an erster Stelle, WhatsApp und Kontaktformular machen die
              Anfrage schnell und unkompliziert.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>
              <ButtonLink href={whatsappHref} variant="secondary">
                WhatsApp öffnen
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
