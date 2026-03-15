import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2",
        variant === "primary" &&
          "bg-brand-gold text-brand-blue shadow-glow hover:bg-[#b8923f]",
        variant === "secondary" &&
          "border border-brand-blue/15 bg-white text-brand-blue hover:border-brand-gold hover:text-brand-blue-soft",
        variant === "ghost" && "text-brand-blue hover:text-brand-blue-soft",
        className
      )}
    >
      {children}
    </Link>
  );
}
