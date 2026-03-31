import { ArrowRightLeft, Captions, Ear, Landmark } from "lucide-react";
import { Container } from "@/components/ui/container";

const pillars = [
  {
    title: "Listening in context",
    icon: Ear
  },
  {
    title: "Expression and tone",
    icon: Captions
  },
  {
    title: "Cultural framing",
    icon: Landmark
  },
  {
    title: "Bidirectional design support",
    icon: ArrowRightLeft
  }
];

export function LearningDirectionStrip() {
  return (
    <section id="experience" className="py-10 md:py-14">
      <Container>
        <div className="surface-card overflow-hidden rounded-[32px] p-3">
          <div className="grid gap-3 md:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[24px] border border-[var(--border)] bg-[var(--background)]/80 p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
                  <pillar.icon className="h-4 w-4" />
                </span>
                <p className="mt-4 text-sm font-medium text-[color:var(--foreground)]">{pillar.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
