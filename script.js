/* =========================================================
   🌐 WEBBOX 4.0
   500 Websites — 50 per category
   Smart Search + Dark Mode + Favorites + Visits
   ========================================================= */

"use strict";

/* =========================================================
   📦 DATA
   ========================================================= */

const categoryInfo = {
    games: {
        name: "الألعاب",
        icon: "🎮",
        description: "مواقع ألعاب وتسلية وألعاب متصفح"
    },
    fun: {
        name: "مسلية",
        icon: "🎉",
        description: "مواقع ممتعة وتجارب تفاعلية"
    },
    education: {
        name: "التعليم",
        icon: "📚",
        description: "التعلم والدراسة والدورات"
    },
    books: {
        name: "الكتب",
        icon: "📖",
        description: "قراءة الكتب والمكتبات الرقمية"
    },
    ai: {
        name: "الذكاء الاصطناعي",
        icon: "🤖",
        description: "أدوات الذكاء الاصطناعي"
    },
    design: {
        name: "التصميم",
        icon: "🎨",
        description: "التصميم والصور والجرافيك"
    },
    video: {
        name: "الفيديو",
        icon: "🎬",
        description: "الفيديو والمونتاج والمحتوى المرئي"
    },
    music: {
        name: "الموسيقى",
        icon: "🎵",
        description: "الموسيقى والصوت والبودكاست"
    },
    programming: {
        name: "البرمجة",
        icon: "💻",
        description: "البرمجة وتطوير المواقع والألعاب"
    },
    tools: {
        name: "الأدوات",
        icon: "🛠️",
        description: "أدوات الإنترنت المفيدة"
    }
};

/*
   كل سطر:
   الاسم | الرابط

   50 موقعًا لكل تصنيف.
*/

