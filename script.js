/* =========================================================
   🌐 WEBBOX 3.0
   Smart Search + Favorites + Visits + Details + Mobile
   ========================================================= */


/* =========================================================
   📚 بيانات المواقع
   ========================================================= */

const siteData = {

    games: [

        {
            name: "Minecraft",
            url: "https://www.minecraft.net/",
            description: "الموقع الرسمي لـ Minecraft: عالم مفتوح للبناء والاستكشاف واللعب.",
            icon: "⛏️",
            keywords: "ماين كرافت minecraft لعبة العاب"
        },

        {
            name: "Eaglercraft",
            url: "https://eaglercraft.com/",
            description: "تجربة Minecraft من المتصفح.",
            icon: "🟩",
            keywords: "ماين كرافت minecraft browser"
        },

        {
            name: "Poki",
            url: "https://poki.com/",
            description: "آلاف الألعاب المجانية التي تعمل مباشرة في المتصفح.",
            icon: "🎮",
            keywords: "العاب ألعاب jeux games"
        },

        {
            name: "CrazyGames",
            url: "https://www.crazygames.com/",
            description: "مجموعة ضخمة من ألعاب المتصفح.",
            icon: "🔥",
            keywords: "العاب ألعاب jeux games"
        },

        {
            name: "Scratch",
            url: "https://scratch.mit.edu/",
            description: "اصنع والعب وشارك الألعاب والمشاريع.",
            icon: "🐱",
            keywords: "سكراتش scratch برمجة programming العاب"
        },

        {
            name: "GeoFS",
            url: "https://www.geo-fs.com/",
            description: "محاكي طيران ثلاثي الأبعاد يعمل من المتصفح.",
            icon: "✈️",
            keywords: "طيران flight avion simulation"
        },

        {
            name: "itch.io",
            url: "https://itch.io/",
            description: "منصة للألعاب المستقلة.",
            icon: "🎲",
            keywords: "العاب indie games jeux"
        },

        {
            name: "Chess.com",
            url: "https://www.chess.com/",
            description: "العب الشطرنج وتدرب ضد لاعبين وذكاء اصطناعي.",
            icon: "♟️",
            keywords: "شطرنج chess echecs échecs"
        },

        {
            name: "Lichess",
            url: "https://lichess.org/",
            description: "منصة شطرنج مجانية.",
            icon: "♞",
            keywords: "شطرنج chess echecs"
        },

        {
            name: "2048",
            url: "https://play2048.co/",
            description: "لعبة الأرقام الشهيرة.",
            icon: "🔢",
            keywords: "2048 لعبة puzzle"
        },

        {
            name: "Sudoku",
            url: "https://sudoku.com/",
            description: "العب Sudoku مباشرة.",
            icon: "🧩",
            keywords: "سودوكو sudoku"
        },

        {
            name: "Jigsaw Explorer",
            url: "https://www.jigsawexplorer.com/",
            description: "ألغاز الصور المجانية.",
            icon: "🧩",
            keywords: "puzzle puzzles الغاز ألغاز"
        },

        {
            name: "Coolmath Games",
            url: "https://www.coolmathgames.com/",
            description: "ألعاب ممتعة متنوعة.",
            icon: "🕹️",
            keywords: "العاب games jeux"
        },

        {
            name: "Miniclip",
            url: "https://www.miniclip.com/",
            description: "ألعاب متنوعة على الإنترنت.",
            icon: "🎮",
            keywords: "العاب games jeux"
        },

        {
            name: "Game Jolt",
            url: "https://gamejolt.com/",
            description: "مجتمع ومنصة ألعاب مستقلة.",
            icon: "⚡",
            keywords: "العاب games indie"
        },

        {
            name: "Pokémon Showdown",
            url: "https://pokemonshowdown.com/",
            description: "معارك Pokémon مباشرة في المتصفح.",
            icon: "⚔️",
            keywords: "pokemon بوكيمون pokemon"
        },

        {
            name: "Krunker",
            url: "https://krunker.io/",
            description: "لعبة تصويب سريعة تعمل من المتصفح.",
            icon: "🔫",
            keywords: "game shooter fps العاب"
        },

        {
            name: "Shell Shockers",
            url: "https://shellshock.io/",
            description: "لعبة تصويب ممتعة داخل المتصفح.",
            icon: "🥚",
            keywords: "game shooter fps العاب"
        },

        {
            name: "Tetr.io",
            url: "https://tetr.io/",
            description: "لعبة Tetris تنافسية.",
            icon: "🧱",
            keywords: "tetris تتريس puzzle"
        },

        {
            name: "Agar.io",
            url: "https://agar.io/",
            description: "لعبة المتصفح الشهيرة.",
            icon: "🔵",
            keywords: "agar لعبة games"
        }

    ],


    fun: [

        {
            name: "Neal.fun",
            url: "https://neal.fun/",
            description: "مجموعة ضخمة من التجارب والألعاب الغريبة والممتعة.",
            icon: "🤯",
            keywords: "مسلية fun jeux amusant"
        },

        {
            name: "Quick Draw",
            url: "https://quickdraw.withgoogle.com/",
            description: "اختبر قدرة الذكاء الاصطناعي على معرفة رسوماتك.",
            icon: "✏️",
            keywords: "رسم drawing dessin ai ذكاء اصطناعي"
        },

        {
            name: "Google Earth",
            url: "https://earth.google.com/",
            description: "استكشف العالم من جهازك.",
            icon: "🌍",
            keywords: "العالم earth maps خرائط"
        },

        {
            name: "Radio Garden",
            url: "https://radio.garden/",
            description: "استمع إلى محطات الراديو من جميع أنحاء العالم.",
            icon: "📻",
            keywords: "راديو radio musique"
        },

        {
            name: "Stellarium",
            url: "https://stellarium-web.org/",
            description: "استكشف السماء والنجوم.",
            icon: "🌌",
            keywords: "نجوم stars astronomy فلك"
        },

        {
            name: "WindowSwap",
            url: "https://www.window-swap.com/",
            description: "شاهد المناظر من نوافذ حول العالم.",
            icon: "🪟",
            keywords: "مناظر travel سفر"
        },

        {
            name: "Little Alchemy",
            url: "https://littlealchemy.com/",
            description: "اخلط العناصر واكتشف عناصر جديدة.",
            icon: "🧪",
            keywords: "alchemy لعبة"
        },

        {
            name: "Pointer Pointer",
            url: "https://pointerpointer.com/",
            description: "تجربة إنترنت غريبة ومضحكة.",
            icon: "🖱️",
            keywords: "fun مسلية amusant"
        },

        {
            name: "Zoomquilt",
            url: "https://zoomquilt.org/",
            description: "رحلة بصرية لا نهائية.",
            icon: "🌀",
            keywords: "art فن"
        },

        {
            name: "Patatap",
            url: "https://patatap.com/",
            description: "اصنع أصواتًا وموسيقى باستخدام لوحة المفاتيح.",
            icon: "🎵",
            keywords: "music موسيقى musique"
        },

        {
            name: "Silk",
            url: "https://weavesilk.com/",
            description: "ارسم أعمالًا فنية جميلة بسهولة.",
            icon: "🎨",
            keywords: "رسم art dessin"
        },

        {
            name: "Radiooooo",
            url: "https://radiooooo.com/",
            description: "اكتشف موسيقى من دول وعصور مختلفة.",
            icon: "📻",
            keywords: "music musique موسيقى"
        }

    ],


    education: [

        {
            name: "Khan Academy",
            url: "https://www.khanacademy.org/",
            description: "دروس مجانية في الرياضيات والعلوم وغيرها.",
            icon: "🎓",
            keywords: "تعليم education education math رياضيات"
        },

        {
            name: "Coursera",
            url: "https://www.coursera.org/",
            description: "دورات تعليمية من جامعات ومؤسسات مختلفة.",
            icon: "📚",
            keywords: "دورات courses formation"
        },

        {
            name: "edX",
            url: "https://www.edx.org/",
            description: "دورات تعليمية عبر الإنترنت.",
            icon: "🎓",
            keywords: "تعليم education courses"
        },

        {
            name: "Duolingo",
            url: "https://www.duolingo.com/",
            description: "تعلم اللغات بطريقة ممتعة.",
            icon: "🦉",
            keywords: "لغات languages langues"
        },

        {
            name: "WolframAlpha",
            url: "https://www.wolframalpha.com/",
            description: "محرك قوي للحسابات والأسئلة العلمية.",
            icon: "🧮",
            keywords: "رياضيات math maths calcul"
        },

        {
            name: "Wikipedia",
            url: "https://www.wikipedia.org/",
            description: "موسوعة مجانية ضخمة.",
            icon: "📖",
            keywords: "ويكيبيديا wikipedia موسوعة encyclopedia"
        },

        {
            name: "Brilliant",
            url: "https://brilliant.org/",
            description: "تعلم الرياضيات والعلوم بطريقة تفاعلية.",
            icon: "💡",
            keywords: "رياضيات math science علوم"
        },

        {
            name: "Quizlet",
            url: "https://quizlet.com/",
            description: "أنشئ بطاقات وراجع دروسك.",
            icon: "📝",
            keywords: "دراسة study flashcards مراجعة"
        },

        {
            name: "BBC Learning English",
            url: "https://www.bbc.co.uk/learningenglish/",
            description: "تعلم اللغة الإنجليزية.",
            icon: "🇬🇧",
            keywords: "انجليزية english anglais لغة"
        },

        {
            name: "MIT OpenCourseWare",
            url: "https://ocw.mit.edu/",
            description: "مواد ودورات تعليمية من MIT.",
            icon: "🏫",
            keywords: "تعليم university جامعة courses"
        },

        {
            name: "Google Scholar",
            url: "https://scholar.google.com/",
            description: "البحث عن الأبحاث والمقالات العلمية.",
            icon: "🎓",
            keywords: "بحث research recherche science"
        },

        {
            name: "Desmos",
            url: "https://www.desmos.com/",
            description: "حاسبة ورسوم بيانية رياضية تفاعلية.",
            icon: "📈",
            keywords: "رياضيات math graphique graph"
        }

    ],


    books: [

        {
            name: "Project Gutenberg",
            url: "https://www.gutenberg.org/",
            description: "آلاف الكتب المجانية.",
            icon: "📚",
            keywords: "كتب books livres"
        },

        {
            name: "Internet Archive",
            url: "https://archive.org/",
            description: "أرشيف ضخم للكتب والمواقع والوسائط.",
            icon: "🏛️",
            keywords: "كتب archive أرشيف"
        },

        {
            name: "Open Library",
            url: "https://openlibrary.org/",
            description: "مكتبة كتب إلكترونية ضخمة.",
            icon: "📕",
            keywords: "كتب library مكتبة livres"
        },

        {
            name: "Google Books",
            url: "https://books.google.com/",
            description: "ابحث عن الكتب والكتب الرقمية.",
            icon: "📗",
            keywords: "كتب books livres"
        },

        {
            name: "Goodreads",
            url: "https://www.goodreads.com/",
            description: "اكتشف الكتب وتابع قراءاتك.",
            icon: "📚",
            keywords: "كتب reading قراءة"
        },

        {
            name: "Standard Ebooks",
            url: "https://standardebooks.org/",
            description: "كتب كلاسيكية مجانية بتنسيق جميل.",
            icon: "📖",
            keywords: "books كتب classiques"
        }

    ],


    ai: [

        {
            name: "ChatGPT",
            url: "https://chatgpt.com/",
            description: "مساعد ذكاء اصطناعي للمحادثة والتعلم والبرمجة.",
            icon: "🤖",
            keywords: "شات جي بي تي chatgpt ai ذكاء اصطناعي"
        },

        {
            name: "Google Gemini",
            url: "https://gemini.google.com/",
            description: "مساعد الذكاء الاصطناعي من Google.",
            icon: "✨",
            keywords: "جيميني gemini google ai"
        },

        {
            name: "Microsoft Copilot",
            url: "https://copilot.microsoft.com/",
            description: "مساعد ذكاء اصطناعي من Microsoft.",
            icon: "🧠",
            keywords: "copilot مايكروسوفت microsoft ai"
        },

        {
            name: "Claude",
            url: "https://claude.ai/",
            description: "مساعد ذكاء اصطناعي للكتابة والتحليل والبرمجة.",
            icon: "🤖",
            keywords: "claude ai ذكاء اصطناعي"
        },

        {
            name: "Perplexity",
            url: "https://www.perplexity.ai/",
            description: "محرك بحث يعتمد على الذكاء الاصطناعي.",
            icon: "🔎",
            keywords: "perplexity search بحث ai"
        },

        {
            name: "Hugging Face",
            url: "https://huggingface.co/",
            description: "منصة لنماذج وأدوات الذكاء الاصطناعي.",
            icon: "🤗",
            keywords: "ai machine learning ذكاء اصطناعي"
        },

        {
            name: "Leonardo AI",
            url: "https://leonardo.ai/",
            description: "إنشاء الصور باستخدام الذكاء الاصطناعي.",
            icon: "🎨",
            keywords: "صور image ai رسم"
        },

        {
            name: "Ideogram",
            url: "https://ideogram.ai/",
            description: "إنشاء صور بالذكاء الاصطناعي.",
            icon: "🖼️",
            keywords: "صور image ai"
        },

        {
            name: "Adobe Firefly",
            url: "https://firefly.adobe.com/",
            description: "أدوات إبداعية تعتمد على الذكاء الاصطناعي.",
            icon: "🔥",
            keywords: "adobe ai صور design"
        },

        {
            name: "DeepL",
            url: "https://www.deepl.com/",
            description: "ترجمة ذكية للنصوص.",
            icon: "🌍",
            keywords: "ترجمة translate traduction"
        }

    ],


    design: [

        {
            name: "Canva",
            url: "https://www.canva.com/",
            description: "صمم صورًا وعروضًا ومنشورات بسهولة.",
            icon: "🎨",
            keywords: "كانفا canva design تصميم"
        },

        {
            name: "Figma",
            url: "https://www.figma.com/",
            description: "تصميم واجهات ومشاريع احترافية.",
            icon: "🖌️",
            keywords: "figma ui ux design"
        },

        {
            name: "Photopea",
            url: "https://www.photopea.com/",
            description: "محرر صور قوي يعمل في المتصفح.",
            icon: "🖼️",
            keywords: "فوتوبي photopea photoshop صور"
        },

        {
            name: "Remove.bg",
            url: "https://www.remove.bg/",
            description: "إزالة خلفية الصور بسهولة.",
            icon: "✂️",
            keywords: "خلفية background صور"
        },

        {
            name: "Pixlr",
            url: "https://pixlr.com/",
            description: "تحرير الصور أونلاين.",
            icon: "🌈",
            keywords: "صور photo design"
        },

        {
            name: "Adobe Express",
            url: "https://www.adobe.com/express/",
            description: "أدوات تصميم سهلة وسريعة.",
            icon: "✨",
            keywords: "adobe design تصميم"
        },

        {
            name: "Unsplash",
            url: "https://unsplash.com/",
            description: "صور عالية الجودة.",
            icon: "📷",
            keywords: "صور photos images"
        },

        {
            name: "Pexels",
            url: "https://www.pexels.com/",
            description: "صور وفيديوهات مجانية.",
            icon: "📸",
            keywords: "صور فيديو photos video"
        },

        {
            name: "Flaticon",
            url: "https://www.flaticon.com/",
            description: "مجموعة ضخمة من الأيقونات.",
            icon: "🔷",
            keywords: "icons ايقونات icones"
        },

        {
            name: "Coolors",
            url: "https://coolors.co/",
            description: "إنشاء واختيار لوحات الألوان.",
            icon: "🎨",
            keywords: "ألوان colors couleurs"
        }

    ],


    video: [

        {
            name: "YouTube",
            url: "https://www.youtube.com/",
            description: "شاهد وشارك الفيديوهات.",
            icon: "▶️",
            keywords: "يوتيوب youtube فيديو video"
        },

        {
            name: "CapCut",
            url: "https://www.capcut.com/",
            description: "محرر فيديو سهل وقوي.",
            icon: "🎬",
            keywords: "كاب كات capcut montage مونتاج"
        },

        {
            name: "VEED",
            url: "https://www.veed.io/",
            description: "تحرير الفيديو من المتصفح.",
            icon: "🎥",
            keywords: "video montage فيديو مونتاج"
        },

        {
            name: "Clipchamp",
            url: "https://clipchamp.com/",
            description: "محرر فيديو عبر الإنترنت.",
            icon: "🎞️",
            keywords: "video فيديو montage"
        },

        {
            name: "Canva Video",
            url: "https://www.canva.com/video-editor/",
            description: "تحرير الفيديو باستخدام Canva.",
            icon: "🎬",
            keywords: "video canva فيديو"
        },

        {
            name: "InVideo",
            url: "https://invideo.io/",
            description: "إنشاء وتحرير الفيديو.",
            icon: "🎥",
            keywords: "video فيديو ai"
        },

        {
            name: "Kapwing",
            url: "https://www.kapwing.com/",
            description: "تحرير الفيديو وإنشاء المحتوى.",
            icon: "🎞️",
            keywords: "video montage"
        },

        {
            name: "Adobe Express Video",
            url: "https://www.adobe.com/express/create/video",
            description: "إنشاء فيديوهات بسرعة.",
            icon: "🎬",
            keywords: "adobe video"
        }

    ],


    music: [

        {
            name: "Spotify",
            url: "https://open.spotify.com/",
            description: "استمع إلى الموسيقى والبودكاست.",
            icon: "🎵",
            keywords: "سبوتيفاي spotify music موسيقى"
        },

        {
            name: "SoundCloud",
            url: "https://soundcloud.com/",
            description: "اكتشف موسيقى وفنانين جدد.",
            icon: "☁️",
            keywords: "ساوند كلاود soundcloud music"
        },

        {
            name: "YouTube Music",
            url: "https://music.youtube.com/",
            description: "استمع إلى الموسيقى على YouTube.",
            icon: "🎧",
            keywords: "يوتيوب ميوزك youtube music"
        },

        {
            name: "Bandcamp",
            url: "https://bandcamp.com/",
            description: "اكتشف موسيقى الفنانين المستقلين.",
            icon: "🎼",
            keywords: "music موسيقى musique"
        },

        {
            name: "Audiomack",
            url: "https://audiomack.com/",
            description: "اكتشف الموسيقى والفنانين.",
            icon: "🎧",
            keywords: "music موسيقى"
        },

        {
            name: "Mixcloud",
            url: "https://www.mixcloud.com/",
            description: "استمع إلى DJ mixes وبرامج صوتية.",
            icon: "🎚️",
            keywords: "music dj"
        }

    ],


    programming: [

        {
            name: "GitHub",
            url: "https://github.com/",
            description: "استضافة المشاريع البرمجية وإدارة الأكواد.",
            icon: "💻",
            keywords: "github برمجة programming code"
        },

        {
            name: "CodePen",
            url: "https://codepen.io/",
            description: "جرب HTML وCSS وJavaScript مباشرة.",
            icon: "🖥️",
            keywords: "html css javascript برمجة"
        },

        {
            name: "JSFiddle",
            url: "https://jsfiddle.net/",
            description: "اختبر JavaScript وHTML وCSS.",
            icon: "🧪",
            keywords: "javascript html css code"
        },

        {
            name: "W3Schools",
            url: "https://www.w3schools.com/",
            description: "تعلم البرمجة وتطوير الويب.",
            icon: "🌐",
            keywords: "برمجة programming html css javascript"
        },

        {
            name: "MDN Web Docs",
            url: "https://developer.mozilla.org/",
            description: "مرجع قوي لتطوير الويب.",
            icon: "📘",
            keywords: "javascript html css developer"
        },

        {
            name: "Replit",
            url: "https://replit.com/",
            description: "برمج وشغل مشاريعك من المتصفح.",
            icon: "👨‍💻",
            keywords: "برمجة coding code"
        },

        {
            name: "Stack Overflow",
            url: "https://stackoverflow.com/",
            description: "أسئلة وأجوبة للمبرمجين.",
            icon: "💬",
            keywords: "برمجة programming code help"
        },

        {
            name: "GitLab",
            url: "https://gitlab.com/",
            description: "منصة لإدارة المشاريع البرمجية.",
            icon: "🦊",
            keywords: "git code programming"
        },

        {
            name: "JS Bin",
            url: "https://jsbin.com/",
            description: "اختبر أكواد الويب مباشرة.",
            icon: "🧪",
            keywords: "javascript html css"
        },

        {
            name: "CodeSandbox",
            url: "https://codesandbox.io/",
            description: "بيئة تطوير برمجية على الإنترنت.",
            icon: "📦",
            keywords: "coding programming javascript"
        },

        {
            name: "Godot",
            url: "https://godotengine.org/",
            description: "محرك ألعاب مجاني ومفتوح المصدر.",
            icon: "🎮",
            keywords: "godot لعبة games برمجة programming"
        },

        {
            name: "Unity",
            url: "https://unity.com/",
            description: "محرك تطوير ألعاب وتطبيقات ثلاثية الأبعاد.",
            icon: "🎮",
            keywords: "unity games game development"
        }

    ],


    tools: [

        {
            name: "Google Translate",
            url: "https://translate.google.com/",
            description: "ترجمة النصوص بين اللغات.",
            icon: "🌍",
            keywords: "ترجمة translation traduction"
        },

        {
            name: "TinyWow",
            url: "https://tinywow.com/",
            description: "مجموعة كبيرة من أدوات الملفات والصور.",
            icon: "🛠️",
            keywords: "tools ادوات outils"
        },

        {
            name: "iLovePDF",
            url: "https://www.ilovepdf.com/",
            description: "أدوات للتعامل مع ملفات PDF.",
            icon: "📄",
            keywords: "pdf ملفات files"
        },

        {
            name: "QR Code Generator",
            url: "https://www.qr-code-generator.com/",
            description: "أنشئ QR Code بسهولة.",
            icon: "🔳",
            keywords: "qr code رمز"
        },

        {
            name: "Speedtest",
            url: "https://www.speedtest.net/",
            description: "اختبر سرعة الإنترنت.",
            icon: "⚡",
            keywords: "سرعة internet speed internet"
        },

        {
            name: "Google Drive",
            url: "https://drive.google.com/",
            description: "احفظ ملفاتك على السحابة.",
            icon: "☁️",
            keywords: "drive files cloud ملفات"
        },

        {
            name: "TinyURL",
            url: "https://tinyurl.com/",
            description: "اختصار الروابط.",
            icon: "🔗",
            keywords: "روابط links url"
        },

        {
            name: "Google Fonts",
            url: "https://fonts.google.com/",
            description: "مكتبة ضخمة للخطوط.",
            icon: "🔤",
            keywords: "خطوط fonts polices"
        },

        {
            name: "JSON Formatter",
            url: "https://jsonformatter.org/",
            description: "تنسيق وفحص JSON.",
            icon: "{ }",
            keywords: "json developer code"
        },

        {
            name: "Regex101",
            url: "https://regex101.com/",
            description: "اختبر Regular Expressions.",
            icon: "🔍",
            keywords: "regex programming code"
        },

        {
            name: "Have I Been Pwned",
            url: "https://haveibeenpwned.com/",
            description: "تحقق من تسريبات البريد الإلكتروني.",
            icon: "🔐",
            keywords: "security امن حماية"
        },

        {
            name: "VirusTotal",
            url: "https://www.virustotal.com/",
            description: "فحص الملفات والروابط.",
            icon: "🛡️",
            keywords: "virus security حماية"
        }

    ]

};


