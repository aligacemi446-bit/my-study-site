// ======================================================
// 🌐 WebBox 2.0 - Advanced JavaScript
// ======================================================


// ======================================================
// 📚 بيانات المواقع
// ======================================================

const siteData = {

    games: [

        {
            name: "Minecraft",
            url: "https://www.minecraft.net/",
            description: "الموقع الرسمي لـ Minecraft: عالم مفتوح للبناء والاستكشاف واللعب.",
            icon: "⛏️"
        },

        {
            name: "Eaglercraft",
            url: "https://eaglercraft.com/",
            description: "العب Minecraft مباشرة من المتصفح.",
            icon: "🟩"
        },

        {
            name: "Poki",
            url: "https://poki.com/",
            description: "آلاف الألعاب المجانية التي تعمل مباشرة في المتصفح.",
            icon: "🎮"
        },

        {
            name: "CrazyGames",
            url: "https://www.crazygames.com/",
            description: "مجموعة ضخمة من ألعاب المتصفح.",
            icon: "🔥"
        },

        {
            name: "Scratch",
            url: "https://scratch.mit.edu/",
            description: "اصنع والعب وشارك الألعاب والمشاريع.",
            icon: "🐱"
        },

        {
            name: "GeoFS",
            url: "https://www.geo-fs.com/",
            description: "محاكي طيران ثلاثي الأبعاد يعمل من المتصفح.",
            icon: "✈️"
        },

        {
            name: "itch.io",
            url: "https://itch.io/",
            description: "منصة للألعاب المستقلة.",
            icon: "🎲"
        },

        {
            name: "Chess.com",
            url: "https://www.chess.com/",
            description: "العب الشطرنج وتدرب ضد لاعبين وذكاء اصطناعي.",
            icon: "♟️"
        },

        {
            name: "Lichess",
            url: "https://lichess.org/",
            description: "منصة شطرنج مجانية ومفتوحة المصدر.",
            icon: "♞"
        },

        {
            name: "2048",
            url: "https://play2048.co/",
            description: "لعبة الأرقام الشهيرة 2048.",
            icon: "🔢"
        },

        {
            name: "Sudoku",
            url: "https://sudoku.com/",
            description: "العب Sudoku مباشرة.",
            icon: "🧩"
        },

        {
            name: "Jigsaw Explorer",
            url: "https://www.jigsawexplorer.com/",
            description: "ألغاز الصور المجانية.",
            icon: "🧩"
        },

        {
            name: "Coolmath Games",
            url: "https://www.coolmathgames.com/",
            description: "ألعاب ممتعة متنوعة.",
            icon: "🕹️"
        },

        {
            name: "Miniclip",
            url: "https://www.miniclip.com/",
            description: "ألعاب متصفح متنوعة.",
            icon: "🎮"
        },

        {
            name: "Game Jolt",
            url: "https://gamejolt.com/",
            description: "مجتمع ومنصة ألعاب مستقلة.",
            icon: "⚡"
        },

        {
            name: "Pokémon Showdown",
            url: "https://pokemonshowdown.com/",
            description: "معارك Pokémon مباشرة في المتصفح.",
            icon: "⚔️"
        },

        {
            name: "Roblox",
            url: "https://www.roblox.com/",
            description: "منصة ألعاب وتجارب تفاعلية.",
            icon: "🟥"
        },

        {
            name: "Khan Academy Kids",
            url: "https://learn.khanacademy.org/khan-academy-kids/",
            description: "أنشطة تعليمية تفاعلية.",
            icon: "🎮"
        }

    ],


    fun: [

        {
            name: "Neal.fun",
            url: "https://neal.fun/",
            description: "مجموعة ضخمة من التجارب والألعاب الممتعة.",
            icon: "🤯"
        },

        {
            name: "Quick Draw",
            url: "https://quickdraw.withgoogle.com/",
            description: "هل يستطيع الذكاء الاصطناعي معرفة ماذا ترسم؟",
            icon: "✏️"
        },

        {
            name: "Google Earth",
            url: "https://earth.google.com/",
            description: "استكشف العالم من جهازك.",
            icon: "🌍"
        },

        {
            name: "Radio Garden",
            url: "https://radio.garden/",
            description: "استمع إلى محطات الراديو من جميع أنحاء العالم.",
            icon: "📻"
        },

        {
            name: "Stellarium",
            url: "https://stellarium-web.org/",
            description: "استكشف السماء والنجوم.",
            icon: "🌌"
        },

        {
            name: "WindowSwap",
            url: "https://www.window-swap.com/",
            description: "شاهد المناظر من نوافذ حول العالم.",
            icon: "🪟"
        },

        {
            name: "Little Alchemy",
            url: "https://littlealchemy.com/",
            description: "اخلط العناصر واكتشف عناصر جديدة.",
            icon: "🧪"
        },

        {
            name: "Pointer Pointer",
            url: "https://pointerpointer.com/",
            description: "حرك المؤشر وشاهد ما يحدث.",
            icon: "🖱️"
        },

        {
            name: "Zoomquilt",
            url: "https://zoomquilt.org/",
            description: "رحلة لا نهائية داخل صورة.",
            icon: "🌀"
        },

        {
            name: "Patatap",
            url: "https://patatap.com/",
            description: "اصنع أصواتًا باستخدام لوحة المفاتيح.",
            icon: "🎵"
        },

        {
            name: "Silk",
            url: "https://weavesilk.com/",
            description: "ارسم أعمالًا فنية جميلة بسهولة.",
            icon: "🎨"
        },

        {
            name: "A Soft Murmur",
            url: "https://asoftmurmur.com/",
            description: "أنشئ أجواء صوتية هادئة.",
            icon: "🌧️"
        },

        {
            name: "Radiooooo",
            url: "https://radiooooo.com/",
            description: "اكتشف الموسيقى حسب المكان والزمن.",
            icon: "🎶"
        }

    ],


    education: [

        {
            name: "Khan Academy",
            url: "https://www.khanacademy.org/",
            description: "دروس مجانية في الرياضيات والعلوم وغيرها.",
            icon: "🎓"
        },

        {
            name: "Coursera",
            url: "https://www.coursera.org/",
            description: "دورات تعليمية عبر الإنترنت.",
            icon: "📚"
        },

        {
            name: "edX",
            url: "https://www.edx.org/",
            description: "دورات تعليمية من جامعات ومؤسسات.",
            icon: "🎓"
        },

        {
            name: "Duolingo",
            url: "https://www.duolingo.com/",
            description: "تعلم اللغات بطريقة ممتعة.",
            icon: "🦉"
        },

        {
            name: "WolframAlpha",
            url: "https://www.wolframalpha.com/",
            description: "محرك قوي للحسابات والأسئلة العلمية.",
            icon: "🧮"
        },

        {
            name: "Wikipedia",
            url: "https://www.wikipedia.org/",
            description: "موسوعة مجانية ضخمة.",
            icon: "📖"
        },

        {
            name: "BBC Learning",
            url: "https://www.bbc.co.uk/learningenglish/",
            description: "موارد لتعلم اللغة الإنجليزية.",
            icon: "🇬🇧"
        },

        {
            name: "PhET",
            url: "https://phet.colorado.edu/",
            description: "محاكاة تفاعلية للعلوم والرياضيات.",
            icon: "🔬"
        },

        {
            name: "Desmos",
            url: "https://www.desmos.com/",
            description: "آلة حاسبة ورسوم بيانية تفاعلية.",
            icon: "📈"
        },

        {
            name: "GeoGebra",
            url: "https://www.geogebra.org/",
            description: "أدوات للرياضيات والهندسة والرسوم البيانية.",
            icon: "📐"
        },

        {
            name: "Google Arts & Culture",
            url: "https://artsandculture.google.com/",
            description: "استكشف الفن والثقافة حول العالم.",
            icon: "🖼️"
        }

    ],


    books: [

        {
            name: "Project Gutenberg",
            url: "https://www.gutenberg.org/",
            description: "آلاف الكتب المجانية.",
            icon: "📚"
        },

        {
            name: "Internet Archive",
            url: "https://archive.org/",
            description: "أرشيف ضخم للكتب والمواقع والوسائط.",
            icon: "🏛️"
        },

        {
            name: "Open Library",
            url: "https://openlibrary.org/",
            description: "مكتبة كتب إلكترونية ضخمة.",
            icon: "📕"
        },

        {
            name: "Google Books",
            url: "https://books.google.com/",
            description: "ابحث عن الكتب والكتب الرقمية.",
            icon: "📚"
        }

    ],


    ai: [

        {
            name: "ChatGPT",
            url: "https://chatgpt.com/",
            description: "مساعد ذكاء اصطناعي للمحادثة والتعلم والبرمجة.",
            icon: "🤖"
        },

        {
            name: "Google Gemini",
            url: "https://gemini.google.com/",
            description: "مساعد الذكاء الاصطناعي من Google.",
            icon: "✨"
        },

        {
            name: "Microsoft Copilot",
            url: "https://copilot.microsoft.com/",
            description: "مساعد ذكاء اصطناعي من Microsoft.",
            icon: "🧠"
        },

        {
            name: "Claude",
            url: "https://claude.ai/",
            description: "مساعد للكتابة والتحليل والبرمجة.",
            icon: "🤖"
        },

        {
            name: "Perplexity",
            url: "https://www.perplexity.ai/",
            description: "محرك بحث يعتمد على الذكاء الاصطناعي.",
            icon: "🔎"
        },

        {
            name: "Hugging Face",
            url: "https://huggingface.co/",
            description: "منصة لنماذج وأدوات الذكاء الاصطناعي.",
            icon: "🤗"
        },

        {
            name: "Leonardo AI",
            url: "https://leonardo.ai/",
            description: "أدوات إبداعية تعتمد على الذكاء الاصطناعي.",
            icon: "🎨"
        }

    ],


    design: [

        {
            name: "Canva",
            url: "https://www.canva.com/",
            description: "صمم صورًا وعروضًا ومنشورات بسهولة.",
            icon: "🎨"
        },

        {
            name: "Figma",
            url: "https://www.figma.com/",
            description: "تصميم واجهات ومشاريع احترافية.",
            icon: "🖌️"
        },

        {
            name: "Photopea",
            url: "https://www.photopea.com/",
            description: "محرر صور قوي يعمل في المتصفح.",
            icon: "🖼️"
        },

        {
            name: "Remove.bg",
            url: "https://www.remove.bg/",
            description: "إزالة خلفية الصور بسهولة.",
            icon: "✂️"
        },

        {
            name: "Pixlr",
            url: "https://pixlr.com/",
            description: "تحرير الصور أونلاين.",
            icon: "🌈"
        },

        {
            name: "Coolors",
            url: "https://coolors.co/",
            description: "إنشاء وتوليد لوحات ألوان.",
            icon: "🎨"
        },

        {
            name: "Unsplash",
            url: "https://unsplash.com/",
            description: "صور عالية الجودة.",
            icon: "📷"
        },

        {
            name: "Pexels",
            url: "https://www.pexels.com/",
            description: "صور وفيديوهات مجانية.",
            icon: "📸"
        }

    ],


    video: [

        {
            name: "YouTube",
            url: "https://www.youtube.com/",
            description: "شاهد وشارك الفيديوهات.",
            icon: "▶️"
        },

        {
            name: "CapCut",
            url: "https://www.capcut.com/",
            description: "محرر فيديو سهل وقوي.",
            icon: "🎬"
        },

        {
            name: "VEED",
            url: "https://www.veed.io/",
            description: "تحرير الفيديو من المتصفح.",
            icon: "🎥"
        },

        {
            name: "Clipchamp",
            url: "https://clipchamp.com/",
            description: "محرر فيديو عبر الإنترنت.",
            icon: "🎞️"
        },

        {
            name: "Canva Video",
            url: "https://www.canva.com/video-editor/",
            description: "إنشاء وتحرير الفيديو.",
            icon: "🎬"
        }

    ],


    music: [

        {
            name: "Spotify",
            url: "https://open.spotify.com/",
            description: "استمع إلى الموسيقى والبودكاست.",
            icon: "🎵"
        },

        {
            name: "SoundCloud",
            url: "https://soundcloud.com/",
            description: "اكتشف موسيقى وفنانين جدد.",
            icon: "☁️"
        },

        {
            name: "YouTube Music",
            url: "https://music.youtube.com/",
            description: "استمع إلى الموسيقى على YouTube.",
            icon: "🎧"
        },

        {
            name: "Bandcamp",
            url: "https://bandcamp.com/",
            description: "اكتشف موسيقى الفنانين المستقلين.",
            icon: "🎼"
        },

        {
            name: "Audiomack",
            url: "https://audiomack.com/",
            description: "اكتشف واستمع إلى الموسيقى.",
            icon: "🎧"
        }

    ],


    programming: [

        {
            name: "GitHub",
            url: "https://github.com/",
            description: "استضافة المشاريع البرمجية وإدارة الأكواد.",
            icon: "💻"
        },

        {
            name: "CodePen",
            url: "https://codepen.io/",
            description: "جرب HTML وCSS وJavaScript مباشرة.",
            icon: "🖥️"
        },

        {
            name: "JSFiddle",
            url: "https://jsfiddle.net/",
            description: "اختبر JavaScript وHTML وCSS.",
            icon: "🧪"
        },

        {
            name: "W3Schools",
            url: "https://www.w3schools.com/",
            description: "تعلم البرمجة وتطوير الويب.",
            icon: "🌐"
        },

        {
            name: "MDN Web Docs",
            url: "https://developer.mozilla.org/",
            description: "مرجع قوي لتطوير الويب.",
            icon: "📘"
        },

        {
            name: "Replit",
            url: "https://replit.com/",
            description: "برمج وشغل مشاريعك مباشرة من المتصفح.",
            icon: "👨‍💻"
        },

        {
            name: "Stack Overflow",
            url: "https://stackoverflow.com/",
            description: "أسئلة وأجوبة للمبرمجين.",
            icon: "💡"
        },

        {
            name: "GitLab",
            url: "https://gitlab.com/",
            description: "منصة لتطوير وإدارة المشاريع البرمجية.",
            icon: "🦊"
        },

        {
            name: "Godot",
            url: "https://godotengine.org/",
            description: "محرك ألعاب مجاني ومفتوح المصدر.",
            icon: "🎮"
        },

        {
            name: "Three.js",
            url: "https://threejs.org/",
            description: "مكتبة JavaScript لإنشاء رسومات ثلاثية الأبعاد.",
            icon: "3️⃣"
        }

    ],


    tools: [

        {
            name: "Google Translate",
            url: "https://translate.google.com/",
            description: "ترجمة النصوص بين اللغات.",
            icon: "🌍"
        },

        {
            name: "TinyWow",
            url: "https://tinywow.com/",
            description: "مجموعة كبيرة من أدوات الملفات والصور.",
            icon: "🛠️"
        },

        {
            name: "iLovePDF",
            url: "https://www.ilovepdf.com/",
            description: "أدوات مجانية للتعامل مع ملفات PDF.",
            icon: "📄"
        },

        {
            name: "QR Code Generator",
            url: "https://www.qr-code-generator.com/",
            description: "أنشئ QR Code بسهولة.",
            icon: "🔳"
        },

        {
            name: "Speedtest",
            url: "https://www.speedtest.net/",
            description: "اختبر سرعة الإنترنت.",
            icon: "⚡"
        },

        {
            name: "Google Drive",
            url: "https://drive.google.com/",
            description: "احفظ ملفاتك على السحابة.",
            icon: "☁️"
        },

        {
            name: "Google Keep",
            url: "https://keep.google.com/",
            description: "أنشئ الملاحظات والقوائم بسرعة.",
            icon: "📝"
        },

        {
            name: "Google Calendar",
            url: "https://calendar.google.com/",
            description: "نظم مواعيدك وأحداثك.",
            icon: "📅"
        },

        {
            name: "TinyPNG",
            url: "https://tinypng.com/",
            description: "ضغط الصور وتقليل حجمها.",
            icon: "🖼️"
        },

        {
            name: "Convertio",
            url: "https://convertio.co/",
            description: "تحويل الملفات بين الصيغ.",
            icon: "🔄"
        }

    ]

};


