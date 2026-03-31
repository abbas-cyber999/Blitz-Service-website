import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-2xl border border-[var(--border)] bg-[color:var(--background)]/80 px-4 text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--foreground-muted)] focus:border-[color:var(--primary)] focus:ring-4 focus:ring-[color:var(--primary-soft)]",
        className
      )}
      {...props}
    />
  );
}
