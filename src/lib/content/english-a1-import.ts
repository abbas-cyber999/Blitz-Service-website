import { readFile } from "node:fs/promises";
import path from "node:path";
import { ZodError } from "zod";
import type { ImportJobStatus, LessonBlockType, LessonType, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  grammarFileSchema,
  lessonFileSchema,
  placementFileSchema,
  type LessonFile,
  type LessonItem,
  type PlacementFile
} from "@/lib/content/schemas";

const DATA_DIR = path.join(process.cwd(), "content-import", "legacy-data", "data");
const COURSE_SLUG = "de-en-a1";
const COURSE_CODE = "DE_EN_A1";

const IMPORT_SOURCES = {
  lessons: {
    type: "LESSONS" as const,
    filename: "lessons-de-en-a1.json",
    unitSlug: "core-lessons",
    unitTitle: "Core Lessons",
    lessonType: "LESSON" as LessonType,
    lessonSlugPrefix: "a1-lessons"
  },
  grammar: {
    type: "GRAMMAR" as const,
    filename: "grammar-de-en-a1.json",
    unitSlug: "grammar",
    unitTitle: "Grammar",
    lessonType: "GRAMMAR" as LessonType,
    lessonSlugPrefix: "a1-grammar"
  },
  placement: {
    type: "PLACEMENT" as const,
    filename: "placement-de-en.json"
  }
};

