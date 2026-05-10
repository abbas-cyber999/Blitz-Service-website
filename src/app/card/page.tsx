import type { Metadata } from "next";
import {
  ArrowUpRight,
  Building2,
  Download,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { Container } from "@/components/ui/container";

const company = {
  name: "Blitz Service GmbH",
  services: "Reinigung · Transport · Umzug · Entrümpelung",
  addressLines: ["Zwickauer Str. 23", "47443 Moers", "Germany"],
  phone: "02841 6004743",
  phoneHref: "tel:+4928416004743",
  whatsapp: "01796995057",
  whatsappHref: "https://wa.me/491796995057",
  email: "oth@blitzservice.net",
  emailHref: "mailto:oth@blitzservice.net",
  website: "https://www.blitzservice.net",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Zwickauer%20Str.%2023%2C%2047443%20Moers%2C%20Germany"
} as const;

const qrCodeUrl = "/blitz-service-card-qr.svg";

const actionLinks = [
  {
    label: "WhatsApp",
    href: company.whatsappHref,
    icon: MessageCircle,
    detail: company.whatsapp,
    featured: true
  },
  {
    label: "Anrufen",
    href: company.phoneHref,
    icon: Phone,
    detail: company.phone,
    featured: false
  },
  {
    label: "E-Mail",
    href: company.emailHref,
    icon: Mail,
    detail: company.email,
    featured: false
  },
  {
    label: "Website",
    href: company.website,
    icon: Globe2,
    detail: "blitzservice.net",
    featured: false
  },
  {
    label: "Google Maps",
    href: company.mapsHref,
    icon: MapPin,
    detail: "Route öffnen",
    featured: false
  }
] as const;

export const metadata: Metadata = {
  title: "Digitale Visitenkarte | Blitz Service GmbH",
  description: "Digitale Kontaktkarte der Blitz Service GmbH für Reinigung, Transport, Umzug und Entrümpelung."
};

export default function DigitalBusinessCardPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    email: company.email,
    telephone: company.phone,
    url: company.website,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressLines[0],
      postalCode: "47443",
      addressLocality: "Moers",
      addressCountry: "DE"
    },
    makesOffer: company.services.split(" · ").map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service
      }
    }))
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#071423] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative min-h-screen py-5 sm:py-8 lg:py-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#1d8fff]/24 blur-3xl" />
          <div className="absolute right-[-7rem] top-40 h-80 w-80 rounded-full bg-[#d4a63a]/18 blur-3xl" />
          <div className="absolute bottom-[-9rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#2f6da5]/24 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_30px)] opacity-[0.08]" />
        </div>

        <Container className="relative z-10 max-w-6xl">
          <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-7 lg:rounded-[2.5rem] lg:p-9">
              <div className="absolute right-6 top-6 text-[#d4a63a]/30">
                <Zap className="h-16 w-16 drop-shadow-[0_0_22px_rgba(212,166,58,0.35)]" />
              </div>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4a63a]/70 to-transparent" />

              <LogoMark
                compact
                priority
                className="relative z-10 w-fit rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-white shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
              />

              <div className="relative z-10 mt-10 max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#d4a63a]/35 bg-[#d4a63a]/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e7c979]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Premium Service
                </p>
                <h1 className="mt-5 text-5xl leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                  {company.name}
                </h1>
                <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-[#d9e8f8] sm:text-xl">
                  {company.services}
                </p>
              </div>

              <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#0f2742]/70 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.24)]">
                  <div className="flex items-center gap-3 text-[#e7c979]">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em]">Adresse</span>
                  </div>
                  <address className="mt-4 not-italic leading-7 text-[#edf6ff]">
                    {company.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#0f2742]/70 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.24)]">
                  <div className="flex items-center gap-3 text-[#e7c979]">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em]">Direktkontakt</span>
                  </div>
                  <div className="mt-4 space-y-2 text-sm leading-6 text-[#d9e8f8]">
                    <p>{company.phone}</p>
                    <p>{company.whatsapp} WhatsApp</p>
                    <p>{company.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0b1d31]/88 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-5 lg:rounded-[2.5rem]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#1d8fff]/28 blur-3xl" />
              <div className="absolute -bottom-16 left-4 h-44 w-44 rounded-full bg-[#d4a63a]/16 blur-3xl" />

              <div className="relative rounded-[1.55rem] border border-white/10 bg-white/[0.055] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e7c979]">Kontakt</p>
                    <h2 className="mt-2 text-2xl text-white">Schnell verbinden</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4a63a] text-[#071423] shadow-[0_0_34px_rgba(212,166,58,0.34)]">
                    <Zap className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {actionLinks.map((action) => {
                    const Icon = action.icon;

                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        target={action.href.startsWith("http") ? "_blank" : undefined}
                        rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                        className={
                          action.featured
                            ? "group flex items-center justify-between gap-4 rounded-2xl border border-[#d4a63a]/35 bg-[#d4a63a] px-4 py-4 text-[#071423] shadow-[0_18px_44px_rgba(212,166,58,0.28)] hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(212,166,58,0.36)]"
                            : "group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.065] px-4 py-4 text-white hover:-translate-y-1 hover:border-[#d4a63a]/45 hover:bg-white/[0.095]"
                        }
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span
                            className={
                              action.featured
                                ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#071423]/12"
                                : "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#16395f] text-[#e7c979]"
                            }
                          >
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block font-semibold">{action.label}</span>
                            <span className={action.featured ? "block truncate text-sm text-[#173552]" : "block truncate text-sm text-[#b9cde2]"}>
                              {action.detail}
                            </span>
                          </span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    );
                  })}

                  <a
                    href="/blitz-service-gmbh.vcf"
                    download="blitz-service-gmbh.vcf"
                    className="group flex items-center justify-center gap-3 rounded-2xl border border-[#1d8fff]/35 bg-[#123b63] px-4 py-4 font-semibold text-white shadow-[0_18px_44px_rgba(29,143,255,0.16)] hover:-translate-y-1 hover:border-[#d4a63a]/45 hover:bg-[#16466f]"
                  >
                    <Download className="h-5 w-5 text-[#e7c979]" />
                    Kontakt speichern
                  </a>
                </div>
              </div>

              <div className="relative mt-4 grid gap-4 rounded-[1.55rem] border border-white/10 bg-white/[0.045] p-4 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:items-center sm:p-5">
                <div className="mx-auto aspect-square w-36 overflow-hidden rounded-3xl border border-[#d4a63a]/28 bg-[#f7fbff] p-3 shadow-[0_18px_42px_rgba(0,0,0,0.24)] sm:w-full">
                  <img
                    src={qrCodeUrl}
                    alt="QR-Code zur digitalen Blitz Service GmbH Visitenkarte"
                    className="h-full w-full rounded-2xl object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#e7c979]">
                    <Building2 className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em]">QR-ready</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">Scan & Connect</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