/* =========================================================
   🏷️ التصنيفات
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
    education: "🎓",
    books: "📚",
    ai: "🤖",
    design: "🎨",
    video: "🎬",
    music: "🎵",
    programming: "💻",
    tools: "🛠️"
};


/* =========================================================
   📦 تجهيز المواقع
   ========================================================= */

let sites = [];

Object.keys(siteData).forEach(category => {

    siteData[category].forEach((site, index) => {

        sites.push({
            ...site,
            id: `${category}-${index}-${site.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`,
            category,
            categoryName: categoryNames[category]
        });

    });

});


/* =========================================================
   💾 LocalStorage
   ========================================================= */

function readJSON(key, fallback) {

    try {

        const value = localStorage.getItem(key);

        return value
            ? JSON.parse(value)
            : fallback;

    } catch {

        return fallback;

    }

}


let favorites = readJSON(
    "webboxFavorites",
    []
);


let visits = readJSON(
    "webboxVisits",
    {}
);


let recentSites = readJSON(
    "webboxRecent",
    []
);


let viewMode =
    localStorage.getItem("webboxViewMode") || "grid";


let currentModalSite = null;


/* =========================================================
   🔤 تحسين البحث العربي / الفرنسي / الإنجليزي
   ========================================================= */

function normalizeText(text) {

    return String(text || "")

        .toLowerCase()

        // إزالة التشكيل العربي
        .replace(/[\u064B-\u065F\u0670]/g, "")

        // توحيد الألف
        .replace(/[إأآا]/g, "ا")

        // توحيد الياء
        .replace(/[ىي]/g, "ي")

        // توحيد التاء المربوطة
        .replace(/ة/g, "ه")

        // إزالة الرموز
        .replace(/[^\p{L}\p{N}\s-]/gu, " ")

        .replace(/\s+/g, " ")

        .trim();

}


