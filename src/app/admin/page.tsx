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
        checks the ADMIN role, and is ready for content import monitoring and later lesson inspection tools.
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

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/50 p-6">
        <h2 className="text-xl font-semibold text-white">Latest import activity</h2>
        {recentImports.length === 0 ? (
          <p className="mt-4 text-sm leading-7 text-slate-300">
            No import jobs exist yet. Phase 3 will add content validation and the first English A1 import pipeline.
          </p>
        ) : (
          <div className="mt-4 overflow-hidden rounded-3xl border border-white/10">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm text-slate-300">
              <thead className="bg-white/5 text-xs uppercase tracking-[0.18em] text-slate-400">
                <tr>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {recentImports.map((job) => (
                  <tr key={job.id}>
                    <td className="px-4 py-3">{job.type}</td>
                    <td className="px-4 py-3">{job.sourcePath}</td>
                    <td className="px-4 py-3">{job.status}</td>
                    <td className="px-4 py-3">{job.createdAt.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AppShell>
  );
}
