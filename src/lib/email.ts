import nodemailer from "nodemailer";
import { business } from "@/config/business";

type ContactEmailPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
};

const COMPANY_EMAIL = "info@blitzservic.de";
const WEBSITE_URL = "www.blitzservic.de";

function formatTimestamp(date: Date) {
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Berlin"
  }).format(date);
}

function createTransporter() {
  const server = process.env.EMAIL_SERVER;

  if (!server) {
    return null;
  }

  return nodemailer.createTransport(server);
}

export async function sendContactEmails(payload: ContactEmailPayload) {
  const from = process.env.EMAIL_FROM;
  const transporter = createTransporter();

  if (!from || !transporter) {
    return;
  }

  const submittedAt = new Date();
  const timestamp = formatTimestamp(submittedAt);

  await Promise.all([
    transporter.sendMail({
      from,
      to: COMPANY_EMAIL,
      replyTo: payload.email,
      subject: "Neue Anfrage über die Website",
      text: [
        "Neue Anfrage über das Kontaktformular",
        "",
        `Name: ${payload.name}`,
        `E-Mail: ${payload.email}`,
        `Telefon: ${payload.phone}`,
        `Zeitpunkt: ${timestamp}`,
        "",
        "Nachricht:",
        payload.message,
        "",
        `Gesendet über:`,
        WEBSITE_URL
      ].join("\n")
    }),
    transporter.sendMail({
      from,
      to: payload.email,
      replyTo: COMPANY_EMAIL,
      subject: "Ihre Anfrage bei Blitz Service GmbH",
      text: [
        "Hallo,",
        "",
        "vielen Dank für Ihre Anfrage bei Blitz Service GmbH.",
        "",
        "Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.",
        "",
        "In der Regel antworten wir innerhalb von 24 Stunden.",
        "",
        "Bei dringenden Anliegen können Sie uns auch direkt über WhatsApp oder telefonisch kontaktieren.",
        "",
        "Mit freundlichen Grüßen",
        "",
        "Blitz Service GmbH",
        COMPANY_EMAIL,
        business.phones.landline,
        WEBSITE_URL
      ].join("\n")
    })
  ]);
}
