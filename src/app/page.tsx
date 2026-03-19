import Link from "next/link";
import { BookOpen, Languages, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { LogoutForm } from "@/components/auth/logout-form";
import { getCurrentSession } from "@/lib/auth";

export default async function HomePage() {
  const session = await getCurrentSession();

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 sm:px-8 lg:px-10">
      <header className="flex flex-col gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-2xl tracking-wide text-white">DeutschHero</p>
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80">Modern German learning platform</p>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
            Home
          </Link>
          {session?.user ? (
            <>
              <Link href="/dashboard" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                Dashboard
              </Link>
              {session.user.role === "ADMIN" ? (
                <Link href="/admin" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                  Admin
                </Link>
              ) : null}
              <LogoutForm />
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-amber-300 px-5 py-2 font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </header>

      <section className="grid flex-1 gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Production-first rebuild
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            Learn German with a platform built for structure, progress, and long-term growth.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            DeutschHero is moving from a static website to a real learning platform with
            authentication, database-backed progress, lesson imports, and a professional admin workflow.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {session?.user ? (
              <Link
                href="/dashboard"
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                Open dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/register"
                  className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                >
                  Create account
                </Link>
                <Link
                  href="/login"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
          <div className="grid gap-4">
            {[
              {
                icon: LockKeyhole,
                title: "Real account system",
                text: "Learners can register, sign in, and access protected product routes with server-backed sessions."
              },
              {
                icon: BookOpen,
                title: "Lesson platform foundation",
                text: "The schema already supports courses, lessons, blocks, exercises, placement, and progress."
              },
              {
                icon: Languages,
                title: "Multilingual direction",
                text: "The platform keeps native and target language fields explicit so imported content can scale cleanly."
              },
              {
                icon: ShieldCheck,
                title: "Admin-ready roles",
                text: "Admin access is role-checked, not handled with a temporary one-off cookie anymore."
              },
              {
                icon: Sparkles,
                title: "Long-term roadmap",
                text: "This architecture is deliberately preparing for gamification, analytics, audio, and richer learning systems."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                <item.icon className="h-5 w-5 text-amber-300" />
                <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
