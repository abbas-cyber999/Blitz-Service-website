import { z } from "zod";
import { serviceOptions } from "@/data/site-content";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein.").max(120),
  email: z.string().email("Bitte geben Sie eine gueltige E-Mail-Adresse ein."),
  phone: z.string().min(6, "Bitte geben Sie eine Telefonnummer ein.").max(50),
  subject: z.string().min(3, "Bitte geben Sie einen Betreff ein.").max(150),
  service: z.enum(serviceOptions),
  message: z.string().min(20, "Bitte beschreiben Sie Ihr Anliegen etwas genauer.").max(4000),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "Bitte stimmen Sie der Datenschutzerklaerung zu." })
  }),
  website: z.string().max(0).optional().default("")
});

export const adminLoginSchema = z.object({
  password: z.string().min(1, "Bitte geben Sie das Passwort ein.")
});

export const messageStatusSchema = z.object({
  status: z.enum(["NEW", "IN_PROGRESS", "DONE"])
});
