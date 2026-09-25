/* =========================================================
   WEBBOX 2.0
   FULL SCRIPT
   Compatible with:
   index.html
   style.css
   ========================================================= */


/* =========================================================
   1. DATA
   ========================================================= */

const sites = [

    /* =========================
       GAMES - 20
       ========================= */

    {
        name: "Minecraft",
        url: "https://www.minecraft.net/",
        description: "الموقع الرسمي للعبة Minecraft.",
        category: "games",
        icon: "⛏️",
        visits: 0
    },
    {
        name: "Eaglercraft",
        url: "https://eaglercraft.com/",
        description: "تجربة Minecraft تعمل مباشرة من المتصفح.",
        category: "games",
        icon: "⛏️",
        visits: 0
    },
    {
        name: "Poki",
        url: "https://poki.com/",
        description: "ألعاب مجانية متنوعة تعمل من المتصفح.",
        category: "games",
        icon: "🎮",
        visits: 0
    },
    {
        name: "CrazyGames",
        url: "https://www.crazygames.com/",
        description: "مكتبة كبيرة من ألعاب المتصفح.",
        category: "games",
        icon: "🎮",
        visits: 0
    },
    {
        name: "Scratch",
        url: "https://scratch.mit.edu/",
        description: "إنشاء ومشاركة الألعاب والمشاريع التفاعلية.",
        category: "games",
        icon: "🐱",
        visits: 0
    },
    {
        name: "GeoFS",
        url: "https://www.geo-fs.com/",
        description: "محاكي طيران يعمل مباشرة من المتصفح.",
        category: "games",
        icon: "✈️",
        visits: 0
    },
    {
        name: "itch.io",
        url: "https://itch.io/",
        description: "منصة لألعاب ومشاريع المطورين المستقلين.",
        category: "games",
        icon: "🎮",
        visits: 0
    },
    {
        name: "Chess.com",
        url: "https://www.chess.com/",
        description: "لعب الشطرنج والتدرب ومتابعة المباريات.",
        category: "games",
        icon: "♟️",
        visits: 0
    },
    {
        name: "Lichess",
        url: "https://lichess.org/",
        description: "منصة شطرنج مجانية ومفتوحة المصدر.",
        category: "games",
        icon: "♟️",
        visits: 0
    },
    {
        name: "2048",
        url: "https://play2048.co/",
        description: "لعبة الأرقام الشهيرة 2048.",
        category: "games",
        icon: "🔢",
        visits: 0
    },
    {
        name: "Sudoku",
        url: "https://sudoku.com/",
        description: "لعب Sudoku عبر المتصفح.",
        category: "games",
        icon: "🧩",
        visits: 0
    },
    {
        name: "Jigsaw Explorer",
        url: "https://www.jigsawexplorer.com/",
        description: "ألغاز تركيب الصور على الإنترنت.",
        category: "games",
        icon: "🧩",
        visits: 0
    },
    {
        name: "Coolmath Games",
        url: "https://www.coolmathgames.com/",
        description: "ألعاب متصفح متنوعة.",
        category: "games",
        icon: "🎯",
        visits: 0
    },
    {
        name: "Miniclip",
        url: "https://www.miniclip.com/",
        description: "منصة ألعاب إلكترونية.",
        category: "games",
        icon: "🎮",
        visits: 0
    },
    {
        name: "Game Jolt",
        url: "https://gamejolt.com/",
        description: "منصة ألعاب ومجتمع للمطورين واللاعبين.",
        category: "games",
        icon: "🕹️",
        visits: 0
    },
    {
        name: "Pokémon Showdown",
        url: "https://pokemonshowdown.com/",
        description: "معارك Pokémon استراتيجية عبر الإنترنت.",
        category: "games",
        icon: "⚡",
        visits: 0
    },
    {
        name: "Agar.io",
        url: "https://agar.io/",
        description: "لعبة المتصفح الشهيرة Agar.io.",
        category: "games",
        icon: "🔵",
        visits: 0
    },
    {
        name: "Slither.io",
        url: "https://slither.io/",
        description: "لعبة الثعابين متعددة اللاعبين.",
        category: "games",
        icon: "🐍",
        visits: 0
    },
    {
        name: "Tetris",
        url: "https://tetris.com/play-tetris",
        description: "لعبة Tetris الكلاسيكية.",
        category: "games",
        icon: "🧱",
        visits: 0
    },
    {
        name: "Falling Sand",
        url: "https://sandspiel.club/",
        description: "تجربة محاكاة للرمل والعناصر.",
        category: "games",
        icon: "🏖️",
        visits: 0
    },


    /* =========================
       FUN - 20
       ========================= */

    {
        name: "Neal.fun",
        url: "https://neal.fun/",
        description: "مجموعة من التجارب التفاعلية الممتعة.",
        category: "fun",
        icon: "✨",
        visits: 0
    },
    {
        name: "Quick Draw",
        url: "https://quickdraw.withgoogle.com/",
        description: "حاول الرسم ودع الذكاء الاصطناعي يخمنه.",
        category: "fun",
        icon: "✏️",
        visits: 0
    },
    {
        name: "Google Earth",
        url: "https://earth.google.com/",
        description: "استكشاف العالم من خلال الخرائط والصور.",
        category: "fun",
        icon: "🌍",
        visits: 0
    },
    {
        name: "Radio Garden",
        url: "https://radio.garden/",
        description: "استمع إلى محطات الراديو حول العالم.",
        category: "fun",
        icon: "📻",
        visits: 0
    },
    {
        name: "Stellarium",
        url: "https://stellarium-web.org/",
        description: "استكشاف السماء والنجوم.",
        category: "fun",
        icon: "🌌",
        visits: 0
    },
    {
        name: "WindowSwap",
        url: "https://www.window-swap.com/",
        description: "شاهد من نوافذ أشخاص حول العالم.",
        category: "fun",
        icon: "🪟",
        visits: 0
    },
    {
        name: "Little Alchemy",
        url: "https://littlealchemy.com/",
        description: "اكتشف عناصر جديدة بدمج العناصر.",
        category: "fun",
        icon: "🧪",
        visits: 0
    },
    {
        name: "Pointer Pointer",
        url: "https://pointerpointer.com/",
        description: "تجربة غريبة تعتمد على مؤشر الفأرة.",
        category: "fun",
        icon: "🖱️",
        visits: 0
    },
    {
        name: "Zoomquilt",
        url: "https://zoomquilt.org/",
        description: "تجربة بصرية لا نهائية.",
        category: "fun",
        icon: "🌀",
        visits: 0
    },
    {
        name: "Patatap",
        url: "https://patatap.com/",
        description: "أصوات ورسوم تفاعلية مع لوحة المفاتيح.",
        category: "fun",
        icon: "🎵",
        visits: 0
    },
    {
        name: "Silk",
        url: "https://silkspace.net/",
        description: "ارسم أشكالًا فنية تفاعلية.",
        category: "fun",
        icon: "🎨",
        visits: 0
    },
    {
        name: "The Useless Web",
        url: "https://theuselessweb.com/",
        description: "اضغط وانتقل إلى مواقع غريبة ومضحكة.",
        category: "fun",
        icon: "😂",
        visits: 0
    },
    {
        name: "Bored Button",
        url: "https://www.boredbutton.com/",
        description: "زر يوصلك إلى تجارب عشوائية.",
        category: "fun",
        icon: "🔴",
        visits: 0
    },
    {
        name: "Pointer Pointer",
        url: "https://pointerpointer.com/",
        description: "صور تتفاعل بطريقة غريبة مع مؤشر الفأرة.",
        category: "fun",
        icon: "👆",
        visits: 0
    },
    {
        name: "Earth Nullschool",
        url: "https://earth.nullschool.net/",
        description: "تصور تفاعلي للرياح والطقس على الأرض.",
        category: "fun",
        icon: "🌎",
        visits: 0
    },
    {
        name: "Radiooooo",
        url: "https://radiooooo.com/",
        description: "اكتشف الموسيقى حسب البلد والزمن.",
        category: "fun",
        icon: "🎶",
        visits: 0
    },
    {
        name: "MyNoise",
        url: "https://mynoise.net/",
        description: "أصوات وأجواء للاسترخاء والتركيز.",
        category: "fun",
        icon: "🔊",
        visits: 0
    },
    {
        name: "Rainy Mood",
        url: "https://rainymood.com/",
        description: "أجواء صوت المطر.",
        category: "fun",
        icon: "🌧️",
        visits: 0
    },
    {
        name: "A Soft Murmur",
        url: "https://asoftmurmur.com/",
        description: "مزج أصوات طبيعية مختلفة.",
        category: "fun",
        icon: "🌊",
        visits: 0
    },
    {
        name: "Chrome Music Lab",
        url: "https://musiclab.chromeexperiments.com/",
        description: "تجارب موسيقية تفاعلية من Google.",
        category: "fun",
        icon: "🎹",
        visits: 0
    },


    /* =========================
       EDUCATION - 20
       ========================= */

    {
        name: "Khan Academy",
        url: "https://www.khanacademy.org/",
        description: "دروس وتمارين مجانية في العديد من المواد.",
        category: "education",
        icon: "📚",
        visits: 0
    },
    {
        name: "Coursera",
        url: "https://www.coursera.org/",
        description: "دورات تعليمية من جامعات ومؤسسات مختلفة.",
        category: "education",
        icon: "🎓",
        visits: 0
    },
    {
        name: "edX",
        url: "https://www.edx.org/",
        description: "دورات تعليمية عبر الإنترنت.",
        category: "education",
        icon: "🎓",
        visits: 0
    },
    {
        name: "Duolingo",
        url: "https://www.duolingo.com/",
        description: "تعلم اللغات بطريقة تفاعلية.",
        category: "education",
        icon: "🦉",
        visits: 0
    },
    {
        name: "WolframAlpha",
        url: "https://www.wolframalpha.com/",
        description: "محرك حساب ومعرفة للرياضيات والعلوم.",
        category: "education",
        icon: "🧮",
        visits: 0
    },
    {
        name: "Wikipedia",
        url: "https://www.wikipedia.org/",
        description: "موسوعة حرة تحتوي على ملايين المقالات.",
        category: "education",
        icon: "📖",
        visits: 0
    },
    {
        name: "Brilliant",
        url: "https://brilliant.org/",
        description: "تعلم الرياضيات والعلوم بطريقة تفاعلية.",
        category: "education",
        icon: "💡",
        visits: 0
    },
    {
        name: "MIT OpenCourseWare",
        url: "https://ocw.mit.edu/",
        description: "مواد ودورات تعليمية من MIT.",
        category: "education",
        icon: "🏫",
        visits: 0
    },
    {
        name: "TED-Ed",
        url: "https://ed.ted.com/",
        description: "دروس تعليمية وفيديوهات قصيرة.",
        category: "education",
        icon: "🎥",
        visits: 0
    },
    {
        name: "BBC Learning",
        url: "https://www.bbc.co.uk/learningenglish/",
        description: "موارد لتعلم اللغة الإنجليزية.",
        category: "education",
        icon: "🇬🇧",
        visits: 0
    },
    {
        name: "Quizlet",
        url: "https://quizlet.com/",
        description: "بطاقات تعليمية وأدوات للمراجعة.",
        category: "education",
        icon: "📝",
        visits: 0
    },
    {
        name: "Geogebra",
        url: "https://www.geogebra.org/",
        description: "أدوات تفاعلية للرياضيات والهندسة.",
        category: "education",
        icon: "📐",
        visits: 0
    },
    {
        name: "Desmos",
        url: "https://www.desmos.com/",
        description: "آلة حاسبة ورسوم بيانية تفاعلية.",
        category: "education",
        icon: "📊",
        visits: 0
    },
    {
        name: "Symbolab",
        url: "https://www.symbolab.com/",
        description: "حل مسائل رياضية مع خطوات.",
        category: "education",
        icon: "➗",
        visits: 0
    },
    {
        name: "CK-12",
        url: "https://www.ck12.org/",
        description: "موارد تعليمية مجانية للعلوم والرياضيات.",
        category: "education",
        icon: "🔬",
        visits: 0
    },
    {
        name: "OpenStax",
        url: "https://openstax.org/",
        description: "كتب تعليمية مجانية.",
        category: "education",
        icon: "📚",
        visits: 0
    },
    {
        name: "FutureLearn",
        url: "https://www.futurelearn.com/",
        description: "دورات تعليمية عبر الإنترنت.",
        category: "education",
        icon: "🎓",
        visits: 0
    },
    {
        name: "Study.com",
        url: "https://study.com/",
        description: "موارد ودروس تعليمية.",
        category: "education",
        icon: "📘",
        visits: 0
    },
    {
        name: "PhET",
        url: "https://phet.colorado.edu/",
        description: "محاكاة تفاعلية للعلوم والرياضيات.",
        category: "education",
        icon: "⚗️",
        visits: 0
    },
    {
        name: "NASA Education",
        url: "https://www.nasa.gov/learning-resources/",
        description: "موارد تعليمية عن الفضاء والعلوم.",
        category: "education",
        icon: "🚀",
        visits: 0
    },


    /* =========================
       BOOKS - 20
       ========================= */

    {
        name: "Project Gutenberg",
        url: "https://www.gutenberg.org/",
        description: "مكتبة ضخمة من الكتب الإلكترونية المجانية.",
        category: "books",
        icon: "📚",
        visits: 0
    },
    {
        name: "Internet Archive",
        url: "https://archive.org/",
        description: "مكتبة رقمية ضخمة.",
        category: "books",
        icon: "🗄️",
        visits: 0
    },
    {
        name: "Open Library",
        url: "https://openlibrary.org/",
        description: "فهرس ومكتبة كتب على الإنترنت.",
        category: "books",
        icon: "📖",
        visits: 0
    },
    {
        name: "Google Books",
        url: "https://books.google.com/",
        description: "البحث واستكشاف الكتب.",
        category: "books",
        icon: "📗",
        visits: 0
    },
    {
        name: "ManyBooks",
        url: "https://manybooks.net/",
        description: "كتب إلكترونية متنوعة.",
        category: "books",
        icon: "📚",
        visits: 0
    },
    {
        name: "Standard Ebooks",
        url: "https://standardebooks.org/",
        description: "كتب كلاسيكية مجانية بتنسيق جميل.",
        category: "books",
        icon: "📕",
        visits: 0
    },
    {
        name: "LibriVox",
        url: "https://librivox.org/",
        description: "كتب صوتية من الملكية العامة.",
        category: "books",
        icon: "🎧",
        visits: 0
    },
    {
        name: "Wikisource",
        url: "https://wikisource.org/",
        description: "مكتبة نصوص حرة.",
        category: "books",
        icon: "📜",
        visits: 0
    },
    {
        name: "WorldCat",
        url: "https://www.worldcat.org/",
        description: "البحث في مكتبات العالم.",
        category: "books",
        icon: "🌍",
        visits: 0
    },
    {
        name: "Goodreads",
        url: "https://www.goodreads.com/",
        description: "اكتشاف الكتب ومراجعات القراء.",
        category: "books",
        icon: "📚",
        visits: 0
    },
    {
        name: "BookBub",
        url: "https://www.bookbub.com/",
        description: "اكتشاف الكتب والعروض.",
        category: "books",
        icon: "📕",
        visits: 0
    },
    {
        name: "BookFinder",
        url: "https://www.bookfinder.com/",
        description: "البحث عن الكتب.",
        category: "books",
        icon: "🔎",
        visits: 0
    },
    {
        name: "Feedbooks",
        url: "https://www.feedbooks.com/",
        description: "كتب إلكترونية وكتب كلاسيكية.",
        category: "books",
        icon: "📘",
        visits: 0
    },
    {
        name: "Smashwords",
        url: "https://www.smashwords.com/",
        description: "منصة للكتب الإلكترونية.",
        category: "books",
        icon: "📖",
        visits: 0
    },
    {
        name: "HathiTrust",
        url: "https://www.hathitrust.org/",
        description: "مكتبة رقمية للكتب والمواد الأكاديمية.",
        category: "books",
        icon: "🏛️",
        visits: 0
    },
    {
        name: "Digital Public Library",
        url: "https://dp.la/",
        description: "اكتشاف ملايين المواد الرقمية.",
        category: "books",
        icon: "🏛️",
        visits: 0
    },
    {
        name: "Book Riot",
        url: "https://bookriot.com/",
        description: "مقالات واكتشافات لمحبي القراءة.",
        category: "books",
        icon: "📚",
        visits: 0
    },
    {
        name: "LitCharts",
        url: "https://www.litcharts.com/",
        description: "أدلة وتحليلات للأعمال الأدبية.",
        category: "books",
        icon: "📝",
        visits: 0
    },
    {
        name: "Poetry Foundation",
        url: "https://www.poetryfoundation.org/",
        description: "استكشاف الشعر والشعراء.",
        category: "books",
        icon: "✒️",
        visits: 0
    },
    {
        name: "Poetry International",
        url: "https://www.poetryinternational.com/",
        description: "استكشاف الشعر من دول مختلفة.",
        category: "books",
        icon: "📜",
        visits: 0
    },


    /* =========================
       AI - 20
       ========================= */

    {
        name: "ChatGPT",
        url: "https://chatgpt.com/",
        description: "مساعد ذكاء اصطناعي من OpenAI.",
        category: "ai",
        icon: "🤖",
        visits: 0
    },
    {
        name: "Google Gemini",
        url: "https://gemini.google.com/",
        description: "مساعد الذكاء الاصطناعي من Google.",
        category: "ai",
        icon: "✨",
        visits: 0
    },
    {
        name: "Microsoft Copilot",
        url: "https://copilot.microsoft.com/",
        description: "مساعد ذكاء اصطناعي من Microsoft.",
        category: "ai",
        icon: "🤖",
        visits: 0
    },
    {
        name: "Claude",
        url: "https://claude.ai/",
        description: "مساعد ذكاء اصطناعي من Anthropic.",
        category: "ai",
        icon: "🧠",
        visits: 0
    },
    {
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
        description: "محرك بحث يعتمد على الذكاء الاصطناعي.",
        category: "ai",
        icon: "🔎",
        visits: 0
    },
    {
        name: "Hugging Face",
        url: "https://huggingface.co/",
        description: "منصة لنماذج وأدوات الذكاء الاصطناعي.",
        category: "ai",
        icon: "🤗",
        visits: 0
    },
    {
        name: "DeepL",
        url: "https://www.deepl.com/",
        description: "ترجمة ذكية بالذكاء الاصطناعي.",
        category: "ai",
        icon: "🌐",
        visits: 0
    },
    {
        name: "Grammarly",
        url: "https://www.grammarly.com/",
        description: "مساعدة في الكتابة والتدقيق.",
        category: "ai",
        icon: "✍️",
        visits: 0
    },
    {
        name: "QuillBot",
        url: "https://quillbot.com/",
        description: "أدوات للكتابة وإعادة الصياغة.",
        category: "ai",
        icon: "📝",
        visits: 0
    },
    {
        name: "Poe",
        url: "https://poe.com/",
        description: "منصة للتفاعل مع نماذج ذكاء اصطناعي مختلفة.",
        category: "ai",
        icon: "💬",
        visits: 0
    },
    {
        name: "Character.AI",
        url: "https://character.ai/",
        description: "تجارب محادثة مع شخصيات افتراضية.",
        category: "ai",
        icon: "🤖",
        visits: 0
    },
    {
        name: "Leonardo AI",
        url: "https://leonardo.ai/",
        description: "إنشاء صور باستخدام الذكاء الاصطناعي.",
        category: "ai",
        icon: "🎨",
        visits: 0
    },
    {
        name: "Adobe Firefly",
        url: "https://firefly.adobe.com/",
        description: "أدوات إبداعية بالذكاء الاصطناعي.",
        category: "ai",
        icon: "🔥",
        visits: 0
    },
    {
        name: "Canva AI",
        url: "https://www.canva.com/ai-image-generator/",
        description: "أدوات تصميم مدعومة بالذكاء الاصطناعي.",
        category: "ai",
        icon: "🎨",
        visits: 0
    },
    {
        name: "Gamma",
        url: "https://gamma.app/",
        description: "إنشاء عروض ومحتوى باستخدام AI.",
        category: "ai",
        icon: "📊",
        visits: 0
    },
    {
        name: "NotebookLM",
        url: "https://notebooklm.google/",
        description: "أداة بحث ودراسة تعتمد على الذكاء الاصطناعي.",
        category: "ai",
        icon: "📓",
        visits: 0
    },
    {
        name: "Consensus",
        url: "https://consensus.app/",
        description: "البحث في الأوراق العلمية باستخدام AI.",
        category: "ai",
        icon: "🔬",
        visits: 0
    },
    {
        name: "Elicit",
        url: "https://elicit.com/",
        description: "مساعدة في البحث وتحليل الأوراق العلمية.",
        category: "ai",
        icon: "🔬",
        visits: 0
    },
    {
        name: "Phind",
        url: "https://www.phind.com/",
        description: "مساعد بحث وبرمجة بالذكاء الاصطناعي.",
        category: "ai",
        icon: "💻",
        visits: 0
    },
    {
        name: "Blackbox AI",
        url: "https://www.blackbox.ai/",
        description: "مساعد للبرمجة يعتمد على الذكاء الاصطناعي.",
        category: "ai",
        icon: "💻",
        visits: 0
    },


    /* =========================
       DESIGN - 20
       ========================= */

    {
        name: "Canva",
        url: "https://www.canva.com/",
        description: "تصميم الصور والعروض والمنشورات بسهولة.",
        category: "design",
        icon: "🎨",
        visits: 0
    },
    {
        name: "Figma",
        url: "https://www.figma.com/",
        description: "تصميم واجهات وتجارب المستخدم.",
        category: "design",
        icon: "🖌️",
        visits: 0
    },
    {
        name: "Photopea",
        url: "https://www.photopea.com/",
        description: "محرر صور متقدم يعمل في المتصفح.",
        category: "design",
        icon: "🖼️",
        visits: 0
    },
    {
        name: "Remove.bg",
        url: "https://www.remove.bg/",
        description: "إزالة خلفية الصور.",
        category: "design",
        icon: "✂️",
        visits: 0
    },
    {
        name: "Pixlr",
        url: "https://pixlr.com/",
        description: "تحرير الصور عبر الإنترنت.",
        category: "design",
        icon: "🖼️",
        visits: 0
    },
    {
        name: "Adobe Express",
        url: "https://www.adobe.com/express/",
        description: "أدوات تصميم سريعة.",
        category: "design",
        icon: "🎨",
        visits: 0
    },
    {
        name: "Unsplash",
        url: "https://unsplash.com/",
        description: "صور مجانية عالية الجودة.",
        category: "design",
        icon: "📷",
        visits: 0
    },
    {
        name: "Pexels",
        url: "https://www.pexels.com/",
        description: "صور وفيديوهات مجانية.",
        category: "design",
        icon: "📸",
        visits: 0
    },
    {
        name: "Pixabay",
        url: "https://pixabay.com/",
        description: "صور وفيديوهات ومواد مجانية.",
        category: "design",
        icon: "🌄",
        visits: 0
    },
    {
        name: "Coolors",
        url: "https://coolors.co/",
        description: "إنشاء واكتشاف لوحات الألوان.",
        category: "design",
        icon: "🌈",
        visits: 0
    },
    {
        name: "Color Hunt",
        url: "https://colorhunt.co/",
        description: "لوحات ألوان جاهزة.",
        category: "design",
        icon: "🎨",
        visits: 0
    },
    {
        name: "Google Fonts",
        url: "https://fonts.google.com/",
        description: "مكتبة خطوط مجانية.",
        category: "design",
        icon: "🔤",
        visits: 0
    },
    {
        name: "Font Awesome",
        url: "https://fontawesome.com/",
        description: "مكتبة أيقونات للويب.",
        category: "design",
        icon: "⭐",
        visits: 0
    },
    {
        name: "Flaticon",
        url: "https://www.flaticon.com/",
        description: "مكتبة أيقونات ورسومات.",
        category: "design",
        icon: "🔷",
        visits: 0
    },
    {
        name: "Freepik",
        url: "https://www.freepik.com/",
        description: "موارد ورسومات للتصميم.",
        category: "design",
        icon: "🎨",
        visits: 0
    },
    {
        name: "Vecteezy",
        url: "https://www.vecteezy.com/",
        description: "رسومات وصور متجهة.",
        category: "design",
        icon: "✏️",
        visits: 0
    },
    {
        name: "Icons8",
        url: "https://icons8.com/",
        description: "أيقونات ورسومات وأدوات تصميم.",
        category: "design",
        icon: "🔳",
        visits: 0
    },
    {
        name: "Dribbble",
        url: "https://dribbble.com/",
        description: "استكشاف أعمال المصممين.",
        category: "design",
        icon: "🏀",
        visits: 0
    },
    {
        name: "Behance",
        url: "https://www.behance.net/",
        description: "منصة لعرض الأعمال الإبداعية.",
        category: "design",
        icon: "🎨",
        visits: 0
    },
    {
        name: "Unsplash Source",
        url: "https://source.unsplash.com/",
        description: "مصادر صور من Unsplash.",
        category: "design",
        icon: "📷",
        visits: 0
    },


    /* =========================
       VIDEO - 20
       ========================= */

    {
        name: "YouTube",
        url: "https://www.youtube.com/",
        description: "منصة الفيديو الأشهر على الإنترنت.",
        category: "video",
        icon: "▶️",
        visits: 0
    },
    {
        name: "CapCut",
        url: "https://www.capcut.com/",
        description: "محرر فيديو سهل ومليء بالأدوات.",
        category: "video",
        icon: "🎬",
        visits: 0
    },
    {
        name: "VEED",
        url: "https://www.veed.io/",
        description: "تحرير الفيديو عبر المتصفح.",
        category: "video",
        icon: "🎥",
        visits: 0
    },
    {
        name: "Clipchamp",
        url: "https://clipchamp.com/",
        description: "محرر فيديو من Microsoft.",
        category: "video",
        icon: "🎞️",
        visits: 0
    },
    {
        name: "Vimeo",
        url: "https://vimeo.com/",
        description: "منصة فيديو للمبدعين.",
        category: "video",
        icon: "🎥",
        visits: 0
    },
    {
        name: "Dailymotion",
        url: "https://www.dailymotion.com/",
        description: "منصة لمشاهدة ومشاركة الفيديوهات.",
        category: "video",
        icon: "▶️",
        visits: 0
    },
    {
        name: "Twitch",
        url: "https://www.twitch.tv/",
        description: "بث مباشر ومحتوى ألعاب.",
        category: "video",
        icon: "🎮",
        visits: 0
    },
    {
        name: "TED",
        url: "https://www.ted.com/",
        description: "محادثات وأفكار تعليمية وإبداعية.",
        category: "video",
        icon: "🎤",
        visits: 0
    },
    {
        name: "Netflix",
        url: "https://www.netflix.com/",
        description: "منصة مشاهدة الأفلام والمسلسلات.",
        category: "video",
        icon: "🎬",
        visits: 0
    },
    {
        name: "Internet Archive Video",
        url: "https://archive.org/details/movies",
        description: "أرشيف كبير لمقاطع الفيديو.",
        category: "video",
        icon: "📼",
        visits: 0
    },
    {
        name: "Mixkit",
        url: "https://mixkit.co/",
        description: "موارد فيديو وصوت مجانية.",
        category: "video",
        icon: "🎞️",
        visits: 0
    },
    {
        name: "Coverr",
        url: "https://coverr.co/",
        description: "فيديوهات مجانية للمشاريع.",
        category: "video",
        icon: "🎥",
        visits: 0
    },
    {
        name: "Videvo",
        url: "https://www.videvo.net/",
        description: "فيديوهات ومؤثرات مرئية.",
        category: "video",
        icon: "🎬",
        visits: 0
    },
    {
        name: "Storyblocks",
        url: "https://www.storyblocks.com/",
        description: "مكتبة محتوى إبداعي.",
        category: "video",
        icon: "🎞️",
        visits: 0
    },
    {
        name: "Loom",
        url: "https://www.loom.com/",
        description: "تسجيل ومشاركة الفيديوهات.",
        category: "video",
        icon: "📹",
        visits: 0
    },
    {
        name: "Streamable",
        url: "https://streamable.com/",
        description: "رفع ومشاركة مقاطع الفيديو.",
        category: "video",
        icon: "📤",
        visits: 0
    },
    {
        name: "Kapwing",
        url: "https://www.kapwing.com/",
        description: "أدوات تحرير الفيديو والمحتوى.",
        category: "video",
        icon: "🎬",
        visits: 0
    },
    {
        name: "InVideo",
        url: "https://invideo.io/",
        description: "إنشاء وتحرير الفيديو.",
        category: "video",
        icon: "🎥",
        visits: 0
    },
    {
        name: "Descript",
        url: "https://www.descript.com/",
        description: "تحرير الفيديو والصوت.",
        category: "video",
        icon: "🎙️",
        visits: 0
    },
    {
        name: "DaVinci Resolve",
        url: "https://www.blackmagicdesign.com/products/davinciresolve",
        description: "برنامج احترافي لتحرير الفيديو.",
        category: "video",
        icon: "🎞️",
        visits: 0
    },


    /* =========================
       MUSIC - 20
       ========================= */

    {
        name: "Spotify",
        url: "https://open.spotify.com/",
        description: "استماع إلى الموسيقى والبودكاست.",
        category: "music",
        icon: "🎵",
        visits: 0
    },
    {
        name: "SoundCloud",
        url: "https://soundcloud.com/",
        description: "منصة للموسيقى والصوتيات.",
        category: "music",
        icon: "🎧",
        visits: 0
    },
    {
        name: "YouTube Music",
        url: "https://music.youtube.com/",
        description: "استماع إلى الموسيقى عبر YouTube.",
        category: "music",
        icon: "🎵",
        visits: 0
    },
    {
        name: "Bandcamp",
        url: "https://bandcamp.com/",
        description: "اكتشاف الموسيقى ودعم الفنانين.",
        category: "music",
        icon: "🎶",
        visits: 0
    },
    {
        name: "Deezer",
        url: "https://www.deezer.com/",
        description: "خدمة استماع للموسيقى.",
        category: "music",
        icon: "🎧",
        visits: 0
    },
    {
        name: "Tidal",
        url: "https://tidal.com/",
        description: "خدمة بث موسيقى.",
        category: "music",
        icon: "🎵",
        visits: 0
    },
    {
        name: "Apple Music",
        url: "https://music.apple.com/",
        description: "خدمة الموسيقى من Apple.",
        category: "music",
        icon: "🍎",
        visits: 0
    },
    {
        name: "Genius",
        url: "https://genius.com/",
        description: "معلومات وكلمات الأغاني.",
        category: "music",
        icon: "💡",
        visits: 0
    },
    {
        name: "Musixmatch",
        url: "https://www.musixmatch.com/",
        description: "منصة لمعلومات وكلمات الأغاني.",
        category: "music",
        icon: "🎤",
        visits: 0
    },
    {
        name: "Last.fm",
        url: "https://www.last.fm/",
        description: "تتبع الاستماع واكتشاف الموسيقى.",
        category: "music",
        icon: "🎶",
        visits: 0
    },
    {
        name: "Audiomack",
        url: "https://audiomack.com/",
        description: "اكتشاف والاستماع إلى الموسيقى.",
        category: "music",
        icon: "🎧",
        visits: 0
    },
    {
        name: "Mixcloud",
        url: "https://www.mixcloud.com/",
        description: "مزيج موسيقي وبرامج صوتية.",
        category: "music",
        icon: "🎚️",
        visits: 0
    },
    {
        name: "Jamendo",
        url: "https://www.jamendo.com/",
        description: "اكتشاف موسيقى مستقلة.",
        category: "music",
        icon: "🎼",
        visits: 0
    },
    {
        name: "Free Music Archive",
        url: "https://freemusicarchive.org/",
        description: "مكتبة موسيقى مفتوحة.",
        category: "music",
        icon: "🎵",
        visits: 0
    },
    {
        name: "Musopen",
        url: "https://musopen.org/",
        description: "موسيقى كلاسيكية وموارد موسيقية.",
        category: "music",
        icon: "🎻",
        visits: 0
    },
    {
        name: "Radio Garden",
        url: "https://radio.garden/",
        description: "استمع إلى الراديو حول العالم.",
        category: "music",
        icon: "📻",
        visits: 0
    },
    {
        name: "iHeart",
        url: "https://www.iheart.com/",
        description: "راديو وموسيقى وبودكاست.",
        category: "music",
        icon: "❤️",
        visits: 0
    },
    {
        name: "TuneIn",
        url: "https://tunein.com/",
        description: "محطات راديو وبودكاست.",
        category: "music",
        icon: "📻",
        visits: 0
    },
    {
        name: "Songsterr",
        url: "https://www.songsterr.com/",
        description: "تبويبات موسيقية وتعلم العزف.",
        category: "music",
        icon: "🎸",
        visits: 0
    },
    {
        name: "Ultimate Guitar",
        url: "https://www.ultimate-guitar.com/",
        description: "تبويبات وأكوردات للغيتار.",
        category: "music",
        icon: "🎸",
        visits: 0
    },


    /* =========================
       PROGRAMMING - 20
       ========================= */

    {
        name: "GitHub",
        url: "https://github.com/",
        description: "استضافة المشاريع البرمجية والتعاون.",
        category: "programming",
        icon: "💻",
        visits: 0
    },
    {
        name: "CodePen",
        url: "https://codepen.io/",
        description: "تجربة HTML وCSS وJavaScript.",
        category: "programming",
        icon: "🖊️",
        visits: 0
    },
    {
        name: "JSFiddle",
        url: "https://jsfiddle.net/",
        description: "اختبار أكواد JavaScript وHTML وCSS.",
        category: "programming",
        icon: "🧪",
        visits: 0
    },
    {
        name: "W3Schools",
        url: "https://www.w3schools.com/",
        description: "دروس وأمثلة برمجية.",
        category: "programming",
        icon: "🌐",
        visits: 0
    },
    {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        description: "مرجع شامل لتطوير الويب.",
        category: "programming",
        icon: "📘",
        visits: 0
    },
    {
        name: "Replit",
        url: "https://replit.com/",
        description: "برمجة وتشغيل المشاريع عبر المتصفح.",
        category: "programming",
        icon: "💻",
        visits: 0
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/",
        description: "أسئلة وأجوبة للمبرمجين.",
        category: "programming",
        icon: "💬",
        visits: 0
    },
    {
        name: "Dev.to",
        url: "https://dev.to/",
        description: "مجتمع ومقالات للمطورين.",
        category: "programming",
        icon: "👨‍💻",
        visits: 0
    },
    {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/",
        description: "تعلم البرمجة وتطوير الويب مجانًا.",
        category: "programming",
        icon: "🔥",
        visits: 0
    },
    {
        name: "The Odin Project",
        url: "https://www.theodinproject.com/",
        description: "منهج مجاني لتعلم تطوير الويب.",
        category: "programming",
        icon: "⚔️",
        visits: 0
    },
    {
        name: "Exercism",
        url: "https://exercism.org/",
        description: "تمارين برمجية بلغات مختلفة.",
        category: "programming",
        icon: "💻",
        visits: 0
    },
    {
        name: "HackerRank",
        url: "https://www.hackerrank.com/",
        description: "تمارين وتحديات برمجية.",
        category: "programming",
        icon: "👨‍💻",
        visits: 0
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/",
        description: "تحديات وخوارزميات برمجية.",
        category: "programming",
        icon: "🧩",
        visits: 0
    },
    {
        name: "GitLab",
        url: "https://gitlab.com/",
        description: "منصة DevOps وإدارة المشاريع البرمجية.",
        category: "programming",
        icon: "🦊",
        visits: 0
    },
    {
        name: "Bitbucket",
        url: "https://bitbucket.org/",
        description: "استضافة مستودعات Git.",
        category: "programming",
        icon: "🪣",
        visits: 0
    },
    {
        name: "npm",
        url: "https://www.npmjs.com/",
        description: "مكتبة حزم JavaScript.",
        category: "programming",
        icon: "📦",
        visits: 0
    },
    {
        name: "CodeSandbox",
        url: "https://codesandbox.io/",
        description: "بيئة تطوير تعمل عبر المتصفح.",
        category: "programming",
        icon: "📦",
        visits: 0
    },
    {
        name: "StackBlitz",
        url: "https://stackblitz.com/",
        description: "بيئة تطوير ويب مباشرة.",
        category: "programming",
        icon: "⚡",
        visits: 0
    },
    {
        name: "Godot",
        url: "https://godotengine.org/",
        description: "محرك ألعاب مجاني ومفتوح المصدر.",
        category: "programming",
        icon: "🎮",
        visits: 0
    },
    {
        name: "Unity",
        url: "https://unity.com/",
        description: "محرك وأدوات لتطوير الألعاب.",
        category: "programming",
        icon: "🎮",
        visits: 0
    },


    /* =========================
       TOOLS - 20
       ========================= */

    {
        name: "Google Translate",
        url: "https://translate.google.com/",
        description: "ترجمة النصوص واللغات.",
        category: "tools",
        icon: "🌐",
        visits: 0
    },
    {
        name: "TinyWow",
        url: "https://tinywow.com/",
        description: "مجموعة أدوات مجانية للملفات والمستندات.",
        category: "tools",
        icon: "🛠️",
        visits: 0
    },
    {
        name: "iLovePDF",
        url: "https://www.ilovepdf.com/",
        description: "أدوات للتعامل مع ملفات PDF.",
        category: "tools",
        icon: "📄",
        visits: 0
    },
    {
        name: "QR Code Generator",
        url: "https://www.qr-code-generator.com/",
        description: "إنشاء رموز QR.",
        category: "tools",
        icon: "▦",
        visits: 0
    },
    {
        name: "Speedtest",
        url: "https://www.speedtest.net/",
        description: "اختبار سرعة الإنترنت.",
        category: "tools",
        icon: "⚡",
        visits: 0
    },
    {
        name: "Google Drive",
        url: "https://drive.google.com/",
        description: "تخزين الملفات سحابيًا.",
        category: "tools",
        icon: "☁️",
        visits: 0
    },
    {
        name: "Dropbox",
        url: "https://www.dropbox.com/",
        description: "تخزين ومشاركة الملفات.",
        category: "tools",
        icon: "📦",
        visits: 0
    },
    {
        name: "WeTransfer",
        url: "https://wetransfer.com/",
        description: "إرسال ملفات كبيرة.",
        category: "tools",
        icon: "📤",
        visits: 0
    },
    {
        name: "TinyPNG",
        url: "https://tinypng.com/",
        description: "ضغط الصور وتقليل حجمها.",
        category: "tools",
        icon: "🖼️",
        visits: 0
    },
    {
        name: "CloudConvert",
        url: "https://cloudconvert.com/",
        description: "تحويل الملفات بين الصيغ.",
        category: "tools",
        icon: "🔄",
        visits: 0
    },
    {
        name: "Convertio",
        url: "https://convertio.co/",
        description: "تحويل الملفات عبر الإنترنت.",
        category: "tools",
        icon: "🔄",
        visits: 0
    },
    {
        name: "Canva PDF",
        url: "https://www.canva.com/pdf-editor/",
        description: "أدوات للعمل مع ملفات PDF.",
        category: "tools",
        icon: "📄",
        visits: 0
    },
    {
        name: "Google Docs",
        url: "https://docs.google.com/",
        description: "إنشاء وتحرير المستندات.",
        category: "tools",
        icon: "📝",
        visits: 0
    },
    {
        name: "Google Sheets",
        url: "https://sheets.google.com/",
        description: "جداول بيانات عبر الإنترنت.",
        category: "tools",
        icon: "📊",
        visits: 0
    },
    {
        name: "Google Slides",
        url: "https://slides.google.com/",
        description: "إنشاء العروض التقديمية.",
        category: "tools",
        icon: "📽️",
        visits: 0
    },
    {
        name: "Notion",
        url: "https://www.notion.so/",
        description: "تنظيم الملاحظات والمشاريع.",
        category: "tools",
        icon: "📓",
        visits: 0
    },
    {
        name: "Trello",
        url: "https://trello.com/",
        description: "تنظيم المشاريع والمهام.",
        category: "tools",
        icon: "📋",
        visits: 0
    },
    {
        name: "Timer",
        url: "https://timer.onlineclock.net/",
        description: "مؤقت بسيط عبر الإنترنت.",
        category: "tools",
        icon: "⏱️",
        visits: 0
    },
    {
        name: "Online Stopwatch",
        url: "https://www.online-stopwatch.com/",
        description: "ساعة توقيت ومؤقتات.",
        category: "tools",
        icon: "⏱️",
        visits: 0
    },
    {
        name: "What Is My IP",
        url: "https://www.whatismyip.com/",
        description: "معرفة معلومات عنوان IP.",
        category: "tools",
        icon: "🌐",
        visits: 0
    }

];


