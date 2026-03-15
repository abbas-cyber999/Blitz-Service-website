import { ReactNode } from "react";
import { Container } from "@/components/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand-cream to-transparent" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue-soft">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-brand-blue sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