const rawSites = {

    /* =====================================================
       🎮 GAMES — 50
       ===================================================== */

    games: [
        ["Minecraft", "https://www.minecraft.net/"],
        ["Eaglercraft", "https://eaglercraft.com/"],
        ["Poki", "https://poki.com/"],
        ["CrazyGames", "https://www.crazygames.com/"],
        ["Scratch", "https://scratch.mit.edu/"],
        ["GeoFS", "https://www.geo-fs.com/"],
        ["itch.io", "https://itch.io/"],
        ["Chess.com", "https://www.chess.com/"],
        ["Lichess", "https://lichess.org/"],
        ["2048", "https://2048game.com/"],
        ["Sudoku", "https://sudoku.com/"],
        ["Jigsaw Explorer", "https://www.jigsawexplorer.com/"],
        ["Coolmath Games", "https://www.coolmathgames.com/"],
        ["Miniclip", "https://www.miniclip.com/"],
        ["Game Jolt", "https://gamejolt.com/"],
        ["Pokémon Showdown", "https://pokemonshowdown.com/"],
        ["Krunker", "https://krunker.io/"],
        ["Shell Shockers", "https://shellshock.io/"],
        ["TETR.IO", "https://tetr.io/"],
        ["Agar.io", "https://agar.io/"],
        ["Slither.io", "https://slither.io/"],
        ["Little Big Snake", "https://littlebigsnake.com/"],
        ["Diep.io", "https://diep.io/"],
        ["Paper.io", "https://paper-io.com/"],
        ["Skribbl", "https://skribbl.io/"],
        ["Gartic Phone", "https://garticphone.com/"],
        ["Gartic.io", "https://gartic.io/"],
        ["HaxBall", "https://www.haxball.com/"],
        ["ChessKid", "https://www.chesskid.com/"],
        ["Chess24", "https://chess24.com/"],
        ["Board Game Arena", "https://boardgamearena.com/"],
        ["Y8", "https://www.y8.com/"],
        ["Kongregate", "https://www.kongregate.com/"],
        ["Newgrounds", "https://www.newgrounds.com/"],
        ["Armor Games", "https://armorgames.com/"],
        ["Addicting Games", "https://www.addictinggames.com/"],
        ["Friv", "https://www.friv.com/"],
        ["Kizi", "https://kizi.com/"],
        ["Nitro Type", "https://www.nitrotype.com/"],
        ["TypingClub", "https://www.typingclub.com/"],
        ["Keybr", "https://www.keybr.com/"],
        ["Human Benchmark", "https://humanbenchmark.com/"],
        ["World's Hardest Game", "https://www.coolmathgames.com/0-worlds-hardest-game"],
        ["Pac-Man", "https://www.google.com/search?q=Pac-Man+Google"],
        ["Quick Draw Game", "https://quickdraw.withgoogle.com/"],
        ["Chrome Dino", "https://chromedino.com/"],
        ["Infinite Craft", "https://neal.fun/infinite-craft/"],
        ["Wordle", "https://www.nytimes.com/games/wordle/index.html"],
        ["Connections", "https://www.nytimes.com/games/connections"],
        ["FreeCell", "https://cardgames.io/freecell/"],
        ["Solitaire", "https://solitaire.org/"]
    ],

    /* =====================================================
       🎉 FUN — 50
       ===================================================== */

    fun: [
        ["Neal.fun", "https://neal.fun/"],
        ["Quick Draw", "https://quickdraw.withgoogle.com/"],
        ["Google Earth", "https://earth.google.com/"],
        ["Radio Garden", "https://radio.garden/"],
        ["Stellarium", "https://stellarium-web.org/"],
        ["WindowSwap", "https://www.window-swap.com/"],
        ["Little Alchemy", "https://littlealchemy.com/"],
        ["Pointer Pointer", "https://pointerpointer.com/"],
        ["Zoomquilt", "https://zoomquilt.org/"],
        ["Patatap", "https://patatap.com/"],
        ["Silk", "https://weavesilk.com/"],
        ["Radiooooo", "https://radiooooo.com/"],
        ["The Useless Web", "https://theuselessweb.com/"],
        ["Bored Button", "https://www.boredbutton.com/"],
        ["A Soft Murmur", "https://asoftmurmur.com/"],
        ["Rainy Mood", "https://rainymood.com/"],
        ["Hacker Typer", "https://hackertyper.com/"],
        ["Pointer Pointer", "https://pointerpointer.com/"],
        ["Is It Christmas?", "https://isitchristmas.com/"],
        ["Is Today Friday?", "https://isitfriday.org/"],
        ["Cat Bounce", "https://cat-bounce.com/"],
        ["Koalas to the Max", "https://koalastothemax.com/"],
        ["Falling Falling", "https://fallingfalling.com/"],
        ["This Is Sand", "https://thisissand.com/"],
        ["Blob Opera", "https://artsandculture.withgoogle.com/experiments/blob-opera/"],
        ["Chrome Music Lab", "https://musiclab.chromeexperiments.com/"],
        ["Experiments with Google", "https://experiments.withgoogle.com/"],
        ["Arts & Culture", "https://artsandculture.google.com/"],
        ["Akinator", "https://en.akinator.com/"],
        ["20 Questions", "https://20q.net/"],
        ["GeoGuessr", "https://www.geoguessr.com/"],
        ["City Guesser", "https://cityguessr.com/"],
        ["MapCrunch", "https://www.mapcrunch.com/"],
        ["EarthCam", "https://www.earthcam.com/"],
        ["Flightradar24", "https://www.flightradar24.com/"],
        ["MarineTraffic", "https://www.marinetraffic.com/"],
        ["FlightAware", "https://www.flightaware.com/"],
        ["Windy", "https://www.windy.com/"],
        ["Zoom Earth", "https://zoom.earth/"],
        ["Live World Map", "https://www.worldometers.info/maps/"],
        ["The Scale of the Universe", "https://scaleofuniverse.com/"],
        ["Size of Space", "https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"],
        ["Universe Sandbox", "https://universesandbox.com/"],
        ["Earth Nullschool", "https://earth.nullschool.net/"],
        ["Radio Map", "https://radio.garden/"],
        ["Musicca", "https://www.musicca.com/"],
        ["Virtual Piano", "https://virtualpiano.net/"],
        ["Online Sequencer", "https://onlinesequencer.net/"],
        ["100,000 Stars", "https://stars.chromeexperiments.com/"],
        ["The Secret Door", "https://www.discovery.com/"]
    ],

    /* =====================================================
       📚 EDUCATION — 50
       ===================================================== */

    education: [
        ["Khan Academy", "https://www.khanacademy.org/"],
        ["Coursera", "https://www.coursera.org/"],
        ["edX", "https://www.edx.org/"],
        ["Duolingo", "https://www.duolingo.com/"],
        ["WolframAlpha", "https://www.wolframalpha.com/"],
        ["Wikipedia", "https://www.wikipedia.org/"],
        ["Brilliant", "https://brilliant.org/"],
        ["Quizlet", "https://quizlet.com/"],
        ["BBC Learning English", "https://www.bbc.co.uk/learningenglish/"],
        ["MIT OpenCourseWare", "https://ocw.mit.edu/"],
        ["Google Scholar", "https://scholar.google.com/"],
        ["Desmos", "https://www.desmos.com/"],
        ["CK-12", "https://www.ck12.org/"],
        ["OpenStax", "https://openstax.org/"],
        ["TED-Ed", "https://ed.ted.com/"],
        ["FutureLearn", "https://www.futurelearn.com/"],
        ["Udemy", "https://www.udemy.com/"],
        ["Codecademy", "https://www.codecademy.com/"],
        ["freeCodeCamp", "https://www.freecodecamp.org/"],
        ["W3Schools", "https://www.w3schools.com/"],
        ["MDN", "https://developer.mozilla.org/"],
        ["GeeksforGeeks", "https://www.geeksforgeeks.org/"],
        ["Study.com", "https://study.com/"],
        ["Academic Earth", "https://academicearth.org/"],
        ["OpenLearn", "https://www.open.edu/openlearn/"],
        ["Saylor Academy", "https://learn.saylor.org/"],
        ["Alison", "https://alison.com/"],
        ["MIT", "https://www.mit.edu/"],
        ["Harvard Online", "https://pll.harvard.edu/"],
        ["Stanford Online", "https://online.stanford.edu/"],
        ["Yale Courses", "https://oyc.yale.edu/"],
        ["Princeton Online", "https://online.princeton.edu/"],
        ["Berkeley Online", "https://ischoolonline.berkeley.edu/"],
        ["NASA Education", "https://www.nasa.gov/learning-resources/"],
        ["National Geographic Education", "https://education.nationalgeographic.org/"],
        ["Smithsonian Learning Lab", "https://learninglab.si.edu/"],
        ["PhET Simulations", "https://phet.colorado.edu/"],
        ["GeoGebra", "https://www.geogebra.org/"],
        ["Mathway", "https://www.mathway.com/"],
        ["Symbolab", "https://www.symbolab.com/"],
        ["Brilliant Math", "https://brilliant.org/"],
        ["Math is Fun", "https://www.mathsisfun.com/"],
        ["Project Euler", "https://projecteuler.net/"],
        ["Exercism", "https://exercism.org/"],
        ["Hypothesis", "https://web.hypothes.is/"],
        ["AnkiWeb", "https://ankiweb.net/"],
        ["Memrise", "https://www.memrise.com/"],
        ["LingQ", "https://www.lingq.com/"],
        ["BBC Bitesize", "https://www.bbc.co.uk/bitesize/"],
        ["The Conversation", "https://theconversation.com/"]
    ],

    /* =====================================================
       📖 BOOKS — 50
       ===================================================== */

    books: [
        ["Project Gutenberg", "https://www.gutenberg.org/"],
        ["Internet Archive", "https://archive.org/"],
        ["Open Library", "https://openlibrary.org/"],
        ["Google Books", "https://books.google.com/"],
        ["Goodreads", "https://www.goodreads.com/"],
        ["Standard Ebooks", "https://standardebooks.org/"],
        ["ManyBooks", "https://manybooks.net/"],
        ["OpenStax Books", "https://openstax.org/subjects"],
        ["Wikisource", "https://wikisource.org/"],
        ["LibriVox", "https://librivox.org/"],
        ["Feedbooks", "https://www.feedbooks.com/"],
        ["Smashwords", "https://www.smashwords.com/"],
        ["BookBub", "https://www.bookbub.com/"],
        ["StoryGraph", "https://app.thestorygraph.com/"],
        ["LibraryThing", "https://www.librarything.com/"],
        ["BookBrowse", "https://www.bookbrowse.com/"],
        ["Fantastic Fiction", "https://www.fantasticfiction.com/"],
        ["WorldCat", "https://www.worldcat.org/"],
        ["HathiTrust", "https://www.hathitrust.org/"],
        ["JSTOR", "https://www.jstor.org/"],
        ["Google Scholar Books", "https://scholar.google.com/"],
        ["Oxford Reference", "https://www.oxfordreference.com/"],
        ["Britannica", "https://www.britannica.com/"],
        ["Archive.org Texts", "https://archive.org/details/texts"],
        ["Digital Public Library", "https://dp.la/"],
        ["Europeana", "https://www.europeana.eu/"],
        ["Gallica", "https://gallica.bnf.fr/"],
        ["Bibliothèque nationale", "https://www.bnf.fr/"],
        ["Library of Congress", "https://www.loc.gov/books/"],
        ["British Library", "https://www.bl.uk/"],
        ["National Library of Australia", "https://www.nla.gov.au/"],
        ["National Library of Scotland", "https://www.nls.uk/"],
        ["Internet Sacred Text Archive", "https://www.sacred-texts.com/"],
        ["Bartleby", "https://www.bartleby.com/"],
        ["Poetry Foundation", "https://www.poetryfoundation.org/"],
        ["Poets.org", "https://poets.org/"],
        ["LitCharts", "https://www.litcharts.com/"],
        ["SparkNotes", "https://www.sparknotes.com/"],
        ["CliffsNotes", "https://www.cliffsnotes.com/"],
        ["Shmoop", "https://www.shmoop.com/"],
        ["Book Riot", "https://bookriot.com/"],
        ["Literary Hub", "https://lithub.com/"],
        ["Electric Literature", "https://electricliterature.com/"],
        ["The Paris Review", "https://www.theparisreview.org/"],
        ["The Marginalian", "https://www.themarginalian.org/"],
        ["Read Print", "https://www.readprint.com/"],
        ["Planet eBook", "https://www.planetebook.com/"],
        ["Classic Reader", "https://www.classicreader.com/"],
        ["Public Domain Review", "https://publicdomainreview.org/"],
        ["Free-eBooks", "https://www.free-ebooks.net/"]
    ],

    /* =====================================================
       🤖 AI — 50
       ===================================================== */

    ai: [
        ["ChatGPT", "https://chatgpt.com/"],
        ["Google Gemini", "https://gemini.google.com/"],
        ["Microsoft Copilot", "https://copilot.microsoft.com/"],
        ["Claude", "https://claude.ai/"],
        ["Perplexity", "https://www.perplexity.ai/"],
        ["Hugging Face", "https://huggingface.co/"],
        ["Leonardo AI", "https://leonardo.ai/"],
        ["Ideogram", "https://ideogram.ai/"],
        ["Adobe Firefly", "https://firefly.adobe.com/"],
        ["DeepL", "https://www.deepl.com/"],
        ["Poe", "https://poe.com/"],
        ["You.com", "https://you.com/"],
        ["Phind", "https://www.phind.com/"],
        ["Mistral", "https://mistral.ai/"],
        ["Groq", "https://groq.com/"],
        ["Cohere", "https://cohere.com/"],
        ["Replicate", "https://replicate.com/"],
        ["Together AI", "https://www.together.ai/"],
        ["OpenRouter", "https://openrouter.ai/"],
        ["ElevenLabs", "https://elevenlabs.io/"],
        ["Suno", "https://suno.com/"],
        ["Udio", "https://www.udio.com/"],
        ["Gamma", "https://gamma.app/"],
        ["Canva AI", "https://www.canva.com/ai-image-generator/"],
        ["Microsoft Designer", "https://designer.microsoft.com/"],
        ["Remove.bg AI", "https://www.remove.bg/"],
        ["Clipdrop", "https://clipdrop.co/"],
        ["Cleanup Pictures", "https://cleanup.pictures/"],
        ["Upscale.media", "https://www.upscale.media/"],
        ["Krea AI", "https://www.krea.ai/"],
        ["Playground AI", "https://playground.com/"],
        ["Mage", "https://www.mage.space/"],
        ["Tensor.Art", "https://tensor.art/"],
        ["Civitai", "https://civitai.com/"],
        ["ComfyUI", "https://github.com/comfyanonymous/ComfyUI"],
        ["Gradio", "https://www.gradio.app/"],
        ["Google AI Studio", "https://aistudio.google.com/"],
        ["NotebookLM", "https://notebooklm.google.com/"],
        ["Otter", "https://otter.ai/"],
        ["Notion AI", "https://www.notion.so/product/ai"],
        ["Grammarly", "https://www.grammarly.com/"],
        ["QuillBot", "https://quillbot.com/"],
        ["Jasper", "https://www.jasper.ai/"],
        ["Writesonic", "https://writesonic.com/"],
        ["Copy.ai", "https://www.copy.ai/"],
        ["Character AI", "https://character.ai/"],
        ["Replit AI", "https://replit.com/"],
        ["Cursor", "https://www.cursor.com/"],
        ["Blackbox AI", "https://www.blackbox.ai/"],
        ["Codeium", "https://codeium.com/"]
    ],

    /* =====================================================
       🎨 DESIGN — 50
       ===================================================== */

    design: [
        ["Canva", "https://www.canva.com/"],
        ["Figma", "https://www.figma.com/"],
        ["Photopea", "https://www.photopea.com/"],
        ["Remove.bg", "https://www.remove.bg/"],
        ["Pixlr", "https://pixlr.com/"],
        ["Adobe Express", "https://www.adobe.com/express/"],
        ["Unsplash", "https://unsplash.com/"],
        ["Pexels", "https://www.pexels.com/"],
        ["Flaticon", "https://www.flaticon.com/"],
        ["Coolors", "https://coolors.co/"],
        ["Freepik", "https://www.freepik.com/"],
        ["Dribbble", "https://dribbble.com/"],
        ["Behance", "https://www.behance.net/"],
        ["Pinterest", "https://www.pinterest.com/"],
        ["DeviantArt", "https://www.deviantart.com/"],
        ["ArtStation", "https://www.artstation.com/"],
        ["Vecteezy", "https://www.vecteezy.com/"],
        ["Vectr", "https://vectr.com/"],
        ["Gravit Designer", "https://www.coreldraw.com/en/product/gravit-designer/"],
        ["Inkscape", "https://inkscape.org/"],
        ["GIMP", "https://www.gimp.org/"],
        ["Krita", "https://krita.org/"],
        ["Sketch", "https://www.sketch.com/"],
        ["Affinity", "https://affinity.serif.com/"],
        ["Framer", "https://www.framer.com/"],
        ["Webflow", "https://webflow.com/"],
        ["Spline", "https://spline.design/"],
        ["Lottiefiles", "https://lottiefiles.com/"],
        ["Iconify", "https://icon-sets.iconify.design/"],
        ["Font Awesome", "https://fontawesome.com/"],
        ["Google Fonts", "https://fonts.google.com/"],
        ["DaFont", "https://www.dafont.com/"],
        ["FontSpace", "https://www.fontspace.com/"],
        ["WhatFontIs", "https://www.whatfontis.com/"],
        ["Color Hunt", "https://colorhunt.co/"],
        ["Adobe Color", "https://color.adobe.com/"],
        ["Paletton", "https://paletton.com/"],
        ["UIGradients", "https://uigradients.com/"],
        ["Haikei", "https://haikei.app/"],
        ["Mesh Gradient", "https://meshgradient.com/"],
        ["Blobmaker", "https://www.blobmaker.app/"],
        ["Get Waves", "https://getwaves.io/"],
        ["BGJar", "https://bgjar.com/"],
        ["Pattern Monster", "https://pattern.monster/"],
        ["Hero Patterns", "https://heropatterns.com/"],
        ["unDraw", "https://undraw.co/"],
        ["Storyset", "https://storyset.com/"],
        ["DrawKit", "https://www.drawkit.com/"],
        ["Humaaans", "https://www.humaaans.com/"],
        ["Open Peeps", "https://www.openpeeps.com/"]
    ],

    /* =====================================================
       🎬 VIDEO — 50
       ===================================================== */

    video: [
        ["YouTube", "https://www.youtube.com/"],
        ["YouTube Studio", "https://studio.youtube.com/"],
        ["CapCut", "https://www.capcut.com/"],
        ["VEED", "https://www.veed.io/"],
        ["Clipchamp", "https://clipchamp.com/"],
        ["Canva Video", "https://www.canva.com/video-editor/"],
        ["InVideo", "https://invideo.io/"],
        ["Kapwing", "https://www.kapwing.com/"],
        ["Adobe Express Video", "https://www.adobe.com/express/create/video"],
        ["DaVinci Resolve", "https://www.blackmagicdesign.com/products/davinciresolve"],
        ["Runway", "https://runwayml.com/"],
        ["Descript", "https://www.descript.com/"],
        ["Lumen5", "https://lumen5.com/"],
        ["FlexClip", "https://www.flexclip.com/"],
        ["Animoto", "https://animoto.com/"],
        ["Powtoon", "https://www.powtoon.com/"],
        ["Biteable", "https://biteable.com/"],
        ["Renderforest", "https://www.renderforest.com/"],
        ["Pictory", "https://pictory.ai/"],
        ["Vimeo", "https://vimeo.com/"],
        ["Dailymotion", "https://www.dailymotion.com/"],
        ["Twitch", "https://www.twitch.tv/"],
        ["Kick", "https://kick.com/"],
        ["TED", "https://www.ted.com/"],
        ["PeerTube", "https://joinpeertube.org/"],
        ["Rumble", "https://rumble.com/"],
        ["Bilibili", "https://www.bilibili.tv/"],
        ["Internet Archive Video", "https://archive.org/details/movies"],
        ["Mixkit Video", "https://mixkit.co/free-stock-video/"],
        ["Pexels Videos", "https://www.pexels.com/videos/"],
        ["Pixabay Videos", "https://pixabay.com/videos/"],
        ["Videvo", "https://www.videvo.net/"],
        ["Coverr", "https://coverr.co/"],
        ["Videezy", "https://www.videezy.com/"],
        ["Life of Vids", "https://www.lifeofvids.com/"],
        ["Motion Places", "https://www.motionplaces.com/"],
        ["Mazwai", "https://mazwai.com/"],
        ["Dareful", "https://dareful.com/"],
        ["Vidsplay", "https://www.vidsplay.com/"],
        ["Freepik Videos", "https://www.freepik.com/videos"],
        ["Storyblocks", "https://www.storyblocks.com/"],
        ["Filmora", "https://filmora.wondershare.com/"],
        ["Shotcut", "https://shotcut.org/"],
        ["OpenShot", "https://www.openshot.org/"],
        ["Kdenlive", "https://kdenlive.org/"],
        ["Lightworks", "https://lwks.com/"],
        ["HitFilm", "https://fxhome.com/product/hitfilm"],
        ["OBS Studio", "https://obsproject.com/"],
        ["HandBrake", "https://handbrake.fr/"],
        ["FFmpeg", "https://ffmpeg.org/"]
    ],

    /* =====================================================
       🎵 MUSIC — 50
       ===================================================== */

    music: [
        ["Spotify", "https://open.spotify.com/"],
        ["SoundCloud", "https://soundcloud.com/"],
        ["YouTube Music", "https://music.youtube.com/"],
        ["Bandcamp", "https://bandcamp.com/"],
        ["Audiomack", "https://audiomack.com/"],
        ["Mixcloud", "https://www.mixcloud.com/"],
        ["Apple Music", "https://music.apple.com/"],
        ["Deezer", "https://www.deezer.com/"],
        ["Tidal", "https://tidal.com/"],
        ["Amazon Music", "https://music.amazon.com/"],
        ["Last.fm", "https://www.last.fm/"],
        ["Musixmatch", "https://www.musixmatch.com/"],
        ["Genius", "https://genius.com/"],
        ["Discogs", "https://www.discogs.com/"],
        ["MusicBrainz", "https://musicbrainz.org/"],
        ["AllMusic", "https://www.allmusic.com/"],
        ["Rate Your Music", "https://rateyourmusic.com/"],
        ["Jamendo", "https://www.jamendo.com/"],
        ["Free Music Archive", "https://freemusicarchive.org/"],
        ["Internet Archive Audio", "https://archive.org/details/audio"],
        ["Pixabay Music", "https://pixabay.com/music/"],
        ["Epidemic Sound", "https://www.epidemicsound.com/"],
        ["Artlist", "https://artlist.io/"],
        ["Audiio", "https://audiio.com/"],
        ["Bensound", "https://www.bensound.com/"],
        ["Incompetech", "https://incompetech.com/"],
        ["Purple Planet Music", "https://www.purple-planet.com/"],
        ["Mixkit Music", "https://mixkit.co/free-stock-music/"],
        ["Uppbeat", "https://uppbeat.io/"],
        ["FreeSound", "https://freesound.org/"],
        ["SoundBible", "https://soundbible.com/"],
        ["Zapsplat", "https://www.zapsplat.com/"],
        ["BBC Sound Effects", "https://sound-effects.bbcrewind.co.uk/"],
        ["Freesound Effects", "https://freesound.org/"],
        ["Online Sequencer", "https://onlinesequencer.net/"],
        ["Chrome Music Lab", "https://musiclab.chromeexperiments.com/"],
        ["Virtual Piano", "https://virtualpiano.net/"],
        ["Musicca", "https://www.musicca.com/"],
        ["Soundtrap", "https://www.soundtrap.com/"],
        ["BandLab", "https://www.bandlab.com/"],
        ["Audiotool", "https://www.audiotool.com/"],
        ["Soundation", "https://soundation.com/"],
        ["Soundful", "https://soundful.com/"],
        ["Boomy", "https://boomy.com/"],
        ["Suno", "https://suno.com/"],
        ["Udio", "https://www.udio.com/"],
        ["Moises", "https://moises.ai/"],
        ["Splitter.ai", "https://splitter.ai/"],
        ["LALAL.AI", "https://www.lalal.ai/"],
        ["Vocal Remover", "https://vocalremover.org/"],
        ["AIVA", "https://www.aiva.ai/"]
    ],

    /* =====================================================
       💻 PROGRAMMING — 50
       ===================================================== */

    programming: [
        ["GitHub", "https://github.com/"],
        ["CodePen", "https://codepen.io/"],
        ["JSFiddle", "https://jsfiddle.net/"],
        ["W3Schools", "https://www.w3schools.com/"],
        ["MDN Web Docs", "https://developer.mozilla.org/"],
        ["Replit", "https://replit.com/"],
        ["Stack Overflow", "https://stackoverflow.com/"],
        ["GitLab", "https://gitlab.com/"],
        ["JS Bin", "https://jsbin.com/"],
        ["CodeSandbox", "https://codesandbox.io/"],
        ["Godot", "https://godotengine.org/"],
        ["Unity", "https://unity.com/"],
        ["Unreal Engine", "https://www.unrealengine.com/"],
        ["Roblox Creator", "https://create.roblox.com/"],
        ["Glitch", "https://glitch.com/"],
        ["Vercel", "https://vercel.com/"],
        ["Netlify", "https://www.netlify.com/"],
        ["Cloudflare", "https://www.cloudflare.com/"],
        ["Firebase", "https://firebase.google.com/"],
        ["Supabase", "https://supabase.com/"],
        ["MongoDB", "https://www.mongodb.com/"],
        ["PostgreSQL", "https://www.postgresql.org/"],
        ["MySQL", "https://www.mysql.com/"],
        ["SQLite", "https://www.sqlite.org/"],
        ["Python", "https://www.python.org/"],
        ["Node.js", "https://nodejs.org/"],
        ["Deno", "https://deno.com/"],
        ["Bun", "https://bun.sh/"],
        ["TypeScript", "https://www.typescriptlang.org/"],
        ["React", "https://react.dev/"],
        ["Vue", "https://vuejs.org/"],
        ["Angular", "https://angular.dev/"],
        ["Svelte", "https://svelte.dev/"],
        ["Next.js", "https://nextjs.org/"],
        ["Nuxt", "https://nuxt.com/"],
        ["Astro", "https://astro.build/"],
        ["Bootstrap", "https://getbootstrap.com/"],
        ["Tailwind CSS", "https://tailwindcss.com/"],
        ["jQuery", "https://jquery.com/"],
        ["Three.js", "https://threejs.org/"],
        ["Babylon.js", "https://www.babylonjs.com/"],
        ["Phaser", "https://phaser.io/"],
        ["Construct", "https://www.construct.net/"],
        ["GameMaker", "https://gamemaker.io/"],
        ["Scratch", "https://scratch.mit.edu/"],
        ["LeetCode", "https://leetcode.com/"],
        ["HackerRank", "https://www.hackerrank.com/"],
        ["Exercism", "https://exercism.org/"],
        ["Project Euler", "https://projecteuler.net/"],
        ["Codewars", "https://www.codewars.com/"]
    ],

    /* =====================================================
       🛠️ TOOLS — 50
       ===================================================== */

    tools: [
        ["Google Translate", "https://translate.google.com/"],
        ["TinyWow", "https://tinywow.com/"],
        ["iLovePDF", "https://www.ilovepdf.com/"],
        ["QR Code Generator", "https://www.qr-code-generator.com/"],
        ["Speedtest", "https://www.speedtest.net/"],
        ["Google Drive", "https://drive.google.com/"],
        ["TinyURL", "https://tinyurl.com/"],
        ["Google Fonts", "https://fonts.google.com/"],
        ["JSON Formatter", "https://jsonformatter.org/"],
        ["Regex101", "https://regex101.com/"],
        ["Have I Been Pwned", "https://haveibeenpwned.com/"],
        ["VirusTotal", "https://www.virustotal.com/"],
        ["Smallpdf", "https://smallpdf.com/"],
        ["PDF24", "https://tools.pdf24.org/"],
        ["Sejda PDF", "https://www.sejda.com/"],
        ["PDFescape", "https://www.pdfescape.com/"],
        ["CloudConvert", "https://cloudconvert.com/"],
        ["Convertio", "https://convertio.co/"],
        ["Zamzar", "https://www.zamzar.com/"],
        ["Online-Convert", "https://www.online-convert.com/"],
        ["ImageResizer", "https://imageresizer.com/"],
        ["TinyPNG", "https://tinypng.com/"],
        ["Squoosh", "https://squoosh.app/"],
        ["Compress JPEG", "https://compressjpeg.com/"],
        ["Compress PNG", "https://compresspng.com/"],
        ["Remove.bg", "https://www.remove.bg/"],
        ["Excalidraw", "https://excalidraw.com/"],
        ["Draw.io", "https://app.diagrams.net/"],
        ["Mermaid Live", "https://mermaid.live/"],
        ["Carbon", "https://carbon.now.sh/"],
        ["Lorem Ipsum", "https://loremipsum.io/"],
        ["Random.org", "https://www.random.org/"],
        ["Time.is", "https://time.is/"],
        ["World Time", "https://www.worldtimebuddy.com/"],
        ["Calendar", "https://calendar.google.com/"],
        ["Notion", "https://www.notion.so/"],
        ["Trello", "https://trello.com/"],
        ["Evernote", "https://evernote.com/"],
        ["Dropbox", "https://www.dropbox.com/"],
        ["WeTransfer", "https://wetransfer.com/"],
        ["Pastebin", "https://pastebin.com/"],
        ["PrivateBin", "https://privatebin.net/"],
        ["GitHub Gist", "https://gist.github.com/"],
        ["URLVoid", "https://www.urlvoid.com/"],
        ["URLScan", "https://urlscan.io/"],
        ["BrowserLeaks", "https://browserleaks.com/"],
        ["WhatIsMyIPAddress", "https://whatismyipaddress.com/"],
        ["What3Words", "https://what3words.com/"],
        ["Can I Use", "https://caniuse.com/"],
        ["HTTP Status", "https://httpstat.us/"],
        ["Base64 Encode", "https://www.base64encode.org/"]
    ]
};


