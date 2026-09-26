/* =========================================================
   WEBBOX
   510+ WEBSITES
   51 WEBSITE FOR EACH CATEGORY
   ========================================================= */

const CATEGORY_INFO = {
    games: {
        name: "الألعاب",
        icon: "🎮",
        description: "مواقع الألعاب والمنصات"
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
        description: "الفيديو والمونتاج"
    },
    music: {
        name: "الموسيقى",
        icon: "🎵",
        description: "الموسيقى والصوت"
    },
    programming: {
        name: "البرمجة",
        icon: "💻",
        description: "البرمجة وتطوير الألعاب والمواقع"
    },
    books: {
        name: "الكتب",
        icon: "📖",
        description: "الكتب والقراءة"
    },
    tools: {
        name: "الأدوات",
        icon: "🛠️",
        description: "أدوات الإنترنت"
    },
    fun: {
        name: "الترفيه",
        icon: "😂",
        description: "مواقع ترفيهية"
    }
};


/* =========================================================
   51 موقعًا لكل تصنيف
   ========================================================= */

const DATA = {

games: [
["Roblox","https://www.roblox.com","منصة ألعاب وإنشاء تجارب"],
["Minecraft","https://www.minecraft.net","لعبة البناء والاستكشاف"],
["Steam","https://store.steampowered.com","منصة ألعاب الكمبيوتر"],
["Epic Games","https://store.epicgames.com","متجر ألعاب"],
["GOG","https://www.gog.com","متجر ألعاب الكمبيوتر"],
["itch.io","https://itch.io","ألعاب مستقلة"],
["Game Jolt","https://gamejolt.com","مجتمع ألعاب مستقل"],
["CrazyGames","https://www.crazygames.com","ألعاب المتصفح"],
["Poki","https://poki.com","ألعاب مجانية"],
["Kongregate","https://www.kongregate.com","ألعاب المتصفح"],
["Armor Games","https://armorgames.com","ألعاب أونلاين"],
["Newgrounds","https://www.newgrounds.com","ألعاب ومحتوى إبداعي"],
["Miniclip","https://www.miniclip.com","ألعاب أونلاين"],
["Y8","https://www.y8.com","ألعاب المتصفح"],
["Friv","https://www.friv.com","ألعاب مجانية"],
["Coolmath Games","https://www.coolmathgames.com","ألعاب ألغاز"],
["Kizi","https://kizi.com","ألعاب المتصفح"],
["Lagged","https://lagged.com","ألعاب سريعة"],
["Addicting Games","https://www.addictinggames.com","ألعاب المتصفح"],
["SilverGames","https://www.silvergames.com","ألعاب مجانية"],
["Gameflare","https://www.gameflare.com","ألعاب أونلاين"],
["BGames","https://www.bgames.com","ألعاب المتصفح"],
["CrazyGames FPS","https://www.crazygames.com/t/fps","ألعاب FPS"],
["Krunker","https://krunker.io","FPS في المتصفح"],
["Shell Shockers","https://shellshock.io","FPS في المتصفح"],
["Agar.io","https://agar.io","لعبة متعددة اللاعبين"],
["Slither.io","https://slither.io","لعبة الثعبان"],
["Diep.io","https://diep.io","لعبة الدبابات"],
["ZombsRoyale","https://zombsroyale.io","Battle Royale"],
["Tetr.io","https://tetr.io","لعبة Tetris"],
["Chess.com","https://www.chess.com","شطرنج"],
["Lichess","https://lichess.org","شطرنج مجاني"],
["ChessKid","https://www.chesskid.com","شطرنج تعليمي"],
["GeoGuessr","https://www.geoguessr.com","لعبة جغرافيا"],
["Skribbl","https://skribbl.io","رسم وتخمين"],
["Gartic Phone","https://garticphone.com","لعبة جماعية"],
["Among Us","https://www.innersloth.com/games/among-us","لعبة اجتماعية"],
["Brawlhalla","https://www.brawlhalla.com","لعبة قتال"],
["Fall Guys","https://www.fallguys.com","لعبة جماعية"],
["Rocket League","https://www.rocketleague.com","كرة قدم بالسيارات"],
["Fortnite","https://www.fortnite.com","Battle Royale"],
["Valorant","https://playvalorant.com","لعبة تصويب"],
["League of Legends","https://www.leagueoflegends.com","MOBA"],
["Dota 2","https://www.dota2.com","MOBA"],
["Counter-Strike","https://www.counter-strike.net","لعبة تصويب"],
["Apex Legends","https://www.ea.com/games/apex-legends","Battle Royale"],
["Nintendo","https://www.nintendo.com","ألعاب Nintendo"],
["PlayStation","https://www.playstation.com","منصة PlayStation"],
["Xbox","https://www.xbox.com","منصة Xbox"],
["EA Games","https://www.ea.com","ألعاب EA"],
["Ubisoft","https://www.ubisoft.com","ألعاب Ubisoft"],
["GamersGate","https://www.gamersgate.com","متجر ألعاب"]
],

education: [
["Khan Academy","https://www.khanacademy.org","تعلم مجاني"],
["Coursera","https://www.coursera.org","دورات تعليمية"],
["edX","https://www.edx.org","دورات جامعية"],
["MIT OpenCourseWare","https://ocw.mit.edu","مواد MIT"],
["OpenLearn","https://www.open.edu/openlearn","تعليم مجاني"],
["Duolingo","https://www.duolingo.com","تعلم اللغات"],
["Quizlet","https://quizlet.com","بطاقات تعليمية"],
["Brilliant","https://brilliant.org","رياضيات وعلوم"],
["TED-Ed","https://ed.ted.com","دروس فيديو"],
["Wolfram Alpha","https://www.wolframalpha.com","حل ومسائل ومعرفة"],
["Desmos","https://www.desmos.com","رياضيات ورسوم"],
["GeoGebra","https://www.geogebra.org","رياضيات"],
["Symbolab","https://www.symbolab.com","حل الرياضيات"],
["Mathway","https://www.mathway.com","حل المسائل"],
["Google Scholar","https://scholar.google.com","أبحاث علمية"],
["Wikipedia","https://www.wikipedia.org","موسوعة"],
["OpenStax","https://openstax.org","كتب تعليمية"],
["CK-12","https://www.ck12.org","علوم ورياضيات"],
["PhET","https://phet.colorado.edu","محاكاة علمية"],
["Codecademy","https://www.codecademy.com","تعلم البرمجة"],
["freeCodeCamp","https://www.freecodecamp.org","برمجة مجانية"],
["W3Schools","https://www.w3schools.com","تعلم الويب"],
["MDN","https://developer.mozilla.org","مرجع الويب"],
["Udemy","https://www.udemy.com","دورات"],
["Udacity","https://www.udacity.com","تعلم التقنية"],
["FutureLearn","https://www.futurelearn.com","دورات"],
["Alison","https://alison.com","دورات مجانية"],
["Academic Earth","https://academicearth.org","محاضرات جامعية"],
["Study.com","https://study.com","دراسة"],
["Quizizz","https://quizizz.com","اختبارات تعليمية"],
["Kahoot","https://kahoot.com","اختبارات تفاعلية"],
["Socrative","https://www.socrative.com","اختبارات"],
["IXL","https://www.ixl.com","تعلم الرياضيات"],
["Prodigy","https://www.prodigygame.com","رياضيات تعليمية"],
["BBC Bitesize","https://www.bbc.co.uk/bitesize","مواد تعليمية"],
["National Geographic Education","https://education.nationalgeographic.org","علوم وجغرافيا"],
["NASA Education","https://www.nasa.gov/learning-resources","علوم وفضاء"],
["Smithsonian Learning Lab","https://learninglab.si.edu","تعليم"],
["Google Arts & Culture","https://artsandculture.google.com","ثقافة وفنون"],
["Open Library","https://openlibrary.org","كتب"],
["Project Gutenberg","https://www.gutenberg.org","كتب مجانية"],
["Internet Archive","https://archive.org","أرشيف"],
["LibriVox","https://librivox.org","كتب صوتية"],
["The Odin Project","https://www.theodinproject.com","تطوير الويب"],
["Frontend Mentor","https://www.frontendmentor.io","مشاريع برمجة"],
["Codewars","https://www.codewars.com","تحديات برمجية"],
["Exercism","https://exercism.org","تمارين برمجة"],
["LeetCode","https://leetcode.com","خوارزميات"],
["HackerRank","https://www.hackerrank.com","تحديات برمجية"],
["GeeksforGeeks","https://www.geeksforgeeks.org","برمجة وعلوم حاسوب"],
["TutorialsPoint","https://www.tutorialspoint.com","دروس تقنية"]
],

ai: [
["ChatGPT","https://chatgpt.com","مساعد ذكاء اصطناعي"],
["Gemini","https://gemini.google.com","مساعد Google"],
["Claude","https://claude.ai","مساعد ذكاء اصطناعي"],
["Microsoft Copilot","https://copilot.microsoft.com","مساعد Microsoft"],
["Perplexity","https://www.perplexity.ai","بحث بالذكاء الاصطناعي"],
["DeepSeek","https://chat.deepseek.com","مساعد AI"],
["Grok","https://grok.com","مساعد AI"],
["Mistral","https://chat.mistral.ai","مساعد AI"],
["Hugging Face","https://huggingface.co","نماذج AI"],
["Character AI","https://character.ai","شخصيات AI"],
["Poe","https://poe.com","مساعدات AI"],
["You.com","https://you.com","بحث وAI"],
["Phind","https://www.phind.com","AI للمطورين"],
["Pi","https://pi.ai","مساعد AI"],
["Le Chat","https://chat.mistral.ai","مساعد Mistral"],
["NotebookLM","https://notebooklm.google.com","بحث في المصادر"],
["Consensus","https://consensus.app","بحث علمي بالـAI"],
["Elicit","https://elicit.com","مساعدة البحث العلمي"],
["ResearchRabbit","https://www.researchrabbit.ai","اكتشاف الأبحاث"],
["Scite","https://scite.ai","تحليل الأبحاث"],
["Gamma","https://gamma.app","إنشاء عروض"],
["Canva AI","https://www.canva.com/ai-image-generator","تصميم بالـAI"],
["Adobe Firefly","https://firefly.adobe.com","صور بالـAI"],
["Leonardo AI","https://leonardo.ai","إنشاء صور"],
["Ideogram","https://ideogram.ai","صور ونصوص"],
["Krea","https://www.krea.ai","إنشاء صور"],
["Playground","https://playground.com","تحرير الصور"],
["Midjourney","https://www.midjourney.com","إنشاء صور"],
["Stable Diffusion","https://stability.ai","توليد الصور"],
["Black Forest Labs","https://bfl.ai","نماذج صور"],
["Runway","https://runwayml.com","فيديو بالـAI"],
["Kling","https://klingai.com","توليد فيديو"],
["Pika","https://pika.art","فيديو AI"],
["Luma","https://lumalabs.ai","فيديو و3D"],
["Vidu","https://www.vidu.com","توليد فيديو"],
["HeyGen","https://www.heygen.com","فيديو وأفاتار"],
["Synthesia","https://www.synthesia.io","فيديو AI"],
["ElevenLabs","https://elevenlabs.io","صوت AI"],
["Murf","https://murf.ai","تحويل النص لصوت"],
["LOVO","https://lovo.ai","أصوات AI"],
["PlayHT","https://play.ht","تحويل النص لصوت"],
["Suno","https://suno.com","إنشاء موسيقى"],
["Udio","https://udio.com","إنشاء موسيقى"],
["Soundraw","https://soundraw.io","موسيقى AI"],
["Descript","https://www.descript.com","تحرير صوت وفيديو"],
["Grammarly","https://www.grammarly.com","مساعدة الكتابة"],
["QuillBot","https://quillbot.com","إعادة صياغة وكتابة"],
["Jasper","https://www.jasper.ai","كتابة AI"],
["Writesonic","https://writesonic.com","كتابة AI"],
["Copy.ai","https://www.copy.ai","إنشاء محتوى"],
["Otter","https://otter.ai","نسخ الصوت"],
["Fireflies","https://fireflies.ai","تلخيص الاجتماعات"]
],

design: [
["Canva","https://www.canva.com","تصميم شامل"],
["Figma","https://www.figma.com","تصميم الواجهات"],
["Adobe","https://www.adobe.com","أدوات التصميم"],
["Photopea","https://www.photopea.com","تحرير الصور"],
["Pixlr","https://pixlr.com","تحرير الصور"],
["GIMP","https://www.gimp.org","تحرير الصور"],
["Krita","https://krita.org","الرسم الرقمي"],
["Inkscape","https://inkscape.org","رسومات SVG"],
["Blender","https://www.blender.org","3D"],
["Sketch","https://www.sketch.com","تصميم UI"],
["Framer","https://www.framer.com","تصميم مواقع"],
["Webflow","https://webflow.com","تصميم مواقع"],
["Penpot","https://penpot.app","تصميم مفتوح المصدر"],
["Lunacy","https://icons8.com/lunacy","تصميم UI"],
["Gravit Designer","https://www.coreldraw.com","تصميم"],
["Vectr","https://vectr.com","رسومات Vector"],
["Boxy SVG","https://boxy-svg.com","SVG"],
["SVG-Edit","https://svgedit.netlify.app","تحرير SVG"],
["Coolors","https://coolors.co","ألوان"],
["Adobe Color","https://color.adobe.com","ألوان"],
["Google Fonts","https://fonts.google.com","خطوط"],
["Font Awesome","https://fontawesome.com","أيقونات"],
["Flaticon","https://www.flaticon.com","أيقونات"],
["Icons8","https://icons8.com","أيقونات وصور"],
["The Noun Project","https://thenounproject.com","أيقونات"],
["Unsplash","https://unsplash.com","صور"],
["Pexels","https://www.pexels.com","صور وفيديو"],
["Pixabay","https://pixabay.com","صور مجانية"],
["Freepik","https://www.freepik.com","موارد تصميم"],
["Vecteezy","https://www.vecteezy.com","Vector"],
["Rawpixel","https://www.rawpixel.com","صور وموارد"],
["Burst","https://burst.shopify.com","صور"],
["StockSnap","https://stocksnap.io","صور مجانية"],
["Reshot","https://www.reshot.com","صور وأيقونات"],
["Dribbble","https://dribbble.com","تصميم وإلهام"],
["Behance","https://www.behance.net","أعمال المصممين"],
["Awwwards","https://www.awwwards.com","إلهام المواقع"],
["CSS Design Awards","https://www.cssdesignawards.com","تصميم مواقع"],
["SiteInspire","https://www.siteinspire.com","إلهام مواقع"],
["Land-book","https://land-book.com","تصميم مواقع"],
["Lapa Ninja","https://www.lapa.ninja","Landing Pages"],
["Mobbin","https://mobbin.com","واجهات التطبيقات"],
["UI8","https://ui8.net","موارد UI"],
["Creative Market","https://creativemarket.com","موارد تصميم"],
["Mockup World","https://www.mockupworld.co","Mockups"],
["Shots","https://shots.so","Mockups"],
["Remove.bg","https://www.remove.bg","إزالة الخلفية"],
["Cleanup.pictures","https://cleanup.pictures","إزالة العناصر"],
["Squoosh","https://squoosh.app","ضغط الصور"],
["TinyPNG","https://tinypng.com","ضغط الصور"],
["Upscale.media","https://www.upscale.media","تكبير الصور"],
["PhotoRoom","https://www.photoroom.com","تحرير الصور"]
],

video: [
["YouTube","https://www.youtube.com","فيديو"],
["YouTube Studio","https://studio.youtube.com","إدارة القنوات"],
["Vimeo","https://vimeo.com","فيديو احترافي"],
["Twitch","https://www.twitch.tv","بث مباشر"],
["Dailymotion","https://www.dailymotion.com","فيديو"],
["CapCut","https://www.capcut.com","تحرير الفيديو"],
["VEED","https://www.veed.io","تحرير الفيديو"],
["Clipchamp","https://clipchamp.com","تحرير الفيديو"],
["Kapwing","https://www.kapwing.com","تحرير الفيديو"],
["InVideo","https://invideo.io","إنشاء الفيديو"],
["Descript","https://www.descript.com","تحرير الفيديو والصوت"],
["DaVinci Resolve","https://www.blackmagicdesign.com/products/davinciresolve","مونتاج احترافي"],
["Adobe Premiere","https://www.adobe.com/products/premiere.html","مونتاج"],
["After Effects","https://www.adobe.com/products/aftereffects.html","مؤثرات"],
["Final Cut Pro","https://www.apple.com/final-cut-pro","مونتاج"],
["iMovie","https://www.apple.com/imovie","تحرير الفيديو"],
["Kdenlive","https://kdenlive.org","محرر فيديو مفتوح المصدر"],
["Shotcut","https://shotcut.org","محرر فيديو"],
["OpenShot","https://www.openshot.org","محرر فيديو"],
["Olive","https://www.olivevideoeditor.org","محرر فيديو"],
["HitFilm","https://fxhome.com","تحرير ومؤثرات"],
["Lightworks","https://lwks.com","محرر فيديو"],
["VEGAS","https://www.vegascreativesoftware.com","مونتاج"],
["Filmora","https://filmora.wondershare.com","تحرير الفيديو"],
["Movavi","https://www.movavi.com","تحرير الفيديو"],
["FlexClip","https://www.flexclip.com","فيديو أونلاين"],
["Renderforest","https://www.renderforest.com","إنشاء فيديو"],
["Animoto","https://animoto.com","صناعة الفيديو"],
["Powtoon","https://www.powtoon.com","فيديوهات متحركة"],
["Animaker","https://www.animaker.com","Animation"],
["Moovly","https://www.moovly.com","فيديو"],
["Biteable","https://biteable.com","فيديو"],
["Lumen5","https://lumen5.com","فيديو"],
["Pictory","https://pictory.ai","فيديو AI"],
["Runway","https://runwayml.com","فيديو AI"],
["Pika","https://pika.art","فيديو AI"],
["Kling","https://klingai.com","فيديو AI"],
["Luma","https://lumalabs.ai","فيديو AI"],
["HeyGen","https://www.heygen.com","أفاتار وفيديو"],
["Synthesia","https://www.synthesia.io","فيديو AI"],
["Adobe Express","https://www.adobe.com/express","تصميم وفيديو"],
["Canva Video","https://www.canva.com/create/videos","فيديو"],
["Mixkit","https://mixkit.co","فيديو ومؤثرات"],
["Coverr","https://coverr.co","Stock Video"],
["Videvo","https://www.videvo.net","فيديو مجاني"],
["Pexels Videos","https://www.pexels.com/videos","فيديوهات"],
["Pixabay Videos","https://pixabay.com/videos","فيديوهات"],
["Storyblocks","https://www.storyblocks.com","فيديو Stock"],
["Motion Array","https://motionarray.com","موارد فيديو"],
["Artgrid","https://artgrid.io","فيديو Stock"],
["Filmstro","https://filmstro.com","موسيقى للفيديو"],
["Adobe Podcast","https://podcast.adobe.com","تحسين الصوت"]
],

music: [
["Spotify","https://open.spotify.com","موسيقى"],
["YouTube Music","https://music.youtube.com","موسيقى"],
["SoundCloud","https://soundcloud.com","موسيقى وصوت"],
["Apple Music","https://music.apple.com","موسيقى"],
["Deezer","https://www.deezer.com","موسيقى"],
["Tidal","https://tidal.com","موسيقى"],
["Amazon Music","https://music.amazon.com","موسيقى"],
["Bandcamp","https://bandcamp.com","موسيقى مستقلة"],
["Audiomack","https://audiomack.com","موسيقى"],
["Last.fm","https://www.last.fm","اكتشاف الموسيقى"],
["Mixcloud","https://www.mixcloud.com","Mixes وDJ"],
["TuneIn","https://tunein.com","راديو"],
["iHeart","https://www.iheart.com","راديو وموسيقى"],
["Pandora","https://www.pandora.com","راديو موسيقي"],
["Jamendo","https://www.jamendo.com","موسيقى مستقلة"],
["Free Music Archive","https://freemusicarchive.org","موسيقى مجانية"],
["Freesound","https://freesound.org","مؤثرات صوتية"],
["Musixmatch","https://www.musixmatch.com","معلومات الأغاني"],
["Genius","https://genius.com","معلومات الأغاني"],
["Songsterr","https://www.songsterr.com","Tab موسيقية"],
["Ultimate Guitar","https://www.ultimate-guitar.com","Tabs"],
["Chordify","https://chordify.net","كوردات"],
["Moises","https://moises.ai","فصل الصوت"],
["LALAL.AI","https://www.lalal.ai","فصل الصوت"],
["Suno","https://suno.com","إنشاء موسيقى"],
["Udio","https://udio.com","إنشاء موسيقى"],
["Soundraw","https://soundraw.io","موسيقى AI"],
["AIVA","https://www.aiva.ai","تأليف موسيقى"],
["Mubert","https://mubert.com","موسيقى مولدة"],
["Boomy","https://boomy.com","إنشاء موسيقى"],
["BandLab","https://www.bandlab.com","صناعة الموسيقى"],
["Soundtrap","https://www.soundtrap.com","استوديو أونلاين"],
["Audiotool","https://www.audiotool.com","صناعة الموسيقى"],
["Splice","https://splice.com","Samples"],
["Looperman","https://www.looperman.com","Loops"],
["SampleFocus","https://samplefocus.com","Samples"],
["LANDR","https://www.landr.com","Mastering"],
["iZotope","https://www.izotope.com","معالجة الصوت"],
["Native Instruments","https://www.native-instruments.com","موسيقى"],
["Ableton","https://www.ableton.com","إنتاج موسيقي"],
["FL Studio","https://www.image-line.com","إنتاج موسيقي"],
["Logic Pro","https://www.apple.com/logic-pro","إنتاج موسيقي"],
["GarageBand","https://www.apple.com/mac/garageband","موسيقى"],
["Reverb","https://reverb.com","معدات موسيقية"],
["MusicBrainz","https://musicbrainz.org","قاعدة بيانات موسيقى"],
["Discogs","https://www.discogs.com","موسيقى"],
["Radio Garden","https://radio.garden","راديو العالم"],
["Radio.net","https://www.radio.net","راديو"],
["Classic FM","https://www.classicfm.com","موسيقى كلاسيكية"],
["Musopen","https://musopen.org","موسيقى كلاسيكية"],
["IMSLP","https://imslp.org","نوتات موسيقية"],
["Ableton Learning Music","https://learningmusic.ableton.com","تعلم الموسيقى"]
],

programming: [
["GitHub","https://github.com","استضافة الأكواد"],
["GitLab","https://gitlab.com","DevOps"],
["Bitbucket","https://bitbucket.org","Git"],
["CodePen","https://codepen.io","HTML CSS JS"],
["JSFiddle","https://jsfiddle.net","JavaScript"],
["Replit","https://replit.com","برمجة أونلاين"],
["Stack Overflow","https://stackoverflow.com","أسئلة البرمجة"],
["MDN","https://developer.mozilla.org","مرجع الويب"],
["W3Schools","https://www.w3schools.com","تعلم البرمجة"],
["freeCodeCamp","https://www.freecodecamp.org","تعلم البرمجة"],
["The Odin Project","https://www.theodinproject.com","Web Development"],
["Frontend Mentor","https://www.frontendmentor.io","مشاريع Frontend"],
["Codewars","https://www.codewars.com","تحديات برمجة"],
["LeetCode","https://leetcode.com","خوارزميات"],
["HackerRank","https://www.hackerrank.com","تحديات"],
["Exercism","https://exercism.org","تمارين"],
["GeeksforGeeks","https://www.geeksforgeeks.org","علوم الحاسوب"],
["Dev.to","https://dev.to","مجتمع مطورين"],
["Hashnode","https://hashnode.com","مدونات تقنية"],
["npm","https://www.npmjs.com","حزم JavaScript"],
["PyPI","https://pypi.org","حزم Python"],
["Crates.io","https://crates.io","حزم Rust"],
["Maven Central","https://central.sonatype.com","حزم Java"],
["NuGet","https://www.nuget.org","حزم .NET"],
["Docker Hub","https://hub.docker.com","Docker"],
["Kaggle","https://www.kaggle.com","Data Science"],
["Google Colab","https://colab.research.google.com","Python أونلاين"],
["Observable","https://observablehq.com","Data Visualization"],
["Jupyter","https://jupyter.org","برمجة علمية"],
["Godot","https://godotengine.org","محرك ألعاب"],
["Unity","https://unity.com","محرك ألعاب"],
["Unreal Engine","https://www.unrealengine.com","محرك ألعاب"],
["Construct","https://www.construct.net","صناعة الألعاب"],
["GDevelop","https://gdevelop.io","صناعة الألعاب"],
["Scratch","https://scratch.mit.edu","تعلم البرمجة"],
["Code.org","https://code.org","تعلم البرمجة"],
["Arduino","https://www.arduino.cc","إلكترونيات وبرمجة"],
["Raspberry Pi","https://www.raspberrypi.com","حوسبة وبرمجة"],
["Visual Studio Code","https://code.visualstudio.com","محرر أكواد"],
["Visual Studio","https://visualstudio.microsoft.com","IDE"],
["JetBrains","https://www.jetbrains.com","أدوات برمجة"],
["Cursor","https://www.cursor.com","محرر AI"],
["CodeSandbox","https://codesandbox.io","برمجة أونلاين"],
["StackBlitz","https://stackblitz.com","تطوير الويب"],
["Glitch","https://glitch.com","مشاريع ويب"],
["Vercel","https://vercel.com","استضافة مواقع"],
["Netlify","https://www.netlify.com","استضافة مواقع"],
["Cloudflare","https://www.cloudflare.com","Web Infrastructure"],
["Firebase","https://firebase.google.com","تطوير التطبيقات"],
["Supabase","https://supabase.com","Backend"],
["Postman","https://www.postman.com","API"],
["Insomnia","https://insomnia.rest","API Testing"]
],

books: [
["Project Gutenberg","https://www.gutenberg.org","كتب مجانية"],
["Open Library","https://openlibrary.org","مكتبة رقمية"],
["Internet Archive","https://archive.org","أرشيف"],
["Google Books","https://books.google.com","البحث عن الكتب"],
["Goodreads","https://www.goodreads.com","مجتمع القراء"],
["ManyBooks","https://manybooks.net","كتب إلكترونية"],
["Standard Ebooks","https://standardebooks.org","كتب كلاسيكية"],
["LibriVox","https://librivox.org","كتب صوتية"],
["Wikisource","https://wikisource.org","نصوص حرة"],
["WorldCat","https://www.worldcat.org","فهرس المكتبات"],
["HathiTrust","https://www.hathitrust.org","مكتبة رقمية"],
["OpenStax","https://openstax.org","كتب تعليمية"],
["Open Textbook Library","https://open.umn.edu/opentextbooks","كتب تعليمية"],
["DOAB","https://www.doabooks.org","كتب أكاديمية"],
["Directory of Open Access Books","https://www.oapen.org","كتب أكاديمية"],
["BookBub","https://www.bookbub.com","اكتشاف الكتب"],
["StoryGraph","https://app.thestorygraph.com","تتبع القراءة"],
["LibraryThing","https://www.librarything.com","إدارة الكتب"],
["Book Riot","https://bookriot.com","محتوى الكتب"],
["LitHub","https://lithub.com","أدب"],
["Poetry Foundation","https://www.poetryfoundation.org","شعر"],
["Poets.org","https://poets.org","شعر"],
["JSTOR","https://www.jstor.org","أبحاث وكتب"],
["Google Scholar","https://scholar.google.com","أبحاث"],
["arXiv","https://arxiv.org","أبحاث علمية"],
["Project MUSE","https://muse.jhu.edu","أبحاث وكتب"],
["SpringerLink","https://link.springer.com","كتب وأبحاث"],
["ScienceDirect","https://www.sciencedirect.com","أبحاث"],
["ResearchGate","https://www.researchgate.net","أبحاث"],
["Academia","https://www.academia.edu","أبحاث"],
["Scribd","https://www.scribd.com","مستندات وكتب"],
["Everand","https://www.everand.com","كتب وصوتيات"],
["Audible","https://www.audible.com","كتب صوتية"],
["Storytel","https://www.storytel.com","كتب صوتية"],
["Kobo","https://www.kobo.com","كتب إلكترونية"],
["Barnes & Noble","https://www.barnesandnoble.com","كتب"],
["Penguin Random House","https://www.penguinrandomhouse.com","كتب"],
["HarperCollins","https://www.harpercollins.com","كتب"],
["Macmillan","https://us.macmillan.com","كتب"],
["Oxford Academic","https://academic.oup.com","أبحاث وكتب"],
["Cambridge Core","https://www.cambridge.org/core","أبحاث وكتب"],
["MIT Press","https://mitpress.mit.edu","كتب أكاديمية"],
["Princeton University Press","https://press.princeton.edu","كتب أكاديمية"],
["Yale University Press","https://yalebooks.yale.edu","كتب"],
["Harvard University Press","https://www.hup.harvard.edu","كتب"],
["Internet Sacred Text Archive","https://www.sacred-texts.com","نصوص تاريخية"],
["Bartleby","https://www.bartleby.com","كتب ومراجع"],
["SparkNotes","https://www.sparknotes.com","مراجعات أدبية"],
["CliffsNotes","https://www.cliffsnotes.com","مراجع دراسية"],
["LitCharts","https://www.litcharts.com","تحليل الأدب"],
["BookBrowse","https://www.bookbrowse.com","اكتشاف الكتب"]
],

tools: [
["Google","https://www.google.com","محرك بحث"],
["Google Drive","https://drive.google.com","تخزين سحابي"],
["Google Translate","https://translate.google.com","ترجمة"],
["Google Maps","https://maps.google.com","خرائط"],
["Google Calendar","https://calendar.google.com","تقويم"],
["Google Docs","https://docs.google.com","مستندات"],
["Google Sheets","https://sheets.google.com","جداول"],
["Google Keep","https://keep.google.com","ملاحظات"],
["Google Forms","https://forms.google.com","نماذج"],
["Gmail","https://mail.google.com","بريد إلكتروني"],
["Outlook","https://outlook.live.com","بريد"],
["Proton Mail","https://proton.me/mail","بريد آمن"],
["Dropbox","https://www.dropbox.com","تخزين"],
["OneDrive","https://onedrive.live.com","تخزين"],
["Box","https://www.box.com","تخزين"],
["WeTransfer","https://wetransfer.com","إرسال ملفات"],
["TransferNow","https://www.transfernow.net","إرسال ملفات"],
["TinyURL","https://tinyurl.com","اختصار روابط"],
["Bitly","https://bitly.com","اختصار روابط"],
["QR Code Generator","https://www.qr-code-generator.com","QR"],
["QR Code Monkey","https://www.qrcode-monkey.com","QR"],
["ILovePDF","https://www.ilovepdf.com","PDF"],
["Smallpdf","https://smallpdf.com","PDF"],
["PDF24","https://tools.pdf24.org","PDF"],
["Sejda","https://www.sejda.com","PDF"],
["CloudConvert","https://cloudconvert.com","تحويل الملفات"],
["Convertio","https://convertio.co","تحويل الملفات"],
["Zamzar","https://www.zamzar.com","تحويل الملفات"],
["Online-Convert","https://www.online-convert.com","تحويل"],
["TinyPNG","https://tinypng.com","ضغط الصور"],
["Squoosh","https://squoosh.app","ضغط الصور"],
["Remove.bg","https://www.remove.bg","إزالة الخلفية"],
["Cleanup Pictures","https://cleanup.pictures","تنظيف الصور"],
["Photopea","https://www.photopea.com","تحرير الصور"],
["Excalidraw","https://excalidraw.com","رسم مخططات"],
["diagrams.net","https://app.diagrams.net","مخططات"],
["Notion","https://www.notion.so","تنظيم"],
["Trello","https://trello.com","إدارة المشاريع"],
["Todoist","https://todoist.com","مهام"],
["ClickUp","https://clickup.com","إدارة المشاريع"],
["Toggl","https://toggl.com","تتبع الوقت"],
["Clockify","https://clockify.me","تتبع الوقت"],
["Time.is","https://time.is","الوقت"],
["World Time Buddy","https://www.worldtimebuddy.com","التوقيت العالمي"],
["Speedtest","https://www.speedtest.net","سرعة الإنترنت"],
["Fast","https://fast.com","سرعة الإنترنت"],
["Have I Been Pwned","https://haveibeenpwned.com","فحص البريد"],
["Wayback Machine","https://web.archive.org","أرشيف المواقع"],
["URLVoid","https://www.urlvoid.com","فحص المواقع"],
["VirusTotal","https://www.virustotal.com","فحص الملفات والروابط"],
["Base64 Guru","https://base64.guru","أدوات Base64"]
],

fun: [
["Reddit","https://www.reddit.com","مجتمع ومناقشات"],
["9GAG","https://9gag.com","ترفيه وميمز"],
["Imgur","https://imgur.com","صور"],
["GIPHY","https://giphy.com","GIF"],
["Tenor","https://tenor.com","GIF"],
["Know Your Meme","https://knowyourmeme.com","ميمز"],
["Bored Panda","https://www.boredpanda.com","ترفيه"],
["Neal.fun","https://neal.fun","تجارب تفاعلية"],
["The Useless Web","https://theuselessweb.com","مواقع عشوائية"],
["Radio Garden","https://radio.garden","راديو العالم"],
["WindowSwap","https://www.window-swap.com","مناظر العالم"],
["EarthCam","https://www.earthcam.com","كاميرات مباشرة"],
["Flightradar24","https://www.flightradar24.com","تتبع الطائرات"],
["MarineTraffic","https://www.marinetraffic.com","تتبع السفن"],
["Google Earth","https://earth.google.com","استكشاف الأرض"],
["Zoomquilt","https://zoomquilt.org","تجربة بصرية"],
["Pointer Pointer","https://pointerpointer.com","تجربة ترفيهية"],
["A Soft Murmur","https://asoftmurmur.com","أصوات"],
["Radio.net","https://www.radio.net","راديو"],
["StumbleUpon","https://www.stumbleupon.com","اكتشاف مواقع"],
["FutureMe","https://www.futureme.org","رسائل مستقبلية"],
["This Person Does Not Exist","https://thispersondoesnotexist.com","صور مولدة"],
["Patatap","https://patatap.com","أصوات وتفاعل"],
["Silk","https://weavesilk.com","رسم تفاعلي"],
["Chrome Music Lab","https://musiclab.chromeexperiments.com","تجارب موسيقية"],
["Quick Draw","https://quickdraw.withgoogle.com","رسم وAI"],
["Skribbl","https://skribbl.io","رسم وتخمين"],
["Gartic Phone","https://garticphone.com","لعبة جماعية"],
["GeoGuessr","https://www.geoguessr.com","جغرافيا"],
["Chess.com","https://www.chess.com","شطرنج"],
["Lichess","https://lichess.org","شطرنج"],
["Akinator","https://en.akinator.com","لعبة تخمين"],
["Little Alchemy","https://littlealchemy.com","لعبة تركيب"],
["Quick Draw Games","https://quickdraw.withgoogle.com","لعبة الرسم"],
["Radio Garden World","https://radio.garden","استكشاف العالم"],
["Window Swap","https://www.window-swap.com","نوافذ العالم"],
["Drive & Listen","https://driveandlisten.herokuapp.com","قيادة افتراضية"],
["MapCrunch","https://www.mapcrunch.com","استكشاف الأماكن"],
["Geotastic","https://geotastic.net","ألعاب جغرافيا"],
["City Guesser","https://virtualvacation.us","تخمين المدن"],
["Virtual Vacation","https://virtualvacation.us","رحلات افتراضية"],
["Explore.org","https://explore.org","كاميرات مباشرة"],
["Flightradar","https://www.flightradar24.com","الطائرات"],
["MarineTraffic","https://www.marinetraffic.com","السفن"],
["Windy","https://www.windy.com","الطقس والخرائط"],
["Earth Nullschool","https://earth.nullschool.net","خريطة الأرض"],
["Worldometer","https://www.worldometers.info","إحصائيات العالم"],
["The Deep Sea","https://neal.fun/deep-sea","استكشاف البحر"],
["Space Elevator","https://neal.fun/space-elevator","تجربة فضائية"],
["Infinite Craft","https://neal.fun/infinite-craft","لعبة تركيب"],
["Asteroids","https://asteroids.net","لعبة فضائية"],
["Internet Live Stats","https://www.internetlivestats.com","إحصائيات الإنترنت"]
]

};


