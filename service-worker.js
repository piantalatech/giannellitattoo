self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('app-vetrina').then(function(cache) {
      return cache.addAll([
        '/giannellitattoo/',
    '/giannellitattoo/index.html',
    '/giannellitattoo/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
