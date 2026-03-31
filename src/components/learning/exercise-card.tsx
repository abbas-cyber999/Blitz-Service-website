import type { LessonExercise } from "@/features/learning/types";

const exerciseTypeLabels: Record<LessonExercise["type"], string> = {
  multiple_choice: "اختيار من متعدد",
  sentence_ordering: "رتّب الجملة",
  fill_in_the_blank: "أكمل الفراغ",
  write_translation: "اكتب بالإنجليزية",
  dialogue_completion: "أكمل الحوار",
  listening_comprehension: "الاستماع"
};

export function ExerciseCard({
  exercise,
  index,
  total,
  progressPercent,
  statusLabel,
  children
}: Readonly<{
  exercise: LessonExercise;
  index: number;
  total: number;
  progressPercent: number;
  statusLabel: string;
  children: React.ReactNode;
}>) {
  const primaryTitle = exercise.support?.titleArabic ?? exercise.title;
  const translatedPrompt = exercise.support?.promptArabic;
  const englishInstruction = exercise.support?.instructionsEnglish ?? exercise.instructions;
  const arabicInstruction = exercise.support?.instructionsArabic;

  return (
    <article className="surface-card-strong rounded-[34px] p-6 md:p-8">
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-[color:var(--secondary)]">
        <div
          className="h-full rounded-full bg-[color:var(--primary)] transition-[width] duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.2em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
            التمرين {index + 1} من {total}
          </p>
          <h2 className="mt-3 text-2xl text-[color:var(--foreground)]" dir="rtl" lang="ar">
            {primaryTitle}
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full bg-[color:var(--background)]/80 px-4 py-2 text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]"
            dir="rtl"
            lang="ar"
          >
            {statusLabel}
          </span>
          <span
            className="rounded-full bg-[color:var(--primary-soft)] px-4 py-2 text-xs tracking-[0.18em] text-[color:var(--primary)]"
            dir="rtl"
            lang="ar"
          >
            {exerciseTypeLabels[exercise.type]}
          </span>
        </div>
      </div>

      <div className="mt-5 rounded-[22px] border border-[var(--border)] bg-[var(--background)]/82 px-4 py-4">
        <p className="text-base leading-8 text-[color:var(--foreground)]" dir="ltr" lang="en">
          {exercise.prompt}
        </p>
        {translatedPrompt ? (
          <p className="mt-3 text-sm leading-8 text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
            {translatedPrompt}
          </p>
        ) : null}
      </div>

      {englishInstruction || arabicInstruction ? (
        <div className="mt-4 space-y-2 rounded-[20px] bg-[color:var(--background-muted)]/50 px-4 py-3">
          {englishInstruction ? (
            <p className="text-sm leading-7 text-[color:var(--foreground)]" dir="ltr" lang="en">
              {englishInstruction}
            </p>
          ) : null}
          {arabicInstruction ? (
            <p className="text-sm leading-8 text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
              {arabicInstruction}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6">{children}</div>
    </article>
  );
}
