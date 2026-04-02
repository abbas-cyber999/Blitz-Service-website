import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { Container } from "@/components/ui/container";
import { PrivacyPreferencesButton } from "@/components/privacy-preferences";
import { business, fullAddress, phoneHref } from "@/config/business";

export function MarketingFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[color:var(--primary)] py-10 text-white">
      <Container className="grid gap-8 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div>
          <LogoMark compact size="footer" className="text-white" />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Professionelle Reinigung als Schwerpunkt, ergänzt durch strukturierte Umzugs- und
            Transportleistungen für private und gewerbliche Projekte.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/68">
            <p>{fullAddress}</p>
            <p>
              <a href={phoneHref} className="hover:text-[color:var(--accent)]">
                {business.phones.landline}
              </a>
            </p>
            <p>{business.email}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">
            Services
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/72">
            <li>
              <Link href="/reinigung" className="hover:text-[color:var(--accent)]">
                Reinigung
              </Link>
            </li>
            <li>
              <Link href="/umzug" className="hover:text-[color:var(--accent)]">
                Umzug / Transport
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[color:var(--accent)]">
                Alle Leistungen
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">
            Rechtliches
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/72">
            <li>
              <Link href="/contact" className="hover:text-[color:var(--accent)]">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-[color:var(--accent)]">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-[color:var(--accent)]">
                Datenschutz
              </Link>
            </li>
            <li>
              <PrivacyPreferencesButton light />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
