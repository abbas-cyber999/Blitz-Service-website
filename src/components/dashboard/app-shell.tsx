import Link from "next/link";
import { BookOpen, Compass, LayoutDashboard, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  {
    label: "لوحة التعلّم",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    label: "الدروس",
    href: "/learn/english-for-arabic-speakers",
    icon: BookOpen
  },
  {
    label: "التهيئة",
    href: "/onboarding",
    icon: Compass
  },
  {
    label: "الدرس الحالي",
    href: "/learn/english-for-arabic-speakers/lessons/greetings",
    icon: Sparkles
  }
];

export function AppShell({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-[1600px] gap-4 px-4 py-4 lg:grid-cols-[280px_1fr] lg:px-6">
        <aside className="surface-card hidden rounded-[34px] p-5 lg:flex lg:flex-col">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary)] text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-semibold text-[color:var(--foreground)]">Lingoria</p>
              <p className="text-xs tracking-[0.2em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
                الواجهة العربية الأولى
              </p>
            </div>
          </div>

          <nav className="mt-10 space-y-2" dir="rtl" lang="ar">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-[color:var(--foreground-muted)] hover:bg-[color:var(--primary-soft)] hover:text-[color:var(--foreground)]"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-[24px] border border-[var(--border)] bg-[var(--background)]/80 p-4">
            <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
              اتجاه التعلّم
            </p>
            <p className="mt-3 text-sm leading-8 text-[color:var(--foreground)]" dir="rtl" lang="ar">
              واجهة عربية موجّهة للناطقين بالعربية وهم يتعلّمون الإنجليزية، مع قابلية للتوسع إلى مسارات عالمية لاحقًا.
            </p>
          </div>
        </aside>

        <div className="space-y-4">
          <header className="surface-card flex min-h-20 items-center justify-between rounded-[30px] px-5 md:px-6">
            <div>
              <p className="text-sm tracking-[0.18em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
                مساحة العمل
              </p>
              <p className="mt-1 text-lg font-medium text-[color:var(--foreground)]" dir="rtl" lang="ar">
                Lingoria لتعلّم الإنجليزية من العربية
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[color:var(--foreground)] hover:bg-[color:var(--secondary)]"
              >
                الرئيسية
              </Link>
              <ThemeToggle />
            </div>
          </header>

          <main id="main-content" className="surface-card rounded-[34px] p-5 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
