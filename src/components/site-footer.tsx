import Link from "next/link";
import { business } from "@/config/business";
import { navigation } from "@/data/site-content";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-blue/10 bg-brand-cream">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-2xl text-brand-blue">{business.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Professionelle Reinigungsleistungen mit Fokus auf Gebaeude, Bueros und
            regelmaessig gepflegte Immobilien. Ergaenzend bieten wir Transport- und
            Umzugsleistungen an.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue-soft">
            Navigation
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-blue">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue-soft">
            Rechtliches
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <Link href="/impressum" className="hover:text-brand-blue">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-brand-blue">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-blue">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-brand-blue/10 py-4 text-center text-sm text-slate-500">
        <Container>
          <p>
            © {new Date().getFullYear()} {business.name}. Alle Rechte vorbehalten.
          </p>
        </Container>
      </div>
    </footer>
  );
}
