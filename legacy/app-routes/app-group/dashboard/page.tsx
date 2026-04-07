import { DashboardLearningPanel } from "@/components/dashboard/dashboard-learning-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDashboardLearningState } from "@/features/learning/dashboard-data";
import { getCurrentUserId } from "@/lib/current-user";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  try {
    const userId = await getCurrentUserId();
    const learningState = await getDashboardLearningState(userId);

    if (!learningState) {
      return null;
    }

    const recommendedLesson = learningState.recommendedLesson
      ? {
          lessonTitle: learningState.recommendedLesson.lessonTitle,
          unitTitle: learningState.recommendedLesson.unitTitle,
          estimatedMinutes: learningState.recommendedLesson.estimatedMinutes,
          path: `/learn/${learningState.recommendedLesson.courseSlug}/lessons/${learningState.recommendedLesson.lessonSlug}`
        }
      : null;

    return (
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Lernübersicht"
          title="Startpunkt"
          description="Dieser Bereich bleibt technisch verfügbar, wird aber nicht statisch vorgerendert, solange die zugehörige Lernumgebung separat weiterentwickelt wird."
        />

        <DashboardLearningPanel
          continueLearning={learningState.continueLearning}
          dailyProgress={learningState.dailyProgress}
          recommendedLesson={recommendedLesson}
          reviewReminder={learningState.reviewReminder}
        />
      </div>
    );
  } catch {
    return (
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Hinweis"
          title="Bereich derzeit nicht aktiv"
          description="Die Lernumgebung ist in dieser Projektphase nicht verfügbar. Die Blitz-Service-Website bleibt davon unberührt."
        />
      </div>
    );
  }
}
