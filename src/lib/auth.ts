import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function getCurrentSession() {
  return auth();
}

export async function requireUserSession() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return session;
}

export async function requireAdminSession() {
  const session = await auth();

  if (!session?.user?.id || session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return session;
}
