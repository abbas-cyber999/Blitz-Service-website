"use client";

import { ArrowRight, CheckCircle2, Clock3, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useMemo, useRef, useState } from "react";
import { ExerciseCard } from "@/components/learning/exercise-card";
import { ExerciseFeedback } from "@/components/learning/exercise-feedback";
import { ExerciseInput } from "@/components/learning/exercise-input";
import { ExerciseListeningPlaceholder } from "@/components/learning/exercise-listening-placeholder";
import { ExerciseMultipleChoice } from "@/components/learning/exercise-multiple-choice";
import { ExerciseSentenceBuilder } from "@/components/learning/exercise-sentence-builder";
import { LearnStepCard } from "@/components/learning/learn-step-card";
import { Button } from "@/components/ui/button";
import { buildLessonProgressSnapshot, type ExerciseAttemptResult } from "@/features/learning/progress";
import type { Lesson, LessonExercise, StoredLessonProgress } from "@/features/learning/types";

type FeedbackState = {
  correct: boolean;
  title: string;
  message: string;
  momentumNote: string;
};

function normalizeAnswer(value: string) {
  return value.trim().toLowerCase().replace(/[.!?]/g, "");
}

function getFeedbackCopy(correct: boolean, currentIndex: number, totalExercises: number) {
  const isFinal = currentIndex === totalExercises - 1;

  if (correct) {
    return {
      title: isFinal ? "إجابة صحيحة. اكتمل الدرس." : "إجابة صحيحة.",
      message: isFinal ? "أكملت آخر تمرين بنجاح." : "أحسنت. هذه هي الإجابة المناسبة.",
      momentumNote: isFinal ? "تمّ الدرس" : "تابع"
    };
  }

  return {
    title: "حاول مرة أخرى.",
    message: "اقتربت من الإجابة، لكن تحتاج تعديلًا بسيطًا.",
    momentumNote: "أعد المحاولة"
  };
}

