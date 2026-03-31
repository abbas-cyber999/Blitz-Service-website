import type { ListeningComprehensionExercise } from "@/features/learning/types";

export function ExerciseListeningPlaceholder({
  exercise
}: Readonly<{
  exercise: ListeningComprehensionExercise;
}>) {
  return (
    <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background)]/80 p-5">
      <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
        تمهيد للاستماع
      </p>
      {exercise.support?.promptArabic ? (
        <p className="mt-3 text-sm leading-8 text-[color:var(--foreground)]" dir="rtl" lang="ar">
          {exercise.support.promptArabic}
        </p>
      ) : null}
      <h3 className="mt-3 text-xl text-[color:var(--foreground)]">{exercise.audioLabel}</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-muted)]">{exercise.transcriptPreview}</p>
      <p className="mt-4 text-sm text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
        السؤال
      </p>
      <p className="mt-2 text-sm font-medium text-[color:var(--foreground)]">{exercise.promptQuestion}</p>
    </div>
  );
}