// ======================================================
// 🏷️ أسماء التصنيفات
// ======================================================

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


// ======================================================
// 🔣 أيقونات التصنيفات
// ======================================================

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


// ======================================================
// 📦 تحويل البيانات إلى قائمة واحدة
// ======================================================

let sites = [];

Object.keys(siteData).forEach(category => {

    siteData[category].forEach(site => {

        sites.push({

            ...site,

            category,

            categoryName:
                categoryNames[category]

        });

    });

});


// ======================================================
// 💾 LOCAL STORAGE
// ======================================================

let favorites =
    JSON.parse(
        localStorage.getItem("webboxFavorites") || "[]"
    );

let history =
    JSON.parse(
        localStorage.getItem("webboxHistory") || "[]"
    );

let visits =
    JSON.parse(
        localStorage.getItem("webboxVisits") || "{}"
    );

let settings =
    JSON.parse(
        localStorage.getItem("webboxSettings") || "{}"
    );

let viewMode =
    settings.viewMode || "grid";


// ======================================================
// 🧹 HTML SAFE
// ======================================================

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


// ======================================================
// 💾 حفظ الإعدادات
// ======================================================

function saveSettings() {

    localStorage.setItem(
        "webboxSettings",
        JSON.stringify(settings)
    );

}


// ======================================================
// 🌙 الوضع الليلي
// ======================================================