function getSearchText(site) {

    return normalizeText(`

        ${site.name}

        ${site.description}

        ${site.categoryName}

        ${site.keywords || ""}

    `);

}


function levenshtein(a, b) {

    a = normalizeText(a);
    b = normalizeText(b);

    if (!a) return b.length;
    if (!b) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {

        matrix[i] = [i];

    }

    for (let j = 0; j <= a.length; j++) {

        matrix[0][j] = j;

    }

    for (let i = 1; i <= b.length; i++) {

        for (let j = 1; j <= a.length; j++) {

            if (b.charAt(i - 1) === a.charAt(j - 1)) {

                matrix[i][j] =
                    matrix[i - 1][j - 1];

            } else {

                matrix[i][j] = Math.min(

                    matrix[i - 1][j] + 1,

                    matrix[i][j - 1] + 1,

                    matrix[i - 1][j - 1] + 1

                );

            }

        }

    }

    return matrix[b.length][a.length];

}


function searchScore(site, query) {

    const q = normalizeText(query);

    if (!q) return 0;

    const name = normalizeText(site.name);
    const keywords = normalizeText(site.keywords || "");
    const description = normalizeText(site.description);
    const category = normalizeText(site.categoryName);

    let score = 0;

    if (name === q)
        score += 100;

    if (name.startsWith(q))
        score += 70;

    if (name.includes(q))
        score += 50;

    if (keywords.includes(q))
        score += 40;

    if (category.includes(q))
        score += 25;

    if (description.includes(q))
        score += 15;

    const words = q.split(" ");

    words.forEach(word => {

        if (!word) return;

        if (name.includes(word))
            score += 25;

        if (keywords.includes(word))
            score += 20;

        if (description.includes(word))
            score += 8;

    });


    // البحث التقريبي للكلمات القصيرة
    if (q.length >= 4) {

        const distance =
            levenshtein(name, q);

        if (distance <= 2)
            score += 20;

    }

    return score;

}


