const categoryNames = {
    games: "🎮 الألعاب",
    education: "🎓 التعليم",
    books: "📚 الكتب",
    ai: "🤖 الذكاء الاصطناعي",
    design: "🎨 التصميم",
    video: "🎬 الفيديو",
    music: "🎵 الموسيقى",
    programming: "💻 البرمجة",
    tools: "🛠️ الأدوات"
};


/* =========================
   DATA
========================= */

const data = {

games: [
["Poki","https://poki.com","ألعاب مجانية في المتصفح"],
["CrazyGames","https://www.crazygames.com","ألعاب مجانية أونلاين"],
["itch.io","https://itch.io","ألعاب مستقلة"],
["Armor Games","https://armorgames.com","ألعاب متصفح"],
["Newgrounds","https://www.newgrounds.com","ألعاب ورسوم"],
["Kongregate","https://www.kongregate.com","ألعاب متصفح"],
["Miniclip","https://www.miniclip.com","ألعاب متنوعة"],
["Y8","https://www.y8.com","ألعاب مجانية"],
["Game Jolt","https://gamejolt.com","ألعاب مستقلة"],
["Addicting Games","https://www.addictinggames.com","ألعاب متصفح"],
["Coolmath Games","https://www.coolmathgames.com","ألعاب تعليمية وترفيهية"],
["Friv","https://www.friv.com","ألعاب متصفح"],
["Lagged","https://lagged.com","ألعاب HTML5"],
["Poki Kids","https://poki.com","ألعاب بسيطة"],
["Silvergames","https://www.silvergames.com","ألعاب مجانية"],
["CrazyGames Kids","https://www.crazygames.com","ألعاب متصفح"],
["GameFlare","https://www.gameflare.com","ألعاب أونلاين"],
["Kizi","https://kizi.com","ألعاب متصفح"],
["Not Doppler","https://www.notdoppler.com","ألعاب فلاش ومتصفح"],
["Mousebreaker","https://www.mousebreaker.com","ألعاب رياضية"],
["FreeOnlineGames","https://www.freeonlinegames.com","ألعاب مجانية"],
["Agame","https://www.agame.com","ألعاب متصفح"],
["SilverGames","https://www.silvergames.com","ألعاب مجانية"],
["TwoPlayerGames","https://www.twoplayergames.org","ألعاب لاعبين"],
["Gamesgames","https://www.gamesgames.com","ألعاب أونلاين"],
["PrimaryGames","https://www.primarygames.com","ألعاب تعليمية"],
["PBS Kids Games","https://pbskids.org/games","ألعاب تعليمية"],
["ABCya","https://www.abcya.com","ألعاب تعليمية"],
["Math Playground","https://www.mathplayground.com","ألعاب رياضيات"],
["Funbrain","https://www.funbrain.com","ألعاب وأنشطة تعليمية"]
],

education: [
["Khan Academy","https://www.khanacademy.org","تعلم مجاني"],
["Coursera","https://www.coursera.org","دورات تعليمية"],
["edX","https://www.edx.org","دورات جامعية"],
["Udemy","https://www.udemy.com","دورات متنوعة"],
["MIT OpenCourseWare","https://ocw.mit.edu","دورات MIT"],
["OpenLearn","https://www.open.edu/openlearn","تعلم مجاني"],
["Alison","https://alison.com","دورات مجانية"],
["Codecademy","https://www.codecademy.com","تعلم البرمجة"],
["freeCodeCamp","https://www.freecodecamp.org","برمجة مجانية"],
["W3Schools","https://www.w3schools.com","تعلم الويب"],
["GeeksforGeeks","https://www.geeksforgeeks.org","برمجة وعلوم حاسوب"],
["Brilliant","https://brilliant.org","رياضيات وعلوم"],
["Duolingo","https://www.duolingo.com","تعلم اللغات"],
["Quizlet","https://quizlet.com","بطاقات ومراجعة"],
["TED-Ed","https://ed.ted.com","فيديوهات تعليمية"],
["Academic Earth","https://academicearth.org","محاضرات جامعية"],
["CK-12","https://www.ck12.org","كتب ومواد تعليمية"],
["Saylor Academy","https://learn.saylor.org","دورات مجانية"],
["OpenStax","https://openstax.org","كتب تعليمية مجانية"],
["PhET","https://phet.colorado.edu","محاكاة علمية"],
["Desmos","https://www.desmos.com","رياضيات ورسوم بيانية"],
["WolframAlpha","https://www.wolframalpha.com","حسابات ومعرفة"],
["Google Scholar","https://scholar.google.com","أبحاث علمية"],
["Microsoft Learn","https://learn.microsoft.com","تعلم تقنيات Microsoft"],
["AWS Skill Builder","https://skillbuilder.aws","تعلم AWS"],
["IBM SkillsBuild","https://skillsbuild.org","مهارات تقنية"],
["Cisco Networking Academy","https://www.netacad.com","شبكات وتقنية"],
["Harvard Online","https://pll.harvard.edu","دورات Harvard"],
["Stanford Online","https://online.stanford.edu","دورات Stanford"],
["FutureLearn","https://www.futurelearn.com","دورات أونلاين"]
],

books: [
["Project Gutenberg","https://www.gutenberg.org","كتب مجانية"],
["Google Books","https://books.google.com","البحث عن الكتب"],
["Internet Archive","https://archive.org","أرشيف وكتب"],
["Open Library","https://openlibrary.org","مكتبة رقمية"],
["ManyBooks","https://manybooks.net","كتب مجانية"],
["Standard Ebooks","https://standardebooks.org","كتب كلاسيكية"],
["OpenStax","https://openstax.org","كتب تعليمية"],
["Wikisource","https://wikisource.org","نصوص وكتب"],
["HathiTrust","https://www.hathitrust.org","مكتبة رقمية"],
["LibriVox","https://librivox.org","كتب صوتية"],
["BookBub","https://www.bookbub.com","اكتشاف الكتب"],
["Goodreads","https://www.goodreads.com","اكتشاف الكتب"],
["Open Textbook Library","https://open.umn.edu/opentextbooks","كتب مفتوحة"],
["Directory of Open Access Books","https://www.doabooks.org","كتب أكاديمية"],
["DOAJ","https://doaj.org","مجلات وأبحاث مفتوحة"],
["Feedbooks","https://www.feedbooks.com","كتب إلكترونية"],
["Smashwords","https://www.smashwords.com","كتب إلكترونية"],
["Scribd","https://www.scribd.com","مكتبة رقمية"],
["Wattpad","https://www.wattpad.com","قصص وكتابات"],
["Royal Road","https://www.royalroad.com","روايات وقصص"],
["Archive.org Books","https://archive.org/details/texts","كتب وأرشيف"],
["Read Print","https://www.readprint.com","كتب كلاسيكية"],
["Classic Reader","https://www.classicreader.com","كتب كلاسيكية"],
["Planet eBook","https://www.planetebook.com","كتب كلاسيكية"],
["Free-eBooks","https://www.free-ebooks.net","كتب إلكترونية"],
["Bookboon","https://bookboon.com","كتب تعليمية"],
["OAPEN","https://www.oapen.org","كتب أكاديمية"],
["JSTOR","https://www.jstor.org","أبحاث وكتب"],
["SpringerLink","https://link.springer.com","كتب وأبحاث"],
["Oxford Academic","https://academic.oup.com","كتب وأبحاث أكاديمية"]
],

ai: [
["ChatGPT","https://chatgpt.com","مساعد ذكاء اصطناعي"],
["Google Gemini","https://gemini.google.com","مساعد Google AI"],
["Microsoft Copilot","https://copilot.microsoft.com","مساعد Microsoft"],
["Claude","https://claude.ai","مساعد ذكاء اصطناعي"],
["Perplexity","https://www.perplexity.ai","بحث بالذكاء الاصطناعي"],
["DeepSeek","https://chat.deepseek.com","مساعد AI"],
["Grok","https://grok.com","مساعد AI"],
["Poe","https://poe.com","منصة نماذج AI"],
["Hugging Face","https://huggingface.co","نماذج AI"],
["Leonardo AI","https://leonardo.ai","توليد الصور"],
["Adobe Firefly","https://firefly.adobe.com","ذكاء اصطناعي للتصميم"],
["Ideogram","https://ideogram.ai","توليد الصور"],
["Krea","https://www.krea.ai","أدوات AI للصور"],
["Runway","https://runwayml.com","فيديو بالذكاء الاصطناعي"],
["ElevenLabs","https://elevenlabs.io","صوت بالذكاء الاصطناعي"],
["Gamma","https://gamma.app","إنشاء عروض ومستندات"],
["NotebookLM","https://notebooklm.google.com","مساعد للبحث والملفات"],
["Canva AI","https://www.canva.com","تصميم بالذكاء الاصطناعي"],
["QuillBot","https://quillbot.com","إعادة صياغة وكتابة"],
["Grammarly","https://www.grammarly.com","مساعدة في الكتابة"],
["Otter","https://otter.ai","تفريغ وتحويل الكلام"],
["Perchance AI","https://perchance.org","أدوات AI"],
["Replicate","https://replicate.com","تشغيل نماذج AI"],
["Together AI","https://www.together.ai","نماذج AI"],
["Groq","https://groq.com","نماذج واستدلال AI"],
["Mistral","https://mistral.ai","ذكاء اصطناعي"],
["Cohere","https://cohere.com","نماذج AI"],
["AI21 Labs","https://www.ai21.com","أدوات لغوية AI"],
["Character.AI","https://character.ai","شخصيات محادثة AI"],
["Meta AI","https://www.meta.ai","مساعد Meta AI"]
],

design: [
["Canva","https://www.canva.com","تصميم سهل"],
["Adobe Express","https://www.adobe.com/express","تصميم سريع"],
["Photopea","https://www.photopea.com","محرر صور"],
["Figma","https://www.figma.com","تصميم واجهات"],
["Framer","https://www.framer.com","تصميم مواقع"],
["Pixlr","https://pixlr.com","تحرير الصور"],
["GIMP","https://www.gimp.org","تحرير الصور"],
["Krita","https://krita.org","الرسم الرقمي"],
["Inkscape","https://inkscape.org","رسومات متجهة"],
["Sketch","https://www.sketch.com","تصميم واجهات"],
["Penpot","https://penpot.app","تصميم مفتوح المصدر"],
["Visme","https://www.visme.co","تصميم عروض"],
["VistaCreate","https://create.vista.com","تصميم محتوى"],
["Snappa","https://snappa.com","تصميم سريع"],
["Desygner","https://desygner.com","تصميم جرافيك"],
["Remove.bg","https://www.remove.bg","إزالة الخلفية"],
["Cleanup.pictures","https://cleanup.pictures","إزالة عناصر من الصور"],
["Upscale.media","https://www.upscale.media","تكبير الصور"],
["TinyPNG","https://tinypng.com","ضغط الصور"],
["Squoosh","https://squoosh.app","ضغط الصور"],
["Coolors","https://coolors.co","اختيار الألوان"],
["Adobe Color","https://color.adobe.com","ألوان"],
["Unsplash","https://unsplash.com","صور مجانية"],
["Pexels","https://www.pexels.com","صور وفيديو"],
["Pixabay","https://pixabay.com","صور ووسائط"],
["Freepik","https://www.freepik.com","موارد تصميم"],
["Flaticon","https://www.flaticon.com","أيقونات"],
["Font Awesome","https://fontawesome.com","أيقونات"],
["Google Fonts","https://fonts.google.com","خطوط"],
["DaFont","https://www.dafont.com","خطوط"]
],

video: [
["YouTube","https://www.youtube.com","فيديوهات"],
["YouTube Studio","https://studio.youtube.com","إدارة قناة YouTube"],
["Vimeo","https://vimeo.com","استضافة فيديو"],
["Dailymotion","https://www.dailymotion.com","فيديوهات"],
["Twitch","https://www.twitch.tv","بث مباشر"],
["CapCut","https://www.capcut.com","تحرير الفيديو"],
["Canva Video","https://www.canva.com/video-editor","تحرير الفيديو"],
["VEED","https://www.veed.io","تحرير فيديو أونلاين"],
["Clipchamp","https://clipchamp.com","محرر فيديو"],
["Adobe Express Video","https://www.adobe.com/express/create/video","تحرير فيديو"],
["InVideo","https://invideo.io","إنشاء فيديو"],
["Kapwing","https://www.kapwing.com","تحرير فيديو"],
["FlexClip","https://www.flexclip.com","صناعة فيديو"],
["Animoto","https://animoto.com","صناعة فيديو"],
["Renderforest","https://www.renderforest.com","فيديو وأنيميشن"],
["Lumen5","https://lumen5.com","تحويل النص لفيديو"],
["Descript","https://www.descript.com","تحرير فيديو وصوت"],
["DaVinci Resolve","https://www.blackmagicdesign.com/products/davinciresolve","مونتاج احترافي"],
["OBS Studio","https://obsproject.com","تسجيل وبث"],
["Shotcut","https://www.shotcut.org","تحرير فيديو"],
["OpenShot","https://www.openshot.org","تحرير فيديو"],
["Kdenlive","https://kdenlive.org","مونتاج"],
["VEGAS","https://www.vegascreativesoftware.com","مونتاج"],
["Wondershare Filmora","https://filmora.wondershare.com","تحرير فيديو"],
["Pictory","https://pictory.ai","فيديو بالذكاء الاصطناعي"],
["OpusClip","https://www.opus.pro","تحويل الفيديو لمقاطع"],
["HeyGen","https://www.heygen.com","فيديو AI"],
["Synthesia","https://www.synthesia.io","فيديو AI"],
["Pika","https://pika.art","فيديو AI"],
["Viggle","https://viggle.ai","تحريك الشخصيات"]
],

music: [
["Spotify","https://open.spotify.com","استماع للموسيقى"],
["YouTube Music","https://music.youtube.com","موسيقى"],
["SoundCloud","https://soundcloud.com","موسيقى ومقاطع"],
["Bandcamp","https://bandcamp.com","موسيقى مستقلة"],
["Apple Music","https://music.apple.com","موسيقى"],
["Deezer","https://www.deezer.com","استماع للموسيقى"],
["Tidal","https://tidal.com","موسيقى"],
["Amazon Music","https://music.amazon.com","موسيقى"],
["Audiomack","https://audiomack.com","موسيقى"],
["Mixcloud","https://www.mixcloud.com","Mixes وDJ"],
["Jamendo","https://www.jamendo.com","موسيقى مستقلة"],
["Free Music Archive","https://freemusicarchive.org","موسيقى مفتوحة"],
["Musopen","https://musopen.org","موسيقى كلاسيكية"],
["Internet Archive Audio","https://archive.org/details/audio","أرشيف صوتي"],
["Last.fm","https://www.last.fm","اكتشاف الموسيقى"],
["Genius","https://genius.com","معلومات عن الأغاني"],
["Discogs","https://www.discogs.com","قاعدة بيانات موسيقى"],
["AllMusic","https://www.allmusic.com","معلومات موسيقية"],
["Songsterr","https://www.songsterr.com","Tabs موسيقية"],
["Ultimate Guitar","https://www.ultimate-guitar.com","Tabs وChords"],
["Chordify","https://chordify.net","تحليل أكوردات"],
["Audiotool","https://www.audiotool.com","صناعة الموسيقى"],
["Soundtrap","https://www.soundtrap.com","استوديو موسيقي"],
["BandLab","https://www.bandlab.com","صناعة الموسيقى"],
["Splice","https://splice.com","عينات موسيقية"],
["Looperman","https://www.looperman.com","Loops وSamples"],
["BeatStars","https://www.beatstars.com","Beats"],
["SoundClick","https://www.soundclick.com","موسيقى مستقلة"],
["ReverbNation","https://www.reverbnation.com","فنانين وموسيقى"],
["Radio Garden","https://radio.garden","محطات راديو العالم"]
],

programming: [
["GitHub","https://github.com","استضافة الكود"],
["GitLab","https://gitlab.com","Git وDevOps"],
["Bitbucket","https://bitbucket.org","استضافة Git"],
["CodePen","https://codepen.io","تجربة HTML CSS JS"],
["JSFiddle","https://jsfiddle.net","تجربة JavaScript"],
["Replit","https://replit.com","برمجة أونلاين"],
["Stack Overflow","https://stackoverflow.com","أسئلة البرمجة"],
["MDN","https://developer.mozilla.org","توثيق الويب"],
["W3Schools","https://www.w3schools.com","تعلم البرمجة"],
["freeCodeCamp","https://www.freecodecamp.org","تعلم البرمجة"],
["Codecademy","https://www.codecademy.com","دورات برمجة"],
["HackerRank","https://www.hackerrank.com","تحديات برمجية"],
["LeetCode","https://leetcode.com","تحديات برمجة"],
["Codewars","https://www.codewars.com","تحديات برمجة"],
["Codeforces","https://codeforces.com","برمجة تنافسية"],
["CodeChef","https://www.codechef.com","برمجة تنافسية"],
["Project Euler","https://projecteuler.net","مسائل برمجية"],
["Exercism","https://exercism.org","تمارين برمجة"],
["Kaggle","https://www.kaggle.com","بيانات وAI"],
["Google Colab","https://colab.research.google.com","Python أونلاين"],
["Observable","https://observablehq.com","JavaScript وبيانات"],
["StackBlitz","https://stackblitz.com","بيئة تطوير ويب"],
["CodeSandbox","https://codesandbox.io","تطوير ويب"],
["Glitch","https://glitch.com","مشاريع ويب"],
["JS Bin","https://jsbin.com","تجربة كود"],
["Dev.to","https://dev.to","مجتمع المطورين"],
["Hashnode","https://hashnode.com","مدونات تقنية"],
["DevDocs","https://devdocs.io","توثيق البرمجة"],
["npm","https://www.npmjs.com","حزم JavaScript"],
["PyPI","https://pypi.org","حزم Python"]
],

tools: [
["Google Translate","https://translate.google.com","ترجمة"],
["TinyWow","https://tinywow.com","أدوات ملفات"],
["Smallpdf","https://smallpdf.com","أدوات PDF"],
["iLovePDF","https://www.ilovepdf.com","أدوات PDF"],
["PDF24","https://tools.pdf24.org","أدوات PDF"],
["ILoveIMG","https://www.iloveimg.com","أدوات الصور"],
["TinyPNG","https://tinypng.com","ضغط الصور"],
["Remove.bg","https://www.remove.bg","إزالة الخلفية"],
["QR Code Generator","https://www.qr-code-generator.com","إنشاء QR"],
["QR Code Monkey","https://www.qrcode-monkey.com","إنشاء QR"],
["Google Drive","https://drive.google.com","تخزين الملفات"],
["Dropbox","https://www.dropbox.com","تخزين الملفات"],
["OneDrive","https://onedrive.live.com","تخزين الملفات"],
["WeTransfer","https://wetransfer.com","إرسال الملفات"],
["MEGA","https://mega.io","تخزين الملفات"],
["Speedtest","https://www.speedtest.net","اختبار سرعة الإنترنت"],
["Fast","https://fast.com","اختبار سرعة الإنترنت"],
["DownDetector","https://downdetector.com","فحص الأعطال"],
["Time.is","https://time.is","الوقت العالمي"],
["WorldTimeBuddy","https://www.worldtimebuddy.com","تحويل المناطق الزمنية"],
["Calculator.net","https://www.calculator.net","حاسبات"],
["Desmos","https://www.desmos.com/calculator","آلة حاسبة ورسوم"],
["WolframAlpha","https://www.wolframalpha.com","حسابات"],
["Convertio","https://convertio.co","تحويل الملفات"],
["CloudConvert","https://cloudconvert.com","تحويل الملفات"],
["Zamzar","https://www.zamzar.com","تحويل الملفات"],
["URL Shortener","https://tinyurl.com","اختصار الروابط"],
["Pastebin","https://pastebin.com","مشاركة النصوص"],
["Notion","https://www.notion.so","ملاحظات وتنظيم"],
["Trello","https://trello.com","تنظيم المهام"]
]

};


