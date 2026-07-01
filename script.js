const TOTAL_PHOTOS = 20;

let currentLang = localStorage.getItem("oakBirthdayLang") || "en";
let currentPhoto = 1;
let finalWishClicked = false;

const translations = {
    en: {
        documentTitle: "Happy 23rd Birthday Oak",

        logo: "Oak’s 23rd",
        navLetter: "Letter",
        nav23: "23",
        navGallery: "Gallery",
        navWish: "Wish",
        langBtn: "ไทย",

        startEyebrow: "A little Birthday world for",
        startText:
            "This birthday gift was made only for you. A little website is for your 23rd year.",

        startBtn: "Open Your Birthday Gift",

        heroEyebrow: "Happy 23rd Birthday",
        heroTitle: "To Oak,",
        heroDesc:
            "I made this little birthday world for you. A soft place filled with memories, little flowers, small wishes, and everything I wanted to keep beautifully for your 23rd birthday.",
        readLetter: "Read My Letter",
        seePhotos: "See Your Photos",
        floatingLabel: "flowers for Oak 🩵",

        birthdayEyebrow: "Birthday chapter",
        birthdayTitle: "Oak’s 23rd Birthday",
        birthdayDesc:
            "A new chapter, a softer year, and more reasons to smile. This little blue world is made to celebrate you.",
        miniOne: "your new chapter",
        miniTwo: "memories kept here",
        miniThree: "blue wishes for you",

        letterEyebrow: "A letter for you",
        letterTitle: "Dear Oak,",
        letterP1:
            "Happy 23rd birthday to someone who became special to me in such a soft way. I hope today makes you feel loved, cared for, and remembered.",
        letterP2:
            "You are like a rare cute flower to me — calm, beautiful, gentle, and unforgettable. I hope this new chapter brings you more peace, more smiles, more lucky moments, and more reasons to feel proud of yourself.",
        letterP3:
            "I hope you know that you deserve good things, soft days, honest love, and people who choose you gently.",
        surpriseBtn: "Tap for one more message",
        hideMessage: "Hide the message",
        secretTitle: "My little birthday wish for you 💙",
        secretText:
            "I hope your 23rd year feels lighter, warmer, and happier. I’m really happy that I met you, Oak.",

        wishesEyebrow: "For your 23rd year",
        wishesTitle: "23 little wishes for Oak",
        wishesDesc: "Not big promises. Just small soft wishes for you.",

        filmEyebrow: "A tiny film strip",
        filmTitle: "Some memories I wanted to keep",

        galleryEyebrow: "20 memories",
        galleryTitle: "Oak’s Birthday Gallery",
        galleryIntro:
            "A little collection of your photos, wrapped in soft flowers, and birthday wishes.",

        finalEyebrow: "One final wish",
        finalTitle: "Happy Birthday, Oak 💙",
        finalText:
            "I hope your 23rd year treats you kindly. I hope you feel supported, and loved. I hope your heart feels lighter than before.",
        finalBtn: "Make a Birthday Wish",
        finalBtnClicked: "Your wish is flying to the sky 💙"
    },

    th: {
        documentTitle: "สุขสันต์วันเกิดปีที่ 23 นะ Oak",

        logo: "Oak’s 23rd",
        navLetter: "จดหมาย",
        nav23: "23",
        navGallery: "แกลเลอรี",
        navWish: "คำอวยพร",
        langBtn: "EN",

        startEyebrow: "เว็บวันเกิดเล็ก ๆ สำหรับ",
        startText:
            "ของขวัญวันเกิดชิ้นนี้ทำขึ้นมาเพื่อเทอคนเดียว เป็นเว็บเล็ก ๆ สำหรับปีที่ 23 ของเทอ",

        startBtn: "เปิดของขวัญวันเกิด",

        heroEyebrow: "สุขสันต์วันเกิดปีที่ 23 นะ",
        heroTitle: "ถึง Oak,",
        heroDesc:
            "เค้าทำเว็บวันเกิดเล็ก ๆ นี้ให้เทอ เป็นพื้นที่เล็ก ๆ ที่เต็มไปด้วยความทรงจำ ดอกไม้เล็ก ๆ คำอวยพรเล็ก ๆ และความรู้สึกดี ๆ ที่เค้าอยากเก็บไว้ให้เทอในวันเกิดปีที่ 23",
        readLetter: "อ่านจดหมาย",
        seePhotos: "ดูรูปของเทอ",
        floatingLabel: "ดอกไม้สำหรับ Oak 🩵",

        birthdayEyebrow: "บทใหม่ของเทอ",
        birthdayTitle: "วันเกิดปีที่ 23 ของ Oak",
        birthdayDesc:
            "ปีใหม่ของเทอ รอยยิ้มใหม่ ๆ และวันที่อ่อนโยนกว่าเดิม เว็บเล็ก ๆ นี้ทำขึ้นมาเพื่อฉลองให้เทอนะ",
        miniOne: "บทใหม่ของเทอ",
        miniTwo: "ความทรงจำที่เก็บไว้",
        miniThree: "คำอวยพรสีฟ้าให้เทอ",

        letterEyebrow: "จดหมายถึงเทอ",
        letterTitle: "Dear Oak,",
        letterP1:
            "สุขสันต์วันเกิดปีที่ 23 นะ คนที่ค่อย ๆ กลายมาเป็นคนพิเศษของเค้าแบบนุ่มนวลมาก ๆ เค้าหวังว่าวันนี้จะทำให้เทอรู้สึกว่าเทอถูกรัก ถูกใส่ใจ และมีคนตั้งใจทำอะไรเล็ก ๆ ให้เทอ",
        letterP2:
            "เทอเหมือนดอกไม้เล็ก ๆ ที่น่ารักและหายากสำหรับเค้า ทั้งสงบ อ่อนโยน และลืมไม่ลง เค้าหวังว่าบทใหม่ของเทอจะพาเทอไปเจอความสบายใจ รอยยิ้ม โชคดี และเหตุผลอีกมากมายที่ทำให้เทอภูมิใจในตัวเอง",
        letterP3:
            "เค้าหวังว่าเทอจะรู้ว่าเทอสมควรได้รับสิ่งดี ๆ วันที่อ่อนโยน ความรักที่จริงใจ และคนที่ดูแลหัวใจเทออย่างอ่อนโยน",
        surpriseBtn: "แตะเพื่ออ่านข้อความอีกนิด",
        hideMessage: "ซ่อนข้อความ",
        secretTitle: "คำอวยพรเล็ก ๆ ของเค้า 💙",
        secretText:
            "เค้าหวังว่าปีที่ 23 ของเทอจะเบาขึ้น อบอุ่นขึ้น และมีความสุขมากขึ้น เค้าดีใจจริง ๆ ที่ได้เจอเทอนะ Oak",

        wishesEyebrow: "สำหรับปีที่ 23 ของเทอ",
        wishesTitle: "23 คำอวยพรเล็ก ๆ ให้ Oak",
        wishesDesc: "ไม่ใช่คำสัญญาใหญ่โต แค่คำอวยพรเล็ก ๆ ที่เค้าอยากให้เทอได้รับ",

        filmEyebrow: "ฟิล์มความทรงจำเล็ก ๆ",
        filmTitle: "บางความทรงจำที่เค้าอยากเก็บไว้",

        galleryEyebrow: "20 ความทรงจำ",
        galleryTitle: "แกลเลอรีวันเกิดของ Oak",
        galleryIntro:
            "รูปของเทอที่ถูกเก็บไว้พร้อมดอกไม้เล็ก ๆ และคำอวยพรวันเกิด",

        finalEyebrow: "คำอวยพรสุดท้าย",
        finalTitle: "สุขสันต์วันเกิดนะ Oak 💙",
        finalText:
            "เค้าหวังว่าปีที่ 23 ของเทอจะใจดีกับเทอ ขอให้เทอรู้สึกว่ามีคนอยู่ข้าง ๆ มีคนซัพพอร์ต และมีคนรักเทอ ขอให้หัวใจของเทอเบากว่าเดิมนะ",
        finalBtn: "อธิษฐานวันเกิด",
        finalBtnClicked: "คำอธิษฐานของเทอลอยขึ้นฟ้าแล้ว 💙"
    }
};

