"use client";

import { useState, useTransition } from "react";
import { serviceOptions } from "@/data/site-content";

const initialState = {
  success: false,
  error: "",
  message: ""
};

export function ContactForm() {
  const [result, setResult] = useState(initialState);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="rounded-[32px] border border-brand-blue/10 bg-white p-8 shadow-card"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        startTransition(async () => {
          setResult(initialState);

          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
          });

          const data = await response.json();

          if (!response.ok) {
            setResult({
              success: false,
              error: data.error ?? "Ihre Anfrage konnte nicht gesendet werden.",
              message: ""
            });
            return;
          }

          form.reset();
          setResult({
            success: true,
            error: "",
            message:
              data.message ?? "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt."
          });
        });
      }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
        <Field label="Telefon" name="phone" type="tel" required />
        <Field label="Betreff" name="subject" required />
      </div>
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="service">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-2xl border border-brand-blue/10 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-gold"
          defaultValue={serviceOptions[0]}
          required
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded-3xl border border-brand-blue/10 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-gold"
          placeholder="Beschreiben Sie kurz Ihr Anliegen, den gewünschten Service und den Einsatzort."
        />
      </div>
      <div className="mt-6 hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-cream px-4 py-4 text-sm text-slate-700">
        <input
          name="privacyAccepted"
          type="checkbox"
          value="true"
          required
          className="mt-1 h-4 w-4 rounded border-brand-blue/20 text-brand-gold focus:ring-brand-gold"
        />
        <span>
          Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner
          Angaben zur Bearbeitung meiner Anfrage zu.
        </span>
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="mt-6 inline-flex rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-blue transition hover:bg-[#b8923f] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Anfrage wird gesendet..." : "Anfrage absenden"}
      </button>
      {result.error ? <p className="mt-4 text-sm text-red-600">{result.error}</p> : null}
      {result.success ? <p className="mt-4 text-sm text-emerald-700">{result.message}</p> : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", required = false }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-brand-blue/10 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-gold"
      />
    </div>
  );
}
