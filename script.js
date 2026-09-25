/* =========================================================
   WebBox - script.js
   200 موقع بالضبط
   20 موقعًا في كل تصنيف
   ========================================================= */

const sites = [

    /* =========================
       🎮 الألعاب - 20
       ========================= */
    {
        name: "Minecraft",
        url: "https://www.minecraft.net/",
        category: "games",
        description: "الموقع الرسمي للعبة Minecraft."
    },
    {
        name: "Eaglercraft",
        url: "https://eaglercraft.com/",
        category: "games",
        description: "العب Minecraft مباشرة من المتصفح."
    },
    {
        name: "Poki",
        url: "https://poki.com/",
        category: "games",
        description: "مجموعة كبيرة من ألعاب المتصفح."
    },
    {
        name: "CrazyGames",
        url: "https://www.crazygames.com/",
        category: "games",
        description: "ألعاب مجانية تعمل مباشرة في المتصفح."
    },
    {
        name: "Scratch",
        url: "https://scratch.mit.edu/",
        category: "games",
        description: "اصنع ألعابك وقصصك التفاعلية."
    },
    {
        name: "GeoFS",
        url: "https://www.geo-fs.com/",
        category: "games",
        description: "محاكي طيران يعمل من المتصفح."
    },
    {
        name: "itch.io",
        url: "https://itch.io/",
        category: "games",
        description: "منصة لألعاب المطورين المستقلين."
    },
    {
        name: "Chess.com",
        url: "https://www.chess.com/",
        category: "games",
        description: "لعب الشطرنج والتدرب على الإنترنت."
    },
    {
        name: "Lichess",
        url: "https://lichess.org/",
        category: "games",
        description: "منصة شطرنج مجانية ومفتوحة المصدر."
    },
    {
        name: "2048",
        url: "https://play2048.co/",
        category: "games",
        description: "لعبة الأرقام الشهيرة 2048."
    },
    {
        name: "Sudoku",
        url: "https://sudoku.com/",
        category: "games",
        description: "العب Sudoku على الإنترنت."
    },
    {
        name: "Jigsaw Explorer",
        url: "https://www.jigsawexplorer.com/",
        category: "games",
        description: "ألغاز تركيب الصور على الإنترنت."
    },
    {
        name: "Coolmath Games",
        url: "https://www.coolmathgames.com/",
        category: "games",
        description: "ألعاب متنوعة للمتصفح."
    },
    {
        name: "Miniclip",
        url: "https://www.miniclip.com/",
        category: "games",
        description: "منصة ألعاب إلكترونية."
    },
    {
        name: "Game Jolt",
        url: "https://gamejolt.com/",
        category: "games",
        description: "مجتمع ومنصة لألعاب المطورين."
    },
    {
        name: "Pokémon Showdown",
        url: "https://pokemonshowdown.com/",
        category: "games",
        description: "معارك Pokémon عبر الإنترنت."
    },
    {
        name: "Armor Games",
        url: "https://armorgames.com/",
        category: "games",
        description: "ألعاب متصفح متنوعة."
    },
    {
        name: "Kongregate",
        url: "https://www.kongregate.com/",
        category: "games",
        description: "منصة ألعاب على الإنترنت."
    },
    {
        name: "Newgrounds",
        url: "https://www.newgrounds.com/",
        category: "games",
        description: "ألعاب ورسوم ومشاريع إبداعية."
    },
    {
        name: "Slither.io",
        url: "https://slither.io/",
        category: "games",
        description: "لعبة الثعابين متعددة اللاعبين."
    },


    /* =========================
       🎉 مسلية - 20
       ========================= */
    {
        name: "Neal.fun",
        url: "https://neal.fun/",
        category: "fun",
        description: "مجموعة من التجارب التفاعلية الممتعة."
    },
    {
        name: "Quick Draw",
        url: "https://quickdraw.withgoogle.com/",
        category: "fun",
        description: "حاول الرسم ودع الذكاء الاصطناعي يخمنه."
    },
    {
        name: "Google Earth",
        url: "https://earth.google.com/",
        category: "fun",
        description: "استكشف العالم من جهازك."
    },
    {
        name: "Radio Garden",
        url: "https://radio.garden/",
        category: "fun",
        description: "استمع إلى محطات الراديو حول العالم."
    },
    {
        name: "Stellarium",
        url: "https://stellarium-web.org/",
        category: "fun",
        description: "استكشف السماء والنجوم."
    },
    {
        name: "WindowSwap",
        url: "https://www.window-swap.com/",
        category: "fun",
        description: "شاهد من نوافذ أشخاص حول العالم."
    },
    {
        name: "Little Alchemy",
        url: "https://littlealchemy.com/",
        category: "fun",
        description: "ادمج العناصر واكتشف أشياء جديدة."
    },
    {
        name: "Pointer Pointer",
        url: "https://pointerpointer.com/",
        category: "fun",
        description: "تجربة ويب طريفة تعتمد على مؤشر الماوس."
    },
    {
        name: "Zoomquilt",
        url: "https://zoomquilt.org/",
        category: "fun",
        description: "تجربة بصرية لا نهائية."
    },
    {
        name: "Patatap",
        url: "https://patatap.com/",
        category: "fun",
        description: "اصنع أصواتًا ورسومًا تفاعلية."
    },
    {
        name: "Silk",
        url: "https://silk.kano.me/",
        category: "fun",
        description: "ارسم أعمالًا فنية تفاعلية."
    },
    {
        name: "The Useless Web",
        url: "https://theuselessweb.com/",
        category: "fun",
        description: "اكتشف مواقع عشوائية وغريبة."
    },
    {
        name: "A Soft Murmur",
        url: "https://asoftmurmur.com/",
        category: "fun",
        description: "امزج أصواتًا هادئة من الطبيعة."
    },
    {
        name: "Rainy Mood",
        url: "https://www.rainymood.com/",
        category: "fun",
        description: "أجواء صوت المطر."
    },
    {
        name: "This Is Sand",
        url: "https://thisissand.com/",
        category: "fun",
        description: "تجربة رسم بالرمل."
    },
    {
        name: "Bored Button",
        url: "https://www.boredbutton.com/",
        category: "fun",
        description: "اضغط الزر لاكتشاف تجربة عشوائية."
    },
    {
        name: "FutureMe",
        url: "https://www.futureme.org/",
        category: "fun",
        description: "اكتب رسالة لنفسك في المستقبل."
    },
    {
        name: "MapCrunch",
        url: "https://www.mapcrunch.com/",
        category: "fun",
        description: "استكشف أماكن عشوائية حول العالم."
    },
    {
        name: "GeoGuessr",
        url: "https://www.geoguessr.com/",
        category: "fun",
        description: "اختبر معرفتك بجغرافيا العالم."
    },
    {
        name: "The Wiki Game",
        url: "https://www.thewikigame.com/",
        category: "fun",
        description: "انتقل بين صفحات ويكيبيديا في تحديات."
    },


    /* =========================
       📚 التعليم - 20
       ========================= */
    {
        name: "Khan Academy",
        url: "https://www.khanacademy.org/",
        category: "education",
        description: "دروس وتمارين مجانية في عدة مواد."
    },
    {
        name: "Coursera",
        url: "https://www.coursera.org/",
        category: "education",
        description: "دورات تعليمية عبر الإنترنت."
    },
    {
        name: "edX",
        url: "https://www.edx.org/",
        category: "education",
        description: "دورات تعليمية من جامعات ومؤسسات."
    },
    {
        name: "Duolingo",
        url: "https://www.duolingo.com/",
        category: "education",
        description: "تعلم اللغات بطريقة تفاعلية."
    },
    {
        name: "WolframAlpha",
        url: "https://www.wolframalpha.com/",
        category: "education",
        description: "محرك معرفة وحسابات علمية."
    },
    {
        name: "Wikipedia",
        url: "https://www.wikipedia.org/",
        category: "education",
        description: "موسوعة حرة متعددة اللغات."
    },
    {
        name: "MIT OpenCourseWare",
        url: "https://ocw.mit.edu/",
        category: "education",
        description: "مواد ودروس من MIT."
    },
    {
        name: "OpenStax",
        url: "https://openstax.org/",
        category: "education",
        description: "كتب تعليمية مجانية."
    },
    {
        name: "Codecademy",
        url: "https://www.codecademy.com/",
        category: "education",
        description: "تعلم البرمجة بشكل تفاعلي."
    },
    {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/",
        category: "education",
        description: "تعلم البرمجة وتطوير الويب مجانًا."
    },
    {
        name: "TED-Ed",
        url: "https://ed.ted.com/",
        category: "education",
        description: "دروس تعليمية قصيرة وممتعة."
    },
    {
        name: "Brilliant",
        url: "https://brilliant.org/",
        category: "education",
        description: "تعلم الرياضيات والعلوم بطريقة تفاعلية."
    },
    {
        name: "Quizlet",
        url: "https://quizlet.com/",
        category: "education",
        description: "بطاقات وأساليب للمراجعة."
    },
    {
        name: "Desmos",
        url: "https://www.desmos.com/",
        category: "education",
        description: "آلات حاسبة ورسوم بيانية تفاعلية."
    },
    {
        name: "CK-12",
        url: "https://www.ck12.org/",
        category: "education",
        description: "موارد تعليمية مجانية."
    },
    {
        name: "PhET",
        url: "https://phet.colorado.edu/",
        category: "education",
        description: "محاكاة تفاعلية للعلوم والرياضيات."
    },
    {
        name: "BBC Bitesize",
        url: "https://www.bbc.co.uk/bitesize",
        category: "education",
        description: "موارد تعليمية ومراجعة."
    },
    {
        name: "FutureLearn",
        url: "https://www.futurelearn.com/",
        category: "education",
        description: "دورات تعليمية عبر الإنترنت."
    },
    {
        name: "Alison",
        url: "https://alison.com/",
        category: "education",
        description: "دورات تعليمية ومهارات."
    },
    {
        name: "OpenLearn",
        url: "https://www.open.edu/openlearn/",
        category: "education",
        description: "مواد ودورات تعليمية مجانية."
    },


    /* =========================
       📖 الكتب - 20
       ========================= */
    {
        name: "Project Gutenberg",
        url: "https://www.gutenberg.org/",
        category: "books",
        description: "مكتبة ضخمة من الكتب الإلكترونية المجانية."
    },
    {
        name: "Internet Archive",
        url: "https://archive.org/",
        category: "books",
        description: "أرشيف رقمي ضخم للكتب والوسائط."
    },
    {
        name: "Open Library",
        url: "https://openlibrary.org/",
        category: "books",
        description: "مكتبة إلكترونية مفتوحة."
    },
    {
        name: "Google Books",
        url: "https://books.google.com/",
        category: "books",
        description: "البحث في ملايين الكتب."
    },
    {
        name: "ManyBooks",
        url: "https://manybooks.net/",
        category: "books",
        description: "مكتبة للكتب الإلكترونية."
    },
    {
        name: "Standard Ebooks",
        url: "https://standardebooks.org/",
        category: "books",
        description: "كتب كلاسيكية مجانية بتنسيق جميل."
    },
    {
        name: "LibriVox",
        url: "https://librivox.org/",
        category: "books",
        description: "كتب صوتية من الملكية العامة."
    },
    {
        name: "Wikisource",
        url: "https://wikisource.org/",
        category: "books",
        description: "مكتبة نصوص حرة."
    },
    {
        name: "HathiTrust",
        url: "https://www.hathitrust.org/",
        category: "books",
        description: "مكتبة رقمية أكاديمية."
    },
    {
        name: "WorldCat",
        url: "https://www.worldcat.org/",
        category: "books",
        description: "ابحث عن الكتب في المكتبات حول العالم."
    },
    {
        name: "OpenStax Books",
        url: "https://openstax.org/subjects",
        category: "books",
        description: "كتب تعليمية مجانية ومفتوحة."
    },
    {
        name: "BookBub",
        url: "https://www.bookbub.com/",
        category: "books",
        description: "اكتشف الكتب والعروض الجديدة."
    },
    {
        name: "Goodreads",
        url: "https://www.goodreads.com/",
        category: "books",
        description: "اكتشف الكتب وسجل قراءاتك."
    },
    {
        name: "LibraryThing",
        url: "https://www.librarything.com/",
        category: "books",
        description: "نظم مكتبتك واكتشف كتبًا جديدة."
    },
    {
        name: "The Online Books Page",
        url: "https://onlinebooks.library.upenn.edu/",
        category: "books",
        description: "فهرس للكتب الإلكترونية المجانية."
    },
    {
        name: "Bartleby",
        url: "https://www.bartleby.com/",
        category: "books",
        description: "كتب ومراجع أدبية وتعليمية."
    },
    {
        name: "Poetry Foundation",
        url: "https://www.poetryfoundation.org/",
        category: "books",
        description: "مجموعة كبيرة من الشعر."
    },
    {
        name: "Poets.org",
        url: "https://poets.org/",
        category: "books",
        description: "مورد للشعراء والقصائد."
    },
    {
        name: "Classic Reader",
        url: "https://www.classicreader.com/",
        category: "books",
        description: "كتب وقصص كلاسيكية."
    },
    {
        name: "ISFDB",
        url: "https://www.isfdb.org/",
        category: "books",
        description: "قاعدة بيانات للخيال العلمي والفانتازيا."
    },


    /* =========================
       🤖 الذكاء الاصطناعي - 20
       ========================= */
    {
        name: "ChatGPT",
        url: "https://chatgpt.com/",
        category: "ai",
        description: "مساعد ذكاء اصطناعي للمحادثة والكتابة."
    },
    {
        name: "Google Gemini",
        url: "https://gemini.google.com/",
        category: "ai",
        description: "مساعد الذكاء الاصطناعي من Google."
    },
    {
        name: "Microsoft Copilot",
        url: "https://copilot.microsoft.com/",
        category: "ai",
        description: "مساعد الذكاء الاصطناعي من Microsoft."
    },
    {
        name: "Claude",
        url: "https://claude.ai/",
        category: "ai",
        description: "مساعد ذكاء اصطناعي للمحادثة والعمل."
    },
    {
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
        category: "ai",
        description: "محرك بحث مدعوم بالذكاء الاصطناعي."
    },
    {
        name: "Poe",
        url: "https://poe.com/",
        category: "ai",
        description: "منصة للمحادثة مع نماذج ذكاء اصطناعي."
    },
    {
        name: "Hugging Face",
        url: "https://huggingface.co/",
        category: "ai",
        description: "منصة لنماذج وأدوات الذكاء الاصطناعي."
    },
    {
        name: "Google AI Studio",
        url: "https://aistudio.google.com/",
        category: "ai",
        description: "أدوات Google لتجربة نماذج الذكاء الاصطناعي."
    },
    {
        name: "NotebookLM",
        url: "https://notebooklm.google.com/",
        category: "ai",
        description: "مساعد للبحث والتعامل مع المصادر."
    },
    {
        name: "Phind",
        url: "https://www.phind.com/",
        category: "ai",
        description: "مساعد ذكاء اصطناعي للمطورين."
    },
    {
        name: "You.com",
        url: "https://you.com/",
        category: "ai",
        description: "بحث ومساعدات تعتمد على الذكاء الاصطناعي."
    },
    {
        name: "Character.AI",
        url: "https://character.ai/",
        category: "ai",
        description: "منصة للتفاعل مع شخصيات ذكاء اصطناعي."
    },
    {
        name: "Grammarly",
        url: "https://www.grammarly.com/",
        category: "ai",
        description: "مساعدة في الكتابة والقواعد."
    },
    {
        name: "QuillBot",
        url: "https://quillbot.com/",
        category: "ai",
        description: "أدوات للكتابة وإعادة الصياغة."
    },
    {
        name: "DeepL Write",
        url: "https://www.deepl.com/write",
        category: "ai",
        description: "مساعد لتحسين الكتابة."
    },
    {
        name: "Gamma",
        url: "https://gamma.app/",
        category: "ai",
        description: "إنشاء عروض ومحتوى تفاعلي."
    },
    {
        name: "Canva AI",
        url: "https://www.canva.com/ai-image-generator/",
        category: "ai",
        description: "أدوات ذكاء اصطناعي للتصميم."
    },
    {
        name: "Adobe Firefly",
        url: "https://firefly.adobe.com/",
        category: "ai",
        description: "أدوات إبداعية بالذكاء الاصطناعي."
    },
    {
        name: "Leonardo AI",
        url: "https://leonardo.ai/",
        category: "ai",
        description: "إنشاء صور ومحتوى بصري بالذكاء الاصطناعي."
    },
    {
        name: "Ideogram",
        url: "https://ideogram.ai/",
        category: "ai",
        description: "إنشاء صور بالذكاء الاصطناعي."
    },


    /* =========================
       🎨 التصميم - 20
       ========================= */
    {
        name: "Canva",
        url: "https://www.canva.com/",
        category: "design",
        description: "تصميم الصور والعروض والمحتوى."
    },
    {
        name: "Figma",
        url: "https://www.figma.com/",
        category: "design",
        description: "تصميم واجهات وتجارب المستخدم."
    },
    {
        name: "Photopea",
        url: "https://www.photopea.com/",
        category: "design",
        description: "محرر صور متقدم يعمل من المتصفح."
    },
    {
        name: "Pixlr",
        url: "https://pixlr.com/",
        category: "design",
        description: "تحرير الصور عبر الإنترنت."
    },
    {
        name: "Adobe Express",
        url: "https://www.adobe.com/express/",
        category: "design",
        description: "أدوات تصميم سهلة وسريعة."
    },
    {
        name: "Adobe Color",
        url: "https://color.adobe.com/",
        category: "design",
        description: "إنشاء واستكشاف لوحات الألوان."
    },
    {
        name: "Coolors",
        url: "https://coolors.co/",
        category: "design",
        description: "إنشاء لوحات ألوان بسرعة."
    },
    {
        name: "Unsplash",
        url: "https://unsplash.com/",
        category: "design",
        description: "صور عالية الجودة."
    },
    {
        name: "Pexels",
        url: "https://www.pexels.com/",
        category: "design",
        description: "صور وفيديوهات مجانية."
    },
    {
        name: "Freepik",
        url: "https://www.freepik.com/",
        category: "design",
        description: "موارد ورسومات للتصميم."
    },
    {
        name: "Flaticon",
        url: "https://www.flaticon.com/",
        category: "design",
        description: "مجموعة ضخمة من الأيقونات."
    },
    {
        name: "Icons8",
        url: "https://icons8.com/",
        category: "design",
        description: "أيقونات وصور وموارد تصميم."
    },
    {
        name: "Font Awesome",
        url: "https://fontawesome.com/",
        category: "design",
        description: "مكتبة أيقونات للمواقع والتطبيقات."
    },
    {
        name: "Google Fonts",
        url: "https://fonts.google.com/",
        category: "design",
        description: "خطوط مجانية للويب والتصميم."
    },
    {
        name: "DaFont",
        url: "https://www.dafont.com/",
        category: "design",
        description: "مكتبة كبيرة من الخطوط."
    },
    {
        name: "Font Squirrel",
        url: "https://www.fontsquirrel.com/",
        category: "design",
        description: "خطوط مجانية للاستخدام."
    },
    {
        name: "Remove.bg",
        url: "https://www.remove.bg/",
        category: "design",
        description: "إزالة خلفية الصور."
    },
    {
        name: "TinyPNG",
        url: "https://tinypng.com/",
        category: "design",
        description: "ضغط الصور وتقليل حجمها."
    },
    {
        name: "Squoosh",
        url: "https://squoosh.app/",
        category: "design",
        description: "ضغط وتحسين الصور."
    },
    {
        name: "Excalidraw",
        url: "https://excalidraw.com/",
        category: "design",
        description: "رسم المخططات والأفكار بسهولة."
    },


    /* =========================
       🎬 الفيديو - 20
       ========================= */
    {
        name: "YouTube",
        url: "https://www.youtube.com/",
        category: "video",
        description: "منصة الفيديو الشهيرة."
    },
    {
        name: "CapCut",
        url: "https://www.capcut.com/",
        category: "video",
        description: "تحرير الفيديو بسهولة."
    },
    {
        name: "VEED",
        url: "https://www.veed.io/",
        category: "video",
        description: "محرر فيديو عبر الإنترنت."
    },
    {
        name: "Clipchamp",
        url: "https://clipchamp.com/",
        category: "video",
        description: "إنشاء وتحرير الفيديو."
    },
    {
        name: "Canva Video",
        url: "https://www.canva.com/create/videos/",
        category: "video",
        description: "إنشاء فيديوهات باستخدام Canva."
    },
    {
        name: "Adobe Express Video",
        url: "https://www.adobe.com/express/create/video",
        category: "video",
        description: "إنشاء فيديوهات بسرعة."
    },
    {
        name: "Kapwing",
        url: "https://www.kapwing.com/",
        category: "video",
        description: "تحرير الفيديو والمحتوى."
    },
    {
        name: "InVideo",
        url: "https://invideo.io/",
        category: "video",
        description: "أدوات لإنشاء الفيديو."
    },
    {
        name: "FlexClip",
        url: "https://www.flexclip.com/",
        category: "video",
        description: "محرر فيديو عبر الإنترنت."
    },
    {
        name: "Descript",
        url: "https://www.descript.com/",
        category: "video",
        description: "تحرير الفيديو والصوت بطريقة مختلفة."
    },
    {
        name: "DaVinci Resolve",
        url: "https://www.blackmagicdesign.com/products/davinciresolve",
        category: "video",
        description: "برنامج احترافي لتحرير الفيديو."
    },
    {
        name: "OBS Studio",
        url: "https://obsproject.com/",
        category: "video",
        description: "تسجيل الشاشة والبث المباشر."
    },
    {
        name: "HandBrake",
        url: "https://handbrake.fr/",
        category: "video",
        description: "تحويل وضغط ملفات الفيديو."
    },
    {
        name: "VLC",
        url: "https://www.videolan.org/vlc/",
        category: "video",
        description: "مشغل وسائط مجاني."
    },
    {
        name: "Pexels Videos",
        url: "https://www.pexels.com/videos/",
        category: "video",
        description: "فيديوهات مجانية."
    },
    {
        name: "Pixabay Videos",
        url: "https://pixabay.com/videos/",
        category: "video",
        description: "مقاطع فيديو مجانية."
    },
    {
        name: "Mixkit",
        url: "https://mixkit.co/",
        category: "video",
        description: "فيديوهات ومؤثرات مجانية."
    },
    {
        name: "Coverr",
        url: "https://coverr.co/",
        category: "video",
        description: "فيديوهات مجانية للمشاريع."
    },
    {
        name: "Videvo",
        url: "https://www.videvo.net/",
        category: "video",
        description: "فيديوهات وموارد مرئية."
    },
    {
        name: "Loom",
        url: "https://www.loom.com/",
        category: "video",
        description: "تسجيل الشاشة ومشاركة الفيديو."
    },


    /* =========================
       🎵 الموسيقى - 20
       ========================= */
    {
        name: "Spotify",
        url: "https://open.spotify.com/",
        category: "music",
        description: "استمع إلى الموسيقى والبودكاست."
    },
    {
        name: "SoundCloud",
        url: "https://soundcloud.com/",
        category: "music",
        description: "منصة لاكتشاف ومشاركة الموسيقى."
    },
    {
        name: "YouTube Music",
        url: "https://music.youtube.com/",
        category: "music",
        description: "خدمة الموسيقى من YouTube."
    },
    {
        name: "Bandcamp",
        url: "https://bandcamp.com/",
        category: "music",
        description: "اكتشف موسيقى الفنانين المستقلين."
    },
    {
        name: "Audiomack",
        url: "https://audiomack.com/",
        category: "music",
        description: "منصة للاستماع واكتشاف الموسيقى."
    },
    {
        name: "Deezer",
        url: "https://www.deezer.com/",
        category: "music",
        description: "خدمة بث موسيقى."
    },
    {
        name: "TIDAL",
        url: "https://tidal.com/",
        category: "music",
        description: "منصة موسيقى وصوت عالي الجودة."
    },
    {
        name: "Mixcloud",
        url: "https://www.mixcloud.com/",
        category: "music",
        description: "استمع إلى برامج ومزج موسيقي."
    },
    {
        name: "Last.fm",
        url: "https://www.last.fm/",
        category: "music",
        description: "تتبع اكتشافاتك الموسيقية."
    },
    {
        name: "Musixmatch",
        url: "https://www.musixmatch.com/",
        category: "music",
        description: "معلومات وكلمات الأغاني."
    },
    {
        name: "Genius",
        url: "https://genius.com/",
        category: "music",
        description: "معلومات وتحليلات عن الأغاني."
    },
    {
        name: "WhoSampled",
        url: "https://www.whosampled.com/",
        category: "music",
        description: "اكتشف العينات والاقتباسات الموسيقية."
    },
    {
        name: "Internet Archive Audio",
        url: "https://archive.org/details/audio",
        category: "music",
        description: "أرشيف رقمي للمواد الصوتية."
    },
    {
        name: "Free Music Archive",
        url: "https://freemusicarchive.org/",
        category: "music",
        description: "موسيقى مجانية ومفتوحة."
    },
    {
        name: "Jamendo",
        url: "https://www.jamendo.com/",
        category: "music",
        description: "اكتشف موسيقى مستقلة."
    },
    {
        name: "Pixabay Music",
        url: "https://pixabay.com/music/",
        category: "music",
        description: "موسيقى ومقاطع صوتية مجانية."
    },
    {
        name: "Epidemic Sound",
        url: "https://www.epidemicsound.com/",
        category: "music",
        description: "مكتبة موسيقى ومؤثرات للمحتوى."
    },
    {
        name: "HookSounds",
        url: "https://www.hooksounds.com/",
        category: "music",
        description: "موسيقى ومؤثرات للمشاريع."
    },
    {
        name: "Soundtrap",
        url: "https://www.soundtrap.com/",
        category: "music",
        description: "إنشاء الموسيقى والتعاون أونلاين."
    },
    {
        name: "Audiotool",
        url: "https://www.audiotool.com/",
        category: "music",
        description: "استوديو موسيقى يعمل من المتصفح."
    },


    /* =========================
       💻 البرمجة - 20
       ========================= */
    {
        name: "GitHub",
        url: "https://github.com/",
        category: "programming",
        description: "استضافة المشاريع البرمجية."
    },
    {
        name: "GitLab",
        url: "https://gitlab.com/",
        category: "programming",
        description: "منصة DevOps واستضافة المشاريع."
    },
    {
        name: "Bitbucket",
        url: "https://bitbucket.org/",
        category: "programming",
        description: "استضافة مستودعات Git."
    },
    {
        name: "CodePen",
        url: "https://codepen.io/",
        category: "programming",
        description: "جرب HTML وCSS وJavaScript مباشرة."
    },
    {
        name: "JSFiddle",
        url: "https://jsfiddle.net/",
        category: "programming",
        description: "بيئة لتجربة JavaScript والويب."
    },
    {
        name: "W3Schools",
        url: "https://www.w3schools.com/",
        category: "programming",
        description: "دروس وأمثلة برمجية."
    },
    {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        category: "programming",
        description: "توثيق شامل لتقنيات الويب."
    },
    {
        name: "Replit",
        url: "https://replit.com/",
        category: "programming",
        description: "برمجة وتشغيل المشاريع من المتصفح."
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/",
        category: "programming",
        description: "أسئلة وأجوبة للمبرمجين."
    },
    {
        name: "npm",
        url: "https://www.npmjs.com/",
        category: "programming",
        description: "سجل حزم JavaScript."
    },
    {
        name: "PyPI",
        url: "https://pypi.org/",
        category: "programming",
        description: "مستودع حزم Python."
    },
    {
        name: "Docker Hub",
        url: "https://hub.docker.com/",
        category: "programming",
        description: "مستودع صور Docker."
    },
    {
        name: "Vercel",
        url: "https://vercel.com/",
        category: "programming",
        description: "نشر تطبيقات ومواقع الويب."
    },
    {
        name: "Netlify",
        url: "https://www.netlify.com/",
        category: "programming",
        description: "استضافة ونشر مواقع الويب."
    },
    {
        name: "Glitch",
        url: "https://glitch.com/",
        category: "programming",
        description: "إنشاء وتجربة مشاريع الويب."
    },
    {
        name: "CodeSandbox",
        url: "https://codesandbox.io/",
        category: "programming",
        description: "بيئة تطوير للمشاريع البرمجية."
    },
    {
        name: "JS Bin",
        url: "https://jsbin.com/",
        category: "programming",
        description: "تجربة HTML وCSS وJavaScript."
    },
    {
        name: "DevDocs",
        url: "https://devdocs.io/",
        category: "programming",
        description: "توثيق برمجي في مكان واحد."
    },
    {
        name: "Exercism",
        url: "https://exercism.org/",
        category: "programming",
        description: "تمارين لتعلم البرمجة."
    },
    {
        name: "HackerRank",
        url: "https://www.hackerrank.com/",
        category: "programming",
        description: "تحديات وتمارين برمجية."
    },


    /* =========================
       🛠️ الأدوات - 20
       ========================= */
    {
        name: "Google Translate",
        url: "https://translate.google.com/",
        category: "tools",
        description: "ترجمة النصوص واللغات."
    },
    {
        name: "TinyWow",
        url: "https://tinywow.com/",
        category: "tools",
        description: "مجموعة أدوات مجانية للملفات."
    },
    {
        name: "iLovePDF",
        url: "https://www.ilovepdf.com/",
        category: "tools",
        description: "أدوات PDF متعددة."
    },
    {
        name: "QR Code Generator",
        url: "https://www.qr-code-generator.com/",
        category: "tools",
        description: "إنشاء رموز QR."
    },
    {
        name: "Speedtest",
        url: "https://www.speedtest.net/",
        category: "tools",
        description: "اختبار سرعة الإنترنت."
    },
    {
        name: "Google Drive",
        url: "https://drive.google.com/",
        category: "tools",
        description: "تخزين الملفات على الإنترنت."
    },
    {
        name: "Google Docs",
        url: "https://docs.google.com/",
        category: "tools",
        description: "إنشاء وتحرير المستندات."
    },
    {
        name: "Google Sheets",
        url: "https://sheets.google.com/",
        category: "tools",
        description: "جداول بيانات على الإنترنت."
    },
    {
        name: "Google Forms",
        url: "https://forms.google.com/",
        category: "tools",
        description: "إنشاء الاستبيانات والنماذج."
    },
    {
        name: "Google Keep",
        url: "https://keep.google.com/",
        category: "tools",
        description: "ملاحظات وقوائم سريعة."
    },
    {
        name: "Trello",
        url: "https://trello.com/",
        category: "tools",
        description: "تنظيم المهام والمشاريع."
    },
    {
        name: "Notion",
        url: "https://www.notion.so/",
        category: "tools",
        description: "تنظيم الملاحظات والمشاريع."
    },
    {
        name: "Dropbox",
        url: "https://www.dropbox.com/",
        category: "tools",
        description: "تخزين ومشاركة الملفات."
    },
    {
        name: "WeTransfer",
        url: "https://wetransfer.com/",
        category: "tools",
        description: "إرسال الملفات بسهولة."
    },
    {
        name: "Wayback Machine",
        url: "https://web.archive.org/",
        category: "tools",
        description: "مشاهدة نسخ قديمة من المواقع."
    },
    {
        name: "VirusTotal",
        url: "https://www.virustotal.com/",
        category: "tools",
        description: "فحص الملفات والروابط."
    },
    {
        name: "Have I Been Pwned",
        url: "https://haveibeenpwned.com/",
        category: "tools",
        description: "تحقق من ظهور بريدك في تسريبات معروفة."
    },
    {
        name: "URLVoid",
        url: "https://www.urlvoid.com/",
        category: "tools",
        description: "فحص سمعة المواقع والروابط."
    },
    {
        name: "Can I Use",
        url: "https://caniuse.com/",
        category: "tools",
        description: "تحقق من دعم تقنيات الويب في المتصفحات."
    },
    {
        name: "Smallpdf",
        url: "https://smallpdf.com/",
        category: "tools",
        description: "أدوات للتعامل مع ملفات PDF."
    }
];


