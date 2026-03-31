import { cn } from "@/lib/utils";

function hasArabic(value: string) {
  return /[\u0600-\u06FF]/.test(value);
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}>) {
  const rtl = hasArabic(`${eyebrow} ${title} ${description}`);

  return (
    <div className={cn("max-w-3xl", className)}>
      <p
        className="text-sm tracking-[0.2em] text-[color:var(--foreground-muted)]"
        dir={rtl ? "rtl" : undefined}
        lang={rtl ? "ar" : undefined}
      >
        {eyebrow}
      </p>
      <h1
        className="mt-3 text-3xl text-balance text-[color:var(--foreground)] md:text-4xl"
        dir={rtl ? "rtl" : undefined}
        lang={rtl ? "ar" : undefined}
      >
        {title}
      </h1>
      <p
        className="mt-3 text-sm leading-8 text-[color:var(--foreground-muted)]"
        dir={rtl ? "rtl" : undefined}
        lang={rtl ? "ar" : undefined}
      >
        {description}
      </p>
    </div>
  );
}
