import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { adminCookieName, createAdminToken } from "@/lib/auth";
import { hasAdminAuthConfig } from "@/lib/env";
import { adminLoginSchema } from "@/lib/validations";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = adminLoginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  if (!hasAdminAuthConfig()) {
    return NextResponse.json(
      { error: "Der Adminbereich ist noch nicht vollständig konfiguriert." },
      { status: 503 }
    );
  }

  if (parsed.data.password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Ungültiges Passwort." }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(adminCookieName, createAdminToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return NextResponse.json({ success: true });
}
