/* =========================================================
   WEBBOX - SCRIPT.JS
   200 WEBSITE
   ========================================================= */


/* =========================================================
   DATABASE
   ========================================================= */

const sites = [

/* ==================== GAMES 20 ==================== */

{
    name:"Minecraft",
    url:"https://www.minecraft.net/",
    category:"games",
    description:"الموقع الرسمي لـ Minecraft."
},
{
    name:"Eaglercraft",
    url:"https://eaglercraft.com/",
    category:"games",
    description:"Minecraft تعمل مباشرة من المتصفح."
},
{
    name:"Poki",
    url:"https://poki.com/",
    category:"games",
    description:"ألعاب مجانية تعمل من المتصفح."
},
{
    name:"CrazyGames",
    url:"https://www.crazygames.com/",
    category:"games",
    description:"مجموعة ضخمة من ألعاب المتصفح."
},
{
    name:"Scratch",
    url:"https://scratch.mit.edu/",
    category:"games",
    description:"اصنع ألعابك ومشاريعك التفاعلية."
},
{
    name:"GeoFS",
    url:"https://www.geo-fs.com/",
    category:"games",
    description:"محاكي طيران يعمل من المتصفح."
},
{
    name:"itch.io",
    url:"https://itch.io/",
    category:"games",
    description:"منصة ألعاب للمطورين المستقلين."
},
{
    name:"Chess.com",
    url:"https://www.chess.com/",
    category:"games",
    description:"لعب الشطرنج والتدريب."
},
{
    name:"Lichess",
    url:"https://lichess.org/",
    category:"games",
    description:"منصة شطرنج مجانية."
},
{
    name:"2048",
    url:"https://play2048.co/",
    category:"games",
    description:"لعبة الأرقام الشهيرة."
},
{
    name:"Sudoku",
    url:"https://sudoku.com/",
    category:"games",
    description:"العب Sudoku على الإنترنت."
},
{
    name:"Jigsaw Explorer",
    url:"https://www.jigsawexplorer.com/",
    category:"games",
    description:"ألغاز تركيب الصور."
},
{
    name:"Coolmath Games",
    url:"https://www.coolmathgames.com/",
    category:"games",
    description:"ألعاب متنوعة للمتصفح."
},
{
    name:"Miniclip",
    url:"https://www.miniclip.com/",
    category:"games",
    description:"منصة ألعاب إلكترونية."
},
{
    name:"Game Jolt",
    url:"https://gamejolt.com/",
    category:"games",
    description:"ألعاب ومجتمع للمطورين."
},
{
    name:"Pokémon Showdown",
    url:"https://pokemonshowdown.com/",
    category:"games",
    description:"معارك Pokémon عبر الإنترنت."
},
{
    name:"Armor Games",
    url:"https://armorgames.com/",
    category:"games",
    description:"ألعاب متصفح متنوعة."
},
{
    name:"Kongregate",
    url:"https://www.kongregate.com/",
    category:"games",
    description:"منصة ألعاب على الإنترنت."
},
{
    name:"Newgrounds",
    url:"https://www.newgrounds.com/",
    category:"games",
    description:"ألعاب ورسوم ومشاريع إبداعية."
},
{
    name:"Slither.io",
    url:"https://slither.io/",
    category:"games",
    description:"لعبة الثعابين متعددة اللاعبين."
},

/* ==================== FUN 20 ==================== */

{
    name:"Neal.fun",
    url:"https://neal.fun/",
    category:"fun",
    description:"تجارب تفاعلية ممتعة."
},
{
    name:"Quick Draw",
    url:"https://quickdraw.withgoogle.com/",
    category:"fun",
    description:"دع الذكاء الاصطناعي يخمن رسوماتك."
},
{
    name:"Google Earth",
    url:"https://earth.google.com/",
    category:"fun",
    description:"استكشف العالم."
},
{
    name:"Radio Garden",
    url:"https://radio.garden/",
    category:"fun",
    description:"استمع إلى محطات راديو حول العالم."
},
{
    name:"Stellarium",
    url:"https://stellarium-web.org/",
    category:"fun",
    description:"استكشف النجوم والسماء."
},
{
    name:"WindowSwap",
    url:"https://www.window-swap.com/",
    category:"fun",
    description:"شاهد من نوافذ أشخاص حول العالم."
},
{
    name:"Little Alchemy",
    url:"https://littlealchemy.com/",
    category:"fun",
    description:"ادمج العناصر واكتشف أشياء جديدة."
},
{
    name:"Pointer Pointer",
    url:"https://pointerpointer.com/",
    category:"fun",
    description:"تجربة طريفة تعتمد على مؤشر الماوس."
},
{
    name:"Zoomquilt",
    url:"https://zoomquilt.org/",
    category:"fun",
    description:"تجربة بصرية لا نهائية."
},
{
    name:"Patatap",
    url:"https://patatap.com/",
    category:"fun",
    description:"اصنع أصواتًا ورسومات تفاعلية."
},
{
    name:"Silk",
    url:"https://silk.kano.me/",
    category:"fun",
    description:"ارسم أعمالًا فنية تفاعلية."
},
{
    name:"The Useless Web",
    url:"https://theuselessweb.com/",
    category:"fun",
    description:"اكتشف مواقع عشوائية وغريبة."
},
{
    name:"A Soft Murmur",
    url:"https://asoftmurmur.com/",
    category:"fun",
    description:"امزج أصواتًا هادئة."
},
{
    name:"Rainy Mood",
    url:"https://www.rainymood.com/",
    category:"fun",
    description:"أجواء صوت المطر."
},
{
    name:"This Is Sand",
    url:"https://thisissand.com/",
    category:"fun",
    description:"تجربة الرسم بالرمل."
},
{
    name:"Bored Button",
    url:"https://www.boredbutton.com/",
    category:"fun",
    description:"اكتشف تجارب عشوائية."
},
{
    name:"FutureMe",
    url:"https://www.futureme.org/",
    category:"fun",
    description:"اكتب رسالة لنفسك في المستقبل."
},
{
    name:"MapCrunch",
    url:"https://www.mapcrunch.com/",
    category:"fun",
    description:"استكشف أماكن عشوائية."
},
{
    name:"GeoGuessr",
    url:"https://www.geoguessr.com/",
    category:"fun",
    description:"اختبر معرفتك بجغرافيا العالم."
},
{
    name:"The Wiki Game",
    url:"https://www.thewikigame.com/",
    category:"fun",
    description:"تحديات تعتمد على ويكيبيديا."
},

/* ==================== EDUCATION 20 ==================== */

{
    name:"Khan Academy",
    url:"https://www.khanacademy.org/",
    category:"education",
    description:"تعلم الرياضيات والعلوم والعديد من المواد."
},
{
    name:"Coursera",
    url:"https://www.coursera.org/",
    category:"education",
    description:"دورات تعليمية عبر الإنترنت."
},
{
    name:"edX",
    url:"https://www.edx.org/",
    category:"education",
    description:"دورات من جامعات ومؤسسات."
},
{
    name:"Duolingo",
    url:"https://www.duolingo.com/",
    category:"education",
    description:"تعلم اللغات بطريقة تفاعلية."
},
{
    name:"WolframAlpha",
    url:"https://www.wolframalpha.com/",
    category:"education",
    description:"محرك معرفة وحسابات علمية."
},
{
    name:"Wikipedia",
    url:"https://www.wikipedia.org/",
    category:"education",
    description:"موسوعة حرة متعددة اللغات."
},
{
    name:"MIT OpenCourseWare",
    url:"https://ocw.mit.edu/",
    category:"education",
    description:"مواد تعليمية من MIT."
},
{
    name:"OpenStax",
    url:"https://openstax.org/",
    category:"education",
    description:"كتب تعليمية مجانية."
},
{
    name:"Codecademy",
    url:"https://www.codecademy.com/",
    category:"education",
    description:"تعلم البرمجة بطريقة تفاعلية."
},
{
    name:"freeCodeCamp",
    url:"https://www.freecodecamp.org/",
    category:"education",
    description:"تعلم البرمجة وتطوير الويب."
},
{
    name:"TED-Ed",
    url:"https://ed.ted.com/",
    category:"education",
    description:"دروس تعليمية قصيرة."
},
{
    name:"Brilliant",
    url:"https://brilliant.org/",
    category:"education",
    description:"تعلم الرياضيات والعلوم."
},
{
    name:"Quizlet",
    url:"https://quizlet.com/",
    category:"education",
    description:"بطاقات للمراجعة والتعلم."
},
{
    name:"Desmos",
    url:"https://www.desmos.com/",
    category:"education",
    description:"آلات حاسبة ورسوم بيانية."
},
{
    name:"CK-12",
    url:"https://www.ck12.org/",
    category:"education",
    description:"موارد تعليمية مجانية."
},
{
    name:"PhET",
    url:"https://phet.colorado.edu/",
    category:"education",
    description:"محاكاة تفاعلية للعلوم."
},
{
    name:"BBC Bitesize",
    url:"https://www.bbc.co.uk/bitesize",
    category:"education",
    description:"موارد تعليمية ومراجعة."
},
{
    name:"FutureLearn",
    url:"https://www.futurelearn.com/",
    category:"education",
    description:"دورات تعليمية."
},
{
    name:"Alison",
    url:"https://alison.com/",
    category:"education",
    description:"دورات ومهارات تعليمية."
},
{
    name:"OpenLearn",
    url:"https://www.open.edu/openlearn/",
    category:"education",
    description:"مواد تعليمية مجانية."
},

/* ==================== BOOKS 20 ==================== */

{
    name:"Project Gutenberg",
    url:"https://www.gutenberg.org/",
    category:"books",
    description:"مكتبة ضخمة من الكتب المجانية."
},
{
    name:"Internet Archive",
    url:"https://archive.org/",
    category:"books",
    description:"أرشيف رقمي ضخم."
},
{
    name:"Open Library",
    url:"https://openlibrary.org/",
    category:"books",
    description:"مكتبة إلكترونية مفتوحة."
},
{
    name:"Google Books",
    url:"https://books.google.com/",
    category:"books",
    description:"البحث في ملايين الكتب."
},
{
    name:"ManyBooks",
    url:"https://manybooks.net/",
    category:"books",
    description:"مكتبة للكتب الإلكترونية."
},
{
    name:"Standard Ebooks",
    url:"https://standardebooks.org/",
    category:"books",
    description:"كتب كلاسيكية مجانية."
},
{
    name:"LibriVox",
    url:"https://librivox.org/",
    category:"books",
    description:"كتب صوتية."
},
{
    name:"Wikisource",
    url:"https://wikisource.org/",
    category:"books",
    description:"مكتبة نصوص حرة."
},
{
    name:"HathiTrust",
    url:"https://www.hathitrust.org/",
    category:"books",
    description:"مكتبة رقمية أكاديمية."
},
{
    name:"WorldCat",
    url:"https://www.worldcat.org/",
    category:"books",
    description:"البحث عن الكتب في المكتبات."
},
{
    name:"OpenStax Books",
    url:"https://openstax.org/subjects",
    category:"books",
    description:"كتب تعليمية مفتوحة."
},
{
    name:"BookBub",
    url:"https://www.bookbub.com/",
    category:"books",
    description:"اكتشف الكتب الجديدة."
},
{
    name:"Goodreads",
    url:"https://www.goodreads.com/",
    category:"books",
    description:"اكتشف الكتب والقراءات."
},
{
    name:"LibraryThing",
    url:"https://www.librarything.com/",
    category:"books",
    description:"نظم مكتبتك."
},
{
    name:"Online Books Page",
    url:"https://onlinebooks.library.upenn.edu/",
    category:"books",
    description:"فهرس للكتب الإلكترونية."
},
{
    name:"Bartleby",
    url:"https://www.bartleby.com/",
    category:"books",
    description:"كتب ومراجع."
},
{
    name:"Poetry Foundation",
    url:"https://www.poetryfoundation.org/",
    category:"books",
    description:"مجموعة كبيرة من الشعر."
},
{
    name:"Poets.org",
    url:"https://poets.org/",
    category:"books",
    description:"مورد للشعراء والقصائد."
},
{
    name:"Classic Reader",
    url:"https://www.classicreader.com/",
    category:"books",
    description:"كتب وقصص كلاسيكية."
},
{
    name:"ISFDB",
    url:"https://www.isfdb.org/",
    category:"books",
    description:"قاعدة بيانات للخيال العلمي والفانتازيا."
},

/* ==================== AI 20 ==================== */

{
    name:"ChatGPT",
    url:"https://chatgpt.com/",
    category:"ai",
    description:"مساعد ذكاء اصطناعي."
},
{
    name:"Google Gemini",
    url:"https://gemini.google.com/",
    category:"ai",
    description:"مساعد الذكاء الاصطناعي من Google."
},
{
    name:"Microsoft Copilot",
    url:"https://copilot.microsoft.com/",
    category:"ai",
    description:"مساعد الذكاء الاصطناعي من Microsoft."
},
{
    name:"Claude",
    url:"https://claude.ai/",
    category:"ai",
    description:"مساعد ذكاء اصطناعي."
},
{
    name:"Perplexity",
    url:"https://www.perplexity.ai/",
    category:"ai",
    description:"محرك بحث مدعوم بالذكاء الاصطناعي."
},
{
    name:"Poe",
    url:"https://poe.com/",
    category:"ai",
    description:"منصة لنماذج الذكاء الاصطناعي."
},
{
    name:"Hugging Face",
    url:"https://huggingface.co/",
    category:"ai",
    description:"منصة لنماذج الذكاء الاصطناعي."
},
{
    name:"Google AI Studio",
    url:"https://aistudio.google.com/",
    category:"ai",
    description:"أدوات تجربة نماذج Google."
},
{
    name:"NotebookLM",
    url:"https://notebooklm.google.com/",
    category:"ai",
    description:"مساعد للبحث في المصادر."
},
{
    name:"Phind",
    url:"https://www.phind.com/",
    category:"ai",
    description:"مساعد ذكاء اصطناعي للمطورين."
},
{
    name:"You.com",
    url:"https://you.com/",
    category:"ai",
    description:"بحث ومساعد ذكاء اصطناعي."
},
{
    name:"Character.AI",
    url:"https://character.ai/",
    category:"ai",
    description:"تفاعل مع شخصيات ذكاء اصطناعي."
},
{
    name:"Grammarly",
    url:"https://www.grammarly.com/",
    category:"ai",
    description:"مساعدة في الكتابة."
},
{
    name:"QuillBot",
    url:"https://quillbot.com/",
    category:"ai",
    description:"أدوات للكتابة وإعادة الصياغة."
},
{
    name:"DeepL Write",
    url:"https://www.deepl.com/write",
    category:"ai",
    description:"تحسين الكتابة."
},
{
    name:"Gamma",
    url:"https://gamma.app/",
    category:"ai",
    description:"إنشاء عروض ومحتوى."
},
{
    name:"Canva AI",
    url:"https://www.canva.com/ai-image-generator/",
    category:"ai",
    description:"أدوات ذكاء اصطناعي للتصميم."
},
{
    name:"Adobe Firefly",
    url:"https://firefly.adobe.com/",
    category:"ai",
    description:"أدوات إبداعية بالذكاء الاصطناعي."
},
{
    name:"Leonardo AI",
    url:"https://leonardo.ai/",
    category:"ai",
    description:"إنشاء محتوى بصري بالذكاء الاصطناعي."
},
{
    name:"Ideogram",
    url:"https://ideogram.ai/",
    category:"ai",
    description:"إنشاء صور بالذكاء الاصطناعي."
},

/* ==================== DESIGN 20 ==================== */

{
    name:"Canva",
    url:"https://www.canva.com/",
    category:"design",
    description:"تصميم الصور والعروض."
},
{
    name:"Figma",
    url:"https://www.figma.com/",
    category:"design",
    description:"تصميم واجهات المستخدم."
},
{
    name:"Photopea",
    url:"https://www.photopea.com/",
    category:"design",
    description:"محرر صور متقدم."
},
{
    name:"Pixlr",
    url:"https://pixlr.com/",
    category:"design",
    description:"تحرير الصور."
},
{
    name:"Adobe Express",
    url:"https://www.adobe.com/express/",
    category:"design",
    description:"أدوات تصميم سهلة."
},
{
    name:"Adobe Color",
    url:"https://color.adobe.com/",
    category:"design",
    description:"إنشاء لوحات ألوان."
},
{
    name:"Coolors",
    url:"https://coolors.co/",
    category:"design",
    description:"إنشاء لوحات ألوان."
},
{
    name:"Unsplash",
    url:"https://unsplash.com/",
    category:"design",
    description:"صور عالية الجودة."
},
{
    name:"Pexels",
    url:"https://www.pexels.com/",
    category:"design",
    description:"صور وفيديوهات مجانية."
},
{
    name:"Freepik",
    url:"https://www.freepik.com/",
    category:"design",
    description:"موارد ورسومات للتصميم."
},
{
    name:"Flaticon",
    url:"https://www.flaticon.com/",
    category:"design",
    description:"مكتبة أيقونات."
},
{
    name:"Icons8",
    url:"https://icons8.com/",
    category:"design",
    description:"أيقونات وموارد تصميم."
},
{
    name:"Font Awesome",
    url:"https://fontawesome.com/",
    category:"design",
    description:"مكتبة أيقونات."
},
{
    name:"Google Fonts",
    url:"https://fonts.google.com/",
    category:"design",
    description:"خطوط مجانية."
},
{
    name:"DaFont",
    url:"https://www.dafont.com/",
    category:"design",
    description:"مكتبة خطوط."
},
{
    name:"Font Squirrel",
    url:"https://www.fontsquirrel.com/",
    category:"design",
    description:"خطوط مجانية."
},
{
    name:"Remove.bg",
    url:"https://www.remove.bg/",
    category:"design",
    description:"إزالة خلفية الصور."
},
{
    name:"TinyPNG",
    url:"https://tinypng.com/",
    category:"design",
    description:"ضغط الصور."
},
{
    name:"Squoosh",
    url:"https://squoosh.app/",
    category:"design",
    description:"تحسين وضغط الصور."
},
{
    name:"Excalidraw",
    url:"https://excalidraw.com/",
    category:"design",
    description:"رسم المخططات والأفكار."
},

/* ==================== VIDEO 20 ==================== */

{
    name:"YouTube",
    url:"https://www.youtube.com/",
    category:"video",
    description:"منصة الفيديو الشهيرة."
},
{
    name:"CapCut",
    url:"https://www.capcut.com/",
    category:"video",
    description:"تحرير الفيديو."
},
{
    name:"VEED",
    url:"https://www.veed.io/",
    category:"video",
    description:"محرر فيديو عبر الإنترنت."
},
{
    name:"Clipchamp",
    url:"https://clipchamp.com/",
    category:"video",
    description:"إنشاء وتحرير الفيديو."
},
{
    name:"Canva Video",
    url:"https://www.canva.com/create/videos/",
    category:"video",
    description:"إنشاء فيديوهات."
},
{
    name:"Adobe Express Video",
    url:"https://www.adobe.com/express/create/video",
    category:"video",
    description:"إنشاء فيديوهات."
},
{
    name:"Kapwing",
    url:"https://www.kapwing.com/",
    category:"video",
    description:"تحرير الفيديو."
},
{
    name:"InVideo",
    url:"https://invideo.io/",
    category:"video",
    description:"إنشاء الفيديو."
},
{
    name:"FlexClip",
    url:"https://www.flexclip.com/",
    category:"video",
    description:"محرر فيديو."
},
{
    name:"Descript",
    url:"https://www.descript.com/",
    category:"video",
    description:"تحرير الفيديو والصوت."
},
{
    name:"DaVinci Resolve",
    url:"https://www.blackmagicdesign.com/products/davinciresolve",
    category:"video",
    description:"تحرير فيديو احترافي."
},
{
    name:"OBS Studio",
    url:"https://obsproject.com/",
    category:"video",
    description:"تسجيل الشاشة والبث."
},
{
    name:"HandBrake",
    url:"https://handbrake.fr/",
    category:"video",
    description:"تحويل وضغط الفيديو."
},
{
    name:"VLC",
    url:"https://www.videolan.org/vlc/",
    category:"video",
    description:"مشغل وسائط."
},
{
    name:"Pexels Videos",
    url:"https://www.pexels.com/videos/",
    category:"video",
    description:"فيديوهات مجانية."
},
{
    name:"Pixabay Videos",
    url:"https://pixabay.com/videos/",
    category:"video",
    description:"مقاطع فيديو مجانية."
},
{
    name:"Mixkit",
    url:"https://mixkit.co/",
    category:"video",
    description:"فيديوهات ومؤثرات."
},
{
    name:"Coverr",
    url:"https://coverr.co/",
    category:"video",
    description:"فيديوهات مجانية."
},
{
    name:"Videvo",
    url:"https://www.videvo.net/",
    category:"video",
    description:"فيديوهات وموارد مرئية."
},
{
    name:"Loom",
    url:"https://www.loom.com/",
    category:"video",
    description:"تسجيل الشاشة ومشاركة الفيديو."
},

/* ==================== MUSIC 20 ==================== */

{
    name:"Spotify",
    url:"https://open.spotify.com/",
    category:"music",
    description:"استمع إلى الموسيقى والبودكاست."
},
{
    name:"SoundCloud",
    url:"https://soundcloud.com/",
    category:"music",
    description:"اكتشف الموسيقى."
},
{
    name:"YouTube Music",
    url:"https://music.youtube.com/",
    category:"music",
    description:"خدمة الموسيقى من YouTube."
},
{
    name:"Bandcamp",
    url:"https://bandcamp.com/",
    category:"music",
    description:"اكتشف الفنانين المستقلين."
},
{
    name:"Audiomack",
    url:"https://audiomack.com/",
    category:"music",
    description:"الاستماع واكتشاف الموسيقى."
},
{
    name:"Deezer",
    url:"https://www.deezer.com/",
    category:"music",
    description:"خدمة بث موسيقى."
},
{
    name:"TIDAL",
    url:"https://tidal.com/",
    category:"music",
    description:"منصة موسيقى."
},
{
    name:"Mixcloud",
    url:"https://www.mixcloud.com/",
    category:"music",
    description:"برامج ومزج موسيقي."
},
{
    name:"Last.fm",
    url:"https://www.last.fm/",
    category:"music",
    description:"تتبع اكتشافاتك الموسيقية."
},
{
    name:"Musixmatch",
    url:"https://www.musixmatch.com/",
    category:"music",
    description:"معلومات عن الأغاني."
},
{
    name:"Genius",
    url:"https://genius.com/",
    category:"music",
    description:"معلومات وتحليلات موسيقية."
},
{
    name:"WhoSampled",
    url:"https://www.whosampled.com/",
    category:"music",
    description:"اكتشف العينات الموسيقية."
},
{
    name:"Internet Archive Audio",
    url:"https://archive.org/details/audio",
    category:"music",
    description:"أرشيف صوتي."
},
{
    name:"Free Music Archive",
    url:"https://freemusicarchive.org/",
    category:"music",
    description:"موسيقى مجانية."
},
{
    name:"Jamendo",
    url:"https://www.jamendo.com/",
    category:"music",
    description:"موسيقى مستقلة."
},
{
    name:"Pixabay Music",
    url:"https://pixabay.com/music/",
    category:"music",
    description:"موسيقى ومؤثرات مجانية."
},
{
    name:"Epidemic Sound",
    url:"https://www.epidemicsound.com/",
    category:"music",
    description:"مكتبة موسيقى."
},
{
    name:"HookSounds",
    url:"https://www.hooksounds.com/",
    category:"music",
    description:"موسيقى ومؤثرات."
},
{
    name:"Soundtrap",
    url:"https://www.soundtrap.com/",
    category:"music",
    description:"إنشاء الموسيقى."
},
{
    name:"Audiotool",
    url:"https://www.audiotool.com/",
    category:"music",
    description:"استوديو موسيقى من المتصفح."
},

/* ==================== PROGRAMMING 20 ==================== */

{
    name:"GitHub",
    url:"https://github.com/",
    category:"programming",
    description:"استضافة المشاريع البرمجية."
},
{
    name:"GitLab",
    url:"https://gitlab.com/",
    category:"programming",
    description:"منصة DevOps."
},
{
    name:"Bitbucket",
    url:"https://bitbucket.org/",
    category:"programming",
    description:"استضافة مستودعات Git."
},
{
    name:"CodePen",
    url:"https://codepen.io/",
    category:"programming",
    description:"جرب HTML وCSS وJavaScript."
},
{
    name:"JSFiddle",
    url:"https://jsfiddle.net/",
    category:"programming",
    description:"تجربة JavaScript والويب."
},
{
    name:"W3Schools",
    url:"https://www.w3schools.com/",
    category:"programming",
    description:"دروس وأمثلة برمجية."
},
{
    name:"MDN Web Docs",
    url:"https://developer.mozilla.org/",
    category:"programming",
    description:"توثيق تقنيات الويب."
},
{
    name:"Replit",
    url:"https://replit.com/",
    category:"programming",
    description:"برمجة وتشغيل المشاريع."
},
{
    name:"Stack Overflow",
    url:"https://stackoverflow.com/",
    category:"programming",
    description:"أسئلة وأجوبة للمبرمجين."
},
{
    name:"npm",
    url:"https://www.npmjs.com/",
    category:"programming",
    description:"سجل حزم JavaScript."
},
{
    name:"PyPI",
    url:"https://pypi.org/",
    category:"programming",
    description:"مستودع حزم Python."
},
{
    name:"Docker Hub",
    url:"https://hub.docker.com/",
    category:"programming",
    description:"مستودع صور Docker."
},
{
    name:"Vercel",
    url:"https://vercel.com/",
    category:"programming",
    description:"نشر تطبيقات الويب."
},
{
    name:"Netlify",
    url:"https://www.netlify.com/",
    category:"programming",
    description:"استضافة مواقع الويب."
},
{
    name:"Glitch",
    url:"https://glitch.com/",
    category:"programming",
    description:"إنشاء مشاريع الويب."
},
{
    name:"CodeSandbox",
    url:"https://codesandbox.io/",
    category:"programming",
    description:"بيئة تطوير للمشاريع."
},
{
    name:"JS Bin",
    url:"https://jsbin.com/",
    category:"programming",
    description:"تجربة HTML وCSS وJavaScript."
},
{
    name:"DevDocs",
    url:"https://devdocs.io/",
    category:"programming",
    description:"توثيق برمجي."
},
{
    name:"Exercism",
    url:"https://exercism.org/",
    category:"programming",
    description:"تمارين لتعلم البرمجة."
},
{
    name:"HackerRank",
    url:"https://www.hackerrank.com/",
    category:"programming",
    description:"تحديات برمجية."
},

/* ==================== TOOLS 20 ==================== */

{
    name:"Google Translate",
    url:"https://translate.google.com/",
    category:"tools",
    description:"ترجمة النصوص."
},
{
    name:"TinyWow",
    url:"https://tinywow.com/",
    category:"tools",
    description:"أدوات مجانية للملفات."
},
{
    name:"iLovePDF",
    url:"https://www.ilovepdf.com/",
    category:"tools",
    description:"أدوات PDF."
},
{
    name:"QR Code Generator",
    url:"https://www.qr-code-generator.com/",
    category:"tools",
    description:"إنشاء رموز QR."
},
{
    name:"Speedtest",
    url:"https://www.speedtest.net/",
    category:"tools",
    description:"اختبار سرعة الإنترنت."
},
{
    name:"Google Drive",
    url:"https://drive.google.com/",
    category:"tools",
    description:"تخزين الملفات."
},
{
    name:"Google Docs",
    url:"https://docs.google.com/",
    category:"tools",
    description:"إنشاء المستندات."
},
{
    name:"Google Sheets",
    url:"https://sheets.google.com/",
    category:"tools",
    description:"جداول البيانات."
},
{
    name:"Google Forms",
    url:"https://forms.google.com/",
    category:"tools",
    description:"إنشاء النماذج."
},
{
    name:"Google Keep",
    url:"https://keep.google.com/",
    category:"tools",
    description:"ملاحظات وقوائم."
},
{
    name:"Trello",
    url:"https://trello.com/",
    category:"tools",
    description:"تنظيم المهام."
},
{
    name:"Notion",
    url:"https://www.notion.so/",
    category:"tools",
    description:"تنظيم الملاحظات والمشاريع."
},
{
    name:"Dropbox",
    url:"https://www.dropbox.com/",
    category:"tools",
    description:"تخزين ومشاركة الملفات."
},
{
    name:"WeTransfer",
    url:"https://wetransfer.com/",
    category:"tools",
    description:"إرسال الملفات."
},
{
    name:"Wayback Machine",
    url:"https://web.archive.org/",
    category:"tools",
    description:"مشاهدة نسخ قديمة من المواقع."
},
{
    name:"VirusTotal",
    url:"https://www.virustotal.com/",
    category:"tools",
    description:"فحص الملفات والروابط."
},
{
    name:"Have I Been Pwned",
    url:"https://haveibeenpwned.com/",
    category:"tools",
    description:"فحص البريد ضمن التسريبات المعروفة."
},
{
    name:"URLVoid",
    url:"https://www.urlvoid.com/",
    category:"tools",
    description:"فحص سمعة المواقع."
},
{
    name:"Can I Use",
    url:"https://caniuse.com/",
    category:"tools",
    description:"معرفة دعم تقنيات الويب."
},
{
    name:"Smallpdf",
    url:"https://smallpdf.com/",
    category:"tools",
    description:"أدوات PDF."
}

];


