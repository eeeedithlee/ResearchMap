const V = 'v1';
const CACHE = ['./index.html', 'https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => c.addAll(CACHE))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));