function toggleDarkMode() {

    const dark =
        document.body.classList.toggle("dark");

    settings.dark =
        dark;

    saveSettings();

    updateThemeButton();

}


function updateThemeButton() {

    const button =
        document.getElementById("darkModeBtn");

    if (!button) return;

    button.textContent =
        document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";

    button.title =
        document.body.classList.contains("dark")
            ? "الوضع الفاتح"
            : "الوضع الليلي";

}


// ======================================================
// 🧭 التنقل
// ======================================================

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(".page-section");

    sections.forEach(section => {

        section.classList.remove("active");
        section.style.display = "none";

    });


    const target =
        document.getElementById(sectionId);

    if (!target) {

        console.error(
            "Section not found:",
            sectionId
        );

        return;

    }


    target.style.display = "block";

    target.classList.add("active");


    updateNavigation(sectionId);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (sectionId === "sites") {

        filterSiteList();

    }

    if (sectionId === "favorites") {

        renderFavorites();

    }

    if (sectionId === "fun") {

        renderFun();

    }

    if (sectionId === "gaming") {

        renderGaming();

    }

    if (sectionId === "recent") {

        renderHistory();

    }


    closeMobileMenu();

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


function showRecent() {

    showSection("recent");

}


// ======================================================
// 📱 MOBILE MENU
// ======================================================

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobileNav");

    if (!menu) return;

    menu.classList.toggle("show");

}


