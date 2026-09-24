// ==========================================
// WebBox
// قاعدة بيانات المواقع
// ==========================================

const sites = [

    // ======================
    // ألعاب
    // ======================

    {
        name: "Poki",
        category: "ألعاب",
        icon: "🎮",

        description:
            "مجموعة كبيرة من الألعاب التي يمكن لعبها مباشرة من المتصفح.",

        keywords: [
            "لعبة",
            "العاب",
            "ألعاب",
            "لعب",
            "game",
            "games",
            "online"
        ],

        url: "https://poki.com/"
    },


    {
        name: "itch.io",
        category: "ألعاب",
        icon: "🕹️",

        description:
            "منصة تحتوي على ألعاب مستقلة ومشاريع من مطورين مختلفين.",

        keywords: [
            "لعبة",
            "العاب",
            "ألعاب",
            "game",
            "indie"
        ],

        url: "https://itch.io/"
    },


    // ======================
    // كتب
    // ======================

    {
        name: "Project Gutenberg",
        category: "كتب",
        icon: "📖",

        description:
            "مكتبة رقمية تحتوي على آلاف الكتب المتاحة للقراءة.",

        keywords: [
            "كتاب",
            "كتب",
            "قراءة",
            "رواية",
            "book",
            "books",
            "reading"
        ],

        url: "https://www.gutenberg.org/"
    },


    {
        name: "Google Books",
        category: "كتب",
        icon: "📚",

        description:
            "البحث عن الكتب ومعلومات عنها.",

        keywords: [
            "كتاب",
            "كتب",
            "قراءة",
            "book"
        ],

        url: "https://books.google.com/"
    },


    // ======================
    // تعليم
    // ======================

    {
        name: "Khan Academy",
        category: "تعليم",
        icon: "🎓",

        description:
            "دروس وتمارين تعليمية في العديد من المجالات.",

        keywords: [
            "تعلم",
            "دراسة",
            "درس",
            "تعليم",
            "رياضيات",
            "علوم",
            "تمارين"
        ],

        url: "https://www.khanacademy.org/"
    },


    {
        name: "WolframAlpha",
        category: "تعليم",
        icon: "🧮",

        description:
            "محرك مفيد للحسابات والأسئلة الرياضية والعلمية.",

        keywords: [
            "رياضيات",
            "حساب",
            "معادلة",
            "فيزياء",
            "math",
            "science"
        ],

        url: "https://www.wolframalpha.com/"
    },


    // ======================
    // ذكاء اصطناعي
    // ======================

    {
        name: "ChatGPT",
        category: "AI",
        icon: "🤖",

        description:
            "مساعد ذكاء اصطناعي للتعلم والكتابة والبرمجة وغيرها.",

        keywords: [
            "ذكاء",
            "ذكاء اصطناعي",
            "ai",
            "مساعد",
            "برمجة",
            "كتابة",
            "سؤال"
        ],

        url: "https://chatgpt.com/"
    },


    {
        name: "Google Gemini",
        category: "AI",
        icon: "✨",

        description:
            "مساعد ذكاء اصطناعي من Google.",

        keywords: [
            "ذكاء",
            "ذكاء اصطناعي",
            "ai",
            "gemini",
            "مساعد"
        ],

        url: "https://gemini.google.com/"
    },


    // ======================
    // تصميم
    // ======================

    {
        name: "Canva",
        category: "تصميم",
        icon: "🎨",

        description:
            "إنشاء التصاميم والصور والعروض بطريقة سهلة.",

        keywords: [
            "تصميم",
            "صورة",
            "صور",
            "لوجو",
            "بوستر",
            "design"
        ],

        url: "https://www.canva.com/"
    },


    {
        name: "Photopea",
        category: "تصميم",
        icon: "🖼️",

        description:
            "محرر صور يعمل مباشرة من المتصفح.",

        keywords: [
            "تصميم",
            "صورة",
            "تعديل صورة",
            "فوتوشوب",
            "photoshop",
            "photo"
        ],

        url: "https://www.photopea.com/"
    },


    // ======================
    // فيديو
    // ======================

    {
        name: "CapCut",
        category: "فيديو",
        icon: "🎬",

        description:
            "أداة لتحرير الفيديو وإنشاء المقاطع.",

        keywords: [
            "فيديو",
            "تعديل فيديو",
            "مونتاج",
            "تحرير فيديو",
            "video",
            "edit"
        ],

        url: "https://www.capcut.com/"
    },


    {
        name: "YouTube",
        category: "فيديو",
        icon: "▶️",

        description:
            "منصة ضخمة لمشاهدة ونشر الفيديوهات.",

        keywords: [
            "فيديو",
            "مشاهدة",
            "يوتيوب",
            "video",
            "watch"
        ],

        url: "https://www.youtube.com/"
    },


    // ======================
    // موسيقى
    // ======================

    {
        name: "Spotify",
        category: "موسيقى",
        icon: "🎵",

        description:
            "الاستماع إلى الموسيقى والبودكاست.",

        keywords: [
            "موسيقى",
            "اغاني",
            "أغاني",
            "music",
            "song"
        ],

        url: "https://open.spotify.com/"
    },


    // ======================
    // برمجة
    // ======================

    {
        name: "CodePen",
        category: "برمجة",
        icon: "💻",

        description:
            "تجربة HTML وCSS وJavaScript مباشرة من المتصفح.",

        keywords: [
            "برمجة",
            "كود",
            "html",
            "css",
            "javascript",
            "موقع",
            "code"
        ],

        url: "https://codepen.io/"
    },


    {
        name: "GitHub",
        category: "برمجة",
        icon: "🐙",

        description:
            "منصة لاستضافة المشاريع البرمجية والتعاون عليها.",

        keywords: [
            "برمجة",
            "كود",
            "مشروع",
            "github",
            "programming",
            "code"
        ],

        url: "https://github.com/"
    },


    // ======================
    // أدوات
    // ======================

    {
        name: "Google Translate",
        category: "أدوات",
        icon: "🌐",

        description:
            "ترجمة النصوص بين العديد من اللغات.",

        keywords: [
            "ترجمة",
            "لغة",
            "انجليزي",
            "إنجليزي",
            "فرنسي",
            "translate"
        ],

        url: "https://translate.google.com/"
    },


    {
        name: "TinyWow",
        category: "أدوات",
        icon: "🛠️",

        description:
            "مجموعة أدوات للتعامل مع الملفات والمستندات وغيرها.",

        keywords: [
            "pdf",
            "ملف",
            "تحويل",
            "word",
            "أداة",
            "اداة",
            "document"
        ],

        url: "https://tinywow.com/"
    }

];



