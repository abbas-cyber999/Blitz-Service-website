import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { getCurrentSession } from "@/lib/auth";

type LoginPageProps = {
  searchParams: Promise<{
    next?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await getCurrentSession();

  if (session?.user?.id) {
    redirect("/dashboard");
  }

  const params = await searchParams;

  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-10">
      <div className="grid w-full gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
            Sign in
          </p>
          <h1 className="mt-4 font-display text-5xl text-white">Welcome back to DeutschHero.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Sign in to access your learner dashboard, future lesson progress, and protected
            admin tools if your account has administrator permissions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
            <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 hover:text-white">
              Back to homepage
            </Link>
            <Link href="/register" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 hover:text-white">
              Create account
            </Link>
          </div>
        </div>

        <div className="rounded-[36px] border border-white/10 bg-slate-950/70 p-8 backdrop-blur">
          <LoginForm redirectTo={params.next} />
        </div>
      </div>
    </section>
  );
}
