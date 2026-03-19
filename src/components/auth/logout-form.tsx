import { logoutAction } from "@/server/actions/auth-actions";

export function LogoutForm() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Sign out
      </button>
    </form>
  );
}