function closeMobileMenu() {

    const menu =
        document.getElementById("mobileNav");

    if (menu) {

        menu.classList.remove("show");

    }

}


// ======================================================
// 🗂️ إنشاء التصنيفات
// ======================================================

function renderCategories() {

    const container =
        document.getElementById("categoriesContainer");

    const homeContainer =
        document.getElementById("homeCategories");

    if (!container) return;


    const html =
        Object.keys(siteData)
            .map(category => {

                const count =
                    siteData[category].length;

                return `

                    <button
                        class="category-card"
                        onclick="filterCategory('${category}')">

                        <div class="category-icon">
                            ${categoryIcons[category]}
                        </div>

                        <h3>
                            ${categoryNames[category]}
                        </h3>

                        <p>
                            ${count} موقع
                        </p>

                    </button>

                `;

            })
            .join("");


    container.innerHTML =
        html;


    if (homeContainer) {

        homeContainer.innerHTML =
            Object.keys(siteData)
                .slice(0, 10)
                .map(category => {

                    return `

                        <button
                            class="category-card"
                            onclick="filterCategory('${category}')">

                            <div class="category-icon">
                                ${categoryIcons[category]}
                            </div>

                            <h3>
                                ${categoryNames[category]}
                            </h3>

                            <p>
                                ${siteData[category].length} موقع
                            </p>

                        </button>

                    `;

                })
                .join("");

    }

}