/* =========================================================
   التصنيفات
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
   التحقق من العدد
   ========================================================= */

console.log("WebBox:", sites.length, "موقع");

if (sites.length !== 200) {
    console.warn("⚠️ عدد المواقع ليس 200!");
}


/* =========================================================
   المفضلة
   ========================================================= */

let favorites = JSON.parse(localStorage.getItem("webboxFavorites")) || [];


/* =========================================================
   الوضع الليلي
   ========================================================= */

function initTheme() {
    const savedTheme = localStorage.getItem("webboxTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const theme = document.body.classList.contains("light-mode")
        ? "light"
        : "dark";

    localStorage.setItem("webboxTheme", theme);
}


/* =========================================================
   إظهار الأقسام
   ========================================================= */

function showSection(sectionId) {

    const sections = document.querySelectorAll(
        ".page-section, section"
    );

    sections.forEach(section => {
        section.classList.remove("active");

        if (section.id) {
            section.style.display = "none";
        }
    });

    const target = document.getElementById(sectionId);

    if (!target) {
        console.error("القسم غير موجود:", sectionId);
        return;
    }

    target.classList.add("active");
    target.style.display = "block";

    updateNavigation(sectionId);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   التنقل
   ========================================================= */

function updateNavigation(sectionId) {

    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {
        button.classList.remove("active");
    });

    navButtons.forEach(button => {

        const onclick = button.getAttribute("onclick") || "";

        if (
            onclick.includes(`showSection('${sectionId}')`) ||
            onclick.includes(`showSection("${sectionId}")`) ||
            (sectionId === "home" && onclick.includes("showHome()")) ||
            (sectionId === "categories" && onclick.includes("showCategories()")) ||
            (sectionId === "fun" && onclick.includes("showFun()")) ||
            (sectionId === "gaming" && onclick.includes("showGaming()")) ||
            (sectionId === "favorites" && onclick.includes("showFavorites()"))
        ) {
            button.classList.add("active");
        }
    });
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
    renderFavorites();
}


/* =========================================================
   البحث في المواقع
   ========================================================= */

function searchSites() {

    const input = document.getElementById("siteSearch");

    if (!input) return;

    const searchText = input.value.trim().toLowerCase();

    const select = document.getElementById("categorySelect");

    if (select) {
        select.value = "all";
    }

    renderSites(searchText, "all");

    showSection("sites");
}


/* =========================================================
   البحث السريع
   ========================================================= */

function quickSearch(text) {

    const input = document.getElementById("siteSearch");

    if (input) {
        input.value = text;
    }

    showSection("sites");

    renderSites(text.toLowerCase(), "all");
}


/* =========================================================
   فلترة التصنيف
   ========================================================= */

function filterCategory(category) {

    showSection("sites");

    const select = document.getElementById("categorySelect");

    if (select) {
        select.value = category;
    }

    const search = document.getElementById("siteSearch");

    if (search) {
        search.value = "";
    }

    filterSiteList();
}


/* =========================================================
   فلترة قائمة المواقع
   ========================================================= */

function filterSiteList() {

    const searchInput = document.getElementById("siteSearch");
    const categorySelect = document.getElementById("categorySelect");

    const searchText = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const category = categorySelect
        ? categorySelect.value
        : "all";

    renderSites(searchText, category);
}


/* =========================================================
   رسم المواقع
   ========================================================= */

function renderSites(searchText = "", category = "all") {

    const container =
        document.getElementById("sitesGrid") ||
        document.getElementById("sitesContainer") ||
        document.getElementById("sitesList");

    if (!container) {
        console.warn("لم يتم العثور على حاوية المواقع.");
        return;
    }

    let filteredSites = sites.filter(site => {

        const matchesSearch =
            !searchText ||
            site.name.toLowerCase().includes(searchText) ||
            site.description.toLowerCase().includes(searchText) ||
            categoryNames[site.category].toLowerCase().includes(searchText);

        const matchesCategory =
            category === "all" ||
            site.category === category;

        return matchesSearch && matchesCategory;
    });

    container.innerHTML = "";

    if (filteredSites.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <div style="font-size:3rem;">🔎</div>
                <h3>لم نجد أي موقع</h3>
                <p>جرّب كلمة بحث أخرى أو اختر تصنيفًا مختلفًا.</p>
            </div>
        `;

        updateSiteCount(0);
        return;
    }

    filteredSites.forEach(site => {

        const card = createSiteCard(site);

        container.appendChild(card);
    });

    updateSiteCount(filteredSites.length);
}


/* =========================================================
   إنشاء بطاقة الموقع
   ========================================================= */

function createSiteCard(site) {

    const card = document.createElement("article");

    card.className = "site-card";

    const isFavorite =
        favorites.includes(site.name);

    card.innerHTML = `
        <div class="site-card-top">

            <div class="site-icon">
                ${categoryIcons[site.category] || "🌐"}
            </div>

            <button
                class="favorite-btn ${isFavorite ? "favorite-active" : ""}"
                onclick="toggleFavorite('${escapeQuotes(site.name)}')"
                title="إضافة للمفضلة"
            >
                ${isFavorite ? "★" : "☆"}
            </button>

        </div>

        <div class="site-card-body">

            <span class="site-category">
                ${categoryNames[site.category]}
            </span>

            <h3>${site.name}</h3>

            <p>${site.description}</p>

        </div>

        <div class="site-card-footer">

            <button
                class="visit-btn"
                onclick="openSite('${escapeQuotes(site.url)}')"
            >
                فتح الموقع ↗
            </button>

        </div>
    `;

    return card;
}


/* =========================================================
   فتح موقع
   ========================================================= */

function openSite(url) {

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================================================
   المفضلة
   ========================================================= */

function toggleFavorite(siteName) {

    const index = favorites.indexOf(siteName);

    if (index === -1) {
        favorites.push(siteName);
        showToast("⭐ تمت الإضافة إلى المفضلة");
    } else {
        favorites.splice(index, 1);
        showToast("تمت الإزالة من المفضلة");
    }

    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );

    renderSitesFromCurrentState();

    if (
        document.getElementById("favorites") &&
        document.getElementById("favorites").classList.contains("active")
    ) {
        renderFavorites();
    }
}


function renderFavorites() {

    const container =
        document.getElementById("favoritesGrid") ||
        document.getElementById("favoritesContainer") ||
        document.getElementById("favoritesList");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const favoriteSites = sites.filter(site =>
        favorites.includes(site.name)
    );

    if (favoriteSites.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <div style="font-size:3rem;">⭐</div>
                <h3>لا توجد مواقع مفضلة بعد</h3>
                <p>اضغط على ⭐ بجانب أي موقع لإضافته هنا.</p>
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
   إعادة رسم القائمة الحالية
   ========================================================= */

function renderSitesFromCurrentState() {

    const searchInput =
        document.getElementById("siteSearch");

    const categorySelect =
        document.getElementById("categorySelect");

    const searchText =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

    const category =
        categorySelect
            ? categorySelect.value
            : "all";

    renderSites(
        searchText,
        category
    );
}


/* =========================================================
   عداد المواقع
   ========================================================= */

function updateSiteCount(count) {

    const possibleIds = [
        "siteCount",
        "sitesCount",
        "resultsCount",
        "totalSites"
    ];

    possibleIds.forEach(id => {

        const element =
            document.getElementById(id);

        if (element) {
            element.textContent = count;
        }
    });
}


/* =========================================================
   الإحصائيات
   ========================================================= */

function updateStats() {

    const totalElement =
        document.getElementById("totalSites");

    if (totalElement) {
        totalElement.textContent =
            sites.length;
    }

    const categoriesElement =
        document.getElementById("totalCategories");

    if (categoriesElement) {
        categoriesElement.textContent =
            Object.keys(categoryNames).length;
    }

    const favoritesElement =
        document.getElementById("totalFavorites");

    if (favoritesElement) {
        favoritesElement.textContent =
            favorites.length;
    }
}


/* =========================================================
   المواقع المميزة
   ========================================================= */

function renderFeatured() {

    const container =
        document.getElementById("featuredGrid") ||
        document.getElementById("featuredSites");

    if (!container) {
        return;
    }

    const featuredNames = [
        "ChatGPT",
        "Minecraft",
        "YouTube",
        "Canva",
        "GitHub",
        "Khan Academy",
        "Spotify",
        "Photopea"
    ];

    const featuredSites =
        featuredNames
            .map(name =>
                sites.find(site =>
                    site.name === name
                )
            )
            .filter(Boolean);

    container.innerHTML = "";

    featuredSites.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });
}


/* =========================================================
   التصنيفات
   ========================================================= */

function renderCategories() {

    const container =
        document.getElementById("categoriesGrid") ||
        document.getElementById("categoryGrid");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    Object.keys(categoryNames).forEach(category => {

        const count =
            sites.filter(site =>
                site.category === category
            ).length;

        const card =
            document.createElement("div");

        card.className = "category-card";

        card.innerHTML = `
            <div class="category-icon">
                ${categoryIcons[category]}
            </div>

            <h3>
                ${categoryNames[category]}
            </h3>

            <p>
                ${count} موقع
            </p>

            <button
                onclick="filterCategory('${category}')"
            >
                استكشف
            </button>
        `;

        container.appendChild(card);
    });
}


/* =========================================================
   موقع عشوائي
   ========================================================= */

function randomSite() {

    if (sites.length === 0) {
        return;
    }

    const randomIndex =
        Math.floor(
            Math.random() * sites.length
        );

    const site =
        sites[randomIndex];

    showToast(
        `🎲 الموقع العشوائي: ${site.name}`
    );

    setTimeout(() => {
        openSite(site.url);
    }, 700);
}


/* =========================================================
   Escape
   ========================================================= */

function escapeQuotes(text) {

    return String(text)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, "&quot;");
}


/* =========================================================
   Toast
   ========================================================= */

function showToast(message) {

    let toast =
        document.getElementById("toast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "toast";

        toast.className = "toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
        window.webboxToastTimer
    );

    window.webboxToastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);
}


/* =========================================================
   تهيئة الموقع
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initTheme();

        updateStats();

        renderFeatured();

        renderCategories();

        renderSites();

        renderFavorites();

        /*
         * نخفي الأقسام غير الرئيسية في البداية
         */
        const sections =
            document.querySelectorAll(
                ".page-section, section"
            );

        sections.forEach(section => {

            if (section.id !== "home") {
                section.style.display = "none";
            }

        });

        const home =
            document.getElementById("home");

        if (home) {
            home.style.display = "block";
            home.classList.add("active");
        }

        console.log(
            `✅ WebBox جاهز — ${sites.length} موقع`
        );
    }
);


/* =========================================================
   البحث أثناء الكتابة
   ========================================================= */

document.addEventListener(
    "input",
    event => {

        if (
            event.target &&
            event.target.id === "siteSearch"
        ) {
            filterSiteList();
        }

    }
);


/* =========================================================
   Enter في البحث
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            event.target &&
            event.target.id === "siteSearch"
        ) {
            showSection("sites");
            filterSiteList();
        }

    }
);


/* =========================================================
   تصدير البيانات للاستخدام من HTML
   ========================================================= */

window.webboxSites = sites;
window.webboxCategories = categoryNames;
window.webboxFavorites = favorites;
