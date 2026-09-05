/* =================================
   TYPING EFFECT
================================= */

const typingText = document.getElementById("typing");

const messages = [
    "You teach with knowledge...",
    "You guide with patience...",
    "You inspire with your actions...",
    "You motivate us to dream bigger...",
    "And you leave a beautiful mark on our hearts ❤️"
];

let messageIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const current = messages[messageIndex];

    if (!deleting) {

        typingText.textContent =
            current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            messageIndex =
                (messageIndex + 1) % messages.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 75
    );
}

typeEffect();



/* =================================
   SMOOTH SCROLL
================================= */

function scrollToMessage() {

    document
        .getElementById("message")
        .scrollIntoView({
            behavior: "smooth"
        });
}



/* =================================
   HEART POPUP
================================= */

function openHeart() {

    document
        .getElementById("popup")
        .classList.add("show");

    createHearts(30);
}


function closeHeart() {

    document
        .getElementById("popup")
        .classList.remove("show");
}



/* =================================
   FLOATING HEARTS
================================= */

function createHearts(amount = 10) {

    const symbols = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "🌹",
        "✨"
    ];

    for (let i = 0; i < amount; i++) {

        const element =
            document.createElement("div");

        element.className = "floating";

        element.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        element.style.left =
            Math.random() * 100 + "vw";

        element.style.fontSize =
            (15 + Math.random() * 25) + "px";

        element.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        element.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(element);

        setTimeout(() => {

            element.remove();

        }, 10000);
    }
}



/* =================================
   CONTINUOUS SMALL HEARTS
================================= */

setInterval(() => {

    createHearts(2);

}, 3000);



/* =================================
   ROTATING QUOTES
================================= */

const quotes = [

    "A great teacher takes a hand, opens a mind, and touches a heart.",

    "A teacher plants the seeds of knowledge that grow forever.",

    "The influence of a great teacher can never be erased.",

    "Teachers don't just teach subjects. They shape futures.",

    "Behind every confident student is someone who believed in them.",

    "Some lessons are written in books. The most important ones are written in our hearts."
];

let quoteIndex = 0;

const quoteElement =
    document.getElementById("quoteText");


setInterval(() => {

    quoteIndex =
        (quoteIndex + 1) % quotes.length;

    quoteElement.style.opacity = "0";

    setTimeout(() => {

        quoteElement.textContent =
            quotes[quoteIndex];

        quoteElement.style.opacity = "1";

    }, 400);

}, 4000);



/* =================================
   CLICK ANYWHERE FOR HEARTS
================================= */

document.addEventListener(
    "click",
    function(event) {

        // Don't create hearts when clicking links/buttons
        if (
            event.target.tagName === "BUTTON" ||
            event.target.tagName === "A"
        ) {
            return;
        }

        const heart =
            document.createElement("div");

        heart.className = "floating";

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.bottom = "auto";

        heart.style.fontSize = "22px";

        heart.style.animationDuration = "2s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2500);
    }
);



/* =================================
   ESC KEY CLOSE POPUP
================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeHeart();

        }

    }
);