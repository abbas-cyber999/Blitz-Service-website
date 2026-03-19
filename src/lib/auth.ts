import crypto from "node:crypto";
import { cookies } from "next/headers";
import { hasAdminSessionSecret, isProduction } from "@/lib/env";

const ADMIN_COOKIE = "blitz_admin_session";

function getSecret() {
  if (process.env.ADMIN_SESSION_SECRET) {
    return process.env.ADMIN_SESSION_SECRET;
  }

  if (!isProduction()) {
    return "development-secret-change-me";
  }

  return null;
}

function sign(value: string) {
  const secret = getSecret();

  if (!secret) {
    throw new Error("Missing ADMIN_SESSION_SECRET.");
  }

  return crypto.createHmac("sha256", secret).update(value).digest("hex");
}

export function createAdminToken() {
  const payload = `admin:${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidAdminToken(token?: string) {
  if (!token) return false;

  const secret = getSecret();
  if (!secret) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return signature === expected;
}

export async function isAdminAuthenticated() {
  if (isProduction() && !hasAdminSessionSecret()) {
    return false;
  }

  const cookieStore = await cookies();
  return isValidAdminToken(cookieStore.get(ADMIN_COOKIE)?.value);
}

export const adminCookieName = ADMIN_COOKIE;