// ==========================================
// فهم نية المستخدم
// ==========================================

const intentKeywords = {

    "ألعاب": [

        "لعبة",
        "العاب",
        "ألعاب",
        "لعب",
        "game",
        "games",
        "gaming",
        "online"

    ],


    "فيديو": [

        "فيديو",
        "مونتاج",
        "تعديل فيديو",
        "تحرير فيديو",
        "قص فيديو",
        "video",
        "edit"

    ],


    "تصميم": [

        "تصميم",
        "تصميم صورة",
        "تعديل صورة",
        "صورة",
        "صور",
        "لوجو",
        "شعار",
        "بوستر",
        "design"

    ],


    "كتب": [

        "كتاب",
        "كتب",
        "قراءة",
        "رواية",
        "قراءة كتاب",
        "book",
        "books",
        "reading"

    ],


    "تعليم": [

        "تعلم",
        "دراسة",
        "درس",
        "تعليم",
        "تمرين",
        "واجب",
        "رياضيات",
        "فيزياء",
        "علوم"

    ],


    "AI": [

        "ذكاء",
        "ذكاء اصطناعي",
        "ai",
        "مساعد",
        "روبوت",
        "ذكاء آلي"

    ],


    "موسيقى": [

        "موسيقى",
        "اغاني",
        "أغاني",
        "اغنية",
        "أغنية",
        "music",
        "song"

    ],


    "برمجة": [

        "برمجة",
        "كود",
        "موقع",
        "مواقع",
        "html",
        "css",
        "javascript",
        "code",
        "programming"

    ],


    "أدوات": [

        "pdf",
        "ملف",
        "تحويل",
        "ترجمة",
        "أداة",
        "اداة",
        "تحويل ملف"

    ]

};



// ==========================================
// فهم الطلب
// ==========================================

function understandQuery(query) {

    query =
        query
        .toLowerCase()
        .trim();


    const detectedCategories = [];


    for (
        const category in intentKeywords
    ) {

        const words =
            intentKeywords[category];


        for (
            const word of words
        ) {

            if (
                query.includes(
                    word.toLowerCase()
                )
            ) {

                detectedCategories.push(
                    category
                );

                break;

            }

        }

    }


    return [
        ...new Set(
            detectedCategories
        )
    ];

}



// ==========================================
// حساب مدى مناسبة الموقع
// ==========================================

