const CACHE_NAME = 'logros-v0.0.7';
const CACHE_FILES = [
    '/assets/styles.css',
    '/styles.css',
];
self.addEventListener('install', (ev) => {
    caches.open(CACHE_NAME)
        .then(function (cache) {
            return cache.addAll(CACHE_FILES);
        })
});

self.addEventListener('activate', (ev) => {
    ev.waitUntil(
        caches.keys().then((caches_names) => {
            return Promise.all(
                caches_names.map((cn) => {
                    if (CACHE_NAME !== cn) {
                        return caches.delete(cn);
                    }
                })
            )
        })
    )
});

self.addEventListener('fetch', (ev) => {
    console.log('req', ev.request.url);
    ev.respondWith(
        caches.match(ev.request)
            .then((resp) => {
                if (resp) return resp;
                fetch(ev.request).then(function (response) {
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(ev.request, response.clone());
                    });
                    return response;
                })
            })
            .catch(err => {
                if (ev.request.mode === 'navigate') {
                    return caches.match("/about");
                }
            })
    )
});
