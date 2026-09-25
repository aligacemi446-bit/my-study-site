/* =========================================================
   WEBBOX 5.0
   510+ useful websites
   ========================================================= */

"use strict";

/* =========================================================
   CONFIG
   ========================================================= */

const STORAGE_KEYS = {
    favorites: "webboxFavorites",
    visits: "webboxVisits",
    recent: "webboxRecent",
    theme: "webboxTheme",
    view: "webboxView"
};

const CATEGORY_INFO = {
    games: {
        name: "الألعاب",
        icon: "🎮",
        description: "مواقع ومنصات وأدوات عالم الألعاب"
    },
    fun: {
        name: "مسلية",
        icon: "🎉",
        description: "مواقع للترفيه والتسلية والاستكشاف"
    },
    education: {
        name: "التعليم",
        icon: "📚",
        description: "التعلم والدراسة والدورات التعليمية"
    },
    books: {
        name: "الكتب",
        icon: "📖",
        description: "كتب ومكتبات ومصادر للقراءة"
    },
    ai: {
        name: "الذكاء الاصطناعي",
        icon: "🤖",
        description: "أدوات الذكاء الاصطناعي والإنتاجية"
    },
    design: {
        name: "التصميم",
        icon: "🎨",
        description: "التصميم والصور والألوان والرسومات"
    },
    video: {
        name: "الفيديو",
        icon: "🎬",
        description: "مشاهدة وتحميل وتحرير الفيديو"
    },
    music: {
        name: "الموسيقى",
        icon: "🎵",
        description: "الموسيقى والصوت والبودكاست"
    },
    programming: {
        name: "البرمجة",
        icon: "💻",
        description: "البرمجة والتطوير وأدوات المطورين"
    },
    tools: {
        name: "الأدوات",
        icon: "🛠️",
        description: "أدوات مفيدة لكل الاستخدامات"
    }
};

/* =========================================================
   SITE DATABASE
   10 CATEGORIES × 51 = 510 SITES
   ========================================================= */

