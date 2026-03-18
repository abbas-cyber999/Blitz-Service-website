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
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,45,82,0.06),transparent_46%)]" />
      <Container className="relative">
        <div className="max-w-4xl rounded-[34px] border border-brandBlue/10 bg-white/80 px-8 py-10 shadow-[0_26px_60px_rgba(15,45,82,0.10)] backdrop-blur sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-brandBlue sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