/* =========================================================
   2. CATEGORIES
   ========================================================= */

const categoryNames = {
    games: "الألعاب",
    fun: "مسلية",
    education: "التعليم",
    books: "الكتب",
    ai: "الذكاء الاصطناعي",
    design: "التصميم",
    video: "الفيديو",
    music: "الموسيقى",
    programming: "البرمجة",
    tools: "الأدوات"
};

const categoryIcons = {
    games: "🎮",
    fun: "🎉",
    education: "📚",
    books: "📖",
    ai: "🤖",
    design: "🎨",
    video: "🎬",
    music: "🎵",
    programming: "💻",
    tools: "🛠️"
};


/* =========================================================
   3. STATE
   ========================================================= */

let favorites = [];
let recentSites = [];
let currentCategory = "all";
let currentSearch = "";
let currentView = "grid";
let currentModalSite = null;


/* =========================================================
   4. STORAGE
   ========================================================= */

function loadStorage() {

    try {

        favorites =
            JSON.parse(localStorage.getItem("webboxFavorites")) || [];

    } catch {

        favorites = [];

    }


    try {

        recentSites =
            JSON.parse(localStorage.getItem("webboxRecent")) || [];

    } catch {

        recentSites = [];

    }


    const savedVisits =
        localStorage.getItem("webboxVisits");

    if (savedVisits) {

        try {

            const visits = JSON.parse(savedVisits);

            sites.forEach(site => {

                if (visits[site.name]) {

                    site.visits = visits[site.name];

                }

            });

        } catch {}

    }

}


