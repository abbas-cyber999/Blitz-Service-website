"use client";

import Link from "next/link";
import { useActionState } from "react";
import { SubmitButton } from "@/components/auth/submit-button";
import type { AuthActionState } from "@/server/actions/auth-actions";
import { registerAction } from "@/server/actions/auth-actions";

const initialState: AuthActionState = {
  error: null
};

type RegisterFormProps = {
  redirectTo?: string;
};

export function RegisterForm({ redirectTo }: RegisterFormProps) {
  const [state, formAction] = useActionState(registerAction, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="redirectTo" value={redirectTo ?? "/dashboard"} />

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-200">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/50"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/50"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-slate-200">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/50"
          placeholder="Create a secure password"
        />
      </div>

      {state.error ? (
        <div className="rounded-2xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
          {state.error}
        </div>
      ) : null}

      <SubmitButton label="Create account" pendingLabel="Creating account..." />

      <p className="text-sm text-slate-400">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-sky-200 hover:text-white">
          Sign in
        </Link>
      </p>
    </form>
  );
}
