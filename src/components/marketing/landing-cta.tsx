import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function LandingCta() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <div className="surface-card-strong rounded-[38px] px-8 py-10 md:px-10 md:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--foreground-muted)]">
            Start with the foundation
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl text-balance text-[color:var(--foreground)] md:text-5xl">
            Create the account flow, shape the onboarding direction, and enter a dashboard built for growth.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--foreground-muted)]">
            Lingoria Phase 1 is ready as a polished foundation for the premium product vision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/signup">
              Create account <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/dashboard" variant="secondary">
              View dashboard
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