// ======================================================
// 📌 فلترة التصنيف
// ======================================================

function filterCategory(category) {

    if (!siteData[category]) return;


    showSection("sites");


    const select =
        document.getElementById("categorySelect");

    if (select) {

        select.value =
            category;

    }


    const search =
        document.getElementById("siteSearch");

    if (search) {

        search.value = "";

    }


    filterSiteList();

}


// ======================================================
// 🧱 إنشاء بطاقة موقع
// ======================================================

function createSiteCard(site) {

    const favorite =
        favorites.includes(site.name);

    const visitCount =
        visits[site.name] || 0;


    return `

        <article
            class="site-card"
            onclick="openSiteDetails('${escapeAttr(site.name)}')">

            <div class="site-icon">
                ${site.icon || "🌐"}
            </div>

            <div class="site-content">

                <h3>
                    ${escapeHTML(site.name)}
                </h3>

                <p>
                    ${escapeHTML(site.description)}
                </p>

                <span class="site-category">

                    ${categoryIcons[site.category] || "🌐"}

                    ${escapeHTML(site.categoryName)}

                </span>

            </div>

            <div class="site-actions">

                <button
                    class="open-site-btn"
                    onclick="
                        event.stopPropagation();
                        openSiteByName('${escapeAttr(site.name)}');
                    ">

                    🚀 فتح الموقع

                </button>

                <button
                    class="
                        favorite-btn
                        ${favorite ? "favorite-active" : ""}
                    "
                    onclick="
                        event.stopPropagation();
                        toggleFavorite('${escapeAttr(site.name)}');
                    "
                    title="المفضلة">

                    ${favorite ? "❤️" : "🤍"}

                </button>

            </div>

        </article>

    `;

}


function escapeAttr(value) {

    return String(value)
        .replaceAll("\\", "\\\\")
        .replaceAll("'", "\\'");

}


// ======================================================
// 🌐 عرض المواقع
// ======================================================

