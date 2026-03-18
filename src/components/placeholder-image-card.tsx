import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PlaceholderImageCardProps = {
  title: string;
  description: string;
  badge?: string;
  overlay?: ReactNode;
  className?: string;
};

export function PlaceholderImageCard({
  title,
  description,
  badge,
  overlay,
  className
}: PlaceholderImageCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[30px] border border-brandBlue/10 bg-white shadow-[0_22px_45px_rgba(15,45,82,0.12)]",
        className
      )}
    >
      {/* Replace this placeholder panel with a real brand image later. */}
      <div className="relative min-h-[280px] bg-[radial-gradient(circle_at_top_left,rgba(200,163,79,0.32),transparent_28%),linear-gradient(135deg,#eef4fb_0%,#ffffff_45%,#f4efe4_100%)] p-8">
        <div className="absolute inset-y-0 right-0 w-2/5 bg-[linear-gradient(180deg,rgba(15,45,82,0.02),rgba(15,45,82,0.16))]" />
        <div className="absolute left-8 top-8 h-16 w-16 rounded-2xl border border-white/60 bg-white/70 shadow-[0_10px_20px_rgba(15,45,82,0.1)]" />
        <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full bg-brandBlue/10 blur-2xl" />
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
          {overlay ? <div className="relative mt-6">{overlay}</div> : null}
        </div>
      </div>
    </div>
  );
}
