import Link from "next/link";
import { BookOpen, Database, FileCheck2, Users } from "lucide-react";
import { AppShell } from "@/components/app/app-shell";
import { requireAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const session = await requireAdminSession();

  const [userCount, courseCount, lessonCount, recentImports] = await Promise.all([
    prisma.user.count(),
    prisma.course.count(),
    prisma.lesson.count(),
    prisma.importJob.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: 5
    })
  ]);

  return (
    <AppShell
      session={session}
      title="Admin Overview"
      description="This protected admin space is now role-based and connected to the platform database."
    >
      <h1 className="mt-4 font-display text-4xl text-white">Platform administration</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
        This is the first real protected admin page for DeutschHero. It uses the Auth.js session,
        checks the ADMIN role, and now links directly to the first content import workflow.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Users", value: userCount, icon: Users },
          { label: "Courses", value: courseCount, icon: Database },
          { label: "Lessons", value: lessonCount, icon: BookOpen },
          { label: "Recent imports", value: recentImports.length, icon: FileCheck2 }
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
            <item.icon className="h-5 w-5 text-amber-300" />
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
            <p className="mt-2 font-display text-4xl text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
          <h2 className="text-xl font-semibold text-white">Import pipeline</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Phase 3 imports the first English A1 slice with validation, tracked jobs, and clean
            inspection output. This keeps the migration practical and debuggable.
          </p>
          <div className="mt-6">
            <Link
              href="/admin/imports"
              className="inline-flex rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Open imports page
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
          <h2 className="text-xl font-semibold text-white">Latest import activity</h2>
          {recentImports.length === 0 ? (
            <p className="mt-4 text-sm leading-7 text-slate-300">
              No import jobs exist yet. Run the English A1 import from the imports page.
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {recentImports.map((job) => (
                <div key={job.id} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-white">{job.type}</p>
                    <span className="text-xs uppercase tracking-[0.18em] text-slate-400">{job.status}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{job.sourcePath}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
