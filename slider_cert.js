document.addEventListener("DOMContentLoaded", function () {

  const track = document.getElementById("certTrack");

  if (!track) {
    console.log("certTrack tidak ditemukan");
    return;
  }

  // 🔥 DUPLIKAT BIAR LOOP HALUS
  track.innerHTML += track.innerHTML;

  let position = 0;
  let speed = 0.5;

  function animate() {
    position -= speed;

    if (position <= -track.scrollWidth / 2) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
  }

  animate();

});

console.log("jalan bro");


window.addEventListener("load", () => {
  document.querySelector(".cert-wrapper").classList.add("show");
});