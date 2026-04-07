import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { arabicToEnglishCourse } from "@/features/learning/course-data";
import type {
  Course,
  LessonExercise,
  LessonSummary,
  LearnStep,
  StoredLessonProgress
} from "@/features/learning/types";

type ExerciseType =
  | "MULTIPLE_CHOICE"
  | "SENTENCE_ORDERING"
  | "FILL_IN_THE_BLANK"
  | "WRITE_TRANSLATION"
  | "DIALOGUE_COMPLETION"
  | "LISTENING_COMPREHENSION";

const CourseStatus = {
  PUBLISHED: "PUBLISHED"
} as const;

const ProgressStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED"
} as const;

const ReviewResult = {
  CORRECT: "CORRECT",
  INCORRECT: "INCORRECT"
} as const;

function mapExerciseContent(type: ExerciseType, content: Prisma.JsonValue, options: Array<{
  id: string;
  label: string;
  value: string;
  explanation: string | null;
  isCorrect: boolean;
}>) {
  const safeContent = (content ?? {}) as Record<string, unknown>;

  if (type === "MULTIPLE_CHOICE") {
    return {
      options: options.map((option) => ({
        id: option.id,
        label: option.label,
        value: option.value,
        explanation: option.explanation ?? undefined,
        supportLabel: option.explanation ?? undefined,
        isCorrect: option.isCorrect
      })),
      correctOptionId: String(safeContent.correctOptionId ?? "")
    };
  }

  if (type === "SENTENCE_ORDERING") {
    return {
      tokens: (safeContent.tokens as string[]) ?? [],
      correctOrder: (safeContent.correctOrder as string[]) ?? []
    };
  }

  if (type === "FILL_IN_THE_BLANK") {
    return {
      sentenceParts: (safeContent.sentenceParts as [string, string]) ?? ["", ""],
      acceptedAnswers: (safeContent.acceptedAnswers as string[]) ?? [],
      hint: (safeContent.hint as string | undefined) ?? undefined
    };
  }

  if (type === "WRITE_TRANSLATION") {
    return {
      sourceText: String(safeContent.sourceText ?? ""),
      acceptedAnswers: (safeContent.acceptedAnswers as string[]) ?? [],
      sampleAnswer: String(safeContent.sampleAnswer ?? "")
    };
  }

  if (type === "DIALOGUE_COMPLETION") {
    return {
      lines:
        ((safeContent.lines as Array<{ speaker: string; text: string; missing?: boolean }>) ?? []).map((line) => ({
          speaker: line.speaker,
          text: line.text,
          missing: line.missing
        })),
      acceptedAnswers: (safeContent.acceptedAnswers as string[]) ?? []
    };
  }

  return {
    audioLabel: String(safeContent.audioLabel ?? ""),
    transcriptPreview: String(safeContent.transcriptPreview ?? ""),
    promptQuestion: String(safeContent.promptQuestion ?? ""),
    acceptedAnswers: (safeContent.acceptedAnswers as string[]) ?? []
  };
}

function mapExerciseType(type: ExerciseType): LessonExercise["type"] {
  switch (type) {
    case "MULTIPLE_CHOICE":
      return "multiple_choice";
    case "SENTENCE_ORDERING":
      return "sentence_ordering";
    case "FILL_IN_THE_BLANK":
      return "fill_in_the_blank";
    case "WRITE_TRANSLATION":
      return "write_translation";
    case "DIALOGUE_COMPLETION":
      return "dialogue_completion";
    case "LISTENING_COMPREHENSION":
      return "listening_comprehension";
  }
}

function findSeedLesson(courseSlug: string, lessonSlug: string) {
  if (courseSlug !== arabicToEnglishCourse.slug) {
    return null;
  }

  for (const unit of arabicToEnglishCourse.units) {
    const lesson = unit.lessons.find((item) => item.slug === lessonSlug);

    if (lesson) {
      return lesson;
    }
  }

  return null;
}

