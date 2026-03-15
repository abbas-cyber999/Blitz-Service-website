import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl rounded-[32px] border border-brand-blue/10 bg-white p-10 text-center shadow-card">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue-soft">
          404
        </p>
        <h1 className="mt-6 font-display text-5xl text-brand-blue">Seite nicht gefunden</h1>
        <p className="mt-6 text-base leading-8 text-slate-600">
          Die angeforderte Seite existiert nicht oder wurde verschoben. Nutzen Sie die
          Navigation oder kehren Sie zur Startseite zurueck.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Zur Startseite</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
