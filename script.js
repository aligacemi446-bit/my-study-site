/* =========================================================
   WEBBOX 5.0
   Navigation-fixed version
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
   =========================================================
   مهم:
   ضع هنا rawSites الموجود عندك كما هو بالكامل.
   لا تحذف أي موقع من الـ510.
   ========================================================= */

const rawSites = {

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
    ]

    /*
      ⚠️ أكمل هنا بقية rawSites:
      fun
      education
      books
      ai
      design
      video
      music
      programming
      tools

      باستعمال القوائم التي أرسلتها أنت سابقًا بدون تغيير.
    */
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
let currentView =
    localStorage.getItem(STORAGE_KEYS.view) || "grid";

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

    /*
       مهم جدًا:
       نحدد الرئيسية فقط عند بداية الموقع.
    */
    showSection("home");
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

            const input =
                document.getElementById("searchInput");

            if (input) {
                input.focus();
            }
        }
    });

    const siteSearch =
        document.getElementById("siteSearch");

    if (siteSearch) {
        siteSearch.addEventListener(
            "input",
            filterSiteList
        );
    }

    const categorySelect =
        document.getElementById("categorySelect");

    if (categorySelect) {
        categorySelect.addEventListener(
            "change",
            filterSiteList
        );
    }

    const sortSelect =
        document.getElementById("sortSelect");

    if (sortSelect) {
        sortSelect.addEventListener(
            "change",
            filterSiteList
        );
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

/*
   هذه هي الدالة الأساسية.
   كل صفحات الموقع تستخدمها.
*/

function showSection(sectionId) {

    const target =
        document.getElementById(sectionId);

    if (!target) {
        console.warn(
            `WEBBOX: القسم غير موجود: ${sectionId}`
        );
        return;
    }

    currentSection = sectionId;

    /*
       إخفاء جميع صفحات main
    */

    document
        .querySelectorAll("main > .page-section")
        .forEach(section => {

            section.classList.remove("active");

            section.style.display = "none";
        });

    /*
       إظهار الصفحة المطلوبة
    */

    target.classList.add("active");
    target.style.display = "block";

    /*
       تحديث أزرار Navigation
    */

    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.remove("active");

            const onclick =
                button.getAttribute("onclick") || "";

            if (
                onclick.includes(
                    `'${sectionId}'`
                ) ||
                onclick.includes(
                    `"${sectionId}"`
                )
            ) {
                button.classList.add("active");
            }
        });

    /*
       إغلاق قائمة الهاتف
    */

    const mobileNav =
        document.getElementById("mobileNav");

    if (mobileNav) {
        mobileNav.classList.remove("open");
    }

    /*
       تحديث الصفحة المطلوبة
    */

    switch (sectionId) {

        case "categories":
            renderCategories();
            break;

        case "sites":
            renderSites();
            break;

        case "fun":
            renderFun();
            break;

        case "gaming":
            renderGaming();
            break;

        case "favorites":
            renderFavorites();
            break;

        case "recent":
            renderRecent();
            break;
    }

    /*
       العودة إلى الأعلى
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/*
   هذه الدالة هي التي يستعملها index.html
   مثل:

   onclick="webboxNavigate('sites', this)"
*/

