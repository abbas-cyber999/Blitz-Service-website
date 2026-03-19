import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6 py-20 sm:px-8">
      <div className="w-full rounded-[32px] border border-brandBlue/10 bg-white p-10 text-center shadow-[0_20px_42px_rgba(15,45,82,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">404</p>
        <h1 className="mt-6 font-display text-5xl text-brandBlue">Seite nicht gefunden</h1>
        <p className="mt-6 text-base leading-8 text-slate-600">
          Die gewünschte Seite ist nicht verfügbar. Zurück zur Startseite von Blitz Service GmbH.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-2xl bg-brandGold px-6 py-3 text-sm font-semibold text-brandBlue shadow-[0_16px_30px_rgba(200,163,79,0.24)]"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
