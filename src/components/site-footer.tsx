import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { business, fullAddress } from "@/config/business";
import { navigation } from "@/data/site-content";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-brandBlue/10 bg-brandBlue text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.25fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-3xl text-white">{business.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Professionelle Reinigungsleistungen mit Fokus auf Gebäude, Büros und
            regelmäßig gepflegte Immobilien. Transport- und Umzugsleistungen ergänzen
            das Angebot dort, wo Kunden eine koordinierte Gesamtlösung wünschen.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/76">
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brandGold" />
              {fullAddress}
            </p>
            <p className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-brandGold" />
              {business.phones.office}
            </p>
            <p className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-brandGold" />
              {business.email}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandGoldSoft">
            Navigation
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/72">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brandGold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandGoldSoft">
            Rechtliches
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/72">
            <li>
              <Link href="/impressum" className="hover:text-brandGold">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-brandGold">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brandGold">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/56">
        <Container>
          <p>
            &copy; {new Date().getFullYear()} {business.name}. Alle Rechte vorbehalten.
          </p>
        </Container>
      </div>
    </footer>
  );
}