const captions = {
    en: [
        "Oak, the birthday star 💙",
        "A soft little memory",
        "Blue suits you so much",
        "One of my favorite smiles",
        "A moment worth keeping",
        "You look so special here",
        "Another reason to smile",
        "A photo I really like",
        "This one feels warm",
        "A little piece of happiness",
        "You are unforgettable",
        "This memory is precious",
        "A soft blue moment",
        "My favorite person today",
        "A beautiful birthday memory",
        "Keeping this one forever",
        "A tiny blue flower for you",
        "You deserve the sweetest day",
        "You are the cutest in my world",
        "Happy 23rd birthday, Oak 💙"
    ],

    th: [
        "Oak ดาวเด่นของวันเกิด 💙",
        "ความทรงจำเล็ก ๆ ที่อ่อนโยน",
        "เทอเหมาะกับสีฟ้ามากเลย",
        "หนึ่งในรอยยิ้มที่เค้าชอบ",
        "ช่วงเวลาที่น่าเก็บไว้",
        "รูปนี้เทอดูพิเศษมาก",
        "อีกหนึ่งเหตุผลที่ทำให้ยิ้ม",
        "รูปที่เค้าชอบมาก",
        "รูปนี้ให้ความรู้สึกอบอุ่น",
        "ความสุขชิ้นเล็ก ๆ",
        "เทอเป็นคนที่ลืมไม่ลง",
        "ความทรงจำนี้มีค่ามาก",
        "ช่วงเวลาสีฟ้าที่อ่อนโยน",
        "คนโปรดของวันนี้",
        "ความทรงจำวันเกิดที่สวยมาก",
        "รูปนี้จะเก็บไว้ตลอดเลย",
        "ดอกไม้สีฟ้าเล็ก ๆ ให้เทอ",
        "เทอสมควรได้รับวันที่หวานที่สุด",
        "เทอน่ารักที่สุดในโลกของเค้า",
        "สุขสันต์วันเกิดปีที่ 23 นะ Oak 💙"
    ]
};

