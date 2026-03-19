"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/auth";
import { runEnglishA1Import } from "@/lib/content/english-a1-import";

export async function runEnglishA1ImportAction() {
  await requireAdminSession();

  try {
    await runEnglishA1Import();
    revalidatePath("/admin");
    revalidatePath("/admin/imports");
    revalidatePath("/dashboard");
    redirect("/admin/imports?status=success");
  } catch {
    revalidatePath("/admin");
    revalidatePath("/admin/imports");
    redirect("/admin/imports?status=failed");
  }
}