/* =========================================================
   تحويل البيانات إلى siteData
   ========================================================= */

let siteData = [];

let nextId = 1;

Object.entries(DATA).forEach(([category, sites]) => {

    sites.forEach(site => {

        siteData.push({
            id: nextId++,
            name: site[0],
            url: site[1],
            category: category,
            description: site[2]
        });

    });

});


/* =========================================================
   STORAGE
   ========================================================= */

let favorites =
    JSON.parse(
        localStorage.getItem("webboxFavorites") || "[]"
    );

let visits =
    JSON.parse(
        localStorage.getItem("webboxVisits") || "{}"
    );

let recentSites =
    JSON.parse(
        localStorage.getItem("webboxRecent") || "[]"
    );

let currentView = "grid";


/* =========================================================
   START
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadTheme();

    populateCategorySelect();

    renderAll();

    setupEvents();

    showSection("home");

});


/* =========================================================
   EVENTS
   ========================================================= */

function setupEvents() {

    const search =
        document.getElementById("siteSearch");

    if (search) {
        search.addEventListener(
            "input",
            filterSiteList
        );
    }


    const category =
        document.getElementById("categorySelect");

    if (category) {
        category.addEventListener(
            "change",
            filterSiteList
        );
    }


    const sort =
        document.getElementById("sortSelect");

    if (sort) {
        sort.addEventListener(
            "change",
            filterSiteList
        );
    }


    const clear =
        document.getElementById("clearFilters");

    if (clear) {
        clear.addEventListener(
            "click",
            clearFilters
        );
    }


    const grid =
        document.getElementById("gridViewBtn");

    if (grid) {
        grid.addEventListener(
            "click",
            () => setViewMode("grid")
        );
    }


    const list =
        document.getElementById("listViewBtn");

    if (list) {
        list.addEventListener(
            "click",
            () => setViewMode("list")
        );
    }

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showSection(pageId) {

    const sections =
        document.querySelectorAll(
            "main > .page-section"
        );


    sections.forEach(section => {

        section.classList.remove("active");

        section.style.display = "none";

    });


    const target =
        document.getElementById(pageId);


    if (!target) {

        console.error(
            "WebBox: section not found:",
            pageId
        );

        return;

    }


    target.classList.add("active");

    target.style.display = "block";


    document
        .querySelectorAll(".main-nav .nav-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    const activeButton =
        document.querySelector(
            `.main-nav .nav-btn[onclick*="${pageId}"]`
        );


    if (activeButton) {
        activeButton.classList.add("active");
    }


    if (pageId === "categories")
        renderCategories();

    if (pageId === "sites")
        filterSiteList();

    if (pageId === "fun")
        renderFun();

    if (pageId === "gaming")
        renderGaming();

    if (pageId === "favorites")
        renderFavorites();

    if (pageId === "recent")
        renderRecent();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/*
   مهم:
   HTML الحالي عندك يستعمل webboxNavigate()
*/

window.webboxNavigate =
function(pageId, button = null) {

    showSection(pageId);

    if (button) {

        document
            .querySelectorAll(
                ".main-nav .nav-btn"
            )
            .forEach(btn =>
                btn.classList.remove("active")
            );

        button.classList.add("active");

    }

};


/* =========================================================
   RENDER ALL
   ========================================================= */

function renderAll() {

    renderStats();

    renderCategories();

    renderHomeCategories();

    renderFeatured();

    renderSites(siteData);

    renderFun();

    renderGaming();

    renderFavorites();

    renderRecent();

}


/* =========================================================
   STATS
   ========================================================= */

function renderStats() {

    const totalSites =
        document.getElementById("totalSites");

    const totalCategories =
        document.getElementById("totalCategories");

    const totalFavorites =
        document.getElementById("totalFavorites");

    const totalVisits =
        document.getElementById("totalVisits");


    if (totalSites)
        totalSites.textContent =
            siteData.length;


    if (totalCategories)
        totalCategories.textContent =
            Object.keys(CATEGORY_INFO).length;


    if (totalFavorites)
        totalFavorites.textContent =
            favorites.length;


    if (totalVisits) {

        const total =
            Object.values(visits)
                .reduce(
                    (sum, value) =>
                        sum + Number(value),
                    0
                );

        totalVisits.textContent =
            total;

    }

}


/* =========================================================
   CATEGORY SELECT
   ========================================================= */

function populateCategorySelect() {

    const select =
        document.getElementById(
            "categorySelect"
        );

    if (!select) return;


    select.innerHTML =
        `<option value="">كل التصنيفات</option>`;


    Object.entries(
        CATEGORY_INFO
    ).forEach(([key, category]) => {

        const option =
            document.createElement("option");

        option.value = key;

        option.textContent =
            `${category.icon} ${category.name}`;

        select.appendChild(option);

    });

}


/* =========================================================
   CATEGORIES
   ========================================================= */

function renderCategories() {

    const container =
        document.getElementById(
            "categoriesContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    Object.entries(
        CATEGORY_INFO
    ).forEach(([key, category]) => {

        const count =
            siteData.filter(
                site =>
                    site.category === key
            ).length;


        const card =
            document.createElement("div");

        card.className =
            "category-card";


        card.innerHTML = `

            <div class="category-icon">
                ${category.icon}
            </div>

            <h3>
                ${category.name}
            </h3>

            <p>
                ${category.description}
            </p>

            <span class="category-count">
                ${count} موقع
            </span>

        `;


        card.onclick = () => {

            showSection("sites");

            const select =
                document.getElementById(
                    "categorySelect"
                );

            if (select) {

                select.value = key;

                filterSiteList();

            }

        };


        container.appendChild(card);

    });

}


/* =========================================================
   HOME CATEGORIES
   ========================================================= */

function renderHomeCategories() {

    const container =
        document.getElementById(
            "homeCategories"
        );

    if (!container) return;


    container.innerHTML = "";


    Object.entries(
        CATEGORY_INFO
    ).forEach(([key, category]) => {

        const count =
            siteData.filter(
                site =>
                    site.category === key
            ).length;


        const card =
            document.createElement("div");

        card.className =
            "category-card";


        card.innerHTML = `

            <div class="category-icon">
                ${category.icon}
            </div>

            <h3>
                ${category.name}
            </h3>

            <span class="category-count">
                ${count} موقع
            </span>

        `;


        card.onclick = () => {

            showSection("sites");

            const select =
                document.getElementById(
                    "categorySelect"
                );

            if (select) {

                select.value = key;

                filterSiteList();

            }

        };


        container.appendChild(card);

    });

}


/* =========================================================
   SITE CARD
   ========================================================= */

function createSiteCard(site) {

    const category =
        CATEGORY_INFO[site.category];


    const favorite =
        favorites.includes(site.id);


    const visitCount =
        visits[site.id] || 0;


    const card =
        document.createElement("article");


    card.className =
        "site-card";


    card.innerHTML = `

        <div class="site-card-top">

            <div class="site-icon">
                ${category.icon}
            </div>

            <button
                class="favorite-btn ${favorite ? "active" : ""}"
                onclick="toggleFavorite(${site.id}, event)"
            >
                ${favorite ? "★" : "☆"}
            </button>

        </div>

        <div class="site-card-body">

            <span class="site-category">
                ${category.name}
            </span>

            <h3>
                ${escapeHTML(site.name)}
            </h3>

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
   SITES
   ========================================================= */

function renderSites(sites) {

    const container =
        document.getElementById(
            "sitesContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    container.className =
        currentView === "list"
            ? "sites-grid list-view"
            : "sites-grid";


    if (!sites.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>🔎</div>

                <h3>
                    لا توجد نتائج
                </h3>

                <p>
                    جرب كلمة بحث أخرى.
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
   FILTER
   ========================================================= */

function filterSiteList() {

    const search =
        (
            document.getElementById(
                "siteSearch"
            )?.value || ""
        )
        .trim()
        .toLowerCase();


    const category =
        document.getElementById(
            "categorySelect"
        )?.value || "";


    const sort =
        document.getElementById(
            "sortSelect"
        )?.value || "default";


    let results =
        siteData.filter(site => {

            const text =
                `${site.name} ${site.description}`
                .toLowerCase();


            const matchesSearch =
                !search ||
                text.includes(search);


            const matchesCategory =
                !category ||
                site.category === category;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    if (sort === "name") {

        results.sort((a, b) =>
            a.name.localeCompare(
                b.name
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
        document.getElementById(
            "resultText"
        );


    if (resultText) {

        resultText.textContent =
            `${results.length} موقع`;

    }

}


/* =========================================================
   CLEAR FILTERS
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
        category.value = "";


    if (sort)
        sort.value = "default";


    filterSiteList();

}


/* =========================================================
   MAIN SEARCH
   ========================================================= */

function handleMainSearch(event) {

    event.preventDefault();


    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) return;


    showSection("sites");


    const search =
        document.getElementById(
            "siteSearch"
        );


    if (search) {

        search.value =
            input.value.trim();

    }


    filterSiteList();

}


function quickSearch(query) {

    showSection("sites");


    const search =
        document.getElementById(
            "siteSearch"
        );


    if (search) {

        search.value = query;

    }


    filterSiteList();

}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(id, event) {

    if (event)
        event.stopPropagation();


    const index =
        favorites.indexOf(id);


    if (index === -1) {

        favorites.push(id);

        showToast(
            "⭐ تمت إضافة الموقع إلى المفضلة"
        );

    } else {

        favorites.splice(index, 1);

        showToast(
            "تمت إزالة الموقع من المفضلة"
        );

    }


    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );


    renderStats();

    renderFavorites();

    filterSiteList();

}


/* =========================================================
   FAVORITES PAGE
   ========================================================= */

function renderFavorites() {

    const container =
        document.getElementById(
            "favoritesContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    const sites =
        siteData.filter(
            site =>
                favorites.includes(site.id)
        );


    if (!sites.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>⭐</div>

                <h3>
                    لا توجد مواقع مفضلة
                </h3>

                <p>
                    اضغط على النجمة لإضافة موقع.
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
   RECENT
   ========================================================= */

function renderRecent() {

    const container =
        document.getElementById(
            "recentContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    const sites =
        recentSites
            .map(
                id =>
                    siteData.find(
                        site =>
                            site.id === id
                    )
            )
            .filter(Boolean);


    sites.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });


    if (!sites.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>🕘</div>

                <h3>
                    لا توجد مواقع حديثة
                </h3>

            </div>

        `;

    }

}


/* =========================================================
   FEATURED
   ========================================================= */

function renderFeatured() {

    const container =
        document.getElementById(
            "featuredContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    siteData
        .slice(0, 12)
        .forEach(site => {

            container.appendChild(
                createSiteCard(site)
            );

        });

}


/* =========================================================
   GAMING
   ========================================================= */

function renderGaming() {

    const container =
        document.getElementById(
            "gamingContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    siteData
        .filter(
            site =>
                site.category === "games"
        )
        .forEach(site => {

            container.appendChild(
                createSiteCard(site)
            );

        });

}


/* =========================================================
   FUN
   ========================================================= */

function renderFun() {

    const container =
        document.getElementById(
            "funContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    siteData
        .filter(
            site =>
                site.category === "fun"
        )
        .forEach(site => {

            container.appendChild(
                createSiteCard(site)
            );

        });

}


/* =========================================================
   OPEN SITE
   ========================================================= */

function openSite(id) {

    const site =
        siteData.find(
            item =>
                item.id === id
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
            recentId =>
                recentId !== id
        );


    recentSites.unshift(id);


    recentSites =
        recentSites.slice(0, 20);


    localStorage.setItem(
        "webboxRecent",
        JSON.stringify(recentSites)
    );


    renderStats();

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

function openModal(id) {

    const site =
        siteData.find(
            item =>
                item.id === id
        );


    if (!site) return;


    const modal =
        document.getElementById(
            "siteModal"
        );


    if (!modal) return;


    const category =
        CATEGORY_INFO[
            site.category
        ];


    const icon =
        document.getElementById(
            "modalIcon"
        );

    const title =
        document.getElementById(
            "modalTitle"
        );

    const categoryEl =
        document.getElementById(
            "modalCategory"
        );

    const description =
        document.getElementById(
            "modalDescription"
        );

    const modalVisits =
        document.getElementById(
            "modalVisits"
        );

    const openBtn =
        document.getElementById(
            "modalOpenBtn"
        );

    const favoriteBtn =
        document.getElementById(
            "modalFavoriteBtn"
        );

    const favorite =
        document.getElementById(
            "modalFavorite"
        );


    if (icon)
        icon.textContent =
            category.icon;


    if (title)
        title.textContent =
            site.name;


    if (categoryEl)
        categoryEl.textContent =
            category.name;


    if (description)
        description.textContent =
            site.description;


    if (modalVisits)
        modalVisits.textContent =
            `👁️ ${visits[id] || 0}`;


    if (openBtn) {

        openBtn.onclick =
            () => openSite(id);

    }


    if (favorite)
        favorite.textContent =
            favorites.includes(id)
                ? "★"
                : "☆";


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


    modal.style.display = "flex";

    modal.classList.add("open");

}


function closeModal() {

    const modal =
        document.getElementById(
            "siteModal"
        );


    if (!modal) return;


    modal.classList.remove("open");

    modal.style.display = "none";

}


/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

function toggleDarkMode() {

    document.body.classList.toggle(
        "light-mode"
    );


    const light =
        document.body.classList.contains(
            "light-mode"
        );


    localStorage.setItem(
        "webboxTheme",
        light ? "light" : "dark"
    );


    updateThemeButton();

}


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


function updateThemeButton() {

    const button =
        document.getElementById(
            "themeBtn"
        );


    if (!button) return;


    button.textContent =
        document.body.classList.contains(
            "light-mode"
        )
            ? "🌙"
            : "☀️";

}


/* =========================================================
   VIEW MODE
   ========================================================= */

function setViewMode(mode) {

    currentView = mode;


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


    const grid =
        document.getElementById(
            "gridViewBtn"
        );

    const list =
        document.getElementById(
            "listViewBtn"
        );


    if (grid)
        grid.classList.toggle(
            "active",
            mode === "grid"
        );


    if (list)
        list.classList.toggle(
            "active",
            mode === "list"
        );

}


/* =========================================================
   RANDOM
   ========================================================= */

function randomSite() {

    if (!siteData.length) return;


    const index =
        Math.floor(
            Math.random() *
            siteData.length
        );


    openSite(
        siteData[index].id
    );

}


/* =========================================================
   TOAST
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
   MOBILE MENU
   ========================================================= */

function toggleMobileMenu() {

    const menu =
        document.getElementById(
            "mobileNav"
        );


    if (!menu) return;


    menu.classList.toggle(
        "open"
    );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================================
   ESC لإغلاق النافذة
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
   EXPORTS
   ========================================================= */

window.showSection = showSection;
window.webboxNavigate = webboxNavigate;

window.toggleDarkMode =
    toggleDarkMode;

window.handleMainSearch =
    handleMainSearch;

window.quickSearch =
    quickSearch;

window.toggleFavorite =
    toggleFavorite;

window.openSite =
    openSite;

window.openModal =
    openModal;

window.closeModal =
    closeModal;

window.randomSite =
    randomSite;

window.toggleMobileMenu =
    toggleMobileMenu;

window.setViewMode =
    setViewMode;

window.filterSiteList =
    filterSiteList;

window.clearFilters =
    clearFilters;

window.renderCategories =
    renderCategories;

window.renderFavorites =
    renderFavorites;

window.renderFun =
    renderFun;

window.renderGaming =
    renderGaming;

window.renderRecent =
    renderRecent;


/* =========================================================
   END
   ========================================================= */
