import nodemailer from "nodemailer";

export async function sendContactNotification(payload: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
}) {
  const server = process.env.EMAIL_SERVER;
  const from = process.env.EMAIL_FROM;
  const to = process.env.COMPANY_NOTIFICATION_EMAIL;

  if (!server || !from || !to) {
    return;
  }

  const transporter = nodemailer.createTransport(server);

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `Neue Anfrage: ${payload.subject}`,
    text: [
      `Name: ${payload.name}`,
      `E-Mail: ${payload.email}`,
      `Telefon: ${payload.phone}`,
      `Service: ${payload.service}`,
      "",
      payload.message
    ].join("\n")
  });
}
