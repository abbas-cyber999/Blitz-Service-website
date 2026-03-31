import type { Course } from "@/features/learning/types";

export const arabicToEnglishCourse: Course = {
  id: "course-ar-en-foundations",
  slug: "english-for-arabic-speakers",
  title: "الإنجليزية للناطقين بالعربية",
  description: "تعلّم الإنجليزية خطوة بخطوة من العربية.",
  sourceLanguage: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    direction: "rtl"
  },
  targetLanguage: {
    code: "en",
    name: "English",
    nativeName: "English",
    direction: "ltr"
  },
  units: [
    {
      id: "unit-first-conversations",
      slug: "first-conversations",
      title: "الوحدة 1 | أول محادثاتك",
      description: "ابدأ بالتحيات والتعارف والأسئلة القصيرة.",
      lessons: [
        {
          id: "lesson-greetings",
          slug: "greetings",
          title: "الدرس 1 | التحيات",
          description: "تعلّم التحيات الإنجليزية البسيطة في مواقف يومية قصيرة.",
          estimatedMinutes: 10,
          objectives: ["فهم التحيات الأساسية", "اختيار التحية المناسبة", "الرد بجملة قصيرة"],
          learnSteps: [
            {
              id: "learn-hello",
              title: "General greeting",
              titleArabic: "تعلّم",
              exerciseIndex: 0,
              wordOrPhrase: "Hello",
              meaningArabic: "مرحبًا",
              exampleEnglish: "Hello, Noor.",
              exampleArabic: "مرحبًا يا نور.",
              explanationArabic: "نستخدم Hello كتحية عامة وبسيطة في أغلب المواقف.",
              pronunciation: "heh-loh"
            },
            {
              id: "learn-nice-to-meet-you",
              title: "First meeting",
              titleArabic: "تعلّم",
              exerciseIndex: 0,
              wordOrPhrase: "Nice to meet you",
              meaningArabic: "سعيد بلقائك",
              exampleEnglish: "Nice to meet you, Omar.",
              exampleArabic: "سعيد بلقائك يا عمر.",
              explanationArabic: "نستخدم هذا التعبير عندما نقابل شخصًا لأول مرة.",
              pronunciation: "nays to meet you"
            },
            {
              id: "learn-good-morning",
              title: "Morning greeting",
              titleArabic: "تعلّم",
              exerciseIndex: 1,
              wordOrPhrase: "Good morning",
              meaningArabic: "صباح الخير",
              exampleEnglish: "Good morning, Sara.",
              exampleArabic: "صباح الخير يا سارة.",
              explanationArabic: "نستخدم Good morning من الصباح حتى الظهر.",
              pronunciation: "good mor-ning"
            }
          ],
          scenario: {
            id: "scenario-cafe-greeting",
            title: "Greeting",
            titleArabic: "موقف الدرس",
            summary: "A simple greeting before class.",
            summaryArabic: "تبدأ الحديث مع شخص جديد قبل الصف.",
            culturalContext: "Short greetings sound natural.",
            culturalContextArabic: "التحيات القصيرة تبدو طبيعية أكثر في بداية الحديث.",
            steps: []
          },
          vocabulary: [
            {
              id: "vocab-hello",
              term: "Hello",
              translation: "مرحبًا",
              transliteration: "heh-loh",
              usage: "تحية عامة.",
              exampleEnglish: "Hello, Noor.",
              exampleArabic: "مرحبًا يا نور.",
              supportNoteArabic: "مناسبة في أغلب المواقف."
            },
            {
              id: "vocab-nice-to-meet-you",
              term: "Nice to meet you",
              translation: "سعيد بلقائك",
              transliteration: "nays to meet you",
              usage: "تقال عند أول لقاء.",
              exampleEnglish: "Nice to meet you, Omar.",
              exampleArabic: "سعيد بلقائك يا عمر.",
              supportNoteArabic: "تُستخدم في التعارف الأول."
            },
            {
              id: "vocab-good-morning",
              term: "Good morning",
              translation: "صباح الخير",
              transliteration: "good mor-ning",
              usage: "تحية صباحية.",
              exampleEnglish: "Good morning, Sara.",
              exampleArabic: "صباح الخير يا سارة.",
              supportNoteArabic: "تُستخدم في الصباح."
            }
          ],
          grammarNotes: [],
          exercises: [
            {
              id: "greetings-mc-1",
              type: "multiple_choice",
              title: "Choose the right greeting",
              prompt: "You hear someone say \"Hello.\" Which meaning is correct?",
              instructions: "Pick the correct meaning.",
              explanation: "Hello تعني مرحبًا.",
              support: {
                titleArabic: "اختر التحية المناسبة",
                promptArabic: "تسمع شخصًا يقول: Hello. ما المعنى الصحيح لهذه التحية؟",
                instructionsEnglish: "Pick the correct meaning.",
                instructionsArabic: "اختر المعنى الصحيح.",
                explanationArabic: "Hello تعني مرحبًا."
              },
              correctOptionId: "mc-1",
              options: [
                { id: "mc-1", label: "Hello", value: "Hello", supportLabel: "مرحبًا" },
                { id: "mc-2", label: "Good night", value: "Good night", supportLabel: "تصبح على خير" },
                { id: "mc-3", label: "See you", value: "See you", supportLabel: "أراك لاحقًا" }
              ]
            },
            {
              id: "greetings-order-1",
              type: "sentence_ordering",
              title: "Build the reply",
              prompt: "Create the sentence you would say after someone says, \"Nice to meet you.\"",
              instructions: "Arrange the words to build a natural reply.",
              explanation: "هذا هو الرد الطبيعي بعد Nice to meet you.",
              support: {
                titleArabic: "رتّب الرد",
                promptArabic: "كوّن الجملة التي ستقولها بعد أن يقول لك شخص: «تشرفت بمعرفتك».",
                instructionsEnglish: "Arrange the words to build a natural reply.",
                instructionsArabic: "رتّب الكلمات لتكوين رد طبيعي.",
                explanationArabic: "الرد الصحيح هو: Nice to meet you too."
              },
              tokens: ["Nice", "too", "meet", "you", "to"],
              correctOrder: ["Nice", "to", "meet", "you", "too"]
            },
            {
              id: "greetings-fill-1",
              type: "fill_in_the_blank",
              title: "Complete the phrase",
              prompt: "Complete the morning greeting: \"Good ___, Sara.\"",
              instructions: "Write the missing word.",
              explanation: "الكلمة الصحيحة هي morning.",
              support: {
                titleArabic: "أكمل التحية",
                promptArabic: "أكمل التحية الصباحية التالية بكلمة واحدة صحيحة: «Good ___, Sara.»",
                instructionsEnglish: "Write the missing word.",
                instructionsArabic: "اكتب الكلمة الناقصة.",
                explanationArabic: "Good morning تعني صباح الخير.",
                hintArabic: "كلمة تُستخدم في الصباح."
              },
              sentenceParts: ["Good ", ", Sara."],
              acceptedAnswers: ["morning"],
              hint: "morning"
            }
          ]
        },
        {
          id: "lesson-introducing-yourself",
          slug: "introducing-yourself",
          title: "الدرس 2 | تقديم النفس",
          description: "تعلّم كيف تقول اسمك وبلدك بجمل قصيرة.",
          estimatedMinutes: 11,
          objectives: ["تقديم الاسم", "قول البلد", "الرد بثقة"],
          learnSteps: [
            {
              id: "learn-i-am",
              title: "Name",
              titleArabic: "تعلّم",
              exerciseIndex: 0,
              wordOrPhrase: "I am",
              meaningArabic: "أنا",
              exampleEnglish: "I am Reem.",
              exampleArabic: "أنا ريم.",
              explanationArabic: "نستخدم I am عندما نقول الاسم.",
              pronunciation: "ay am"
            },
            {
              id: "learn-im-from",
              title: "Origin",
              titleArabic: "تعلّم",
              exerciseIndex: 1,
              wordOrPhrase: "I'm from",
              meaningArabic: "أنا من",
              exampleEnglish: "I'm from Jeddah.",
              exampleArabic: "أنا من جدة.",
              explanationArabic: "نستخدم I'm from قبل المدينة أو البلد.",
              pronunciation: "aim from"
            }
          ],
          scenario: {
            id: "scenario-introduction",
            title: "Introduction",
            titleArabic: "موقف الدرس",
            summary: "A short self introduction.",
            summaryArabic: "تقدم نفسك لشخص جديد.",
            culturalContext: "Simple introductions are common.",
            culturalContextArabic: "التعريف القصير بالنفس شائع وطبيعي.",
            steps: []
          },
          vocabulary: [],
          grammarNotes: [],
          exercises: [
            {
              id: "intro-fill-1",
              type: "fill_in_the_blank",
              title: "Complete the sentence",
              prompt: "Complete the sentence so the speaker introduces herself: “I ___ Reem.”",
              instructions: "أكمل الكلمة الناقصة.",
              explanation: "الكلمة الصحيحة هي am.",
              support: {
                titleArabic: "أكمل الجملة",
                promptArabic: "أكمل الجملة حتى تقدّم المتحدثة نفسها بشكل صحيح: «I ___ Reem.»",
                instructionsArabic: "اكتب الكلمة الصحيحة.",
                explanationArabic: "نقول: I am Reem.",
                hintArabic: "تأتي بعد I."
              },
              sentenceParts: ["I ", " Reem."],
              acceptedAnswers: ["am"],
              hint: "am"
            },
            {
              id: "intro-translation-1",
              type: "write_translation",
              title: "Write in English",
              prompt: "Write the English sentence for someone saying they are from Jeddah.",
              instructions: "اكتبها بالإنجليزية.",
              explanation: "الصياغة الصحيحة تبدأ بـ I'm from.",
              support: {
                titleArabic: "اكتب بالإنجليزية",
                promptArabic: "اكتب الجملة الإنجليزية لشخص يقول إنه من جدة.",
                instructionsArabic: "اكتب الجملة كاملة.",
                explanationArabic: "نقول: I'm from Jeddah."
              },
              sourceText: "أنا من جدة.",
              acceptedAnswers: ["i'm from jeddah", "i am from jeddah"],
              sampleAnswer: "I'm from Jeddah."
            }
          ]
        },
        {
          id: "lesson-simple-questions",
          slug: "asking-simple-questions",
          title: "الدرس 3 | أسئلة بسيطة",
          description: "تعلّم كيف تسأل عن الاسم بطريقة قصيرة ومهذبة.",
          estimatedMinutes: 9,
          objectives: ["فهم السؤال", "طرح سؤال قصير"],
          learnSteps: [
            {
              id: "learn-what-is-your-name",
              title: "Question",
              titleArabic: "تعلّم",
              exerciseIndex: 0,
              wordOrPhrase: "What is your name?",
              meaningArabic: "ما اسمك؟",
              exampleEnglish: "What is your name?",
              exampleArabic: "ما اسمك؟",
              explanationArabic: "نستخدم هذا السؤال للتعارف بشكل بسيط.",
              pronunciation: "what is your name"
            }
          ],
          scenario: {
            id: "scenario-question",
            title: "Question",
            titleArabic: "موقف الدرس",
            summary: "You ask for a name.",
            summaryArabic: "تسأل شخصًا جديدًا عن اسمه.",
            culturalContext: "Short questions sound natural.",
            culturalContextArabic: "الأسئلة القصيرة تبدو طبيعية أكثر.",
            steps: []
          },
          vocabulary: [],
          grammarNotes: [],
          exercises: [
            {
              id: "question-mc-1",
              type: "multiple_choice",
              title: "Choose the question",
              prompt: "Which sentence means you are asking someone for their name?",
              instructions: "اختر معنى السؤال الصحيح.",
              explanation: "هذه الجملة تعني: ما اسمك؟",
              support: {
                titleArabic: "اختر معنى السؤال",
                promptArabic: "أي جملة تعني أنك تسأل شخصًا عن اسمه؟",
                instructionsArabic: "اختر الإجابة الصحيحة.",
                explanationArabic: "What is your name? تعني: ما اسمك؟"
              },
              correctOptionId: "q1",
              options: [
                { id: "q1", label: "What is your name?", value: "What is your name?", supportLabel: "ما اسمك؟" },
                { id: "q2", label: "How are you?", value: "How are you?", supportLabel: "كيف حالك؟" },
                { id: "q3", label: "Where are you from?", value: "Where are you from?", supportLabel: "من أين أنت؟" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "unit-daily-life-basics",
      slug: "daily-life-basics",
      title: "الوحدة 2 | أساسيات الحياة اليومية",
      description: "تعلّم كلمات ومواقف بسيطة من الحياة اليومية.",
      lessons: [
        {
          id: "lesson-time-days",
          slug: "time-and-days",
          title: "الدرس 1 | الوقت والأيام",
          description: "ابدأ بأيام الأسبوع وبعض الكلمات الزمنية البسيطة.",
          estimatedMinutes: 9,
          objectives: ["فهم يوم من الأسبوع", "استخدام on مع اليوم"],
          learnSteps: [
            {
              id: "learn-on-monday",
              title: "Day",
              titleArabic: "تعلّم",
              exerciseIndex: 0,
              wordOrPhrase: "On Monday",
              meaningArabic: "يوم الاثنين",
              exampleEnglish: "See you on Monday.",
              exampleArabic: "أراك يوم الاثنين.",
              explanationArabic: "نستخدم on قبل اليوم عندما نتكلم عن موعد.",
              pronunciation: "on monday"
            }
          ],
          scenario: {
            id: "scenario-week-plan",
            title: "Plan",
            titleArabic: "موقف الدرس",
            summary: "A simple plan for the week.",
            summaryArabic: "تحدد موعدًا في يوم من الأسبوع.",
            culturalContext: "Days are often said directly.",
            culturalContextArabic: "أسماء الأيام تقال غالبًا بشكل مباشر وواضح.",
            steps: []
          },
          vocabulary: [],
          grammarNotes: [],
          exercises: []
        },
        {
          id: "lesson-ordering-food",
          slug: "ordering-food",
          title: "الدرس 2 | طلب الطعام",
          description: "تعلّم طلبًا بسيطًا ومهذبًا في المقهى.",
          estimatedMinutes: 10,
          objectives: ["استخدام Please", "طلب بسيط"],
          learnSteps: [
            {
              id: "learn-please",
              title: "Polite word",
              titleArabic: "تعلّم",
              exerciseIndex: 0,
              wordOrPhrase: "Please",
              meaningArabic: "من فضلك",
              exampleEnglish: "Tea, please.",
              exampleArabic: "شاي، من فضلك.",
              explanationArabic: "نضيف Please لتبدو الجملة ألطف وأكثر تهذيبًا.",
              pronunciation: "pleez"
            }
          ],
          scenario: {
            id: "scenario-order",
            title: "Order",
            titleArabic: "موقف الدرس",
            summary: "A short order at the counter.",
            summaryArabic: "تطلب شيئًا بسيطًا عند الكاونتر.",
            culturalContext: "Short polite phrases are common.",
            culturalContextArabic: "العبارات القصيرة والمهذبة تبدو طبيعية في الطلب.",
            steps: []
          },
          vocabulary: [],
          grammarNotes: [],
          exercises: []
        },
        {
          id: "lesson-family",
          slug: "talking-about-family",
          title: "الدرس 3 | الحديث عن العائلة",
          description: "تعلّم كيف تتكلم عن العائلة بكلمات قصيرة وواضحة.",
          estimatedMinutes: 10,
          objectives: ["تسمية فرد من العائلة", "استخدام My"],
          learnSteps: [
            {
              id: "learn-my-brother",
              title: "Family phrase",
              titleArabic: "تعلّم",
              exerciseIndex: 0,
              wordOrPhrase: "My brother",
              meaningArabic: "أخي",
              exampleEnglish: "My brother is Ali.",
              exampleArabic: "أخي هو علي.",
              explanationArabic: "نستخدم My قبل الشخص عندما نتحدث عن شيء يخصنا.",
              pronunciation: "my brother"
            }
          ],
          scenario: {
            id: "scenario-family",
            title: "Family",
            titleArabic: "موقف الدرس",
            summary: "A short family conversation.",
            summaryArabic: "تقول معلومة بسيطة عن العائلة.",
            culturalContext: "Keep the answer simple and warm.",
            culturalContextArabic: "يكفي جواب بسيط ولطيف في هذا النوع من الحديث.",
            steps: []
          },
          vocabulary: [],
          grammarNotes: [],
          exercises: []
        }
      ]
    }
  ]
};
