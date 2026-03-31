import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return (
    <div className={cn("surface-card rounded-[28px] p-6", className)} {...props}>
      {children}
    </div>
  );
}