function saveFavorites() {

    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );

}


function saveRecent() {

    localStorage.setItem(
        "webboxRecent",
        JSON.stringify(recentSites)
    );

}


function saveVisits() {

    const visits = {};

    sites.forEach(site => {

        visits[site.name] = site.visits || 0;

    });

    localStorage.setItem(
        "webboxVisits",
        JSON.stringify(visits)
    );

}


/* =========================================================
   5. THEME
   ========================================================= */

function toggleDarkMode() {

    const body = document.body;

    body.classList.toggle("dark");

    const isDark =
        body.classList.contains("dark");

    localStorage.setItem(
        "webboxTheme",
        isDark ? "dark" : "light"
    );

    updateDarkModeButton();

}


function applySavedTheme() {

    const saved =
        localStorage.getItem("webboxTheme");

    if (saved === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

    updateDarkModeButton();

}


function updateDarkModeButton() {

    const button =
        document.getElementById("darkModeBtn");

    if (!button) return;

    const isDark =
        document.body.classList.contains("dark");

    button.textContent =
        isDark ? "☀️" : "🌙";

    button.title =
        isDark
            ? "الوضع النهاري"
            : "الوضع الليلي";

}


/* =========================================================
   6. NAVIGATION
   ========================================================= */

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(".page-section");

    sections.forEach(section => {

        section.classList.remove("active");

    });


    const target =
        document.getElementById(sectionId);

    if (!target) {

        console.error(
            "القسم غير موجود:",
            sectionId
        );

        return;

    }


    target.classList.add("active");


    updateNavigation(sectionId);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (sectionId === "sites") {

        renderSites();

    }

    if (sectionId === "categories") {

        renderCategories();

    }

    if (sectionId === "fun") {

        renderFun();

    }

    if (sectionId === "gaming") {

        renderGaming();

    }

    if (sectionId === "favorites") {

        renderFavorites();

    }

    if (sectionId === "recent") {

        renderRecent();

    }


    closeMobileMenu();

}


