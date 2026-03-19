import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { getPrismaClient } from "@/lib/prisma";
import { messageStatusSchema } from "@/lib/validations";

export const runtime = "nodejs";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Nicht autorisiert." }, { status: 401 });
  }

  const prisma = getPrismaClient();

  if (!prisma) {
    return NextResponse.json(
      { error: "Die Datenbank ist noch nicht konfiguriert." },
      { status: 503 }
    );
  }

  const body = await request.json();
  const parsed = messageStatusSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Ungültiger Status." }, { status: 400 });
  }

  const { id } = await context.params;

  await prisma.contactMessage.update({
    where: { id },
    data: { status: parsed.data.status }
  });

  return NextResponse.json({ success: true });
}