/* =========================================================
   CATEGORIES
   ========================================================= */

const categoryNames = {
    games:"الألعاب",
    fun:"مسلية",
    education:"التعليم",
    books:"الكتب",
    ai:"الذكاء الاصطناعي",
    design:"التصميم",
    video:"الفيديو",
    music:"الموسيقى",
    programming:"البرمجة",
    tools:"الأدوات"
};

const categoryIcons = {
    games:"🎮",
    fun:"🎉",
    education:"📚",
    books:"📖",
    ai:"🤖",
    design:"🎨",
    video:"🎬",
    music:"🎵",
    programming:"💻",
    tools:"🛠️"
};


/* =========================================================
   FAVORITES
   ========================================================= */

let favorites = [];

try {
    favorites =
        JSON.parse(
            localStorage.getItem("webboxFavorites") || "[]"
        );
} catch {
    favorites = [];
}


/* =========================================================
   THEME
   ========================================================= */

function installThemeCSS() {

    if (document.getElementById("webbox-theme-css")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "webbox-theme-css";

    style.textContent = `

    body.light-mode {
        background:
            linear-gradient(
                135deg,
                #eef4ff 0%,
                #f8faff 45%,
                #eeeaff 100%
            ) !important;

        color:#172033 !important;
    }

    body.light-mode .glass,
    body.light-mode header,
    body.light-mode .header,
    body.light-mode .site-card,
    body.light-mode .category-card,
    body.light-mode .stat-card,
    body.light-mode .hero,
    body.light-mode .search-box {
        background:rgba(255,255,255,.78) !important;
        color:#172033 !important;
        border-color:rgba(80,100,180,.18) !important;
    }

    body.light-mode h1,
    body.light-mode h2,
    body.light-mode h3,
    body.light-mode h4,
    body.light-mode p,
    body.light-mode span {
        color:inherit;
    }

    body.light-mode .site-card p,
    body.light-mode .category-card p {
        color:#586174 !important;
    }

    body.light-mode input,
    body.light-mode select {
        background:rgba(255,255,255,.9) !important;
        color:#172033 !important;
        border-color:#d8def0 !important;
    }

    body.light-mode .nav-btn {
        color:#29334d !important;
        background:rgba(255,255,255,.65) !important;
    }

    body.light-mode .nav-btn.active {
        color:white !important;
    }

    .webbox-generated-grid {
        display:grid;
        grid-template-columns:
            repeat(auto-fit,minmax(240px,1fr));
        gap:20px;
        width:100%;
        margin-top:25px;
    }

    .webbox-site-card {
        background:rgba(255,255,255,.07);
        border:1px solid rgba(255,255,255,.12);
        border-radius:22px;
        padding:20px;
        transition:.25s ease;
        backdrop-filter:blur(12px);
    }

    .webbox-site-card:hover {
        transform:translateY(-5px);
        border-color:rgba(120,130,255,.5);
        box-shadow:0 15px 35px rgba(0,0,0,.15);
    }

    .light-mode .webbox-site-card {
        background:rgba(255,255,255,.85);
        color:#172033;
    }

    .webbox-site-top {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:10px;
    }

    .webbox-site-icon {
        width:50px;
        height:50px;
        border-radius:15px;
        display:grid;
        place-items:center;
        font-size:25px;
        background:rgba(120,130,255,.16);
    }

    .webbox-favorite {
        border:0;
        background:transparent;
        cursor:pointer;
        font-size:25px;
    }

    .webbox-site-card h3 {
        margin:15px 0 8px;
    }

    .webbox-site-card p {
        opacity:.75;
        line-height:1.6;
        min-height:50px;
    }

    .webbox-category-label {
        display:inline-block;
        margin-top:8px;
        padding:5px 10px;
        border-radius:20px;
        font-size:12px;
        background:rgba(120,130,255,.15);
    }

    .webbox-open {
        display:block;
        width:100%;
        margin-top:15px;
        border:0;
        border-radius:13px;
        padding:11px;
        cursor:pointer;
        font-weight:bold;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);
        color:white;
    }

    .webbox-empty {
        text-align:center;
        padding:50px 20px;
        opacity:.7;
    }

    .webbox-category-card {
        cursor:pointer;
        text-align:center;
        padding:25px;
        border-radius:22px;
        background:rgba(255,255,255,.07);
        border:1px solid rgba(255,255,255,.12);
        transition:.25s;
    }

    .webbox-category-card:hover {
        transform:translateY(-5px);
    }

    .webbox-category-icon {
        font-size:40px;
        margin-bottom:10px;
    }

    `;

    document.head.appendChild(style);
}


function applyTheme() {

    const saved =
        localStorage.getItem("webboxTheme");

    if (saved === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }

    updateThemeButton();
}


function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const light =
        document.body.classList.contains("light-mode");

    localStorage.setItem(
        "webboxTheme",
        light ? "light" : "dark"
    );

    updateThemeButton();
}