function displaySites(list) {

    const container =
        document.getElementById("sitesContainer");

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
                    جرب كلمة بحث أخرى أو غير التصنيف.
                </p>

            </div>

        `;

    } else {

        container.innerHTML =
            list
                .map(createSiteCard)
                .join("");

    }


    const result =
        document.getElementById("resultText");

    if (result) {

        result.textContent =
            `${list.length} موقع`;

    }

}


// ======================================================
// 🔎 البحث والفلترة
// ======================================================

function getFilteredSites() {

    const searchInput =
        document.getElementById("siteSearch");

    const categorySelect =
        document.getElementById("categorySelect");

    const sortSelect =
        document.getElementById("sortSelect");


    const query =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const category =
        categorySelect
            ? categorySelect.value
            : "all";


    const sort =
        sortSelect
            ? sortSelect.value
            : "default";


    let result =
        sites.filter(site => {

            const categoryMatch =
                category === "all" ||
                site.category === category;


            const text = (

                site.name +
                " " +
                site.description +
                " " +
                site.categoryName

            ).toLowerCase();


            const searchMatch =
                !query ||
                text.includes(query);


            return (
                categoryMatch &&
                searchMatch
            );

        });


    if (sort === "name") {

        result.sort(
            (a,b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }


    if (sort === "popular") {

        result.sort(
            (a,b) =>
                (visits[b.name] || 0) -
                (visits[a.name] || 0)
        );

    }


    if (sort === "favorites") {

        result.sort(
            (a,b) =>
                Number(
                    favorites.includes(b.name)
                ) -
                Number(
                    favorites.includes(a.name)
                )
        );

    }


    return result;

}


function filterSiteList() {

    displaySites(
        getFilteredSites()
    );

}


// ======================================================
// 🔍 البحث الرئيسي
// ======================================================

function smartSearch() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("smartResults");

    if (!input || !results) return;


    const query =
        input.value
            .trim()
            .toLowerCase();


    if (!query) {

        results.innerHTML = "";

        return;

    }


    const matched =
        sites
            .filter(site => {

                const text = (

                    site.name +
                    " " +
                    site.description +
                    " " +
                    site.categoryName

                ).toLowerCase();


                return text.includes(query);

            })
            .slice(0, 7);


    if (!matched.length) {

        results.innerHTML = `

            <div class="smart-result">

                🔍 لا توجد نتائج مطابقة

            </div>

        `;

        return;

    }


    results.innerHTML =
        matched
            .map(site => `

                <div
                    class="smart-result"
                    onclick="
                        openSiteDetails(
                            '${escapeAttr(site.name)}'
                        )
                    ">

                    <span class="smart-result-icon">
                        ${site.icon}
                    </span>

                    <div>

                        <strong>
                            ${escapeHTML(site.name)}
                        </strong>

                        <small>
                            ${escapeHTML(site.categoryName)}
                        </small>

                    </div>

                </div>

            `)
            .join("");

}


// ======================================================
// ⌨️ Enter
// ======================================================

function handleSearchKey(event) {

    if (event.key !== "Enter") return;

    performMainSearch();

}


function performMainSearch() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;


    const query =
        input.value.trim();


    if (!query) {

        showToast("🔎 اكتب شيئًا للبحث");

        return;

    }


    const exact =
        sites.find(
            site =>
                site.name.toLowerCase() ===
                query.toLowerCase()
        );


    if (exact) {

        openSiteDetails(exact.name);

        return;

    }


    showSection("sites");


    const siteSearch =
        document.getElementById("siteSearch");

    if (siteSearch) {

        siteSearch.value =
            query;

    }


    const categorySelect =
        document.getElementById("categorySelect");

    if (categorySelect) {

        categorySelect.value =
            "all";

    }


    filterSiteList();

}


// ======================================================
// 🎤 البحث الصوتي
// ======================================================

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


    recognition.lang =
        "ar-DZ";

    recognition.interimResults =
        false;

    recognition.maxAlternatives =
        1;


    recognition.onstart = () => {

        showToast(
            "🎤 استمع الآن..."
        );

    };


    recognition.onresult =
        event => {

            const text =
                event
                    .results[0][0]
                    .transcript;


            const input =
                document.getElementById(
                    "searchInput"
                );


            if (input) {

                input.value =
                    text;

                smartSearch();

            }

        };


    recognition.onerror =
        () => {

            showToast(
                "❌ لم أستطع فهم البحث الصوتي"
            );

        };


    recognition.start();

}


// ======================================================
// 📝 أمثلة
// ======================================================

function useExample(text) {

    const input =
        document.getElementById("searchInput");

    if (!input) return;


    input.value =
        text;


    smartSearch();

    input.focus();

}


// ======================================================
// 🚀 فتح موقع
// ======================================================

function openSite(url) {

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


// ======================================================
// 🚀 فتح حسب الاسم
// ======================================================

function openSiteByName(name) {

    const site =
        sites.find(
            item =>
                item.name === name
        );


    if (!site) return;


    registerVisit(site);

    openSite(site.url);

}


// ======================================================
// 📊 تسجيل الزيارة
// ======================================================

function registerVisit(site) {

    visits[site.name] =
        (visits[site.name] || 0) + 1;


    localStorage.setItem(
        "webboxVisits",
        JSON.stringify(visits)
    );


    history =
        history.filter(
            item =>
                item.name !== site.name
        );


    history.unshift({

        name: site.name,

        time:
            Date.now()

    });


    history =
        history.slice(0, 12);


    localStorage.setItem(
        "webboxHistory",
        JSON.stringify(history)
    );


    updateStats();

}


// ======================================================
// 🎲 موقع عشوائي
// ======================================================

function randomSite() {

    if (!sites.length) return;


    const site =
        sites[
            Math.floor(
                Math.random() * sites.length
            )
        ];


    showToast(
        `🎲 ${site.name}`
    );


    setTimeout(
        () => {

            openSiteByName(
                site.name
            );

        },
        500
    );

}


// ======================================================
// ⭐ المفضلة
// ======================================================

function toggleFavorite(name) {

    const index =
        favorites.indexOf(name);


    if (index === -1) {

        favorites.push(name);

        showToast(
            `❤️ تمت إضافة ${name}`
        );

    } else {

        favorites.splice(
            index,
            1
        );

        showToast(
            `🤍 تمت إزالة ${name}`
        );

    }


    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );


    updateStats();


    if (
        document.getElementById("sites")
            ?.classList.contains("active")
    ) {

        filterSiteList();

    }


    renderFavorites();


    if (
        document.getElementById("siteModal")
            ?.classList.contains("show")
    ) {

        updateModalFavorite(name);

    }

}


// ======================================================
// ❤️ المفضلة
// ======================================================

function renderFavorites() {

    const container =
        document.getElementById(
            "favoritesContainer"
        );

    if (!container) return;


    const favoriteSites =
        sites.filter(
            site =>
                favorites.includes(
                    site.name
                )
        );


    if (!favoriteSites.length) {

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

            </div>

        `;

        return;

    }


    container.innerHTML =
        favoriteSites
            .map(createSiteCard)
            .join("");

}


