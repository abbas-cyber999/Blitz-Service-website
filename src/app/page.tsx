import Link from "next/link";
import { BookOpen, Database, Languages, LockKeyhole, Route, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 sm:px-8 lg:px-10">
      <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
        <div>
          <p className="font-display text-2xl tracking-wide text-white">DeutschHero</p>
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80">Phase 1 Foundation</p>
        </div>
        <nav className="flex items-center gap-3 text-sm text-slate-300">
          <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
            Home
          </Link>
          <a
            href="#roadmap"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Roadmap
          </a>
        </nav>
      </header>

      <section className="grid flex-1 gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Serious German learning platform
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            Building DeutschHero into a production-ready platform for learning German.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Phase 1 establishes the foundation: a Next.js full-stack app, Prisma schema,
            PostgreSQL integration, Auth.js groundwork, and a safe staging area for the
            legacy lesson content that will be imported in later phases.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/admin"
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Admin Foundation
            </Link>
            <Link
              href="/api/auth/signin"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Auth.js Endpoint
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
          <div className="grid gap-4">
            {[
              {
                icon: Database,
                title: "Platform schema",
                text: "Core models for users, courses, lessons, blocks, placement tests, progress, and imports."
              },
              {
                icon: LockKeyhole,
                title: "Auth foundation",
                text: "Auth.js credentials groundwork with Prisma-backed users and admin-ready roles."
              },
              {
                icon: BookOpen,
                title: "Legacy content preserved",
                text: "Existing JSON lesson content is staged safely for structured import instead of manual rewrites."
              },
              {
                icon: Languages,
                title: "Multilingual-ready",
                text: "The new schema keeps native and target language fields explicit from the first milestone."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5"
              >
                <item.icon className="h-5 w-5 text-amber-300" />
                <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="pb-12">
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex items-center gap-3">
            <Route className="h-5 w-5 text-sky-200" />
            <h2 className="font-display text-3xl text-white">Current implementation track</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Phase 1: foundation, schema, auth groundwork, content staging",
              "Phase 2: login, sessions, protected routes, admin role handling",
              "Phase 3: validation and import pipeline for the first English A1 slice",
              "Phase 4+: learner experience, admin inspection, polish, then advanced features"
            ].map((step) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 text-sm leading-7 text-slate-300">
                {step}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-sm leading-7 text-emerald-100">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0" />
            <p>
              This phase does not implement the full learner product yet. It establishes a clean,
              scalable base so the next phases can build the real platform without rework.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
