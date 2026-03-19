"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="rounded-[28px] border border-brandBlue/10 bg-white p-8 shadow-[0_20px_42px_rgba(15,45,82,0.08)]"
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
        className="w-full rounded-2xl border border-brandBlue/10 bg-brandCream/50 px-4 py-3 text-sm outline-none focus:border-brandGold"
      />
      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={isPending}
        className="mt-6 inline-flex rounded-2xl bg-brandGold px-6 py-3 text-sm font-semibold text-brandBlue shadow-[0_16px_30px_rgba(200,163,79,0.24)]"
      >
        {isPending ? "Anmeldung..." : "Einloggen"}
      </button>
    </form>
  );
}
