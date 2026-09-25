// ==========================================
// 🌐 WebBox - Complete JavaScript
// ==========================================

// ==========================================
// 📚 مواقع WebBox
// ==========================================

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
            description: "منصة رائعة للألعاب المستقلة.",
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
        }
    ],

    fun: [
        {
            name: "Neal.fun",
            url: "https://neal.fun/",
            description: "مجموعة ضخمة من التجارب والألعاب الغريبة والممتعة.",
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
            description: "شاهد المناظر من نوافذ أشخاص حول العالم.",
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
            description: "اصنع أصواتاً وموسيقى باستخدام لوحة المفاتيح.",
            icon: "🎵"
        },
        {
            name: "Silk",
            url: "https://weavesilk.com/",
            description: "ارسم أعمالاً فنية جميلة بسهولة.",
            icon: "🎨"
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
            description: "دورات تعليمية من جامعات ومؤسسات مختلفة.",
            icon: "📚"
        },
        {
            name: "edX",
            url: "https://www.edx.org/",
            description: "دورات تعليمية عبر الإنترنت.",
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
            description: "مساعد ذكاء اصطناعي للكتابة والتحليل والبرمجة.",
            icon: "🤖"
        },
        {
            name: "Perplexity",
            url: "https://www.perplexity.ai/",
            description: "محرك بحث يعتمد على الذكاء الاصطناعي.",
            icon: "🔎"
        }
    ],

    design: [
        {
            name: "Canva",
            url: "https://www.canva.com/",
            description: "صمم صوراً وعروضاً ومنشورات بسهولة.",
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
        }
    ]
};


// ==========================================
// 🏷️ أسماء التصنيفات
// ==========================================

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


// ==========================================
// 🔣 أيقونات التصنيفات
// ==========================================

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


// ==========================================
// 📦 تحويل جميع المواقع إلى قائمة واحدة
// ==========================================

let sites = [];

Object.keys(siteData).forEach(category => {

    siteData[category].forEach(site => {

        sites.push({
            ...site,
            category: category,
            categoryName: categoryNames[category]
        });

    });

});


// ==========================================
// ⭐ المفضلة
// ==========================================

let favorites = JSON.parse(
    localStorage.getItem("webboxFavorites") || "[]"
);


// ==========================================
// 🌙 الوضع الليلي
// ==========================================

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const enabled = document.body.classList.contains("dark");

    localStorage.setItem(
        "webboxDarkMode",
        enabled ? "true" : "false"
    );

    updateThemeButton();
}


function updateThemeButton() {

    const button = document.getElementById("darkModeBtn");

    if (!button) return;

    if (document.body.classList.contains("dark")) {

        button.innerHTML = "☀️ الوضع الفاتح";

    } else {

        button.innerHTML = "🌙 الوضع الليلي";

    }
}


// ==========================================
// 🧭 التنقل بين الصفحات
// ==========================================

function showSection(sectionId) {

    console.log("Opening section:", sectionId);

    const sections = document.querySelectorAll(
        ".page-section, section"
    );

    sections.forEach(section => {

        section.classList.remove("active");

        section.style.display = "none";

    });


    const target = document.getElementById(sectionId);

    if (!target) {

        console.error(
            "❌ القسم غير موجود في HTML:",
            sectionId
        );

        return;

    }


    target.classList.add("active");

    target.style.display = "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    // تحديث المحتوى حسب القسم

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

}


// ==========================================
// 🏠 الرئيسية
// ==========================================

function showHome() {

    showSection("home");

}


// ==========================================
// 📂 التصنيفات
// ==========================================

function showCategories() {

    showSection("categories");

}


// ==========================================
// 🎉 قسم مسلية
// ==========================================

function showFun() {

    showSection("fun");

}


// ==========================================
// 🎮 قسم الألعاب
// ==========================================

function showGaming() {

    showSection("gaming");

}


// ==========================================
// ⭐ المفضلة
// ==========================================

function showFavorites() {

    showSection("favorites");

    renderFavorites();

}


// ==========================================
// 📌 فلترة حسب تصنيف
// ==========================================

