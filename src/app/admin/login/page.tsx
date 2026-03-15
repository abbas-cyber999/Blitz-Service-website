import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin-login-form";
import { Container } from "@/components/container";
import { isAdminAuthenticated } from "@/lib/auth";

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <section className="py-24">
      <Container className="max-w-lg">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue-soft">
            Admin
          </p>
          <h1 className="mt-4 font-display text-4xl text-brand-blue">Geschuetzter Bereich</h1>
        </div>
        <AdminLoginForm />
      </Container>
    </section>
  );
}