// ======================================================
// 🎉 مسلية
// ======================================================

function renderFun() {

    const container =
        document.getElementById(
            "funContainer"
        );

    if (!container) return;


    container.innerHTML =
        (siteData.fun || [])
            .map(site => {

                return createSiteCard({

                    ...site,

                    category: "fun",

                    categoryName:
                        categoryNames.fun

                });

            })
            .join("");

}


// ======================================================
// 🎮 ألعاب
// ======================================================

function renderGaming() {

    const container =
        document.getElementById(
            "gamingContainer"
        );

    if (!container) return;


    container.innerHTML =
        (siteData.games || [])
            .map(site => {

                return createSiteCard({

                    ...site,

                    category: "games",

                    categoryName:
                        categoryNames.games

                });

            })
            .join("");

}


// ======================================================
// ⭐ المواقع المميزة
// ======================================================

function renderFeatured() {

    const container =
        document.getElementById(
            "featuredContainer"
        );

    if (!container) return;


    const featuredNames = [

        "Minecraft",
        "Eaglercraft",
        "ChatGPT",
        "YouTube",
        "Canva",
        "Godot"

    ];


    const featured =
        featuredNames
            .map(
                name =>
                    sites.find(
                        site =>
                            site.name === name
                    )
            )
            .filter(Boolean);


    container.innerHTML =
        featured
            .map(createSiteCard)
            .join("");

}


// ======================================================
// 🕘 السجل
// ======================================================