/* =========================================================
   🔧 BUILD SITE DATABASE
   ========================================================= */

const sites = [];

for (const [category, list] of Object.entries(rawSites)) {

    list.forEach((item, index) => {

        const [name, url] = item;

        sites.push({
            id: `${category}-${index + 1}`,
            name,
            url,
            category,
            categoryName: categoryInfo[category].name,
            icon: categoryInfo[category].icon,
            description: `${name} — ${categoryInfo[category].description}.`,
            keywords: `${name} ${categoryInfo[category].name} ${category}`
        });

    });

}


/* =========================================================
   📊 CHECK SITE COUNT
   ========================================================= */

console.log("🌐 WebBox loaded");
console.log("📊 Total sites:", sites.length);

Object.keys(rawSites).forEach(category => {
    console.log(
        `${categoryInfo[category].name}:`,
        rawSites[category].length
    );
});


/* =========================================================
   💾 STORAGE
   ========================================================= */

const STORAGE = {
    favorites: "webboxFavorites",
    visits: "webboxVisits",
    recent: "webboxRecent",
    theme: "webboxTheme",
    view: "webboxViewMode"
};

let favorites = JSON.parse(
    localStorage.getItem(STORAGE.favorites) || "[]"
);

let visits = JSON.parse(
    localStorage.getItem(STORAGE.visits) || "{}"
);

