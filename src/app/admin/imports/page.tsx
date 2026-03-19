import type { Prisma } from "@prisma/client";
import { AppShell } from "@/components/app/app-shell";
import { requireAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { runEnglishA1ImportAction } from "@/server/actions/import-actions";

type ImportsPageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

function readSummary(summaryJson: Prisma.JsonValue | null) {
  if (!summaryJson || typeof summaryJson !== "object" || Array.isArray(summaryJson)) {
    return null;
  }

  return summaryJson as {
    source?: string;
    importedLessons?: number;
    importedBlocks?: number;
    importedExercises?: number;
    importedQuestions?: number;
    warnings?: string[];
  };
}

export default async function AdminImportsPage({ searchParams }: ImportsPageProps) {
  const session = await requireAdminSession();
  const params = await searchParams;

  const [jobs, course, lessonCount, placementCount] = await Promise.all([
    prisma.importJob.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: 20
    }),
    prisma.course.findUnique({
      where: {
        slug: "de-en-a1"
      }
    }),
    prisma.lesson.count(),
    prisma.placementQuestion.count()
  ]);

  return (
    <AppShell
      session={session}
      title="Imports"
      description="Validate and import the first English A1 content slice into the DeutschHero platform."
    >
      <h1 className="mt-4 font-display text-4xl text-white">English A1 import pipeline</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
        This phase imports exactly three files: core lessons, grammar, and placement questions for
        English-speaking A1 learners. Every import creates tracked jobs so the migration stays clear and debuggable.
      </p>

      {params.status === "success" ? (
        <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
          English A1 import completed successfully.
        </div>
      ) : null}

      {params.status === "failed" ? (
        <div className="mt-6 rounded-2xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
          The import failed. Check the latest job entries below for error details.
        </div>
      ) : null}

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Course</p>
          <p className="mt-2 text-lg font-semibold text-white">{course?.title ?? "Not imported yet"}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Lessons in DB</p>
          <p className="mt-2 font-display text-4xl text-white">{lessonCount}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Placement questions</p>
          <p className="mt-2 font-display text-4xl text-white">{placementCount}</p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/50 p-6">
        <h2 className="text-xl font-semibold text-white">Run import</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Source files:
          <br />
          `lessons-de-en-a1.json`
          <br />
          `grammar-de-en-a1.json`
          <br />
          `placement-de-en.json`
        </p>
        <form action={runEnglishA1ImportAction} className="mt-6">
          <button
            type="submit"
            className="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            Run English A1 import
          </button>
        </form>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/50 p-6">
        <h2 className="text-xl font-semibold text-white">Import jobs</h2>
        {jobs.length === 0 ? (
          <p className="mt-4 text-sm leading-7 text-slate-300">
            No jobs have been recorded yet.
          </p>
        ) : (
          <div className="mt-6 space-y-4">
            {jobs.map((job) => {
              const summary = readSummary(job.summaryJson);

              return (
                <div key={job.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                        {job.type}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">{job.sourcePath}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-white">{job.status}</p>
                      <p className="text-xs text-slate-400">{job.createdAt.toLocaleString()}</p>
                    </div>
                  </div>

                  {summary ? (
                    <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                        <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">Lessons</span>
                        <span className="mt-2 block text-white">{summary.importedLessons ?? 0}</span>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                        <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">Blocks</span>
                        <span className="mt-2 block text-white">{summary.importedBlocks ?? 0}</span>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                        <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">Exercises</span>
                        <span className="mt-2 block text-white">{summary.importedExercises ?? 0}</span>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                        <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">Questions</span>
                        <span className="mt-2 block text-white">{summary.importedQuestions ?? 0}</span>
                      </div>
                    </div>
                  ) : null}

                  {summary?.warnings?.length ? (
                    <div className="mt-4 rounded-2xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
                      {summary.warnings.join(" | ")}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
}