function mergeSeedLessonContent(courseSlug: string, lesson: Course["units"][number]["lessons"][number]) {
  const seedLesson = findSeedLesson(courseSlug, lesson.slug);

  if (!seedLesson) {
    return lesson;
  }

  return {
    ...lesson,
    title: seedLesson.title,
    description: seedLesson.description,
    objectives: seedLesson.objectives,
    learnSteps: seedLesson.learnSteps,
    vocabulary: seedLesson.vocabulary,
    grammarNotes: seedLesson.grammarNotes,
    scenario: {
      ...lesson.scenario,
      ...seedLesson.scenario
    },
    exercises: lesson.exercises.map((exercise, index) => {
      const seedExercise = seedLesson.exercises[index];

      if (!seedExercise) {
        return exercise;
      }

      const mergedExercise = {
        ...exercise,
        title: seedExercise.title,
        prompt: seedExercise.prompt,
        instructions: seedExercise.instructions,
        explanation: seedExercise.explanation,
        culturalNote: seedExercise.culturalNote,
        support: seedExercise.support
      } as LessonExercise;

      if (exercise.type === "multiple_choice" && seedExercise.type === "multiple_choice") {
        return {
          ...mergedExercise,
          options: exercise.options.map((option, optionIndex) => ({
            ...option,
            label: seedExercise.options[optionIndex]?.label ?? option.label,
            value: seedExercise.options[optionIndex]?.value ?? option.value,
            supportLabel: seedExercise.options[optionIndex]?.supportLabel ?? option.supportLabel
          })),
          correctOptionId: exercise.correctOptionId
        } as LessonExercise;
      }

      if (exercise.type === "sentence_ordering" && seedExercise.type === "sentence_ordering") {
        return {
          ...mergedExercise,
          tokens: seedExercise.tokens,
          correctOrder: seedExercise.correctOrder
        } as LessonExercise;
      }

      if (exercise.type === "fill_in_the_blank" && seedExercise.type === "fill_in_the_blank") {
        return {
          ...mergedExercise,
          sentenceParts: seedExercise.sentenceParts,
          acceptedAnswers: seedExercise.acceptedAnswers,
          hint: seedExercise.hint
        } as LessonExercise;
      }

      if (exercise.type === "write_translation" && seedExercise.type === "write_translation") {
        return {
          ...mergedExercise,
          sourceText: seedExercise.sourceText,
          acceptedAnswers: seedExercise.acceptedAnswers,
          sampleAnswer: seedExercise.sampleAnswer
        } as LessonExercise;
      }

      if (exercise.type === "dialogue_completion" && seedExercise.type === "dialogue_completion") {
        return {
          ...mergedExercise,
          lines: seedExercise.lines,
          acceptedAnswers: seedExercise.acceptedAnswers
        } as LessonExercise;
      }

      if (exercise.type === "listening_comprehension" && seedExercise.type === "listening_comprehension") {
        return {
          ...mergedExercise,
          audioLabel: seedExercise.audioLabel,
          transcriptPreview: seedExercise.transcriptPreview,
          promptQuestion: seedExercise.promptQuestion,
          acceptedAnswers: seedExercise.acceptedAnswers
        } as LessonExercise;
      }

      return mergedExercise;
    })
  };
}

