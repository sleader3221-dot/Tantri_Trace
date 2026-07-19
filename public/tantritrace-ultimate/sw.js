const CACHE_NAME = "tantritrace-cache-v3";
const APP_VERSION = "20260719-i18n-ui";
const APP_ASSETS = [
  "/tantritrace-ultimate/",
  "/tantritrace-ultimate/index.html",
  "/tantritrace-ultimate/styles.css",
  `/tantritrace-ultimate/app.js?v=${APP_VERSION}`,
  "/tantritrace-ultimate/manifest.webmanifest",
  "/assets/tantritrace-hero.png",
  "/favicon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) return;

  event.respondWith(
    isAppShellRequest(event.request) ? networkFirst(event.request) : cacheFirst(event.request),
  );
});

function isAppShellRequest(request) {
  return request.mode === "navigate" || ["script", "style", "worker"].includes(request.destination);
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || caches.match("/tantritrace-ultimate/index.html");
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
}
