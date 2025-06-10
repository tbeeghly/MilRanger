const CACHE_NAME = 'milranger-v1';
const urlsToCache = [
  '/MilRanger/',
  '/MilRanger/index.html',
  '/MilRanger/assets/',
  '/MilRanger/favicon.ico',
  '/MilRanger/android-chrome-192x192.png',
  '/MilRanger/android-chrome-512x512.png',
  '/MilRanger/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache.map(url => {
          return new Request(url, {cache: 'reload'});
        })).catch((error) => {
          console.log('Cache addAll failed:', error);
        });
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Fallback for offline mode
        if (event.request.destination === 'document') {
          return caches.match('/MilRanger/index.html');
        }
      })
  );
});