function mapCourseRecord(course: any) {
  if (!course) {
    return null;
  }

  return {
    id: course.id,
    slug: course.slug,
    title: course.title,
    description: course.description ?? "",
    sourceLanguage: {
      code: course.languagePair.sourceLanguage.code,
      name: course.languagePair.sourceLanguage.name,
      nativeName: course.languagePair.sourceLanguage.nativeName,
      direction: course.languagePair.sourceLanguage.direction.toLowerCase() as "rtl" | "ltr"
    },
    targetLanguage: {
      code: course.languagePair.targetLanguage.code,
      name: course.languagePair.targetLanguage.name,
      nativeName: course.languagePair.targetLanguage.nativeName,
      direction: course.languagePair.targetLanguage.direction.toLowerCase() as "rtl" | "ltr"
    },
      units: course.units.map((unit: any) => ({
      id: unit.id,
      slug: unit.slug,
      title: unit.title,
      description: unit.description ?? "",
      lessons: unit.lessons.map((lesson: any) =>
        mergeSeedLessonContent(course.slug, {
          id: lesson.id,
          slug: lesson.slug,
          title: lesson.title,
          description: lesson.description ?? "",
          estimatedMinutes: lesson.estimatedMinutes ?? 0,
          objectives: (lesson.learningObjectives as string[]) ?? [],
          learnSteps: (lesson.learnSteps as LearnStep[]) ?? [],
          scenario: {
            id: lesson.scenario?.id ?? `${lesson.id}-scenario`,
            title: lesson.scenario?.title ?? "Scenario",
            titleArabic: lesson.scenario?.titleArabic ?? undefined,
            summary: lesson.scenario?.summary ?? "",
            summaryArabic: lesson.scenario?.summaryArabic ?? undefined,
            culturalContext: lesson.scenario?.culturalContext ?? "",
            culturalContextArabic: lesson.scenario?.culturalContextArabic ?? undefined,
            steps: (lesson.scenario?.steps ?? []).map((step: any) => ({
              id: step.id,
              title: step.title,
              narrative: step.narrative,
              titleArabic: step.titleArabic ?? undefined,
              narrativeArabic: step.narrativeArabic ?? undefined
            }))
          },
          vocabulary: lesson.vocabularyItems.map((item: any) => ({
            id: item.id,
            term: item.term,
            translation: item.translation,
            transliteration: item.transliteration ?? undefined,
            usage: item.usageNote ?? "",
            exampleEnglish: item.exampleText ?? undefined,
            exampleArabic: item.exampleTranslation ?? undefined,
            supportNoteArabic: item.usageNote ?? undefined
          })),
          grammarNotes: lesson.grammarNotes.map((note: any) => ({
            id: note.id,
            title: note.title,
            titleArabic: note.titleArabic ?? undefined,
            summary: note.summary,
            secondaryLabel: note.secondaryLabel ?? undefined,
            examples:
              ((note.examples as Array<{ english: string; arabic: string }>) ?? []).map((example) => ({
                english: example.english,
                arabic: example.arabic
              }))
          })),
          exercises: lesson.exercises.map((exercise: any) => ({
            id: exercise.id,
            type: mapExerciseType(exercise.type),
            title: ((exercise.content as Record<string, unknown>)?.title as string | undefined) ?? exercise.slug,
            prompt: exercise.prompt,
            instructions: exercise.instructions ?? undefined,
            explanation: exercise.explanation ?? undefined,
            culturalNote: ((exercise.content as Record<string, unknown>)?.culturalNote as string | undefined) ?? undefined,
            support: ((exercise.content as Record<string, unknown>)?.support as LessonExercise["support"] | undefined) ?? undefined,
            ...mapExerciseContent(exercise.type, exercise.content, exercise.options)
          }))
        })
      )
    }))
  } satisfies Course;
}

