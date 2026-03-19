import type { UserRole } from "@prisma/client";

export function isAdminRole(role?: UserRole | null) {
  return role === "ADMIN";
}
