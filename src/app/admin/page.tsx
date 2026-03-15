import { redirect } from "next/navigation";
import { AdminMessagesTable } from "@/components/admin-messages-table";
import { Container } from "@/components/container";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
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
