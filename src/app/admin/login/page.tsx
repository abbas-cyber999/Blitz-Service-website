import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
          Auth transition
        </p>
        <h1 className="mt-4 font-display text-4xl text-white">Credentials login arrives in Phase 2.</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Auth.js has been added as the new foundation. The real login and registration flow
          will be implemented next, on top of the Prisma-backed user model introduced in Phase 1.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
