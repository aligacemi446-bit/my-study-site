/* =========================================================
   WebBox
   ========================================================= */


/* ================= DATA ================= */

const data = {

    games: [

        ["Poki", "https://poki.com/", "أكثر من ألف لعبة مجانية مباشرة من المتصفح."],

        ["CrazyGames", "https://www.crazygames.com/", "مجموعة كبيرة من ألعاب المتصفح."],

        ["Scratch", "https://scratch.mit.edu/", "ألعاب ومشاريع تفاعلية يمكنك لعبها وصنعها."],

        ["GeoFS", "https://www.geo-fs.com/", "محاكي طيران يعمل مباشرة من المتصفح."],

        ["itch.io Games", "https://itch.io/games", "مجموعة ضخمة من الألعاب المستقلة."],

        ["Chess", "https://www.chess.com/", "لعب الشطرنج والتدرب عليه."],

        ["Lichess", "https://lichess.org/", "لعب الشطرنج مجاناً عبر الإنترنت."],

        ["2048", "https://2048game.com/", "لعبة الأرقام الشهيرة 2048."],

        ["Sudoku", "https://sudoku.com/", "ألغاز سودوكو متنوعة."],

        ["Jigsaw Explorer", "https://www.jigsawexplorer.com/", "ألغاز تركيب الصور."],

        ["Coolmath Games", "https://www.coolmathgames.com/", "ألعاب ألغاز ومهارات."],

        ["Miniclip", "https://www.miniclip.com/", "مجموعة من ألعاب المتصفح."],

        ["Game Jolt", "https://gamejolt.com/games", "ألعاب ومشاريع من المطورين."],

        ["Khan Academy Games", "https://www.khanacademy.org/", "تعلم بطريقة تفاعلية."],

        ["Google Games", "https://www.google.com/search?q=google+games", "العثور على ألعاب وتجارب Google."]

    ],


    fun: [

        ["Neal.fun", "https://neal.fun/", "تجارب وألعاب تفاعلية غريبة وممتعة."],

        ["Quick Draw", "https://quickdraw.withgoogle.com/", "ارسم ودع الذكاء الاصطناعي يحاول التخمين."],

        ["Google Earth", "https://earth.google.com/web/", "استكشف العالم من المتصفح."],

        ["Google Arts & Culture", "https://artsandculture.google.com/", "استكشف الفن والمتاحف والثقافة."],

        ["Radio Garden", "https://radio.garden/", "استمع إلى محطات راديو من أنحاء العالم."],

        ["Earth Nullschool", "https://earth.nullschool.net/", "شاهد الرياح والطقس حول العالم."],

        ["Stellarium Web", "https://stellarium-web.org/", "استكشف السماء والنجوم."],

        ["WindowSwap", "https://www.window-swap.com/", "شاهد مناظر من نوافذ حول العالم."],

        ["The Deep Sea", "https://neal.fun/deep-sea/", "انزل إلى أعماق المحيط بطريقة تفاعلية."],

        ["Infinite Craft", "https://neal.fun/infinite-craft/", "جرب صناعة عناصر جديدة بطريقة تفاعلية."],

        ["Little Alchemy", "https://littlealchemy2.com/", "ادمج العناصر واكتشف عناصر جديدة."],

        ["Pointer Pointer", "https://pointerpointer.com/", "جرب تحريك مؤشر الماوس واكتشف المفاجأة."],

        ["Zoomquilt", "https://zoomquilt.org/", "تجربة بصرية لا تنتهي."],

        ["Patatap", "https://patatap.com/", "اصنع أصواتاً وحركات باستخدام لوحة المفاتيح."],

        ["Silk", "https://silk.kamihq.com/", "اصنع رسومات جميلة بطريقة تفاعلية."]

    ],


    education: [

        ["Khan Academy", "https://www.khanacademy.org/", "دروس وتمارين مجانية."],

        ["Coursera", "https://www.coursera.org/", "دورات تعليمية من جامعات ومؤسسات."],

        ["edX", "https://www.edx.org/", "دورات تعليمية عبر الإنترنت."],

        ["MIT OpenCourseWare", "https://ocw.mit.edu/", "مواد دراسية من MIT."],

        ["WolframAlpha", "https://www.wolframalpha.com/", "محرك حساب ومعرفة."],

        ["Desmos", "https://www.desmos.com/calculator", "آلة حاسبة ورسوم بيانية."],

        ["GeoGebra", "https://www.geogebra.org/", "رياضيات ورسوم تفاعلية."],

        ["Wikipedia", "https://www.wikipedia.org/", "موسوعة مجانية."],

        ["Britannica", "https://www.britannica.com/", "موسوعة ومعلومات تعليمية."],

        ["Google Scholar", "https://scholar.google.com/", "البحث عن الأبحاث العلمية."],

        ["PhET", "https://phet.colorado.edu/", "محاكاة تفاعلية للعلوم."],

        ["Quizlet", "https://quizlet.com/", "بطاقات ومراجعة واختبارات."],

        ["Duolingo", "https://www.duolingo.com/", "تعلم اللغات بطريقة تفاعلية."],

        ["BBC Learning English", "https://www.bbc.co.uk/learningenglish", "تعلم اللغة الإنجليزية."],

        ["TypingClub", "https://www.typingclub.com/", "تعلم الكتابة السريعة على لوحة المفاتيح."]

    ],


    books: [

        ["Project Gutenberg", "https://www.gutenberg.org/", "كتب إلكترونية مجانية."],

        ["Internet Archive", "https://archive.org/", "أرشيف رقمي ضخم."],

        ["Open Library", "https://openlibrary.org/", "مكتبة كتب على الإنترنت."],

        ["Google Books", "https://books.google.com/", "البحث عن الكتب."],

        ["Goodreads", "https://www.goodreads.com/", "اكتشاف الكتب وقراءة التقييمات."],

        ["ManyBooks", "https://manybooks.net/", "مجموعة كتب إلكترونية."],

        ["Standard Ebooks", "https://standardebooks.org/", "كتب كلاسيكية مجانية."],

        ["LibriVox", "https://librivox.org/", "كتب صوتية من الملكية العامة."],

        ["Wikisource", "https://wikisource.org/", "مكتبة نصوص حرة."],

        ["OpenStax", "https://openstax.org/", "كتب تعليمية مفتوحة."]

    ],


    ai: [

        ["ChatGPT", "https://chatgpt.com/", "مساعد ذكي للكتابة والتعلم والبرمجة."],

        ["Google Gemini", "https://gemini.google.com/", "مساعد ذكاء اصطناعي من Google."],

        ["Microsoft Copilot", "https://copilot.microsoft.com/", "مساعد ذكاء اصطناعي."],

        ["Claude", "https://claude.ai/", "مساعد للكتابة والتحليل."],

        ["Perplexity", "https://www.perplexity.ai/", "بحث وإجابات مدعومة بالمصادر."],

        ["Hugging Face", "https://huggingface.co/", "نماذج وأدوات ذكاء اصطناعي."],

        ["Leonardo AI", "https://leonardo.ai/", "إنشاء صور باستخدام الذكاء الاصطناعي."],

        ["Adobe Firefly", "https://firefly.adobe.com/", "أدوات إبداعية بالذكاء الاصطناعي."],

        ["Canva AI", "https://www.canva.com/ai-image-generator/", "أدوات AI للتصميم."],

        ["DeepL", "https://www.deepl.com/", "ترجمة ومساعدة لغوية."],

        ["Grammarly", "https://www.grammarly.com/", "مساعدة في الكتابة باللغة الإنجليزية."],

        ["Remove.bg", "https://www.remove.bg/", "إزالة خلفية الصور."],

        ["TinEye", "https://tineye.com/", "البحث العكسي عن الصور."],

        ["Otter", "https://otter.ai/", "تحويل الكلام إلى نص."],

        ["Gamma", "https://gamma.app/", "إنشاء عروض ومحتوى بالذكاء الاصطناعي."]

    ],


    design: [

        ["Canva", "https://www.canva.com/", "تصميم صور وعروض ومحتوى."],

        ["Figma", "https://www.figma.com/", "تصميم واجهات ومواقع."],

        ["Photopea", "https://www.photopea.com/", "محرر صور يعمل في المتصفح."],

        ["Pixlr", "https://pixlr.com/", "تحرير الصور."],

        ["Adobe Express", "https://www.adobe.com/express/", "تصميم محتوى سريع."],

        ["Remove.bg", "https://www.remove.bg/", "إزالة خلفية الصور."],

        ["Coolors", "https://coolors.co/", "إنشاء ألوان متناسقة."],

        ["Unsplash", "https://unsplash.com/", "صور مجانية عالية الجودة."],

        ["Pexels", "https://www.pexels.com/", "صور وفيديوهات مجانية."],

        ["Flaticon", "https://www.flaticon.com/", "أيقونات ورسومات."],

        ["Font Awesome", "https://fontawesome.com/", "أيقونات للمواقع."],

        ["Google Fonts", "https://fonts.google.com/", "خطوط مجانية للمواقع."]

    ],


    video: [

        ["YouTube", "https://www.youtube.com/", "منصة الفيديو الشهيرة."],

        ["YouTube Studio", "https://studio.youtube.com/", "إدارة قناة YouTube."],

        ["CapCut", "https://www.capcut.com/", "تحرير الفيديو."],

        ["Canva Video", "https://www.canva.com/video-editor/", "تحرير الفيديو أونلاين."],

        ["Adobe Express Video", "https://www.adobe.com/express/create/video", "إنشاء وتعديل الفيديو."],

        ["VEED", "https://www.veed.io/", "محرر فيديو على الإنترنت."],

        ["Clipchamp", "https://clipchamp.com/", "تحرير الفيديو."],

        ["Kapwing", "https://www.kapwing.com/", "أدوات صناعة الفيديو."],

        ["Mixkit", "https://mixkit.co/", "فيديوهات ومؤثرات مجانية."],

        ["Pexels Videos", "https://www.pexels.com/videos/", "فيديوهات مجانية."]

    ],


    music: [

        ["Spotify", "https://open.spotify.com/", "استماع إلى الموسيقى والبودكاست."],

        ["YouTube Music", "https://music.youtube.com/", "استماع إلى الموسيقى."],

        ["SoundCloud", "https://soundcloud.com/", "اكتشاف الموسيقى."],

        ["Bandcamp", "https://bandcamp.com/", "اكتشاف موسيقى الفنانين."],

        ["Audiomack", "https://audiomack.com/", "استماع واكتشاف الموسيقى."],

        ["Radio Garden", "https://radio.garden/", "استمع إلى الراديو حول العالم."],

        ["Musixmatch", "https://www.musixmatch.com/", "معلومات وكلمات الأغاني."],

        ["Chosic", "https://www.chosic.com/", "اكتشاف موسيقى وقوائم."],

        ["Free Music Archive", "https://freemusicarchive.org/", "موسيقى متاحة للاستخدام حسب الترخيص."],

        ["Internet Archive Audio", "https://archive.org/details/audio", "أرشيف صوتي."]

    ],


    programming: [

        ["GitHub", "https://github.com/", "استضافة المشاريع البرمجية."],

        ["GitHub Codespaces", "https://github.com/features/codespaces", "بيئة تطوير عبر المتصفح."],

        ["CodePen", "https://codepen.io/", "تجربة HTML وCSS وJavaScript."],

        ["JSFiddle", "https://jsfiddle.net/", "تجربة JavaScript."],

        ["Replit", "https://replit.com/", "برمجة وتشغيل المشاريع أونلاين."],

        ["Stack Overflow", "https://stackoverflow.com/", "أسئلة وأجوبة البرمجة."],

        ["MDN", "https://developer.mozilla.org/", "مرجع HTML وCSS وJavaScript."],

        ["W3Schools", "https://www.w3schools.com/", "دروس البرمجة وتطوير المواقع."],

        ["FreeCodeCamp", "https://www.freecodecamp.org/", "تعلم البرمجة مجاناً."],

        ["Godot", "https://godotengine.org/", "محرك ألعاب مفتوح المصدر."],

        ["Unity", "https://unity.com/", "محرك تطوير الألعاب."],

        ["DevDocs", "https://devdocs.io/", "توثيق برمجي سريع."]

    ],


    tools: [

        ["Google Drive", "https://drive.google.com/", "تخزين الملفات."],

        ["Google Docs", "https://docs.google.com/", "كتابة المستندات."],

        ["Google Translate", "https://translate.google.com/", "ترجمة النصوص."],

        ["TinyWow", "https://tinywow.com/", "مجموعة أدوات للملفات."],

        ["iLovePDF", "https://www.ilovepdf.com/", "أدوات PDF."],

        ["Smallpdf", "https://smallpdf.com/", "أدوات PDF."],

        ["CloudConvert", "https://cloudconvert.com/", "تحويل الملفات."],

        ["Speedtest", "https://www.speedtest.net/", "اختبار سرعة الإنترنت."],

        ["Have I Been Pwned", "https://haveibeenpwned.com/", "فحص ما إذا كان بريد إلكتروني ظهر في تسريبات معروفة."],

        ["QR Code Generator", "https://www.qr-code-generator.com/", "إنشاء QR Code."],

        ["VirusTotal", "https://www.virustotal.com/", "فحص الملفات والروابط بحثاً عن تهديدات."],

        ["Archive.org", "https://archive.org/", "أرشيف ومصادر رقمية."]

    ]

};