export function LessonPlayer({
  lesson,
  nextLessonHref,
  storedProgress
}: Readonly<{
  lesson: Lesson;
  nextLessonHref?: string;
  storedProgress?: StoredLessonProgress | null;
}>) {
  const router = useRouter();
  const totalExercises = lesson.exercises.length;
  const persistedCompletedExercises = storedProgress?.lessonCompleted ? 0 : storedProgress?.completedExercises ?? 0;
  const persistedCorrectAnswers = storedProgress?.lessonCompleted ? 0 : storedProgress?.correctAnswers ?? 0;
  const persistedTimeSpent = storedProgress?.lessonCompleted ? 0 : storedProgress?.timeSpentSeconds ?? 0;
  const initialIndex = storedProgress?.lessonCompleted
    ? 0
    : Math.min(storedProgress?.lastExerciseIndex ?? 0, Math.max(totalExercises - 1, 0));

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mode, setMode] = useState<"learn" | "exercise">(
    persistedCompletedExercises === 0 &&
      lesson.learnSteps.some((step, index) => (step.exerciseIndex ?? index) === initialIndex)
      ? "learn"
      : "exercise"
  );
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [sentenceTokens, setSentenceTokens] = useState<string[]>([]);
  const [textAnswer, setTextAnswer] = useState("");
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [attempts, setAttempts] = useState<ExerciseAttemptResult[]>([]);
  const [transitionKey, setTransitionKey] = useState(0);
  const [isPersisting, setIsPersisting] = useState(false);
  const [currentLearnStepIndex, setCurrentLearnStepIndex] = useState(0);
  const exerciseStartRef = useRef<number | null>(null);
  const exercise = lesson.exercises[currentIndex];
  const learnStepsForExercise = lesson.learnSteps.filter(
    (step, index) => (step.exerciseIndex ?? index) === currentIndex
  );
  const learnStep = learnStepsForExercise[currentLearnStepIndex] ?? null;

  const progress = useMemo(
    () =>
      buildLessonProgressSnapshot({
        attempts,
        totalExercises,
        baseCompletedExercises: persistedCompletedExercises,
        baseCorrectAnswers: persistedCorrectAnswers,
        baseTimeSpentSeconds: persistedTimeSpent,
        previousStreak: storedProgress?.streakCount ?? 0
      }),
    [attempts, persistedCompletedExercises, persistedCorrectAnswers, persistedTimeSpent, storedProgress, totalExercises]
  );

  useEffect(() => {
    exerciseStartRef.current = Date.now();
  }, [currentIndex, mode]);

  const progressPercent =
    totalExercises === 0 ? 0 : Math.round(((progress.completedExercises + (feedback ? 1 : 0)) / totalExercises) * 100);
  const statusLabel = mode === "learn" ? "تعلّم" : feedback ? (feedback.correct ? "أحسنت" : "أعد المحاولة") : "تدرّب";

  function resetInteractionState() {
    setSelectedOptionId(null);
    setSentenceTokens([]);
    setTextAnswer("");
    setFeedback(null);
  }

  function moveFromLearnStep() {
    if (currentLearnStepIndex < learnStepsForExercise.length - 1) {
      setCurrentLearnStepIndex((value) => value + 1);
      return;
    }

    setMode("exercise");
    exerciseStartRef.current = Date.now();
  }

  function refineAnswer() {
    setFeedback(null);
    exerciseStartRef.current = Date.now();
  }

  function isCorrect(exerciseItem: LessonExercise) {
    if (exerciseItem.type === "multiple_choice") {
      return selectedOptionId === exerciseItem.correctOptionId;
    }

    if (exerciseItem.type === "sentence_ordering") {
      return sentenceTokens.join(" ").toLowerCase() === exerciseItem.correctOrder.join(" ").toLowerCase();
    }

    return exerciseItem.acceptedAnswers.some((answer) => normalizeAnswer(answer) === normalizeAnswer(textAnswer));
  }

  function submitExercise() {
    if (!exercise || feedback) {
      return;
    }

    const correct = isCorrect(exercise);
    const startedAt = exerciseStartRef.current ?? Date.now();
    const durationSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

    setAttempts((current) => {
      const next = current.filter((attempt) => attempt.exerciseIndex !== currentIndex);
      return [...next, { exerciseIndex: currentIndex, correct, durationSeconds }];
    });

    setFeedback({ correct, ...getFeedbackCopy(correct, currentIndex, totalExercises) });
  }

  async function persistCurrentExerciseAdvance() {
    if (!exercise || !feedback) {
      return;
    }

    const attempt = attempts.find((item) => item.exerciseIndex === currentIndex);

    if (!attempt) {
      return;
    }

    setIsPersisting(true);

    try {
      await fetch("/api/learning/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          lessonId: lesson.id,
          exerciseId: exercise.id,
          exerciseIndex: currentIndex,
          totalExercises,
          correct: attempt.correct,
          durationSeconds: attempt.durationSeconds
        })
      });
    } finally {
      setIsPersisting(false);
    }
  }

  async function moveNext() {
    const nextIndex = currentIndex + 1;

    await persistCurrentExerciseAdvance();

    if (nextIndex > totalExercises - 1) {
      return;
    }

    startTransition(() => {
      setCurrentIndex(nextIndex);
      setCurrentLearnStepIndex(0);
      setMode(
        lesson.learnSteps.some((step, index) => (step.exerciseIndex ?? index) === nextIndex) ? "learn" : "exercise"
      );
      setTransitionKey((value) => value + 1);
      resetInteractionState();
    });
  }

  async function continueToNextLesson() {
    if (!nextLessonHref) {
      return;
    }

    await persistCurrentExerciseAdvance();
    router.push(nextLessonHref);
  }

  function canSubmitCurrentExercise() {
    if (!exercise || feedback) {
      return false;
    }

    if (exercise.type === "multiple_choice") {
      return Boolean(selectedOptionId);
    }

    if (exercise.type === "sentence_ordering") {
      return sentenceTokens.length === exercise.correctOrder.length;
    }

    return textAnswer.trim().length > 0;
  }

  function renderExercise() {
    if (exercise.type === "multiple_choice") {
      return (
        <ExerciseMultipleChoice
          exercise={exercise}
          selectedOptionId={selectedOptionId}
          disabled={Boolean(feedback)}
          onSelect={setSelectedOptionId}
        />
      );
    }

    if (exercise.type === "sentence_ordering") {
      return (
        <ExerciseSentenceBuilder
          exercise={exercise}
          selectedTokens={sentenceTokens}
          disabled={Boolean(feedback)}
          onAddToken={(token) => setSentenceTokens((current) => [...current, token])}
          onReset={() => setSentenceTokens([])}
        />
      );
    }

    if (exercise.type === "fill_in_the_blank") {
      return (
        <div className="space-y-4">
          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background)]/80 p-5 text-base text-[color:var(--foreground)]">
            {exercise.sentenceParts[0]}
            <span className="mx-2 inline-flex min-w-24 border-b border-[var(--border-strong)] px-2 py-1" />
            {exercise.sentenceParts[1]}
          </div>
          <ExerciseInput
            value={textAnswer}
            onChange={setTextAnswer}
            disabled={Boolean(feedback)}
            placeholder={exercise.hint ?? "اكتب الكلمة بالإنجليزية"}
            supportPlaceholder={exercise.support?.hintArabic}
          />
        </div>
      );
    }

    if (exercise.type === "write_translation") {
      return (
        <div className="space-y-4">
          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background)]/80 p-5">
            <p className="text-xs tracking-[0.18em] text-[color:var(--foreground-muted)]" dir="rtl" lang="ar">
              الجملة العربية
            </p>
            <p className="mt-3 text-lg leading-9 text-[color:var(--foreground)]" dir="rtl" lang="ar">
              {exercise.sourceText}
            </p>
          </div>
          <ExerciseInput
            value={textAnswer}
            onChange={setTextAnswer}
            disabled={Boolean(feedback)}
            placeholder="اكتبها بالإنجليزية"
            supportPlaceholder={exercise.support?.instructionsArabic}
          />
        </div>
      );
    }

    if (exercise.type === "dialogue_completion") {
      return (
        <div className="space-y-4">
          <div className="space-y-3 rounded-[24px] border border-[var(--border)] bg-[var(--background)]/80 p-5">
            {exercise.lines.map((line, index) => (
              <div key={`${line.speaker}-${index}`} className="rounded-[18px] bg-[color:var(--background-muted)]/60 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--foreground-muted)]">{line.speaker}</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--foreground)]">{line.missing ? "..." : line.text}</p>
              </div>
            ))}
          </div>
          <ExerciseInput
            value={textAnswer}
            onChange={setTextAnswer}
            disabled={Boolean(feedback)}
            placeholder="اكتب الرد بالإنجليزية"
            supportPlaceholder={exercise.support?.instructionsArabic}
          />
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <ExerciseListeningPlaceholder exercise={exercise} />
        <ExerciseInput
          value={textAnswer}
          onChange={setTextAnswer}
          disabled={Boolean(feedback)}
          placeholder="اكتب الإجابة بالإنجليزية"
          supportPlaceholder={exercise.support?.instructionsArabic}
        />
      </div>
    );
  }

  if (totalExercises === 0) {
    return lesson.learnSteps[0] ? <LearnStepCard step={lesson.learnSteps[0]} index={0} total={lesson.learnSteps.length} /> : null;
  }

  return (
    <div className="space-y-4">
      <div className="surface-card rounded-[24px] px-5 py-4" dir="rtl" lang="ar">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[color:var(--foreground-muted)]">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[color:var(--primary)]" />
            {currentIndex + 1} / {totalExercises}
          </span>
          <span>{statusLabel}</span>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-[color:var(--secondary)]">
          <div className="h-full rounded-full bg-[color:var(--primary)]" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div key={transitionKey} className="lesson-panel-enter">
        {mode === "learn" && learnStep ? (
          <div className="space-y-4">
            <LearnStepCard step={learnStep} index={currentLearnStepIndex} total={learnStepsForExercise.length} />
            <div className="flex justify-end">
              <Button onClick={moveFromLearnStep}>
                {currentLearnStepIndex < learnStepsForExercise.length - 1 ? "المثال التالي" : "ابدأ التدرّب"}{" "}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <ExerciseCard
            exercise={exercise}
            index={currentIndex}
            total={totalExercises}
            progressPercent={progressPercent}
            statusLabel={statusLabel}
          >
            {renderExercise()}

            {feedback ? (
              <div className="mt-6 space-y-4">
                <ExerciseFeedback
                  correct={feedback.correct}
                  title={feedback.title}
                  message={feedback.message}
                  explanation={exercise.support?.explanationArabic ?? exercise.explanation}
                  momentumNote={feedback.momentumNote}
                />
                <div className="flex flex-wrap gap-3">
                  {!feedback.correct ? (
                    <Button variant="secondary" onClick={refineAnswer}>
                      حاول مرة أخرى
                    </Button>
                  ) : null}
                  {currentIndex < totalExercises - 1 ? (
                    <Button onClick={() => void moveNext()} disabled={isPersisting}>
                      {isPersisting
                        ? "جارٍ الحفظ..."
                        : lesson.learnSteps.some((step, index) => (step.exerciseIndex ?? index) === currentIndex + 1)
                          ? "التالي: تعلّم"
                          : "التالي"}{" "}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : nextLessonHref ? (
                    <Button onClick={() => void continueToNextLesson()} disabled={isPersisting}>
                      {isPersisting ? "جارٍ الحفظ..." : "الدرس التالي"} <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button onClick={resetInteractionState}>أعد الدرس</Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-6 flex justify-end">
                <Button onClick={submitExercise} disabled={!canSubmitCurrentExercise()}>
                  تحقّق من الإجابة
                </Button>
              </div>
            )}
          </ExerciseCard>
        )}
      </div>

      <div className="surface-card rounded-[24px] px-5 py-4" dir="rtl" lang="ar">
        <div className="flex flex-wrap items-center gap-5 text-sm text-[color:var(--foreground-muted)]">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[color:var(--primary)]" />
            الدقة: {progress.accuracy}%
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-[color:var(--primary)]" />
            الوقت: {progress.timeSpentSeconds} ث
          </span>
        </div>
      </div>
    </div>
  );
}
