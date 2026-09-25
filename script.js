// ==========================================
// 🌐 WebBox - Main JavaScript
// ==========================================

// ==========================================
// 📚 مواقع WebBox
// ==========================================

const data = {

    // 🎮 الألعاب
    games: [
        [
            "Minecraft",
            "https://www.minecraft.net/",
            "الموقع الرسمي لـ Minecraft: عالم مفتوح للبناء والاستكشاف واللعب."
        ],

        [
            "Eaglercraft",
            "https://eaglercraft.com/fr",
            "العب Minecraft مباشرة من المتصفح عبر Eaglercraft."
        ],

        [
            "Poki",
            "https://poki.com/",
            "آلاف الألعاب المجانية التي تعمل مباشرة في المتصفح."
        ],

        [
            "CrazyGames",
            "https://www.crazygames.com/",
            "مجموعة ضخمة من الألعاب التي تعمل مباشرة في المتصفح."
        ],

        [
            "Scratch",
            "https://scratch.mit.edu/",
            "اصنع ألعابك وقصصك ورسومك المتحركة بنفسك."
        ],

        [
            "GeoFS",
            "https://www.geo-fs.com/",
            "محاكي طيران يعمل مباشرة من المتصفح."
        ],

        [
            "itch.io",
            "https://itch.io/games",
            "منصة ضخمة للألعاب المستقلة."
        ],

        [
            "Chess.com",
            "https://www.chess.com/",
            "العب الشطرنج وتعلم واستمتع بالمباريات."
        ],

        [
            "Lichess",
            "https://lichess.org/",
            "شطرنج مجاني ومفتوح المصدر."
        ],

        [
            "2048",
            "https://play2048.co/",
            "لعبة الأرقام الشهيرة 2048."
        ],

        [
            "Sudoku",
            "https://sudoku.com/",
            "العب Sudoku مباشرة من المتصفح."
        ],

        [
            "Jigsaw Explorer",
            "https://www.jigsawexplorer.com/",
            "ألغاز الصور الممتعة."
        ],

        [
            "Coolmath Games",
            "https://www.coolmathgames.com/",
            "ألعاب متنوعة وممتعة."
        ],

        [
            "Miniclip",
            "https://www.miniclip.com/",
            "مجموعة ألعاب مجانية على الإنترنت."
        ],

        [
            "Game Jolt",
            "https://gamejolt.com/games",
            "اكتشف ألعاباً مستقلة ومجتمعات اللاعبين."
        ],

        [
            "Pokémon Showdown",
            "https://pokemonshowdown.com/",
            "معارك Pokémon مباشرة في المتصفح."
        ]
    ],


    // 😂 مواقع ممتعة
    fun: [
        [
            "Neal.fun",
            "https://neal.fun/",
            "مجموعة كبيرة من التجارب التفاعلية الغريبة والممتعة."
        ],

        [
            "Quick Draw",
            "https://quickdraw.withgoogle.com/",
            "ارسم شيئاً وحاول أن يجعل الذكاء الاصطناعي يتعرف عليه."
        ],

        [
            "Google Earth",
            "https://earth.google.com/",
            "استكشف العالم من جهازك."
        ],

        [
            "Radio Garden",
            "https://radio.garden/",
            "استمع إلى محطات راديو من جميع أنحاء العالم."
        ],

        [
            "Stellarium",
            "https://stellarium-web.org/",
            "استكشف النجوم والكواكب في السماء."
        ],

        [
            "WindowSwap",
            "https://www.window-swap.com/",
            "شاهد مناظر من نوافذ أشخاص حول العالم."
        ],

        [
            "Little Alchemy",
            "https://littlealchemy.com/",
            "اخلط العناصر واكتشف عناصر جديدة."
        ],

        [
            "Pointer Pointer",
            "https://pointerpointer.com/",
            "حرّك مؤشر الماوس وشاهد ما سيحدث."
        ],

        [
            "Zoomquilt",
            "https://zoomquilt.org/",
            "رحلة لا نهائية عبر صورة متحركة."
        ],

        [
            "Patatap",
            "https://patatap.com/",
            "اضغط على المفاتيح لصنع أصوات وتأثيرات."
        ],

        [
            "Silk",
            "https://weavesilk.com/",
            "ارسم أشكالاً فنية جميلة باستخدام الفأرة."
        ]
    ],


    // 📚 التعليم
    education: [
        [
            "Khan Academy",
            "https://www.khanacademy.org/",
            "دروس مجانية في الرياضيات والعلوم والعديد من المواد."
        ],

        [
            "Coursera",
            "https://www.coursera.org/",
            "دورات تعليمية من جامعات ومؤسسات مختلفة."
        ],

        [
            "edX",
            "https://www.edx.org/",
            "تعلم من جامعات ومؤسسات عالمية."
        ],

        [
            "Duolingo",
            "https://www.duolingo.com/",
            "تعلم اللغات بطريقة تفاعلية."
        ],

        [
            "WolframAlpha",
            "https://www.wolframalpha.com/",
            "محرك حساب ومعرفة يساعد في حل المسائل."
        ],

        [
            "Wikipedia",
            "https://www.wikipedia.org/",
            "موسوعة ضخمة تحتوي على معلومات في مختلف المجالات."
        ]
    ],


    // 📖 الكتب
    books: [
        [
            "Project Gutenberg",
            "https://www.gutenberg.org/",
            "مكتبة ضخمة من الكتب الإلكترونية المجانية."
        ],

        [
            "Internet Archive",
            "https://archive.org/",
            "مكتبة رقمية ضخمة للكتب والمواد المختلفة."
        ],

        [
            "Open Library",
            "https://openlibrary.org/",
            "كتالوج ضخم للكتب حول العالم."
        ]
    ],


    // 🤖 الذكاء الاصطناعي
    ai: [
        [
            "ChatGPT",
            "https://chatgpt.com/",
            "مساعد ذكاء اصطناعي للمحادثة والتعلم والبرمجة."
        ],

        [
            "Google Gemini",
            "https://gemini.google.com/",
            "مساعد ذكاء اصطناعي من Google."
        ],

        [
            "Microsoft Copilot",
            "https://copilot.microsoft.com/",
            "مساعد ذكاء اصطناعي من Microsoft."
        ],

        [
            "Claude",
            "https://claude.ai/",
            "مساعد ذكاء اصطناعي للمحادثة والكتابة والبرمجة."
        ],

        [
            "Perplexity",
            "https://www.perplexity.ai/",
            "محرك بحث يعتمد على الذكاء الاصطناعي."
        ]
    ],


    // 🎨 التصميم
    design: [
        [
            "Canva",
            "https://www.canva.com/",
            "صمم صوراً وعروضاً ومنشورات بسهولة."
        ],

        [
            "Figma",
            "https://www.figma.com/",
            "أداة احترافية لتصميم واجهات التطبيقات والمواقع."
        ],

        [
            "Photopea",
            "https://www.photopea.com/",
            "محرر صور متقدم يعمل مباشرة من المتصفح."
        ],

        [
            "Remove.bg",
            "https://www.remove.bg/",
            "إزالة خلفية الصور بسهولة."
        ],

        [
            "Pixlr",
            "https://pixlr.com/",
            "محرر صور أونلاين."
        ]
    ],


    // 🎬 الفيديو
    video: [
        [
            "YouTube",
            "https://www.youtube.com/",
            "شاهد وشارك ملايين الفيديوهات."
        ],

        [
            "CapCut",
            "https://www.capcut.com/",
            "محرر فيديو سهل للاستخدام."
        ],

        [
            "VEED",
            "https://www.veed.io/",
            "تحرير الفيديو مباشرة من المتصفح."
        ],

        [
            "Clipchamp",
            "https://clipchamp.com/",
            "محرر فيديو من Microsoft."
        ]
    ],


    // 🎵 الموسيقى
    music: [
        [
            "Spotify",
            "https://open.spotify.com/",
            "استمع إلى الموسيقى والبودكاست."
        ],

        [
            "SoundCloud",
            "https://soundcloud.com/",
            "اكتشف الموسيقى والأغاني من الفنانين."
        ],

        [
            "YouTube Music",
            "https://music.youtube.com/",
            "استمع إلى الموسيقى عبر YouTube."
        ],

        [
            "Bandcamp",
            "https://bandcamp.com/",
            "اكتشف موسيقى الفنانين المستقلين."
        ]
    ],


    // 💻 البرمجة
    programming: [
        [
            "GitHub",
            "https://github.com/",
            "منصة لاستضافة المشاريع البرمجية والتعاون عليها."
        ],

        [
            "CodePen",
            "https://codepen.io/",
            "اكتب وجرب HTML وCSS وJavaScript مباشرة."
        ],

        [
            "JSFiddle",
            "https://jsfiddle.net/",
            "بيئة لتجربة JavaScript وHTML وCSS."
        ],

        [
            "W3Schools",
            "https://www.w3schools.com/",
            "تعلم HTML وCSS وJavaScript والبرمجة."
        ],

        [
            "MDN Web Docs",
            "https://developer.mozilla.org/",
            "مرجع شامل لتقنيات الويب."
        ],

        [
            "Replit",
            "https://replit.com/",
            "برمج وشغل المشاريع مباشرة من المتصفح."
        ]
    ],


    // 🛠️ الأدوات
    tools: [
        [
            "Google Translate",
            "https://translate.google.com/",
            "ترجمة النصوص بين العديد من اللغات."
        ],

        [
            "TinyWow",
            "https://tinywow.com/",
            "مجموعة كبيرة من الأدوات للملفات والصور."
        ],

        [
            "iLovePDF",
            "https://www.ilovepdf.com/",
            "أدوات PDF مثل الدمج والتحويل والضغط."
        ],

        [
            "QR Code Generator",
            "https://www.qr-code-generator.com/",
            "أنشئ QR Code بسهولة."
        ],

        [
            "Speedtest",
            "https://www.speedtest.net/",
            "اختبر سرعة اتصال الإنترنت."
        ],

        [
            "Google Drive",
            "https://drive.google.com/",
            "تخزين الملفات والوصول إليها عبر الإنترنت."
        ]
    ]
};


