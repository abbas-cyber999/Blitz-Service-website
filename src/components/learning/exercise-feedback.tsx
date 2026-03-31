import { CheckCircle2, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExerciseFeedback({
  correct,
  title,
  message,
  explanation,
  momentumNote
}: Readonly<{
  correct: boolean;
  title: string;
  message: string;
  explanation?: string;
  momentumNote?: string;
}>) {
  return (
    <div
      className={cn(
        "rounded-[24px] border px-4 py-4",
        correct
          ? "border-emerald-200 bg-emerald-50/80 text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-100"
          : "border-amber-200 bg-amber-50/80 text-amber-950 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-100"
      )}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5">
          {correct ? <CheckCircle2 className="h-5 w-5" /> : <CircleAlert className="h-5 w-5" />}
        </span>
        <div>
          <p className="text-sm font-semibold" dir="rtl" lang="ar">
            {title}
          </p>
          <p className="mt-1 text-sm leading-7" dir="rtl" lang="ar">
            {message}
          </p>
          {correct ? (
            <p className="mt-2 text-sm leading-7 opacity-90" dir="rtl" lang="ar">
              صحيح. أحسنت في هذه الخطوة.
            </p>
          ) : (
            <p className="mt-2 text-sm leading-7 opacity-90" dir="rtl" lang="ar">
              حاول مرة أخرى، وانتبه إلى المعنى وترتيب الكلمات.
            </p>
          )}
          {explanation ? (
            <p className="mt-2 text-sm leading-7 opacity-90" dir="rtl" lang="ar">
              {explanation}
            </p>
          ) : null}
          {momentumNote ? (
            <p className="mt-3 text-xs tracking-[0.16em] opacity-80" dir="rtl" lang="ar">
              {momentumNote}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