const rawSites = {

    /* =====================================================
       GAMES - 51
       ===================================================== */

    games: [
        ["Roblox", "https://www.roblox.com", "منصة ألعاب وإنشاء تجارب ثلاثية الأبعاد", "🎮"],
        ["Minecraft", "https://www.minecraft.net", "الموقع الرسمي للعبة Minecraft", "⛏️"],
        ["Steam", "https://store.steampowered.com", "منصة ألعاب ومتجر رقمي", "🎮"],
        ["Epic Games", "https://store.epicgames.com", "متجر ألعاب Epic Games", "🕹️"],
        ["GOG", "https://www.gog.com", "متجر ألعاب رقمية بدون DRM", "🎲"],
        ["itch.io", "https://itch.io", "منصة للألعاب المستقلة", "👾"],
        ["Game Jolt", "https://gamejolt.com", "مجتمع وألعاب مستقلة", "🕹️"],
        ["Kongregate", "https://www.kongregate.com", "ألعاب متصفح ومجتمع ألعاب", "🎮"],
        ["Newgrounds", "https://www.newgrounds.com", "ألعاب ورسوم ومحتوى إبداعي", "🟢"],
        ["CrazyGames", "https://www.crazygames.com", "ألعاب متصفح مجانية", "🤪"],
        ["Poki", "https://poki.com", "مجموعة كبيرة من ألعاب المتصفح", "🎯"],
        ["Miniclip", "https://www.miniclip.com", "ألعاب متصفح وموبايل", "🎮"],
        ["Armor Games", "https://armorgames.com", "ألعاب متصفح متنوعة", "🛡️"],
        ["Addicting Games", "https://www.addictinggames.com", "ألعاب متصفح", "🎲"],
        ["Newgrounds Games", "https://www.newgrounds.com/games", "قسم الألعاب في Newgrounds", "🎮"],
        ["GameBanana", "https://gamebanana.com", "مودات وملفات للألعاب", "🍌"],
        ["Mod DB", "https://www.moddb.com", "قاعدة بيانات للمودات والألعاب", "🧩"],
        ["Nexus Mods", "https://www.nexusmods.com", "منصة مودات الألعاب", "🛠️"],
        ["CurseForge", "https://www.curseforge.com", "مودات وإضافات للألعاب", "🔥"],
        ["Overwolf", "https://www.overwolf.com", "تطبيقات وأدوات للألعاب", "🐺"],
        ["Riot Games", "https://www.riotgames.com", "مطور ألعاب Riot", "⚔️"],
        ["League of Legends", "https://www.leagueoflegends.com", "الموقع الرسمي للعبة League of Legends", "⚔️"],
        ["VALORANT", "https://playvalorant.com", "الموقع الرسمي للعبة Valorant", "🔫"],
        ["Fortnite", "https://www.fortnite.com", "الموقع الرسمي للعبة Fortnite", "🏗️"],
        ["Rocket League", "https://www.rocketleague.com", "كرة قدم بالسيارات", "🚗"],
        ["Fall Guys", "https://www.fallguys.com", "لعبة منافسات جماعية", "🏃"],
        ["EA Games", "https://www.ea.com", "ألعاب ومنتجات Electronic Arts", "🎮"],
        ["Ubisoft", "https://www.ubisoft.com", "ألعاب Ubisoft", "🎮"],
        ["PlayStation", "https://www.playstation.com", "منصة PlayStation الرسمية", "🎮"],
        ["Xbox", "https://www.xbox.com", "منصة Xbox الرسمية", "🟢"],
        ["Nintendo", "https://www.nintendo.com", "منصة Nintendo الرسمية", "🔴"],
        ["Battle.net", "https://www.battle.net", "منصة ألعاب Blizzard", "⚔️"],
        ["Blizzard", "https://www.blizzard.com", "ألعاب Blizzard", "❄️"],
        ["Rockstar Games", "https://www.rockstargames.com", "ألعاب Rockstar", "⭐"],
        ["CD Projekt", "https://www.cdprojekt.com", "مطور ألعاب CD Projekt", "🎮"],
        ["Valve", "https://www.valvesoftware.com", "شركة تطوير ألعاب وتقنيات", "🔧"],
        ["Unity", "https://unity.com", "محرك تطوير الألعاب Unity", "🔷"],
        ["Godot", "https://godotengine.org", "محرك ألعاب مفتوح المصدر", "🤖"],
        ["Unreal Engine", "https://www.unrealengine.com", "محرك ألعاب Unreal Engine", "🌀"],
        ["GameMaker", "https://gamemaker.io", "محرك تطوير الألعاب GameMaker", "🎮"],
        ["Construct", "https://www.construct.net", "أداة إنشاء الألعاب", "🧱"],
        ["GDevelop", "https://gdevelop.io", "محرك ألعاب بدون برمجة", "🎮"],
        ["Core Games", "https://www.coregames.com", "منصة لإنشاء ولعب الألعاب", "🌐"],
        ["Rec Room", "https://recroom.com", "منصة اجتماعية وألعاب", "🕶️"],
        ["VRChat", "https://hello.vrchat.com", "منصة اجتماعية افتراضية", "🥽"],
        ["Board Game Arena", "https://boardgamearena.com", "ألعاب الطاولة عبر الإنترنت", "♟️"],
        ["Chess.com", "https://www.chess.com", "لعب الشطرنج والتعلم", "♟️"],
        ["Lichess", "https://lichess.org", "منصة شطرنج مجانية", "♞"],
        ["Geoguessr", "https://www.geoguessr.com", "لعبة تخمين المواقع الجغرافية", "🌍"],
        ["Pokémon", "https://www.pokemon.com", "عالم Pokémon الرسمي", "⚡"],
        ["Twitch Games", "https://www.twitch.tv/directory/category/games", "محتوى الألعاب والبث المباشر", "📺"]
    ],

    /* =====================================================
       FUN - 51
       ===================================================== */

    fun: [
        ["YouTube", "https://www.youtube.com", "منصة الفيديو الأشهر على الإنترنت", "▶️"],
        ["Reddit", "https://www.reddit.com", "مجتمع ومناقشات حول مختلف المواضيع", "🟠"],
        ["Pinterest", "https://www.pinterest.com", "اكتشاف وحفظ الأفكار والصور", "📌"],
        ["Tumblr", "https://www.tumblr.com", "منصة تدوين ومحتوى اجتماعي", "💙"],
        ["9GAG", "https://9gag.com", "صور وميمات ومحتوى ترفيهي", "😂"],
        ["Imgur", "https://imgur.com", "منصة مشاركة الصور", "🖼️"],
        ["Giphy", "https://giphy.com", "صور GIF متحركة", "GIF"],
        ["Tenor", "https://tenor.com", "محرك بحث لصور GIF", "🎞️"],
        ["Know Your Meme", "https://knowyourmeme.com", "موسوعة الميمات", "😂"],
        ["The Useless Web", "https://theuselessweb.com", "مواقع عشوائية وغريبة", "🎲"],
        ["Neal.fun", "https://neal.fun", "تجارب ويب تفاعلية ممتعة", "✨"],
        ["Radio Garden", "https://radio.garden", "استكشاف محطات الراديو حول العالم", "🌍"],
        ["Window Swap", "https://www.window-swap.com", "مشاهدة من نوافذ حول العالم", "🪟"],
        ["A Soft Murmur", "https://asoftmurmur.com", "أصوات خلفية للاسترخاء", "🌧️"],
        ["Rainy Mood", "https://rainymood.com", "صوت المطر", "🌧️"],
        ["EarthCam", "https://www.earthcam.com", "كاميرات مباشرة من أماكن مختلفة", "📹"],
        ["Flightradar24", "https://www.flightradar24.com", "تتبع الطائرات", "✈️"],
        ["MarineTraffic", "https://www.marinetraffic.com", "تتبع السفن", "🚢"],
        ["Google Earth", "https://earth.google.com", "استكشاف العالم ثلاثي الأبعاد", "🌍"],
        ["Google Arts & Culture", "https://artsandculture.google.com", "استكشاف الفن والثقافة", "🖼️"],
        ["Atlas Obscura", "https://www.atlasobscura.com", "أماكن وأشياء غريبة حول العالم", "🗺️"],
        ["Bored Panda", "https://www.boredpanda.com", "قصص وصور ومحتوى ممتع", "🐼"],
        ["Bright Side", "https://brightside.me", "محتوى خفيف ومعلومات ممتعة", "💡"],
        ["Mental Floss", "https://www.mentalfloss.com", "معلومات وحقائق متنوعة", "🧠"],
        ["Interesting Engineering", "https://interestingengineering.com", "هندسة وتقنية ومعلومات", "⚙️"],
        ["Fandom", "https://www.fandom.com", "موسوعات مجتمعات الألعاب والأفلام", "🌐"],
        ["TV Tropes", "https://tvtropes.org", "موسوعة أساليب القصص والأعمال", "📺"],
        ["IMDb", "https://www.imdb.com", "قاعدة بيانات الأفلام والمسلسلات", "🎬"],
        ["Letterboxd", "https://letterboxd.com", "تتبع الأفلام وتقييمها", "🎞️"],
        ["Goodreads", "https://www.goodreads.com", "مجتمع محبي الكتب", "📚"],
        ["MyAnimeList", "https://myanimelist.net", "قاعدة بيانات الأنمي والمانغا", "🍥"],
        ["AniList", "https://anilist.co", "تتبع الأنمي والمانغا", "🌸"],
        ["Crunchyroll", "https://www.crunchyroll.com", "منصة للأنمي", "🍥"],
        ["NASA", "https://www.nasa.gov", "استكشاف الفضاء وعلوم NASA", "🚀"],
        ["Space.com", "https://www.space.com", "أخبار ومعلومات الفضاء", "🚀"],
        ["Live Science", "https://www.livescience.com", "علوم واكتشافات", "🔬"],
        ["HowStuffWorks", "https://www.howstuffworks.com", "شرح كيفية عمل الأشياء", "⚙️"],
        ["Wolfram Alpha", "https://www.wolframalpha.com", "محرك معرفة وحساب", "🧮"],
        ["Random.org", "https://www.random.org", "أدوات عشوائية", "🎲"],
        ["This Person Does Not Exist", "https://thispersondoesnotexist.com", "صور أشخاص مولدة بالذكاء الاصطناعي", "🤖"],
        ["Patatap", "https://patatap.com", "تجربة تفاعلية للأصوات والرسوم", "🎹"],
        ["Chrome Music Lab", "https://musiclab.chromeexperiments.com", "تجارب موسيقية تفاعلية", "🎵"],
        ["Silk", "https://weavesilk.com", "رسم تفاعلي جميل", "🖌️"],
        ["Quick Draw", "https://quickdraw.withgoogle.com", "لعبة رسم وتعرف بالذكاء الاصطناعي", "✏️"],
        ["Akinator", "https://en.akinator.com", "لعبة تخمين الشخصيات", "🧞"],
        ["Sporcle", "https://www.sporcle.com", "اختبارات وألعاب معلومات", "🧠"],
        ["JetPunk", "https://www.jetpunk.com", "اختبارات معلومات عامة", "🧩"],
        ["Seterra", "https://www.geoguessr.com/seterra", "اختبارات جغرافية", "🌍"],
        ["Flagpedia", "https://flagpedia.net", "أعلام دول العالم", "🏳️"]
    ],

    /* =====================================================
       EDUCATION - 51
       ===================================================== */

    education: [
        ["Khan Academy", "https://www.khanacademy.org", "دروس وتمارين مجانية", "🎓"],
        ["Coursera", "https://www.coursera.org", "دورات تعليمية من جامعات وشركات", "🎓"],
        ["edX", "https://www.edx.org", "دورات أكاديمية عبر الإنترنت", "📚"],
        ["Udemy", "https://www.udemy.com", "دورات تعليمية متنوعة", "🎓"],
        ["MIT OpenCourseWare", "https://ocw.mit.edu", "مواد دراسية مجانية من MIT", "🏫"],
        ["OpenLearn", "https://www.open.edu/openlearn", "دورات مجانية من Open University", "📖"],
        ["FutureLearn", "https://www.futurelearn.com", "دورات تعليمية عبر الإنترنت", "🌱"],
        ["Alison", "https://alison.com", "دورات وشهادات تعليمية", "🎓"],
        ["Codecademy", "https://www.codecademy.com", "تعلم البرمجة بشكل تفاعلي", "💻"],
        ["freeCodeCamp", "https://www.freecodecamp.org", "تعلم البرمجة مجانًا", "🔥"],
        ["W3Schools", "https://www.w3schools.com", "دروس تطوير الويب", "🌐"],
        ["MDN Web Docs", "https://developer.mozilla.org", "توثيق تقنيات الويب", "🦊"],
        ["GeeksforGeeks", "https://www.geeksforgeeks.org", "برمجة وعلوم حاسوب", "💻"],
        ["Programiz", "https://www.programiz.com", "دروس البرمجة", "👨‍💻"],
        ["TutorialsPoint", "https://www.tutorialspoint.com", "دروس تقنية وبرمجية", "📘"],
        ["SoloLearn", "https://www.sololearn.com", "تعلم البرمجة تفاعليًا", "📱"],
        ["Brilliant", "https://brilliant.org", "رياضيات وعلوم بطريقة تفاعلية", "💡"],
        ["Desmos", "https://www.desmos.com", "حاسبات ورسوم بيانية رياضية", "📈"],
        ["GeoGebra", "https://www.geogebra.org", "رياضيات وهندسة تفاعلية", "📐"],
        ["Symbolab", "https://www.symbolab.com", "حل مسائل رياضية خطوة بخطوة", "🧮"],
        ["Mathway", "https://www.mathway.com", "مساعدة في المسائل الرياضية", "➗"],
        ["Photomath", "https://photomath.com", "حل مسائل الرياضيات", "📷"],
        ["Paul's Online Math Notes", "https://tutorial.math.lamar.edu", "ملاحظات الرياضيات", "📐"],
        ["Purplemath", "https://www.purplemath.com", "شروحات الرياضيات", "🧮"],
        ["CK-12", "https://www.ck12.org", "مواد تعليمية للعلوم والرياضيات", "🔬"],
        ["PhET", "https://phet.colorado.edu", "محاكاة تفاعلية للعلوم", "⚗️"],
        ["The Physics Classroom", "https://www.physicsclassroom.com", "تعلم الفيزياء", "⚛️"],
        ["HyperPhysics", "http://hyperphysics.phy-astr.gsu.edu", "مرجع للفيزياء", "⚛️"],
        ["Biology Online", "https://www.biology-online.org", "مصادر علم الأحياء", "🧬"],
        ["ChemLibreTexts", "https://chem.libretexts.org", "كيمياء تعليمية مفتوحة", "🧪"],
        ["LibreTexts", "https://libretexts.org", "كتب ومواد تعليمية مفتوحة", "📚"],
        ["OpenStax", "https://openstax.org", "كتب جامعية مجانية", "📘"],
        ["Wikipedia", "https://www.wikipedia.org", "موسوعة حرة", "🌐"],
        ["Wikiversity", "https://www.wikiversity.org", "منصة تعليمية حرة", "🎓"],
        ["Wikibooks", "https://www.wikibooks.org", "كتب تعليمية حرة", "📖"],
        ["Wiktionary", "https://www.wiktionary.org", "قاموس حر", "📕"],
        ["Quizlet", "https://quizlet.com", "بطاقات واختبارات تعليمية", "📝"],
        ["AnkiWeb", "https://ankiweb.net", "بطاقات تكرار متباعد", "🧠"],
        ["StudyStack", "https://www.studystack.com", "بطاقات وألعاب دراسية", "📚"],
        ["Quizizz", "https://quizizz.com", "اختبارات تعليمية تفاعلية", "❓"],
        ["Kahoot", "https://kahoot.com", "اختبارات وألعاب تعليمية", "🎯"],
        ["Socrative", "https://www.socrative.com", "اختبارات تعليمية", "📝"],
        ["ClassDojo", "https://www.classdojo.com", "أدوات للتعليم والتواصل", "🏫"],
        ["Google Classroom", "https://classroom.google.com", "إدارة الصفوف الدراسية", "🏫"],
        ["Google Scholar", "https://scholar.google.com", "البحث عن الأبحاث الأكاديمية", "🔎"],
        ["ResearchGate", "https://www.researchgate.net", "شبكة للباحثين والأبحاث", "🔬"],
        ["Semantic Scholar", "https://www.semanticscholar.org", "محرك بحث للأبحاث العلمية", "📑"],
        ["JSTOR", "https://www.jstor.org", "أبحاث ومصادر أكاديمية", "📚"],
        ["Project Gutenberg", "https://www.gutenberg.org", "كتب إلكترونية مجانية", "📖"],
        ["Internet Archive", "https://archive.org", "أرشيف رقمي ضخم", "🗄️"],
        ["Open Culture", "https://www.openculture.com", "موارد تعليمية وثقافية مجانية", "🎓"]
    ],

    /* =====================================================
       BOOKS - 51
       ===================================================== */

    books: [
        ["Project Gutenberg", "https://www.gutenberg.org", "مكتبة كتب إلكترونية مجانية", "📖"],
        ["Internet Archive Books", "https://archive.org/details/texts", "كتب ومصادر رقمية", "📚"],
        ["Open Library", "https://openlibrary.org", "مكتبة مفتوحة على الإنترنت", "📕"],
        ["Google Books", "https://books.google.com", "البحث في الكتب", "📚"],
        ["Goodreads", "https://www.goodreads.com", "مجتمع القراء والكتب", "📖"],
        ["ManyBooks", "https://manybooks.net", "كتب إلكترونية مجانية", "📚"],
        ["Standard Ebooks", "https://standardebooks.org", "كتب كلاسيكية مجانية ومنسقة", "📕"],
        ["OpenStax", "https://openstax.org", "كتب تعليمية مفتوحة", "🎓"],
        ["LibreTexts", "https://libretexts.org", "كتب ومراجع تعليمية", "📘"],
        ["Wikisource", "https://www.wikisource.org", "مكتبة نصوص حرة", "📜"],
        ["Wikibooks", "https://www.wikibooks.org", "كتب تعليمية حرة", "📚"],
        ["Wiktionary", "https://www.wiktionary.org", "قاموس متعدد اللغات", "📕"],
        ["WorldCat", "https://www.worldcat.org", "فهرس المكتبات العالمي", "🌍"],
        ["Library of Congress", "https://www.loc.gov", "مكتبة الكونغرس", "🏛️"],
        ["British Library", "https://www.bl.uk", "المكتبة البريطانية", "🇬🇧"],
        ["New York Public Library", "https://www.nypl.org", "مكتبة نيويورك العامة", "📚"],
        ["Internet Speculative Fiction Database", "https://isfdb.org", "قاعدة بيانات كتب الخيال العلمي", "🚀"],
        ["Fantastic Fiction", "https://www.fantasticfiction.com", "قاعدة بيانات للكتب والمؤلفين", "📖"],
        ["BookBub", "https://www.bookbub.com", "اكتشاف الكتب والعروض", "📚"],
        ["StoryGraph", "https://app.thestorygraph.com", "تتبع القراءة والكتب", "📊"],
        ["LibraryThing", "https://www.librarything.com", "تنظيم مكتبتك الشخصية", "📚"],
        ["Book Riot", "https://bookriot.com", "أخبار ومحتوى عن الكتب", "📕"],
        ["Literary Hub", "https://lithub.com", "أدب وكتب وثقافة", "📖"],
        ["Poetry Foundation", "https://www.poetryfoundation.org", "الشعر والأدب", "📝"],
        ["Poets.org", "https://poets.org", "موقع الشعراء الأمريكيين", "✒️"],
        ["Shakespeare Online", "https://www.shakespeare-online.com", "مصادر عن شكسبير", "🎭"],
        ["SparkNotes", "https://www.sparknotes.com", "ملخصات ومراجع دراسية", "📚"],
        ["CliffsNotes", "https://www.cliffsnotes.com", "مساعدة دراسية وملخصات", "📝"],
        ["LitCharts", "https://www.litcharts.com", "تحليل الأعمال الأدبية", "📖"],
        ["GradeSaver", "https://www.gradesaver.com", "أدلة أدبية ودراسية", "🎓"],
        ["Shmoop", "https://www.shmoop.com", "أدلة تعليمية وأدبية", "📚"],
        ["The Paris Review", "https://www.theparisreview.org", "أدب ومقابلات وكتابة", "✒️"],
        ["The New Yorker Books", "https://www.newyorker.com/books", "كتب ومراجعات أدبية", "📕"],
        ["The Guardian Books", "https://www.theguardian.com/books", "أخبار ومراجعات الكتب", "📰"],
        ["The Millions", "https://themillions.com", "أدب وكتب", "📚"],
        ["Electric Literature", "https://electricliterature.com", "أدب وكتابة", "✍️"],
        ["BookPage", "https://www.bookpage.com", "مراجعات الكتب", "📖"],
        ["Kirkus Reviews", "https://www.kirkusreviews.com", "مراجعات الكتب", "⭐"],
        ["Publishers Weekly", "https://www.publishersweekly.com", "أخبار صناعة الكتب", "📚"],
        ["BookBrowse", "https://www.bookbrowse.com", "اكتشاف ومراجعة الكتب", "🔎"],
        ["Read Print", "https://www.readprint.com", "كتب كلاسيكية عبر الإنترنت", "📖"],
        ["Feedbooks", "https://www.feedbooks.com", "كتب إلكترونية", "📱"],
        ["Smashwords", "https://www.smashwords.com", "كتب إلكترونية مستقلة", "📚"],
        ["Loyal Books", "https://www.loyalbooks.com", "كتب صوتية وإلكترونية مجانية", "🎧"],
        ["LibriVox", "https://librivox.org", "كتب صوتية من الملكية العامة", "🎙️"],
        ["Digital Public Library of America", "https://dp.la", "مصادر رقمية من المكتبات", "🏛️"],
        ["Europeana", "https://www.europeana.eu", "تراث ثقافي أوروبي رقمي", "🇪🇺"],
        ["HathiTrust", "https://www.hathitrust.org", "مكتبة رقمية أكاديمية", "📚"],
        ["Open Textbook Library", "https://open.umn.edu/opentextbooks", "كتب دراسية مفتوحة", "🎓"],
        ["DOAB", "https://www.doabooks.org", "كتب أكاديمية مفتوحة", "📘"],
        ["Directory of Open Access Books", "https://www.oapen.org", "كتب أكاديمية مفتوحة الوصول", "📚"],
        ["BookFinder", "https://www.bookfinder.com", "البحث عن الكتب", "🔎"]
    ],

    /* =====================================================
       AI - 51
       ===================================================== */

    ai: [
        ["ChatGPT", "https://chatgpt.com", "مساعد ذكاء اصطناعي", "🤖"],
        ["Google Gemini", "https://gemini.google.com", "مساعد الذكاء الاصطناعي من Google", "✨"],
        ["Microsoft Copilot", "https://copilot.microsoft.com", "مساعد الذكاء الاصطناعي من Microsoft", "🪟"],
        ["Claude", "https://claude.ai", "مساعد ذكاء اصطناعي", "🧠"],
        ["Perplexity", "https://www.perplexity.ai", "محرك بحث مدعوم بالذكاء الاصطناعي", "🔎"],
        ["Grok", "https://grok.com", "مساعد ذكاء اصطناعي", "🤖"],
        ["DeepSeek", "https://chat.deepseek.com", "مساعد ذكاء اصطناعي", "🧠"],
        ["Poe", "https://poe.com", "منصة للوصول إلى نماذج ذكاء اصطناعي", "💬"],
        ["Hugging Face", "https://huggingface.co", "نماذج وأدوات الذكاء الاصطناعي", "🤗"],
        ["Replicate", "https://replicate.com", "تشغيل نماذج الذكاء الاصطناعي", "🧪"],
        ["Google AI Studio", "https://aistudio.google.com", "تطوير واختبار نماذج Google AI", "✨"],
        ["Vertex AI", "https://cloud.google.com/vertex-ai", "منصة الذكاء الاصطناعي من Google Cloud", "☁️"],
        ["OpenAI", "https://openai.com", "أبحاث ومنتجات الذكاء الاصطناعي", "🤖"],
        ["Anthropic", "https://www.anthropic.com", "شركة أبحاث ذكاء اصطناعي", "🧠"],
        ["Meta AI", "https://www.meta.ai", "مساعد الذكاء الاصطناعي من Meta", "🔵"],
        ["Character AI", "https://character.ai", "شخصيات ومحادثات بالذكاء الاصطناعي", "💬"],
        ["Pi", "https://pi.ai", "مساعد ذكاء اصطناعي", "💡"],
        ["You.com", "https://you.com", "بحث ومساعدات ذكاء اصطناعي", "🔎"],
        ["Phind", "https://www.phind.com", "مساعد بحث وبرمجة بالذكاء الاصطناعي", "💻"],
        ["Blackbox AI", "https://www.blackbox.ai", "مساعد برمجي بالذكاء الاصطناعي", "🖥️"],
        ["Cursor", "https://www.cursor.com", "محرر أكواد بالذكاء الاصطناعي", "⌨️"],
        ["Replit AI", "https://replit.com", "برمجة بمساعدة الذكاء الاصطناعي", "💻"],
        ["GitHub Copilot", "https://github.com/features/copilot", "مساعد برمجة من GitHub", "🐙"],
        ["Tabnine", "https://www.tabnine.com", "مساعد كتابة الأكواد", "⌨️"],
        ["Codeium", "https://codeium.com", "مساعد برمجة بالذكاء الاصطناعي", "💻"],
        ["Windsurf", "https://windsurf.com", "بيئة تطوير مدعومة بالذكاء الاصطناعي", "🌊"],
        ["v0", "https://v0.dev", "إنشاء واجهات باستخدام الذكاء الاصطناعي", "⚡"],
        ["Bolt", "https://bolt.new", "إنشاء تطبيقات ويب بالذكاء الاصطناعي", "⚡"],
        ["Lovable", "https://lovable.dev", "إنشاء تطبيقات بالذكاء الاصطناعي", "💜"],
        ["Gamma", "https://gamma.app", "إنشاء عروض ومستندات بالذكاء الاصطناعي", "📊"],
        ["Canva AI", "https://www.canva.com/ai-image-generator", "أدوات تصميم بالذكاء الاصطناعي", "🎨"],
        ["Adobe Firefly", "https://firefly.adobe.com", "إنشاء الصور بالذكاء الاصطناعي", "🔥"],
        ["Leonardo AI", "https://leonardo.ai", "إنشاء صور بالذكاء الاصطناعي", "🎨"],
        ["Ideogram", "https://ideogram.ai", "إنشاء صور ونصوص مرئية", "🖼️"],
        ["Krea", "https://www.krea.ai", "أدوات إنشاء صور وفيديو بالذكاء الاصطناعي", "✨"],
        ["Playground AI", "https://playground.com", "إنشاء وتصميم الصور بالذكاء الاصطناعي", "🖼️"],
        ["Microsoft Designer", "https://designer.microsoft.com", "تصميمات مدعومة بالذكاء الاصطناعي", "🎨"],
        ["Remove.bg", "https://www.remove.bg", "إزالة خلفية الصور", "✂️"],
        ["Cleanup.pictures", "https://cleanup.pictures", "إزالة عناصر من الصور", "🧹"],
        ["Upscale.media", "https://www.upscale.media", "رفع دقة الصور", "🔍"],
        ["Let's Enhance", "https://letsenhance.io", "تحسين الصور بالذكاء الاصطناعي", "✨"],
        ["Clipdrop", "https://clipdrop.co", "مجموعة أدوات للصور والذكاء الاصطناعي", "🖼️"],
        ["Descript", "https://www.descript.com", "تحرير الفيديو والصوت بالذكاء الاصطناعي", "🎬"],
        ["Runway", "https://runwayml.com", "إنشاء وتحرير الفيديو بالذكاء الاصطناعي", "🎬"],
        ["Pika", "https://pika.art", "إنشاء الفيديو بالذكاء الاصطناعي", "🎥"],
        ["Luma", "https://lumalabs.ai", "أدوات فيديو وثلاثي الأبعاد بالذكاء الاصطناعي", "🌌"],
        ["ElevenLabs", "https://elevenlabs.io", "توليد وتحويل الصوت", "🎙️"],
        ["Suno", "https://suno.com", "إنشاء الموسيقى بالذكاء الاصطناعي", "🎵"],
        ["Udio", "https://www.udio.com", "إنشاء الموسيقى بالذكاء الاصطناعي", "🎶"],
        ["NotebookLM", "https://notebooklm.google.com", "مساعد بحث ودراسة بالذكاء الاصطناعي", "📓"],
        ["Consensus", "https://consensus.app", "البحث في الأبحاث باستخدام الذكاء الاصطناعي", "🔬"]
    ],

    /* =====================================================
       DESIGN - 51
       ===================================================== */

    design: [
        ["Canva", "https://www.canva.com", "تصميم الصور والعروض والمنشورات", "🎨"],
        ["Figma", "https://www.figma.com", "تصميم واجهات وتجارب المستخدم", "🖌️"],
        ["Adobe", "https://www.adobe.com", "مجموعة أدوات التصميم والإبداع", "🅰️"],
        ["Photoshop", "https://www.adobe.com/products/photoshop.html", "تحرير الصور", "🖼️"],
        ["Illustrator", "https://www.adobe.com/products/illustrator.html", "تصميم الرسومات المتجهة", "✒️"],
        ["Adobe Express", "https://www.adobe.com/express", "تصميمات سريعة على الويب", "✨"],
        ["Photopea", "https://www.photopea.com", "محرر صور متقدم عبر المتصفح", "🖼️"],
        ["Pixlr", "https://pixlr.com", "تحرير الصور عبر الإنترنت", "🎨"],
        ["GIMP", "https://www.gimp.org", "محرر صور مفتوح المصدر", "🖌️"],
        ["Inkscape", "https://inkscape.org", "رسومات متجهة مفتوحة المصدر", "✒️"],
        ["Krita", "https://krita.org", "رسم رقمي ومحرر صور", "🎨"],
        ["Sketch", "https://www.sketch.com", "تصميم واجهات المستخدم", "💎"],
        ["Penpot", "https://penpot.app", "تصميم واجهات مفتوح المصدر", "🖌️"],
        ["Framer", "https://www.framer.com", "تصميم وبناء المواقع", "⚡"],
        ["Webflow", "https://webflow.com", "تصميم وتطوير المواقع", "🌐"],
        ["Dribbble", "https://dribbble.com", "مجتمع للمصممين", "🏀"],
        ["Behance", "https://www.behance.net", "عرض الأعمال الإبداعية", "🎨"],
        ["ArtStation", "https://www.artstation.com", "أعمال الفنانين الرقميين", "🖼️"],
        ["DeviantArt", "https://www.deviantart.com", "مجتمع للفن الرقمي", "🎨"],
        ["Unsplash", "https://unsplash.com", "صور مجانية عالية الجودة", "📷"],
        ["Pexels", "https://www.pexels.com", "صور وفيديوهات مجانية", "📸"],
        ["Pixabay", "https://pixabay.com", "صور وفيديوهات ورسومات مجانية", "🌄"],
        ["Freepik", "https://www.freepik.com", "موارد تصميم ورسومات", "🎨"],
        ["Vecteezy", "https://www.vecteezy.com", "رسومات وصور متجهة", "✏️"],
        ["SVG Repo", "https://www.svgrepo.com", "أيقونات SVG مجانية", "🔷"],
        ["Flaticon", "https://www.flaticon.com", "أيقونات ورسومات", "🔲"],
        ["Icons8", "https://icons8.com", "أيقونات ورسومات وأدوات تصميم", "🎯"],
        ["The Noun Project", "https://thenounproject.com", "أيقونات ورموز", "🔣"],
        ["Font Awesome", "https://fontawesome.com", "مكتبة أيقونات", "⭐"],
        ["Google Fonts", "https://fonts.google.com", "خطوط مجانية", "🔤"],
        ["DaFont", "https://www.dafont.com", "مكتبة خطوط", "🔤"],
        ["Font Squirrel", "https://www.fontsquirrel.com", "خطوط مجانية", "🔠"],
        ["Coolors", "https://coolors.co", "توليد لوحات ألوان", "🌈"],
        ["Adobe Color", "https://color.adobe.com", "إنشاء واستكشاف الألوان", "🎨"],
        ["Color Hunt", "https://colorhunt.co", "لوحات ألوان جاهزة", "🌈"],
        ["ColorSpace", "https://mycolor.space", "توليد الألوان والتدرجات", "🎨"],
        ["CSS Gradient", "https://cssgradient.io", "إنشاء تدرجات CSS", "🌈"],
        ["Haikei", "https://haikei.app", "إنشاء خلفيات SVG", "🌀"],
        ["Blobmaker", "https://www.blobmaker.app", "إنشاء أشكال SVG", "🫧"],
        ["Get Waves", "https://getwaves.io", "إنشاء أشكال موجية SVG", "〰️"],
        ["Pattern Monster", "https://pattern.monster", "إنشاء أنماط SVG", "🔷"],
        ["BGJar", "https://bgjar.com", "خلفيات SVG", "🖼️"],
        ["Shots", "https://shots.so", "عرض صور المشاريع بشكل احترافي", "📱"],
        ["Mockup World", "https://www.mockupworld.co", "نماذج Mockup", "📦"],
        ["Smartmockups", "https://smartmockups.com", "إنشاء نماذج للمنتجات", "📱"],
        ["Placeit", "https://placeit.net", "Mockups وتصميمات", "🎨"],
        ["Remove.bg", "https://www.remove.bg", "إزالة خلفيات الصور", "✂️"],
        ["TinyPNG", "https://tinypng.com", "ضغط الصور", "🐼"],
        ["Squoosh", "https://squoosh.app", "ضغط وتحسين الصور", "🖼️"],
        ["SVGOMG", "https://jakearchibald.github.io/svgomg", "تحسين ملفات SVG", "⚙️"],
        ["CSS Tricks", "https://css-tricks.com", "مقالات وأفكار لتصميم الويب", "🎨"]
    ],

    /* =====================================================
       VIDEO - 51
       ===================================================== */

    video: [
        ["YouTube", "https://www.youtube.com", "مشاهدة ومشاركة الفيديو", "▶️"],
        ["YouTube Studio", "https://studio.youtube.com", "إدارة قنوات YouTube", "🎬"],
        ["Vimeo", "https://vimeo.com", "منصة فيديو احترافية", "▶️"],
        ["Dailymotion", "https://www.dailymotion.com", "منصة فيديو", "📺"],
        ["Twitch", "https://www.twitch.tv", "بث مباشر ومحتوى ترفيهي", "🟣"],
        ["Kick", "https://kick.com", "منصة بث مباشر", "🟢"],
        ["Rumble", "https://rumble.com", "منصة فيديو وبث", "📺"],
        ["PeerTube", "https://joinpeertube.org", "منصة فيديو لامركزية", "🌐"],
        ["Internet Archive Video", "https://archive.org/details/movies", "أرشيف فيديو رقمي", "🎞️"],
        ["TED", "https://www.ted.com", "محاضرات وأفكار", "🎤"],
        ["TED-Ed", "https://ed.ted.com", "دروس فيديو تعليمية", "🎓"],
        ["Netflix", "https://www.netflix.com", "منصة مشاهدة الأفلام والمسلسلات", "🎬"],
        ["Disney+", "https://www.disneyplus.com", "منصة بث من Disney", "✨"],
        ["Prime Video", "https://www.primevideo.com", "منصة بث فيديو", "📺"],
        ["Max", "https://www.max.com", "منصة بث فيديو", "🎬"],
        ["Apple TV+", "https://tv.apple.com", "خدمة بث Apple", "🍎"],
        ["Crunchyroll", "https://www.crunchyroll.com", "منصة أنمي", "🍥"],
        ["Tubi", "https://tubitv.com", "مشاهدة أفلام ومسلسلات", "📺"],
        ["Pluto TV", "https://pluto.tv", "قنوات وبث مجاني", "📺"],
        ["Plex", "https://www.plex.tv", "محتوى فيديو وخادم وسائط", "▶️"],
        ["CapCut", "https://www.capcut.com", "محرر فيديو", "✂️"],
        ["Adobe Premiere Pro", "https://www.adobe.com/products/premiere.html", "تحرير فيديو احترافي", "🎬"],
        ["DaVinci Resolve", "https://www.blackmagicdesign.com/products/davinciresolve", "تحرير فيديو احترافي", "🎥"],
        ["VEED", "https://www.veed.io", "محرر فيديو عبر الإنترنت", "✂️"],
        ["Kapwing", "https://www.kapwing.com", "تحرير فيديو وصور", "🎬"],
        ["Clipchamp", "https://clipchamp.com", "تحرير فيديو من Microsoft", "🎥"],
        ["Canva Video", "https://www.canva.com/video-editor", "تحرير الفيديو", "🎨"],
        ["InVideo", "https://invideo.io", "إنشاء وتحرير الفيديو", "🎬"],
        ["FlexClip", "https://www.flexclip.com", "محرر فيديو أونلاين", "🎞️"],
        ["VEGAS", "https://www.vegascreativesoftware.com", "تحرير الفيديو", "🎬"],
        ["Shotcut", "https://www.shotcut.org", "محرر فيديو مفتوح المصدر", "✂️"],
        ["OpenShot", "https://www.openshot.org", "محرر فيديو مفتوح المصدر", "🎥"],
        ["Kdenlive", "https://kdenlive.org", "محرر فيديو مفتوح المصدر", "🎬"],
        ["Blender", "https://www.blender.org", "3D ورسوم وتحريك وفيديو", "🧊"],
        ["OBS Studio", "https://obsproject.com", "تسجيل وبث الشاشة", "📹"],
        ["Streamlabs", "https://streamlabs.com", "أدوات البث المباشر", "📺"],
        ["Restream", "https://restream.io", "البث إلى عدة منصات", "🔴"],
        ["Loom", "https://www.loom.com", "تسجيل الشاشة والفيديو", "📹"],
        ["ScreenPal", "https://screenpal.com", "تسجيل الشاشة وتحرير الفيديو", "🖥️"],
        ["CloudConvert Video", "https://cloudconvert.com/video-converter", "تحويل ملفات الفيديو", "🔄"],
        ["HandBrake", "https://handbrake.fr", "تحويل وضغط الفيديو", "🛠️"],
        ["Media.io", "https://www.media.io", "أدوات فيديو وصوت", "🎬"],
        ["Clideo", "https://clideo.com", "أدوات تحرير الفيديو", "✂️"],
        ["123apps Video", "https://online-video-cutter.com", "قص وتعديل الفيديو", "🎞️"],
        ["EZGIF", "https://ezgif.com", "تحرير GIF والفيديو", "GIF"],
        ["Giphy", "https://giphy.com", "GIFs وفيديوهات قصيرة", "🎞️"],
        ["Tenor", "https://tenor.com", "صور GIF متحركة", "GIF"],
        ["Mixkit", "https://mixkit.co", "فيديوهات وموسيقى مجانية", "🎬"],
        ["Coverr", "https://coverr.co", "فيديوهات مجانية للمشاريع", "🎥"],
        ["Videvo", "https://www.videvo.net", "فيديوهات وموارد مرئية", "📹"],
        ["Pexels Videos", "https://www.pexels.com/videos", "فيديوهات مجانية", "🎞️"]
    ],

    /* =====================================================
       MUSIC - 51
       ===================================================== */

    music: [
        ["Spotify", "https://open.spotify.com", "استماع للموسيقى والبودكاست", "🎵"],
        ["YouTube Music", "https://music.youtube.com", "موسيقى من YouTube", "🎧"],
        ["SoundCloud", "https://soundcloud.com", "مشاركة واكتشاف الموسيقى", "☁️"],
        ["Bandcamp", "https://bandcamp.com", "اكتشاف وشراء الموسيقى", "🎵"],
        ["Apple Music", "https://music.apple.com", "خدمة موسيقى Apple", "🍎"],
        ["Amazon Music", "https://music.amazon.com", "خدمة موسيقى Amazon", "🎧"],
        ["Deezer", "https://www.deezer.com", "استماع للموسيقى", "🎶"],
        ["Tidal", "https://tidal.com", "خدمة بث موسيقي", "🌊"],
        ["Last.fm", "https://www.last.fm", "تتبع واكتشاف الموسيقى", "🎵"],
        ["Audiomack", "https://audiomack.com", "منصة موسيقى", "🎧"],
        ["Mixcloud", "https://www.mixcloud.com", "DJ وبرامج صوتية", "🎚️"],
        ["Jamendo", "https://www.jamendo.com", "موسيقى مستقلة", "🎶"],
        ["Free Music Archive", "https://freemusicarchive.org", "موسيقى متاحة للاستخدام", "🎵"],
        ["Musopen", "https://musopen.org", "موسيقى كلاسيكية ومصادر موسيقية", "🎻"],
        ["Internet Archive Audio", "https://archive.org/details/audio", "أرشيف صوتي", "🎙️"],
        ["BandLab", "https://www.bandlab.com", "إنشاء وتسجيل الموسيقى", "🎚️"],
        ["Soundtrap", "https://www.soundtrap.com", "استوديو موسيقى أونلاين", "🎛️"],
        ["Audiotool", "https://www.audiotool.com", "إنتاج الموسيقى عبر الويب", "🎚️"],
        ["Splice", "https://splice.com", "عينات وأدوات موسيقية", "🎛️"],
        ["Looperman", "https://www.looperman.com", "Loops وعينات صوتية", "🔁"],
        ["Freesound", "https://freesound.org", "مؤثرات وأصوات", "🔊"],
        ["Zapsplat", "https://www.zapsplat.com", "مؤثرات صوتية", "🔊"],
        ["Pixabay Music", "https://pixabay.com/music", "موسيقى مجانية", "🎵"],
        ["Mixkit Music", "https://mixkit.co/free-stock-music", "موسيقى مجانية", "🎶"],
        ["Uppbeat", "https://uppbeat.io", "موسيقى ومؤثرات للمحتوى", "🎧"],
        ["Epidemic Sound", "https://www.epidemicsound.com", "موسيقى للمحتوى", "🎵"],
        ["Artlist", "https://artlist.io", "موسيقى ومؤثرات", "🎼"],
        ["LALAL.AI", "https://www.lalal.ai", "فصل الأصوات عن الموسيقى", "🎙️"],
        ["Moises", "https://moises.ai", "أدوات فصل وتحليل الصوت", "🎵"],
        ["Vocal Remover", "https://vocalremover.org", "إزالة الصوت أو الموسيقى", "🎤"],
        ["AudioMass", "https://audiomass.co", "محرر صوت عبر المتصفح", "🔊"],
        ["TwistedWave", "https://twistedwave.com/online", "تحرير الصوت أونلاين", "🎚️"],
        ["Bear Audio", "https://www.bearaudiotool.com", "أدوات صوتية عبر الإنترنت", "🔊"],
        ["AudioTrimmer", "https://audiotrimmer.com", "قص الملفات الصوتية", "✂️"],
        ["Online Audio Converter", "https://online-audio-converter.com", "تحويل الملفات الصوتية", "🔄"],
        ["CloudConvert Audio", "https://cloudconvert.com/audio-converter", "تحويل الصوت", "🔄"],
        ["Auphonic", "https://auphonic.com", "تحسين الصوت تلقائيًا", "🎙️"],
        ["Descript", "https://www.descript.com", "تحرير الصوت والفيديو", "🎧"],
        ["ElevenLabs", "https://elevenlabs.io", "أدوات الصوت والذكاء الاصطناعي", "🗣️"],
        ["Voice.ai", "https://voice.ai", "أدوات صوتية بالذكاء الاصطناعي", "🎙️"],
        ["MyInstants", "https://www.myinstants.com", "أصوات ومؤثرات قصيرة", "🔊"],
        ["Radio Garden", "https://radio.garden", "استماع لمحطات حول العالم", "🌍"],
        ["TuneIn", "https://tunein.com", "راديو وبودكاست", "📻"],
        ["iHeart", "https://www.iheart.com", "راديو وموسيقى", "📻"],
        ["Pocket Casts", "https://pocketcasts.com", "بودكاست", "🎙️"],
        ["Google Podcasts", "https://podcasts.google.com", "البحث عن البودكاست", "🎧"],
        ["Podbean", "https://www.podbean.com", "استضافة واكتشاف البودكاست", "🎙️"],
        ["Buzzsprout", "https://www.buzzsprout.com", "استضافة البودكاست", "🎤"],
        ["Podchaser", "https://www.podchaser.com", "قاعدة بيانات للبودكاست", "🎧"],
        ["Listen Notes", "https://www.listennotes.com", "محرك بحث للبودكاست", "🔎"],
        ["Songsterr", "https://www.songsterr.com", "تابات وتعليم العزف", "🎸"],
        ["Ultimate Guitar", "https://www.ultimate-guitar.com", "تابات وأكوردات الجيتار", "🎸"]
    ],

    /* =====================================================
       PROGRAMMING - 51
       ===================================================== */

    programming: [
        ["GitHub", "https://github.com", "استضافة المشاريع البرمجية", "🐙"],
        ["GitLab", "https://gitlab.com", "منصة DevOps واستضافة Git", "🦊"],
        ["Bitbucket", "https://bitbucket.org", "استضافة مشاريع Git", "🪣"],
        ["Stack Overflow", "https://stackoverflow.com", "أسئلة وأجوبة البرمجة", "💻"],
        ["Stack Exchange", "https://stackexchange.com", "شبكة مواقع الأسئلة والأجوبة", "🔄"],
        ["CodePen", "https://codepen.io", "تجربة HTML وCSS وJavaScript", "🖊️"],
        ["JSFiddle", "https://jsfiddle.net", "تجربة JavaScript والويب", "🧪"],
        ["Replit", "https://replit.com", "برمجة وتشغيل المشاريع أونلاين", "💻"],
        ["CodeSandbox", "https://codesandbox.io", "بيئة تطوير عبر المتصفح", "📦"],
        ["Glitch", "https://glitch.com", "إنشاء تطبيقات ويب", "✨"],
        ["JS Bin", "https://jsbin.com", "تجربة أكواد الويب", "🧪"],
        ["W3Schools", "https://www.w3schools.com", "تعلم تطوير الويب", "🌐"],
        ["MDN", "https://developer.mozilla.org", "توثيق الويب", "🦊"],
        ["freeCodeCamp", "https://www.freecodecamp.org", "تعلم البرمجة مجانًا", "🔥"],
        ["Codecademy", "https://www.codecademy.com", "دروس برمجة تفاعلية", "💻"],
        ["The Odin Project", "https://www.theodinproject.com", "تعلم تطوير الويب", "⚔️"],
        ["Full Stack Open", "https://fullstackopen.com", "تطوير الويب الحديث", "🌐"],
        ["Roadmap.sh", "https://roadmap.sh", "خرائط تعلم البرمجة", "🗺️"],
        ["Frontend Mentor", "https://www.frontendmentor.io", "تحديات تطوير الواجهات", "🎯"],
        ["Dev.to", "https://dev.to", "مجتمع المطورين", "👨‍💻"],
        ["Hashnode", "https://hashnode.com", "مجتمع ومدونات المطورين", "📝"],
        ["Hacker News", "https://news.ycombinator.com", "أخبار التقنية والبرمجة", "📰"],
        ["GitHub Gist", "https://gist.github.com", "مشاركة الأكواد والنصوص", "📄"],
        ["npm", "https://www.npmjs.com", "حزم JavaScript", "📦"],
        ["PyPI", "https://pypi.org", "حزم Python", "🐍"],
        ["Crates.io", "https://crates.io", "حزم Rust", "🦀"],
        ["Maven Central", "https://central.sonatype.com", "مكتبات Java", "☕"],
        ["NuGet", "https://www.nuget.org", "حزم .NET", "🔷"],
        ["Packagist", "https://packagist.org", "حزم PHP", "🐘"],
        ["RubyGems", "https://rubygems.org", "حزم Ruby", "💎"],
        ["Docker Hub", "https://hub.docker.com", "صور وحاويات Docker", "🐳"],
        ["Kubernetes", "https://kubernetes.io", "منصة إدارة الحاويات", "☸️"],
        ["Vercel", "https://vercel.com", "استضافة ونشر تطبيقات الويب", "▲"],
        ["Netlify", "https://www.netlify.com", "استضافة ونشر المواقع", "🌐"],
        ["Cloudflare", "https://www.cloudflare.com", "شبكات وأمان واستضافة", "☁️"],
        ["Firebase", "https://firebase.google.com", "خدمات تطوير التطبيقات", "🔥"],
        ["Supabase", "https://supabase.com", "قاعدة بيانات وخدمات Backend", "⚡"],
        ["MongoDB", "https://www.mongodb.com", "قاعدة بيانات NoSQL", "🍃"],
        ["PostgreSQL", "https://www.postgresql.org", "قاعدة بيانات مفتوحة المصدر", "🐘"],
        ["MySQL", "https://www.mysql.com", "قاعدة بيانات SQL", "🐬"],
        ["SQLite", "https://sqlite.org", "قاعدة بيانات خفيفة", "🗃️"],
        ["Redis", "https://redis.io", "قاعدة بيانات في الذاكرة", "🔴"],
        ["Python", "https://www.python.org", "لغة Python الرسمية", "🐍"],
        ["JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript", "مرجع JavaScript", "🟨"],
        ["TypeScript", "https://www.typescriptlang.org", "لغة TypeScript", "🔷"],
        ["Rust", "https://www.rust-lang.org", "لغة Rust", "🦀"],
        ["Go", "https://go.dev", "لغة Go", "🐹"],
        ["Java", "https://www.java.com", "لغة Java", "☕"],
        ["C++", "https://isocpp.org", "لغة C++", "⚙️"],
        ["PHP", "https://www.php.net", "لغة PHP", "🐘"],
        ["Godot", "https://godotengine.org", "محرك ألعاب مفتوح المصدر", "🎮"],
        ["Unity", "https://unity.com", "محرك ألعاب وتطوير ثلاثي الأبعاد", "🔷"]
    ],

    /* =====================================================
       TOOLS - 51
       ===================================================== */

    tools: [
        ["Google", "https://www.google.com", "محرك البحث الشهير", "🔎"],
        ["Bing", "https://www.bing.com", "محرك بحث Microsoft", "🔍"],
        ["DuckDuckGo", "https://duckduckgo.com", "محرك بحث يركز على الخصوصية", "🦆"],
        ["Brave Search", "https://search.brave.com", "محرك بحث مستقل", "🦁"],
        ["Startpage", "https://www.startpage.com", "بحث مع تركيز على الخصوصية", "🔎"],
        ["Google Drive", "https://drive.google.com", "تخزين الملفات سحابيًا", "☁️"],
        ["OneDrive", "https://onedrive.live.com", "تخزين سحابي من Microsoft", "☁️"],
        ["Dropbox", "https://www.dropbox.com", "تخزين ومشاركة الملفات", "📦"],
        ["MEGA", "https://mega.io", "تخزين سحابي", "☁️"],
        ["WeTransfer", "https://wetransfer.com", "إرسال ملفات كبيرة", "📤"],
        ["File.io", "https://www.file.io", "مشاركة الملفات", "📁"],
        ["TransferNow", "https://www.transfernow.net", "إرسال الملفات", "📤"],
        ["SwissTransfer", "https://www.swisstransfer.com", "نقل الملفات الكبيرة", "🇨🇭"],
        ["TinyURL", "https://tinyurl.com", "اختصار الروابط", "🔗"],
        ["Bitly", "https://bitly.com", "اختصار وإدارة الروابط", "🔗"],
        ["QR Code Generator", "https://www.qr-code-generator.com", "إنشاء QR Codes", "▣"],
        ["QR Code Monkey", "https://www.qrcode-monkey.com", "إنشاء رموز QR", "🐒"],
        ["Google Translate", "https://translate.google.com", "ترجمة النصوص", "🌐"],
        ["DeepL", "https://www.deepl.com", "ترجمة عالية الجودة", "🌍"],
        ["Reverso", "https://www.reverso.net", "ترجمة وقواميس", "📖"],
        ["WordReference", "https://www.wordreference.com", "قواميس وترجمة", "📚"],
        ["Grammarly", "https://www.grammarly.com", "تحسين الكتابة الإنجليزية", "✍️"],
        ["LanguageTool", "https://languagetool.org", "تدقيق لغوي", "📝"],
        ["Hemingway Editor", "https://hemingwayapp.com", "تحسين وضوح الكتابة", "✍️"],
        ["Notion", "https://www.notion.so", "ملاحظات وتنظيم وإدارة مشاريع", "📝"],
        ["Trello", "https://trello.com", "إدارة المهام والمشاريع", "📋"],
        ["Asana", "https://asana.com", "إدارة المشاريع", "✅"],
        ["Todoist", "https://todoist.com", "إدارة المهام", "✔️"],
        ["Google Keep", "https://keep.google.com", "ملاحظات سريعة", "📌"],
        ["Google Docs", "https://docs.google.com", "محرر مستندات", "📄"],
        ["Google Sheets", "https://sheets.google.com", "جداول بيانات", "📊"],
        ["Google Slides", "https://slides.google.com", "عروض تقديمية", "📽️"],
        ["Microsoft Word Online", "https://www.office.com", "مستندات Office أونلاين", "📄"],
        ["Canva", "https://www.canva.com", "تصميم وإنشاء محتوى", "🎨"],
        ["PDF24", "https://tools.pdf24.org", "أدوات PDF", "📄"],
        ["iLovePDF", "https://www.ilovepdf.com", "تحرير وتحويل PDF", "❤️"],
        ["Smallpdf", "https://smallpdf.com", "أدوات PDF", "📄"],
        ["Sejda PDF", "https://www.sejda.com", "تحرير PDF", "📑"],
        ["PDFescape", "https://www.pdfescape.com", "تحرير PDF", "📄"],
        ["CloudConvert", "https://cloudconvert.com", "تحويل الملفات", "🔄"],
        ["Convertio", "https://convertio.co", "تحويل الملفات أونلاين", "🔄"],
        ["Zamzar", "https://www.zamzar.com", "تحويل الملفات", "🔄"],
        ["Online-Convert", "https://www.online-convert.com", "تحويل أنواع الملفات", "🔄"],
        ["Compress2Go", "https://www.compress2go.com", "ضغط الملفات", "📦"],
        ["TinyPNG", "https://tinypng.com", "ضغط الصور", "🐼"],
        ["TinyJPG", "https://tinyjpg.com", "ضغط صور JPG", "🖼️"],
        ["Squoosh", "https://squoosh.app", "تحسين وضغط الصور", "🖼️"],
        ["Photopea", "https://www.photopea.com", "تحرير الصور", "🎨"],
        ["Remove.bg", "https://www.remove.bg", "إزالة خلفية الصور", "✂️"],
        ["Temp Mail", "https://temp-mail.org", "بريد إلكتروني مؤقت", "📧"],
        ["Have I Been Pwned", "https://haveibeenpwned.com", "فحص تسريبات البريد الإلكتروني", "🔐"],
        ["Speedtest", "https://www.speedtest.net", "اختبار سرعة الإنترنت", "⚡"]
    ]
};