// ==========================================
// 🏷️ أسماء الأقسام
// ==========================================

const categoryNames = {
    games: "الألعاب",
    fun: "الترفيه",
    education: "التعليم",
    books: "الكتب",
    ai: "الذكاء الاصطناعي",
    design: "التصميم",
    video: "الفيديو",
    music: "الموسيقى",
    programming: "البرمجة",
    tools: "الأدوات"
};


// ==========================================
// 🔥 أيقونات الأقسام
// ==========================================

const categoryIcons = {
    games: "🎮",
    fun: "😂",
    education: "📚",
    books: "📖",
    ai: "🤖",
    design: "🎨",
    video: "🎬",
    music: "🎵",
    programming: "💻",
    tools: "🛠️"
};


// ==========================================
// 📦 تحويل البيانات إلى قائمة واحدة
// ==========================================

let sites = [];

Object.keys(data).forEach(category => {

    data[category].forEach(item => {

        sites.push({
            name: item[0],
            url: item[1],
            description: item[2],
            category: category
        });

    });

});


// ==========================================
// ⭐ المفضلة
// ==========================================

let favorites = JSON.parse(
    localStorage.getItem("webboxFavorites")
) || [];


// ==========================================
// 🌙 الوضع الليلي
// ==========================================

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "webboxDarkMode",
        isDark ? "true" : "false"
    );

    updateThemeButton();

    showToast(
        isDark
            ? "🌙 تم تفعيل الوضع الليلي"
            : "☀️ تم تفعيل الوضع النهاري"
    );
}