const wishes = {
    en: [
        "More peaceful days",
        "More real smiles",
        "More lucky moments",
        "More soft love",
        "More beautiful memories",
        "More reasons to laugh",
        "More confidence",
        "More good news",
        "More warm hugs",
        "More calm nights",
        "More blue skies",
        "More people who care",
        "More sweet surprises",
        "More proud moments",
        "More gentle mornings",
        "More dreams coming true",
        "More comfort",
        "More strength",
        "More happiness",
        "More safe feelings",
        "More pretty photos",
        "More love around you",
        "More reasons to stay soft"
    ],

    th: [
        "ขอให้มีวันที่สงบมากขึ้น",
        "ขอให้ได้ยิ้มจากใจมากขึ้น",
        "ขอให้เจอช่วงเวลาดี ๆ มากขึ้น",
        "ขอให้ได้รับความรักที่อ่อนโยน",
        "ขอให้มีความทรงจำสวย ๆ มากขึ้น",
        "ขอให้มีเหตุผลให้หัวเราะมากขึ้น",
        "ขอให้มั่นใจในตัวเองมากขึ้น",
        "ขอให้มีข่าวดีเข้ามาบ่อย ๆ",
        "ขอให้ได้กอดอุ่น ๆ ในวันที่เหนื่อย",
        "ขอให้มีคืนที่สบายใจมากขึ้น",
        "ขอให้เจอท้องฟ้าสีฟ้าบ่อย ๆ",
        "ขอให้มีคนที่แคร์เทอจริง ๆ",
        "ขอให้มีเซอร์ไพรส์หวาน ๆ",
        "ขอให้มีช่วงเวลาที่ภูมิใจในตัวเอง",
        "ขอให้มีเช้าที่อ่อนโยนกว่าเดิม",
        "ขอให้ความฝันค่อย ๆ เป็นจริง",
        "ขอให้มีความสบายใจมากขึ้น",
        "ขอให้เข้มแข็งในแบบของเทอ",
        "ขอให้มีความสุขมากขึ้น",
        "ขอให้รู้สึกปลอดภัยกับความรัก",
        "ขอให้มีรูปสวย ๆ ให้เก็บไว้อีกเยอะ ๆ",
        "ขอให้มีความรักดี ๆ อยู่รอบตัว",
        "ขอให้ยังเป็นเทอที่อ่อนโยนแบบนี้"
    ]
};

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const langBtn = document.getElementById("langBtn");

const scrollProgress = document.getElementById("scrollProgress");

const galleryGrid = document.getElementById("galleryGrid");
const wishGrid = document.getElementById("wishGrid");

const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const surpriseBtn = document.getElementById("surpriseBtn");
const secretMessage = document.getElementById("secretMessage");
const finalWishBtn = document.getElementById("finalWishBtn");

/* Helper functions */

function setText(selector, value) {
    const element = document.querySelector(selector);

    if (element) {
        element.textContent = value;
    }
}

function setHTML(selector, value) {
    const element = document.querySelector(selector);

    if (element) {
        element.innerHTML = value;
    }
}

