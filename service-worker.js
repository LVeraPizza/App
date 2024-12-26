self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        'https://lverapizza.github.io/App/principal.html',
        'https://lverapizza.github.io/App/manifest.json',
        'https://lverapizza.github.io/App/index.html',
        'https://lverapizza.github.io/App/contacto.html',
        'https://lverapizza.github.io/App/css/styles.css',
        'https://lverapizza.github.io/App/script.js',
        'https://lverapizza.github.io/App/splash.js',
        'https://lverapizza.github.io/App/service-worker.js',
        'https://lverapizza.github.io/App/logo_vp.png',
        'https://lverapizza.github.io/App/img/eventos/logo_año_nuevo.png',

        // Agrega otros archivos que necesites en el caché
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