function smartFindSites(query) {

    const q = normalizeText(query);

    if (!q)
        return sites.slice();

    return sites

        .map(site => ({

            site,

            score: searchScore(site, q)

        }))

        .filter(item => item.score > 0)

        .sort((a, b) => {

            if (b.score !== a.score)
                return b.score - a.score;

            return getVisits(b.site) -
                   getVisits(a.site);

        })

        .map(item => item.site);

}


/* =========================================================
   🌙 الوضع الليلي
   ========================================================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const enabled =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "webboxDarkMode",
        enabled ? "true" : "false"
    );

    updateThemeButton();

}


function updateThemeButton() {

    const button =
        document.getElementById("darkModeBtn");

    if (!button) return;

    const dark =
        document.body.classList.contains("dark");

    button.innerHTML =
        dark ? "☀️" : "🌙";

    button.title =
        dark
            ? "الوضع الفاتح"
            : "الوضع الليلي";

}


/* =========================================================
   🧭 التنقل
   ========================================================= */

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(
            ".page-section"
        );

    sections.forEach(section => {

        section.classList.remove("active");

        section.style.display = "none";

    });


    const target =
        document.getElementById(sectionId);

    if (!target) return;


    target.classList.add("active");

    target.style.display = "block";


    updateNavigation(sectionId);

    closeMobileMenu();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    if (sectionId === "sites")
        filterSiteList();

    if (sectionId === "favorites")
        renderFavorites();

    if (sectionId === "fun")
        renderFun();

    if (sectionId === "gaming")
        renderGaming();

    if (sectionId === "recent")
        renderRecent();

}


