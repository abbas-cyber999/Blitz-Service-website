import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  compact?: boolean;
  priority?: boolean;
  subtitleClassName?: string;
  titleClassName?: string;
};

export function LogoMark({
  className,
  compact = false,
  priority = false,
  subtitleClassName,
  titleClassName
}: LogoMarkProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative block h-12 w-[9.5rem] shrink-0 sm:h-14 sm:w-[11rem]">
        <Image
          src="/logos/blitz-logo.jpeg"
          alt="Blitz Service GmbH Logo"
          fill
          priority={priority}
          className="object-contain"
          sizes="(max-width: 640px) 152px, 176px"
        />
      </span>
      {!compact ? (
        <span className="min-w-0">
          <span className={cn("block text-lg font-semibold tracking-[-0.03em] text-current", titleClassName)}>
            {business.name}
          </span>
          <span
            className={cn(
              "block text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]",
              subtitleClassName
            )}
          >
            Reinigung · Umzug · Transport
          </span>
        </span>
      ) : null}
      <span className="sr-only">{business.name}</span>
    </Link>
  );
}
