/* =========================================================
   WEBBOX — SCRIPT.JS
   نسخة منظمة للمواقع والتصنيفات
   ========================================================= */

const CATEGORY_INFO = {
    games: {
        name: "الألعاب",
        icon: "🎮",
        description: "مواقع ومنصات الألعاب"
    },
    education: {
        name: "التعليم",
        icon: "📚",
        description: "التعلم والدراسة"
    },
    ai: {
        name: "الذكاء الاصطناعي",
        icon: "🤖",
        description: "أدوات الذكاء الاصطناعي"
    },
    design: {
        name: "التصميم",
        icon: "🎨",
        description: "التصميم والصور"
    },
    video: {
        name: "الفيديو",
        icon: "🎬",
        description: "مشاهدة وصناعة الفيديو"
    },
    music: {
        name: "الموسيقى",
        icon: "🎵",
        description: "الموسيقى والصوت"
    },
    programming: {
        name: "البرمجة",
        icon: "💻",
        description: "البرمجة وتطوير المواقع"
    },
    books: {
        name: "الكتب",
        icon: "📖",
        description: "الكتب والقراءة"
    },
    tools: {
        name: "الأدوات",
        icon: "🛠️",
        description: "أدوات مفيدة على الإنترنت"
    },
    fun: {
        name: "الترفيه",
        icon: "😂",
        description: "مواقع ترفيهية ومسلية"
    }
};


/* =========================================================
   المواقع
   ========================================================= */

