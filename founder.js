console.log("FOUNDER JS LOADED");

// ========================
// ANIMASI LIST
// ========================
const items = document.querySelectorAll(".business-item");

function showItems() {
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("show");
    }, i * 200);
  });
}

// ========================
// CEK FOUNDER
// ========================
window.checkFounder = async function () {
  const result = document.getElementById("result");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    result.innerHTML = "❌ ID tidak ditemukan";
    return;
  }

  try {
    const res = await fetch(`/api/check/${id}`);
    const data = await res.json();

    if (data.status === "active") {
      result.innerHTML = "👑 Founder AKTIF";
    } else {
      result.innerHTML = "❌ Founder tidak aktif / expired";
    }

  } catch (err) {
    console.error(err);
    result.innerHTML = "❌ Error server";
  }
};

// ========================
// GENERATE LINK
// ========================
window.generateLink = function () {
  const result = document.getElementById("result");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    result.innerHTML = "❌ ID tidak ditemukan";
    return;
  }

  const link = `${window.location.origin}/register?ref=${id}`;

  result.innerHTML = `
    🔗 Link Invite:<br>
    <a href="${link}" target="_blank">${link}</a>
  `;
};

// ========================
window.onload = () => {
  showItems();
};


// FUNCTION GOBACK KE MAIN MENU
// ============================
window.goBack = function () {

  sessionStorage.setItem("skipIntro", "true");

  const id = sessionStorage.getItem("userId");

  window.location.href = `index.html?id=${id}`;
};

sessionStorage.setItem("skipIntro", "true");



// ========================
window.onload = () => {
  showItems();
};

// ========================
// TOGGLE DETAIL (CLICK)
// ========================
window.toggleDetail = function (el) {
  document.querySelectorAll(".business-item").forEach(item => {
    if (item !== el) item.classList.remove("active");
  });

  el.classList.toggle("active");
};

// ========================
// AUTO CLOSE SAAT KURSOR KELUAR
// ========================
document.querySelectorAll(".business-item").forEach(item => {
  item.addEventListener("mouseleave", () => {
    item.classList.remove("active");
  });
});

// ========================
// HOVER OPEN + AUTO CLOSE
// ========================
document.querySelectorAll(".business-item").forEach(item => {
  let timeout;

  item.addEventListener("mouseenter", () => {
    // tutup semua dulu
    document.querySelectorAll(".business-item").forEach(i => {
      i.classList.remove("active");
    });

    // buka yang di hover
    item.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      item.classList.remove("active");
    }, 200); // delay biar halus
  });

  item.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
  });
});


let id;

const logout = sessionStorage.getItem("logout");
if (logout === "true") {
  console.log("BLOCKED: user sudah logout");
  throw new Error("STOP EXECUTION");
}

const params = new URLSearchParams(window.location.search);
id = params.get("id");

if (!id) {
  id = sessionStorage.getItem("userId");
}

if (id) {
  sessionStorage.setItem("userId", id);
}

// if (!id) {
//   alert("ID tidak ditemukan");
//   throw new Error("STOP EXECUTION");
// }


// ========================
// EXIT PROFILE PERUSAHAAN
// ========================
window.exitApp = function () {
  sessionStorage.setItem("logout", "true");
  sessionStorage.clear();
  window.location.replace("landing.html");
};



function changeVideo(src) {
  const video = document.getElementById("companyVideo");

  if (!video) {
    console.log("VIDEO TIDAK KETEMU ❌");
    return;
  }

  video.pause();
  video.src = src + "?t=" + new Date().getTime(); // anti cache
  video.load();

  // 🔥 INI KUNCINYA
  video.play().catch(() => {});

  console.log("VIDEO BERHASIL DIGANTI ✅", src);
}

// ===============================
// MODAL VIDEO
// ===============================
function openVideo() {
  console.log("VIDEO DIBUKA 🔥");

  const modal = document.getElementById("videoModal");

  if (!modal) {
    console.log("MODAL TIDAK KETEMU ❌");
    return;
  }

  modal.style.display = "block";

  // ❌ JANGAN ADA video.play() DI SINI
}


function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("companyVideo");

  modal.style.display = "none";

  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

console.log("FOUNDER JS LOADED 🔥");

