import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderImageCardProps = {
  title: string;
  description: string;
  badge?: string;
  overlay?: ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PlaceholderImageCard({
  title,
  description,
  badge,
  overlay,
  className,
  imageSrc,
  imageAlt
}: PlaceholderImageCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[30px] border border-brandBlue/10 bg-white shadow-[0_22px_45px_rgba(15,45,82,0.12)]",
        className
      )}
    >
      <div className="relative min-h-[320px] bg-[linear-gradient(135deg,#eef4fb_0%,#ffffff_48%,#f4efe4_100%)] p-8">
        <div className="absolute inset-0">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(15,45,82,0.16))]" />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-end">
          <div className="max-w-md rounded-[28px] bg-white/88 p-6 shadow-[0_12px_28px_rgba(15,45,82,0.08)] backdrop-blur">
            {badge ? (
              <span className="inline-flex rounded-full border border-brandGold/30 bg-brandGold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brandBlue">
                {badge}
              </span>
            ) : null}
            <h3 className="mt-4 font-display text-3xl text-brandBlue">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </div>
          {overlay ? <div className="relative mt-6">{overlay}</div> : null}
        </div>
      </div>
    </div>
  );
}