const rawSites = [

    /* ==================== الألعاب ==================== */

    ["Roblox", "https://www.roblox.com", "games", "منصة ألعاب ضخمة لإنشاء ولعب الألعاب."],
    ["Minecraft", "https://www.minecraft.net", "games", "لعبة البناء والاستكشاف الشهيرة."],
    ["CrazyGames", "https://www.crazygames.com", "games", "آلاف الألعاب المجانية على المتصفح."],
    ["Poki", "https://poki.com", "games", "ألعاب مجانية مباشرة في المتصفح."],
    ["Kongregate", "https://www.kongregate.com", "games", "منصة ألعاب متصفح متنوعة."],
    ["itch.io", "https://itch.io", "games", "منصة للألعاب المستقلة."],
    ["Game Jolt", "https://gamejolt.com", "games", "مجتمع وألعاب مستقلة."],
    ["Armor Games", "https://armorgames.com", "games", "ألعاب متصفح متنوعة."],
    ["Miniclip", "https://www.miniclip.com", "games", "ألعاب متصفح وموبايل."],
    ["Newgrounds", "https://www.newgrounds.com", "games", "ألعاب ورسوم ومحتوى إبداعي."],
    ["Addicting Games", "https://www.addictinggames.com", "games", "ألعاب متصفح مجانية."],
    ["Y8", "https://www.y8.com", "games", "مجموعة كبيرة من ألعاب المتصفح."],
    ["Friv", "https://www.friv.com", "games", "ألعاب متصفح بسيطة ومتنوعة."],
    ["Coolmath Games", "https://www.coolmathgames.com", "games", "ألعاب ألغاز ومنطق."],
    ["Gameflare", "https://www.gameflare.com", "games", "ألعاب متصفح مجانية."],
    ["Silvergames", "https://www.silvergames.com", "games", "ألعاب أونلاين متنوعة."],
    ["Kizi", "https://kizi.com", "games", "ألعاب مجانية للمتصفح."],
    ["Lagged", "https://lagged.com", "games", "ألعاب قصيرة وسريعة."],
    ["CrazyGames FPS", "https://www.crazygames.com/t/fps", "games", "ألعاب تصويب على المتصفح."],
    ["Steam", "https://store.steampowered.com", "games", "متجر ومنصة ألعاب الكمبيوتر."],
    ["Epic Games", "https://store.epicgames.com", "games", "متجر ألعاب ومنصة رقمية."],
    ["GOG", "https://www.gog.com", "games", "متجر ألعاب للكمبيوتر."],
    ["Xbox", "https://www.xbox.com", "games", "منصة ألعاب Xbox."],
    ["PlayStation", "https://www.playstation.com", "games", "منصة PlayStation."],
    ["Nintendo", "https://www.nintendo.com", "games", "موقع Nintendo الرسمي."],
    ["EA", "https://www.ea.com", "games", "ألعاب Electronic Arts."],
    ["Ubisoft", "https://www.ubisoft.com", "games", "ألعاب Ubisoft."],
    ["Epic Games Fortnite", "https://www.fortnite.com", "games", "موقع Fortnite الرسمي."],
    ["League of Legends", "https://www.leagueoflegends.com", "games", "موقع League of Legends."],
    ["Valorant", "https://playvalorant.com", "games", "لعبة التصويب Valorant."],
    ["Counter-Strike", "https://www.counter-strike.net", "games", "موقع Counter-Strike."],
    ["Dota 2", "https://www.dota2.com", "games", "لعبة MOBA من Valve."],
    ["Apex Legends", "https://www.ea.com/games/apex-legends", "games", "لعبة Battle Royale."],
    ["Fall Guys", "https://www.fallguys.com", "games", "لعبة تنافسية مرحة."],
    ["Rocket League", "https://www.rocketleague.com", "games", "كرة قدم بالسيارات."],
    ["Among Us", "https://www.innersloth.com/games/among-us", "games", "لعبة اجتماعية شهيرة."],
    ["Brawlhalla", "https://www.brawlhalla.com", "games", "لعبة قتال مجانية."],
    ["Gartic Phone", "https://garticphone.com", "games", "لعبة رسم وتخمين جماعية."],
    ["Skribbl", "https://skribbl.io", "games", "لعبة رسم وتخمين."],
    ["Chess.com", "https://www.chess.com", "games", "لعب الشطرنج أونلاين."],
    ["Lichess", "https://lichess.org", "games", "شطرنج مجاني ومفتوح المصدر."],
    ["GeoGuessr", "https://www.geoguessr.com", "games", "لعبة تخمين المواقع الجغرافية."],
    ["Slither.io", "https://slither.io", "games", "لعبة الثعبان الجماعية."],
    ["Agar.io", "https://agar.io", "games", "لعبة البقاء والنمو."],
    ["Shell Shockers", "https://shellshock.io", "games", "لعبة تصويب في المتصفح."],
    ["Krunker", "https://krunker.io", "games", "لعبة FPS في المتصفح."],
    ["Diep.io", "https://diep.io", "games", "لعبة دبابات متعددة اللاعبين."],
    ["Zombs Royale", "https://zombsroyale.io", "games", "Battle Royale في المتصفح."],
    ["Surviv.io", "https://surviv.io", "games", "لعبة بقاء متعددة اللاعبين."],
    ["Tetr.io", "https://tetr.io", "games", "لعبة Tetris تنافسية."],
    ["ChessKid", "https://www.chesskid.com", "games", "شطرنج مناسب للتعلم واللعب."],


    /* ==================== التعليم ==================== */

    ["Khan Academy", "https://www.khanacademy.org", "education", "دروس مجانية في عدة مواد."],
    ["Coursera", "https://www.coursera.org", "education", "دورات تعليمية من جامعات ومؤسسات."],
    ["edX", "https://www.edx.org", "education", "دورات أكاديمية عبر الإنترنت."],
    ["MIT OpenCourseWare", "https://ocw.mit.edu", "education", "مواد ودروس من MIT."],
    ["Duolingo", "https://www.duolingo.com", "education", "تعلم اللغات بطريقة تفاعلية."],
    ["Quizlet", "https://quizlet.com", "education", "بطاقات تعليمية واختبارات."],
    ["Wolfram Alpha", "https://www.wolframalpha.com", "education", "محرك حساب ومعرفة."],
    ["Desmos", "https://www.desmos.com", "education", "حاسبات ورسوم بيانية رياضية."],
    ["GeoGebra", "https://www.geogebra.org", "education", "أدوات الرياضيات والهندسة."],
    ["Brilliant", "https://brilliant.org", "education", "تعلم الرياضيات والعلوم بطريقة تفاعلية."],
    ["BBC Learning", "https://www.bbc.co.uk/learning", "education", "مواد تعليمية متنوعة."],
    ["TED-Ed", "https://ed.ted.com", "education", "دروس تعليمية مرئية."],
    ["Google Scholar", "https://scholar.google.com", "education", "البحث عن الأبحاث العلمية."],
    ["Wikipedia", "https://www.wikipedia.org", "education", "موسوعة معرفية ضخمة."],
    ["OpenStax", "https://openstax.org", "education", "كتب تعليمية مجانية."],
    ["Project Gutenberg", "https://www.gutenberg.org", "education", "كتب إلكترونية مجانية."],
    ["CK-12", "https://www.ck12.org", "education", "مواد تعليمية للعلوم والرياضيات."],
    ["PhET", "https://phet.colorado.edu", "education", "محاكاة تفاعلية للعلوم."],
    ["Symbolab", "https://www.symbolab.com", "education", "حل مسائل رياضية خطوة بخطوة."],
    ["Mathway", "https://www.mathway.com", "education", "حل مسائل رياضية."],


    /* ==================== الذكاء الاصطناعي ==================== */

    ["ChatGPT", "https://chatgpt.com", "ai", "مساعد ذكاء اصطناعي."],
    ["Google Gemini", "https://gemini.google.com", "ai", "مساعد الذكاء الاصطناعي من Google."],
    ["Microsoft Copilot", "https://copilot.microsoft.com", "ai", "مساعد ذكاء اصطناعي من Microsoft."],
    ["Claude", "https://claude.ai", "ai", "مساعد ذكاء اصطناعي."],
    ["Perplexity", "https://www.perplexity.ai", "ai", "محرك بحث يعتمد على الذكاء الاصطناعي."],
    ["DeepSeek", "https://chat.deepseek.com", "ai", "مساعد ذكاء اصطناعي."],
    ["Hugging Face", "https://huggingface.co", "ai", "منصة نماذج وأدوات الذكاء الاصطناعي."],
    ["Character AI", "https://character.ai", "ai", "محادثات مع شخصيات ذكاء اصطناعي."],
    ["Leonardo AI", "https://leonardo.ai", "ai", "إنشاء الصور بالذكاء الاصطناعي."],
    ["Canva AI", "https://www.canva.com/ai-image-generator", "ai", "أدوات ذكاء اصطناعي للتصميم."],
    ["Remove.bg", "https://www.remove.bg", "ai", "إزالة خلفيات الصور."],
    ["ElevenLabs", "https://elevenlabs.io", "ai", "أدوات صوت بالذكاء الاصطناعي."],
    ["Suno", "https://suno.com", "ai", "إنشاء الموسيقى بالذكاء الاصطناعي."],
    ["Gamma", "https://gamma.app", "ai", "إنشاء عروض ومستندات بالذكاء الاصطناعي."],
    ["Photoroom", "https://www.photoroom.com", "ai", "تحرير الصور بالذكاء الاصطناعي."],
    ["Perchance AI", "https://perchance.org", "ai", "أدوات AI متنوعة."],
    ["Ideogram", "https://ideogram.ai", "ai", "إنشاء الصور بالذكاء الاصطناعي."],
    ["Krea", "https://www.krea.ai", "ai", "أدوات إنشاء وتصميم بالذكاء الاصطناعي."],
    ["Playground AI", "https://playground.com", "ai", "إنشاء وتحرير الصور."],
    ["Grammarly", "https://www.grammarly.com", "ai", "مساعدة في الكتابة."],


    /* ==================== التصميم ==================== */

    ["Canva", "https://www.canva.com", "design", "تصميم الصور والعروض والمنشورات."],
    ["Figma", "https://www.figma.com", "design", "تصميم واجهات ومشاريع UI."],
    ["Adobe", "https://www.adobe.com", "design", "مجموعة أدوات التصميم من Adobe."],
    ["Photopea", "https://www.photopea.com", "design", "محرر صور يعمل في المتصفح."],
    ["Pixlr", "https://pixlr.com", "design", "تحرير الصور أونلاين."],
    ["Unsplash", "https://unsplash.com", "design", "صور مجانية عالية الجودة."],
    ["Pexels", "https://www.pexels.com", "design", "صور وفيديوهات مجانية."],
    ["Pixabay", "https://pixabay.com", "design", "صور وفيديوهات مجانية."],
    ["Freepik", "https://www.freepik.com", "design", "موارد التصميم."],
    ["Flaticon", "https://www.flaticon.com", "design", "أيقونات ورسومات."],
    ["Coolors", "https://coolors.co", "design", "إنشاء مجموعات ألوان."],
    ["Google Fonts", "https://fonts.google.com", "design", "خطوط مجانية."],
    ["Font Awesome", "https://fontawesome.com", "design", "أيقونات للمواقع."],
    ["Dribbble", "https://dribbble.com", "design", "مجتمع المصممين."],
    ["Behance", "https://www.behance.net", "design", "عرض الأعمال الإبداعية."],


    /* ==================== الفيديو ==================== */

    ["YouTube", "https://www.youtube.com", "video", "منصة الفيديو الشهيرة."],
    ["YouTube Studio", "https://studio.youtube.com", "video", "إدارة قناة YouTube."],
    ["Twitch", "https://www.twitch.tv", "video", "البث المباشر."],
    ["Vimeo", "https://vimeo.com", "video", "منصة فيديو احترافية."],
    ["CapCut", "https://www.capcut.com", "video", "تحرير الفيديو."],
    ["VEED", "https://www.veed.io", "video", "محرر فيديو أونلاين."],
    ["Clipchamp", "https://clipchamp.com", "video", "تحرير الفيديو من Microsoft."],
    ["InVideo", "https://invideo.io", "video", "صناعة الفيديو."],
    ["Kapwing", "https://www.kapwing.com", "video", "تحرير الفيديو والصور."],
    ["Dailymotion", "https://www.dailymotion.com", "video", "منصة فيديو."],
    ["Internet Archive Video", "https://archive.org/details/movies", "video", "أرشيف فيديوهات."],
    ["Mixkit", "https://mixkit.co", "video", "فيديوهات ومؤثرات مجانية."],
    ["Motion Array", "https://motionarray.com", "video", "موارد لصناعة الفيديو."],
    ["Storyblocks", "https://www.storyblocks.com", "video", "مكتبة فيديو ووسائط."],
    ["LumaFusion", "https://luma-touch.com/lumafusion", "video", "تحرير الفيديو."],


    /* ==================== الموسيقى ==================== */

    ["Spotify", "https://open.spotify.com", "music", "الاستماع إلى الموسيقى."],
    ["SoundCloud", "https://soundcloud.com", "music", "موسيقى ومقاطع صوتية."],
    ["YouTube Music", "https://music.youtube.com", "music", "خدمة الموسيقى من YouTube."],
    ["Bandcamp", "https://bandcamp.com", "music", "منصة للموسيقى والفنانين."],
    ["Audiomack", "https://audiomack.com", "music", "الاستماع إلى الموسيقى."],
    ["Deezer", "https://www.deezer.com", "music", "خدمة بث الموسيقى."],
    ["Apple Music", "https://music.apple.com", "music", "خدمة الموسيقى من Apple."],
    ["Last.fm", "https://www.last.fm", "music", "اكتشاف وتتبع الموسيقى."],
    ["Musixmatch", "https://www.musixmatch.com", "music", "معلومات وكلمات الأغاني."],
    ["TuneIn", "https://tunein.com", "music", "راديو وموسيقى عبر الإنترنت."],
    ["Free Music Archive", "https://freemusicarchive.org", "music", "موسيقى مجانية."],
    ["Freesound", "https://freesound.org", "music", "مؤثرات وأصوات."],
    ["Audiotool", "https://www.audiotool.com", "music", "صناعة الموسيقى أونلاين."],
    ["Soundtrap", "https://www.soundtrap.com", "music", "استوديو موسيقى أونلاين."],
    ["BandLab", "https://www.bandlab.com", "music", "إنشاء وتسجيل الموسيقى."],


    /* ==================== البرمجة ==================== */

    ["GitHub", "https://github.com", "programming", "استضافة مشاريع البرمجة."],
    ["GitLab", "https://gitlab.com", "programming", "منصة DevOps واستضافة المشاريع."],
    ["CodePen", "https://codepen.io", "programming", "تجربة HTML وCSS وJavaScript."],
    ["JSFiddle", "https://jsfiddle.net", "programming", "تجربة JavaScript مباشرة."],
    ["Replit", "https://replit.com", "programming", "برمجة وتشغيل المشاريع أونلاين."],
    ["Stack Overflow", "https://stackoverflow.com", "programming", "أسئلة وأجوبة للمبرمجين."],
    ["MDN Web Docs", "https://developer.mozilla.org", "programming", "مرجع تطوير الويب."],
    ["W3Schools", "https://www.w3schools.com", "programming", "تعلم تطوير المواقع."],
    ["freeCodeCamp", "https://www.freecodecamp.org", "programming", "تعلم البرمجة مجانًا."],
    ["The Odin Project", "https://www.theodinproject.com", "programming", "تعلم تطوير الويب."],
    ["Frontend Mentor", "https://www.frontendmentor.io", "programming", "تمارين ومشاريع Frontend."],
    ["Dev.to", "https://dev.to", "programming", "مجتمع للمطورين."],
    ["npm", "https://www.npmjs.com", "programming", "مكتبات JavaScript."],
    ["PyPI", "https://pypi.org", "programming", "حزم Python."],
    ["Docker Hub", "https://hub.docker.com", "programming", "صور وحزم Docker."],
    ["Godot Engine", "https://godotengine.org", "programming", "محرك ألعاب مفتوح المصدر."],
    ["Unity", "https://unity.com", "programming", "محرك تطوير الألعاب."],
    ["Unreal Engine", "https://www.unrealengine.com", "programming", "محرك ألعاب ثلاثي الأبعاد."],
    ["Visual Studio Code", "https://code.visualstudio.com", "programming", "محرر أكواد."],
    ["Codewars", "https://www.codewars.com", "programming", "تحديات برمجية."],


    /* ==================== الكتب ==================== */

    ["Project Gutenberg", "https://www.gutenberg.org", "books", "آلاف الكتب الإلكترونية المجانية."],
    ["Internet Archive", "https://archive.org", "books", "أرشيف ضخم للكتب والوسائط."],
    ["Open Library", "https://openlibrary.org", "books", "مكتبة كتب رقمية."],
    ["Google Books", "https://books.google.com", "books", "البحث عن الكتب."],
    ["Goodreads", "https://www.goodreads.com", "books", "اكتشاف الكتب ومراجعاتها."],
    ["ManyBooks", "https://manybooks.net", "books", "كتب إلكترونية."],
    ["Standard Ebooks", "https://standardebooks.org", "books", "كتب كلاسيكية مجانية."],
    ["Wikisource", "https://wikisource.org", "books", "مكتبة نصوص مجانية."],
    ["LibriVox", "https://librivox.org", "books", "كتب صوتية مجانية."],
    ["WorldCat", "https://www.worldcat.org", "books", "البحث عن الكتب والمكتبات."],


    /* ==================== الأدوات ==================== */

    ["Google", "https://www.google.com", "tools", "محرك البحث Google."],
    ["Google Drive", "https://drive.google.com", "tools", "تخزين الملفات سحابيًا."],
    ["Google Translate", "https://translate.google.com", "tools", "ترجمة النصوص واللغات."],
    ["Google Maps", "https://maps.google.com", "tools", "الخرائط والمواقع."],
    ["TinyURL", "https://tinyurl.com", "tools", "اختصار الروابط."],
    ["Bitly", "https://bitly.com", "tools", "اختصار وإدارة الروابط."],
    ["QR Code Generator", "https://www.qr-code-generator.com", "tools", "إنشاء رموز QR."],
    ["CloudConvert", "https://cloudconvert.com", "tools", "تحويل الملفات."],
    ["ILovePDF", "https://www.ilovepdf.com", "tools", "أدوات PDF."],
    ["Smallpdf", "https://smallpdf.com", "tools", "ضغط وتحويل ملفات PDF."],
    ["WeTransfer", "https://wetransfer.com", "tools", "إرسال الملفات."],
    ["Speedtest", "https://www.speedtest.net", "tools", "اختبار سرعة الإنترنت."],
    ["Have I Been Pwned", "https://haveibeenpwned.com", "tools", "فحص تسريبات البريد الإلكتروني."],
    ["Internet Speed Test", "https://fast.com", "tools", "اختبار سرعة الإنترنت."],
    ["Time.is", "https://time.is", "tools", "معرفة الوقت."],
    ["Calculator", "https://www.calculator.net", "tools", "حاسبات متنوعة."],
    ["Excalidraw", "https://excalidraw.com", "tools", "الرسم وإنشاء المخططات."],
    ["Notion", "https://www.notion.so", "tools", "تنظيم الملاحظات والمشاريع."],
    ["Trello", "https://trello.com", "tools", "إدارة المشاريع والمهام."],
    ["Dropbox", "https://www.dropbox.com", "tools", "تخزين الملفات."],


    /* ==================== الترفيه ==================== */

    ["Reddit", "https://www.reddit.com", "fun", "مجتمع ضخم للنقاش والمحتوى."],
    ["9GAG", "https://9gag.com", "fun", "صور ومقاطع ترفيهية."],
    ["Imgur", "https://imgur.com", "fun", "صور ومحتوى ترفيهي."],
    ["GIPHY", "https://giphy.com", "fun", "صور GIF متحركة."],
    ["Tenor", "https://tenor.com", "fun", "صور GIF وملصقات."],
    ["Know Your Meme", "https://knowyourmeme.com", "fun", "قاعدة بيانات للميمز."],
    ["Bored Panda", "https://www.boredpanda.com", "fun", "محتوى ترفيهي وإبداعي."],
    ["The Useless Web", "https://theuselessweb.com", "fun", "مواقع عشوائية وغريبة."],
    ["Neal.fun", "https://neal.fun", "fun", "تجارب ومواقع تفاعلية."],
    ["Pointer Pointer", "https://pointerpointer.com", "fun", "موقع ترفيهي غريب."],
    ["Radio Garden", "https://radio.garden", "fun", "استكشاف محطات الراديو حول العالم."],
    ["A Soft Murmur", "https://asoftmurmur.com", "fun", "أصوات للاسترخاء والتركيز."],
    ["WindowSwap", "https://www.window-swap.com", "fun", "مشاهدة مناظر من نوافذ حول العالم."],
    ["EarthCam", "https://www.earthcam.com", "fun", "كاميرات مباشرة من أماكن مختلفة."],
    ["Flightradar24", "https://www.flightradar24.com", "fun", "تتبع الطائرات."],
    ["MarineTraffic", "https://www.marinetraffic.com", "fun", "تتبع السفن."],
    ["Google Earth", "https://earth.google.com", "fun", "استكشاف الأرض."],
    ["Zoomquilt", "https://zoomquilt.org", "fun", "تجربة بصرية لا نهائية."],
    ["StumbleUpon", "https://www.stumbleupon.com", "fun", "اكتشاف محتوى عشوائي."],
    ["FutureMe", "https://www.futureme.org", "fun", "إرسال رسالة إلى نفسك في المستقبل."]
];


