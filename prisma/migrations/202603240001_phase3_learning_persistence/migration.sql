CREATE TYPE "MessageStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'DONE');
CREATE TYPE "LanguageDirection" AS ENUM ('LTR', 'RTL');
CREATE TYPE "CourseStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
CREATE TYPE "ExerciseType" AS ENUM ('MULTIPLE_CHOICE', 'SENTENCE_ORDERING', 'FILL_IN_THE_BLANK', 'WRITE_TRANSLATION', 'DIALOGUE_COMPLETION', 'LISTENING_COMPREHENSION');
CREATE TYPE "ScenarioStepType" AS ENUM ('CONTEXT', 'DIALOGUE', 'CULTURE', 'TASK');
CREATE TYPE "ProgressStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');
CREATE TYPE "ReviewResult" AS ENUM ('CORRECT', 'INCORRECT', 'PARTIAL', 'SKIPPED');

CREATE TABLE "ContactMessage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "privacyAccepted" BOOLEAN NOT NULL,
    "status" "MessageStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "languages" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nativeName" TEXT NOT NULL,
    "direction" "LanguageDirection" NOT NULL,
    "locale" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "language_pairs" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "sourceLanguageId" TEXT NOT NULL,
    "targetLanguageId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "language_pairs_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "courses" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "languagePairId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "levelLabel" TEXT,
    "status" "CourseStatus" NOT NULL DEFAULT 'DRAFT',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "units" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "scenarios" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT,
    "culturalContext" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "scenarios_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "lessons" (
    "id" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "estimatedMinutes" INTEGER,
    "scenarioId" TEXT,
    "learningObjectives" JSONB,
    "learnSteps" JSONB,
    "sortOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "lessons_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "exercises" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "ExerciseType" NOT NULL,
    "prompt" TEXT NOT NULL,
    "instructions" TEXT,
    "content" JSONB NOT NULL,
    "explanation" TEXT,
    "audioUrl" TEXT,
    "sortOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "exercise_options" (
    "id" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "explanation" TEXT,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "exercise_options_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "vocabulary_items" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT,
    "languageId" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "transliteration" TEXT,
    "translation" TEXT NOT NULL,
    "usageNote" TEXT,
    "exampleText" TEXT,
    "exampleTranslation" TEXT,
    "proficiencyLabel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "vocabulary_items_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "grammar_notes" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT,
    "languageId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "examples" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "grammar_notes_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "scenario_steps" (
    "id" TEXT NOT NULL,
    "scenarioId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "narrative" TEXT NOT NULL,
    "stepType" "ScenarioStepType" NOT NULL DEFAULT 'CONTEXT',
    "sortOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "scenario_steps_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "user_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "languagePairId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "lessonId" TEXT,
    "status" "ProgressStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "completionPercent" INTEGER NOT NULL DEFAULT 0,
    "accuracy" DECIMAL(5,2),
    "timeSpentSeconds" INTEGER NOT NULL DEFAULT 0,
    "streakCount" INTEGER NOT NULL DEFAULT 0,
    "lastActivityAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "user_progress_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "review_history" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "languagePairId" TEXT NOT NULL,
    "lessonId" TEXT,
    "exerciseId" TEXT,
    "result" "ReviewResult" NOT NULL,
    "accuracy" DECIMAL(5,2),
    "responseTimeMs" INTEGER,
    "reviewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "metadata" JSONB,
    CONSTRAINT "review_history_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "daily_goals" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "languagePairId" TEXT NOT NULL,
    "targetMinutes" INTEGER NOT NULL,
    "targetLessons" INTEGER,
    "targetAccuracy" DECIMAL(5,2),
    "currentMinutes" INTEGER NOT NULL DEFAULT 0,
    "completedLessons" INTEGER NOT NULL DEFAULT 0,
    "streakCount" INTEGER NOT NULL DEFAULT 0,
    "goalDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "daily_goals_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "languages_code_key" ON "languages"("code");
CREATE UNIQUE INDEX "language_pairs_slug_key" ON "language_pairs"("slug");
CREATE UNIQUE INDEX "language_pairs_sourceLanguageId_targetLanguageId_key" ON "language_pairs"("sourceLanguageId", "targetLanguageId");
CREATE UNIQUE INDEX "courses_slug_key" ON "courses"("slug");
CREATE UNIQUE INDEX "units_courseId_slug_key" ON "units"("courseId", "slug");
CREATE UNIQUE INDEX "scenarios_slug_key" ON "scenarios"("slug");
CREATE UNIQUE INDEX "lessons_unitId_slug_key" ON "lessons"("unitId", "slug");
CREATE UNIQUE INDEX "exercises_lessonId_slug_key" ON "exercises"("lessonId", "slug");
CREATE UNIQUE INDEX "user_progress_userId_courseId_lessonId_key" ON "user_progress"("userId", "courseId", "lessonId");
CREATE UNIQUE INDEX "daily_goals_userId_languagePairId_goalDate_key" ON "daily_goals"("userId", "languagePairId", "goalDate");
CREATE INDEX "user_progress_userId_lastActivityAt_idx" ON "user_progress"("userId", "lastActivityAt");
CREATE INDEX "review_history_userId_reviewedAt_idx" ON "review_history"("userId", "reviewedAt");

ALTER TABLE "language_pairs" ADD CONSTRAINT "language_pairs_sourceLanguageId_fkey" FOREIGN KEY ("sourceLanguageId") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "language_pairs" ADD CONSTRAINT "language_pairs_targetLanguageId_fkey" FOREIGN KEY ("targetLanguageId") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "courses" ADD CONSTRAINT "courses_languagePairId_fkey" FOREIGN KEY ("languagePairId") REFERENCES "language_pairs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "units" ADD CONSTRAINT "units_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "scenarios" ADD CONSTRAINT "scenarios_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "scenarios" ADD CONSTRAINT "scenarios_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_scenarioId_fkey" FOREIGN KEY ("scenarioId") REFERENCES "scenarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "exercise_options" ADD CONSTRAINT "exercise_options_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "vocabulary_items" ADD CONSTRAINT "vocabulary_items_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "vocabulary_items" ADD CONSTRAINT "vocabulary_items_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "grammar_notes" ADD CONSTRAINT "grammar_notes_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "grammar_notes" ADD CONSTRAINT "grammar_notes_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "scenario_steps" ADD CONSTRAINT "scenario_steps_scenarioId_fkey" FOREIGN KEY ("scenarioId") REFERENCES "scenarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_languagePairId_fkey" FOREIGN KEY ("languagePairId") REFERENCES "language_pairs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "review_history" ADD CONSTRAINT "review_history_languagePairId_fkey" FOREIGN KEY ("languagePairId") REFERENCES "language_pairs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "review_history" ADD CONSTRAINT "review_history_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "review_history" ADD CONSTRAINT "review_history_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "daily_goals" ADD CONSTRAINT "daily_goals_languagePairId_fkey" FOREIGN KEY ("languagePairId") REFERENCES "language_pairs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
