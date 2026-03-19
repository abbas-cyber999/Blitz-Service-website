import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin-login-form";
import { Container } from "@/components/container";
import { hasAdminAuthConfig } from "@/lib/env";
import { isAdminAuthenticated } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <section className="py-24">
      <Container className="max-w-lg">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlueSoft">
            Admin
          </p>
          <h1 className="mt-4 font-display text-4xl text-brandBlue">Geschützter Bereich</h1>
          {!hasAdminAuthConfig() ? (
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Der Adminbereich ist noch nicht vollständig eingerichtet. Setzen Sie
              <code className="mx-1 rounded bg-brandCream px-2 py-1 text-xs">ADMIN_PASSWORD</code>
              und
              <code className="mx-1 rounded bg-brandCream px-2 py-1 text-xs">ADMIN_SESSION_SECRET</code>
              in Ihrer Umgebung.
            </p>
          ) : null}
        </div>
        <AdminLoginForm />
      </Container>
    </section>
  );
}