function calculateScore(
    site,
    query,
    categories
) {

    let score = 0;


    const text =
        query.toLowerCase();


    // اسم الموقع
    if (
        site.name
        .toLowerCase()
        .includes(text)
    ) {

        score += 15;

    }


    // الوصف
    if (
        site.description
        .toLowerCase()
        .includes(text)
    ) {

        score += 8;

    }


    // الكلمات المفتاحية
    site.keywords.forEach(
        keyword => {

            if (
                text.includes(
                    keyword.toLowerCase()
                )
            ) {

                score += 6;

            }

        }
    );


    // التصنيف الذي فهمناه
    if (
        categories.includes(
            site.category
        )
    ) {

        score += 10;

    }


    return score;

}



// ==========================================
// البحث الذكي أثناء الكتابة
// ==========================================

function smartSearch() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .trim();


    const suggestions =
        document
        .getElementById("suggestions");


    const smartResults =
        document
        .getElementById("smartResults");


    // لا يوجد نص
    if (!input) {

        suggestions.innerHTML = "";

        suggestions.classList.remove(
            "show"
        );

        smartResults.innerHTML = "";

        smartResults.classList.remove(
            "show"
        );

        return;

    }


    const categories =
        understandQuery(input);


    // ترتيب المواقع حسب الصلة
    const results =

        sites
        .map(site => {

            return {

                site: site,

                score:
                    calculateScore(
                        site,
                        input,
                        categories
                    )

            };

        })

        .filter(
            item => item.score > 0
        )

        .sort(
            (a,b) =>
                b.score - a.score
        )

        .map(
            item => item.site
        );


    // ==================================
    // الاقتراحات
    // ==================================

    const topResults =
        results.slice(0,5);


    if (
        topResults.length === 0
    ) {

        suggestions.innerHTML = `

            <div class="suggestion">

                <div class="suggestion-icon">
                    🔎
                </div>

                <div class="suggestion-info">

                    <strong>
                        لم أجد اقتراحاً مناسباً
                    </strong>

                    <small>
                        جرّب مثلاً: أريد تعديل فيديو
                    </small>

                </div>

            </div>

        `;

    }

    else {

        suggestions.innerHTML =

            topResults
            .map(site => `

                <div
                    class="suggestion"
                    onclick="openSite('${site.url}')"
                >

                    <div class="suggestion-icon">
                        ${site.icon}
                    </div>

                    <div class="suggestion-info">

                        <strong>
                            ${site.name}
                        </strong>

                        <small>
                            ${site.category}
                            — ${site.description}
                        </small>

                    </div>

                    <div class="suggestion-arrow">
                        ↗
                    </div>

                </div>

            `)
            .join("");

    }


    suggestions.classList.add(
        "show"
    );


    // ==================================
    // النتائج الذكية
    // ==================================

    renderSmartResults(
        results.slice(0,4)
    );

}



// ==========================================
// عرض النتائج الذكية
// ==========================================

function renderSmartResults(
    results
) {

    const box =
        document
        .getElementById(
            "smartResults"
        );


    if (
        results.length === 0
    ) {

        box.innerHTML = `

            <div class="search-message">

                😕 لم أجد موقعاً مناسباً.

                <br>

                <small>
                    جرب: "أريد لعبة"
                    أو "أريد تعديل فيديو"
                </small>

            </div>

        `;

        box.classList.add(
            "show"
        );

        return;

    }


    box.innerHTML =

        results
        .map(site => `

            <div
                class="smart-result"
                onclick="openSite('${site.url}')"
            >

                <div class="smart-result-icon">
                    ${site.icon}
                </div>

                <h4>
                    ${site.name}
                </h4>

                <p>
                    ${site.description}
                </p>

            </div>

        `)
        .join("");


    box.classList.add(
        "show"
    );

}



// ==========================================
// مثال جاهز
// ==========================================

function useExample(
    text
) {

    const input =
        document
        .getElementById(
            "searchInput"
        );


    input.value = text;


    smartSearch();

}



// ==========================================
// الضغط على Enter
// ==========================================

function handleSearchKey(
    event
) {

    if (
        event.key === "Enter"
    ) {

        showAllSearchResults();

    }

}



// ==========================================
// عرض كل نتائج البحث
// ==========================================

