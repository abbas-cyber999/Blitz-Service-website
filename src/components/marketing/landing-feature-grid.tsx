import { Compass, LayoutTemplate, ShieldCheck, SquareChartGantt } from "lucide-react";
import { Container } from "@/components/ui/container";

const features = [
  {
    title: "Scalable architecture",
    text: "Separated route groups, reusable components, and feature folders make later phases easier to extend without redesigning the base.",
    icon: SquareChartGantt
  },
  {
    title: "Design-token foundation",
    text: "Shared tokens for spacing, radii, surfaces, and theme colors give Lingoria a coherent premium identity across future product areas.",
    icon: LayoutTemplate
  },
  {
    title: "RTL and LTR support",
    text: "Arabic content and future locale expansion are considered in typography, direction utilities, and component structure from the start.",
    icon: Compass
  },
  {
    title: "Production-oriented auth scaffolding",
    text: "Supabase auth clients, server actions, callback handling, and environment guards are ready for future session-aware product work.",
    icon: ShieldCheck
  }
];

export function LandingFeatureGrid() {
  return (
    <section id="foundation" className="py-20 md:py-28">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--foreground-muted)]">
            Foundation
          </p>
          <h2 className="mt-4 text-4xl text-balance text-[color:var(--foreground)] md:text-5xl">
            Phase 1 focuses on structure, visual language, and product readiness.
          </h2>
          <p className="mt-5 text-base leading-8 text-[color:var(--foreground-muted)]">
            This release establishes the system rather than the full learning engine, so future
            modules can grow on a stable premium base.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="surface-card rounded-[30px] p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-2xl text-[color:var(--foreground)]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-muted)]">{feature.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
