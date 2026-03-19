import Link from "next/link";
import type { ReactNode } from "react";
import type { Session } from "next-auth";
import { BookOpen, LayoutDashboard, Shield } from "lucide-react";
import { LogoutForm } from "@/components/auth/logout-form";

type AppShellProps = {
  session: Session;
  title: string;
  description: string;
  children: ReactNode;
};

export function AppShell({ session, title, description, children }: AppShellProps) {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
      <header className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link href="/" className="font-display text-3xl text-white">
            DeutschHero
          </Link>
          <p className="mt-2 text-sm text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 hover:text-white"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 hover:text-white"
            >
              <BookOpen className="h-4 w-4" />
              Home
            </Link>
            {session.user.role === "ADMIN" ? (
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-amber-100 hover:bg-amber-300/20"
              >
                <Shield className="h-4 w-4" />
                Admin
              </Link>
            ) : null}
          </nav>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{session.user.name ?? "Learner"}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{session.user.role}</p>
            </div>
            <LogoutForm />
          </div>
        </div>
      </header>

      <section className="mt-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">{title}</p>
          {children}
        </div>
      </section>
    </div>
  );
}
