import { Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export function ReviewCard({ name, city, rating, text }: ReviewCardProps) {
  return (
    <article className="rounded-[28px] border border-brand-blue/10 bg-white p-8 shadow-card">
      <div className="flex items-center gap-1 text-brand-gold">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={18} fill="currentColor" />
        ))}
      </div>
      <p className="mt-5 text-base leading-7 text-slate-600">{text}</p>
      <p className="mt-6 font-semibold text-brand-blue">
        {name} <span className="font-normal text-slate-500">- {city}</span>
      </p>
    </article>
  );
}
