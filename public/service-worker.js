const offlineRoutes = [
  '/',
  '/index.html',
  '/login',
  '/main',
  '/reset-password',
  '/regulation-event',
  '/about-event',
  '/time-line',
  '/partners-event'
  // Adicione aqui outras rotas do seu aplicativo que devem ficar ativas offline
];

const CACHE_NAME = 'confed8';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all([
        cache.addAll(offlineRoutes),
        cacheAssets(cache)
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Retorna a resposta em cache se estiver disponível
      }

      return fetch(event.request).then((fetchResponse) => {
        if (
          !fetchResponse ||
          fetchResponse.status !== 200 ||
          fetchResponse.type !== 'basic'
        ) {
          return fetchResponse; // Retorna a resposta da rede normalmente
        }

        // Clona a resposta da rede
        const responseToCache = fetchResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache); // Armazena a resposta em cache para a próxima vez
        });

        return fetchResponse; // Retorna a resposta da rede
      });
    })
  );
});

function cacheAssets(cache) {
  const assetsToCache = [
    '../src/assets/'
    // Adicione aqui outros caminhos para os assets que deseja baixar
  ];

  return Promise.all(
    assetsToCache.map((asset) => {
      return fetch(asset, { mode: 'no-cors' })
        .then((response) => {
          if (response.status !== 200 || response.type !== 'basic') {
            throw new Error('Failed to download asset: ' + asset);
          }

          return cache.put(asset, response);
        })
        .catch((error) => {
          console.error('Error caching asset:', error);
        });
    })
  );
}
