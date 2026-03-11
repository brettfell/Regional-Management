const CACHE_NAME = 'manager-v1.3';

// The core files that must load instantly
const CORE_ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './cards.js',
    './manifest.json',
    './icon.png',
    './theme.mp3' // Only include this if you uploaded it!
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(CORE_ASSETS);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // Return cached version if found
            if (cachedResponse) {
                return cachedResponse;
            }
            
            // Otherwise, fetch from network and dynamically cache it (great for the character GIFs!)
            return fetch(event.request).then(networkResponse => {
                // Check if we received a valid response
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                // Clone the response and put it in the cache
                let responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });

                return networkResponse;
            });
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                  .map(name => caches.delete(name))
            );
        })
    );
});

