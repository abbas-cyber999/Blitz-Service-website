import Link from "next/link";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)}>
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brandGold/40 bg-gradient-to-br from-brandBlue to-brandBlueSoft shadow-card">
        <span className="font-display text-2xl font-semibold text-white">B</span>
        <span className="absolute -right-2 h-10 w-2 rotate-[32deg] rounded-full bg-brandGold" />
      </div>
      <div>
        <p className="font-display text-2xl uppercase tracking-[0.12em] text-current">
          Blitz
        </p>
        <p className="-mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-brandGold">
          Service GmbH
        </p>
      </div>
      <span className="sr-only">{business.name}</span>
    </Link>
  );
}