/* =========================
   BUILD SITE LIST
========================= */

const icons = {
    games: "🎮",
    education: "🎓",
    books: "📚",
    ai: "🤖",
    design: "🎨",
    video: "🎬",
    music: "🎵",
    programming: "💻",
    tools: "🛠️"
};

const sites = [];

for (const category in data) {

    data[category].forEach(item => {

        sites.push({
            name: item[0],
            url: item[1],
            description: item[2],
            category: category,
            icon: icons[category],
            keywords: (
                item[0] +
                " " +
                item[2] +
                " " +
                categoryNames[category]
            ).toLowerCase()
        });

    });

}


/* =========================
   SECTIONS
========================= */

function showSection(id) {

    document.querySelectorAll(".section")
        .forEach(section => section.classList.remove("active"));

    const section = document.getElementById(id);

    if (section) {
        section.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   DISPLAY SITES
========================= */

function displaySites(list) {

    const container = document.getElementById("sitesContainer");

    if (!container) return;

    container.innerHTML = "";

    list.forEach(site => {

        const card = document.createElement("div");

        card.className = "site-card";

        card.innerHTML = `
            <div class="site-icon">${site.icon}</div>

            <h3>${site.name}</h3>

            <p>${site.description}</p>

            <span class="badge">
                ${categoryNames[site.category]}
            </span>

            <a href="${site.url}"
               target="_blank"
               rel="noopener noreferrer">
                فتح الموقع ↗
            </a>
        `;

        container.appendChild(card);

    });

    document.getElementById("resultText").textContent =
        `عرض ${list.length} موقع`;
}


/* =========================
   CATEGORY FILTER
========================= */

function filterCategory(category) {

    showSection("sites");

    document.getElementById("siteSearch").value = "";

    document.getElementById("categorySelect").value = category;

    filterSiteList();
}


function filterSiteList() {

    const search =
        document.getElementById("siteSearch")
            .value
            .toLowerCase()
            .trim();

    const category =
        document.getElementById("categorySelect").value;

    const filtered = sites.filter(site => {

        const matchesSearch =
            !search ||
            site.name.toLowerCase().includes(search) ||
            site.description.toLowerCase().includes(search) ||
            site.keywords.includes(search);

        const matchesCategory =
            category === "all" ||
            site.category === category;

        return matchesSearch && matchesCategory;

    });

    displaySites(filtered);
}


/* =========================
   SMART SEARCH
========================= */

const intentKeywords = {

    games: [
        "لعبة", "العاب", "ألعاب",
        "game", "games", "لعب",
        "play", "gaming"
    ],

    education: [
        "تعلم", "دراسة", "دروس",
        "تعليم", "school", "study",
        "learn", "course", "courses"
    ],

    books: [
        "كتاب", "كتب", "قراءة",
        "رواية", "book", "books",
        "read", "reading"
    ],

    ai: [
        "ذكاء", "ذكاء اصطناعي",
        "ai", "artificial intelligence",
        "chatbot", "بوت"
    ],

    design: [
        "تصميم", "صورة", "صور",
        "جرافيك", "design",
        "photo", "image", "graphics"
    ],

    video: [
        "فيديو", "مونتاج",
        "تحرير فيديو", "video",
        "edit", "editing",
        "montage"
    ],

    music: [
        "موسيقى", "اغنية", "أغنية",
        "صوت", "music", "song",
        "audio"
    ],

    programming: [
        "برمجة", "كود", "موقع",
        "جافاسكريبت", "بايثون",
        "programming", "code",
        "coding", "javascript",
        "python", "html", "css"
    ],

    tools: [
        "أداة", "أدوات", "تحويل",
        "pdf", "ترجمة", "ضغط",
        "tools", "convert",
        "converter", "translate"
    ]

};


function understandQuery(query) {

    query = query.toLowerCase();

    const categories = [];

    for (const category in intentKeywords) {

        for (const word of intentKeywords[category]) {

            if (query.includes(word)) {

                categories.push(category);
                break;

            }

        }

    }

    return [...new Set(categories)];
}


function calculateScore(site, query, categories) {

    let score = 0;

    const q = query.toLowerCase();

    if (site.name.toLowerCase().includes(q)) {
        score += 20;
    }

    if (site.description.toLowerCase().includes(q)) {
        score += 10;
    }

    if (site.keywords.includes(q)) {
        score += 8;
    }

    if (categories.includes(site.category)) {
        score += 15;
    }

    return score;
}


function smartSearch() {

    const input =
        document.getElementById("searchInput");

    const query =
        input.value.toLowerCase().trim();

    const suggestions =
        document.getElementById("suggestions");

    const smartResults =
        document.getElementById("smartResults");

    if (!query) {

        suggestions.innerHTML = "";
        smartResults.innerHTML = "";

        return;
    }

    const categories =
        understandQuery(query);

    const scored = sites
        .map(site => ({
            site,
            score: calculateScore(site, query, categories)
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);


    /* Suggestions */

    suggestions.innerHTML = scored
        .slice(0, 5)
        .map(item => `
            <div
                class="suggestion"
                onclick="openSite('${item.site.url}')"
            >
                ${item.site.icon}
                ${item.site.name}
            </div>
        `)
        .join("");


    /* Smart results */

    smartResults.innerHTML = scored
        .slice(0, 6)
        .map(item => `

            <div class="smart-card">

                <strong>
                    ${item.site.icon}
                    ${item.site.name}
                </strong>

                <p>
                    ${item.site.description}
                </p>

                <small>
                    ${categoryNames[item.site.category]}
                </small>

            </div>

        `)
        .join("");

}


function showAllSearchResults() {

    const query =
        document.getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    if (!query) {

        showSection("sites");

        displaySites(sites);

        return;
    }

    const categories =
        understandQuery(query);

    const results = sites
        .map(site => ({
            site,
            score: calculateScore(site, query, categories)
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.site);

    showSection("sites");

    document.getElementById("siteSearch").value = query;

    document.getElementById("categorySelect").value = "all";

    displaySites(
        results.length ? results : sites
    );
}


/* =========================
   EXAMPLES
========================= */

function useExample(text) {

    const input =
        document.getElementById("searchInput");

    input.value = text;

    smartSearch();

}


/* =========================
   ENTER KEY
========================= */

function handleSearchKey(event) {

    if (event.key === "Enter") {
        showAllSearchResults();
    }

}


/* =========================
   OPEN SITE
========================= */

function openSite(url) {

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================
   DARK MODE
========================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "webbox-dark",
        document.body.classList.contains("dark")
    );

}


if (
    localStorage.getItem("webbox-dark") === "true"
) {
    document.body.classList.add("dark");
}


/* =========================
   INITIAL LOAD
========================= */

displaySites(sites);
