
const menus = document.querySelectorAll('.menu, .btn-exit');
let isScrolling = false;
let scrollEnabled = false;
let userActivated = false;

// =====================
// INIT SCROLL READY
// =====================
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    scrollEnabled = true;
    console.log("SCROLL READY 🔥");
  }, 300);
});

// =====================
// MENU SCROLL SYSTEM
// =====================
window.addEventListener('wheel', (e) => {

  if (!scrollEnabled) return;
  if (isScrolling) return;

  isScrolling = true;

  const menuItems = document.querySelectorAll('.menu, .btn-exit');
  if (!menuItems.length) return;

  let currentIndex = -1;

  menuItems.forEach((menu, i) => {
    if (menu.classList.contains('active')) {
      currentIndex = i;
    }
  });

  if (e.deltaY > 0) currentIndex++;
  else currentIndex--;

  if (currentIndex >= menuItems.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = menuItems.length - 1;

  menuItems.forEach(m => m.classList.remove('active'));
  menuItems[currentIndex].classList.add('active');

  setTimeout(() => {
    isScrolling = false;
  }, 250);
});

// =====================
// USER ACTIVITY TRACK
// =====================
window.addEventListener("mousemove", () => userActivated = true);
window.addEventListener("wheel", () => userActivated = true);

console.log("TOTAL MENU:", menus.length);
console.log("SCROLL DETECTED");

// =====================
// TITLE CONTROL
// =====================
function setActiveMenu(el, titleText) {
  document.querySelectorAll('.menu').forEach(menu => {
    menu.classList.remove('active');
  });

  if (el) el.classList.add('active');
  document.title = titleText;
}

// =====================
// MODAL SYSTEM
// =====================
function openCV(el) {
  setActiveMenu(el, "Owner Profile");
  const modal = document.getElementById("cvModal");
  if (modal) modal.style.display = "block";
}

function closeCV() {
  const el = document.getElementById("cvModal");
  if (el) el.style.display = "none";
  document.title = "Profile MAXIANO";
}

function openCert(el) {
  setActiveMenu(el, "Experiences");
  const modal = document.getElementById("certModal");
  if (modal) modal.style.display = "block";
}

function closeCert() {
  const el = document.getElementById("certModal");
  if (el) el.style.display = "none";
  document.title = "Profile MAXIANO";
}

// =====================
// FOUNDER MODAL
// =====================
function closeFounder() {
  const el = document.getElementById("founderModal");
  if (el) el.style.display = "none";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeFounder();
});

console.log("MAIN JS LOADED ONCE:", Date.now());


// =====================
// FOUNDER PAGE
// =====================
window.openFounder = function (el) {

    setActiveMenu(el, "Profile Company");

    window.location.href = "founder.html";

};


// =====================
// EXIT APP
// =====================
window.exitApp = function () {

  // 🔥 HAPUS SEMUA SESSION LOGIN
  localStorage.removeItem("user");
  sessionStorage.clear();

  window.location.replace("landing.html");
};

console.log("CEK USER:", localStorage.getItem("user"));



// INTRO LOGIC
// ===========
window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("introScreen");

  if (!intro) return;

  // 🔥 INI KUNCI FIX
  if (sessionStorage.getItem("skipIntro") === "true") {
    sessionStorage.removeItem("skipIntro");
    intro.style.display = "none";
    return;
  }

  setTimeout(() => {
    intro.classList.add("fade-out");

    setTimeout(() => {
      intro.style.display = "none";
    }, 800);

  }, 2500);
});


if (sessionStorage.getItem("logout") === "true") {
  sessionStorage.removeItem("logout");
}


// =========================
// ANTHON PROJECT
// =========================
window.openAnthonProject = function(el){

    setActiveMenu(el,"Anthon Cafe");

    alert("Halaman Project Anthon Cafe sedang dipersiapkan.");

};


// =====================
// MARKETPLACE
// =====================
window.openMarket = function(el){

    setActiveMenu(el, "Marketplace");

    alert("Marketplace sedang dipersiapkan.");

};