export default function AdminPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
          Admin foundation
        </p>
        <h1 className="mt-4 font-display text-4xl text-white">DeutschHero admin is being rebuilt.</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          Phase 1 replaces the old custom admin surface with the new platform foundation.
          The proper authenticated admin dashboard, import operations, and lesson inspection
          pages will be built in later phases on top of Auth.js and the new Prisma schema.
        </p>
      </div>
    </section>
  );
}
