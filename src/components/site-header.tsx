"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { business } from "@/config/business";
import { navigation } from "@/data/site-content";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brandBlue/95 text-white backdrop-blur-xl">
      <div className="border-b border-white/10 bg-brandBlue">
        <Container className="hidden min-h-[42px] items-center justify-between text-xs text-white/75 lg:flex">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-brandGold" />
              Geschäftsführer: {business.phones.managingDirector}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-brandGold" />
              {business.email}
            </span>
          </div>
          <p className="font-medium text-white/80">Reinigung zuerst. Transport ergänzend.</p>
        </Container>
      </div>
      <Container className="flex min-h-[84px] items-center justify-between gap-4">
        <LogoMark className="text-white" />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-white/92 transition hover:text-brandGold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="secondary">
            {business.ctaSecondary}
          </ButtonLink>
          <ButtonLink href="/contact">{business.ctaPrimary}</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex rounded-2xl border border-white/20 bg-white/5 p-2.5 text-white hover:border-brandGold hover:text-brandGold lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-brandBlue transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-4 py-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-3 py-2 text-base font-medium text-white/92 hover:bg-white/5 hover:text-brandGold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="w-full" variant="primary">
            {business.ctaPrimary}
          </ButtonLink>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/78">
            <p>Sekretariat: {business.phones.office}</p>
            <p className="mt-1">{business.email}</p>
          </div>
        </Container>
      </div>
    </header>
  );
}
