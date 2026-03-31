import { ArrowRight, AudioWaveform, Languages, VenetianMask } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const highlights = [
  {
    title: "Context before memorization",
    text: "Language is introduced with social meaning and real usage, not isolated repetition.",
    icon: AudioWaveform
  },
  {
    title: "Arabic-native perspective",
    text: "The experience is designed around how Arabic speakers build confidence in English.",
    icon: Languages
  },
  {
    title: "Tone, nuance, and culture",
    text: "The product leaves room for expression, etiquette, and lived context from the start.",
    icon: VenetianMask
  }
];

export function LandingHero() {
  return (
    <section id="vision" className="py-12 md:py-20">
      <Container className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="surface-card-strong rounded-[40px] p-8 md:p-10 lg:p-12">
          <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--foreground-muted)]">
            Premium global language learning
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl text-balance text-[color:var(--foreground)] md:text-6xl">
            Learn English as a living language, not a checklist of fragments.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--foreground-muted)]">
            Lingoria is built for learners who want fluency with meaning. The foundation centers
            language, culture, usage, tone, and elegant product design for Arabic speakers learning
            English.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/signup">
              Create account <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/onboarding" variant="secondary">
              Explore onboarding
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4">
          <article className="surface-card rounded-[32px] p-6 md:p-7" dir="rtl" lang="ar">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
              رؤية البداية
            </p>
            <h2 className="mt-4 font-sans text-2xl font-semibold text-[color:var(--foreground)]">
              تعلّم الإنجليزية بطريقة راقية وواقعية
            </h2>
            <p className="mt-4 text-sm leading-8 text-[color:var(--foreground-muted)]">
              منصة تعتني باللغة والثقافة والنبرة والاستعمال اليومي، مع واجهة هادئة واحترافية.
            </p>
          </article>

          {highlights.map((item) => (
            <article key={item.title} className="surface-card rounded-[28px] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
                <item.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-2xl text-[color:var(--foreground)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
