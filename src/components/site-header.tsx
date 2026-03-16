"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business } from "@/config/business";
import { navigation } from "@/data/site-content";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brandBlue text-white shadow-[0_10px_30px_rgba(15,45,82,0.18)]">
      <Container className="flex min-h-[84px] items-center justify-between gap-4">
        <LogoMark className="text-white" />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/92 transition hover:text-brandGold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex rounded-xl border border-white/20 p-2 text-white hover:border-brandGold hover:text-brandGold lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Navigation schliessen" : "Navigation oeffnen"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-brandBlue transition-[max-height] duration-200 lg:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-4 py-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-white/92 hover:text-brandGold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="w-full" variant="primary">
            {business.ctaPrimary}
          </ButtonLink>
          <a href={`tel:${business.phone}`} className="text-sm font-semibold text-brandGold">
            {business.phone}
          </a>
        </Container>
      </div>
    </header>
  );
}