/* Language */

function applyLanguage(language) {
    currentLang = language;
    localStorage.setItem("oakBirthdayLang", currentLang);

    const t = translations[currentLang];

    document.title = t.documentTitle;

    setText(".logo", t.logo);

    const navLinks = document.querySelectorAll(".navbar nav a");

    if (navLinks.length >= 4) {
        navLinks[0].textContent = t.navLetter;
        navLinks[1].textContent = t.nav23;
        navLinks[2].textContent = t.navGallery;
        navLinks[3].textContent = t.navWish;
    }

    langBtn.textContent = t.langBtn;

    setText(".start-screen .eyebrow", t.startEyebrow);
    setText(".start-text", t.startText);
    setText(".landscape-note", t.landscapeNote);
    setText("#startBtn", t.startBtn);

    setText(".hero .eyebrow", t.heroEyebrow);
    setHTML(".hero h2", t.heroTitle);
    setText(".hero-desc", t.heroDesc);
    setText(".primary-btn", t.readLetter);
    setText(".glass-btn", t.seePhotos);
    setText(".floating-label", t.floatingLabel);

    setText(".main-info .eyebrow", t.birthdayEyebrow);
    setText(".main-info h2", t.birthdayTitle);
    setText(".main-info p", t.birthdayDesc);

    const miniInfoTexts = document.querySelectorAll(".mini-info p");

    if (miniInfoTexts.length >= 3) {
        miniInfoTexts[0].textContent = t.miniOne;
        miniInfoTexts[1].textContent = t.miniTwo;
        miniInfoTexts[2].textContent = t.miniThree;
    }

    setText(".letter-card .eyebrow", t.letterEyebrow);
    setText(".letter-card h2", t.letterTitle);

    const letterParagraphs = document.querySelectorAll(".letter-card > p:not(.eyebrow)");

    if (letterParagraphs.length >= 3) {
        letterParagraphs[0].textContent = t.letterP1;
        letterParagraphs[1].textContent = t.letterP2;
        letterParagraphs[2].textContent = t.letterP3;
    }

    if (secretMessage.classList.contains("show")) {
        surpriseBtn.textContent = t.hideMessage;
    } else {
        surpriseBtn.textContent = t.surpriseBtn;
    }

    setText("#secretMessage h3", t.secretTitle);
    setText("#secretMessage p", t.secretText);

    setText(".twenty-three-section .eyebrow", t.wishesEyebrow);
    setText(".twenty-three-section h2", t.wishesTitle);
    setText(".twenty-three-section .section-desc", t.wishesDesc);

    setText(".film-section .eyebrow", t.filmEyebrow);
    setText(".film-section h2", t.filmTitle);

    setText(".gallery-section .eyebrow", t.galleryEyebrow);
    setText(".gallery-section h2", t.galleryTitle);
    setText(".gallery-intro", t.galleryIntro);

    setText(".final-card .eyebrow", t.finalEyebrow);
    setText(".final-card h2", t.finalTitle);
    setText(".final-card p", t.finalText);

    if (finalWishClicked) {
        finalWishBtn.textContent = t.finalBtnClicked;
    } else {
        finalWishBtn.textContent = t.finalBtn;
    }

    updateWishTexts();
    updateGalleryCaptions();

    if (photoModal.classList.contains("show")) {
        modalCaption.textContent = captions[currentLang][currentPhoto - 1];
    }
}

langBtn.addEventListener("click", () => {
    if (currentLang === "en") {
        applyLanguage("th");
    } else {
        applyLanguage("en");
    }
});

/* Opening screen */

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hide");
    createConfetti(100);

    setTimeout(() => {
        document.getElementById("home").scrollIntoView({
            behavior: "smooth"
        });
    }, 250);
});

/* Floating decorations */

function createFloatingDecorations() {
    const floatingArea = document.getElementById("floatingArea");
    const decorations = ["💙", "🩵", "🌸", "💠", "🦋", "✦", "❄️"];

    for (let i = 0; i < 34; i++) {
        const item = document.createElement("div");
        item.className = "floating-item";
        item.textContent = decorations[Math.floor(Math.random() * decorations.length)];

        item.style.left = `${Math.random() * 100}%`;
        item.style.fontSize = `${16 + Math.random() * 22}px`;
        item.style.animationDuration = `${8 + Math.random() * 10}s`;
        item.style.animationDelay = `${Math.random() * 10}s`;

        floatingArea.appendChild(item);
    }
}

/* 23 wishes */

