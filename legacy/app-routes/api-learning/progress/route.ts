import { NextResponse } from "next/server";
import { z } from "zod";
import { persistLessonExerciseAdvance } from "@/features/learning/selectors";
import { getCurrentUserId } from "@/lib/current-user";

const payloadSchema = z.object({
  lessonId: z.string().min(1),
  exerciseId: z.string().min(1),
  exerciseIndex: z.number().int().min(0),
  totalExercises: z.number().int().positive(),
  correct: z.boolean(),
  durationSeconds: z.number().int().min(0)
});

export async function POST(request: Request) {
  const payload = payloadSchema.parse(await request.json());
  const userId = await getCurrentUserId();

  await persistLessonExerciseAdvance({
    userId,
    lessonId: payload.lessonId,
    exerciseId: payload.exerciseId,
    exerciseIndex: payload.exerciseIndex,
    totalExercises: payload.totalExercises,
    correct: payload.correct,
    durationSeconds: payload.durationSeconds
  });

  return NextResponse.json({ ok: true });
}