function updateThemeButton() {

    const buttons = document.querySelectorAll(
        "#themeBtn, .theme-btn"
    );

    buttons.forEach(button => {

        button.innerHTML =
            document.body.classList.contains("light-mode")
            ? "☀️"
            : "🌙";

        button.title =
            document.body.classList.contains("light-mode")
            ? "الوضع الداكن"
            : "الوضع الفاتح";
    });
}


/* =========================================================
   FIND CONTAINER
   ========================================================= */

function findContainer(ids, sectionId) {

    for (const id of ids) {

        const element =
            document.getElementById(id);

        if (element) {
            return element;
        }
    }

    const section =
        document.getElementById(sectionId);

    if (!section) {
        return null;
    }

    let grid =
        section.querySelector(".webbox-generated-grid");

    if (!grid) {

        grid =
            document.createElement("div");

        grid.className =
            "webbox-generated-grid";

        section.appendChild(grid);
    }

    return grid;
}


/* =========================================================
   CARD
   ========================================================= */

function createSiteCard(site) {

    const card =
        document.createElement("article");

    card.className =
        "webbox-site-card site-card";

    const favorite =
        favorites.includes(site.name);

    card.innerHTML = `

        <div class="webbox-site-top">

            <div class="webbox-site-icon">
                ${categoryIcons[site.category] || "🌐"}
            </div>

            <button
                class="webbox-favorite"
                onclick="toggleFavorite('${escapeJS(site.name)}')"
                aria-label="المفضلة"
            >
                ${favorite ? "⭐" : "☆"}
            </button>

        </div>

        <span class="webbox-category-label">
            ${categoryNames[site.category]}
        </span>

        <h3>${site.name}</h3>

        <p>
            ${site.description}
        </p>

        <button
            class="webbox-open"
            onclick="openSite('${escapeJS(site.url)}')"
        >
            فتح الموقع ↗
        </button>

    `;

    return card;
}