let recent = JSON.parse(
    localStorage.getItem(STORAGE.recent) || "[]"
);

let currentSites = [...sites];
let currentSection = "home";


/* =========================================================
   🧹 TEXT NORMALIZATION
   ========================================================= */

function normalizeText(text) {

    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[أإآٱ]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ة/g, "ه")
        .replace(/ؤ/g, "و")
        .replace(/ئ/g, "ي")
        .replace(/ء/g, "")
        .replace(/ـ/g, "")
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();

}


/* =========================================================
   🔎 SEARCH
   ========================================================= */

function searchScore(site, query) {

    const q = normalizeText(query);

    if (!q) return 1;

    const name = normalizeText(site.name);
    const category = normalizeText(site.categoryName);
    const keywords = normalizeText(site.keywords);
    const description = normalizeText(site.description);

    let score = 0;

    if (name === q) score += 1000;
    if (name.startsWith(q)) score += 500;
    if (name.includes(q)) score += 300;
    if (keywords.includes(q)) score += 200;
    if (category.includes(q)) score += 100;
    if (description.includes(q)) score += 50;

    const words = q.split(" ");

    words.forEach(word => {

        if (!word) return;

        if (name.includes(word)) score += 100;
        if (keywords.includes(word)) score += 60;
        if (category.includes(word)) score += 40;

    });

    return score;

}


