import crypto from "node:crypto";
import { cookies } from "next/headers";

const ADMIN_COOKIE = "blitz_admin_session";

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || "development-secret-change-me";
}

function sign(value: string) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createAdminToken() {
  const payload = `admin:${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidAdminToken(token?: string) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  return sign(payload) === signature;
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return isValidAdminToken(cookieStore.get(ADMIN_COOKIE)?.value);
}

export const adminCookieName = ADMIN_COOKIE;