function renderHistory() {

    const container =
        document.getElementById(
            "recentContainer"
        );

    if (!container) return;


    const recentSites =
        history
            .map(item =>
                sites.find(
                    site =>
                        site.name === item.name
                )
            )
            .filter(Boolean);


    if (!recentSites.length) {

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
        recentSites
            .map(createSiteCard)
            .join("");

}


function clearHistory() {

    history = [];

    localStorage.removeItem(
        "webboxHistory"
    );

    renderHistory();

    showToast(
        "🧹 تم مسح سجل المواقع"
    );

}


// ======================================================
// 🪟 تفاصيل الموقع
// ======================================================

function openSiteDetails(name) {

    const site =
        sites.find(
            item =>
                item.name === name
        );


    if (!site) return;


    const modal =
        document.getElementById(
            "siteModal"
        );

    if (!modal) return;


    document.getElementById(
        "modalIcon"
    ).textContent =
        site.icon;


    document.getElementById(
        "modalTitle"
    ).textContent =
        site.name;


    document.getElementById(
        "modalDescription"
    ).textContent =
        site.description;


    document.getElementById(
        "modalCategory"
    ).textContent =
        `${categoryIcons[site.category]} ${site.categoryName}`;


    document.getElementById(
        "modalVisits"
    ).textContent =
        visits[site.name] || 0;


    updateModalFavorite(
        site.name
    );


    document.getElementById(
        "modalOpenBtn"
    ).onclick =
        () => {

            registerVisit(site);

            openSite(
                site.url
            );

        };


    document.getElementById(
        "modalFavoriteBtn"
    ).onclick =
        () => {

            toggleFavorite(
                site.name
            );

        };


    modal.dataset.site =
        site.name;


    modal.classList.add("show");

}


function updateModalFavorite(name) {

    const favorite =
        favorites.includes(name);


    const icon =
        document.getElementById(
            "modalFavorite"
        );


    const button =
        document.getElementById(
            "modalFavoriteBtn"
        );


    if (icon) {

        icon.textContent =
            favorite
                ? "❤️"
                : "🤍";

    }


    if (button) {

        button.textContent =
            favorite
                ? "💔 إزالة من المفضلة"
                : "❤️ إضافة للمفضلة";

    }

}


function closeSiteModal() {

    const modal =
        document.getElementById(
            "siteModal"
        );

    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

}


function closeModal(event) {

    if (
        event.target.classList.contains(
            "modal-overlay"
        )
    ) {

        closeSiteModal();

    }

}


// ======================================================
// 🔲 طريقة العرض
// ======================================================

function setViewMode(mode) {

    viewMode =
        mode;


    settings.viewMode =
        mode;


    saveSettings();


    const grid =
        document.getElementById(
            "gridViewBtn"
        );

    const list =
        document.getElementById(
            "listViewBtn"
        );


    if (grid) {

        grid.classList.toggle(
            "active",
            mode === "grid"
        );

    }


    if (list) {

        list.classList.toggle(
            "active",
            mode === "list"
        );

    }


    filterSiteList();

}


// ======================================================
// 🧹 إعادة الفلاتر
// ======================================================

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


    if (search) {

        search.value = "";

    }


    if (category) {

        category.value = "all";

    }


    if (sort) {

        sort.value = "default";

    }


    filterSiteList();

}


// ======================================================
// 📊 الإحصائيات
// ======================================================

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


    if (totalSites) {

        totalSites.textContent =
            sites.length;

    }


    if (totalCategories) {

        totalCategories.textContent =
            Object.keys(siteData).length;

    }


    if (totalFavorites) {

        totalFavorites.textContent =
            favorites.length;

    }


    if (totalVisits) {

        const count =
            Object.values(visits)
                .reduce(
                    (sum, value) =>
                        sum + value,
                    0
                );


        totalVisits.textContent =
            count;

    }

}


// ======================================================
// 🔔 Toast
// ======================================================

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
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2600
        );

}


// ======================================================
// 🧠 ملء قائمة التصنيفات
// ======================================================

function populateCategorySelect() {

    const select =
        document.getElementById(
            "categorySelect"
        );

    if (!select) return;


    select.innerHTML = `

        <option value="all">
            كل التصنيفات
        </option>

        ${
            Object.keys(siteData)
                .map(category => `

                    <option value="${category}">
                        ${categoryIcons[category]}
                        ${categoryNames[category]}
                    </option>

                `)
                .join("")
        }

    `;

}


// ======================================================
// ⌨️ اختصارات لوحة المفاتيح
// ======================================================

function setupKeyboardShortcuts() {

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

                    showHome();

                    input.focus();

                    input.select();

                }

            }


            if (
                event.key === "Escape"
            ) {

                closeSiteModal();

                closeMobileMenu();

            }

        }
    );

}


// ======================================================
// 🔎 أحداث البحث
// ======================================================

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (input) {

        input.addEventListener(
            "input",
            smartSearch
        );

        input.addEventListener(
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


    const category =
        document.getElementById(
            "categorySelect"
        );


    if (category) {

        category.addEventListener(
            "change",
            filterSiteList
        );

    }


    const sort =
        document.getElementById(
            "sortSelect"
        );


    if (sort) {

        sort.addEventListener(
            "change",
            filterSiteList
        );

    }

}


// ======================================================
// 🚀 تشغيل WebBox
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // الوضع
        if (
            settings.dark === true
        ) {

            document.body.classList.add(
                "dark"
            );

        }


        updateThemeButton();


        // التصنيفات
        populateCategorySelect();

        renderCategories();


        // المحتوى
        renderFeatured();

        renderFun();

        renderGaming();

        renderFavorites();

        renderHistory();


        // المواقع
        displaySites(
            sites
        );


        // الإحصائيات
        updateStats();


        // البحث
        setupSearch();


        // الاختصارات
        setupKeyboardShortcuts();


        // طريقة العرض
        setViewMode(
            viewMode
        );


        // الرئيسية
        showSection(
            "home"
        );

    }
);