function showHome() {

    showSection("home");

}


function showCategories() {

    showSection("categories");

}


function showFun() {

    showSection("fun");

}


function showGaming() {

    showSection("gaming");

}


function showFavorites() {

    showSection("favorites");

}


function showRecent() {

    showSection("recent");

}


function updateNavigation(sectionId) {

    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.remove("active");

            if (
                button.dataset.section === sectionId
            ) {

                button.classList.add("active");

            }

        });

}


/* =========================================================
   7. CATEGORY FILTER
   ========================================================= */

function filterCategory(category) {

    currentCategory = category;
    currentSearch = "";

    const search =
        document.getElementById("siteSearch");

    if (search) {

        search.value = "";

    }


    const select =
        document.getElementById("categorySelect");

    if (select) {

        select.value = category;

    }


    showSection("sites");

    renderSites();

}


/* =========================================================
   8. SITE CARD
   ========================================================= */

function createSiteCard(site) {

    const isFavorite =
        favorites.includes(site.name);

    const card =
        document.createElement("article");

    card.className = "site-card";


    card.innerHTML = `

        <div class="site-icon">
            ${site.icon || "🌐"}
        </div>

        <div class="site-content">

            <h3>${escapeHTML(site.name)}</h3>

            <p>
                ${escapeHTML(site.description)}
            </p>

            <span class="site-category">
                ${categoryIcons[site.category] || "🌐"}
                ${categoryNames[site.category] || site.category}
            </span>

        </div>

        <div class="site-actions">

            <button
                class="open-site-btn"
                onclick="openSite('${escapeAttribute(site.name)}')">
                🚀 فتح الموقع
            </button>

            <button
                class="favorite-btn ${isFavorite ? "favorite-active" : ""}"
                onclick="toggleFavorite('${escapeAttribute(site.name)}')"
                title="إضافة للمفضلة">
                ${isFavorite ? "❤️" : "🤍"}
            </button>

        </div>

    `;


    card.addEventListener(
        "dblclick",
        () => openSiteDetails(site.name)
    );


    return card;

}


