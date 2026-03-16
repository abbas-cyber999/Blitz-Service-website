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
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-brandGold focus:ring-offset-2",
        variant === "primary" &&
          "bg-brandGold text-brandBlue shadow-glow hover:bg-[#b8923f]",
        variant === "secondary" &&
          "border border-brandBlue/15 bg-white text-brandBlue hover:border-brandGold hover:text-brandBlueSoft",
        variant === "ghost" && "text-brandBlue hover:text-brandGold",
        className
      )}
    >
      {children}
    </Link>
  );
}
