import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFoundPage() {
  return (
    <main id="main-content" className="flex min-h-screen items-center py-16">
      <Container>
        <div className="surface-card-strong mx-auto max-w-2xl rounded-[36px] p-10 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--foreground-muted)]">
            Not found
          </p>
          <h1 className="mt-4 text-5xl text-[color:var(--foreground)]">This path does not exist.</h1>
          <p className="mt-5 text-base leading-8 text-[color:var(--foreground-muted)]">
            Return to the Lingoria foundation and continue from a valid entry point.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)]"
          >
            Go to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
