import { notFound } from "next/navigation";
import { CourseOverviewCard } from "@/components/learning/course-overview-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCourseBySlug } from "@/features/learning/selectors";

export default async function CoursePage({
  params
}: Readonly<{
  params: Promise<{ courseSlug: string }>;
}>) {
  const { courseSlug } = await params;
  const course = await getCourseBySlug(courseSlug);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="بنية المسار"
        title={course.title}
        description="الوحدات والدروس والمواقف والتمارين المعيارية منظَّمة بحيث تتوسع اللغات والمحتويات الجديدة من دون تغيير محرّك التعلّم."
      />

      <CourseOverviewCard course={course} />

      <section className="grid gap-6">
        {course.units.map((unit: (typeof course.units)[number]) => (
          <article key={unit.id} className="surface-card rounded-[30px] p-6 md:p-7">
            <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]">{unit.title}</p>
            <p className="mt-3 max-w-3xl text-sm leading-8 text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
              {unit.description}
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {unit.lessons.map((lesson: (typeof unit.lessons)[number]) => (
                <div key={lesson.id} className="rounded-[24px] border border-[var(--border)] bg-[var(--background)]/80 p-5">
                  <h2 className="text-xl text-[color:var(--foreground)]">{lesson.title}</h2>
                  <p className="mt-2 text-sm leading-8 text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
                    {lesson.description}
                  </p>
                  <p className="mt-4 text-xs tracking-[0.16em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
                    {lesson.estimatedMinutes} دقيقة • {lesson.exercises.length} تمارين
                  </p>
                  <ButtonLink
                    href={`/learn/${course.slug}/lessons/${lesson.slug}`}
                    variant="secondary"
                    className="mt-4"
                  >
                    افتح الدرس
                  </ButtonLink>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
