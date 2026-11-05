document.addEventListener("DOMContentLoaded", function () {

  const wrapper = document.querySelector(".cert-wrapper");

  if (!wrapper) {
    console.log("cert-wrapper tidak ditemukan");
    return;
  }

  // Tampilkan Portfolio dengan animasi
  wrapper.classList.add("show");

});

console.log("slider_cert.js jalan bro");


