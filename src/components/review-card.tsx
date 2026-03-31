import { Quote, Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export function ReviewCard({ name, city, rating, text }: ReviewCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-[var(--border)] bg-white/94 p-7 shadow-[0_18px_42px_rgba(15,76,129,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,76,129,0.12)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-1 text-[color:var(--accent)]" aria-label={`${rating} von 5 Sternen`}>
            {Array.from({ length: rating }).map((_, index) => (
              <Star key={index} className="h-4.5 w-4.5 fill-current" />
            ))}
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--foreground-muted)]">
            Kundenstimme
          </p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--secondary)] text-[color:var(--primary)]">
          <Quote className="h-4.5 w-4.5" />
        </span>
      </div>

      <p className="mt-6 flex-1 text-base leading-8 text-[color:var(--foreground-muted)]">
        &bdquo;{text}&ldquo;
      </p>

      <div className="mt-6 border-t border-[var(--border)] pt-5">
        <p className="text-base font-semibold text-[color:var(--foreground)]">
          {name} <span className="font-normal text-[color:var(--foreground-muted)]">, {city}</span>
        </p>
      </div>
    </article>
  );
}
