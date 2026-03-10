const CACHE_NAME = 'tastehub-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './main.js',
    './sb.png',
    './a.jpg',
    './p.jpg',
    './sundari.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    // Bypass cache for non-GET requests and API requests
    if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
        return;
    }

    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