function createWishes() {
    wishes[currentLang].forEach((wish, index) => {
        const item = document.createElement("div");
        item.className = "wish-item";

        item.innerHTML = `
            <div class="wish-number">${String(index + 1).padStart(2, "0")}</div>
            <p>${wish}</p>
        `;

        wishGrid.appendChild(item);
    });
}

function updateWishTexts() {
    const wishTexts = document.querySelectorAll(".wish-item p");

    wishTexts.forEach((text, index) => {
        text.textContent = wishes[currentLang][index];
    });
}

/* Gallery */

function createGallery() {
    for (let i = 1; i <= TOTAL_PHOTOS; i++) {
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";
        galleryItem.style.animationDelay = `${i * 0.045}s`;

        galleryItem.innerHTML = `
            <img 
                src="thumbs/photo${i}.jpg" 
                alt="Oak birthday photo ${i}"
                loading="lazy"
                decoding="async"
            >
            <p>${captions[currentLang][i - 1]}</p>
        `;

        galleryItem.addEventListener("click", () => {
            openPhoto(i);
        });

        galleryGrid.appendChild(galleryItem);
    }
}

function updateGalleryCaptions() {
    const galleryCaptions = document.querySelectorAll(".gallery-item p");

    galleryCaptions.forEach((caption, index) => {
        caption.textContent = captions[currentLang][index];
    });
}

/* Photo modal */

function openPhoto(photoNumber) {
    currentPhoto = photoNumber;

    modalImage.src = `images/photo${currentPhoto}.jpg`;
    modalCaption.textContent = captions[currentLang][currentPhoto - 1];

    photoModal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closePhoto() {
    photoModal.classList.remove("show");
    document.body.style.overflow = "";
}

function showNextPhoto() {
    currentPhoto++;

    if (currentPhoto > TOTAL_PHOTOS) {
        currentPhoto = 1;
    }

    openPhoto(currentPhoto);
}

function showPreviousPhoto() {
    currentPhoto--;

    if (currentPhoto < 1) {
        currentPhoto = TOTAL_PHOTOS;
    }

    openPhoto(currentPhoto);
}

modalClose.addEventListener("click", closePhoto);
nextBtn.addEventListener("click", showNextPhoto);
prevBtn.addEventListener("click", showPreviousPhoto);

photoModal.addEventListener("click", (event) => {
    if (event.target === photoModal) {
        closePhoto();
    }
});

document.addEventListener("keydown", (event) => {
    if (!photoModal.classList.contains("show")) return;

    if (event.key === "Escape") {
        closePhoto();
    }

    if (event.key === "ArrowRight") {
        showNextPhoto();
    }

    if (event.key === "ArrowLeft") {
        showPreviousPhoto();
    }
});

/* Touch swipe for phone and iPad */

let touchStartX = 0;
let touchEndX = 0;

photoModal.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

photoModal.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < 45) return;

    if (swipeDistance < 0) {
        showNextPhoto();
    } else {
        showPreviousPhoto();
    }
}

/* Surprise message */

surpriseBtn.addEventListener("click", () => {
    secretMessage.classList.toggle("show");

    const t = translations[currentLang];

    if (secretMessage.classList.contains("show")) {
        surpriseBtn.textContent = t.hideMessage;
        createConfetti(70);
    } else {
        surpriseBtn.textContent = t.surpriseBtn;
    }
});

/* Final wish */

finalWishBtn.addEventListener("click", () => {
    finalWishClicked = true;
    createConfetti(130);
    finalWishBtn.textContent = translations[currentLang].finalBtnClicked;
});

/* Confetti */

function createConfetti(amount = 80) {
    const colors = [
        "#ffffff",
        "#dff6ff",
        "#7ed6ff",
        "#4169e1",
        "#1f4fd8",
        "#062d63"
    ];

    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";

        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${2.2 + Math.random() * 1.7}s`;
        confetti.style.animationDelay = `${Math.random() * 0.35}s`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4300);
    }
}

/* Scroll reveal */

function revealSections() {
    const sections = document.querySelectorAll(".reveal-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.16
        }
    );

    sections.forEach((section) => observer.observe(section));
}

/* Scroll progress */

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (documentHeight <= 0) {
        scrollProgress.style.width = "0%";
        return;
    }

    const progress = (scrollTop / documentHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress);

/* Start everything */

createFloatingDecorations();
createWishes();
createGallery();
revealSections();
updateScrollProgress();
applyLanguage(currentLang);