type ImportSummary = {
  source: string;
  importedLessons?: number;
  importedBlocks?: number;
  importedExercises?: number;
  importedQuestions?: number;
  warnings: string[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSourcePath(filename: string) {
  return path.join(DATA_DIR, filename);
}

async function readJsonFile<T>(filename: string, parser: { parse: (value: unknown) => T }) {
  const filePath = getSourcePath(filename);
  const raw = await readFile(filePath, "utf8");
  return {
    filePath,
    data: parser.parse(JSON.parse(raw))
  };
}

async function ensureCourse() {
  return prisma.course.upsert({
    where: {
      slug: COURSE_SLUG
    },
    update: {
      code: COURSE_CODE,
      title: "German for English Speakers A1",
      description: "Imported English-speaking learner content for A1 German.",
      targetLanguageCode: "de",
      nativeLanguageCode: "en",
      cefrLevel: "A1",
      published: true
    },
    create: {
      slug: COURSE_SLUG,
      code: COURSE_CODE,
      title: "German for English Speakers A1",
      description: "Imported English-speaking learner content for A1 German.",
      targetLanguageCode: "de",
      nativeLanguageCode: "en",
      cefrLevel: "A1",
      published: true
    }
  });
}

async function createImportJob(type: "LESSONS" | "GRAMMAR" | "PLACEMENT", sourcePath: string) {
  return prisma.importJob.create({
    data: {
      type,
      sourcePath,
      status: "RUNNING"
    }
  });
}

async function finalizeImportJob(
  jobId: string,
  status: ImportJobStatus,
  summary: ImportSummary
) {
  return prisma.importJob.update({
    where: { id: jobId },
    data: {
      status,
      summaryJson: summary as Prisma.InputJsonValue,
      completedAt: new Date()
    }
  });
}

function buildLessonBlocks(lesson: LessonItem): Array<{
  blockType: LessonBlockType;
  title: string | null;
  contentJson: Prisma.InputJsonValue;
  exercises: Array<{
    type: string;
    prompt: string;
    promptGerman: string | null;
    explanation: string | null;
    hint: string | null;
    orderIndex: number;
    contentJson: Prisma.InputJsonValue;
  }>;
}> {
  const blocks: Array<{
    blockType: LessonBlockType;
    title: string | null;
    contentJson: Prisma.InputJsonValue;
    exercises: Array<{
      type: string;
      prompt: string;
      promptGerman: string | null;
      explanation: string | null;
      hint: string | null;
      orderIndex: number;
      contentJson: Prisma.InputJsonValue;
    }>;
  }> = [];

  if (lesson.interactiveScene) {
    blocks.push({
      blockType: "SCENE",
      title: "Scene",
      contentJson: { text: lesson.interactiveScene },
      exercises: []
    });
  }

  if (lesson.explanation?.length) {
    blocks.push({
      blockType: "EXPLANATION",
      title: "Explanation",
      contentJson: { items: lesson.explanation },
      exercises: []
    });
  }

  if (lesson.phrasesTable?.length) {
    blocks.push({
      blockType: "PHRASES",
      title: "Phrases",
      contentJson: { items: lesson.phrasesTable },
      exercises: []
    });
  }

  if (lesson.tip) {
    blocks.push({
      blockType: "TIP",
      title: "Tip",
      contentJson: { text: lesson.tip },
      exercises: []
    });
  }

  if (lesson.dialogue?.length) {
    blocks.push({
      blockType: "DIALOGUE",
      title: "Dialogue",
      contentJson: { items: lesson.dialogue },
      exercises: []
    });
  }

  if (lesson.summary?.length) {
    blocks.push({
      blockType: "SUMMARY",
      title: "Summary",
      contentJson: { items: lesson.summary },
      exercises: []
    });
  }

  if (lesson.quiz?.length) {
    blocks.push({
      blockType: "QUIZ",
      title: "Quiz",
      contentJson: { items: lesson.quiz },
      exercises: lesson.quiz.map((quizItem, index) => ({
        type: "MCQ",
        prompt: quizItem.question,
        promptGerman: null,
        explanation: quizItem.explanation ?? null,
        hint: quizItem.hint ?? null,
        orderIndex: index + 1,
        contentJson: {
          options: quizItem.options,
          answerIndex: quizItem.answer
        }
      }))
    });
  }

  if (lesson.writingExercise) {
    blocks.push({
      blockType: "WRITING",
      title: "Writing",
      contentJson: lesson.writingExercise as Prisma.InputJsonValue,
      exercises: []
    });
  }

  return blocks;
}

async function importLessonCollection(params: {
  filename: string;
  type: "LESSONS" | "GRAMMAR";
  unitSlug: string;
  unitTitle: string;
  lessonType: LessonType;
  lessonSlugPrefix: string;
  parser: typeof lessonFileSchema | typeof grammarFileSchema;
}) {
  const filePath = getSourcePath(params.filename);
  const job = await createImportJob(params.type, filePath);
  const summary: ImportSummary = {
    source: params.filename,
    importedLessons: 0,
    importedBlocks: 0,
    importedExercises: 0,
    warnings: []
  };

  try {
    const { data } = await readJsonFile<LessonFile>(params.filename, params.parser);
    const course = await ensureCourse();

    await prisma.$transaction(async (tx) => {
      const unit = await tx.unit.upsert({
        where: {
          courseId_slug: {
            courseId: course.id,
            slug: params.unitSlug
          }
        },
        update: {
          title: params.unitTitle,
          orderIndex: params.type === "LESSONS" ? 1 : 2,
          published: true
        },
        create: {
          courseId: course.id,
          slug: params.unitSlug,
          title: params.unitTitle,
          orderIndex: params.type === "LESSONS" ? 1 : 2,
          published: true
        }
      });

      await tx.lesson.deleteMany({
        where: {
          unitId: unit.id
        }
      });

      for (const [lessonIndex, lesson] of data.lessons.entries()) {
        const slug = `${params.lessonSlugPrefix}-${slugify(lesson.id)}`;

        const createdLesson = await tx.lesson.create({
          data: {
            unitId: unit.id,
            slug,
            legacySourceFile: params.filename,
            legacySourceId: lesson.id,
            titleNative: lesson.title.en,
            titleGerman: lesson.title.de,
            description: lesson.interactiveScene?.slice(0, 160) ?? null,
            orderIndex: lessonIndex + 1,
            lessonType: params.lessonType,
            cefrLevel: data.level,
            published: true
          }
        });

        const blocks = buildLessonBlocks(lesson);
        summary.importedLessons = (summary.importedLessons ?? 0) + 1;
        summary.importedBlocks = (summary.importedBlocks ?? 0) + blocks.length;

        for (const [blockIndex, block] of blocks.entries()) {
          const createdBlock = await tx.lessonBlock.create({
            data: {
              lessonId: createdLesson.id,
              blockType: block.blockType,
              orderIndex: blockIndex + 1,
              title: block.title,
              contentJson: block.contentJson
            }
          });

          if (block.exercises.length) {
            for (const exercise of block.exercises) {
              await tx.exercise.create({
                data: {
                  lessonId: createdLesson.id,
                  lessonBlockId: createdBlock.id,
                  type: exercise.type,
                  prompt: exercise.prompt,
                  promptGerman: exercise.promptGerman,
                  explanation: exercise.explanation,
                  hint: exercise.hint,
                  orderIndex: exercise.orderIndex,
                  contentJson: exercise.contentJson
                }
              });
            }

            summary.importedExercises =
              (summary.importedExercises ?? 0) + block.exercises.length;
          }
        }
      }
    });

    await finalizeImportJob(job.id, "SUCCESS", summary);
    return summary;
  } catch (error) {
    summary.warnings.push(
      error instanceof ZodError
        ? error.issues.map((issue) => issue.message).join(" | ")
        : error instanceof Error
          ? error.message
          : "Unknown import error"
    );
    await finalizeImportJob(job.id, "FAILED", summary);
    throw error;
  }
}

async function importPlacementCollection() {
  const filePath = getSourcePath(IMPORT_SOURCES.placement.filename);
  const job = await createImportJob("PLACEMENT", filePath);
  const summary: ImportSummary = {
    source: IMPORT_SOURCES.placement.filename,
    importedQuestions: 0,
    warnings: []
  };

  try {
    const { data } = await readJsonFile<PlacementFile>(
      IMPORT_SOURCES.placement.filename,
      placementFileSchema
    );
    const course = await ensureCourse();

    await prisma.$transaction(async (tx) => {
      const placementTest = await tx.placementTest.upsert({
        where: {
          id: `${COURSE_SLUG}-placement-en`
        },
        update: {
          courseId: course.id,
          languageCode: "en",
          targetLanguageCode: "de",
          title: "English Placement Test",
          published: true
        },
        create: {
          id: `${COURSE_SLUG}-placement-en`,
          courseId: course.id,
          languageCode: "en",
          targetLanguageCode: "de",
          title: "English Placement Test",
          published: true
        }
      });

      await tx.placementQuestion.deleteMany({
        where: {
          placementTestId: placementTest.id
        }
      });

      for (const [index, question] of data.questions.entries()) {
        await tx.placementQuestion.create({
          data: {
            placementTestId: placementTest.id,
            legacySourceId: question.id,
            cefrLevel: question.level,
            prompt: question.question,
            orderIndex: index + 1,
            contentJson: {
              options: question.options,
              answerIndex: question.answer
            }
          }
        });
      }

      summary.importedQuestions = data.questions.length;
    });

    await finalizeImportJob(job.id, "SUCCESS", summary);
    return summary;
  } catch (error) {
    summary.warnings.push(
      error instanceof ZodError
        ? error.issues.map((issue) => issue.message).join(" | ")
        : error instanceof Error
          ? error.message
          : "Unknown import error"
    );
    await finalizeImportJob(job.id, "FAILED", summary);
    throw error;
  }
}

export async function runEnglishA1Import() {
  const results = [];

  results.push(
    await importLessonCollection({
      filename: IMPORT_SOURCES.lessons.filename,
      type: IMPORT_SOURCES.lessons.type,
      unitSlug: IMPORT_SOURCES.lessons.unitSlug,
      unitTitle: IMPORT_SOURCES.lessons.unitTitle,
      lessonType: IMPORT_SOURCES.lessons.lessonType,
      lessonSlugPrefix: IMPORT_SOURCES.lessons.lessonSlugPrefix,
      parser: lessonFileSchema
    })
  );

  results.push(
    await importLessonCollection({
      filename: IMPORT_SOURCES.grammar.filename,
      type: IMPORT_SOURCES.grammar.type,
      unitSlug: IMPORT_SOURCES.grammar.unitSlug,
      unitTitle: IMPORT_SOURCES.grammar.unitTitle,
      lessonType: IMPORT_SOURCES.grammar.lessonType,
      lessonSlugPrefix: IMPORT_SOURCES.grammar.lessonSlugPrefix,
      parser: grammarFileSchema
    })
  );

  results.push(await importPlacementCollection());

  return results;
}