/* =========================================================
   إنشاء البيانات النهائية
   ========================================================= */

const siteData = rawSites.map((site, index) => ({
    id: index + 1,
    name: site[0],
    url: site[1],
    category: site[2],
    description: site[3],
    visits: 0
}));


/* =========================================================
   التخزين
   ========================================================= */

let favorites = JSON.parse(
    localStorage.getItem("webboxFavorites") || "[]"
);

let visits = JSON.parse(
    localStorage.getItem("webboxVisits") || "{}"
);

let recentSites = JSON.parse(
    localStorage.getItem("webboxRecent") || "[]"
);

let currentView = "grid";
let currentModalSite = null;


/* =========================================================
   عند تحميل الصفحة
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    setupEvents();

    populateCategorySelect();

    renderAll();

    showSection("home");

});


/* =========================================================
   الأحداث
   ========================================================= */

function setupEvents() {

    const searchInput = document.getElementById("siteSearch");

    if (searchInput) {
        searchInput.addEventListener("input", filterSiteList);
    }


    const categorySelect = document.getElementById("categorySelect");

    if (categorySelect) {
        categorySelect.addEventListener("change", filterSiteList);
    }


    const sortSelect = document.getElementById("sortSelect");

    if (sortSelect) {
        sortSelect.addEventListener("change", filterSiteList);
    }


    const clearBtn = document.getElementById("clearFilters");

    if (clearBtn) {
        clearBtn.addEventListener("click", clearFilters);
    }


    const gridBtn = document.getElementById("gridViewBtn");

    if (gridBtn) {
        gridBtn.addEventListener("click", () => {
            setViewMode("grid");
        });
    }


    const listBtn = document.getElementById("listViewBtn");

    if (listBtn) {
        listBtn.addEventListener("click", () => {
            setViewMode("list");
        });
    }


    const modal = document.getElementById("siteModal");

    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeModal();
            }

        });

    }

}


