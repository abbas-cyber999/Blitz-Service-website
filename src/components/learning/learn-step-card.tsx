import { Ear, Languages, MessageSquareQuote } from "lucide-react";
import type { LearnStep } from "@/features/learning/types";

export function LearnStepCard({
  step,
  index,
  total
}: Readonly<{
  step: LearnStep;
  index: number;
  total: number;
}>) {
  return (
    <article className="surface-card-strong rounded-[34px] p-6 md:p-8" dir="rtl" lang="ar">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">
            تعلّم {index + 1} من {total}
          </p>
          <h2 className="mt-3 text-xl text-[color:var(--foreground)]">{step.titleArabic ?? "تعلّم"}</h2>
        </div>
        <span className="rounded-full bg-[color:var(--primary-soft)] px-4 py-2 text-xs tracking-[0.18em] text-[color:var(--primary)]">
          العبارة
        </span>
      </div>

      <div className="mt-6 rounded-[24px] border border-[var(--border)] bg-[var(--background)]/85 p-5" dir="ltr" lang="en">
        <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">English</p>
        <p className="mt-3 text-2xl text-[color:var(--foreground)]">{step.wordOrPhrase}</p>
        {step.pronunciation ? (
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[color:var(--foreground-muted)]">
            {step.pronunciation}
          </p>
        ) : null}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background)]/85 p-5">
          <div className="flex items-center gap-3">
            <Languages className="h-4 w-4 text-[color:var(--primary)]" />
            <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">المعنى</p>
          </div>
          <p className="mt-4 text-base leading-8 text-[color:var(--foreground)]">{step.meaningArabic}</p>
        </div>

        <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background)]/85 p-5">
          <div className="flex items-center gap-3">
            <MessageSquareQuote className="h-4 w-4 text-[color:var(--primary)]" />
            <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">مثال</p>
          </div>
          <p className="mt-4 text-base text-[color:var(--foreground)]" dir="ltr" lang="en">
            {step.exampleEnglish}
          </p>
          <p className="mt-3 text-sm leading-8 text-[color:var(--foreground-muted)]">{step.exampleArabic}</p>
        </div>
      </div>

      <div className="mt-4 rounded-[24px] border border-[var(--border)] bg-[var(--background)]/85 p-5">
        <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">الشرح</p>
        <p className="mt-3 text-sm leading-8 text-[color:var(--foreground)]">{step.explanationArabic}</p>
      </div>

      {step.listeningPrompt ? (
        <div className="mt-4 rounded-[24px] border border-[var(--border)] bg-[color:var(--primary-soft)] p-5">
          <div className="flex items-center gap-3">
            <Ear className="h-4 w-4 text-[color:var(--primary)]" />
            <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">النطق</p>
          </div>
          <p className="mt-3 text-sm leading-8 text-[color:var(--foreground)]">{step.listeningPrompt}</p>
        </div>
      ) : null}
    </article>
  );
}
