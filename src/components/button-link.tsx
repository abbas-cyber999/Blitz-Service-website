import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark" | "whatsapp";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-brandGold focus:ring-offset-2 active:translate-y-0 active:shadow-none",
    "hover:-translate-y-0.5",
    variant === "primary" &&
      "bg-brandGold text-brandBlue shadow-[0_16px_30px_rgba(200,163,79,0.24)] hover:bg-[#d3ae59] hover:shadow-[0_18px_34px_rgba(200,163,79,0.28)]",
    variant === "secondary" &&
      "border border-white/20 bg-white/10 text-white shadow-[0_14px_30px_rgba(11,25,47,0.18)] hover:border-brandGold/60 hover:bg-white/14 hover:text-brandGold",
    variant === "dark" &&
      "bg-brandBlue text-white shadow-[0_18px_36px_rgba(15,45,82,0.22)] hover:bg-[#14385f] hover:shadow-[0_22px_40px_rgba(15,45,82,0.28)]",
    variant === "whatsapp" &&
      "bg-[#25D366] text-white shadow-[0_18px_36px_rgba(37,211,102,0.28)] hover:bg-[#1fb458] hover:shadow-[0_22px_40px_rgba(37,211,102,0.34)] focus:ring-[#25D366]",
    variant === "ghost" &&
      "text-brandBlue hover:bg-brandBlue/5 hover:text-brandBlueSoft",
    className
  );

  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
    >
      {children}
    </Link>
  );
}
