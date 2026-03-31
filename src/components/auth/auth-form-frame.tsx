"use client";

import { useActionState } from "react";
import Link from "next/link";
import type { AuthActionState } from "@/features/auth/actions";
import { SubmitButton } from "@/components/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: AuthActionState = {
  status: "idle"
};

export function AuthFormFrame({
  title,
  description,
  action,
  fields,
  submitLabel,
  footerText,
  footerLinkLabel,
  footerHref
}: Readonly<{
  title: string;
  description: string;
  action: (state: AuthActionState, formData: FormData) => Promise<AuthActionState>;
  fields: Array<{ name: string; label: string; type: string; autoComplete?: string }>;
  submitLabel: string;
  footerText: string;
  footerLinkLabel: string;
  footerHref: string;
}>) {
  const [state, formAction] = useActionState(action, initialState);

  return (
    <div dir="rtl" lang="ar">
      <p className="text-sm tracking-[0.2em] text-[color:var(--foreground-muted)]">الحساب</p>
      <h2 className="mt-3 text-3xl text-[color:var(--foreground)]">{title}</h2>
      <p className="mt-3 max-w-xl text-sm leading-8 text-[color:var(--foreground-muted)]">{description}</p>

      <form action={formAction} className="mt-8 space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required
            />
          </div>
        ))}

        {state.message ? (
          <p
            className="rounded-2xl border border-[var(--border)] bg-[color:var(--primary-soft)] px-4 py-3 text-sm text-[color:var(--foreground)]"
            aria-live="polite"
          >
            {state.message}
          </p>
        ) : null}

        <SubmitButton>{submitLabel}</SubmitButton>
      </form>

      <p className="mt-6 text-sm text-[color:var(--foreground-muted)]">
        {footerText}{" "}
        <Link href={footerHref} className="font-medium text-[color:var(--primary)] hover:text-[color:var(--primary-strong)]">
          {footerLinkLabel}
        </Link>
      </p>
    </div>
  );
}
