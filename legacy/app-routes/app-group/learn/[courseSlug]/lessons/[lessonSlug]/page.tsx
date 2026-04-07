import { notFound } from "next/navigation";
import { LessonPlayer } from "@/components/learning/lesson-player";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLessonBySlug, getNextLesson, getStoredLessonProgress } from "@/features/learning/selectors";
import { getCurrentUserId } from "@/lib/current-user";

export default async function LessonPage({
  params
}: Readonly<{
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}>) {
  const { courseSlug, lessonSlug } = await params;
  const userId = await getCurrentUserId();
  const result = await getLessonBySlug(courseSlug, lessonSlug);

  if (!result) {
    notFound();
  }

  const nextLesson = getNextLesson(result.course, result.lesson.id);
  const nextLessonHref = nextLesson ? `/learn/${result.course.slug}/lessons/${nextLesson.slug}` : undefined;
  const storedProgress = await getStoredLessonProgress(userId, result.lesson.id);

  return (
    <div className="space-y-6">
      <SectionHeading eyebrow={result.unit.title} title={result.lesson.title} description={result.lesson.description} />

      <LessonPlayer lesson={result.lesson} nextLessonHref={nextLessonHref} storedProgress={storedProgress} />
    </div>
  );
}