/* =========================================================
   RENDER SITES
   ========================================================= */

function renderSites(
    searchText = "",
    category = "all"
) {

    const container =
        findContainer(
            [
                "sitesGrid",
                "sitesContainer",
                "sitesList"
            ],
            "sites"
        );

    if (!container) {
        return;
    }

    const text =
        searchText.toLowerCase().trim();

    const filtered =
        sites.filter(site => {

            const searchMatch =
                !text ||
                site.name.toLowerCase().includes(text) ||
                site.description.toLowerCase().includes(text) ||
                categoryNames[site.category]
                    .toLowerCase()
                    .includes(text);

            const categoryMatch =
                category === "all" ||
                !category ||
                site.category === category;

            return searchMatch && categoryMatch;
        });

    container.innerHTML = "";

    if (!filtered.length) {

        container.innerHTML = `
            <div class="webbox-empty">
                <div style="font-size:45px">🔎</div>
                <h3>لم نجد أي موقع</h3>
                <p>جرّب كلمة بحث أخرى.</p>
            </div>
        `;

        return;
    }

    filtered.forEach(site => {
        container.appendChild(
            createSiteCard(site)
        );
    });

    updateCounts(filtered.length);
}


/* =========================================================
   CATEGORY PAGE
   ========================================================= */

function renderCategories() {

    const container =
        findContainer(
            [
                "categoriesGrid",
                "categoryGrid",
                "categoriesContainer"
            ],
            "categories"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    Object.keys(categoryNames)
        .forEach(category => {

            const count =
                sites.filter(
                    site =>
                        site.category === category
                ).length;

            const card =
                document.createElement("div");

            card.className =
                "webbox-category-card category-card";

            card.onclick =
                () => filterCategory(category);

            card.innerHTML = `

                <div class="webbox-category-icon">
                    ${categoryIcons[category]}
                </div>

                <h3>
                    ${categoryNames[category]}
                </h3>

                <p>
                    ${count} موقع
                </p>

            `;

            container.appendChild(card);
        });
}


/* =========================================================
   FUN PAGE
   ========================================================= */

function renderFun() {

    const container =
        findContainer(
            [
                "funGrid",
                "funContainer",
                "funSites",
                "funList"
            ],
            "fun"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    sites
        .filter(site => site.category === "fun")
        .forEach(site => {

            container.appendChild(
                createSiteCard(site)
            );

        });
}


/* =========================================================
   GAMING PAGE
   ========================================================= */

function renderGaming() {

    const container =
        findContainer(
            [
                "gamingGrid",
                "gamingContainer",
                "gamingSites",
                "gamingList"
            ],
            "gaming"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    sites
        .filter(site => site.category === "games")
        .forEach(site => {

            container.appendChild(
                createSiteCard(site)
            );

        });
}


/* =========================================================
   FAVORITES PAGE
   ========================================================= */

function renderFavorites() {

    const container =
        findContainer(
            [
                "favoritesGrid",
                "favoritesContainer",
                "favoritesList"
            ],
            "favorites"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const favoriteSites =
        sites.filter(site =>
            favorites.includes(site.name)
        );

    if (!favoriteSites.length) {

        container.innerHTML = `
            <div class="webbox-empty">
                <div style="font-size:45px">⭐</div>
                <h3>لا توجد مواقع مفضلة</h3>
                <p>
                    اضغط ⭐ بجانب أي موقع لإضافته.
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
   NAVIGATION
   ========================================================= */

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(
            ".page-section, section"
        );

    sections.forEach(section => {

        section.classList.remove("active");

        if (section.id) {
            section.style.display = "none";
        }

    });

    const target =
        document.getElementById(sectionId);

    if (!target) {
        console.warn(
            "Section not found:",
            sectionId
        );
        return;
    }

    target.style.display = "block";
    target.classList.add("active");

    updateNavigation(sectionId);

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

    if (sectionId === "sites") {
        renderSitesFromCurrentState();
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
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
}


function updateNavigation(sectionId) {

    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.remove("active");

            const code =
                button.getAttribute("onclick") || "";

            if (
                code.includes(sectionId) ||
                (
                    sectionId === "home" &&
                    code.includes("showHome")
                ) ||
                (
                    sectionId === "categories" &&
                    code.includes("showCategories")
                )
            ) {
                button.classList.add("active");
            }

        });
}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function filterCategory(category) {

    const select =
        document.getElementById(
            "categorySelect"
        );

    if (select) {
        select.value = category;
    }

    const search =
        document.getElementById(
            "siteSearch"
        );

    if (search) {
        search.value = "";
    }

    showSection("sites");

    renderSites("", category);
}


/* =========================================================
   SEARCH
   ========================================================= */

function filterSiteList() {

    const search =
        document.getElementById(
            "siteSearch"
        );

    const select =
        document.getElementById(
            "categorySelect"
        );

    const text =
        search
            ? search.value
            : "";

    const category =
        select
            ? select.value
            : "all";

    renderSites(
        text,
        category
    );
}


function searchSites() {

    showSection("sites");

    filterSiteList();
}


function quickSearch(text) {

    const search =
        document.getElementById(
            "siteSearch"
        );

    if (search) {
        search.value = text;
    }

    showSection("sites");

    renderSites(text, "all");
}


/* =========================================================
   RANDOM SITE
   ========================================================= */

function randomSite() {

    const site =
        sites[
            Math.floor(
                Math.random() *
                sites.length
            )
        ];

    if (!site) {
        return;
    }

    showToast(
        "🎲 " + site.name
    );

    setTimeout(() => {
        openSite(site.url);
    }, 500);
}


/* =========================================================
   OPEN SITE
   ========================================================= */

function openSite(url) {

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(name) {

    const index =
        favorites.indexOf(name);

    if (index === -1) {

        favorites.push(name);

        showToast(
            "⭐ تمت الإضافة إلى المفضلة"
        );

    } else {

        favorites.splice(index, 1);

        showToast(
            "تمت الإزالة من المفضلة"
        );
    }

    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );

    renderSitesFromCurrentState();

    renderFavorites();
}


function renderSitesFromCurrentState() {

    const search =
        document.getElementById(
            "siteSearch"
        );

    const select =
        document.getElementById(
            "categorySelect"
        );

    renderSites(
        search ? search.value : "",
        select ? select.value : "all"
    );
}


/* =========================================================
   FEATURED
   ========================================================= */

function renderFeatured() {

    const container =
        document.getElementById(
            "featuredGrid"
        ) ||
        document.getElementById(
            "featuredSites"
        );

    if (!container) {
        return;
    }

    const names = [
        "ChatGPT",
        "Minecraft",
        "YouTube",
        "Canva",
        "GitHub",
        "Khan Academy",
        "Spotify",
        "Photopea"
    ];

    container.innerHTML = "";

    names.forEach(name => {

        const site =
            sites.find(
                item => item.name === name
            );

        if (site) {
            container.appendChild(
                createSiteCard(site)
            );
        }

    });
}


/* =========================================================
   COUNTERS
   ========================================================= */

function updateCounts(count) {

    [
        "siteCount",
        "sitesCount",
        "resultsCount"
    ].forEach(id => {

        const element =
            document.getElementById(id);

        if (element) {
            element.textContent =
                count;
        }

    });
}


function updateStats() {

    const elements = {

        totalSites: sites.length,

        totalCategories:
            Object.keys(categoryNames).length,

        totalFavorites:
            favorites.length

    };

    Object.entries(elements)
        .forEach(([id,value]) => {

            const element =
                document.getElementById(id);

            if (element) {
                element.textContent =
                    value;
            }

        });
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    let toast =
        document.getElementById(
            "toast"
        );

    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id = "toast";

        toast.className = "toast";

        document.body.appendChild(
            toast
        );
    }

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

        }, 2200);
}


/* =========================================================
   SAFE STRING
   ========================================================= */

function escapeJS(text) {

    return String(text)
        .replace(/\\/g,"\\\\")
        .replace(/'/g,"\\'");
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        installThemeCSS();

        applyTheme();

        updateStats();

        renderFeatured();

        renderCategories();

        renderFun();

        renderGaming();

        renderFavorites();

        renderSites();

        const sections =
            document.querySelectorAll(
                ".page-section, section"
            );

        sections.forEach(section => {

            if (section.id === "home") {

                section.style.display =
                    "block";

                section.classList.add(
                    "active"
                );

            } else if (section.id) {

                section.style.display =
                    "none";

            }

        });

        console.log(
            "================================"
        );

        console.log(
            "🌐 WebBox"
        );

        console.log(
            "عدد المواقع:",
            sites.length
        );

        console.log(
            "================================"
        );

        if (sites.length === 200) {

            console.log(
                "✅ تم تحميل 200 موقع بنجاح"
            );

        } else {

            console.warn(
                "⚠️ العدد الحالي:",
                sites.length
            );

        }

    }
);


/* =========================================================
   LIVE SEARCH
   ========================================================= */

document.addEventListener(
    "input",
    event => {

        if (
            event.target &&
            event.target.id ===
            "siteSearch"
        ) {

            filterSiteList();

        }

    }
);


/* =========================================================
   ENTER SEARCH
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            event.target &&
            event.target.id ===
            "siteSearch"
        ) {

            showSection("sites");

        }

    }
);


/* =========================================================
   GLOBAL
   ========================================================= */

window.webboxSites =
    sites;

window.webboxCategories =
    categoryNames;

window.toggleTheme =
    toggleTheme;

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

window.showSection =
    showSection;

window.filterCategory =
    filterCategory;

window.filterSiteList =
    filterSiteList;

window.searchSites =
    searchSites;

window.quickSearch =
    quickSearch;

window.randomSite =
    randomSite;

window.openSite =
    openSite;

window.toggleFavorite =
    toggleFavorite;

console.log(
    "WebBox loaded:",
    sites.length,
    "sites"
);
