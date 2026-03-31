import type { MultipleChoiceExercise } from "@/features/learning/types";

export function ExerciseMultipleChoice({
  exercise,
  selectedOptionId,
  disabled,
  onSelect
}: Readonly<{
  exercise: MultipleChoiceExercise;
  selectedOptionId: string | null;
  disabled: boolean;
  onSelect: (optionId: string) => void;
}>) {
  return (
    <div className="grid gap-3">
      {exercise.options.map((option) => {
        const selected = selectedOptionId === option.id;

        return (
          <button
            key={option.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(option.id)}
            className={`rounded-[22px] border px-4 py-4 text-start text-sm leading-7 ${
              selected
                ? "border-[color:var(--primary)] bg-[color:var(--primary-soft)]"
                : "border-[var(--border)] bg-[var(--background)]/80 hover:border-[var(--border-strong)]"
            } disabled:cursor-default disabled:opacity-80`}
          >
            <p className="font-medium text-[color:var(--foreground)]">{option.label}</p>
            {option.supportLabel ? (
              <p className="mt-1 text-sm leading-7 text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
                {option.supportLabel}
              </p>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
