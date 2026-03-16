import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/email";
import { prisma } from "@/lib/prisma";
import { contactFormSchema } from "@/lib/validations";

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
      return NextResponse.json(
        { message: "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt." },
        { status: 200 }
      );
    }

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

    await sendContactNotification(parsed.data);

    return NextResponse.json({
      message: "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt."
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Beim Versand ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
