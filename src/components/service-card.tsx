import { ArrowRight, LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  summary: string;
  description?: string;
  benefits: readonly string[];
  featured?: boolean;
  icon?: LucideIcon;
};

export function ServiceCard({
  title,
  summary,
  description,
  benefits,
  featured = false,
  icon: Icon
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group rounded-[30px] border bg-white p-8 shadow-[0_20px_45px_rgba(15,45,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(15,45,82,0.12)]",
        featured ? "border-brandGold/40 bg-[linear-gradient(180deg,#fffdf8,#ffffff)]" : "border-brandBlue/10"
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          {featured ? (
            <span className="mb-4 inline-flex rounded-full border border-brandGold/30 bg-brandGold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brandBlue">
              Schwerpunkt Reinigung
            </span>
          ) : null}
          <h3 className="font-display text-3xl text-brandBlue">{title}</h3>
        </div>
        {Icon ? (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandBlue text-white shadow-[0_14px_28px_rgba(15,45,82,0.18)]">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-base leading-7 text-slate-600">{summary}</p>
      {description ? <p className="mt-4 text-sm leading-7 text-slate-500">{description}</p> : null}
      <ul className="mt-6 space-y-3">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-sm leading-6 text-slate-700">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brandGold" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <ButtonLink href="/contact" variant={featured ? "primary" : "dark"} className="mt-8">
        Jetzt anfragen <ArrowRight className="h-4 w-4" />
      </ButtonLink>
    </article>
  );
}
