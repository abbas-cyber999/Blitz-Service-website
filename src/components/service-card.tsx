import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  summary: string;
  description?: string;
  benefits: readonly string[];
  featured?: boolean;
};

export function ServiceCard({
  title,
  summary,
  description,
  benefits,
  featured = false
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "rounded-[28px] border border-brand-blue/10 bg-white p-8 shadow-card",
        featured && "relative overflow-hidden border-brand-gold/40 bg-brand-cream"
      )}
    >
      {featured ? (
        <span className="mb-5 inline-flex rounded-full bg-brand-gold/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          Schwerpunkt Reinigung
        </span>
      ) : null}
      <h3 className="font-display text-2xl text-brand-blue">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{summary}</p>
      {description ? <p className="mt-4 text-sm leading-7 text-slate-500">{description}</p> : null}
      <ul className="mt-6 space-y-3">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-sm leading-6 text-slate-700">
            <span className="mt-2 h-2 w-2 rounded-full bg-brand-gold" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <ButtonLink href="/contact" variant={featured ? "primary" : "secondary"} className="mt-8">
        Jetzt anfragen <ArrowRight className="ml-2" size={16} />
      </ButtonLink>
    </article>
  );
}
