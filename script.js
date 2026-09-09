/* =========================
   BINAM NISHON SYSTEM
========================= */

/* LOADER */

const loader = document.getElementById("loader");
const loaderText = document.getElementById("loaderText");

const loadingMessages = [
  "INITIALIZING SYSTEM...",
  "CONNECTING TO BLACK SHADOW...",
  "ENCRYPTED CHANNEL DETECTED...",
  "IDENTITY CLASSIFIED...",
  "SYSTEM READY..."
];

let loadingIndex = 0;

const loadingInterval = setInterval(() => {
  if (loadingIndex < loadingMessages.length) {
    loaderText.textContent = loadingMessages[loadingIndex];
    loadingIndex++;
  } else {
    clearInterval(loadingInterval);
  }
}, 450);

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 2200);
});


/* ENTER WEBSITE */

const enterBtn = document.getElementById("enterBtn");
const landing = document.getElementById("landing");
const mainSystem = document.getElementById("mainSystem");

enterBtn.addEventListener("click", () => {

  landing.style.transition = "opacity 1.2s ease, transform 1.2s ease";
  landing.style.opacity = "0";
  landing.style.transform = "scale(1.05)";

  setTimeout(() => {
    landing.style.display = "none";
    mainSystem.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, 1200);
});


/* MATRIX RAIN */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

const chars =
  "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオ";

const fontSize = 15;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {

  ctx.fillStyle = "rgba(0, 0, 0, 0.055)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + "px monospace";
  ctx.fillStyle = "#00ff55";

  for (let i = 0; i < drops.length; i++) {

    const char =
      chars[Math.floor(Math.random() * chars.length)];

    ctx.fillText(
      char,
      i * fontSize,
      drops[i] * fontSize
    );

    if (
      drops[i] * fontSize > canvas.height &&
      Math.random() > 0.975
    ) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 45);

window.addEventListener("resize", () => {
  resizeCanvas();
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});


/* LIVE CLOCK */

function updateClock() {

  const now = new Date();

  const time =
    now.toLocaleTimeString("en-GB", {
      hour12: false
    });

  const date =
    now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });

  document.getElementById("clock").textContent = time;
  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();


/* TERMINAL TYPING */

const typingElement = document.getElementById("typing");

const terminalMessages = [
  "WELCOME TO THE SHADOW.",
  "NO NAME. NO FACE. NO TRACE.",
  "THE SHADOW NEVER WALKS ALONE.",
  "THE UNSEEN LEADER.",
  "SYSTEM WATCHING..."
];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;

function terminalTyping() {

  const current = terminalMessages[messageIndex];

  if (!deleting) {

    typingElement.textContent =
      current.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === current.length) {
      deleting = true;

      setTimeout(terminalTyping, 1800);
      return;
    }

  } else {

    typingElement.textContent =
      current.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
      deleting = false;
      messageIndex =
        (messageIndex + 1) % terminalMessages.length;
    }
  }

  setTimeout(
    terminalTyping,
    deleting ? 35 : 70
  );
}

terminalTyping();


/* SCROLL REVEAL */

const sections =
  document.querySelectorAll(".section");

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.transition =
            "opacity .9s ease, transform .9s ease";

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });

    },
    {
      threshold: 0.08
    }
  );

sections.forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";

  observer.observe(section);
});


/* RANDOM SIGNAL EFFECT */

setInterval(() => {

  const status =
    document.querySelectorAll(".status-dot");

  status.forEach(dot => {

    if (Math.random() > .85) {
      dot.style.opacity = "0";
      setTimeout(() => {
        dot.style.opacity = "1";
      }, 100);
    }

  });

}, 1500);