/* =========================================================
   التنقل بين الصفحات
   ========================================================= */

function showSection(pageId) {

    const sections = document.querySelectorAll(
        "main > .page-section"
    );

    sections.forEach(section => {

        section.classList.remove("active");
        section.style.display = "none";

    });


    const target = document.getElementById(pageId);

    if (!target) {
        console.error("WebBox: القسم غير موجود:", pageId);
        return;
    }


    target.classList.add("active");
    target.style.display = "block";


    document.querySelectorAll(
        ".main-nav .nav-btn"
    ).forEach(button => {

        button.classList.remove("active");

    });


    const navButton = document.querySelector(
        `.main-nav .nav-btn[onclick*="${pageId}"]`
    );

    if (navButton) {
        navButton.classList.add("active");
    }


    if (pageId === "categories") {
        renderCategories();
    }

    if (pageId === "sites") {
        filterSiteList();
    }

    if (pageId === "fun") {
        renderFun();
    }

    if (pageId === "gaming") {
        renderGaming();
    }

    if (pageId === "favorites") {
        renderFavorites();
    }

    if (pageId === "recent") {
        renderRecent();
    }


    const mobileNav = document.getElementById("mobileNav");

    if (mobileNav) {
        mobileNav.classList.remove("open");
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* مهم حتى تعمل أزرار HTML التي تستعمل webboxNavigate */

window.webboxNavigate = function(pageId, button = null) {

    showSection(pageId);

    if (button) {

        document.querySelectorAll(
            ".main-nav .nav-btn"
        ).forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    }

};


/* =========================================================
   عرض كل شيء
   ========================================================= */

function renderAll() {

    renderStats();

    renderCategories();

    renderHomeCategories();

    renderFeatured();

    renderFun();

    renderGaming();

    renderFavorites();

    renderRecent();

    renderSites(siteData);

}


/* =========================================================
   الإحصائيات
   ========================================================= */

function renderStats() {

    const totalSites = document.getElementById("totalSites");

    const totalCategories =
        document.getElementById("totalCategories");

    const totalFavorites =
        document.getElementById("totalFavorites");

    const totalVisits =
        document.getElementById("totalVisits");


    if (totalSites) {
        totalSites.textContent = siteData.length;
    }


    if (totalCategories) {
        totalCategories.textContent =
            Object.keys(CATEGORY_INFO).length;
    }


    if (totalFavorites) {
        totalFavorites.textContent =
            favorites.length;
    }


    if (totalVisits) {

        const total = Object.values(visits)
            .reduce((sum, value) => sum + Number(value), 0);

        totalVisits.textContent = total;

    }

}


/* =========================================================
   التصنيفات
   ========================================================= */

function renderCategories() {

    const container =
        document.getElementById("categoriesContainer");

    if (!container) return;


    container.innerHTML = "";


    Object.entries(CATEGORY_INFO).forEach(
        ([key, category]) => {

            const count = siteData.filter(
                site => site.category === key
            ).length;


            const card = document.createElement("div");

            card.className = "category-card";

            card.innerHTML = `

                <div class="category-icon">
                    ${category.icon}
                </div>

                <h3>${category.name}</h3>

                <p>${category.description}</p>

                <span class="category-count">
                    ${count} موقع
                </span>

            `;


            card.addEventListener("click", () => {

                showSection("sites");

                const select =
                    document.getElementById("categorySelect");

                if (select) {
                    select.value = key;
                    filterSiteList();
                }

            });


            container.appendChild(card);

        }
    );

}


/* =========================================================
   تصنيفات الصفحة الرئيسية
   ========================================================= */

function renderHomeCategories() {

    const container =
        document.getElementById("homeCategories");

    if (!container) return;


    container.innerHTML = "";


    Object.entries(CATEGORY_INFO).forEach(
        ([key, category]) => {

            const count = siteData.filter(
                site => site.category === key
            ).length;


            const item = document.createElement("div");

            item.className = "category-card";

            item.innerHTML = `

                <div class="category-icon">
                    ${category.icon}
                </div>

                <h3>${category.name}</h3>

                <span class="category-count">
                    ${count}
                </span>

            `;


            item.onclick = () => {

                showSection("sites");

                const select =
                    document.getElementById("categorySelect");

                if (select) {

                    select.value = key;

                    filterSiteList();

                }

            };


            container.appendChild(item);

        }
    );

}


/* =========================================================
   قائمة التصنيفات داخل الفلتر
   ========================================================= */

function populateCategorySelect() {

    const select =
        document.getElementById("categorySelect");

    if (!select) return;


    select.innerHTML =
        `<option value="">كل التصنيفات</option>`;


    Object.entries(CATEGORY_INFO).forEach(
        ([key, category]) => {

            const option =
                document.createElement("option");

            option.value = key;

            option.textContent =
                `${category.icon} ${category.name}`;

            select.appendChild(option);

        }
    );

}


/* =========================================================
   إنشاء بطاقة الموقع
   ========================================================= */

function createSiteCard(site) {

    const category =
        CATEGORY_INFO[site.category] ||
        CATEGORY_INFO.tools;


    const isFavorite =
        favorites.includes(site.id);


    const visitCount =
        visits[site.id] || 0;


    const card =
        document.createElement("article");


    card.className = "site-card";


    card.innerHTML = `

        <div class="site-card-top">

            <div class="site-icon">
                ${category.icon}
            </div>

            <button
                class="favorite-btn ${isFavorite ? "active" : ""}"
                onclick="toggleFavorite(${site.id}, event)"
                title="المفضلة"
            >
                ${isFavorite ? "★" : "☆"}
            </button>

        </div>


        <div class="site-card-body">

            <span class="site-category">
                ${category.name}
            </span>

            <h3>${escapeHTML(site.name)}</h3>

            <p>
                ${escapeHTML(site.description)}
            </p>

        </div>


        <div class="site-card-footer">

            <span class="visit-count">
                👁️ ${visitCount}
            </span>

            <div class="site-actions">

                <button
                    class="details-btn"
                    onclick="openModal(${site.id})"
                >
                    التفاصيل
                </button>

                <button
                    class="open-btn"
                    onclick="openSite(${site.id})"
                >
                    فتح
                </button>

            </div>

        </div>

    `;


    return card;

}


/* =========================================================
   عرض المواقع
   ========================================================= */

function renderSites(sites) {

    const container =
        document.getElementById("sitesContainer");

    if (!container) return;


    container.innerHTML = "";


    if (!sites.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>🔎</div>

                <h3>لم يتم العثور على مواقع</h3>

                <p>
                    جرّب تغيير كلمة البحث أو التصنيف.
                </p>

            </div>

        `;

        return;

    }


    container.className =
        currentView === "list"
            ? "sites-grid list-view"
            : "sites-grid";


    sites.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });

}


/* =========================================================
   البحث والفلاتر
   ========================================================= */

function filterSiteList() {

    const search =
        (
            document.getElementById("siteSearch")?.value ||
            ""
        ).trim().toLowerCase();


    const category =
        document.getElementById("categorySelect")?.value ||
        "";


    const sort =
        document.getElementById("sortSelect")?.value ||
        "default";


    let results =
        siteData.filter(site => {

            const matchesSearch =
                !search ||
                site.name.toLowerCase().includes(search) ||
                site.description.toLowerCase().includes(search);


            const matchesCategory =
                !category ||
                site.category === category;


            return matchesSearch && matchesCategory;

        });


    if (sort === "name") {

        results.sort((a, b) =>
            a.name.localeCompare(
                b.name,
                "ar"
            )
        );

    }


    if (sort === "visits") {

        results.sort(
            (a, b) =>
                (visits[b.id] || 0) -
                (visits[a.id] || 0)
        );

    }


    renderSites(results);


    const resultText =
        document.getElementById("resultText");


    if (resultText) {

        resultText.textContent =
            `${results.length} موقع`;

    }

}


function clearFilters() {

    const search =
        document.getElementById("siteSearch");

    const category =
        document.getElementById("categorySelect");

    const sort =
        document.getElementById("sortSelect");


    if (search) search.value = "";

    if (category) category.value = "";

    if (sort) sort.value = "default";


    filterSiteList();

}


/* =========================================================
   البحث الرئيسي
   ========================================================= */

function handleMainSearch(event) {

    event.preventDefault();


    const input =
        document.getElementById("searchInput");


    if (!input) return;


    const query =
        input.value.trim().toLowerCase();


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


    filterSiteList();

}


function quickSearch(query) {

    showSection("sites");


    const search =
        document.getElementById("siteSearch");


    if (search) {

        search.value = query;

    }


    filterSiteList();

}


/* =========================================================
   المفضلة
   ========================================================= */

function toggleFavorite(id, event) {

    if (event) {
        event.stopPropagation();
    }


    const index =
        favorites.indexOf(id);


    if (index === -1) {

        favorites.push(id);

        showToast("تمت الإضافة إلى المفضلة ⭐");

    } else {

        favorites.splice(index, 1);

        showToast("تمت الإزالة من المفضلة");

    }


    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );


    renderStats();

    renderSites(
        getCurrentFilteredSites()
    );

    renderFavorites();

}


/* =========================================================
   الحصول على المواقع المفلترة حاليًا
   ========================================================= */

function getCurrentFilteredSites() {

    const search =
        (
            document.getElementById("siteSearch")?.value ||
            ""
        ).toLowerCase();


    const category =
        document.getElementById("categorySelect")?.value ||
        "";


    return siteData.filter(site => {

        const matchesSearch =
            !search ||
            site.name.toLowerCase().includes(search) ||
            site.description.toLowerCase().includes(search);


        const matchesCategory =
            !category ||
            site.category === category;


        return matchesSearch && matchesCategory;

    });

}


/* =========================================================
   المواقع المفضلة
   ========================================================= */

function renderFavorites() {

    const container =
        document.getElementById("favoritesContainer");

    if (!container) return;


    container.innerHTML = "";


    const sites =
        siteData.filter(
            site => favorites.includes(site.id)
        );


    if (!sites.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>⭐</div>

                <h3>لا توجد مواقع مفضلة</h3>

                <p>
                    اضغط على النجمة لإضافة موقع إلى المفضلة.
                </p>

            </div>

        `;

        return;

    }


    sites.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });

}