function webboxNavigate(
    sectionId,
    clickedButton = null
) {

    showSection(sectionId);

    if (clickedButton) {

        document
            .querySelectorAll(".nav-btn")
            .forEach(button => {
                button.classList.remove("active");
            });

        clickedButton.classList.add("active");
    }
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMobileMenu() {

    const mobileNav =
        document.getElementById("mobileNav");

    if (mobileNav) {
        mobileNav.classList.toggle("open");
    }
}

/* =========================================================
   THEME
   ========================================================= */

function initializeTheme() {

    const theme =
        localStorage.getItem(
            STORAGE_KEYS.theme
        );

    if (theme === "light") {

        document.body.classList.add(
            "light-mode"
        );

        updateThemeButton(true);

    } else {

        document.body.classList.remove(
            "light-mode"
        );

        updateThemeButton(false);
    }
}

function toggleDarkMode() {

    const isLight =
        document.body.classList.toggle(
            "light-mode"
        );

    localStorage.setItem(
        STORAGE_KEYS.theme,
        isLight ? "light" : "dark"
    );

    updateThemeButton(isLight);
}

function updateThemeButton(isLight) {

    const button =
        document.getElementById("themeBtn");

    if (!button) return;

    button.innerHTML =
        isLight ? "🌙" : "☀️";

    button.title =
        isLight
            ? "تفعيل الوضع الداكن"
            : "تفعيل الوضع الفاتح";
}

/* =========================================================
   VIEW MODE
   ========================================================= */

function initializeView() {

    updateViewButtons();

    const container =
        document.getElementById(
            "sitesContainer"
        );

    if (container) {

        container.classList.toggle(
            "list-view",
            currentView === "list"
        );
    }
}

function setView(view) {

    currentView = view;

    localStorage.setItem(
        STORAGE_KEYS.view,
        view
    );

    updateViewButtons();

    const container =
        document.getElementById(
            "sitesContainer"
        );

    if (container) {

        container.classList.toggle(
            "list-view",
            view === "list"
        );
    }
}

function updateViewButtons() {

    const gridButton =
        document.getElementById(
            "gridViewBtn"
        );

    const listButton =
        document.getElementById(
            "listViewBtn"
        );

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

    const container =
        document.getElementById(
            "categoriesContainer"
        );

    if (!container) return;

    container.innerHTML =
        Object.entries(CATEGORY_INFO)
            .map(([key, category]) => {

                const count =
                    siteData.filter(
                        site =>
                            site.category === key
                    ).length;

                return `
                    <article
                        class="category-card"
                        onclick="filterByCategory('${key}')"
                    >

                        <div class="category-icon">
                            ${category.icon}
                        </div>

                        <h3>
                            ${escapeHTML(
                                category.name
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                category.description
                            )}
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

    const container =
        document.getElementById(
            "homeCategories"
        );

    if (!container) return;

    container.innerHTML =
        Object.entries(CATEGORY_INFO)
            .map(([key, category]) => {

                const count =
                    siteData.filter(
                        site =>
                            site.category === key
                    ).length;

                return `
                    <button
                        class="category-card"
                        onclick="filterByCategory('${key}')"
                    >

                        <div class="category-icon">
                            ${category.icon}
                        </div>

                        <h3>
                            ${escapeHTML(
                                category.name
                            )}
                        </h3>

                        <span class="category-count">
                            ${count}
                        </span>

                    </button>
                `;
            })
            .join("");
}

function populateCategorySelect() {

    const select =
        document.getElementById(
            "categorySelect"
        );

    if (!select) return;

    const currentValue =
        select.value;

    select.innerHTML = `
        <option value="all">
            كل التصنيفات
        </option>

        ${Object.entries(CATEGORY_INFO)
            .map(([key, category]) => {

                const count =
                    siteData.filter(
                        site =>
                            site.category === key
                    ).length;

                return `
                    <option value="${key}">
                        ${category.icon}
                        ${category.name}
                        (${count})
                    </option>
                `;
            })
            .join("")}
    `;

    select.value =
        currentValue || "all";
}

function filterByCategory(category) {

    showSection("sites");

    const select =
        document.getElementById(
            "categorySelect"
        );

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

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;

    const query =
        input.value.trim();

    if (!query) {

        showSection("sites");

        return;
    }

    showSection("sites");

    const siteSearch =
        document.getElementById(
            "siteSearch"
        );

    if (siteSearch) {
        siteSearch.value = query;
    }

    const categorySelect =
        document.getElementById(
            "categorySelect"
        );

    if (categorySelect) {
        categorySelect.value = "all";
    }

    filterSiteList();
}

function quickSearch(query) {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (input) {
        input.value = query;
    }

    handleMainSearch({
        preventDefault: () => {}
    });
}

/* =========================================================
   SITES
   ========================================================= */

function renderSites(list = siteData) {

    const container =
        document.getElementById(
            "sitesContainer"
        );

    if (!container) return;

    container.classList.toggle(
        "list-view",
        currentView === "list"
    );

    if (!list.length) {

        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    🔎
                </div>

                <h3>
                    لم يتم العثور على مواقع
                </h3>

                <p>
                    جرب كلمة بحث أخرى أو اختر
                    تصنيفًا مختلفًا.
                </p>

            </div>
        `;

        updateResultText(0);

        return;
    }

    container.innerHTML =
        list
            .map(site =>
                createSiteCard(site)
            )
            .join("");

    updateResultText(list.length);
}

function createSiteCard(site) {

    const category =
        CATEGORY_INFO[site.category];

    const isFavorite =
        favorites.includes(site.id);

    const siteVisits =
        visits[site.id] || 0;

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
                    class="favorite-btn ${
                        isFavorite
                            ? "active"
                            : ""
                    }"
                    onclick="
                        toggleFavorite(
                            '${site.id}',
                            event
                        )
                    "
                    title="إضافة للمفضلة"
                >
                    ${
                        isFavorite
                            ? "★"
                            : "☆"
                    }
                </button>

            </div>

            <div class="site-card-body">

                <span class="site-category">
                    ${
                        category
                            ? category.icon
                            : "🌐"
                    }

                    ${
                        category
                            ? escapeHTML(
                                category.name
                              )
                            : ""
                    }
                </span>

                <h3>
                    ${escapeHTML(site.name)}
                </h3>

                <p>
                    ${escapeHTML(
                        site.description
                    )}
                </p>

                <div class="site-card-footer">

                    <span class="visit-count">
                        👁️
                        ${formatNumber(
                            siteVisits
                        )}
                    </span>

                    <div class="site-actions">

                        <button
                            class="details-btn"
                            onclick="
                                openSiteModal(
                                    '${site.id}'
                                )
                            "
                        >
                            التفاصيل
                        </button>

                        <button
                            class="open-btn"
                            onclick="
                                openSite(
                                    '${site.id}'
                                )
                            "
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

    const container =
        document.getElementById(
            "featuredContainer"
        );

    if (!container) return;

    const featured =
        siteData.slice(0, 12);

    container.innerHTML =
        featured
            .map(site =>
                createSiteCard(site)
            )
            .join("");
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

    const funSites =
        siteData.filter(
            site =>
                site.category === "fun"
        );

    container.innerHTML =
        funSites
            .map(site =>
                createSiteCard(site)
            )
            .join("");
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

    const gamingSites =
        siteData.filter(
            site =>
                site.category === "games"
        );

    container.innerHTML =
        gamingSites
            .map(site =>
                createSiteCard(site)
            )
            .join("");
}

/* =========================================================
   FAVORITES
   ========================================================= */

function renderFavorites() {

    const container =
        document.getElementById(
            "favoritesContainer"
        );

    if (!container) return;

    const favoriteSites =
        siteData.filter(site =>
            favorites.includes(site.id)
        );

    if (!favoriteSites.length) {

        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    ☆
                </div>

                <h3>
                    لا توجد مواقع مفضلة
                </h3>

                <p>
                    اضغط على النجمة بجانب أي
                    موقع لإضافته هنا.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        favoriteSites
            .map(site =>
                createSiteCard(site)
            )
            .join("");
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

    const recent =
        recentSites
            .map(id =>
                siteData.find(
                    site =>
                        site.id === id
                )
            )
            .filter(Boolean);

    if (!recent.length) {

        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    🕘
                </div>

                <h3>
                    لا توجد مواقع حديثة
                </h3>

                <p>
                    المواقع التي تفتحها
                    ستظهر هنا.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        recent
            .map(site =>
                createSiteCard(site)
            )
            .join("");
}

/* =========================================================
   SEARCH / FILTER
   ========================================================= */

function filterSiteList() {

    const searchInput =
        document.getElementById(
            "siteSearch"
        );

    const categorySelect =
        document.getElementById(
            "categorySelect"
        );

    const sortSelect =
        document.getElementById(
            "sortSelect"
        );

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

    let filtered =
        [...siteData];

    if (query) {

        filtered =
            filtered.filter(site => {

                const searchable = [
                    site.name,
                    site.description,
                    site.category,
                    CATEGORY_INFO[
                        site.category
                    ]?.name || "",
                    site.url
                ]
                    .join(" ")
                    .toLowerCase();

                return searchable.includes(
                    query
                );
            });
    }

    if (category !== "all") {

        filtered =
            filtered.filter(
                site =>
                    site.category === category
            );
    }

    switch (sort) {

        case "name":

            filtered.sort((a, b) =>
                a.name.localeCompare(
                    b.name,
                    "ar"
                )
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
                CATEGORY_INFO[
                    a.category
                ].name.localeCompare(
                    CATEGORY_INFO[
                        b.category
                    ].name,
                    "ar"
                )
            );

            break;
    }

    renderSites(filtered);
}

function clearFilters() {

    const searchInput =
        document.getElementById(
            "siteSearch"
        );

    const categorySelect =
        document.getElementById(
            "categorySelect"
        );

    const sortSelect =
        document.getElementById(
            "sortSelect"
        );

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

    const resultText =
        document.getElementById(
            "resultText"
        );

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

    const index =
        favorites.indexOf(siteId);

    if (index === -1) {

        favorites.push(siteId);

        showToast(
            "⭐ تمت إضافة الموقع إلى المفضلة"
        );

    } else {

        favorites.splice(index, 1);

        showToast(
            "تمت إزالة الموقع من المفضلة"
        );
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

    const site =
        siteData.find(
            item =>
                item.id === siteId
        );

    if (!site) return;

    visits[siteId] =
        (visits[siteId] || 0) + 1;

    saveStorage(
        STORAGE_KEYS.visits,
        visits
    );

    recentSites = [
        siteId,
        ...recentSites.filter(
            id => id !== siteId
        )
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

    const site =
        siteData.find(
            item =>
                item.id === siteId
        );

    if (!site) return;

    currentSite = site;

    const modal =
        document.getElementById(
            "siteModal"
        );

    if (!modal) return;

    const modalIcon =
        document.getElementById(
            "modalIcon"
        );

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );

    const modalCategory =
        document.getElementById(
            "modalCategory"
        );

    const modalDescription =
        document.getElementById(
            "modalDescription"
        );

    const modalVisits =
        document.getElementById(
            "modalVisits"
        );

    const modalOpenBtn =
        document.getElementById(
            "modalOpenBtn"
        );

    const modalFavoriteBtn =
        document.getElementById(
            "modalFavoriteBtn"
        );

    const modalFavorite =
        document.getElementById(
            "modalFavorite"
        );

    if (modalIcon) {
        modalIcon.textContent =
            site.icon;
    }

    if (modalTitle) {
        modalTitle.textContent =
            site.name;
    }

    if (modalCategory) {
        modalCategory.textContent =
            CATEGORY_INFO[
                site.category
            ]?.name || "";
    }

    if (modalDescription) {
        modalDescription.textContent =
            site.description;
    }

    if (modalVisits) {
        modalVisits.textContent =
            `👁️ ${formatNumber(
                visits[site.id] || 0
            )} زيارة`;
    }

    if (modalOpenBtn) {

        modalOpenBtn.onclick = () => {
            openSite(site.id);
        };
    }

    const favorite =
        favorites.includes(site.id);

    if (modalFavorite) {

        modalFavorite.textContent =
            favorite
                ? "★"
                : "☆";
    }

    if (modalFavoriteBtn) {

        modalFavoriteBtn.onclick =
            event => {

                toggleFavorite(
                    site.id,
                    event
                );

                const nowFavorite =
                    favorites.includes(
                        site.id
                    );

                if (modalFavorite) {

                    modalFavorite.textContent =
                        nowFavorite
                            ? "★"
                            : "☆";
                }
            };
    }

    modal.classList.add("active");

    document.body.classList.add(
        "modal-open"
    );
}

function closeModal() {

    const modal =
        document.getElementById(
            "siteModal"
        );

    if (!modal) return;

    modal.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "modal-open"
    );

    currentSite = null;
}

/* =========================================================
   STATS
   ========================================================= */

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
            formatNumber(
                siteData.length
            );
    }

    if (totalCategories) {

        totalCategories.textContent =
            formatNumber(
                Object.keys(
                    CATEGORY_INFO
                ).length
            );
    }

    if (totalFavorites) {

        totalFavorites.textContent =
            formatNumber(
                favorites.length
            );
    }

    if (totalVisits) {

        const visitTotal =
            Object.values(visits)
                .reduce(
                    (sum, value) =>
                        sum +
                        Number(
                            value || 0
                        ),
                    0
                );

        totalVisits.textContent =
            formatNumber(
                visitTotal
            );
    }
}

/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;

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
        toastTimer
    );

    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);
}

