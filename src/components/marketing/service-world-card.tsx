import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

type ServiceWorldCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  accent?: "blue" | "gold";
};

export function ServiceWorldCard({
  eyebrow,
  title,
  description,
  href,
  ctaLabel,
  imageSrc,
  imageAlt,
  icon: Icon,
  accent = "blue"
}: ServiceWorldCardProps) {
  return (
    <article className="surface-card panel-enter group relative overflow-hidden rounded-[34px] p-5 md:p-6">
      <div
        className={`absolute inset-x-0 top-0 h-1 ${
          accent === "gold" ? "bg-[color:var(--accent)]" : "bg-[color:var(--primary)]"
        }`}
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
            <Icon className="h-4 w-4" />
            {eyebrow}
          </span>
          <h2 className="mt-5 text-3xl text-[color:var(--foreground)] md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-8 text-[color:var(--foreground-muted)] md:text-base">
            {description}
          </p>
          <div className="mt-6">
            <ButtonLink href={href} className="group-hover:-translate-y-0.5">
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] border border-[var(--border)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,45,82,0.02),rgba(15,45,82,0.24))]" />
        </div>
      </div>
    </article>
  );
}