/* =========================================================
   المواقع الأخيرة
   ========================================================= */

function renderRecent() {

    const container =
        document.getElementById("recentContainer");

    if (!container) return;


    container.innerHTML = "";


    const sites =
        recentSites
            .map(id =>
                siteData.find(site => site.id === id)
            )
            .filter(Boolean);


    if (!sites.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>🕘</div>

                <h3>لا توجد مواقع حديثة</h3>

            </div>

        `;

        return;

    }


    sites.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });

}


/* =========================================================
   المواقع المميزة
   ========================================================= */

function renderFeatured() {

    const container =
        document.getElementById("featuredContainer");

    if (!container) return;


    container.innerHTML = "";


    const featured =
        siteData.slice(0, 8);


    featured.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });

}


/* =========================================================
   الألعاب
   ========================================================= */

function renderGaming() {

    const container =
        document.getElementById("gamingContainer");

    if (!container) return;


    container.innerHTML = "";


    const games =
        siteData.filter(
            site => site.category === "games"
        );


    games.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });

}


/* =========================================================
   الترفيه
   ========================================================= */

function renderFun() {

    const container =
        document.getElementById("funContainer");

    if (!container) return;


    container.innerHTML = "";


    const funSites =
        siteData.filter(
            site => site.category === "fun"
        );


    funSites.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });

}


/* =========================================================
   فتح الموقع
   ========================================================= */

function openSite(id) {

    const site =
        siteData.find(
            item => item.id === id
        );


    if (!site) return;


    visits[id] =
        (visits[id] || 0) + 1;


    localStorage.setItem(
        "webboxVisits",
        JSON.stringify(visits)
    );


    recentSites =
        recentSites.filter(
            recentId => recentId !== id
        );


    recentSites.unshift(id);


    recentSites =
        recentSites.slice(0, 20);


    localStorage.setItem(
        "webboxRecent",
        JSON.stringify(recentSites)
    );


    renderStats();


    window.open(
        site.url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   النافذة المنبثقة
   ========================================================= */

function openModal(id) {

    const site =
        siteData.find(
            item => item.id === id
        );


    if (!site) return;


    currentModalSite = site;


    const modal =
        document.getElementById("siteModal");


    if (!modal) return;


    const category =
        CATEGORY_INFO[site.category];


    const icon =
        document.getElementById("modalIcon");

    const title =
        document.getElementById("modalTitle");

    const categoryElement =
        document.getElementById("modalCategory");

    const description =
        document.getElementById("modalDescription");

    const modalVisits =
        document.getElementById("modalVisits");

    const openBtn =
        document.getElementById("modalOpenBtn");

    const favoriteBtn =
        document.getElementById("modalFavoriteBtn");

    const favorite =
        document.getElementById("modalFavorite");


    if (icon) {
        icon.textContent =
            category?.icon || "🌐";
    }


    if (title) {
        title.textContent =
            site.name;
    }


    if (categoryElement) {
        categoryElement.textContent =
            category?.name || "موقع";
    }


    if (description) {
        description.textContent =
            site.description;
    }


    if (modalVisits) {
        modalVisits.textContent =
            `👁️ ${visits[id] || 0}`;
    }


    if (openBtn) {

        openBtn.onclick = () => {
            openSite(id);
        };

    }


    if (favorite) {

        favorite.textContent =
            favorites.includes(id)
                ? "★"
                : "☆";

    }


    if (favoriteBtn) {

        favoriteBtn.onclick = () => {

            toggleFavorite(id);

            if (favorite) {

                favorite.textContent =
                    favorites.includes(id)
                        ? "★"
                        : "☆";

            }

        };

    }


    modal.classList.add("open");

    modal.style.display = "flex";

}


function closeModal() {

    const modal =
        document.getElementById("siteModal");


    if (!modal) return;


    modal.classList.remove("open");

    modal.style.display = "none";

}


/* =========================================================
   تغيير الوضع الليلي
   ========================================================= */

function toggleDarkMode() {

    document.body.classList.toggle(
        "light-mode"
    );


    const isLight =
        document.body.classList.contains(
            "light-mode"
        );


    localStorage.setItem(
        "webboxTheme",
        isLight ? "light" : "dark"
    );


    updateThemeButton();

}


function updateThemeButton() {

    const button =
        document.getElementById("themeBtn");

    if (!button) return;


    const isLight =
        document.body.classList.contains(
            "light-mode"
        );


    button.textContent =
        isLight ? "🌙" : "☀️";

}


/* =========================================================
   استرجاع الوضع
   ========================================================= */

function loadTheme() {

    const theme =
        localStorage.getItem(
            "webboxTheme"
        );


    if (theme === "light") {

        document.body.classList.add(
            "light-mode"
        );

    }


    updateThemeButton();

}


/* =========================================================
   تغيير شكل عرض المواقع
   ========================================================= */

function setViewMode(mode) {

    currentView = mode;


    const container =
        document.getElementById("sitesContainer");


    if (!container) return;


    if (mode === "list") {

        container.classList.add(
            "list-view"
        );

    } else {

        container.classList.remove(
            "list-view"
        );

    }


    const gridBtn =
        document.getElementById("gridViewBtn");

    const listBtn =
        document.getElementById("listViewBtn");


    if (gridBtn) {

        gridBtn.classList.toggle(
            "active",
            mode === "grid"
        );

    }


    if (listBtn) {

        listBtn.classList.toggle(
            "active",
            mode === "list"
        );

    }

}


/* =========================================================
   موقع عشوائي
   ========================================================= */

function randomSite() {

    if (!siteData.length) return;


    const randomIndex =
        Math.floor(
            Math.random() * siteData.length
        );


    openSite(
        siteData[randomIndex].id
    );

}


/* =========================================================
   إشعارات
   ========================================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add("show");


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
   زر القائمة في الهاتف
   ========================================================= */

function toggleMobileMenu() {

    const nav =
        document.getElementById("mobileNav");


    if (!nav) return;


    nav.classList.toggle("open");

}


/* =========================================================
   حماية النصوص
   ========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent =
        text;


    return div.innerHTML;

}


/* =========================================================
   عند تحميل الصفحة
   ========================================================= */

loadTheme();


/* =========================================================
   إغلاق Modal بزر ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


/* =========================================================
   تصدير الدوال التي يستعملها HTML
   ========================================================= */

window.showSection = showSection;
window.toggleDarkMode = toggleDarkMode;
window.handleMainSearch = handleMainSearch;
window.quickSearch = quickSearch;
window.toggleFavorite = toggleFavorite;
window.openSite = openSite;
window.openModal = openModal;
window.closeModal = closeModal;
window.randomSite = randomSite;
window.toggleMobileMenu = toggleMobileMenu;
window.setViewMode = setViewMode;
window.filterSiteList = filterSiteList;
window.clearFilters = clearFilters;
window.renderCategories = renderCategories;
window.renderFavorites = renderFavorites;
window.renderFun = renderFun;
window.renderGaming = renderGaming;
window.renderRecent = renderRecent;
