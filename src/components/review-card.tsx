import { Quote, Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export function ReviewCard({ name, city, rating, text }: ReviewCardProps) {
  return (
    <article className="group rounded-[28px] border border-brandBlue/10 bg-white p-8 shadow-[0_20px_45px_rgba(15,45,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,45,82,0.12)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-brandGold">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} size={18} fill="currentColor" />
          ))}
        </div>
        <Quote className="h-6 w-6 text-brandBlue/20" />
      </div>
      <p className="mt-5 text-base leading-7 text-slate-600">{text}</p>
      <p className="mt-6 font-semibold text-brandBlue">
        {name} <span className="font-normal text-slate-500">– {city}</span>
      </p>
    </article>
  );
}
