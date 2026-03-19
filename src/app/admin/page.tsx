import { redirect } from "next/navigation";
import { AdminMessagesTable } from "@/components/admin-messages-table";
import { Container } from "@/components/container";
import { hasDatabaseUrl } from "@/lib/env";
import { isAdminAuthenticated } from "@/lib/auth";
import { getPrismaClient } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const prisma = getPrismaClient();

  if (!prisma || !hasDatabaseUrl()) {
    return (
      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="rounded-[28px] border border-brandBlue/10 bg-white p-8 shadow-[0_20px_42px_rgba(15,45,82,0.08)]">
            <h1 className="font-display text-3xl text-brandBlue">Adminbereich</h1>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Die Datenbank ist noch nicht konfiguriert. Hinterlegen Sie zuerst
              <code className="mx-1 rounded bg-brandCream px-2 py-1 text-xs">DATABASE_URL</code>
              in Ihrer Umgebung, damit Kontaktanfragen gespeichert und hier angezeigt werden können.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  return (
    <section className="py-16">
      <Container>
        <AdminMessagesTable messages={messages} />
      </Container>
    </section>
  );
}
