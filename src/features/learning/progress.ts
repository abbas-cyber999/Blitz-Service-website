import type { LessonProgressSnapshot } from "@/features/learning/types";

export type ExerciseAttemptResult = {
  exerciseIndex: number;
  correct: boolean;
  durationSeconds: number;
};

export function buildLessonProgressSnapshot({
  attempts,
  totalExercises,
  baseCompletedExercises = 0,
  baseCorrectAnswers = 0,
  baseTimeSpentSeconds = 0,
  previousStreak = 0
}: {
  attempts: ExerciseAttemptResult[];
  totalExercises: number;
  baseCompletedExercises?: number;
  baseCorrectAnswers?: number;
  baseTimeSpentSeconds?: number;
  previousStreak?: number;
}): LessonProgressSnapshot {
  const dedupedAttempts = new Map<number, ExerciseAttemptResult>();

  attempts.forEach((attempt) => {
    dedupedAttempts.set(attempt.exerciseIndex, attempt);
  });

  const currentAttempts = [...dedupedAttempts.values()];
  const completedExercises = baseCompletedExercises + currentAttempts.length;
  const correctAnswers = baseCorrectAnswers + currentAttempts.filter((attempt) => attempt.correct).length;
  const accuracy = totalExercises === 0 ? 0 : Math.round((correctAnswers / totalExercises) * 100);
  const timeSpentSeconds =
    baseTimeSpentSeconds + currentAttempts.reduce((sum, attempt) => sum + attempt.durationSeconds, 0);
  const lessonCompleted = completedExercises >= totalExercises && totalExercises > 0;
  const streakUpdate = lessonCompleted ? previousStreak + 1 : previousStreak;

  return {
    completedExercises,
    totalExercises,
    correctAnswers,
    accuracy,
    timeSpentSeconds,
    streakUpdate,
    lessonCompleted
  };
}
