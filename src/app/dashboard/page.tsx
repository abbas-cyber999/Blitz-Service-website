import { BookOpen, Database, Shield, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app/app-shell";
import { requireUserSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await requireUserSession();

  const [courseCount, lessonCount, placementCount, importCount] = await Promise.all([
    prisma.course.count(),
    prisma.lesson.count(),
    prisma.placementTest.count(),
    prisma.importJob.count()
  ]);

  return (
    <AppShell
      session={session}
      title="Learner Dashboard"
      description="Your protected learner area is now live and ready to connect to imported German learning content."
    >
      <h1 className="mt-4 font-display text-4xl text-white">
        Hello, {session.user.name ?? "learner"}.
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
        This dashboard is the first real application surface for DeutschHero. It is session-aware,
        database-backed, and ready for the imported lesson system that arrives next.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Courses", value: courseCount, icon: BookOpen },
          { label: "Lessons", value: lessonCount, icon: Sparkles },
          { label: "Placement tests", value: placementCount, icon: Database },
          { label: "Import jobs", value: importCount, icon: Shield }
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
            <item.icon className="h-5 w-5 text-amber-300" />
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
            <p className="mt-2 font-display text-4xl text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
          <h2 className="text-xl font-semibold text-white">Current account</h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between gap-4">
              <dt>Email</dt>
              <dd>{session.user.email}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt>Role</dt>
              <dd>{session.user.role}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt>Target language</dt>
              <dd>{session.user.targetLanguageCode ?? "de"}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
          <h2 className="text-xl font-semibold text-white">What comes next</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>The first English A1 lesson content will be validated and imported into PostgreSQL.</li>
            <li>Protected lesson routes will render real lesson blocks instead of temporary copy.</li>
            <li>Progress tracking will start persisting lesson completion and exercise attempts.</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
