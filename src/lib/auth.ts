import { auth } from "@/auth";

export async function getCurrentSession() {
  return auth();
}

export async function requireUserSession() {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  return session;
}

export async function requireAdminSession() {
  const session = await auth();

  if (!session?.user?.id || session.user.role !== "ADMIN") {
    return null;
  }

  return session;
}
