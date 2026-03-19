import { z } from "zod";

const localizedTextSchema = z.object({
  de: z.string().min(1),
  en: z.string().min(1)
});

const explanationItemSchema = localizedTextSchema.extend({
  note: z.string().optional()
});

const dialogueItemSchema = localizedTextSchema.extend({
  speaker: z.string().min(1)
});

const quizItemSchema = z.object({
  question: z.string().min(1),
  options: z.array(z.string().min(1)).min(2),
  answer: z.number().int().nonnegative(),
  hint: z.string().optional(),
  explanation: z.string().optional()
});

const writingExerciseSchema = z.record(z.string(), z.unknown());

export const lessonItemSchema = z.object({
  id: z.string().min(1),
  title: localizedTextSchema,
  interactiveScene: z.string().min(1).optional(),
  explanation: z.array(explanationItemSchema).optional(),
  phrasesTable: z.array(explanationItemSchema).optional(),
  tip: z.string().min(1).optional(),
  dialogue: z.array(dialogueItemSchema).optional(),
  summary: z.array(localizedTextSchema).optional(),
  quiz: z.array(quizItemSchema).optional(),
  writingExercise: writingExerciseSchema.optional()
});

export const lessonFileSchema = z.object({
  level: z.literal("A1"),
  title: z.string().min(1),
  lessons: z.array(lessonItemSchema).min(1)
});

export const grammarFileSchema = lessonFileSchema;

export const placementQuestionSchema = z.object({
  id: z.string().min(1),
  level: z.string().min(1),
  question: z.string().min(1),
  options: z.array(z.string().min(1)).min(2),
  answer: z.number().int().nonnegative()
});

export const placementFileSchema = z.object({
  questions: z.array(placementQuestionSchema).min(1)
});

export type LessonFile = z.infer<typeof lessonFileSchema>;
export type LessonItem = z.infer<typeof lessonItemSchema>;
export type PlacementFile = z.infer<typeof placementFileSchema>;