/* =========================================================
   BUILD SITE OBJECTS
   ========================================================= */

let siteData = [];

Object.entries(rawSites).forEach(([category, sites]) => {
    sites.forEach((item, index) => {
        siteData.push({
            id: `${category}-${index + 1}`,
            name: item[0],
            url: item[1],
            description: item[2],
            icon: item[3],
            category
        });
    });
});

/* =========================================================
   STATE
   ========================================================= */

let favorites = getStorageArray(STORAGE_KEYS.favorites);
let recentSites = getStorageArray(STORAGE_KEYS.recent);
let visits = getStorageObject(STORAGE_KEYS.visits);

let currentSection = "home";
let currentSite = null;
let currentView = localStorage.getItem(STORAGE_KEYS.view) || "grid";

/* =========================================================
   STORAGE
   ========================================================= */

function getStorageArray(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : [];
    } catch {
        return [];
    }
}

function getStorageObject(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : {};
    } catch {
        return {};
    }
}

function saveStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeView();

    renderAll();
    updateStats();
    setupGlobalEvents();
});

/* =========================================================
   GLOBAL EVENTS
   ========================================================= */

function setupGlobalEvents() {
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeModal();
        }

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {
            event.preventDefault();

            const input = document.getElementById("searchInput");

            if (input) {
                input.focus();
            }
        }
    });

    const siteSearch = document.getElementById("siteSearch");

    if (siteSearch) {
        siteSearch.addEventListener("input", filterSiteList);
    }

    const categorySelect = document.getElementById("categorySelect");

    if (categorySelect) {
        categorySelect.addEventListener("change", filterSiteList);
    }

    const sortSelect = document.getElementById("sortSelect");

    if (sortSelect) {
        sortSelect.addEventListener("change", filterSiteList);
    }
}

