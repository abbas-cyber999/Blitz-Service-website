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
    <header className="bg-[#0f2d52] text-white">
      <Container className="flex min-h-[84px] items-center justify-between gap-4">
        <LogoMark />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-blue"
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
          className="inline-flex rounded-full border border-brand-blue/10 p-2 text-brand-blue lg:hidden"
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
          "overflow-hidden border-t border-brand-blue/10 transition-[max-height] duration-200 lg:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-4 py-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="w-full" variant="primary">
            {business.ctaPrimary}
          </ButtonLink>
          <a href={`tel:${business.phone}`} className="text-sm font-semibold text-brand-blue">
            {business.phone}
          </a>
        </Container>
      </div>
    </header>
  );
}