function filterCategory(category) {

    console.log("Filtering category:", category);


    // مهم:
    // categories ليست تصنيفاً للمواقع
    // لذلك إذا وصلنا لها بالخطأ نعرض صفحة التصنيفات

    if (category === "categories") {

        showCategories();

        return;

    }


    if (!siteData[category]) {

        console.error(
            "❌ التصنيف غير موجود:",
            category
        );

        return;

    }


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
// 🧱 إنشاء بطاقة موقع
// ==========================================

function createSiteCard(site) {

    const isFavorite =
        favorites.includes(site.name);


    return `
        <div class="site-card">

            <div class="site-icon">
                ${site.icon || "🌐"}
            </div>

            <div class="site-content">

                <h3>
                    ${site.name}
                </h3>

                <p>
                    ${site.description}
                </p>

                <span class="site-category">
                    ${categoryIcons[site.category] || "🌐"}
                    ${site.categoryName}
                </span>

            </div>

            <div class="site-actions">

                <button
                    class="open-site-btn"
                    onclick="openSite('${site.url}')"
                >
                    فتح الموقع 🚀
                </button>

                <button
                    class="favorite-btn ${isFavorite ? "favorite-active" : ""}"
                    onclick="toggleFavorite('${site.name}')"
                    title="المفضلة"
                >
                    ${isFavorite ? "❤️" : "🤍"}
                </button>

            </div>

        </div>
    `;

}


// ==========================================
// 🌐 عرض المواقع
// ==========================================

function displaySites(list) {

    const container =
        document.getElementById("sitesContainer");

    if (!container) return;


    if (list.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    🔍
                </div>

                <h3>
                    لم نجد أي موقع
                </h3>

                <p>
                    جرب البحث بكلمة أخرى أو اختر تصنيفاً مختلفاً.
                </p>

            </div>
        `;

    } else {

        container.innerHTML =
            list.map(createSiteCard).join("");

    }


    const resultText =
        document.getElementById("resultText");

    if (resultText) {

        resultText.textContent =
            `${list.length} موقع`;

    }

}


// ==========================================
// 🔎 البحث وفلترة المواقع
// ==========================================

function filterSiteList() {

    const searchInput =
        document.getElementById("siteSearch");

    const categorySelect =
        document.getElementById("categorySelect");


    const searchText =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    const selectedCategory =
        categorySelect
            ? categorySelect.value
            : "all";


    let filteredSites = sites.filter(site => {

        const matchesCategory =
            selectedCategory === "all" ||
            site.category === selectedCategory;


        const searchableText = (

            site.name +
            " " +
            site.description +
            " " +
            site.categoryName

        ).toLowerCase();


        const matchesSearch =
            searchText === "" ||
            searchableText.includes(searchText);


        return matchesCategory && matchesSearch;

    });


    displaySites(filteredSites);

}


// ==========================================
// 🔍 البحث الذكي من الرئيسية
// ==========================================

function smartSearch() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("smartResults");


    if (!input || !results) return;


    const query =
        input.value.trim().toLowerCase();


    if (!query) {

        results.innerHTML = "";

        return;

    }


    const matched = sites
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
        .slice(0, 6);


    if (matched.length === 0) {

        results.innerHTML = `
            <div class="search-no-results">
                🔍 لا توجد نتائج
            </div>
        `;

        return;

    }


    results.innerHTML = matched.map(site => `

        <div
            class="smart-result"
            onclick="openSite('${site.url}')"
        >

            <span class="smart-result-icon">
                ${site.icon}
            </span>

            <div>

                <strong>
                    ${site.name}
                </strong>

                <small>
                    ${site.categoryName}
                </small>

            </div>

        </div>

    `).join("");

}


// ==========================================
// ⌨️ Enter في البحث
// ==========================================

function handleSearchKey(event) {

    if (event.key !== "Enter") return;


    const input =
        document.getElementById("searchInput");


    if (!input) return;


    const query =
        input.value.trim();


    if (!query) return;


    const found =
        sites.find(site => {

            return (

                site.name
                    .toLowerCase()
                    .includes(query.toLowerCase())

            );

        });


    if (found) {

        openSite(found.url);

    } else {

        showSection("sites");


        const siteSearch =
            document.getElementById("siteSearch");


        if (siteSearch) {

            siteSearch.value = query;

        }


        filterSiteList();

    }

}


// ==========================================
// 📝 أمثلة البحث
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

    if (!sites.length) return;


    const randomIndex =
        Math.floor(
            Math.random() * sites.length
        );


    const random =
        sites[randomIndex];


    showToast(
        `🎲 الموقع العشوائي: ${random.name}`
    );


    setTimeout(() => {

        openSite(random.url);

    }, 500);

}


// ==========================================
// ⭐ تبديل المفضلة
// ==========================================

function toggleFavorite(siteName) {

    const index =
        favorites.indexOf(siteName);


    if (index === -1) {

        favorites.push(siteName);

        showToast(
            `❤️ تمت إضافة ${siteName} إلى المفضلة`
        );

    } else {

        favorites.splice(index, 1);

        showToast(
            `🤍 تمت إزالة ${siteName} من المفضلة`
        );

    }


    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );


    // إعادة تحديث الصفحات

    displaySites(
        getCurrentFilteredSites()
    );


    renderFavorites();

}


// ==========================================
// 🔎 الحصول على المواقع المفلترة حالياً
// ==========================================

function getCurrentFilteredSites() {

    const searchInput =
        document.getElementById("siteSearch");

    const categorySelect =
        document.getElementById("categorySelect");


    const searchText =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    const category =
        categorySelect
            ? categorySelect.value
            : "all";


    return sites.filter(site => {

        const matchesCategory =
            category === "all" ||
            site.category === category;


        const text = (

            site.name +
            " " +
            site.description +
            " " +
            site.categoryName

        ).toLowerCase();


        const matchesSearch =
            searchText === "" ||
            text.includes(searchText);


        return matchesCategory && matchesSearch;

    });

}


// ==========================================
// ❤️ عرض المفضلة
// ==========================================

function renderFavorites() {

    const container =
        document.getElementById(
            "favoritesContainer"
        );


    if (!container) return;


    const favoriteSites =
        sites.filter(site =>
            favorites.includes(site.name)
        );


    if (favoriteSites.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ❤️
                </div>

                <h3>
                    لا توجد مواقع مفضلة
                </h3>

                <p>
                    اضغط على ❤️ بجانب أي موقع لإضافته هنا.
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


// ==========================================
// 🎉 عرض قسم مسلية
// ==========================================

function renderFun() {

    const container =
        document.getElementById(
            "funContainer"
        );


    if (!container) return;


    const funSites =
        siteData.fun || [];


    container.innerHTML =
        funSites
            .map(site => {

                return createSiteCard({
                    ...site,
                    category: "fun",
                    categoryName: categoryNames.fun
                });

            })
            .join("");

}


// ==========================================
// 🎮 عرض قسم الألعاب
// ==========================================

function renderGaming() {

    const container =
        document.getElementById(
            "gamingContainer"
        );


    if (!container) return;


    const gamingSites =
        siteData.games || [];


    container.innerHTML =
        gamingSites
            .map(site => {

                return createSiteCard({
                    ...site,
                    category: "games",
                    categoryName: categoryNames.games
                });

            })
            .join("");

}


// ==========================================
// ⭐ المواقع المميزة
// ==========================================

function renderFeatured() {

    const container =
        document.getElementById(
            "featuredContainer"
        );


    if (!container) return;


    const featuredNames = [

        "Minecraft",
        "Eaglercraft",
        "Neal.fun",
        "ChatGPT",
        "YouTube",
        "Canva"

    ];


    const featured =
        featuredNames
            .map(name =>
                sites.find(
                    site => site.name === name
                )
            )
            .filter(Boolean);


    container.innerHTML =
        featured
            .map(createSiteCard)
            .join("");

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
            Object.keys(siteData).length;

    }


    if (totalFavorites) {

        totalFavorites.textContent =
            favorites.length;

    }

}


// ==========================================
// 🔔 Toast
// ==========================================

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

            toast.classList.remove("show");

        }, 2500);

}


// ==========================================
// 🚀 تشغيل الموقع
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // الوضع الليلي

        if (
            localStorage.getItem(
                "webboxDarkMode"
            ) === "true"
        ) {

            document.body.classList.add("dark");

        }


        updateThemeButton();


        // الإحصائيات

        updateStats();


        // المحتوى

        renderFeatured();

        renderFun();

        renderGaming();

        renderFavorites();


        // عرض المواقع

        displaySites(sites);


        // إظهار الرئيسية فقط

        const sections =
            document.querySelectorAll(
                ".page-section, section"
            );


        sections.forEach(section => {

            section.style.display = "none";

            section.classList.remove("active");

        });


        const home =
            document.getElementById("home");


        if (home) {

            home.style.display = "block";

            home.classList.add("active");

        }


        // البحث في الصفحة الرئيسية

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


        // البحث في صفحة المواقع

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


        // تغيير التصنيف

        const categorySelect =
            document.getElementById(
                "categorySelect"
            );


        if (categorySelect) {

            categorySelect.addEventListener(
                "change",
                filterSiteList
            );

        }

    }
);