/* ================= CATEGORY NAMES ================= */

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


/* ================= ICONS ================= */

const icons = {

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


/* ================= BUILD SITE LIST ================= */

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


/* ================= SHOW SECTION ================= */

function showSection(id) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= DISPLAY SITES ================= */

function displaySites(list) {

    const container =
        document.getElementById("sitesContainer");

    const resultText =
        document.getElementById("resultText");


    if (!container) return;


    container.innerHTML = "";


    resultText.textContent =
        `عرض ${list.length} موقع`;


    if (list.length === 0) {

        container.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
                color:var(--muted);
            ">

                <div style="font-size:50px">
                    😕
                </div>

                <h3>
                    لا توجد نتائج
                </h3>

                <p>
                    جرب كلمة بحث مختلفة
                </p>

            </div>

        `;

        return;
    }


    list.forEach(site => {

        const card =
            document.createElement("div");

        card.className = "site-card";


        card.innerHTML = `

            <div class="site-top">

                <div class="site-icon">
                    ${site.icon}
                </div>

                <h3>
                    ${site.name}
                </h3>

            </div>


            <span class="site-category">
                ${categoryNames[site.category]}
            </span>


            <p>
                ${site.description}
            </p>


            <a
                class="site-link"
                href="${site.url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                فتح الموقع →
            </a>

        `;


        container.appendChild(card);

    });

}


/* ================= CATEGORY FILTER ================= */

function filterCategory(category) {

    showSection("sites");


    document.getElementById("siteSearch").value = "";


    document.getElementById("categorySelect").value =
        category;


    filterSiteList();

}


/* ================= SITE SEARCH ================= */

function filterSiteList() {

    const search =
        document.getElementById("siteSearch")
        .value
        .toLowerCase()
        .trim();


    const category =
        document.getElementById("categorySelect")
        .value;


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


/* ================= SMART SEARCH ================= */

function smartSearch() {

    const input =
        document.getElementById("searchInput");

    const query =
        input.value.toLowerCase().trim();


    const results =
        document.getElementById("smartResults");


    if (!query) {

        results.innerHTML = "";

        return;
    }


    const found =
        sites
            .map(site => {

                let score = 0;


                if (
                    site.name
                    .toLowerCase()
                    .includes(query)
                ) {
                    score += 10;
                }


                if (
                    site.description
                    .toLowerCase()
                    .includes(query)
                ) {
                    score += 5;
                }


                if (
                    site.keywords.includes(query)
                ) {
                    score += 3;
                }


                return {
                    site,
                    score
                };

            })
            .filter(item => item.score > 0)
            .sort((a,b) => b.score - a.score)
            .slice(0, 6);


    if (found.length === 0) {

        results.innerHTML = `

            <div class="search-result">
                😕 لم نجد نتائج مناسبة
            </div>

        `;

        return;
    }


    results.innerHTML =
        found.map(item => `

            <div
                class="search-result"
                onclick="openSite('${item.site.url}')"
            >

                <span style="font-size:24px">
                    ${item.site.icon}
                </span>

                <div>

                    <strong>
                        ${item.site.name}
                    </strong>

                    <div style="
                        font-size:12px;
                        color:#777;
                        margin-top:3px;
                    ">

                        ${categoryNames[item.site.category]}

                    </div>

                </div>

            </div>

        `).join("");

}


/* ================= OPEN SITE ================= */

function openSite(url) {

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ================= EXAMPLE SEARCH ================= */

function useExample(text) {

    const input =
        document.getElementById("searchInput");

    input.value = text;

    smartSearch();

    input.focus();

}


/* ================= ENTER KEY ================= */

function handleSearchKey(event) {

    if (event.key === "Enter") {

        const query =
            document
                .getElementById("searchInput")
                .value
                .trim();


        if (!query) return;


        const first =
            sites.find(site =>
                site.keywords.includes(
                    query.toLowerCase()
                )
            );


        if (first) {

            openSite(first.url);

        }

    }

}


/* ================= DARK MODE ================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");


    const dark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "webbox-dark",
        dark ? "1" : "0"
    );

}


/* ================= LOAD DARK MODE ================= */

if (
    localStorage.getItem("webbox-dark") === "1"
) {

    document.body.classList.add("dark");

}


/* ================= START ================= */

displaySites(sites);
