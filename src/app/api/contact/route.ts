import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";
import { hasDatabaseUrl, hasEmailConfig } from "@/lib/env";
import { getPrismaClient } from "@/lib/prisma";
import { contactFormSchema } from "@/lib/validations";

export const runtime = "nodejs";

const SUCCESS_MESSAGE =
  "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse({
      ...body,
      privacyAccepted: body.privacyAccepted === true || body.privacyAccepted === "true"
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Ungültige Formulardaten." },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ message: SUCCESS_MESSAGE }, { status: 200 });
    }

    let savedToDatabase = false;
    let sentByEmail = false;

    const prisma = getPrismaClient();

    if (prisma && hasDatabaseUrl()) {
      await prisma.contactMessage.create({
        data: {
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          subject: parsed.data.subject,
          service: parsed.data.service,
          message: parsed.data.message,
          privacyAccepted: parsed.data.privacyAccepted
        }
      });
      savedToDatabase = true;
    }

    if (hasEmailConfig()) {
      await sendContactEmails(parsed.data);
      sentByEmail = true;
    }

    if (!savedToDatabase && !sentByEmail) {
      return NextResponse.json(
        {
          error:
            "Das Kontaktformular ist aktuell noch nicht vollständig eingerichtet. Bitte hinterlegen Sie Datenbank- oder E-Mail-Konfiguration."
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ message: SUCCESS_MESSAGE });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Beim Versand ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