function updateThemeButton() {

    const button =
        document.getElementById("darkModeBtn");

    if (!button) return;

    const isDark =
        document.body.classList.contains("dark");

    button.textContent =
        isDark ? "☀️" : "🌙";
}


// ==========================================
// 🧭 التنقل بين الأقسام
// ==========================================

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(".page-section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const target =
        document.getElementById(sectionId);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// 🃏 إنشاء بطاقة موقع
// ==========================================

function createSiteCard(site) {

    const isFavorite =
        favorites.includes(site.url);

    const card =
        document.createElement("div");

    card.className = "site-card";

    card.innerHTML = `

        <div class="site-card-top">

            <div class="site-icon">
                ${categoryIcons[site.category] || "🌐"}
            </div>

            <button
                class="favorite-btn ${isFavorite ? "active" : ""}"
                onclick="toggleFavorite('${site.url}')"
                title="المفضلة"
            >
                ${isFavorite ? "❤️" : "🤍"}
            </button>

        </div>

        <h3>${site.name}</h3>

        <p>${site.description}</p>

        <div class="site-card-bottom">

            <span class="site-category">
                ${categoryNames[site.category]}
            </span>

            <button
                class="open-btn"
                onclick="openSite('${site.url}')"
            >
                فتح 🚀
            </button>

        </div>
    `;

    return card;
}


// ==========================================
// 📋 عرض المواقع
// ==========================================

function displaySites(list = sites) {

    const container =
        document.getElementById("sitesContainer");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <div>😕</div>
                <h3>لم نجد أي موقع</h3>
                <p>جرب كلمة بحث مختلفة.</p>
            </div>
        `;

        updateResultText(0);

        return;
    }

    list.forEach(site => {
        container.appendChild(
            createSiteCard(site)
        );
    });

    updateResultText(list.length);
}


// ==========================================
// 🔢 عدد النتائج
// ==========================================

function updateResultText(count) {

    const resultText =
        document.getElementById("resultText");

    if (!resultText) return;

    resultText.textContent =
        `تم العثور على ${count} موقع`;
}


// ==========================================
// 🔍 البحث في المواقع
// ==========================================

function filterSiteList() {

    const input =
        document.getElementById("siteSearch");

    const category =
        document.getElementById("categorySelect");

    const query =
        input
            ? input.value.toLowerCase().trim()
            : "";

    const selectedCategory =
        category
            ? category.value
            : "all";

    const filtered =
        sites.filter(site => {

            const matchesSearch =
                site.name
                    .toLowerCase()
                    .includes(query)

                ||

                site.description
                    .toLowerCase()
                    .includes(query);

            const matchesCategory =
                selectedCategory === "all"
                ||
                site.category === selectedCategory;

            return matchesSearch &&
                   matchesCategory;
        });

    displaySites(filtered);
}


// ==========================================
// 🧠 البحث الذكي
// ==========================================

function smartSearch() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("smartResults");

    if (!input || !results) return;

    const query =
        input.value.toLowerCase().trim();

    results.innerHTML = "";

    if (!query) {
        results.style.display = "none";
        return;
    }

    const filtered =
        sites.filter(site => {

            return (
                site.name
                    .toLowerCase()
                    .includes(query)

                ||

                site.description
                    .toLowerCase()
                    .includes(query)

                ||

                categoryNames[site.category]
                    .toLowerCase()
                    .includes(query)
            );

        }).slice(0, 6);


    if (filtered.length === 0) {

        results.innerHTML = `
            <div class="smart-no-result">
                لا توجد نتائج 😕
            </div>
        `;

        results.style.display = "block";

        return;
    }


    filtered.forEach(site => {

        const item =
            document.createElement("div");

        item.className = "smart-result";

        item.innerHTML = `

            <span>
                ${categoryIcons[site.category]}
            </span>

            <div>
                <strong>${site.name}</strong>
                <small>
                    ${categoryNames[site.category]}
                </small>
            </div>
        `;

        item.onclick = () => {
            openSite(site.url);
        };

        results.appendChild(item);

    });

    results.style.display = "block";
}


// ==========================================
// ⌨️ زر Enter في البحث
// ==========================================

function handleSearchKey(event) {

    if (event.key === "Enter") {

        const input =
            document.getElementById("searchInput");

        if (!input) return;

        const query =
            input.value.toLowerCase().trim();

        const result =
            sites.find(site =>
                site.name
                    .toLowerCase()
                    .includes(query)
            );

        if (result) {

            openSite(result.url);

        } else {

            showSection("sites");

            const siteSearch =
                document.getElementById("siteSearch");

            if (siteSearch) {
                siteSearch.value =
                    input.value;
            }

            filterSiteList();
        }
    }
}


// ==========================================
// 💡 أمثلة البحث
// ==========================================

function useExample(text) {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    input.value = text;

    smartSearch();

    input.focus();
}


// ==========================================
// 🚀 فتح موقع
// ==========================================

function openSite(url) {

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


// ==========================================
// 🎲 موقع عشوائي
// ==========================================

function randomSite() {

    if (sites.length === 0) return;

    const randomIndex =
        Math.floor(
            Math.random() * sites.length
        );

    const site =
        sites[randomIndex];

    showToast(
        `🎲 اخترنا لك: ${site.name}`
    );

    setTimeout(() => {
        openSite(site.url);
    }, 700);
}


// ==========================================
// ❤️ إضافة / إزالة المفضلة
// ==========================================

function toggleFavorite(url) {

    const index =
        favorites.indexOf(url);

    if (index === -1) {

        favorites.push(url);

        showToast("❤️ تمت الإضافة إلى المفضلة");

    } else {

        favorites.splice(index, 1);

        showToast("💔 تمت الإزالة من المفضلة");
    }


    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );


    displaySites(
        getCurrentFilteredSites()
    );

    renderFavorites();
}


// ==========================================
// 🔎 الحصول على القائمة الحالية
// ==========================================

function getCurrentFilteredSites() {

    const input =
        document.getElementById("siteSearch");

    const category =
        document.getElementById("categorySelect");

    const query =
        input
            ? input.value.toLowerCase().trim()
            : "";

    const selectedCategory =
        category
            ? category.value
            : "all";


    return sites.filter(site => {

        const matchesSearch =
            site.name
                .toLowerCase()
                .includes(query)

            ||

            site.description
                .toLowerCase()
                .includes(query);

        const matchesCategory =
            selectedCategory === "all"
            ||
            site.category === selectedCategory;

        return matchesSearch &&
               matchesCategory;

    });
}


// ==========================================
// ⭐ عرض المفضلة
// ==========================================

function renderFavorites() {

    const container =
        document.getElementById("favoritesContainer");

    if (!container) return;

    container.innerHTML = "";


    const favoriteSites =
        sites.filter(site =>
            favorites.includes(site.url)
        );


    if (favoriteSites.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <div>❤️</div>

                <h3>لا توجد مواقع مفضلة</h3>

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


// ==========================================
// ❤️ فتح صفحة المفضلة
// ==========================================

function showFavorites() {

    showSection("favorites");

    renderFavorites();
}


// ==========================================
// 🌟 المواقع المميزة
// ==========================================

function renderFeatured() {

    const container =
        document.getElementById("featuredContainer");

    if (!container) return;


    const featuredNames = [
        "Minecraft",
        "Eaglercraft",
        "GeoFS",
        "Neal.fun",
        "ChatGPT"
    ];


    const featured =
        featuredNames
            .map(name =>
                sites.find(site =>
                    site.name === name
                )
            )
            .filter(Boolean);


    container.innerHTML = "";


    featured.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });
}


// ==========================================
// 😂 قسم الترفيه
// ==========================================

function renderFun() {

    const container =
        document.getElementById("funContainer");

    if (!container) return;


    const funSites =
        sites.filter(site =>
            site.category === "fun"
        );


    container.innerHTML = "";


    funSites.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });
}


// ==========================================
// 🎮 قسم الألعاب
// ==========================================

function renderGaming() {

    const container =
        document.getElementById("gamingContainer");

    if (!container) return;


    const gamingSites =
        sites.filter(site =>
            site.category === "games"
        );


    container.innerHTML = "";


    gamingSites.forEach(site => {

        container.appendChild(
            createSiteCard(site)
        );

    });
}


// ==========================================
// 🏷️ فلترة حسب التصنيف
// ==========================================

function filterCategory(category) {

    showSection("sites");


    const select =
        document.getElementById("categorySelect");

    if (select) {
        select.value = category;
    }


    const search =
        document.getElementById("siteSearch");

    if (search) {
        search.value = "";
    }


    filterSiteList();
}


// ==========================================
// 📊 الإحصائيات
// ==========================================

function updateStats() {

    const totalSites =
        document.getElementById("totalSites");

    const totalCategories =
        document.getElementById("totalCategories");

    const totalFavorites =
        document.getElementById("totalFavorites");


    if (totalSites) {
        totalSites.textContent =
            sites.length;
    }


    if (totalCategories) {
        totalCategories.textContent =
            Object.keys(data).length;
    }


    if (totalFavorites) {
        totalFavorites.textContent =
            favorites.length;
    }
}


// ==========================================
// 🔔 إشعار صغير
// ==========================================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;


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


// ==========================================
// 🖱️ إغلاق نتائج البحث عند الضغط خارجها
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        const searchArea =
            document.querySelector(".hero-search");

        const results =
            document.getElementById("smartResults");


        if (
            searchArea &&
            results &&
            !searchArea.contains(event.target)
        ) {

            results.style.display =
                "none";
        }

    }
);


// ==========================================
// 🚀 بدء الموقع
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // الوضع الليلي
        const savedDarkMode =
            localStorage.getItem(
                "webboxDarkMode"
            );


        if (savedDarkMode === "true") {

            document.body.classList.add("dark");

        }


        updateThemeButton();


        // الإحصائيات
        updateStats();


        // المواقع
        displaySites();


        // الأقسام
        renderFeatured();
        renderFun();
        renderGaming();
        renderFavorites();


        // البحث الذكي
        const searchInput =
            document.getElementById("searchInput");


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


        // بحث المواقع
        const siteSearch =
            document.getElementById("siteSearch");


        if (siteSearch) {

            siteSearch.addEventListener(
                "input",
                filterSiteList
            );

        }


        // فلتر التصنيف
        const categorySelect =
            document.getElementById("categorySelect");


        if (categorySelect) {

            categorySelect.addEventListener(
                "change",
                filterSiteList
            );

        }

    }
);