function smartFindSites(query) {

    const q = normalizeText(query);

    if (!q) {
        return [...sites];
    }

    return sites
        .map(site => ({
            site,
            score: searchScore(site, q)
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.site);

}


/* =========================================================
   🧭 NAVIGATION
   ========================================================= */

function getPageSections() {

    const sections = document.querySelectorAll(
        ".page-section, section[id]"
    );

    return [...sections];

}


function showSection(sectionId) {

    const sections = getPageSections();

    sections.forEach(section => {

        section.classList.remove("active");

        section.style.display = "none";

    });

    const target = document.getElementById(sectionId);

    if (!target) {

        console.warn(
            "WebBox: section not found:",
            sectionId
        );

        return;

    }

    target.classList.add("active");
    target.style.display = "block";

    currentSection = sectionId;

    updateNavigation(sectionId);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function updateNavigation(sectionId) {

    document.querySelectorAll(".nav-btn").forEach(btn => {

        btn.classList.remove("active");

        const onclick = btn.getAttribute("onclick") || "";

        if (
            onclick.includes(`showSection('${sectionId}')`) ||
            onclick.includes(`showSection("${sectionId}")`) ||
            onclick.includes(`show${capitalize(sectionId)}`)
        ) {

            btn.classList.add("active");

        }

    });

}


function capitalize(text) {

    return text.charAt(0).toUpperCase() + text.slice(1);

}


function showHome() {

    showSection("home");

}


function showCategories() {

    showSection("categories");

    renderCategories();

}


function showFun() {

    showSection("fun");

    renderFun();

}


function showGaming() {

    showSection("gaming");

    renderGaming();

}


function showFavorites() {

    showSection("favorites");

    renderFavorites();

}


function showRecent() {

    const section = document.getElementById("recent");

    if (!section) {

        showSection("sites");

        displaySites(
            recent
                .map(id => sites.find(site => site.id === id))
                .filter(Boolean)
        );

        return;

    }

    showSection("recent");

    renderRecent();

}


/* =========================================================
   🗂️ CATEGORIES
   ========================================================= */

function renderCategories() {

    const containers = [
        document.getElementById("categoriesContainer"),
        document.getElementById("homeCategories")
    ].filter(Boolean);

    const html = Object.entries(categoryInfo)
        .map(([key, info]) => {

            const count = rawSites[key].length;

            return `
                <div
                    class="category-card"
                    onclick="filterCategory('${key}')"
                    data-category="${key}"
                >
                    <div class="category-icon">
                        ${info.icon}
                    </div>

                    <div class="category-content">
                        <h3>${info.name}</h3>

                        <p>
                            ${info.description}
                        </p>

                        <span class="category-count">
                            ${count} موقع
                        </span>
                    </div>
                </div>
            `;

        })
        .join("");

    containers.forEach(container => {

        container.innerHTML = html;

    });

}


function filterCategory(category) {

    if (!rawSites[category]) return;

    showSection("sites");

    const select = document.getElementById("categorySelect");

    if (select) {
        select.value = category;
    }

    const search = document.getElementById("siteSearch");

    if (search) {
        search.value = "";
    }

    filterSiteList();

}


/* =========================================================
   🧩 CATEGORY SELECT
   ========================================================= */

function populateCategorySelect() {

    const select = document.getElementById("categorySelect");

    if (!select) return;

    select.innerHTML = `
        <option value="all">كل التصنيفات</option>
        ${Object.entries(categoryInfo)
            .map(([key, info]) => `
                <option value="${key}">
                    ${info.icon} ${info.name}
                </option>
            `)
            .join("")}
    `;

}


/* =========================================================
   🃏 SITE CARDS
   ========================================================= */

function createSiteCard(site) {

    const isFavorite = favorites.includes(site.id);

    const visitCount = visits[site.id] || 0;

    return `
        <article class="site-card">

            <div class="site-card-top">

                <div class="site-icon">
                    ${site.icon}
                </div>

                <button
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    onclick="toggleFavorite('${site.id}')"
                    title="إضافة للمفضلة"
                >
                    ${isFavorite ? "★" : "☆"}
                </button>

            </div>

            <div class="site-card-body">

                <h3>${escapeHTML(site.name)}</h3>

                <span class="site-category">
                    ${site.icon}
                    ${escapeHTML(site.categoryName)}
                </span>

                <p>
                    ${escapeHTML(site.description)}
                </p>

                <div class="site-card-footer">

                    <span class="visit-count">
                        👁️ ${visitCount}
                    </span>

                    <div class="site-actions">

                        <button
                            class="details-btn"
                            onclick="showDetails('${site.id}')"
                        >
                            التفاصيل
                        </button>

                        <button
                            class="open-btn"
                            onclick="openSite('${site.id}')"
                        >
                            فتح ↗
                        </button>

                    </div>

                </div>

            </div>

        </article>
    `;

}


function displaySites(list) {

    const container = document.getElementById("sitesContainer");

    if (!container) return;

    currentSites = list;

    if (!list.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔎</div>
                <h3>لم نجد مواقع</h3>
                <p>جرّب كلمة بحث مختلفة.</p>
            </div>
        `;

        updateResultText(0);

        return;

    }

    container.innerHTML = list
        .map(createSiteCard)
        .join("");

    updateResultText(list.length);

    applyViewMode();

}


function updateResultText(count) {

    const element = document.getElementById("resultText");

    if (!element) return;

    element.textContent =
        `${count} موقع`;

}


/* =========================================================
   🔍 SITE FILTER
   ========================================================= */

function filterSiteList() {

    const searchInput =
        document.getElementById("siteSearch");

    const categorySelect =
        document.getElementById("categorySelect");

    const sortSelect =
        document.getElementById("sortSelect");

    const query = searchInput
        ? searchInput.value
        : "";

    const category = categorySelect
        ? categorySelect.value
        : "all";

    let results;

    if (query.trim()) {

        results = smartFindSites(query);

    } else {

        results = [...sites];

    }

    if (category !== "all") {

        results = results.filter(
            site => site.category === category
        );

    }

    if (sortSelect) {

        const sort = sortSelect.value;

        if (sort === "name") {

            results.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name,
                        "ar"
                    )
            );

        }

        if (sort === "popular") {

            results.sort(
                (a, b) =>
                    (visits[b.id] || 0) -
                    (visits[a.id] || 0)
            );

        }

        if (sort === "favorites") {

            results.sort(
                (a, b) =>
                    Number(
                        favorites.includes(b.id)
                    ) -
                    Number(
                        favorites.includes(a.id)
                    )
            );

        }

    }

    displaySites(results);

}


/* =========================================================
   🔎 MAIN SEARCH
   ========================================================= */

function performSearch(query) {

    const value = String(query || "").trim();

    if (!value) {

        showSection("sites");

        displaySites(sites);

        return;

    }

    showSection("sites");

    const searchInput =
        document.getElementById("siteSearch");

    if (searchInput) {
        searchInput.value = value;
    }

    const results = smartFindSites(value);

    displaySites(results);

}


function handleMainSearch(event) {

    if (event) {

        event.preventDefault();

    }

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    performSearch(input.value);

}


function quickSearch(text) {

    const input =
        document.getElementById("searchInput");

    if (input) {
        input.value = text;
    }

    performSearch(text);

}


/* =========================================================
   🎤 VOICE SEARCH
   ========================================================= */

function voiceSearch() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        showToast(
            "المتصفح لا يدعم البحث الصوتي"
        );

        return;

    }

    const recognition =
        new SpeechRecognition();

    recognition.lang = "ar-DZ";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    recognition.onstart = () => {

        showToast("🎤 تحدث الآن...");

    };

    recognition.onresult = event => {

        const text =
            event.results[0][0].transcript;

        const input =
            document.getElementById("searchInput");

        if (input) {
            input.value = text;
        }

        performSearch(text);

    };

    recognition.onerror = () => {

        showToast(
            "حدث خطأ في البحث الصوتي"
        );

    };

    recognition.start();

}


/* =========================================================
   ⭐ FAVORITES
   ========================================================= */

function saveFavorites() {

    localStorage.setItem(
        STORAGE.favorites,
        JSON.stringify(favorites)
    );

}


function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId => favoriteId !== id
            );

        showToast("تمت إزالة الموقع من المفضلة");

    } else {

        favorites.push(id);

        showToast("⭐ تمت إضافة الموقع للمفضلة");

    }

    saveFavorites();

    updateStats();

    displaySites(currentSites);

    if (currentSection === "favorites") {

        renderFavorites();

    }

}


function renderFavorites() {

    const container =
        document.getElementById("favoritesContainer") ||
        document.getElementById("sitesContainer");

    if (!container) return;

    const favoriteSites =
        favorites
            .map(id =>
                sites.find(site => site.id === id)
            )
            .filter(Boolean);

    if (!favoriteSites.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">⭐</div>
                <h3>لا توجد مواقع مفضلة</h3>
                <p>اضغط ☆ على أي موقع لإضافته هنا.</p>
            </div>
        `;

        return;

    }

    container.innerHTML =
        favoriteSites
            .map(createSiteCard)
            .join("");

}


/* =========================================================
   👁️ VISITS
   ========================================================= */

function saveVisits() {

    localStorage.setItem(
        STORAGE.visits,
        JSON.stringify(visits)
    );

}


function registerVisit(id) {

    visits[id] =
        (visits[id] || 0) + 1;

    saveVisits();

    recent =
        recent.filter(
            recentId => recentId !== id
        );

    recent.unshift(id);

    recent =
        recent.slice(0, 20);

    localStorage.setItem(
        STORAGE.recent,
        JSON.stringify(recent)
    );

}


function openSite(id) {

    const site =
        sites.find(item => item.id === id);

    if (!site) return;

    registerVisit(id);

    updateStats();

    window.open(
        site.url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   🕘 RECENT
   ========================================================= */

function renderRecent() {

    const container =
        document.getElementById("recentContainer");

    if (!container) return;

    const recentSites =
        recent
            .map(id =>
                sites.find(site => site.id === id)
            )
            .filter(Boolean);

    if (!recentSites.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🕘</div>
                <h3>لا توجد مواقع حديثة</h3>
                <p>المواقع التي تفتحها ستظهر هنا.</p>
            </div>
        `;

        return;

    }

    container.innerHTML =
        recentSites
            .map(createSiteCard)
            .join("");

}


/* =========================================================
   📋 DETAILS MODAL
   ========================================================= */

function showDetails(id) {

    const site =
        sites.find(item => item.id === id);

    if (!site) return;

    const modal =
        document.getElementById("siteModal");

    if (!modal) {

        openSite(id);

        return;

    }

    const icon =
        document.getElementById("modalIcon");

    const title =
        document.getElementById("modalTitle");

    const description =
        document.getElementById("modalDescription");

    const category =
        document.getElementById("modalCategory");

    const modalVisits =
        document.getElementById("modalVisits");

    const openButton =
        document.getElementById("modalOpenBtn");

    const favoriteButton =
        document.getElementById(
            "modalFavoriteBtn"
        );

    if (icon) icon.textContent = site.icon;

    if (title) title.textContent = site.name;

    if (description) {
        description.textContent =
            site.description;
    }

    if (category) {
        category.textContent =
            `${site.icon} ${site.categoryName}`;
    }

    if (modalVisits) {
        modalVisits.textContent =
            `👁️ ${visits[site.id] || 0}`;
    }

    if (openButton) {

        openButton.onclick = () => {

            closeModal();

            openSite(site.id);

        };

    }

    if (favoriteButton) {

        favoriteButton.onclick = () => {

            toggleFavorite(site.id);

            updateModalFavorite(
                site.id
            );

        };

    }

    updateModalFavorite(site.id);

    modal.classList.add("active");

    modal.style.display = "flex";

}


function updateModalFavorite(id) {

    const button =
        document.getElementById(
            "modalFavoriteBtn"
        );

    const text =
        document.getElementById(
            "modalFavorite"
        );

    const active =
        favorites.includes(id);

    if (button) {

        button.classList.toggle(
            "active",
            active
        );

    }

    if (text) {

        text.textContent =
            active
                ? "★ في المفضلة"
                : "☆ أضف للمفضلة";

    }

}


function closeModal() {

    const modal =
        document.getElementById("siteModal");

    if (!modal) return;

    modal.classList.remove("active");

    modal.style.display = "none";

}


/* =========================================================
   🎲 RANDOM
   ========================================================= */

function randomSite() {

    if (!sites.length) return;

    const site =
        sites[
            Math.floor(
                Math.random() * sites.length
            )
        ];

    showDetails(site.id);

}


/* =========================================================
   ⭐ FEATURED
   ========================================================= */

function renderFeatured() {

    const container =
        document.getElementById(
            "featuredContainer"
        );

    if (!container) return;

    const featured =
        sites.slice(0, 12);

    container.innerHTML =
        featured
            .map(createSiteCard)
            .join("");

}


/* =========================================================
   🎉 FUN
   ========================================================= */

function renderFun() {

    const container =
        document.getElementById(
            "funContainer"
        );

    if (!container) return;

    const funSites =
        sites.filter(
            site => site.category === "fun"
        );

    container.innerHTML =
        funSites
            .map(createSiteCard)
            .join("");

}


/* =========================================================
   🎮 GAMING
   ========================================================= */

function renderGaming() {

    const container =
        document.getElementById(
            "gamingContainer"
        );

    if (!container) return;

    const gamingSites =
        sites.filter(
            site => site.category === "games"
        );

    container.innerHTML =
        gamingSites
            .map(createSiteCard)
            .join("");

}


/* =========================================================
   🌙 DARK / LIGHT MODE
   ========================================================= */

function getThemeButton() {

    return (
        document.getElementById("themeBtn") ||
        document.getElementById("darkModeBtn") ||
        document.querySelector(".theme-btn") ||
        document.querySelector(
            "[data-theme-toggle]"
        )
    );

}


function applyTheme(theme) {

    const body =
        document.body;

    const isDark =
        theme === "dark";

    /*
       التصميم الحالي يستخدم light-mode
       للوضع النهاري.
    */

    body.classList.toggle(
        "light-mode",
        !isDark
    );

    /*
       دعم التصميمات القديمة أيضًا.
    */

    body.classList.toggle(
        "dark",
        isDark
    );

    body.dataset.theme =
        theme;

    updateThemeButton(isDark);

}


function toggleDarkMode() {

    const current =
        localStorage.getItem(
            STORAGE.theme
        ) || "dark";

    const next =
        current === "dark"
            ? "light"
            : "dark";

    localStorage.setItem(
        STORAGE.theme,
        next
    );

    applyTheme(next);

}


function updateThemeButton(isDark) {

    const button =
        getThemeButton();

    if (!button) return;

    /*
       نحاول الحفاظ على النص/الأيقونة
       مهما كان شكل زر HTML.
    */

    const icon =
        button.querySelector(
            ".theme-icon"
        );

    if (icon) {

        icon.textContent =
            isDark ? "☀️" : "🌙";

        return;

    }

    if (
        button.children.length === 0
    ) {

        button.textContent =
            isDark ? "☀️" : "🌙";

    }

}


/* =========================================================
   📊 STATS
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
            sites.length;

    }

    if (totalCategories) {

        totalCategories.textContent =
            Object.keys(categoryInfo).length;

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


/* =========================================================
   📱 MOBILE NAV
   ========================================================= */

function toggleMobileMenu() {

    const nav =
        document.getElementById(
            "mobileNav"
        );

    if (!nav) return;

    nav.classList.toggle("active");

}


/* =========================================================
   👁️ VIEW MODE
   ========================================================= */

function setViewMode(mode) {

    localStorage.setItem(
        STORAGE.view,
        mode
    );

    applyViewMode();

}


function applyViewMode() {

    const container =
        document.getElementById(
            "sitesContainer"
        );

    if (!container) return;

    const mode =
        localStorage.getItem(
            STORAGE.view
        ) || "grid";

    container.classList.toggle(
        "list-view",
        mode === "list"
    );

    container.classList.toggle(
        "grid-view",
        mode === "grid"
    );

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
            mode === "grid"
        );

    }

    if (listButton) {

        listButton.classList.toggle(
            "active",
            mode === "list"
        );

    }

}


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

    if (search) search.value = "";

    if (category) category.value = "all";

    if (sort) sort.value = "default";

    displaySites(sites);

}


/* =========================================================
   🔔 TOAST
   ========================================================= */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    if (!toast) {

        console.log(message);

        return;

    }

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================================
   🧹 HTML SECURITY
   ========================================================= */

function escapeHTML(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   ⌨️ KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT" &&
            document.activeElement.tagName !== "TEXTAREA"
        ) {

            event.preventDefault();

            const input =
                document.getElementById(
                    "searchInput"
                );

            if (input) {

                input.focus();

            }

        }

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================================
   🖱️ MODAL OUTSIDE CLICK
   ========================================================= */

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


/* =========================================================
   🚀 INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* Theme */

        const savedTheme =
            localStorage.getItem(
                STORAGE.theme
            ) || "dark";

        applyTheme(savedTheme);


        /* Categories */

        populateCategorySelect();

        renderCategories();


        /* Main content */

        displaySites(sites);

        renderFeatured();

        renderFun();

        renderGaming();

        renderRecent();


        /* Stats */

        updateStats();


        /* View mode */

        applyViewMode();


        /* Search */

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


        const searchInput =
            document.getElementById(
                "searchInput"
            );

        if (searchInput) {

            searchInput.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter"
                    ) {

                        performSearch(
                            searchInput.value
                        );

                    }

                }
            );

        }


        /* Mobile menu */

        const mobileButton =
            document.querySelector(
                ".mobile-menu-btn"
            );

        if (mobileButton) {

            mobileButton.addEventListener(
                "click",
                toggleMobileMenu
            );

        }


        console.log(
            "✅ WebBox جاهز!"
        );

        console.log(
            `🌐 ${sites.length} موقع`
        );

        console.log(
            `📂 ${Object.keys(categoryInfo).length} تصنيفات`
        );

    }
);


/* =========================================================
   🌍 GLOBAL FUNCTIONS
   ========================================================= */

window.sites = sites;

window.siteData = rawSites;

window.categoryInfo = categoryInfo;

window.showSection = showSection;

window.showHome = showHome;

window.showCategories = showCategories;

window.showFun = showFun;

window.showGaming = showGaming;

window.showFavorites = showFavorites;

window.showRecent = showRecent;

window.filterCategory = filterCategory;

window.filterSiteList = filterSiteList;

window.performSearch = performSearch;

window.handleMainSearch = handleMainSearch;

window.quickSearch = quickSearch;

window.voiceSearch = voiceSearch;

window.toggleFavorite = toggleFavorite;

window.openSite = openSite;

window.showDetails = showDetails;

window.closeModal = closeModal;

window.randomSite = randomSite;

window.toggleDarkMode = toggleDarkMode;

window.setViewMode = setViewMode;

window.clearFilters = clearFilters;

window.renderCategories = renderCategories;

window.renderFavorites = renderFavorites;

window.renderRecent = renderRecent;

window.showToast = showToast;

window.toggleMobileMenu = toggleMobileMenu;


/* =========================================================
   🧪 FINAL CHECK
   ========================================================= */

if (sites.length !== 500) {

    console.warn(
        `⚠️ عدد المواقع الحالي: ${sites.length} وليس 500`
    );

} else {

    console.log(
        "🎉 WebBox يحتوي على 500 موقع بالضبط!"
    );

}
