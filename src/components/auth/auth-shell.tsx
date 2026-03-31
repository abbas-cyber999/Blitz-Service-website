import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function AuthShell({
  eyebrow,
  title,
  description,
  children
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}>) {
  return (
    <main id="main-content" className="flex min-h-screen items-center py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <section className="surface-card-strong rounded-[38px] p-8 md:p-10" dir="rtl" lang="ar">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--foreground)]">
              Lingoria
            </Link>
            <ThemeToggle />
          </div>
          <p className="mt-10 text-sm tracking-[0.2em] text-[color:var(--foreground-muted)]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl text-balance text-[color:var(--foreground)]">{title}</h1>
          <p className="mt-4 max-w-xl text-sm leading-8 text-[color:var(--foreground-muted)]">{description}</p>

          <div className="mt-8 rounded-[24px] border border-[var(--border)] bg-[var(--background)]/80 p-5">
            <p className="text-sm leading-8 text-[color:var(--foreground)]">
              واجهة بسيطة للبدء، ثم تنتقل بعدها مباشرة إلى تعلّم الإنجليزية من العربية.
            </p>
          </div>
        </section>

        <section className="surface-card rounded-[38px] p-6 md:p-8 lg:p-10">{children}</section>
      </div>
    </main>
  );
}
