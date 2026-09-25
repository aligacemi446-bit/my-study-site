// ==========================================
// 🌐 WebBox 4.0 - Complete JavaScript
// ==========================================


// ==========================================
// 📚 بيانات المواقع
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
// 📦 تحويل البيانات إلى قائمة واحدة
// ==========================================

let sites = [];

Object.keys(siteData).forEach(category => {

    siteData[category].forEach((site, index) => {

        sites.push({
            ...site,
            id: `${category}-${index}`,
            category,
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

if (!Array.isArray(favorites)) {
    favorites = [];
}


// ==========================================
// 👁️ الزيارات
// ==========================================

let visits = JSON.parse(
    localStorage.getItem("webboxVisits") || "{}"
);

if (!visits || typeof visits !== "object") {
    visits = {};
}


// ==========================================
// 🕘 المواقع الأخيرة
// ==========================================

let recentSites = JSON.parse(
    localStorage.getItem("webboxRecent") || "[]"
);

if (!Array.isArray(recentSites)) {
    recentSites = [];
}


// ==========================================
// 🎨 أغلفة المواقع
// ==========================================

function hashString(text) {

    let hash = 0;

    for (let i = 0; i < text.length; i++) {

        hash =
            ((hash << 5) - hash) +
            text.charCodeAt(i);

        hash |= 0;
    }

    return Math.abs(hash);
}


function getDomain(url) {

    try {

        return new URL(url)
            .hostname
            .replace(/^www\./, "");

    } catch {

        return "webbox.site";

    }

}


const coverPalettes = [

    ["#6d5dfc", "#00d4ff", "#ff4ecd"],
    ["#ff416c", "#ff4b2b", "#ffd200"],
    ["#00c6ff", "#0072ff", "#7b2cff"],
    ["#8e2de2", "#4a00e0", "#00d4ff"],
    ["#00f2fe", "#4facfe", "#7367f0"],
    ["#f857a6", "#ff5858", "#ff9966"],
    ["#11998e", "#38ef7d", "#00c6ff"],
    ["#fc466b", "#3f5efb", "#8e2de2"],
    ["#4776e6", "#8e54e9", "#ff4ecd"],
    ["#ee0979", "#ff6a00", "#ffd200"],
    ["#1d976c", "#93f9b9", "#00c6ff"],
    ["#654ea3", "#eaafc8", "#00d4ff"]

];


function getCoverTheme(site) {

    const seed =
        `${site.id}-${site.name}-${site.url}-${site.category}`;

    const hash = hashString(seed);

    const palette =
        coverPalettes[
            hash % coverPalettes.length
        ];

    return {

        color1: palette[0],
        color2: palette[1],
        color3: palette[2],

        angle:
            105 + (hash % 70)

    };

}


// ==========================================
// 🛡️ حماية HTML
// ==========================================

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ==========================================
// 🖼️ غلاف الموقع
// ==========================================

function getSiteCover(site) {

    const theme =
        getCoverTheme(site);

    return `

        <div
            class="webbox-generated-cover"
            style="
                --cover-1:${theme.color1};
                --cover-2:${theme.color2};
                --cover-3:${theme.color3};
                --cover-angle:${theme.angle}deg;
            "
        >

            <div class="webbox-cover-grid"></div>

            <div class="webbox-cover-glow glow-one"></div>

            <div class="webbox-cover-glow glow-two"></div>

            <div class="webbox-cover-orbit orbit-one"></div>

            <div class="webbox-cover-orbit orbit-two"></div>

            <div class="webbox-cover-shine"></div>

            <div class="webbox-cover-top">

                <span class="webbox-cover-category">
                    ${escapeHTML(site.categoryName)}
                </span>

                <span class="webbox-cover-domain">
                    ${escapeHTML(getDomain(site.url))}
                </span>

            </div>

            <div class="webbox-cover-center">

                <div class="webbox-cover-icon">
                    ${escapeHTML(site.icon || "🌐")}
                </div>

                <div class="webbox-cover-title">
                    ${escapeHTML(site.name)}
                </div>

            </div>

            <div class="webbox-cover-bottom">

                <span>WEBBOX</span>

                <span>EXPLORE ↗</span>

            </div>

        </div>

    `;

}


// ==========================================
// 🎨 CSS للأغلفة
// ==========================================

function injectCoverStyles() {

    if (
        document.getElementById(
            "webbox-generated-cover-styles"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "webbox-generated-cover-styles";

    style.textContent = `

        .webbox-generated-cover {
            --cover-1: #6d5dfc;
            --cover-2: #00d4ff;
            --cover-3: #ff4ecd;

            position: relative;
            width: 100%;
            height: 190px;
            overflow: hidden;
            isolation: isolate;

            background:
                linear-gradient(
                    var(--cover-angle),
                    var(--cover-1),
                    var(--cover-2) 52%,
                    var(--cover-3)
                );

            border-radius: 22px 22px 0 0;
            color: white;

            box-shadow:
                inset 0 -45px 80px rgba(0,0,0,.22);

            transition:
                filter .45s ease;
        }


        .site-card:hover
        .webbox-generated-cover {
            filter:
                saturate(1.18)
                brightness(1.08);
        }


        .webbox-cover-grid {
            position: absolute;
            inset: 0;
            opacity: .22;

            background-image:
                linear-gradient(
                    rgba(255,255,255,.16) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255,255,255,.16) 1px,
                    transparent 1px
                );

            background-size: 25px 25px;

            transform:
                perspective(500px)
                rotateX(55deg)
                scale(1.5);

            transform-origin: center bottom;
        }


        .webbox-cover-glow {
            position: absolute;

            width: 180px;
            height: 180px;

            border-radius: 50%;

            filter: blur(35px);

            opacity: .45;

            pointer-events: none;
        }


        .webbox-cover-glow.glow-one {
            top: -80px;
            right: -40px;
            background: var(--cover-3);
        }


        .webbox-cover-glow.glow-two {
            bottom: -100px;
            left: -50px;
            background: var(--cover-2);
        }


        .webbox-cover-orbit {
            position: absolute;

            border:
                1px solid
                rgba(255,255,255,.35);

            border-radius: 50%;

            transform: rotate(-20deg);

            opacity: .7;
        }


        .webbox-cover-orbit.orbit-one {
            width: 310px;
            height: 130px;
            right: -70px;
            top: 15px;
        }


        .webbox-cover-orbit.orbit-two {
            width: 230px;
            height: 100px;
            left: -80px;
            bottom: 5px;
        }


        .webbox-cover-shine {
            position: absolute;

            width: 80px;
            height: 320px;

            top: -60px;
            left: -130px;

            background:
                rgba(255,255,255,.22);

            transform: rotate(25deg);

            filter: blur(8px);

            transition:
                left .7s ease;
        }


        .site-card:hover
        .webbox-cover-shine {
            left: 110%;
        }


        .webbox-cover-top {
            position: absolute;

            top: 15px;
            left: 17px;
            right: 17px;

            display: flex;

            justify-content: space-between;
            align-items: center;

            gap: 10px;

            z-index: 5;
        }


        .webbox-cover-category {
            padding: 6px 10px;

            border-radius: 999px;

            background:
                rgba(0,0,0,.22);

            border:
                1px solid
                rgba(255,255,255,.22);

            backdrop-filter: blur(10px);

            font-size: 11px;
            font-weight: 800;

            white-space: nowrap;
        }


        .webbox-cover-domain {
            max-width: 150px;

            overflow: hidden;

            text-overflow: ellipsis;

            white-space: nowrap;

            font-size: 10px;
            font-weight: 700;

            opacity: .8;
        }


        .webbox-cover-center {
            position: absolute;

            inset: 45px 15px 25px;

            display: flex;

            flex-direction: column;

            justify-content: center;

            align-items: center;

            text-align: center;

            z-index: 5;
        }


        .webbox-cover-icon {
            display: flex;

            align-items: center;
            justify-content: center;

            width: 66px;
            height: 66px;

            border-radius: 20px;

            background:
                rgba(255,255,255,.18);

            border:
                1px solid
                rgba(255,255,255,.3);

            box-shadow:
                0 12px 35px
                rgba(0,0,0,.2),

                inset 0 1px 0
                rgba(255,255,255,.3);

            backdrop-filter:
                blur(14px);

            font-size: 34px;

            margin-bottom: 10px;

            transition:
                transform .4s ease;
        }


        .site-card:hover
        .webbox-cover-icon {
            transform:
                translateY(-5px)
                rotate(-4deg)
                scale(1.08);
        }


        .webbox-cover-title {
            max-width: 92%;

            font-size: 20px;

            font-weight: 950;

            line-height: 1.15;

            text-shadow:
                0 4px 15px
                rgba(0,0,0,.3);

            overflow: hidden;

            text-overflow: ellipsis;

            white-space: nowrap;
        }


        .webbox-cover-bottom {
            position: absolute;

            left: 17px;
            right: 17px;
            bottom: 12px;

            display: flex;

            justify-content: space-between;

            align-items: center;

            font-size: 9px;

            font-weight: 900;

            letter-spacing: 1.5px;

            opacity: .7;

            z-index: 5;
        }


        @media (max-width: 600px) {

            .webbox-generated-cover {
                height: 175px;
            }

            .webbox-cover-title {
                font-size: 17px;
            }

            .webbox-cover-icon {
                width: 58px;
                height: 58px;
                font-size: 29px;
            }

        }

    `;

    document.head.appendChild(style);
}


// ==========================================
// 🌙 الوضع الليلي / الفاتح
// ==========================================

function toggleDarkMode() {

    const isLight =
        document.body.classList.toggle("light-mode");

    localStorage.setItem(
        "webboxLightMode",
        isLight ? "true" : "false"
    );

    updateThemeButton();
}


function updateThemeButton() {

    const button =
        document.getElementById("themeBtn");

    if (!button) return;

    const icon =
        button.querySelector(".theme-icon");

    const isLight =
        document.body.classList.contains("light-mode");

    if (icon) {

        icon.textContent =
            isLight ? "🌙" : "☀️";

    }

    button.title =
        isLight
            ? "تفعيل الوضع الليلي"
            : "تفعيل الوضع الفاتح";
}


// ==========================================
// 🧭 التنقل
// ==========================================

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(
            "main > .page-section"
        );

    sections.forEach(section => {

        section.classList.remove("active");

        section.style.display = "none";

    });


    const target =
        document.getElementById(sectionId);

    if (!target) {

        console.error(
            "WebBox: القسم غير موجود:",
            sectionId
        );

        return;
    }


    target.classList.add("active");

    target.style.display = "block";


    updateNavigation(sectionId);

    closeMobileMenu();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (sectionId === "sites") {
        filterSiteList();
    }

    if (sectionId === "categories") {
        renderCategories();
    }

    if (sectionId === "fun") {
        renderFun();
    }

    if (sectionId === "gaming") {
        renderGaming();
    }

    if (sectionId === "favorites") {
        renderFavorites();
    }

    if (sectionId === "recent") {
        renderRecent();
    }
}


// ==========================================
// 🏠 الرئيسية
// ==========================================

function showHome() {

    showSection("home");

}


// ==========================================
// 📁 التصنيفات
// ==========================================

function showCategories() {

    showSection("categories");

}


// ==========================================
// 🎉 مسلية
// ==========================================

function showFun() {

    showSection("fun");

}


// ==========================================
// 🎮 الألعاب
// ==========================================

function showGaming() {

    showSection("gaming");

}


// ==========================================
// ❤️ المفضلة
// ==========================================

function showFavorites() {

    showSection("favorites");

}


// ==========================================
// 🧭 تحديث الزر النشط
// ==========================================

function updateNavigation(sectionId) {

    const buttons =
        document.querySelectorAll(
            ".nav-btn"
        );

    buttons.forEach(button => {

        button.classList.remove("active");

    });


    const map = {
        home: "الرئيسية",
        categories: "التصنيفات",
        sites: "المواقع",
        fun: "مسلية",
        gaming: "الألعاب",
        favorites: "المفضلة"
    };


    const targetText =
        map[sectionId];

    if (!targetText) return;


    buttons.forEach(button => {

        if (
            button.textContent
                .replace(/\s+/g, " ")
                .trim()
                .includes(targetText)
        ) {

            button.classList.add("active");

        }

    });
}


// ==========================================
// 📱 القائمة للموبايل
// ==========================================

function toggleMobileMenu() {

    const menu =
        document.getElementById(
            "mobileNav"
        );

    if (!menu) return;

    menu.classList.toggle("active");
}


function closeMobileMenu() {

    const menu =
        document.getElementById(
            "mobileNav"
        );

    if (!menu) return;

    menu.classList.remove("active");
}


// ==========================================
// 📌 فلترة التصنيف
// ==========================================

function filterCategory(category) {

    if (!siteData[category]) return;

    showSection("sites");


    const select =
        document.getElementById(
            "categorySelect"
        );

    if (select) {
        select.value = category;
    }


    const search =
        document.getElementById(
            "siteSearch"
        );

    if (search) {
        search.value = "";
    }


    filterSiteList();
}


// ==========================================
// 🃏 إنشاء بطاقة موقع
// ==========================================

function createSiteCard(site) {

    const isFavorite =
        favorites.includes(site.name);

    const visitCount =
        visits[site.name] || 0;


    return `

        <article class="site-card">

            ${getSiteCover(site)}

            <div class="site-card-body">

                <div
                    class="site-category"
                >
                    ${
                        categoryIcons[site.category]
                        || "🌐"
                    }

                    ${escapeHTML(site.categoryName)}
                </div>


                <h3>
                    ${escapeHTML(site.name)}
                </h3>


                <p>
                    ${escapeHTML(site.description)}
                </p>


                <div class="site-card-footer">

                    <span class="visit-count">
                        👁️ ${visitCount} زيارة
                    </span>


                    <div class="site-actions">

                        <button
                            class="details-btn"
                            onclick="openModal('${escapeHTML(site.name)}')"
                        >
                            التفاصيل
                        </button>


                        <button
                            class="open-btn"
                            onclick="openSiteByName('${escapeHTML(site.name)}')"
                        >
                            فتح ↗
                        </button>


                        <button
                            class="
                                favorite-btn
                                ${isFavorite ? "active" : ""}
                            "
                            onclick="toggleFavorite('${escapeHTML(site.name)}')"
                            title="المفضلة"
                        >
                            ${isFavorite ? "❤️" : "🤍"}
                        </button>

                    </div>

                </div>

            </div>

        </article>

    `;
}


// ==========================================
// 🌐 عرض المواقع
// ==========================================

function displaySites(list) {

    const container =
        document.getElementById(
            "sitesContainer"
        );

    if (!container) return;


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
                    جرب البحث بكلمة أخرى أو اختر تصنيفاً مختلفاً.
                </p>

            </div>

        `;

    } else {

        container.innerHTML =
            list
                .map(createSiteCard)
                .join("");

    }


    const resultText =
        document.getElementById(
            "resultText"
        );

    if (resultText) {

        resultText.textContent =
            `${list.length} موقع`;

    }
}


// ==========================================
// 🔎 فلترة المواقع
// ==========================================

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


    const searchText =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    const selectedCategory =
        categorySelect
            ? categorySelect.value
            : "all";


    let filtered =
        sites.filter(site => {

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
                !searchText ||
                searchableText.includes(searchText);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    const sortMode =
        sortSelect
            ? sortSelect.value
            : "default";


    if (sortMode === "name") {

        filtered.sort((a, b) =>
            a.name.localeCompare(
                b.name,
                "en"
            )
        );

    }


    if (sortMode === "popular") {

        filtered.sort(
            (a, b) =>
                (visits[b.name] || 0) -
                (visits[a.name] || 0)
        );

    }


    if (sortMode === "favorites") {

        filtered.sort(
            (a, b) =>
                Number(
                    favorites.includes(b.name)
                ) -
                Number(
                    favorites.includes(a.name)
                )
        );

    }


    displaySites(filtered);
}


// ==========================================
// 🧹 مسح الفلاتر
// ==========================================

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


// ==========================================
// 🔍 البحث من الرئيسية
// ==========================================

function handleMainSearch(event) {

    if (event) {
        event.preventDefault();
    }


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

        siteSearch.value =
            query;

    }


    const categorySelect =
        document.getElementById(
            "categorySelect"
        );

    if (categorySelect) {

        categorySelect.value =
            "all";

    }


    filterSiteList();
}


// ==========================================
// 🔎 البحث السريع
// ==========================================

function quickSearch(text) {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;


    input.value = text;

    handleMainSearch();
}


// ==========================================
// 🔎 البحث الذكي
// ==========================================

function smartSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;


    const query =
        input.value
            .trim()
            .toLowerCase();


    if (!query) return;


    const found =
        sites.filter(site => {

            const text = (

                site.name +
                " " +
                site.description +
                " " +
                site.categoryName

            ).toLowerCase();


            return text.includes(query);

        });


    if (found.length === 1) {

        showToast(
            `🌐 ${found[0].name}`
        );

    }
}


// ==========================================
// ⌨️ Enter في البحث
// ==========================================

function handleSearchKey(event) {

    if (event.key !== "Enter") return;

    handleMainSearch(event);
}


// ==========================================
// 📝 مثال بحث
// ==========================================

function useExample(text) {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;

    input.value = text;

    input.focus();
}


// ==========================================
// 🚀 فتح الموقع
// ==========================================

function openSite(url) {

    if (!url) return;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


// ==========================================
// 🚀 فتح موقع بالاسم
// ==========================================

function openSiteByName(name) {

    const site =
        sites.find(
            item =>
                item.name === name
        );

    if (!site) return;


    visits[site.name] =
        (visits[site.name] || 0) + 1;


    localStorage.setItem(
        "webboxVisits",
        JSON.stringify(visits)
    );


    recentSites =
        [
            site.name,
            ...recentSites.filter(
                name => name !== site.name
            )
        ].slice(0, 10);


    localStorage.setItem(
        "webboxRecent",
        JSON.stringify(recentSites)
    );


    updateStats();

    openSite(site.url);
}


// ==========================================
// 🎲 موقع عشوائي
// ==========================================

function randomSite() {

    if (!sites.length) return;


    const random =
        sites[
            Math.floor(
                Math.random() *
                sites.length
            )
        ];


    showToast(
        `🎲 ${random.name}`
    );


    setTimeout(() => {

        openSiteByName(
            random.name
        );

    }, 500);
}


// ==========================================
// ❤️ المفضلة
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

        favorites.splice(
            index,
            1
        );

        showToast(
            `🤍 تمت إزالة ${siteName} من المفضلة`
        );

    }


    localStorage.setItem(
        "webboxFavorites",
        JSON.stringify(favorites)
    );


    updateStats();


    const currentSection =
        document.querySelector(
            ".page-section.active"
        );


    if (
        currentSection &&
        currentSection.id === "favorites"
    ) {

        renderFavorites();

    } else if (
        currentSection &&
        currentSection.id === "sites"
    ) {

        filterSiteList();

    }
}


// ==========================================
// 🔎 المواقع الحالية
// ==========================================

function getCurrentFilteredSites() {

    const searchInput =
        document.getElementById(
            "siteSearch"
        );

    const categorySelect =
        document.getElementById(
            "categorySelect"
        );


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


        return (
            matchesCategory &&
            (
                !searchText ||
                text.includes(searchText)
            )
        );

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
// 🎉 مسلية
// ==========================================

function renderFun() {

    const container =
        document.getElementById(
            "funContainer"
        );

    if (!container) return;


    container.innerHTML =
        (siteData.fun || [])
            .map(site =>
                createSiteCard({
                    ...site,
                    id: `fun-${site.name}`,
                    category: "fun",
                    categoryName: categoryNames.fun
                })
            )
            .join("");
}


// ==========================================
// 🎮 الألعاب
// ==========================================

function renderGaming() {

    const container =
        document.getElementById(
            "gamingContainer"
        );

    if (!container) return;


    container.innerHTML =
        (siteData.games || [])
            .map(site =>
                createSiteCard({
                    ...site,
                    id: `games-${site.name}`,
                    category: "games",
                    categoryName: categoryNames.games
                })
            )
            .join("");
}


// ==========================================
// ⭐ مواقع مميزة
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


// ==========================================
// 📁 التصنيفات
// ==========================================

function renderCategories() {

    const containers = [

        document.getElementById(
            "categoriesContainer"
        ),

        document.getElementById(
            "homeCategories"
        )

    ].filter(Boolean);


    containers.forEach(container => {

        container.innerHTML = "";


        Object.keys(siteData).forEach(category => {

            const count =
                siteData[category].length;


            const card =
                document.createElement("div");

            card.className =
                "category-card";


            card.innerHTML = `

                <div class="category-icon">
                    ${categoryIcons[category] || "🌐"}
                </div>

                <h3>
                    ${escapeHTML(
                        categoryNames[category]
                    )}
                </h3>

                <p>
                    اكتشف أفضل المواقع في قسم
                    ${escapeHTML(
                        categoryNames[category]
                    )}.
                </p>

                <span class="category-count">
                    ${count} موقع
                </span>

            `;


            card.addEventListener(
                "click",
                () => filterCategory(category)
            );


            container.appendChild(card);

        });

    });
}


// ==========================================
// 🕘 المواقع الأخيرة
// ==========================================

function renderRecent() {

    const container =
        document.getElementById(
            "recentContainer"
        );

    if (!container) return;


    const recent =
        recentSites
            .map(name =>
                sites.find(
                    site =>
                        site.name === name
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
                    لا توجد زيارات حديثة
                </h3>

                <p>
                    المواقع التي تفتحها ستظهر هنا.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =
        recent
            .map(createSiteCard)
            .join("");
}


// ==========================================
// 📊 الإحصائيات
// ==========================================

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
                        sum + Number(value || 0),
                    0
                );

        totalVisits.textContent =
            count;

    }
}


// ==========================================
// 📐 عرض Grid / List
// ==========================================

function setViewMode(mode) {

    const container =
        document.getElementById(
            "sitesContainer"
        );

    const gridButton =
        document.getElementById(
            "gridViewBtn"
        );

    const listButton =
        document.getElementById(
            "listViewBtn"
        );


    if (!container) return;


    if (mode === "list") {

        container.classList.remove(
            "grid-view"
        );

        container.classList.add(
            "list-view"
        );

        if (listButton) {
            listButton.classList.add("active");
        }

        if (gridButton) {
            gridButton.classList.remove("active");
        }

    } else {

        container.classList.remove(
            "list-view"
        );

        container.classList.add(
            "grid-view"
        );

        if (gridButton) {
            gridButton.classList.add("active");
        }

        if (listButton) {
            listButton.classList.remove("active");
        }

    }
}


// ==========================================
// 📋 MODAL
// ==========================================

let currentModalSite = null;


function openModal(siteName) {

    const site =
        sites.find(
            item =>
                item.name === siteName
        );

    if (!site) return;


    currentModalSite =
        site;


    const modal =
        document.getElementById(
            "siteModal"
        );

    const icon =
        document.getElementById(
            "modalIcon"
        );

    const title =
        document.getElementById(
            "modalTitle"
        );

    const category =
        document.getElementById(
            "modalCategory"
        );

    const description =
        document.getElementById(
            "modalDescription"
        );

    const visit =
        document.getElementById(
            "modalVisits"
        );

    const favorite =
        document.getElementById(
            "modalFavorite"
        );


    if (icon) {
        icon.textContent =
            site.icon || "🌐";
    }

    if (title) {
        title.textContent =
            site.name;
    }

    if (category) {
        category.textContent =
            `${categoryIcons[site.category] || "🌐"} ${site.categoryName}`;
    }

    if (description) {
        description.textContent =
            site.description;
    }

    if (visit) {
        visit.textContent =
            `👁️ ${visits[site.name] || 0}`;
    }

    if (favorite) {

        favorite.textContent =
            favorites.includes(site.name)
                ? "❤️ إزالة من المفضلة"
                : "☆ أضف للمفضلة";

    }


    const openButton =
        document.getElementById(
            "modalOpenBtn"
        );

    if (openButton) {

        openButton.onclick =
            () => openSiteByName(site.name);

    }


    const favoriteButton =
        document.getElementById(
            "modalFavoriteBtn"
        );

    if (favoriteButton) {

        favoriteButton.onclick =
            () => {

                toggleFavorite(site.name);

                openModal(site.name);

            };

    }


    if (modal) {

        modal.classList.add("active");

    }
}


function closeModal() {

    const modal =
        document.getElementById(
            "siteModal"
        );

    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

    currentModalSite =
        null;
}


// إغلاق النافذة عند الضغط خارجها

document.addEventListener(
    "click",
    event => {

        const modal =
            document.getElementById(
                "siteModal"
            );

        if (
            modal &&
            event.target === modal
        ) {

            closeModal();

        }

    }
);


// إغلاق النافذة بـ Escape

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


// ==========================================
// 🔔 Toast
// ==========================================

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


// ==========================================
// ⚙️ ملء قائمة التصنيفات
// ==========================================

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

    `;


    Object.keys(siteData).forEach(
        category => {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                category;

            option.textContent =
                categoryNames[category];

            select.appendChild(
                option
            );

        }
    );
}


// ==========================================
// 🚀 تشغيل WebBox
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // الأغلفة
        injectCoverStyles();


        // الوضع المحفوظ
        const savedLightMode =
            localStorage.getItem(
                "webboxLightMode"
            ) === "true";


        if (savedLightMode) {

            document.body.classList.add(
                "light-mode"
            );

        } else {

            document.body.classList.remove(
                "light-mode"
            );

        }


        updateThemeButton();


        // قائمة التصنيفات
        populateCategorySelect();


        // الإحصائيات
        updateStats();


        // الصفحة الرئيسية
        renderFeatured();

        renderCategories();


        // الأقسام
        renderFun();

        renderGaming();

        renderFavorites();

        renderRecent();


        // المواقع
        displaySites(sites);


        // الرئيسية فقط
        const sections =
            document.querySelectorAll(
                "main > .page-section"
            );


        sections.forEach(section => {

            section.style.display =
                "none";

            section.classList.remove(
                "active"
            );

        });


        const home =
            document.getElementById(
                "home"
            );


        if (home) {

            home.style.display =
                "block";

            home.classList.add(
                "active"
            );

        }


        updateNavigation("home");


        // بحث الرئيسية
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


        // بحث المواقع
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


        // التصنيف
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


        // الترتيب
        const sortSelect =
            document.getElementById(
                "sortSelect"
            );


        if (sortSelect) {

            sortSelect.addEventListener(
                "change",
                filterSiteList
            );

        }

    }
);
