import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-[color:var(--accent)] text-[color:var(--primary)] shadow-[0_16px_30px_rgba(212,166,58,0.24)] hover:bg-[#e0b44b] hover:shadow-[0_20px_36px_rgba(212,166,58,0.3)]",
  secondary:
    "border border-[var(--border-strong)] bg-[color:var(--background-elevated)] text-[color:var(--foreground)] shadow-[0_14px_28px_rgba(15,76,129,0.08)] hover:bg-[color:var(--secondary)] hover:border-[color:var(--accent)]/40",
  ghost:
    "text-[color:var(--foreground)] hover:bg-[color:var(--primary-soft)] hover:text-[color:var(--primary)]"
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium outline-none transition duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60",
        buttonVariants[variant],
        className
      )}
      {...props}
    />
  );
}