/* =========================================================
   9. RENDER SITES
   ========================================================= */

function renderSites(
    searchText = currentSearch,
    category = currentCategory
) {

    const container =
        document.getElementById("sitesContainer");

    if (!container) return;


    currentSearch =
        String(searchText || "").trim();

    currentCategory =
        category || "all";


    let filtered =
        sites.filter(site => {

            const matchesCategory =
                currentCategory === "all" ||
                site.category === currentCategory;


            const text =
                currentSearch.toLowerCase();

            const matchesSearch =
                !text ||
                site.name.toLowerCase().includes(text) ||
                site.description.toLowerCase().includes(text) ||
                categoryNames[site.category]
                    ?.toLowerCase()
                    .includes(text);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    const sort =
        document.getElementById("sortSelect");


    const sortValue =
        sort ? sort.value : "default";


    if (sortValue === "name") {

        filtered.sort((a, b) =>
            a.name.localeCompare(
                b.name,
                "ar"
            )
        );

    }


    if (sortValue === "popular") {

        filtered.sort(
            (a, b) =>
                (b.visits || 0) -
                (a.visits || 0)
        );

    }


    if (sortValue === "favorites") {

        filtered.sort(
            (a, b) =>
                Number(
                    favorites.includes(b.name)
                ) -
                Number(
                    favorites.includes(a.name)
                )
        );

    }


    container.innerHTML = "";


    if (currentView === "list") {

        container.classList.add("list-view");

    } else {

        container.classList.remove("list-view");

    }


    if (!filtered.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🔎
                </div>

                <h3>
                    لم نجد أي موقع
                </h3>

                <p>
                    جرّب كلمة بحث أخرى أو غيّر التصنيف.
                </p>

            </div>

        `;

    } else {

        filtered.forEach(site => {

            container.appendChild(
                createSiteCard(site)
            );

        });

    }


    updateResultText(filtered.length);

}


/* =========================================================
   10. FILTER SITE LIST
   ========================================================= */

function filterSiteList() {

    const search =
        document.getElementById("siteSearch");

    const select =
        document.getElementById("categorySelect");


    currentSearch =
        search ? search.value : "";

    currentCategory =
        select ? select.value : "all";


    renderSites(
        currentSearch,
        currentCategory
    );

}


/* =========================================================
   11. MAIN SEARCH
   ========================================================= */

function performMainSearch() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;


    const query =
        input.value.trim();


    if (!query) {

        showSection("sites");

        return;

    }


    showSection("sites");


    const siteSearch =
        document.getElementById("siteSearch");

    if (siteSearch) {

        siteSearch.value = query;

    }


    const category =
        document.getElementById("categorySelect");

    if (category) {

        category.value = "all";

    }


    currentSearch = query;
    currentCategory = "all";

    renderSites();

}


function searchSites() {

    performMainSearch();

}


function useExample(text) {

    const input =
        document.getElementById("searchInput");

    if (!input) return;


    input.value = text;

    performMainSearch();

}


/* =========================================================
   12. SMART SEARCH
   ========================================================= */

function updateSmartResults() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("smartResults");

    if (!input || !results) return;


    const query =
        input.value.trim().toLowerCase();


    results.innerHTML = "";


    if (!query) return;


    const matches =
        sites
            .filter(site =>
                site.name.toLowerCase().includes(query) ||
                site.description.toLowerCase().includes(query) ||
                categoryNames[site.category]
                    ?.toLowerCase()
                    .includes(query)
            )
            .slice(0, 6);


    matches.forEach(site => {

        const item =
            document.createElement("button");

        item.className =
            "smart-result";

        item.type = "button";


        item.innerHTML = `

            <span class="smart-result-icon">
                ${site.icon || "🌐"}
            </span>

            <span>
                <strong>
                    ${escapeHTML(site.name)}
                </strong>

                <small>
                    ${escapeHTML(
                        categoryNames[site.category]
                    )}
                </small>
            </span>

        `;


        item.addEventListener(
            "click",
            () => {

                input.value =
                    site.name;

                results.innerHTML = "";

                openSiteDetails(
                    site.name
                );

            }
        );


        results.appendChild(item);

    });

}


/* =========================================================
   13. RANDOM SITE
   ========================================================= */

function randomSite() {

    if (!sites.length) return;


    const site =
        sites[
            Math.floor(
                Math.random() * sites.length
            )
        ];


    openSiteDetails(site.name);

}


/* =========================================================
   14. OPEN SITE
   ========================================================= */

function openSite(name) {

    const site =
        sites.find(
            item => item.name === name
        );


    if (!site) return;


    site.visits =
        (site.visits || 0) + 1;


    saveVisits();

    addToRecent(site);

    updateCounters();


    window.open(
        site.url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   15. SITE MODAL
   ========================================================= */

function openSiteDetails(name) {

    const site =
        sites.find(
            item => item.name === name
        );


    if (!site) return;


    currentModalSite = site;


    const modal =
        document.getElementById("siteModal");

    if (!modal) return;


    document.getElementById("modalIcon")
        .textContent =
        site.icon || "🌐";


    document.getElementById("modalTitle")
        .textContent =
        site.name;


    document.getElementById("modalDescription")
        .textContent =
        site.description;


    document.getElementById("modalCategory")
        .textContent =
        `${categoryIcons[site.category] || "🌐"} ${
            categoryNames[site.category] || site.category
        }`;


    document.getElementById("modalVisits")
        .textContent =
        site.visits || 0;


    updateModalFavorite();


    const openButton =
        document.getElementById("modalOpenBtn");


    const favoriteButton =
        document.getElementById("modalFavoriteBtn");


    if (openButton) {

        openButton.onclick =
            () => openSite(site.name);

    }


    if (favoriteButton) {

        favoriteButton.onclick =
            () => {

                toggleFavorite(
                    site.name
                );

                updateModalFavorite();

            };

    }


    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function updateModalFavorite() {

    const icon =
        document.getElementById("modalFavorite");

    if (!icon || !currentModalSite) return;


    icon.textContent =
        favorites.includes(
            currentModalSite.name
        )
            ? "❤️"
            : "🤍";

}


function closeSiteModal() {

    const modal =
        document.getElementById("siteModal");

    if (!modal) return;


    modal.classList.remove("show");

    document.body.style.overflow = "";

    currentModalSite = null;

}


function closeModal(event) {

    if (
        event.target &&
        event.target.id === "siteModal"
    ) {

        closeSiteModal();

    }

}


/* =========================================================
   16. FAVORITES
   ========================================================= */

function toggleFavorite(name) {

    const index =
        favorites.indexOf(name);


    if (index === -1) {

        favorites.push(name);

        showToast(
            "❤️ تمت إضافة الموقع إلى المفضلة"
        );

    } else {

        favorites.splice(index, 1);

        showToast(
            "🤍 تمت إزالة الموقع من المفضلة"
        );

    }


    saveFavorites();

    updateCounters();

    updateModalFavorite();


    renderCurrentPage();

}


function renderFavorites() {

    const container =
        document.getElementById(
            "favoritesContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    const favoriteSites =
        sites.filter(site =>
            favorites.includes(site.name)
        );


    if (!favoriteSites.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ❤️
                </div>

                <h3>
                    لا توجد مواقع مفضلة
                </h3>

                <p>
                    اضغط على ❤️ بجانب أي موقع لإضافته هنا.
                </p>

            </div>

        `;

        return;

    }


    favoriteSites.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });

}


