import { Check, Globe, MessageSquareQuote, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "لغتك الأساسية",
    text: "العربية"
  },
  {
    title: "اللغة التي ستتعلمها",
    text: "الإنجليزية"
  },
  {
    title: "طريقة التعلّم",
    text: "شرح واضح وتمرين عملي"
  }
];

const focusItems = ["تحيات بسيطة", "تقديم النفس", "أسئلة قصيرة"];

export default function OnboardingPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="التهيئة"
        title="لنبدأ بشكل بسيط"
        description="هذا المسار موجّه للناطقين بالعربية الذين يبدأون تعلّم الإنجليزية من الأساس."
      />

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="surface-card rounded-[32px] p-6" dir="rtl" lang="ar">
          <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">المسار الحالي</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="rounded-full bg-[color:var(--primary-soft)] px-4 py-2 text-sm font-medium text-[color:var(--primary)]">
              العربية
            </div>
            <div className="rounded-full bg-[color:var(--secondary)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)]">
              الإنجليزية
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {focusItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[20px] border border-[var(--border)] bg-[var(--background)]/80 px-4 py-3"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm text-[color:var(--foreground)]">{item}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-4">
          {steps.map((step, index) => {
            const icons = [Globe, MessageSquareQuote, Sparkles];
            const Icon = icons[index];

            return (
              <article key={step.title} className="surface-card rounded-[28px] p-5" dir="rtl" lang="ar">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">الخطوة {index + 1}</p>
                    <h2 className="mt-2 text-xl text-[color:var(--foreground)]">{step.title}</h2>
                    <p className="mt-2 text-sm leading-8 text-[color:var(--foreground-muted)]">{step.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
