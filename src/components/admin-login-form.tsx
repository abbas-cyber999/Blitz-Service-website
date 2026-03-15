"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="rounded-[28px] border border-brand-blue/10 bg-white p-8 shadow-card"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setError("");

        startTransition(async () => {
          const response = await fetch("/api/admin/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
          });

          if (!response.ok) {
            const data = await response.json();
            setError(data.error ?? "Login fehlgeschlagen.");
            return;
          }

          router.push("/admin");
          router.refresh();
        });
      }}
    >
      <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">
        Admin-Passwort
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        className="w-full rounded-2xl border border-brand-blue/10 px-4 py-3 text-sm outline-none transition focus:border-brand-gold"
      />
      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={isPending}
        className="mt-6 inline-flex rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-blue"
      >
        {isPending ? "Anmeldung..." : "Einloggen"}
      </button>
    </form>
  );
}