/* =========================================================
   17. RECENT
   ========================================================= */

function addToRecent(site) {

    recentSites =
        recentSites.filter(
            item => item !== site.name
        );


    recentSites.unshift(
        site.name
    );


    recentSites =
        recentSites.slice(0, 20);


    saveRecent();

}


function renderRecent() {

    const container =
        document.getElementById(
            "recentContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    const recent =
        recentSites
            .map(name =>
                sites.find(
                    site =>
                        site.name === name
                )
            )
            .filter(Boolean);


    if (!recent.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🕘
                </div>

                <h3>
                    لا يوجد سجل بعد
                </h3>

                <p>
                    المواقع التي تفتحها ستظهر هنا.
                </p>

            </div>

        `;

        return;

    }


    recent.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });

}


function clearHistory() {

    recentSites = [];

    saveRecent();

    renderRecent();

    showToast(
        "🗑️ تم مسح السجل"
    );

}


/* =========================================================
   18. CATEGORIES RENDER
   ========================================================= */

function createCategoryCard(
    category
) {

    const count =
        sites.filter(
            site =>
                site.category === category
        ).length;


    const card =
        document.createElement("button");

    card.className =
        "category-card";


    card.type = "button";


    card.innerHTML = `

        <div class="category-icon">
            ${categoryIcons[category] || "🌐"}
        </div>

        <h3>
            ${escapeHTML(
                categoryNames[category]
            )}
        </h3>

        <p>
            ${count} موقع
        </p>

    `;


    card.addEventListener(
        "click",
        () => filterCategory(category)
    );


    return card;

}


function renderCategories() {

    const containers = [
        document.getElementById(
            "categoriesContainer"
        ),
        document.getElementById(
            "homeCategories"
        )
    ];


    containers.forEach(container => {

        if (!container) return;


        container.innerHTML = "";


        Object.keys(categoryNames)
            .forEach(category => {

                container.appendChild(
                    createCategoryCard(
                        category
                    )
                );

            });

    });

}


/* =========================================================
   19. FUN
   ========================================================= */

function renderFun() {

    const container =
        document.getElementById(
            "funContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    sites
        .filter(site =>
            site.category === "fun"
        )
        .forEach(site => {

            container.appendChild(
                createSiteCard(site)
            );

        });

}


/* =========================================================
   20. GAMING
   ========================================================= */

function renderGaming() {

    const container =
        document.getElementById(
            "gamingContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    sites
        .filter(site =>
            site.category === "games"
        )
        .forEach(site => {

            container.appendChild(
                createSiteCard(site)
            );

        });

}


/* =========================================================
   21. FEATURED
   ========================================================= */

function renderFeatured() {

    const container =
        document.getElementById(
            "featuredContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    const featuredNames = [
        "Minecraft",
        "ChatGPT",
        "YouTube",
        "Canva",
        "GitHub",
        "Spotify"
    ];


    featuredNames.forEach(name => {

        const site =
            sites.find(
                item =>
                    item.name === name
            );


        if (site) {

            container.appendChild(
                createSiteCard(site)
            );

        }

    });

}


/* =========================================================
   22. COUNTERS
   ========================================================= */

function updateCounters() {

    const totalSites =
        document.getElementById(
            "totalSites"
        );

    const totalCategories =
        document.getElementById(
            "totalCategories"
        );

    const totalFavorites =
        document.getElementById(
            "totalFavorites"
        );

    const totalVisits =
        document.getElementById(
            "totalVisits"
        );


    if (totalSites) {

        totalSites.textContent =
            sites.length;

    }


    if (totalCategories) {

        totalCategories.textContent =
            Object.keys(
                categoryNames
            ).length;

    }


    if (totalFavorites) {

        totalFavorites.textContent =
            favorites.length;

    }


    if (totalVisits) {

        const visits =
            sites.reduce(
                (total, site) =>
                    total +
                    (site.visits || 0),
                0
            );

        totalVisits.textContent =
            visits;

    }

}


function updateResultText(count) {

    const result =
        document.getElementById(
            "resultText"
        );

    if (!result) return;


    result.textContent =
        `${count} موقع`;

}


/* =========================================================
   23. VIEW MODE
   ========================================================= */

function setViewMode(mode) {

    currentView = mode;


    const gridButton =
        document.getElementById(
            "gridViewBtn"
        );

    const listButton =
        document.getElementById(
            "listViewBtn"
        );


    if (gridButton) {

        gridButton.classList.toggle(
            "active",
            mode === "grid"
        );

    }


    if (listButton) {

        listButton.classList.toggle(
            "active",
            mode === "list"
        );

    }


    const container =
        document.getElementById(
            "sitesContainer"
        );


    if (container) {

        container.classList.toggle(
            "list-view",
            mode === "list"
        );

    }


    renderSites();

}


/* =========================================================
   24. CLEAR FILTERS
   ========================================================= */

function clearFilters() {

    currentSearch = "";

    currentCategory = "all";


    const search =
        document.getElementById(
            "siteSearch"
        );

    const category =
        document.getElementById(
            "categorySelect"
        );

    const sort =
        document.getElementById(
            "sortSelect"
        );


    if (search) {

        search.value = "";

    }


    if (category) {

        category.value = "all";

    }


    if (sort) {

        sort.value = "default";

    }


    renderSites();

    showToast(
        "🔄 تمت إعادة ضبط الفلاتر"
    );

}


/* =========================================================
   25. CATEGORY SELECT
   ========================================================= */

function populateCategorySelect() {

    const select =
        document.getElementById(
            "categorySelect"
        );

    if (!select) return;


    select.innerHTML = `

        <option value="all">
            كل التصنيفات
        </option>

    `;


    Object.keys(categoryNames)
        .forEach(category => {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                category;

            option.textContent =
                categoryNames[category];

            select.appendChild(
                option
            );

        });

}


/* =========================================================
   26. MOBILE MENU
   ========================================================= */

function toggleMobileMenu() {

    const menu =
        document.getElementById(
            "mobileNav"
        );

    if (!menu) return;


    menu.classList.toggle(
        "show"
    );

}


function closeMobileMenu() {

    const menu =
        document.getElementById(
            "mobileNav"
        );

    if (!menu) return;


    menu.classList.remove(
        "show"
    );

}


/* =========================================================
   27. VOICE SEARCH
   ========================================================= */

function startVoiceSearch() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        showToast(
            "🎤 البحث الصوتي غير مدعوم في هذا المتصفح"
        );

        return;

    }


    const recognition =
        new SpeechRecognition();


    recognition.lang =
        "ar-DZ";


    recognition.interimResults =
        false;


    recognition.maxAlternatives =
        1;


    recognition.onstart = () => {

        showToast(
            "🎤 تحدث الآن..."
        );

    };


    recognition.onresult =
        event => {

            const text =
                event.results[0][0].transcript;


            const input =
                document.getElementById(
                    "searchInput"
                );


            if (input) {

                input.value = text;

            }


            performMainSearch();

        };


    recognition.onerror = () => {

        showToast(
            "❌ تعذر تنفيذ البحث الصوتي"
        );

    };


    recognition.start();

}


/* =========================================================
   28. TOAST
   ========================================================= */

let toastTimer = null;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   29. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function escapeAttribute(value) {

    return String(value)
        .replaceAll("\\", "\\\\")
        .replaceAll("'", "\\'")
        .replaceAll('"', "&quot;");

}


/* =========================================================
   30. CURRENT PAGE REFRESH
   ========================================================= */

function renderCurrentPage() {

    const active =
        document.querySelector(
            ".page-section.active"
        );


    if (!active) return;


    switch (active.id) {

        case "home":
            renderFeatured();
            renderCategories();
            break;

        case "categories":
            renderCategories();
            break;

        case "sites":
            renderSites();
            break;

        case "fun":
            renderFun();
            break;

        case "gaming":
            renderGaming();
            break;

        case "favorites":
            renderFavorites();
            break;

        case "recent":
            renderRecent();
            break;

    }

}


/* =========================================================
   31. KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /* Ctrl + K */

        if (
            (event.ctrlKey ||
                event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();


            const input =
                document.getElementById(
                    "searchInput"
                );


            if (input) {

                input.focus();

                input.select();

            }

        }


        /* Enter in main search */

        if (
            event.key === "Enter" &&
            document.activeElement?.id ===
                "searchInput"
        ) {

            performMainSearch();

        }


        /* Escape */

        if (event.key === "Escape") {

            closeSiteModal();

            closeMobileMenu();

        }

    }
);


/* =========================================================
   32. EVENTS
   ========================================================= */

function setupEvents() {

    const mainSearch =
        document.getElementById(
            "searchInput"
        );


    if (mainSearch) {

        mainSearch.addEventListener(
            "input",
            updateSmartResults
        );

    }


    const siteSearch =
        document.getElementById(
            "siteSearch"
        );


    if (siteSearch) {

        siteSearch.addEventListener(
            "input",
            filterSiteList
        );

    }


    const category =
        document.getElementById(
            "categorySelect"
        );


    if (category) {

        category.addEventListener(
            "change",
            filterSiteList
        );

    }


    const sort =
        document.getElementById(
            "sortSelect"
        );


    if (sort) {

        sort.addEventListener(
            "change",
            filterSiteList
        );

    }


    /* إخفاء نتائج البحث الذكية عند الضغط خارجها */

    document.addEventListener(
        "click",
        event => {

            const results =
                document.getElementById(
                    "smartResults"
                );

            const search =
                document.querySelector(
                    ".main-search"
                );


            if (
                results &&
                search &&
                !search.contains(event.target)
            ) {

                results.innerHTML = "";

            }

        }
    );

}


/* =========================================================
   33. STORAGE SYNC
   ========================================================= */

window.addEventListener(
    "storage",
    event => {

        if (
            event.key ===
            "webboxTheme"
        ) {

            applySavedTheme();

        }


        if (
            event.key ===
            "webboxFavorites"
        ) {

            loadStorage();

            updateCounters();

            renderCurrentPage();

        }

    }
);


/* =========================================================
   34. INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadStorage();

        applySavedTheme();

        populateCategorySelect();

        renderFeatured();

        renderCategories();

        renderSites();

        updateCounters();

        setupEvents();

        console.log(
            `WebBox loaded: ${sites.length} sites`
        );

    }
);


/* =========================================================
   35. GLOBAL FUNCTIONS
   ========================================================= */

window.showSection =
    showSection;

window.showHome =
    showHome;

window.showCategories =
    showCategories;

window.showFun =
    showFun;

window.showGaming =
    showGaming;

window.showFavorites =
    showFavorites;

window.showRecent =
    showRecent;

window.filterCategory =
    filterCategory;

window.filterSiteList =
    filterSiteList;

window.searchSites =
    searchSites;

window.performMainSearch =
    performMainSearch;

window.useExample =
    useExample;

window.randomSite =
    randomSite;

window.openSite =
    openSite;

window.openSiteDetails =
    openSiteDetails;

window.closeSiteModal =
    closeSiteModal;

window.closeModal =
    closeModal;

window.toggleFavorite =
    toggleFavorite;

window.clearHistory =
    clearHistory;

window.setViewMode =
    setViewMode;

window.clearFilters =
    clearFilters;

window.toggleDarkMode =
    toggleDarkMode;

window.toggleMobileMenu =
    toggleMobileMenu;

window.startVoiceSearch =
    startVoiceSearch;
