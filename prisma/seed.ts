import { CourseStatus, ExerciseType, LanguageDirection } from "@prisma/client";
import { prisma } from "../src/lib/prisma";
import { arabicToEnglishCourse } from "../src/features/learning/course-data";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function main() {
  await prisma.reviewHistory.deleteMany();
  await prisma.userProgress.deleteMany();
  await prisma.dailyGoal.deleteMany();
  await prisma.exerciseOption.deleteMany();
  await prisma.exercise.deleteMany();
  await prisma.grammarNote.deleteMany();
  await prisma.vocabularyItem.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.scenarioStep.deleteMany();
  await prisma.scenario.deleteMany();
  await prisma.unit.deleteMany();
  await prisma.course.deleteMany({
    where: {
      slug: arabicToEnglishCourse.slug
    }
  });
  await prisma.languagePair.deleteMany({
    where: {
      slug: arabicToEnglishCourse.slug
    }
  });

  const arabic = await prisma.language.upsert({
    where: { code: "ar" },
    update: {
      name: "Arabic",
      nativeName: "العربية",
      direction: LanguageDirection.RTL,
      locale: "ar"
    },
    create: {
      code: "ar",
      name: "Arabic",
      nativeName: "العربية",
      direction: LanguageDirection.RTL,
      locale: "ar"
    }
  });

  const english = await prisma.language.upsert({
    where: { code: "en" },
    update: {
      name: "English",
      nativeName: "English",
      direction: LanguageDirection.LTR,
      locale: "en"
    },
    create: {
      code: "en",
      name: "English",
      nativeName: "English",
      direction: LanguageDirection.LTR,
      locale: "en"
    }
  });

  const languagePair = await prisma.languagePair.create({
    data: {
      slug: arabicToEnglishCourse.slug,
      sourceLanguageId: arabic.id,
      targetLanguageId: english.id,
      label: "Arabic to English",
      description: arabicToEnglishCourse.description
    }
  });

  const course = await prisma.course.create({
    data: {
      slug: arabicToEnglishCourse.slug,
      languagePairId: languagePair.id,
      title: arabicToEnglishCourse.title,
      description: arabicToEnglishCourse.description,
      levelLabel: "Foundation",
      status: CourseStatus.PUBLISHED,
      sortOrder: 1
    }
  });

  for (const [unitIndex, unit] of arabicToEnglishCourse.units.entries()) {
    const createdUnit = await prisma.unit.create({
      data: {
        courseId: course.id,
        slug: unit.slug,
        title: unit.title,
        description: unit.description,
        sortOrder: unitIndex + 1
      }
    });

    for (const [lessonIndex, lesson] of unit.lessons.entries()) {
      const scenario = await prisma.scenario.create({
        data: {
          courseId: course.id,
          languageId: english.id,
          slug: lesson.scenario.id,
          title: lesson.scenario.titleArabic ?? lesson.scenario.title,
          summary: lesson.scenario.summaryArabic ?? lesson.scenario.summary,
          culturalContext: lesson.scenario.culturalContextArabic ?? lesson.scenario.culturalContext,
          steps: {
            create: lesson.scenario.steps.map((step, stepIndex) => ({
              title: step.titleArabic ?? step.title,
              narrative: step.narrativeArabic ?? step.narrative,
              sortOrder: stepIndex + 1
            }))
          }
        }
      });

      const createdLesson = await prisma.lesson.create({
        data: {
          unitId: createdUnit.id,
          slug: lesson.slug,
          title: lesson.title,
          description: lesson.description,
          estimatedMinutes: lesson.estimatedMinutes,
          scenarioId: scenario.id,
          learningObjectives: lesson.objectives,
          learnSteps: lesson.learnSteps,
          sortOrder: lessonIndex + 1
        }
      });

      if (lesson.vocabulary.length > 0) {
        await prisma.vocabularyItem.createMany({
          data: lesson.vocabulary.map((item) => ({
            lessonId: createdLesson.id,
            languageId: english.id,
            term: item.term,
            transliteration: item.transliteration ?? null,
            translation: item.translation,
            usageNote: item.supportNoteArabic ?? item.usage,
            exampleText: item.exampleEnglish ?? null,
            exampleTranslation: item.exampleArabic ?? null
          }))
        });
      }

      if (lesson.grammarNotes.length > 0) {
        await prisma.grammarNote.createMany({
          data: lesson.grammarNotes.map((note) => ({
            lessonId: createdLesson.id,
            languageId: english.id,
            title: note.titleArabic ?? note.title,
            summary: note.summary,
            examples: note.examples
          }))
        });
      }

      for (const [exerciseIndex, exercise] of lesson.exercises.entries()) {
        const typeMap: Record<string, ExerciseType> = {
          multiple_choice: ExerciseType.MULTIPLE_CHOICE,
          sentence_ordering: ExerciseType.SENTENCE_ORDERING,
          fill_in_the_blank: ExerciseType.FILL_IN_THE_BLANK,
          write_translation: ExerciseType.WRITE_TRANSLATION,
          dialogue_completion: ExerciseType.DIALOGUE_COMPLETION,
          listening_comprehension: ExerciseType.LISTENING_COMPREHENSION
        };

        const content = {
          title: exercise.title,
          culturalNote: exercise.culturalNote ?? null,
          support: exercise.support ?? null,
          ...(exercise.type === "multiple_choice" ? { correctOptionId: exercise.correctOptionId } : {}),
          ...(exercise.type === "sentence_ordering"
            ? {
                tokens: exercise.tokens,
                correctOrder: exercise.correctOrder
              }
            : {}),
          ...(exercise.type === "fill_in_the_blank"
            ? {
                sentenceParts: exercise.sentenceParts,
                acceptedAnswers: exercise.acceptedAnswers,
                hint: exercise.hint ?? null
              }
            : {}),
          ...(exercise.type === "write_translation"
            ? {
                sourceText: exercise.sourceText,
                acceptedAnswers: exercise.acceptedAnswers,
                sampleAnswer: exercise.sampleAnswer
              }
            : {}),
          ...(exercise.type === "dialogue_completion"
            ? {
                lines: exercise.lines,
                acceptedAnswers: exercise.acceptedAnswers
              }
            : {}),
          ...(exercise.type === "listening_comprehension"
            ? {
                audioLabel: exercise.audioLabel,
                transcriptPreview: exercise.transcriptPreview,
                promptQuestion: exercise.promptQuestion,
                acceptedAnswers: exercise.acceptedAnswers
              }
            : {})
        };

        const createdExercise = await prisma.exercise.create({
          data: {
            lessonId: createdLesson.id,
            slug: slugify(exercise.id),
            type: typeMap[exercise.type],
            prompt: exercise.prompt,
            instructions: exercise.support?.instructionsArabic ?? exercise.instructions ?? null,
            content,
            explanation: exercise.support?.explanationArabic ?? exercise.explanation ?? null,
            sortOrder: exerciseIndex + 1
          }
        });

        if (exercise.type === "multiple_choice") {
          await prisma.exerciseOption.createMany({
            data: exercise.options.map((option, optionIndex) => ({
              exerciseId: createdExercise.id,
              label: option.label,
              value: option.value,
              explanation: option.supportLabel ?? option.explanation ?? null,
              isCorrect: option.id === exercise.correctOptionId,
              sortOrder: optionIndex + 1
            }))
          });
        }
      }
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
