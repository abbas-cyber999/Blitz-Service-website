import Link from "next/link";
import { Bell, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { business, phoneHref } from "@/config/business";
import { unreadNewsCount } from "@/data/news";

const links = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/reinigung", label: "Reinigung" },
  { href: "/umzug", label: "Umzug / Transport" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/contact", label: "Kontakt" }
] as const;

export function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--background)]/88 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary)] text-lg font-semibold text-white shadow-[var(--shadow-soft)]">
            B
          </span>
          <div>
            <p className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--foreground)]">
              {business.name}
            </p>
            <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">
              Reinigung · Umzug · Transport
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((item) => {
            if (item.href === "/news") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/72 px-3.5 py-2 text-sm font-medium text-[color:var(--foreground)] shadow-[0_10px_22px_rgba(15,76,129,0.08)] hover:border-[color:var(--accent)] hover:text-[color:var(--primary)]"
                >
                  <Bell className="h-4 w-4 text-[color:var(--accent)]" />
                  <span>News</span>
                  {unreadNewsCount > 0 ? (
                    <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[11px] font-semibold leading-none text-white">
                      {unreadNewsCount}
                    </span>
                  ) : null}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--foreground-muted)] hover:text-[color:var(--foreground)]"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={phoneHref}
            className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-sm font-semibold text-[color:var(--primary)] shadow-[0_10px_22px_rgba(15,76,129,0.08)] hover:border-[color:var(--accent)] hover:text-[color:var(--primary-strong)] md:inline-flex"
          >
            <Phone className="h-4 w-4 text-[color:var(--accent)]" />
            02841 6004743
          </a>
          <Link
            href="/news"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/72 text-[color:var(--foreground)] shadow-[0_10px_22px_rgba(15,76,129,0.08)] hover:border-[color:var(--accent)] hover:text-[color:var(--primary)] lg:hidden"
            aria-label={unreadNewsCount > 0 ? `News, ${unreadNewsCount} neue Meldung` : "News"}
          >
            <span className="relative inline-flex">
              <Bell className="h-4.5 w-4.5" />
              {unreadNewsCount > 0 ? (
                <span className="absolute -right-2 -top-2 inline-flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                  {unreadNewsCount}
                </span>
              ) : null}
            </span>
          </Link>
          <ButtonLink href="/contact" variant="secondary" className="hidden sm:inline-flex">
            {business.ctaSecondary}
          </ButtonLink>
          <ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
