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
  size?: "header" | "footer";
};

export function LogoMark({
  className,
  compact = false,
  priority = false,
  subtitleClassName,
  titleClassName,
  size = "header"
}: LogoMarkProps) {
  const imageWrapperClassName =
    size === "footer"
      ? "relative block h-9 w-[6.875rem] shrink-0 sm:h-10 sm:w-[6.875rem]"
      : "relative block h-12 w-[10.625rem] shrink-0 sm:h-14 sm:w-[10.625rem]";

  const imageSizes = size === "footer" ? "(max-width: 640px) 110px, 110px" : "(max-width: 640px) 170px, 170px";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)}>
      <span className={imageWrapperClassName}>
        <Image
          src="/images/logo-blitz.png"
          alt="Blitz Service GmbH Logo"
          fill
          priority={priority}
          className="object-contain"
          sizes={imageSizes}
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
