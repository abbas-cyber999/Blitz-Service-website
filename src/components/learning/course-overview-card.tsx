import Link from "next/link";
import type { Course } from "@/features/learning/types";

export function CourseOverviewCard({
  course
}: Readonly<{
  course: Course;
}>) {
  return (
    <article className="surface-card-strong rounded-[34px] p-7 md:p-8">
      <p className="text-sm tracking-[0.22em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
        المسار الحالي
      </p>
      <h2 className="mt-4 text-4xl text-[color:var(--foreground)]">{course.title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
        {course.description}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-full bg-[color:var(--primary-soft)] px-4 py-2 text-sm text-[color:var(--primary)]">
          {course.sourceLanguage.nativeName}
        </span>
        <span className="rounded-full bg-[color:var(--secondary)] px-4 py-2 text-sm text-[color:var(--foreground)]">
          {course.targetLanguage.nativeName}
        </span>
      </div>
      <Link
        href={`/learn/${course.slug}/lessons/${course.units[0]?.lessons[0]?.slug ?? ""}`}
        className="mt-8 inline-flex items-center rounded-full border border-[var(--border)] px-5 py-3 text-sm text-[color:var(--foreground)] hover:bg-[color:var(--secondary)]"
      >
        افتح أول درس
      </Link>
    </article>
  );
}