export async function getCourseBySlug(courseSlug: string) {
  const course = await prisma.course.findUnique({
    where: {
      slug: courseSlug
    },
    include: {
      languagePair: {
        include: {
          sourceLanguage: true,
          targetLanguage: true
        }
      },
      units: {
        orderBy: {
          sortOrder: "asc"
        },
        include: {
          lessons: {
            orderBy: {
              sortOrder: "asc"
            },
            include: {
              scenario: {
                include: {
                  steps: {
                    orderBy: {
                      sortOrder: "asc"
                    }
                  }
                }
              },
              vocabularyItems: {
                orderBy: {
                  createdAt: "asc"
                }
              },
              grammarNotes: {
                orderBy: {
                  createdAt: "asc"
                }
              },
              exercises: {
                orderBy: {
                  sortOrder: "asc"
                },
                include: {
                  options: {
                    orderBy: {
                      sortOrder: "asc"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  return mapCourseRecord(course);
}

export async function getLessonBySlug(courseSlug: string, lessonSlug: string) {
  const course = await getCourseBySlug(courseSlug);

  if (!course) {
    return null;
  }

  for (const unit of course.units) {
    const lesson = unit.lessons.find((item: (typeof unit.lessons)[number]) => item.slug === lessonSlug);

    if (lesson) {
      return {
        course,
        unit,
        lesson
      };
    }
  }

  return null;
}

export function getAllLessons(course: Course): LessonSummary[] {
  return course.units.flatMap((unit) =>
    unit.lessons.map((lesson) => ({
      courseSlug: course.slug,
      unitSlug: unit.slug,
      lessonSlug: lesson.slug,
      unitTitle: unit.title,
      lessonTitle: lesson.title,
      estimatedMinutes: lesson.estimatedMinutes,
      exerciseCount: lesson.exercises.length
    }))
  );
}

export function getNextLesson(course: Course, currentLessonId: string) {
  const lessons = course.units.flatMap((unit) => unit.lessons);
  const index = lessons.findIndex((lesson) => lesson.id === currentLessonId);

  if (index === -1 || index === lessons.length - 1) {
    return null;
  }

  return lessons[index + 1];
}

export async function getStoredLessonProgress(userId: string, lessonId: string): Promise<StoredLessonProgress | null> {
  const record = await prisma.userProgress.findFirst({
    where: {
      userId,
      lessonId
    }
  });

  if (!record) {
    return null;
  }

  const metadata = (record.metadata ?? {}) as Record<string, unknown>;

  return {
    completedExercises: Number(metadata.completedExercises ?? 0),
    correctAnswers: Number(metadata.correctAnswers ?? 0),
    timeSpentSeconds: record.timeSpentSeconds,
    streakCount: record.streakCount,
    completionPercent: record.completionPercent,
    lastExerciseIndex: Number(metadata.lastExerciseIndex ?? 0),
    lessonCompleted: record.status === ProgressStatus.COMPLETED,
    completedAt: record.completedAt?.toISOString() ?? null
  };
}

export async function getDashboardLearningState(userId: string) {
  const course = await prisma.course.findFirst({
    where: {
      slug: "english-for-arabic-speakers",
      status: CourseStatus.PUBLISHED
    },
    include: {
      languagePair: true,
      units: {
        orderBy: {
          sortOrder: "asc"
        },
        include: {
          lessons: {
            orderBy: {
              sortOrder: "asc"
            },
            include: {
              exercises: true
            }
          }
        }
      }
    }
  });

  if (!course) {
    return null;
  }

  const allLessons = course.units.flatMap((unit) =>
    unit.lessons.map((lesson) => ({
      courseSlug: course.slug,
      unitTitle: unit.title,
      lessonId: lesson.id,
      lessonSlug: lesson.slug,
      lessonTitle: lesson.title,
      estimatedMinutes: lesson.estimatedMinutes ?? 0,
      exerciseCount: lesson.exercises.length
    }))
  );

  const progressRecords = await prisma.userProgress.findMany({
    where: {
      userId,
      courseId: course.id,
      lessonId: {
        not: null
      }
    },
    orderBy: {
      updatedAt: "desc"
    }
  });

  const latestInProgress = progressRecords.find((item: any) => item.status === ProgressStatus.IN_PROGRESS);
  const completedLessons = progressRecords.filter((item) => item.status === ProgressStatus.COMPLETED).length;
  const dailyGoal = await prisma.dailyGoal.findFirst({
    where: {
      userId,
      languagePairId: course.languagePairId
    },
    orderBy: {
      goalDate: "desc"
    }
  });

  const continueLesson = latestInProgress
    ? allLessons.find((lesson) => lesson.lessonId === latestInProgress.lessonId)
    : null;
  const recommendedLesson =
    allLessons.find((lesson) => !progressRecords.some((progress) => progress.lessonId === lesson.lessonId && progress.status === ProgressStatus.COMPLETED)) ??
    allLessons[0] ??
    null;
  const reviewCount = await prisma.reviewHistory.count({
    where: {
      userId,
      languagePairId: course.languagePairId
    }
  });

  return {
    continueLearning: continueLesson
      ? {
          label: continueLesson.lessonTitle,
          path: `/learn/${continueLesson.courseSlug}/lessons/${continueLesson.lessonSlug}`,
          progressPercent: latestInProgress?.completionPercent ?? 0
        }
      : null,
    completedLessons,
    dailyProgress: {
      minutesCompleted: dailyGoal?.currentMinutes ?? 0,
      minutesTarget: dailyGoal?.targetMinutes ?? 30,
      lessonsCompleted: dailyGoal?.completedLessons ?? 0,
      lessonsTarget: dailyGoal?.targetLessons ?? 2
    },
    recommendedLesson: recommendedLesson
      ? {
          lessonTitle: recommendedLesson.lessonTitle,
          unitTitle: recommendedLesson.unitTitle,
          estimatedMinutes: recommendedLesson.estimatedMinutes,
          courseSlug: recommendedLesson.courseSlug,
          lessonSlug: recommendedLesson.lessonSlug
        }
      : null,
    reviewReminder: {
      label: "آخر نشاط في المراجعة",
      detail: "يتم الآن حفظ سجل المراجعة تمهيدًا لطبقات مراجعة أعمق لاحقًا.",
      count: reviewCount
    }
  };
}

export async function persistLessonExerciseAdvance({
  userId,
  lessonId,
  exerciseId,
  exerciseIndex,
  totalExercises,
  correct,
  durationSeconds
}: {
  userId: string;
  lessonId: string;
  exerciseId: string;
  exerciseIndex: number;
  totalExercises: number;
  correct: boolean;
  durationSeconds: number;
}) {
  const lesson = await prisma.lesson.findUnique({
    where: {
      id: lessonId
    },
    include: {
      unit: {
        include: {
          course: true
        }
      }
    }
  });

  if (!lesson) {
    throw new Error("Lesson not found.");
  }

  const course = lesson.unit.course;
  const nextCompletedExercises = exerciseIndex + 1;

  const existingProgress = await prisma.userProgress.findFirst({
    where: {
      userId,
      courseId: course.id,
      lessonId
    }
  });

  const existingMetadata = (existingProgress?.metadata ?? {}) as Record<string, unknown>;
  const previousCompletedExercises = Number(existingMetadata.completedExercises ?? 0);
  const previousCorrectAnswers = Number(existingMetadata.correctAnswers ?? 0);

  const completedExercises = Math.max(previousCompletedExercises, nextCompletedExercises);
  const correctAnswers = correct
    ? Math.max(previousCorrectAnswers, previousCorrectAnswers + (exerciseIndex >= previousCompletedExercises ? 1 : 0))
    : previousCorrectAnswers;
  const completionPercent = Math.round((completedExercises / totalExercises) * 100);
  const completed = completedExercises >= totalExercises;

  await prisma.userProgress.upsert({
    where: {
      userId_courseId_lessonId: {
        userId,
        courseId: course.id,
        lessonId
      }
    },
    create: {
      userId,
      languagePairId: course.languagePairId,
      courseId: course.id,
      lessonId,
      status: completed ? ProgressStatus.COMPLETED : ProgressStatus.IN_PROGRESS,
      completionPercent,
      accuracy: completionPercent > 0 ? Number(((correctAnswers / totalExercises) * 100).toFixed(2)) : null,
      timeSpentSeconds: durationSeconds,
      streakCount: completed ? 1 : 0,
      lastActivityAt: new Date(),
      completedAt: completed ? new Date() : null,
      metadata: {
        lastExerciseIndex: completed ? totalExercises : completedExercises,
        completedExercises,
        correctAnswers
      }
    },
    update: {
      status: completed ? ProgressStatus.COMPLETED : ProgressStatus.IN_PROGRESS,
      completionPercent,
      accuracy: completionPercent > 0 ? Number(((correctAnswers / totalExercises) * 100).toFixed(2)) : null,
      timeSpentSeconds: {
        increment: durationSeconds
      },
      streakCount: completed && existingProgress?.status !== ProgressStatus.COMPLETED ? { increment: 1 } : undefined,
      lastActivityAt: new Date(),
      completedAt: completed ? new Date() : existingProgress?.completedAt ?? null,
      metadata: {
        lastExerciseIndex: completed ? totalExercises : completedExercises,
        completedExercises,
        correctAnswers
      }
    }
  });

  await prisma.reviewHistory.create({
    data: {
      userId,
      languagePairId: course.languagePairId,
      lessonId,
      exerciseId,
      result: correct ? ReviewResult.CORRECT : ReviewResult.INCORRECT,
      accuracy: correct ? 100 : 0,
      responseTimeMs: durationSeconds * 1000,
      metadata: {
        exerciseIndex
      }
    }
  });

  const today = new Date();
  const goalDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));

  await prisma.dailyGoal.upsert({
    where: {
      userId_languagePairId_goalDate: {
        userId,
        languagePairId: course.languagePairId,
        goalDate
      }
    },
    create: {
      userId,
      languagePairId: course.languagePairId,
      targetMinutes: 30,
      targetLessons: 2,
      currentMinutes: Math.ceil(durationSeconds / 60),
      completedLessons: completed ? 1 : 0,
      streakCount: completed ? 1 : 0,
      goalDate
    },
    update: {
      currentMinutes: {
        increment: Math.ceil(durationSeconds / 60)
      },
      completedLessons: completed && existingProgress?.status !== ProgressStatus.COMPLETED ? { increment: 1 } : undefined,
      streakCount: completed && existingProgress?.status !== ProgressStatus.COMPLETED ? { increment: 1 } : undefined
    }
  });
}