function updateNavigation(sectionId) {

    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.toggle(

                "active",

                button.dataset.section === sectionId

            );

        });

}


function showHome() {

    showSection("home");

}


function showCategories() {

    showSection("categories");

    renderCategories();

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


function showRecent() {

    showSection("recent");

    renderRecent();

}


/* =========================================================
   📱 قائمة الهاتف
   ========================================================= */

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobileNav");

    if (!menu) return;

    menu.classList.toggle("open");

}


function closeMobileMenu() {

    const menu =
        document.getElementById("mobileNav");

    if (!menu) return;

    menu.classList.remove("open");

}


/* =========================================================
   📂 التصنيفات
   ========================================================= */

function filterCategory(category) {

    if (!siteData[category]) {

        showCategories();

        return;

    }


    const select =
        document.getElementById(
            "categorySelect"
        );

    const search =
        document.getElementById(
            "siteSearch"
        );


    if (select)
        select.value = category;

    if (search)
        search.value = "";


    showSection("sites");

    filterSiteList();

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


    const html =
        Object.keys(categoryNames)
            .map(category => {

                const count =
                    siteData[category]?.length || 0;

                return `

                    <button
                        class="category-card"
                        onclick="filterCategory('${category}')"
                    >

                        <div class="category-icon">
                            ${categoryIcons[category]}
                        </div>

                        <div>

                            <h3>
                                ${categoryNames[category]}
                            </h3>

                            <span>
                                ${count} موقع
                            </span>

                        </div>

                    </button>

                `;

            })
            .join("");


    containers.forEach(container => {

        if (container)
            container.innerHTML = html;

    });

}


