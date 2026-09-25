/* =====================================================
   WEBBOX
   ===================================================== */


/* ================= DATA ================= */

const data = {

    games: [

        ["Poki",
        "https://poki.com/",
        "آلاف الألعاب المجانية مباشرة من المتصفح."],

        ["CrazyGames",
        "https://www.crazygames.com/",
        "مجموعة ضخمة من ألعاب المتصفح."],

        ["Scratch",
        "https://scratch.mit.edu/",
        "ألعاب ومشاريع تفاعلية يمكنك لعبها وصنعها."],

        ["GeoFS",
        "https://www.geo-fs.com/",
        "محاكي طيران يعمل مباشرة في المتصفح."],

        ["itch.io",
        "https://itch.io/games",
        "مجموعة ضخمة من الألعاب المستقلة."],

        ["Chess.com",
        "https://www.chess.com/",
        "العب الشطرنج وتدرب على مهاراتك."],

        ["Lichess",
        "https://lichess.org/",
        "منصة شطرنج مجانية."],

        ["2048",
        "https://2048game.com/",
        "لعبة الأرقام الشهيرة."],

        ["Sudoku",
        "https://sudoku.com/",
        "ألغاز سودوكو."],

        ["Jigsaw Explorer",
        "https://www.jigsawexplorer.com/",
        "ألغاز تركيب الصور."],

        ["Coolmath Games",
        "https://www.coolmathgames.com/",
        "ألعاب ألغاز ومهارات."],

        ["Miniclip",
        "https://www.miniclip.com/",
        "مجموعة من الألعاب."],

        ["Game Jolt",
        "https://gamejolt.com/games",
        "ألعاب ومشاريع من المطورين."],

        ["Pokémon Showdown",
        "https://pokemonshowdown.com/",
        "معارك Pokémon عبر المتصفح."]

    ],


    fun: [

        ["Neal.fun",
        "https://neal.fun/",
        "تجارب وألعاب تفاعلية غريبة وممتعة."],

        ["Quick Draw",
        "https://quickdraw.withgoogle.com/",
        "ارسم ودع الذكاء الاصطناعي يخمن."],

        ["Google Earth",
        "https://earth.google.com/web/",
        "استكشف العالم من المتصفح."],

        ["Google Arts & Culture",
        "https://artsandculture.google.com/",
        "استكشف الفن والمتاحف والثقافة."],

        ["Radio Garden",
        "https://radio.garden/",
        "استمع إلى محطات راديو حول العالم."],

        ["Earth Nullschool",
        "https://earth.nullschool.net/",
        "شاهد الرياح والطقس حول العالم."],

        ["Stellarium",
        "https://stellarium-web.org/",
        "استكشف النجوم والسماء."],

        ["WindowSwap",
        "https://www.window-swap.com/",
        "شاهد مناظر من نوافذ حول العالم."],

        ["The Deep Sea",
        "https://neal.fun/deep-sea/",
        "استكشف أعماق المحيط بطريقة تفاعلية."],

        ["Infinite Craft",
        "https://neal.fun/infinite-craft/",
        "ادمج العناصر واكتشف أشياء جديدة."],

        ["Little Alchemy",
        "https://littlealchemy2.com/",
        "ادمج العناصر لصنع عناصر جديدة."],

        ["Pointer Pointer",
        "https://pointerpointer.com/",
        "تجربة غريبة مع مؤشر الماوس."],

        ["Zoomquilt",
        "https://zoomquilt.org/",
        "تجربة بصرية مستمرة."],

        ["Patatap",
        "https://patatap.com/",
        "اصنع أصواتاً وحركات بلوحة المفاتيح."],

        ["Silk",
        "https://silk.kamihq.com/",
        "اصنع رسومات تفاعلية جميلة."]

    ],


    education: [

        ["Khan Academy",
        "https://www.khanacademy.org/",
        "دروس وتمارين مجانية."],

        ["Coursera",
        "https://www.coursera.org/",
        "دورات تعليمية عبر الإنترنت."],

        ["edX",
        "https://www.edx.org/",
        "دورات تعليمية."],

        ["MIT OpenCourseWare",
        "https://ocw.mit.edu/",
        "مواد دراسية من MIT."],

        ["WolframAlpha",
        "https://www.wolframalpha.com/",
        "محرك حساب ومعرفة."],

        ["Desmos",
        "https://www.desmos.com/calculator",
        "آلة حاسبة ورسوم بيانية."],

        ["GeoGebra",
        "https://www.geogebra.org/",
        "رياضيات ورسوم تفاعلية."],

        ["Wikipedia",
        "https://www.wikipedia.org/",
        "موسوعة مجانية."],

        ["Google Scholar",
        "https://scholar.google.com/",
        "البحث عن الأبحاث العلمية."],

        ["PhET",
        "https://phet.colorado.edu/",
        "محاكاة تفاعلية للعلوم."],

        ["Quizlet",
        "https://quizlet.com/",
        "بطاقات ومراجعة واختبارات."],

        ["Duolingo",
        "https://www.duolingo.com/",
        "تعلم اللغات بطريقة تفاعلية."],

        ["BBC Learning English",
        "https://www.bbc.co.uk/learningenglish",
        "تعلم اللغة الإنجليزية."],

        ["TypingClub",
        "https://www.typingclub.com/",
        "تعلم الكتابة السريعة."],

        ["FreeCodeCamp",
        "https://www.freecodecamp.org/",
        "تعلم البرمجة مجاناً."]

    ],


    books: [

        ["Project Gutenberg",
        "https://www.gutenberg.org/",
        "كتب إلكترونية مجانية."],

        ["Internet Archive",
        "https://archive.org/",
        "أرشيف رقمي ضخم."],

        ["Open Library",
        "https://openlibrary.org/",
        "مكتبة كتب على الإنترنت."],

        ["Google Books",
        "https://books.google.com/",
        "البحث عن الكتب."],

        ["Goodreads",
        "https://www.goodreads.com/",
        "اكتشاف الكتب."],

        ["ManyBooks",
        "https://manybooks.net/",
        "كتب إلكترونية."],

        ["Standard Ebooks",
        "https://standardebooks.org/",
        "كتب كلاسيكية مجانية."],

        ["LibriVox",
        "https://librivox.org/",
        "كتب صوتية من الملكية العامة."],

        ["Wikisource",
        "https://wikisource.org/",
        "مكتبة نصوص حرة."],

        ["OpenStax",
        "https://openstax.org/",
        "كتب تعليمية مفتوحة."]

    ],


    ai: [

        ["ChatGPT",
        "https://chatgpt.com/",
        "مساعد ذكي للكتابة والتعلم والبرمجة."],

        ["Gemini",
        "https://gemini.google.com/",
        "مساعد ذكاء اصطناعي من Google."],

        ["Microsoft Copilot",
        "https://copilot.microsoft.com/",
        "مساعد ذكاء اصطناعي."],

        ["Claude",
        "https://claude.ai/",
        "مساعد للكتابة والتحليل."],

        ["Perplexity",
        "https://www.perplexity.ai/",
        "بحث وإجابات مدعومة بالمصادر."],

        ["Hugging Face",
        "https://huggingface.co/",
        "نماذج وأدوات ذكاء اصطناعي."],

        ["Leonardo AI",
        "https://leonardo.ai/",
        "إنشاء صور بالذكاء الاصطناعي."],

        ["Adobe Firefly",
        "https://firefly.adobe.com/",
        "أدوات إبداعية بالذكاء الاصطناعي."],

        ["Canva AI",
        "https://www.canva.com/ai-image-generator/",
        "أدوات AI للتصميم."],

        ["DeepL",
        "https://www.deepl.com/",
        "ترجمة ومساعدة لغوية."],

        ["Grammarly",
        "https://www.grammarly.com/",
        "مساعدة في الكتابة."],

        ["Remove.bg",
        "https://www.remove.bg/",
        "إزالة خلفية الصور."],

        ["TinEye",
        "https://tineye.com/",
        "البحث العكسي عن الصور."],

        ["Otter",
        "https://otter.ai/",
        "تحويل الكلام إلى نص."],

        ["Gamma",
        "https://gamma.app/",
        "إنشاء عروض ومحتوى."]

    ],


    design: [

        ["Canva",
        "https://www.canva.com/",
        "تصميم الصور والعروض."],

        ["Figma",
        "https://www.figma.com/",
        "تصميم واجهات المواقع."],

        ["Photopea",
        "https://www.photopea.com/",
        "محرر صور يعمل في المتصفح."],

        ["Pixlr",
        "https://pixlr.com/",
        "تحرير الصور."],

        ["Adobe Express",
        "https://www.adobe.com/express/",
        "تصميم محتوى سريع."],

        ["Remove.bg",
        "https://www.remove.bg/",
        "إزالة خلفية الصور."],

        ["Coolors",
        "https://coolors.co/",
        "إنشاء مجموعات ألوان."],

        ["Unsplash",
        "https://unsplash.com/",
        "صور مجانية."],

        ["Pexels",
        "https://www.pexels.com/",
        "صور وفيديوهات مجانية."],

        ["Flaticon",
        "https://www.flaticon.com/",
        "أيقونات ورسومات."],

        ["Font Awesome",
        "https://fontawesome.com/",
        "أيقونات للمواقع."],

        ["Google Fonts",
        "https://fonts.google.com/",
        "خطوط مجانية."]

    ],


    video: [

        ["YouTube",
        "https://www.youtube.com/",
        "منصة الفيديو."],

        ["YouTube Studio",
        "https://studio.youtube.com/",
        "إدارة قناة YouTube."],

        ["CapCut",
        "https://www.capcut.com/",
        "تحرير الفيديو."],

        ["Canva Video",
        "https://www.canva.com/video-editor/",
        "تحرير الفيديو."],

        ["Adobe Express",
        "https://www.adobe.com/express/",
        "صناعة المحتوى."],

        ["VEED",
        "https://www.veed.io/",
        "محرر فيديو أونلاين."],

        ["Clipchamp",
        "https://clipchamp.com/",
        "تحرير الفيديو."],

        ["Kapwing",
        "https://www.kapwing.com/",
        "أدوات صناعة الفيديو."],

        ["Mixkit",
        "https://mixkit.co/",
        "فيديوهات ومؤثرات مجانية."],

        ["Pexels Videos",
        "https://www.pexels.com/videos/",
        "فيديوهات مجانية."]

    ],


    music: [

        ["Spotify",
        "https://open.spotify.com/",
        "استماع إلى الموسيقى."],

        ["YouTube Music",
        "https://music.youtube.com/",
        "استماع إلى الموسيقى."],

        ["SoundCloud",
        "https://soundcloud.com/",
        "اكتشاف الموسيقى."],

        ["Bandcamp",
        "https://bandcamp.com/",
        "اكتشاف موسيقى الفنانين."],

        ["Audiomack",
        "https://audiomack.com/",
        "استماع واكتشاف الموسيقى."],

        ["Radio Garden",
        "https://radio.garden/",
        "راديو من أنحاء العالم."],

        ["Musixmatch",
        "https://www.musixmatch.com/",
        "معلومات عن الأغاني."],

        ["Chosic",
        "https://www.chosic.com/",
        "اكتشاف الموسيقى."]

    ],


    programming: [

        ["GitHub",
        "https://github.com/",
        "استضافة المشاريع البرمجية."],

        ["CodePen",
        "https://codepen.io/",
        "تجربة HTML وCSS وJavaScript."],

        ["JSFiddle",
        "https://jsfiddle.net/",
        "تجربة JavaScript."],

        ["Replit",
        "https://replit.com/",
        "برمجة وتشغيل المشاريع أونلاين."],

        ["Stack Overflow",
        "https://stackoverflow.com/",
        "أسئلة وأجوبة البرمجة."],

        ["MDN",
        "https://developer.mozilla.org/",
        "مرجع تطوير المواقع."],

        ["W3Schools",
        "https://www.w3schools.com/",
        "دروس البرمجة."],

        ["FreeCodeCamp",
        "https://www.freecodecamp.org/",
        "تعلم البرمجة."],

        ["Godot",
        "https://godotengine.org/",
        "محرك ألعاب مفتوح المصدر."],

        ["Unity",
        "https://unity.com/",
        "محرك تطوير الألعاب."],

        ["DevDocs",
        "https://devdocs.io/",
        "توثيق برمجي سريع."],

        ["GitLab",
        "https://gitlab.com/",
        "استضافة المشاريع البرمجية."]

    ],


    tools: [

        ["Google Drive",
        "https://drive.google.com/",
        "تخزين الملفات."],

        ["Google Docs",
        "https://docs.google.com/",
        "كتابة المستندات."],

        ["Google Translate",
        "https://translate.google.com/",
        "ترجمة النصوص."],

        ["TinyWow",
        "https://tinywow.com/",
        "مجموعة أدوات للملفات."],

        ["iLovePDF",
        "https://www.ilovepdf.com/",
        "أدوات PDF."],

        ["Smallpdf",
        "https://smallpdf.com/",
        "أدوات PDF."],

        ["CloudConvert",
        "https://cloudconvert.com/",
        "تحويل الملفات."],

        ["Speedtest",
        "https://www.speedtest.net/",
        "اختبار سرعة الإنترنت."],

        ["QR Code Generator",
        "https://www.qr-code-generator.com/",
        "إنشاء QR Code."],

        ["VirusTotal",
        "https://www.virustotal.com/",
        "فحص الملفات والروابط."],

        ["Archive.org",
        "https://archive.org/",
        "أرشيف ومصادر رقمية."]

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


/* ================= BUILD DATA ================= */

const sites = [];


for (const category in data) {

    data[category].forEach(item => {

        sites.push({

            name: item[0],

            url: item[1],

            description: item[2],

            category,

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


/* ================= FAVORITES ================= */

let favorites =
    JSON.parse(
        localStorage.getItem("webbox-favorites") || "[]"
    );


function isFavorite(url) {

    return favorites.includes(url);

}


function toggleFavorite(url) {

    if (isFavorite(url)) {

        favorites =
            favorites.filter(
                item => item !== url
            );

        showToast("تم حذف الموقع من المفضلة");

    } else {

        favorites.push(url);

        showToast("تمت إضافة الموقع ⭐");

    }


    localStorage.setItem(
        "webbox-favorites",
        JSON.stringify(favorites)
    );


    updateStats();


    const active =
        document.querySelector(".section.active");


    if (active &&
        active.id === "sites") {

        filterSiteList();

    }


    if (active &&
        active.id === "favorites") {

        renderFavorites();

    }

}


/* ================= SECTION ================= */

function showSection(id) {

    document
        .querySelectorAll(".section")
        .forEach(section => {

            section.classList.remove("active");

        });


    const section =
        document.getElementById(id);


    if (section) {

        section.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    if (id === "favorites") {

        renderFavorites();

    }

}


/* ================= SITE CARD ================= */

function createSiteCard(site) {

    const favorite =
        isFavorite(site.url);


    return `

        <div class="site-card">

            <button
                class="favorite-button"
                onclick="toggleFavorite('${site.url}')"
                title="إضافة إلى المفضلة"
            >
                ${favorite ? "⭐" : "☆"}
            </button>


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

        </div>

    `;

}


/* ================= DISPLAY SITES ================= */

function displaySites(list) {

    const container =
        document.getElementById(
            "sitesContainer"
        );


    const resultText =
        document.getElementById(
            "resultText"
        );


    if (!container) return;


    resultText.textContent =
        `عرض ${list.length} موقع`;


    if (list.length === 0) {

        container.innerHTML = `

            <div class="empty">

                <div class="empty-icon">
                    😕
                </div>

                <h3>
                    لم نجد نتائج
                </h3>

                <p>
                    جرّب البحث بكلمة مختلفة
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


/* ================= FILTER ================= */

function filterCategory(category) {

    showSection("sites");


    document.getElementById(
        "siteSearch"
    ).value = "";


    document.getElementById(
        "categorySelect"
    ).value = category;


    filterSiteList();

}


function filterSiteList() {

    const search =
        document.getElementById(
            "siteSearch"
        )
        .value
        .toLowerCase()
        .trim();


    const category =
        document.getElementById(
            "categorySelect"
        ).value;


    const filtered =
        sites.filter(site => {

            const searchMatch =
                !search ||

                site.name
                    .toLowerCase()
                    .includes(search) ||

                site.description
                    .toLowerCase()
                    .includes(search) ||

                site.keywords
                    .includes(search);


            const categoryMatch =
                category === "all" ||
                site.category === category;


            return (
                searchMatch &&
                categoryMatch
            );

        });


    displaySites(filtered);

}


/* ================= SMART SEARCH ================= */

function smartSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    const query =
        input.value
            .toLowerCase()
            .trim();


    const results =
        document.getElementById(
            "smartResults"
        );


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
                    site.keywords
                        .includes(query)
                ) {

                    score += 3;

                }


                return {
                    site,
                    score
                };

            })

            .filter(
                item => item.score > 0
            )

            .sort(
                (a,b) =>
                    b.score - a.score
            )

            .slice(0,6);


    if (!found.length) {

        results.innerHTML = `

            <div class="search-result">
                😕 لم نجد نتائج مناسبة
            </div>

        `;

        return;

    }


    results.innerHTML =
        found
            .map(item => `

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
                            color:#777;
                            font-size:12px;
                            margin-top:4px;
                        ">

                            ${categoryNames[
                                item.site.category
                            ]}

                        </div>

                    </div>

                </div>

            `)
            .join("");

}


/* ================= ENTER ================= */

function handleSearchKey(event) {

    if (event.key !== "Enter")
        return;


    const query =
        document.getElementById(
            "searchInput"
        )
        .value
        .trim();


    if (!query) return;


    const found =
        sites.find(site =>
            site.keywords
                .includes(
                    query.toLowerCase()
                )
        );


    if (found) {

        openSite(found.url);

    }

}


/* ================= EXAMPLES ================= */

function useExample(text) {

    const input =
        document.getElementById(
            "searchInput"
        );


    input.value = text;

    smartSearch();

    input.focus();

}


/* ================= OPEN ================= */

function openSite(url) {

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ================= RANDOM ================= */

function randomSite() {

    const random =
        sites[
            Math.floor(
                Math.random() * sites.length
            )
        ];


    if (!random) return;


    showToast(
        `🎲 ${random.name}`
    );


    setTimeout(() => {

        openSite(random.url);

    }, 500);

}


/* ================= FEATURED ================= */

function renderFeatured() {

    const container =
        document.getElementById(
            "featuredContainer"
        );


    if (!container) return;


    const featured = [

        sites.find(
            site => site.name === "Poki"
        ),

        sites.find(
            site => site.name === "GeoFS"
        ),

        sites.find(
            site => site.name === "Neal.fun"
        ),

        sites.find(
            site => site.name === "ChatGPT"
        )

    ].filter(Boolean);


    container.innerHTML =
        featured.map(site => `

            <a
                href="${site.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="featured-card"
            >

                <div class="featured-icon">
                    ${site.icon}
                </div>

                <h3>
                    ${site.name}
                </h3>

                <p>
                    ${site.description}
                </p>

                <span class="open">
                    فتح الموقع →
                </span>

            </a>

        `).join("");

}


/* ================= FUN ================= */

function renderFun() {

    const container =
        document.getElementById(
            "funContainer"
        );


    if (!container) return;


    const funSites =
        sites.filter(
            site =>
                site.category === "fun"
        );


    container.innerHTML =
        funSites.map(site => `

            <a
                href="${site.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="fun-card"
            >

                <div class="fun-card-icon">
                    ${site.icon}
                </div>

                <h3>
                    ${site.name}
                </h3>

                <p>
                    ${site.description}
                </p>

                <span class="card-link">
                    جرب الآن →
                </span>

            </a>

        `).join("");

}


/* ================= GAMING ================= */

function renderGaming() {

    const container =
        document.getElementById(
            "gamingContainer"
        );


    if (!container) return;


    const gaming =
        sites.filter(
            site =>
                site.category === "games"
        );


    container.innerHTML =
        gaming.map(site => `

            <a
                href="${site.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="game-card"
            >

                <div class="game-card-icon">
                    ${site.icon}
                </div>

                <h3>
                    ${site.name}
                </h3>

                <p>
                    ${site.description}
                </p>

                <span class="card-link">
                    فتح →
                </span>

            </a>

        `).join("");

}


/* ================= FAVORITES ================= */

function renderFavorites() {

    const container =
        document.getElementById(
            "favoritesContainer"
        );


    if (!container) return;


    const favoriteSites =
        sites.filter(site =>
            favorites.includes(
                site.url
            )
        );


    if (!favoriteSites.length) {

        container.innerHTML = `

            <div class="empty">

                <div class="empty-icon">
                    ⭐
                </div>

                <h3>
                    لا توجد مواقع مفضلة
                </h3>

                <p>
                    اضغط ☆ على أي موقع لحفظه هنا
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        favoriteSites
            .map(createSiteCard)
            .join("");

}


/* ================= FAVORITES BUTTON ================= */

function showFavorites() {

    showSection("favorites");

    renderFavorites();

}


/* ================= STATS ================= */

function updateStats() {

    const siteCount =
        document.getElementById(
            "siteCount"
        );


    const favoriteCount =
        document.getElementById(
            "favoriteCount"
        );


    if (siteCount) {

        siteCount.textContent =
            sites.length;

    }


    if (favoriteCount) {

        favoriteCount.textContent =
            favorites.length;

    }

}


/* ================= DARK MODE ================= */

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark"
    );


    const dark =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        "webbox-dark",
        dark ? "1" : "0"
    );


    updateThemeButton();

}


function updateThemeButton() {

    const button =
        document.getElementById(
            "themeButton"
        );


    if (!button) return;


    const dark =
        document.body.classList.contains(
            "dark"
        );


    button.textContent =
        dark ? "☀️" : "🌙";

}


/* ================= TOAST ================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2000);

}


/* ================= INITIALIZE ================= */

if (
    localStorage.getItem(
        "webbox-dark"
    ) === "1"
) {

    document.body.classList.add(
        "dark"
    );

}


updateThemeButton();

updateStats();

renderFeatured();

renderFun();

renderGaming();

displaySites(sites);
