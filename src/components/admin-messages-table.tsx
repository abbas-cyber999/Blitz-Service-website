"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { formatDate } from "@/lib/utils";

type Message = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "NEW" | "IN_PROGRESS" | "DONE";
  createdAt: Date;
};

type AdminMessagesTableProps = {
  messages: Message[];
};

export function AdminMessagesTable({ messages }: AdminMessagesTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function updateStatus(id: string, status: Message["status"]) {
    startTransition(async () => {
      await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      });
      router.refresh();
    });
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="rounded-[28px] border border-brand-blue/10 bg-white p-6 shadow-card">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl text-brand-blue">Kontaktanfragen</h2>
          <p className="mt-2 text-sm text-slate-500">
            Uebersicht aller ueber das Kontaktformular eingegangenen Nachrichten.
          </p>
        </div>
        <button
          type="button"
          onClick={logout}
          className="inline-flex rounded-full border border-brand-blue/10 px-5 py-2 text-sm font-semibold text-brand-blue"
        >
          Abmelden
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-4">
          <thead>
            <tr className="text-left text-xs uppercase tracking-[0.18em] text-slate-500">
              <th className="px-3">Kontakt</th>
              <th className="px-3">Betreff</th>
              <th className="px-3">Nachricht</th>
              <th className="px-3">Status</th>
              <th className="px-3">Datum</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id} className="rounded-2xl bg-brand-cream text-sm text-slate-700">
                <td className="rounded-l-2xl px-3 py-4 align-top">
                  <p className="font-semibold text-brand-blue">{message.name}</p>
                  <p>{message.email}</p>
                  <p>{message.phone}</p>
                </td>
                <td className="px-3 py-4 align-top">
                  <p className="font-semibold text-brand-blue">{message.subject}</p>
                </td>
                <td className="max-w-md px-3 py-4 align-top">{message.message}</td>
                <td className="px-3 py-4 align-top">
                  <select
                    aria-label={`Status fuer ${message.name}`}
                    className="rounded-xl border border-brand-blue/10 bg-white px-3 py-2"
                    defaultValue={message.status}
                    disabled={isPending}
                    onChange={(event) =>
                      updateStatus(message.id, event.target.value as Message["status"])
                    }
                  >
                    <option value="NEW">new</option>
                    <option value="IN_PROGRESS">in progress</option>
                    <option value="DONE">done</option>
                  </select>
                </td>
                <td className="rounded-r-2xl px-3 py-4 align-top text-slate-500">
                  {formatDate(new Date(message.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