/* =========================================================
   🧱 بطاقة الموقع
   ========================================================= */

function escapeHTML(text) {

    return String(text || "")

        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function isFavorite(site) {

    return favorites.includes(site.id);

}


function getVisits(site) {

    return Number(
        visits[site.id] || 0
    );

}


function createSiteCard(site) {

    const favorite =
        isFavorite(site);

    const visitCount =
        getVisits(site);


    return `

        <article
            class="site-card"
            data-site-id="${escapeHTML(site.id)}"
        >

            <div class="site-card-top">

                <div class="site-icon">
                    ${site.icon || "🌐"}
                </div>

                <button
                    class="
                        favorite-btn
                        ${favorite ? "favorite-active" : ""}
                    "
                    onclick="toggleFavorite('${site.id}')"
                    title="إضافة للمفضلة"
                    aria-label="المفضلة"
                >
                    ${favorite ? "❤️" : "🤍"}
                </button>

            </div>


            <div class="site-content">

                <h3>
                    ${escapeHTML(site.name)}
                </h3>

                <p>
                    ${escapeHTML(site.description)}
                </p>

                <div class="site-meta">

                    <span class="site-category">
                        ${categoryIcons[site.category]}
                        ${escapeHTML(site.categoryName)}
                    </span>

                    <span class="visit-count">
                        🚀 ${visitCount}
                    </span>

                </div>

            </div>


            <div class="site-actions">

                <button
                    class="open-site-btn"
                    onclick="showSiteDetails('${site.id}')"
                >
                    تفاصيل الموقع
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   🌐 عرض المواقع
   ========================================================= */

function displaySites(list) {

    const container =
        document.getElementById(
            "sitesContainer"
        );

    if (!container) return;


    container.classList.toggle(
        "list-view",
        viewMode === "list"
    );


    if (!list.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🔍
                </div>

                <h3>
                    لم نجد أي موقع
                </h3>

                <p>
                    جرب كلمة أخرى بالعربية أو الفرنسية أو الإنجليزية.
                </p>

            </div>

        `;

    } else {

        container.innerHTML =
            list
                .map(createSiteCard)
                .join("");

    }


    const resultText =
        document.getElementById(
            "resultText"
        );

    if (resultText) {

        resultText.textContent =
            `${list.length} موقع`;

    }

}


/* =========================================================
   🔎 فلترة وترتيب
   ========================================================= */

function filterSiteList() {

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


    const query =
        search
            ? search.value.trim()
            : "";

    const selectedCategory =
        category
            ? category.value
            : "all";

    const sortValue =
        sort
            ? sort.value
            : "default";


    let list =
        smartFindSites(query);


    list =
        list.filter(site => {

            return (

                selectedCategory === "all" ||

                site.category ===
                    selectedCategory

            );

        });


    if (sortValue === "name") {

        list.sort((a, b) =>
            a.name.localeCompare(
                b.name,
                "ar"
            )
        );

    }


    if (sortValue === "popular") {

        list.sort((a, b) =>
            getVisits(b) -
            getVisits(a)
        );

    }


    if (sortValue === "favorites") {

        list.sort((a, b) => {

            const fa =
                isFavorite(a) ? 1 : 0;

            const fb =
                isFavorite(b) ? 1 : 0;

            return fb - fa;

        });

    }


    displaySites(list);

}


/* =========================================================
   🧠 البحث الرئيسي
   ========================================================= */

function smartSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    const results =
        document.getElementById(
            "smartResults"
        );


    if (!input || !results)
        return;


    const query =
        input.value.trim();


    if (!query) {

        results.innerHTML = "";

        return;

    }


    const matched =
        smartFindSites(query)
            .slice(0, 6);


    if (!matched.length) {

        results.innerHTML = `

            <div class="search-no-results">

                🔍 لا توجد نتائج

                <small>
                    جرب العربية أو الفرنسية أو الإنجليزية
                </small>

            </div>

        `;

        return;

    }


    results.innerHTML =
        matched
            .map(site => `

                <button
                    class="smart-result"
                    onclick="showSiteDetails('${site.id}')"
                >

                    <span class="smart-result-icon">
                        ${site.icon}
                    </span>

                    <span>

                        <strong>
                            ${escapeHTML(site.name)}
                        </strong>

                        <small>
                            ${escapeHTML(site.categoryName)}
                        </small>

                    </span>

                </button>

            `)
            .join("");

}


function performMainSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;


    const query =
        input.value.trim();


    if (!query) {

        showSection("sites");

        return;

    }


    const matches =
        smartFindSites(query);


    if (
        matches.length === 1 &&
        searchScore(matches[0], query) >= 80
    ) {

        showSiteDetails(
            matches[0].id
        );

        return;

    }


    const siteSearch =
        document.getElementById(
            "siteSearch"
        );

    if (siteSearch)
        siteSearch.value = query;


    showSection("sites");

    filterSiteList();

}


function handleSearchKey(event) {

    if (event.key === "Enter") {

        performMainSearch();

    }

}


function useExample(text) {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;


    input.value = text;

    smartSearch();

    input.focus();

}