function showAllSearchResults() {

    const input =
        document
        .getElementById(
            "searchInput"
        )
        .value
        .trim();


    if (!input) {

        showSection("sites");

        displaySites(sites);

        return;

    }


    const categories =
        understandQuery(input);


    const results =

        sites
        .map(site => {

            return {

                site: site,

                score:
                    calculateScore(
                        site,
                        input,
                        categories
                    )

            };

        })

        .filter(
            item => item.score > 0
        )

        .sort(
            (a,b) =>
                b.score - a.score
        )

        .map(
            item => item.site
        );


    showSection("sites");


    displaySites(
        results
    );


    document
        .getElementById(
            "suggestions"
        )
        .classList
        .remove("show");

}



// ==========================================
// فتح موقع
// ==========================================

function openSite(
    url
) {

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}



// ==========================================
// عرض المواقع
// ==========================================

function displaySites(
    list
) {

    const container =
        document
        .getElementById(
            "sitesContainer"
        );


    const resultText =
        document
        .getElementById(
            "resultText"
        );


    container.innerHTML = "";


    if (
        list.length === 0
    ) {

        container.innerHTML = `

            <div class="site-card">

                <div class="site-icon">
                    😕
                </div>

                <h3>
                    لا توجد نتائج
                </h3>

                <p>
                    جرب كلمة بحث مختلفة.
                </p>

            </div>

        `;


        resultText.textContent =
            "لا توجد نتائج";


        return;

    }


    resultText.textContent =
        `${list.length} موقع متاح`;


    list.forEach(
        site => {

            const card =
                document
                .createElement(
                    "article"
                );


            card.className =
                "site-card";


            card.innerHTML = `

                <div class="site-icon">
                    ${site.icon}
                </div>

                <span class="tag">
                    ${site.category}
                </span>

                <h3>
                    ${site.name}
                </h3>

                <p>
                    ${site.description}
                </p>

                <a
                    href="${site.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    فتح الموقع ↗
                </a>

            `;


            container.appendChild(
                card
            );

        }
    );

}



// ==========================================
// تصفية المواقع من صفحة المواقع
// ==========================================

function filterSiteList() {

    const search =
        document
        .getElementById(
            "siteSearch"
        )
        .value
        .toLowerCase()
        .trim();


    const category =
        document
        .getElementById(
            "categorySelect"
        )
        .value;


    const results =
        sites.filter(site => {

            const matchesCategory =

                category === "الكل"
                ||
                site.category === category;


            const searchableText =

                `
                ${site.name}
                ${site.category}
                ${site.description}
                ${site.keywords.join(" ")}
                `
                .toLowerCase();


            const matchesSearch =

                !search
                ||
                searchableText.includes(
                    search
                );


            return (
                matchesCategory
                &&
                matchesSearch
            );

        });


    displaySites(
        results
    );

}



// ==========================================
// تصنيف
// ==========================================

function filterCategory(
    category
) {

    showSection("sites");


    document
        .getElementById(
            "categorySelect"
        )
        .value = category;


    document
        .getElementById(
            "siteSearch"
        )
        .value = "";


    const results =
        sites.filter(
            site =>
                site.category === category
        );


    displaySites(
        results
    );

}



// ==========================================
// اختيار التصنيف
// ==========================================

function selectCategory() {

    filterSiteList();

}



// ==========================================
// التنقل بين الصفحات
// ==========================================

function showSection(
    id
) {

    document
        .querySelectorAll(
            ".section"
        )
        .forEach(
            section => {

                section
                .classList
                .remove(
                    "active"
                );

            }
        );


    const section =
        document.getElementById(
            id
        );


    if (!section) return;


    section
        .classList
        .add(
            "active"
        );


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    // عند فتح المواقع
    if (
        id === "sites"
    ) {

        displaySites(
            sites
        );

    }

}



// ==========================================
// الوضع الليلي
// ==========================================

function toggleDarkMode() {

    document
        .body
        .classList
        .toggle(
            "dark"
        );


    const dark =
        document
        .body
        .classList
        .contains(
            "dark"
        );


    localStorage.setItem(

        "webbox-dark",

        dark
        ? "1"
        : "0"

    );

}



// ==========================================
// تحميل الوضع الليلي
// ==========================================

if (
    localStorage.getItem(
        "webbox-dark"
    ) === "1"
) {

    document
        .body
        .classList
        .add(
            "dark"
        );

}



// ==========================================
// إغلاق الاقتراحات عند الضغط خارجها
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        const searchArea =
            document.querySelector(
                ".search-area"
            );


        if (
            searchArea
            &&
            !searchArea.contains(
                event.target
            )
        ) {

            document
                .getElementById(
                    "suggestions"
                )
                .classList
                .remove(
                    "show"
                );

        }

    }
);



// ==========================================
// تشغيل الموقع
// ==========================================

displaySites(
    sites
);
