// ======================================
// WebBox - Database
// ======================================

const sites = [

    {
        name: "Poki",
        category: "ألعاب",
        icon: "🎮",
        description: "مجموعة كبيرة من الألعاب التي يمكن لعبها من المتصفح.",
        url: "https://poki.com/"
    },

    {
        name: "itch.io",
        category: "ألعاب",
        icon: "🕹️",
        description: "منصة تحتوي على ألعاب مستقلة كثيرة.",
        url: "https://itch.io/"
    },

    {
        name: "Project Gutenberg",
        category: "كتب",
        icon: "📖",
        description: "مكتبة رقمية تحتوي على كتب متاحة مجاناً.",
        url: "https://www.gutenberg.org/"
    },

    {
        name: "Google Books",
        category: "كتب",
        icon: "📚",
        description: "البحث عن الكتب والاطلاع على معلومات عنها.",
        url: "https://books.google.com/"
    },

    {
        name: "Khan Academy",
        category: "تعليم",
        icon: "🎓",
        description: "دروس وتمارين تعليمية في عدة مجالات.",
        url: "https://www.khanacademy.org/"
    },

    {
        name: "WolframAlpha",
        category: "تعليم",
        icon: "🧮",
        description: "محرك مفيد للحسابات والأسئلة الرياضية والعلمية.",
        url: "https://www.wolframalpha.com/"
    },

    {
        name: "ChatGPT",
        category: "AI",
        icon: "🤖",
        description: "مساعد ذكاء اصطناعي للكتابة والتعلم والبرمجة وغيرها.",
        url: "https://chatgpt.com/"
    },

    {
        name: "Google Gemini",
        category: "AI",
        icon: "✨",
        description: "مساعد ذكاء اصطناعي من Google.",
        url: "https://gemini.google.com/"
    },

    {
        name: "Canva",
        category: "تصميم",
        icon: "🎨",
        description: "إنشاء تصاميم وعروض وصور بسهولة.",
        url: "https://www.canva.com/"
    },

    {
        name: "Photopea",
        category: "تصميم",
        icon: "🖼️",
        description: "محرر صور يعمل مباشرة من المتصفح.",
        url: "https://www.photopea.com/"
    },

    {
        name: "CapCut",
        category: "فيديو",
        icon: "🎬",
        description: "أداة لتحرير الفيديو وإنشاء المقاطع.",
        url: "https://www.capcut.com/"
    },

    {
        name: "YouTube",
        category: "فيديو",
        icon: "▶️",
        description: "منصة فيديو ضخمة لمشاهدة ونشر المحتوى.",
        url: "https://www.youtube.com/"
    },

    {
        name: "Spotify",
        category: "موسيقى",
        icon: "🎵",
        description: "الاستماع إلى الموسيقى والبودكاست.",
        url: "https://open.spotify.com/"
    },

    {
        name: "CodePen",
        category: "برمجة",
        icon: "💻",
        description: "تجربة HTML وCSS وJavaScript مباشرة.",
        url: "https://codepen.io/"
    },

    {
        name: "GitHub",
        category: "برمجة",
        icon: "🐙",
        description: "منصة لاستضافة المشاريع البرمجية والتعاون عليها.",
        url: "https://github.com/"
    },

    {
        name: "Google Translate",
        category: "أدوات",
        icon: "🌐",
        description: "ترجمة النصوص بين العديد من اللغات.",
        url: "https://translate.google.com/"
    },

    {
        name: "TinyWow",
        category: "أدوات",
        icon: "🛠️",
        description: "مجموعة من الأدوات المختلفة للملفات والمستندات.",
        url: "https://tinywow.com/"
    }

];


// ======================================
// Display sites
// ======================================

function displaySites(list) {

    const container =
        document.getElementById("sitesContainer");

    const resultText =
        document.getElementById("resultText");


    container.innerHTML = "";


    if (list.length === 0) {

        container.innerHTML = `
            <div class="site-card">
                <h3>😕 لم نجد شيئاً</h3>

                <p>
                    جرّب كلمة بحث أخرى أو اختر تصنيفاً مختلفاً.
                </p>
            </div>
        `;

        resultText.textContent = "لا توجد نتائج";

        return;
    }


    resultText.textContent =
        `${list.length} موقع متاح`;


    list.forEach(site => {

        const card =
            document.createElement("article");

        card.className = "site-card";


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


        container.appendChild(card);

    });

}


// ======================================
// Search
// ======================================

function searchSites() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const filtered =
        sites.filter(site => {

            return (

                site.name
                .toLowerCase()
                .includes(input)

                ||

                site.category
                .toLowerCase()
                .includes(input)

                ||

                site.description
                .toLowerCase()
                .includes(input)

            );

        });


    document
        .getElementById("categorySelect")
        .value = "الكل";


    showSection("sites");

    displaySites(filtered);

}


// ======================================
// Category filter
// ======================================

function filterCategory(category) {

    showSection("sites");


    document
        .getElementById("categorySelect")
        .value = category;


    const filtered =
        sites.filter(site =>
            site.category === category
        );


    displaySites(filtered);

}


// ======================================
// Select category
// ======================================

function selectCategory() {

    const category =
        document
        .getElementById("categorySelect")
        .value;


    if (category === "الكل") {

        displaySites(sites);

        return;

    }


    filterCategory(category);

}


// ======================================
// Navigation
// ======================================

function showSection(id) {

    const sections =
        document.querySelectorAll(".section");


    sections.forEach(section => {

        section.classList.remove("active");

    });


    document
        .getElementById(id)
        .classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    if (id === "sites") {

        displaySites(sites);

    }

}


// ======================================
// Dark mode
// ======================================

function toggleDark() {

    document
        .body
        .classList
        .toggle("dark");


    const isDark =
        document
        .body
        .classList
        .contains("dark");


    localStorage.setItem(
        "webbox-dark",
        isDark ? "1" : "0"
    );

}


// ======================================
// Load dark mode
// ======================================

if (
    localStorage.getItem("webbox-dark") === "1"
) {

    document
        .body
        .classList
        .add("dark");

}


// ======================================
// Start
// ======================================

displaySites(sites);