/* =========================================================
   🎤 بحث صوتي
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


    recognition.lang = "ar-DZ";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;


    const input =
        document.getElementById(
            "searchInput"
        );


    recognition.onstart = () => {

        showToast(
            "🎤 تحدث الآن..."
        );

    };


    recognition.onresult = event => {

        const text =
            event.results[0][0].transcript;


        if (input)
            input.value = text;


        smartSearch();

    };


    recognition.onerror = () => {

        showToast(
            "لم يتم التعرف على الصوت"
        );

    };


    recognition.start();

}


/* =========================================================
   🚀 فتح الموقع + تسجيل الزيارة
   ========================================================= */

function openSite(url) {

    const site =
        sites.find(
            item => item.url === url
        );


    if (site) {

        registerVisit(site);

    }


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


function openSiteById(id) {

    const site =
        getSite(id);

    if (!site) return;

    registerVisit(site);

    window.open(
        site.url,
        "_blank",
        "noopener,noreferrer"
    );

}


function registerVisit(site) {

    visits[site.id] =
        getVisits(site) + 1;


    localStorage.setItem(
        "webboxVisits",
        JSON.stringify(visits)
    );


    recentSites =
        recentSites.filter(
            id => id !== site.id
        );


    recentSites.unshift(
        site.id
    );


    recentSites =
        recentSites.slice(0, 20);


    localStorage.setItem(
        "webboxRecent",
        JSON.stringify(recentSites)
    );


    updateStats();

}


/* =========================================================
   ⭐ المفضلة المحسنة
   ========================================================= */

function toggleFavorite(id) {

    const site =
        getSite(id);

    if (!site) return;


    const index =
        favorites.indexOf(id);


    if (index === -1) {

        favorites.push(id);

        showToast(
            `❤️ تمت إضافة ${site.name} إلى المفضلة`
        );

    } else {

        favorites.splice(
            index,
            1
        );

        showToast(
            `🤍 تمت إزالة ${site.name} من المفضلة`
        );

    }


    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );


    renderFavorites();

    filterSiteList();

    updateStats();


    if (currentModalSite === id) {

        updateModalFavorite();

    }

}


/* =========================================================
   ❤️ عرض المفضلة
   ========================================================= */

