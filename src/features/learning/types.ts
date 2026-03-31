export type ExerciseType =
  | "multiple_choice"
  | "sentence_ordering"
  | "fill_in_the_blank"
  | "write_translation"
  | "dialogue_completion"
  | "listening_comprehension";

export type ExerciseOption = {
  id: string;
  label: string;
  value: string;
  isCorrect?: boolean;
  explanation?: string;
  supportLabel?: string;
};

export type ExerciseBase = {
  id: string;
  type: ExerciseType;
  title: string;
  prompt: string;
  instructions?: string;
  explanation?: string;
  culturalNote?: string;
  support?: {
    titleArabic?: string;
    promptArabic?: string;
    instructionsArabic?: string;
    instructionsEnglish?: string;
    explanationArabic?: string;
    hintArabic?: string;
    culturalNoteArabic?: string;
    immersionNote?: string;
  };
};

export type MultipleChoiceExercise = ExerciseBase & {
  type: "multiple_choice";
  options: ExerciseOption[];
  correctOptionId: string;
};

export type SentenceOrderingExercise = ExerciseBase & {
  type: "sentence_ordering";
  tokens: string[];
  correctOrder: string[];
};

export type FillInBlankExercise = ExerciseBase & {
  type: "fill_in_the_blank";
  sentenceParts: [string, string];
  acceptedAnswers: string[];
  hint?: string;
};

export type WriteTranslationExercise = ExerciseBase & {
  type: "write_translation";
  sourceText: string;
  acceptedAnswers: string[];
  sampleAnswer: string;
};

export type DialogueCompletionExercise = ExerciseBase & {
  type: "dialogue_completion";
  lines: Array<{
    speaker: string;
    text: string;
    missing?: boolean;
  }>;
  acceptedAnswers: string[];
};

export type ListeningComprehensionExercise = ExerciseBase & {
  type: "listening_comprehension";
  audioLabel: string;
  transcriptPreview: string;
  promptQuestion: string;
  acceptedAnswers: string[];
};

export type LessonExercise =
  | MultipleChoiceExercise
  | SentenceOrderingExercise
  | FillInBlankExercise
  | WriteTranslationExercise
  | DialogueCompletionExercise
  | ListeningComprehensionExercise;

export type VocabularyItem = {
  id: string;
  term: string;
  translation: string;
  transliteration?: string;
  usage: string;
  exampleEnglish?: string;
  exampleArabic?: string;
  supportNoteArabic?: string;
};

export type GrammarNote = {
  id: string;
  title: string;
  titleArabic?: string;
  summary: string;
  secondaryLabel?: string;
  examples: Array<{
    english: string;
    arabic: string;
  }>;
};

export type ScenarioStep = {
  id: string;
  title: string;
  narrative: string;
  titleArabic?: string;
  narrativeArabic?: string;
};

export type Scenario = {
  id: string;
  title: string;
  titleArabic?: string;
  summary: string;
  summaryArabic?: string;
  culturalContext: string;
  culturalContextArabic?: string;
  steps: ScenarioStep[];
};

export type LearnStep = {
  id: string;
  title: string;
  titleArabic?: string;
  exerciseIndex?: number;
  wordOrPhrase: string;
  meaningArabic: string;
  exampleEnglish: string;
  exampleArabic: string;
  explanationArabic: string;
  pronunciation?: string;
  listeningPrompt?: string;
};

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  objectives: string[];
  learnSteps: LearnStep[];
  scenario: Scenario;
  vocabulary: VocabularyItem[];
  grammarNotes: GrammarNote[];
  exercises: LessonExercise[];
};

export type Unit = {
  id: string;
  slug: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  description: string;
  sourceLanguage: {
    code: string;
    name: string;
    nativeName: string;
    direction: "rtl" | "ltr";
  };
  targetLanguage: {
    code: string;
    name: string;
    nativeName: string;
    direction: "rtl" | "ltr";
  };
  units: Unit[];
};

export type LessonSummary = {
  courseSlug: string;
  unitSlug: string;
  lessonSlug: string;
  unitTitle: string;
  lessonTitle: string;
  estimatedMinutes: number;
  exerciseCount: number;
};

export type LessonProgressSnapshot = {
  completedExercises: number;
  totalExercises: number;
  correctAnswers: number;
  accuracy: number;
  timeSpentSeconds: number;
  streakUpdate: number;
  lessonCompleted: boolean;
};

export type StoredLessonProgress = {
  completedExercises: number;
  correctAnswers: number;
  timeSpentSeconds: number;
  streakCount: number;
  completionPercent: number;
  lastExerciseIndex: number;
  lessonCompleted: boolean;
  completedAt?: string | null;
};
