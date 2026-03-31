import type { SentenceOrderingExercise } from "@/features/learning/types";

export function ExerciseSentenceBuilder({
  exercise,
  selectedTokens,
  disabled,
  onAddToken,
  onReset
}: Readonly<{
  exercise: SentenceOrderingExercise;
  selectedTokens: string[];
  disabled: boolean;
  onAddToken: (token: string) => void;
  onReset: () => void;
}>) {
  const remainingTokens = [...exercise.tokens];

  selectedTokens.forEach((token) => {
    const index = remainingTokens.findIndex((item) => item === token);

    if (index !== -1) {
      remainingTokens.splice(index, 1);
    }
  });

  return (
    <div className="space-y-4">
      <div className="min-h-20 rounded-[24px] border border-dashed border-[var(--border-strong)] bg-[var(--background)]/65 p-4">
        <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
          الجملة التي تكوّنها
        </p>
        {exercise.support?.promptArabic ? (
          <p className="mt-2 text-sm leading-8 text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
            {exercise.support.promptArabic}
          </p>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedTokens.length > 0 ? (
            selectedTokens.map((token, index) => (
              <span
                key={`${token}-${index}`}
                className="rounded-full bg-[color:var(--primary-soft)] px-3 py-2 text-sm text-[color:var(--foreground)]"
              >
                {token}
              </span>
            ))
          ) : (
            <span className="text-sm text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
              {exercise.support?.instructionsArabic ?? "اضغط الكلمات بالترتيب لتكوين الجملة."}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {remainingTokens.map((token, index) => (
          <button
            key={`${token}-${index}`}
            type="button"
            disabled={disabled}
            onClick={() => onAddToken(token)}
            className="rounded-full border border-[var(--border)] bg-[var(--background)]/85 px-4 py-2 text-sm text-[color:var(--foreground)] hover:border-[var(--border-strong)] disabled:cursor-default disabled:opacity-70"
          >
            {token}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onReset}
        disabled={disabled || selectedTokens.length === 0}
        className="text-sm text-[color:var(--primary)] disabled:opacity-50"
        dir="rtl"
        lang="ar"
      >
        {exercise.support?.hintArabic ?? "أعد ترتيب الجملة"}
      </button>
    </div>
  );
}