function renderFavorites() {

    const container =
        document.getElementById(
            "favoritesContainer"
        );

    if (!container) return;


    const list =
        sites.filter(
            site =>
                favorites.includes(
                    site.id
                )
        );


    if (!list.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ❤️
                </div>

                <h3>
                    لا توجد مواقع مفضلة
                </h3>

                <p>
                    اضغط ❤️ على أي موقع لإضافته هنا.
                </p>

                <button
                    class="primary-btn"
                    onclick="showSection('sites')"
                >
                    🌐 استكشف المواقع
                </button>

            </div>

        `;

        return;

    }


    container.innerHTML =
        list
            .map(createSiteCard)
            .join("");

}


/* =========================================================
   🕘 آخر المواقع
   ========================================================= */

function renderRecent() {

    const container =
        document.getElementById(
            "recentContainer"
        );

    if (!container) return;


    const list =
        recentSites

            .map(id => getSite(id))

            .filter(Boolean);


    if (!list.length) {

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


    container.innerHTML =
        list
            .map(createSiteCard)
            .join("");

}


function clearHistory() {

    recentSites = [];

    localStorage.removeItem(
        "webboxRecent"
    );

    renderRecent();

    showToast(
        "🧹 تم مسح سجل المواقع"
    );

}


/* =========================================================
   🏷️ تفاصيل الموقع
   ========================================================= */

function getSite(id) {

    return sites.find(
        site => site.id === id
    );

}


function showSiteDetails(id) {

    const site =
        getSite(id);

    if (!site) return;


    currentModalSite = id;


    const modal =
        document.getElementById(
            "siteModal"
        );

    if (!modal) return;


    const icon =
        document.getElementById(
            "modalIcon"
        );

    const title =
        document.getElementById(
            "modalTitle"
        );

    const description =
        document.getElementById(
            "modalDescription"
        );

    const category =
        document.getElementById(
            "modalCategory"
        );

    const modalVisits =
        document.getElementById(
            "modalVisits"
        );


    if (icon)
        icon.textContent =
            site.icon || "🌐";

    if (title)
        title.textContent =
            site.name;

    if (description)
        description.textContent =
            site.description;

    if (category)
        category.textContent =
            `${categoryIcons[site.category]} ${site.categoryName}`;

    if (modalVisits)
        modalVisits.textContent =
            getVisits(site);


    updateModalFavorite();


    const openButton =
        document.getElementById(
            "modalOpenBtn"
        );


    if (openButton) {

        openButton.onclick = () => {

            openSiteById(site.id);

        };

    }


    const favoriteButton =
        document.getElementById(
            "modalFavoriteBtn"
        );


    if (favoriteButton) {

        favoriteButton.onclick = () => {

            toggleFavorite(site.id);

        };

    }


    modal.classList.add("open");

    document.body.classList.add(
        "modal-open"
    );

}


function updateModalFavorite() {

    const element =
        document.getElementById(
            "modalFavorite"
        );

    if (!element || !currentModalSite)
        return;


    const site =
        getSite(currentModalSite);

    if (!site) return;


    element.textContent =
        isFavorite(site)
            ? "❤️"
            : "🤍";


    const button =
        document.getElementById(
            "modalFavoriteBtn"
        );


    if (button) {

        button.textContent =
            isFavorite(site)
                ? "🤍 إزالة من المفضلة"
                : "❤️ إضافة للمفضلة";

    }

}


function closeSiteModal() {

    const modal =
        document.getElementById(
            "siteModal"
        );

    if (!modal) return;


    modal.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "modal-open"
    );


    currentModalSite = null;

}


function closeModal(event) {

    if (
        event &&
        event.target &&
        event.target.id === "siteModal"
    ) {

        closeSiteModal();

    }

}


/* =========================================================
   🎲 موقع عشوائي
   ========================================================= */

function randomSite() {

    if (!sites.length)
        return;


    const random =
        sites[
            Math.floor(
                Math.random() *
                sites.length
            )
        ];


    showToast(
        `🎲 ${random.name}`
    );


    setTimeout(() => {

        showSiteDetails(
            random.id
        );

    }, 350);

}


/* =========================================================
   ⭐ المواقع المميزة
   ========================================================= */

function renderFeatured() {

    const container =
        document.getElementById(
            "featuredContainer"
        );

    if (!container) return;


    const names = [

        "Minecraft",
        "Eaglercraft",
        "ChatGPT",
        "YouTube",
        "Canva",
        "Godot"

    ];


    const list =
        names

            .map(name =>
                sites.find(
                    site =>
                        site.name === name
                )
            )

            .filter(Boolean);


    container.innerHTML =
        list
            .map(createSiteCard)
            .join("");

}


/* =========================================================
   🎉 مسلية
   ========================================================= */

function renderFun() {

    const container =
        document.getElementById(
            "funContainer"
        );

    if (!container) return;


    container.innerHTML =
        siteData.fun

            .map(site => {

                const full =
                    sites.find(
                        item =>
                            item.name ===
                            site.name
                    );

                return full
                    ? createSiteCard(full)
                    : "";

            })

            .join("");

}


/* =========================================================
   🎮 الألعاب
   ========================================================= */

function renderGaming() {

    const container =
        document.getElementById(
            "gamingContainer"
        );

    if (!container) return;


    container.innerHTML =
        siteData.games

            .map(site => {

                const full =
                    sites.find(
                        item =>
                            item.name ===
                            site.name
                    );

                return full
                    ? createSiteCard(full)
                    : "";

            })

            .join("");

}


/* =========================================================
   📊 الإحصائيات
   ========================================================= */

function updateStats() {

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


    if (totalSites)
        totalSites.textContent =
            sites.length;


    if (totalCategories)
        totalCategories.textContent =
            Object.keys(
                siteData
            ).length;


    if (totalFavorites)
        totalFavorites.textContent =
            favorites.length;


    if (totalVisits) {

        totalVisits.textContent =
            Object.values(visits)
                .reduce(
                    (sum, value) =>
                        sum + Number(value || 0),
                    0
                );

    }

}


/* =========================================================
   🔢 ترتيب المواقع
   ========================================================= */

function setViewMode(mode) {

    viewMode = mode;

    localStorage.setItem(
        "webboxViewMode",
        mode
    );


    const grid =
        document.getElementById(
            "sitesContainer"
        );

    if (grid) {

        grid.classList.toggle(
            "list-view",
            mode === "list"
        );

    }


    const gridButton =
        document.getElementById(
            "gridViewBtn"
        );

    const listButton =
        document.getElementById(
            "listViewBtn"
        );


    if (gridButton)
        gridButton.classList.toggle(
            "active",
            mode === "grid"
        );

    if (listButton)
        listButton.classList.toggle(
            "active",
            mode === "list"
        );

}


/* =========================================================
   🧹 الفلاتر
   ========================================================= */

function clearFilters() {

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


    if (search)
        search.value = "";

    if (category)
        category.value = "all";

    if (sort)
        sort.value = "default";


    filterSiteList();

}


/* =========================================================
   🔔 Toast
   ========================================================= */

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
        window.webboxToastTimer
    );


    window.webboxToastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================================
   ⌨️ اختصارات لوحة المفاتيح
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

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


        if (event.key === "Escape") {

            closeSiteModal();

            closeMobileMenu();

        }

    }
);


/* =========================================================
   🖱️ إغلاق القائمة عند الضغط خارجها
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const menu =
            document.getElementById(
                "mobileNav"
            );

        const button =
            document.querySelector(
                ".mobile-menu-btn"
            );


        if (
            menu &&
            menu.classList.contains("open") &&
            !menu.contains(event.target) &&
            !button?.contains(event.target)
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   🚀 تشغيل WebBox
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* الوضع الليلي */

        if (
            localStorage.getItem(
                "webboxDarkMode"
            ) === "true"
        ) {

            document.body.classList.add(
                "dark"
            );

        }


        updateThemeButton();


        /* الإحصائيات */

        updateStats();


        /* التصنيفات */

        renderCategories();


        /* المواقع */

        renderFeatured();

        renderFun();

        renderGaming();

        renderFavorites();

        renderRecent();


        /* البحث */

        const searchInput =
            document.getElementById(
                "searchInput"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                smartSearch
            );

            searchInput.addEventListener(
                "keydown",
                handleSearchKey
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


        const categorySelect =
            document.getElementById(
                "categorySelect"
            );


        if (categorySelect) {

            categorySelect.innerHTML = `

                <option value="all">
                    كل التصنيفات
                </option>

                ${Object.keys(categoryNames)
                    .map(category => `

                        <option value="${category}">
                            ${categoryIcons[category]}
                            ${categoryNames[category]}
                        </option>

                    `)
                    .join("")}

            `;


            categorySelect.addEventListener(
                "change",
                filterSiteList
            );

        }


        const sortSelect =
            document.getElementById(
                "sortSelect"
            );


        if (sortSelect) {

            sortSelect.addEventListener(
                "change",
                filterSiteList
            );

        }


        /* الصفحة الأولى */

        showSection("home");


        /* نمط العرض */

        setViewMode(viewMode);


        /* تحديث الصفحة */

        displaySites(sites);

    }
);


/* =========================================================
   🌍 جعل الدوال متاحة لـ HTML onclick
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

window.performMainSearch =
    performMainSearch;

window.smartSearch =
    smartSearch;

window.handleSearchKey =
    handleSearchKey;

window.useExample =
    useExample;

window.startVoiceSearch =
    startVoiceSearch;

window.openSite =
    openSite;

window.openSiteById =
    openSiteById;

window.randomSite =
    randomSite;

window.toggleFavorite =
    toggleFavorite;

window.showSiteDetails =
    showSiteDetails;

window.closeSiteModal =
    closeSiteModal;

window.closeModal =
    closeModal;

window.toggleDarkMode =
    toggleDarkMode;

window.toggleMobileMenu =
    toggleMobileMenu;

window.setViewMode =
    setViewMode;

window.clearFilters =
    clearFilters;

window.clearHistory =
    clearHistory;
