const CACHE_NAME = "maxiano-profile-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
  "/cv.html",
  "/slider_cert.html",
  "/founder.html",
  "/logo_anthon4.png",
  "/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});