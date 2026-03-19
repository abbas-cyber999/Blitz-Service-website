import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Building2, ClipboardCheck, Truck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { business } from "@/config/business";
import { homeSectionMedia } from "@/data/home-section-media";

const highlights = [
  {
    title: "Gebäudereinigung",
    text: "Sichtbar gepflegte Immobilien mit professionellem Gesamteindruck.",
    icon: Building2
  },
  {
    title: "Büroreinigung",
    text: "Saubere Arbeitsplätze und Empfangsbereiche für Unternehmen.",
    icon: BriefcaseBusiness
  },
  {
    title: "Treppenhausreinigung",
    text: "Kontinuierliche Sauberkeit in stark genutzten Gemeinschaftsflächen.",
    icon: ClipboardCheck
  },
  {
    title: "Transport / Umzug",
    text: "Ergänzende Unterstützung für koordinierte Einsätze aus einer Hand.",
    icon: Truck
  }
] as const;

export function HomeServiceShowcase() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
      <div className="max-w-2xl">
        <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brandGoldSoft">
          blitzservic.de · Reinigung zuerst
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
          Professionelle Reinigung mit verlässlicher Ausführung und starkem Auftritt.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
          Blitz Service GmbH steht für gepflegte Gebäude, saubere Arbeitsumgebungen und
          schnelle Rückmeldungen. Reinigung ist unser Hauptservice, Transport ergänzt
          unser Angebot dort, wo Projekte sinnvoll koordiniert werden sollen.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-white/12 bg-white/8 px-5 py-4 shadow-[0_14px_26px_rgba(11,25,47,0.14)] backdrop-blur"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brandGold text-brandBlue shadow-[0_12px_24px_rgba(200,163,79,0.18)]">
                <item.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-200">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contact" className="px-7 py-4 text-base">
            {business.ctaPrimary} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" className="px-7 py-4 text-base">
            Leistungen ansehen
          </ButtonLink>
        </div>
      </div>

      <div className="grid gap-4">
        <article className="overflow-hidden rounded-[34px] border border-white/14 bg-white/10 shadow-[0_28px_60px_rgba(10,25,46,0.22)] backdrop-blur">
          <div className="relative aspect-[16/10]">
            <Image
              src={homeSectionMedia.cleaning.src}
              alt={homeSectionMedia.cleaning.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,25,46,0.02),rgba(10,25,46,0.34))]" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/16 bg-brandBlue/82 px-5 py-4 shadow-[0_16px_30px_rgba(10,25,46,0.18)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandGoldSoft">
                Hauptservice
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                Gebäudereinigung und Büroreinigung mit professionellem Qualitätsanspruch.
              </p>
            </div>
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="overflow-hidden rounded-[28px] border border-white/12 bg-white shadow-[0_18px_36px_rgba(10,25,46,0.12)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={homeSectionMedia.office.src}
                alt={homeSectionMedia.office.alt}
                fill
                sizes="(max-width: 640px) 100vw, 26vw"
                className="object-cover"
              />
            </div>
            <div className="px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandBlueSoft">
                Büro und Objekt
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Moderne, gepflegte Flächen für einen vertrauenswürdigen Auftritt bei Kunden,
                Mitarbeitenden und Besuchern.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[28px] border border-white/12 bg-white shadow-[0_18px_36px_rgba(10,25,46,0.12)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={homeSectionMedia.transport.src}
                alt={homeSectionMedia.transport.alt}
                fill
                sizes="(max-width: 640px) 100vw, 26vw"
                className="object-cover"
              />
            </div>
            <div className="px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandBlueSoft">
                Transportservice
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Ergänzende Unterstützung für Umzug und Transport, sauber in den Gesamtservice
                eingebettet.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
