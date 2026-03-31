import Link from "next/link";
import { ArrowRight, BellRing, BookOpenCheck, Flame, PlayCircle } from "lucide-react";

export function DashboardLearningPanel({
  continueLearning,
  dailyProgress,
  recommendedLesson,
  reviewReminder
}: Readonly<{
  continueLearning: {
    label: string;
    path: string;
    progressPercent: number;
  } | null;
  dailyProgress: {
    minutesCompleted: number;
    minutesTarget: number;
    lessonsCompleted: number;
    lessonsTarget: number;
  };
  recommendedLesson: {
    lessonTitle: string;
    path: string;
    unitTitle: string;
    estimatedMinutes: number;
  } | null;
  reviewReminder: {
    label: string;
    detail: string;
    count: number;
  };
}>) {
  return (
    <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]" dir="rtl" lang="ar">
      <article className="surface-card-strong rounded-[34px] p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
            <PlayCircle className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">واصل الدرس</p>
            <h2 className="text-2xl text-[color:var(--foreground)]">
              {continueLearning?.label ?? "ابدأ من الدرس الأول"}
            </h2>
          </div>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-[color:var(--secondary)]">
          <div
            className="h-full rounded-full bg-[color:var(--primary)]"
            style={{ width: `${continueLearning?.progressPercent ?? 0}%` }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-[color:var(--foreground-muted)]">
          <span>التقدم</span>
          <span>{continueLearning?.progressPercent ?? 0}%</span>
        </div>

        <Link
          href={continueLearning?.path ?? "/learn/english-for-arabic-speakers/lessons/greetings"}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-medium text-white"
        >
          {continueLearning ? "تابع الآن" : "ابدأ الآن"} <ArrowRight className="h-4 w-4" />
        </Link>
      </article>

      <div className="grid gap-4">
        <article className="surface-card rounded-[28px] p-5">
          <div className="flex items-center gap-3">
            <Flame className="h-5 w-5 text-[color:var(--primary)]" />
            <h2 className="text-lg text-[color:var(--foreground)]">درس اليوم</h2>
          </div>
          <p className="mt-3 text-sm text-[color:var(--foreground)]">
            {recommendedLesson?.lessonTitle ?? "التحيات"}
          </p>
          {recommendedLesson ? (
            <Link href={recommendedLesson.path} className="mt-3 inline-flex text-sm text-[color:var(--primary)]">
              افتح الدرس
            </Link>
          ) : null}
        </article>

        <article className="surface-card rounded-[28px] p-5">
          <div className="flex items-center gap-3">
            <BookOpenCheck className="h-5 w-5 text-[color:var(--primary)]" />
            <h2 className="text-lg text-[color:var(--foreground)]">تقدم سريع</h2>
          </div>
          <p className="mt-3 text-sm leading-8 text-[color:var(--foreground-muted)]">
            {dailyProgress.minutesCompleted}/{dailyProgress.minutesTarget} دقيقة
          </p>
          <p className="text-sm leading-8 text-[color:var(--foreground-muted)]">
            {dailyProgress.lessonsCompleted}/{dailyProgress.lessonsTarget} دروس
          </p>
        </article>

        <article className="surface-card rounded-[28px] p-5">
          <div className="flex items-center gap-3">
            <BellRing className="h-5 w-5 text-[color:var(--primary)]" />
            <h2 className="text-lg text-[color:var(--foreground)]">المراجعة</h2>
          </div>
          <p className="mt-3 text-sm leading-8 text-[color:var(--foreground-muted)]">
            {reviewReminder.count > 0 ? `${reviewReminder.count} عناصر تحتاج مراجعة.` : "لا توجد مراجعة الآن."}
          </p>
        </article>
      </div>
    </section>
  );
}