/* =========================================================
   RANDOM SITE
   ========================================================= */

function randomSite() {

    if (!siteData.length) return;

    const randomIndex =
        Math.floor(
            Math.random() *
            siteData.length
        );

    const site =
        siteData[randomIndex];

    openSiteModal(
        site.id
    );
}

/* =========================================================
   COVER
   ========================================================= */

function hashString(value) {

    let hash = 0;

    for (
        let i = 0;
        i < value.length;
        i++
    ) {

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

    const hash =
        hashString(
            site.id +
            site.name +
            site.url
        );

    return themes[
        hash % themes.length
    ];
}

function getSiteCover(site) {

    const [
        color1,
        color2
    ] = getCoverTheme(site);

    const hash =
        hashString(
            site.name +
            site.url
        );

    const angle =
        110 + (hash % 100);

    return `
        background:
            radial-gradient(
                circle at
                ${20 + hash % 60}%
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

    return Number(
        number || 0
    ).toLocaleString("ar");
}

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}

/* =========================================================
   MODAL BACKDROP
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const modal =
            document.getElementById(
                "siteModal"
            );

        if (!modal) return;

        if (
            event.target === modal ||
            event.target.classList.contains(
                "modal-backdrop"
            )
        ) {
            closeModal();
        }
    }
);

/* =========================================================
   EXPORTS FOR HTML ONCLICK
   ========================================================= */

window.showSection =
    showSection;

/*
   هذا هو الإصلاح الأساسي.
*/
window.webboxNavigate =
    webboxNavigate;

window.toggleMobileMenu =
    toggleMobileMenu;

window.toggleDarkMode =
    toggleDarkMode;

window.handleMainSearch =
    handleMainSearch;

window.quickSearch =
    quickSearch;

window.filterByCategory =
    filterByCategory;

window.filterSiteList =
    filterSiteList;

window.clearFilters =
    clearFilters;

window.setView =
    setView;

window.toggleFavorite =
    toggleFavorite;

window.openSite =
    openSite;

window.openSiteModal =
    openSiteModal;

window.closeModal =
    closeModal;

window.randomSite =
    randomSite;

/* =========================================================
   DEBUG
   ========================================================= */

console.log(
    "%cWEBBOX 5.0",
    "font-size:24px;font-weight:bold;"
);

console.log(
    `عدد المواقع: ${siteData.length}`
);

console.log(
    `عدد التصنيفات: ${
        Object.keys(
            CATEGORY_INFO
        ).length
    }`
);
