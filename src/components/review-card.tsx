import { Quote, Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export function ReviewCard({ name, city, rating, text }: ReviewCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-brandBlue/10 bg-white p-8 shadow-[0_20px_45px_rgba(15,45,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,45,82,0.12)]">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandCream font-display text-xl text-brandBlue">
          {name.charAt(0)}
        </div>
        <div className="flex items-center gap-1 text-brandGold">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} size={17} fill="currentColor" />
          ))}
        </div>
      </div>
      <p className="mt-6 flex-1 text-base leading-7 text-slate-600">&bdquo;{text}&ldquo;</p>
      <div className="mt-6 flex items-center justify-between border-t border-brandBlue/8 pt-5">
        <p className="font-semibold text-brandBlue">
          {name} <span className="font-normal text-slate-500">– {city}</span>
        </p>
        <Quote className="h-5 w-5 text-brandBlue/18" />
      </div>
    </article>
  );
}