/* =========================================================
   RENDER ALL
   ========================================================= */

function renderAll() {
    renderCategories();
    renderHomeCategories();
    populateCategorySelect();

    renderFeatured();
    renderFun();
    renderGaming();
    renderFavorites();
    renderRecent();

    renderSites();
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function showSection(sectionId) {
    currentSection = sectionId;

    document.querySelectorAll("main > .page-section").forEach(section => {
        section.classList.remove("active");
    });

    const target = document.getElementById(sectionId);

    if (target) {
        target.classList.add("active");
    }

    document.querySelectorAll(".nav-btn").forEach(button => {
        button.classList.remove("active");
    });

    document
        .querySelectorAll(`.nav-btn[onclick*="'${sectionId}'"]`)
        .forEach(button => {
            button.classList.add("active");
        });

    const mobileNav = document.getElementById("mobileNav");

    if (mobileNav) {
        mobileNav.classList.remove("open");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (sectionId === "sites") {
        renderSites();
    }

    if (sectionId === "favorites") {
        renderFavorites();
    }

    if (sectionId === "recent") {
        renderRecent();
    }
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");

    if (mobileNav) {
        mobileNav.classList.toggle("open");
    }
}

/* =========================================================
   THEME
   ========================================================= */

function initializeTheme() {
    const theme = localStorage.getItem(STORAGE_KEYS.theme);

    if (theme === "light") {
        document.body.classList.add("light-mode");
        updateThemeButton(true);
    } else {
        document.body.classList.remove("light-mode");
        updateThemeButton(false);
    }
}

function toggleDarkMode() {
    const isLight = document.body.classList.toggle("light-mode");

    localStorage.setItem(
        STORAGE_KEYS.theme,
        isLight ? "light" : "dark"
    );

    updateThemeButton(isLight);
}

function updateThemeButton(isLight) {
    const button = document.getElementById("themeBtn");

    if (!button) return;

    button.innerHTML = isLight ? "🌙" : "☀️";
    button.title = isLight
        ? "تفعيل الوضع الداكن"
        : "تفعيل الوضع الفاتح";
}

/* =========================================================
   VIEW MODE
   ========================================================= */

function initializeView() {
    updateViewButtons();

    const container = document.getElementById("sitesContainer");

    if (container) {
        container.classList.toggle(
            "list-view",
            currentView === "list"
        );
    }
}

function setView(view) {
    currentView = view;

    localStorage.setItem(STORAGE_KEYS.view, view);

    updateViewButtons();

    const container = document.getElementById("sitesContainer");

    if (container) {
        container.classList.toggle(
            "list-view",
            view === "list"
        );
    }
}

function updateViewButtons() {
    const gridButton = document.getElementById("gridViewBtn");
    const listButton = document.getElementById("listViewBtn");

    if (gridButton) {
        gridButton.classList.toggle(
            "active",
            currentView === "grid"
        );
    }

    if (listButton) {
        listButton.classList.toggle(
            "active",
            currentView === "list"
        );
    }
}

/* =========================================================
   CATEGORIES
   ========================================================= */

function renderCategories() {
    const container = document.getElementById("categoriesContainer");

    if (!container) return;

    container.innerHTML = Object.entries(CATEGORY_INFO)
        .map(([key, category]) => {
            const count = siteData.filter(
                site => site.category === key
            ).length;

            return `
                <article
                    class="category-card"
                    onclick="filterByCategory('${key}')"
                >
                    <div class="category-icon">
                        ${category.icon}
                    </div>

                    <h3>${escapeHTML(category.name)}</h3>

                    <p>
                        ${escapeHTML(category.description)}
                    </p>

                    <span class="category-count">
                        ${count} موقع
                    </span>
                </article>
            `;
        })
        .join("");
}

function renderHomeCategories() {
    const container = document.getElementById("homeCategories");

    if (!container) return;

    container.innerHTML = Object.entries(CATEGORY_INFO)
        .map(([key, category]) => {
            const count = siteData.filter(
                site => site.category === key
            ).length;

            return `
                <button
                    class="category-card"
                    onclick="filterByCategory('${key}')"
                >
                    <div class="category-icon">
                        ${category.icon}
                    </div>

                    <h3>${escapeHTML(category.name)}</h3>

                    <span class="category-count">
                        ${count}
                    </span>
                </button>
            `;
        })
        .join("");
}

function populateCategorySelect() {
    const select = document.getElementById("categorySelect");

    if (!select) return;

    const currentValue = select.value;

    select.innerHTML = `
        <option value="all">كل التصنيفات</option>
        ${Object.entries(CATEGORY_INFO)
            .map(([key, category]) => {
                const count = siteData.filter(
                    site => site.category === key
                ).length;

                return `
                    <option value="${key}">
                        ${category.icon} ${category.name} (${count})
                    </option>
                `;
            })
            .join("")}
    `;

    select.value = currentValue || "all";
}

function filterByCategory(category) {
    showSection("sites");

    const select = document.getElementById("categorySelect");

    if (select) {
        select.value = category;
    }

    filterSiteList();
}

/* =========================================================
   MAIN SEARCH
   ========================================================= */

function handleMainSearch(event) {
    event.preventDefault();

    const input = document.getElementById("searchInput");

    if (!input) return;

    const query = input.value.trim();

    if (!query) {
        showSection("sites");
        return;
    }

    showSection("sites");

    const siteSearch = document.getElementById("siteSearch");

    if (siteSearch) {
        siteSearch.value = query;
    }

    const categorySelect = document.getElementById("categorySelect");

    if (categorySelect) {
        categorySelect.value = "all";
    }

    filterSiteList();
}

function quickSearch(query) {
    const input = document.getElementById("searchInput");

    if (input) {
        input.value = query;
    }

    handleMainSearch({
        preventDefault: () => {}
    });
}

/* =========================================================
   SITES RENDERING
   ========================================================= */

function renderSites(list = siteData) {
    const container = document.getElementById("sitesContainer");

    if (!container) return;

    container.classList.toggle(
        "list-view",
        currentView === "list"
    );

    if (!list.length) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔎</div>
                <h3>لم يتم العثور على مواقع</h3>
                <p>جرب كلمة بحث أخرى أو اختر تصنيفًا مختلفًا.</p>
            </div>
        `;

        updateResultText(0);
        return;
    }

    container.innerHTML = list
        .map(site => createSiteCard(site))
        .join("");

    updateResultText(list.length);
}

function createSiteCard(site) {
    const category = CATEGORY_INFO[site.category];
    const isFavorite = favorites.includes(site.id);
    const siteVisits = visits[site.id] || 0;

    return `
        <article class="site-card">

            <div
                class="site-cover"
                style="${getSiteCover(site)}"
            >
                <div class="site-cover-icon">
                    ${site.icon}
                </div>

                <button
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    onclick="toggleFavorite('${site.id}', event)"
                    title="إضافة للمفضلة"
                >
                    ${isFavorite ? "★" : "☆"}
                </button>
            </div>

            <div class="site-card-body">

                <span class="site-category">
                    ${category ? category.icon : "🌐"}
                    ${category ? escapeHTML(category.name) : ""}
                </span>

                <h3>${escapeHTML(site.name)}</h3>

                <p>
                    ${escapeHTML(site.description)}
                </p>

                <div class="site-card-footer">

                    <span class="visit-count">
                        👁️ ${formatNumber(siteVisits)}
                    </span>

                    <div class="site-actions">

                        <button
                            class="details-btn"
                            onclick="openSiteModal('${site.id}')"
                        >
                            التفاصيل
                        </button>

                        <button
                            class="open-btn"
                            onclick="openSite('${site.id}')"
                        >
                            فتح ↗
                        </button>

                    </div>

                </div>

            </div>
        </article>
    `;
}

/* =========================================================
   FEATURED
   ========================================================= */

function renderFeatured() {
    const container = document.getElementById("featuredContainer");

    if (!container) return;

    const featured = siteData.slice(0, 12);

    container.innerHTML = featured
        .map(site => createSiteCard(site))
        .join("");
}

/* =========================================================
   FUN
   ========================================================= */

function renderFun() {
    const container = document.getElementById("funContainer");

    if (!container) return;

    const funSites = siteData.filter(
        site => site.category === "fun"
    );

    container.innerHTML = funSites
        .map(site => createSiteCard(site))
        .join("");
}

/* =========================================================
   GAMING
   ========================================================= */

function renderGaming() {
    const container = document.getElementById("gamingContainer");

    if (!container) return;

    const gamingSites = siteData.filter(
        site => site.category === "games"
    );

    container.innerHTML = gamingSites
        .map(site => createSiteCard(site))
        .join("");
}

/* =========================================================
   FAVORITES
   ========================================================= */

function renderFavorites() {
    const container = document.getElementById("favoritesContainer");

    if (!container) return;

    const favoriteSites = siteData.filter(site =>
        favorites.includes(site.id)
    );

    if (!favoriteSites.length) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">☆</div>
                <h3>لا توجد مواقع مفضلة</h3>
                <p>
                    اضغط على النجمة بجانب أي موقع لإضافته هنا.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML = favoriteSites
        .map(site => createSiteCard(site))
        .join("");
}

/* =========================================================
   RECENT
   ========================================================= */

function renderRecent() {
    const container = document.getElementById("recentContainer");

    if (!container) return;

    const recent = recentSites
        .map(id => siteData.find(site => site.id === id))
        .filter(Boolean);

    if (!recent.length) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🕘</div>
                <h3>لا توجد مواقع حديثة</h3>
                <p>
                    المواقع التي تفتحها ستظهر هنا.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML = recent
        .map(site => createSiteCard(site))
        .join("");
}

/* =========================================================
   SEARCH / FILTER
   ========================================================= */

function filterSiteList() {
    const searchInput = document.getElementById("siteSearch");
    const categorySelect = document.getElementById("categorySelect");
    const sortSelect = document.getElementById("sortSelect");

    const query = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const category = categorySelect
        ? categorySelect.value
        : "all";

    const sort = sortSelect
        ? sortSelect.value
        : "default";

    let filtered = [...siteData];

    if (query) {
        filtered = filtered.filter(site => {
            const searchable = [
                site.name,
                site.description,
                site.category,
                CATEGORY_INFO[site.category]?.name || "",
                site.url
            ]
                .join(" ")
                .toLowerCase();

            return searchable.includes(query);
        });
    }

    if (category !== "all") {
        filtered = filtered.filter(
            site => site.category === category
        );
    }

    switch (sort) {
        case "name":
            filtered.sort((a, b) =>
                a.name.localeCompare(b.name, "ar")
            );
            break;

        case "visits":
            filtered.sort(
                (a, b) =>
                    (visits[b.id] || 0) -
                    (visits[a.id] || 0)
            );
            break;

        case "category":
            filtered.sort((a, b) =>
                CATEGORY_INFO[a.category].name.localeCompare(
                    CATEGORY_INFO[b.category].name,
                    "ar"
                )
            );
            break;

        default:
            break;
    }

    renderSites(filtered);
}

function clearFilters() {
    const searchInput = document.getElementById("siteSearch");
    const categorySelect = document.getElementById("categorySelect");
    const sortSelect = document.getElementById("sortSelect");

    if (searchInput) {
        searchInput.value = "";
    }

    if (categorySelect) {
        categorySelect.value = "all";
    }

    if (sortSelect) {
        sortSelect.value = "default";
    }

    renderSites();
}

/* =========================================================
   RESULT TEXT
   ========================================================= */

function updateResultText(count) {
    const resultText = document.getElementById("resultText");

    if (!resultText) return;

    resultText.textContent =
        `عرض ${formatNumber(count)} من ${formatNumber(siteData.length)} موقع`;
}

/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(siteId, event) {
    if (event) {
        event.stopPropagation();
    }

    const index = favorites.indexOf(siteId);

    if (index === -1) {
        favorites.push(siteId);
        showToast("⭐ تمت إضافة الموقع إلى المفضلة");
    } else {
        favorites.splice(index, 1);
        showToast("تمت إزالة الموقع من المفضلة");
    }

    saveStorage(
        STORAGE_KEYS.favorites,
        favorites
    );

    renderAll();
    updateStats();
}

/* =========================================================
   OPEN SITE
   ========================================================= */

function openSite(siteId) {
    const site = siteData.find(
        item => item.id === siteId
    );

    if (!site) return;

    visits[siteId] = (visits[siteId] || 0) + 1;

    saveStorage(
        STORAGE_KEYS.visits,
        visits
    );

    recentSites = [
        siteId,
        ...recentSites.filter(id => id !== siteId)
    ].slice(0, 12);

    saveStorage(
        STORAGE_KEYS.recent,
        recentSites
    );

    updateStats();
    renderRecent();

    window.open(
        site.url,
        "_blank",
        "noopener,noreferrer"
    );
}

/* =========================================================
   MODAL
   ========================================================= */

function openSiteModal(siteId) {
    const site = siteData.find(
        item => item.id === siteId
    );

    if (!site) return;

    currentSite = site;

    const modal = document.getElementById("siteModal");

    if (!modal) return;

    const modalIcon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalCategory = document.getElementById("modalCategory");
    const modalDescription = document.getElementById("modalDescription");
    const modalVisits = document.getElementById("modalVisits");
    const modalOpenBtn = document.getElementById("modalOpenBtn");
    const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");
    const modalFavorite = document.getElementById("modalFavorite");

    if (modalIcon) {
        modalIcon.textContent = site.icon;
    }

    if (modalTitle) {
        modalTitle.textContent = site.name;
    }

    if (modalCategory) {
        modalCategory.textContent =
            CATEGORY_INFO[site.category]?.name || "";
    }

    if (modalDescription) {
        modalDescription.textContent =
            site.description;
    }

    if (modalVisits) {
        modalVisits.textContent =
            `👁️ ${formatNumber(visits[site.id] || 0)} زيارة`;
    }

    if (modalOpenBtn) {
        modalOpenBtn.onclick = () => {
            openSite(site.id);
        };
    }

    const favorite = favorites.includes(site.id);

    if (modalFavorite) {
        modalFavorite.textContent =
            favorite ? "★" : "☆";
    }

    if (modalFavoriteBtn) {
        modalFavoriteBtn.onclick = event => {
            toggleFavorite(site.id, event);

            const nowFavorite =
                favorites.includes(site.id);

            if (modalFavorite) {
                modalFavorite.textContent =
                    nowFavorite ? "★" : "☆";
            }
        };
    }

    modal.classList.add("active");

    document.body.classList.add("modal-open");
}

function closeModal() {
    const modal = document.getElementById("siteModal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

    currentSite = null;
}

/* =========================================================
   STATS
   ========================================================= */

function updateStats() {
    const totalSites = document.getElementById("totalSites");
    const totalCategories =
        document.getElementById("totalCategories");
    const totalFavorites =
        document.getElementById("totalFavorites");
    const totalVisits =
        document.getElementById("totalVisits");

    if (totalSites) {
        totalSites.textContent =
            formatNumber(siteData.length);
    }

    if (totalCategories) {
        totalCategories.textContent =
            formatNumber(
                Object.keys(CATEGORY_INFO).length
            );
    }

    if (totalFavorites) {
        totalFavorites.textContent =
            formatNumber(favorites.length);
    }

    if (totalVisits) {
        const visitTotal = Object.values(visits)
            .reduce(
                (sum, value) =>
                    sum + Number(value || 0),
                0
            );

        totalVisits.textContent =
            formatNumber(visitTotal);
    }
}

/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;

function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

/* =========================================================
   RANDOM SITE
   ========================================================= */

function randomSite() {
    if (!siteData.length) return;

    const randomIndex =
        Math.floor(
            Math.random() * siteData.length
        );

    const site = siteData[randomIndex];

    openSiteModal(site.id);
}

/* =========================================================
   COVER GENERATOR
   ========================================================= */

function hashString(value) {
    let hash = 0;

    for (let i = 0; i < value.length; i++) {
        hash =
            (hash << 5) -
            hash +
            value.charCodeAt(i);

        hash |= 0;
    }

    return Math.abs(hash);
}

function getCoverTheme(site) {
    const themes = [
        ["#00f5ff", "#0066ff"],
        ["#8b5cf6", "#ec4899"],
        ["#00ff88", "#00aaff"],
        ["#ff0080", "#7928ca"],
        ["#ff8a00", "#e52e71"],
        ["#00c6ff", "#0072ff"],
        ["#7f00ff", "#e100ff"],
        ["#00f2fe", "#4facfe"],
        ["#43e97b", "#38f9d7"],
        ["#fa709a", "#fee140"],
        ["#a18cd1", "#fbc2eb"],
        ["#667eea", "#764ba2"]
    ];

    const hash = hashString(
        site.id +
        site.name +
        site.url
    );

    return themes[
        hash % themes.length
    ];
}

function getSiteCover(site) {
    const [color1, color2] =
        getCoverTheme(site);

    const hash =
        hashString(site.name + site.url);

    const angle =
        110 + (hash % 100);

    return `
        background:
            radial-gradient(
                circle at ${20 + hash % 60}%
                ${20 + (hash >> 4) % 60}%,
                rgba(255,255,255,.20),
                transparent 25%
            ),
            linear-gradient(
                ${angle}deg,
                ${color1},
                ${color2}
            );
    `;
}

/* =========================================================
   UTILS
   ========================================================= */

function formatNumber(number) {
    return Number(number || 0).toLocaleString("ar");
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* =========================================================
   MODAL BACKDROP
   ========================================================= */

document.addEventListener("click", event => {
    const modal = document.getElementById("siteModal");

    if (!modal) return;

    if (
        event.target === modal ||
        event.target.classList.contains("modal-backdrop")
    ) {
        closeModal();
    }
});

/* =========================================================
   EXPORTS FOR HTML ONCLICK
   ========================================================= */

window.showSection = showSection;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleDarkMode = toggleDarkMode;
window.handleMainSearch = handleMainSearch;
window.quickSearch = quickSearch;
window.filterByCategory = filterByCategory;
window.filterSiteList = filterSiteList;
window.clearFilters = clearFilters;
window.setView = setView;
window.toggleFavorite = toggleFavorite;
window.openSite = openSite;
window.openSiteModal = openSiteModal;
window.closeModal = closeModal;
window.randomSite = randomSite;

/* =========================================================
   FINAL INFO
   ========================================================= */

console.log(
    `%cWEBBOX 5.0`,
    "font-size:24px;font-weight:bold;"
);

console.log(
    `عدد المواقع: ${siteData.length}`
);

console.log(
    `عدد التصنيفات: ${Object.keys(CATEGORY_INFO).length}`
);
