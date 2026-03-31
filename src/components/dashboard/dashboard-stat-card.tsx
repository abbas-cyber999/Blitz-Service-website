import type { LucideIcon } from "lucide-react";

export function DashboardStatCard({
  title,
  value,
  caption,
  icon: Icon
}: Readonly<{
  title: string;
  value: string;
  caption: string;
  icon: LucideIcon;
}>) {
  return (
    <article className="surface-card rounded-[28px] p-6">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-5 text-sm tracking-[0.18em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
        {title}
      </p>
      <h2 className="mt-3 text-2xl text-[color:var(--foreground)]">{value}</h2>
      <p className="mt-2 text-sm leading-8 text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
        {caption}
      </p>
    </article>
  );
}
