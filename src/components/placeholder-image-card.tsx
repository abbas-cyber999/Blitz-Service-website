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
  replacementNote?: string;
};

export function PlaceholderImageCard({
  title,
  description,
  badge,
  overlay,
  className,
  imageSrc,
  imageAlt,
  replacementNote
}: PlaceholderImageCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[30px] border border-brandBlue/10 bg-white shadow-[0_22px_45px_rgba(15,45,82,0.12)]",
        className
      )}
    >
      {/* Replace this image file with a real brand photo later if desired. */}
      <div className="relative min-h-[320px] bg-[radial-gradient(circle_at_top_left,rgba(200,163,79,0.32),transparent_28%),linear-gradient(135deg,#eef4fb_0%,#ffffff_45%,#f4efe4_100%)] p-8">
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(15,45,82,0.12))]" />
          <div className="absolute inset-y-0 right-0 w-2/5 bg-[linear-gradient(180deg,rgba(15,45,82,0.02),rgba(15,45,82,0.18))]" />
          <div className="absolute left-8 top-8 h-16 w-16 rounded-2xl border border-white/60 bg-white/70 shadow-[0_10px_20px_rgba(15,45,82,0.1)]" />
          <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full bg-brandBlue/12 blur-2xl" />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="max-w-xs">
            {badge ? (
              <span className="inline-flex rounded-full border border-brandGold/30 bg-brandGold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brandBlue">
                {badge}
              </span>
            ) : null}
          </div>
          <div className="max-w-md">
            <h3 className="font-display text-3xl text-brandBlue">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </div>
          {replacementNote ? (
            <div className="mt-4 inline-flex max-w-fit rounded-full border border-white/70 bg-white/85 px-4 py-2 text-xs font-medium text-brandBlue shadow-[0_8px_18px_rgba(15,45,82,0.08)]">
              {replacementNote}
            </div>
          ) : null}
          {overlay ? <div className="relative mt-6">{overlay}</div> : null}
        </div>
      </div>
    </div>
  );
}
