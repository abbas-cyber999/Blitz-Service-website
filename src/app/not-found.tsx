import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-20 sm:px-8">
      <div className="w-full rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">404</p>
        <h1 className="mt-6 font-display text-5xl text-white">Page not found</h1>
        <p className="mt-6 text-base leading-8 text-slate-300">
          This route is not part of the current DeutschHero foundation. Return to the homepage
          to continue with the platform rebuild.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
