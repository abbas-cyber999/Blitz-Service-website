import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  summary: string;
  featured?: boolean;
  icon?: LucideIcon;
};

export function ServiceCard({
  title,
  summary,
  featured = false,
  icon: Icon
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "rounded-[28px] border bg-white p-7 shadow-[0_16px_34px_rgba(15,45,82,0.07)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,45,82,0.10)]",
        featured ? "border-brandGold/35" : "border-brandBlue/10"
      )}
    >
      {Icon ? (
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brandBlue text-white shadow-[0_10px_20px_rgba(15,45,82,0.14)]">
          <Icon className="h-5 w-5" />
        </span>
      ) : null}
      <h3 className="mt-5 font-display text-2xl text-brandBlue">{title}</h3>
      <p className="mt-3 max-w-[34ch] text-sm leading-7 text-slate-600">{summary}</p>
    </article>
  );
}
