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
      return cache.addAll(offlineRoutes);
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

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const assetsToCache = [];

      // Percorre todos os elementos da página
      self.addEventListener('message', (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'asset') {
          assetsToCache.push('../src/assets/' + message.payload);
        }
      });

      // Realiza o download e armazenamento de todos os assets
      return Promise.all(
        assetsToCache.map((asset) => {
          const request = new Request(asset, { mode: 'no-cors' });

          return fetch(request).then((response) => {
            if (
              !response ||
              response.status !== 200 ||
              response.type !== 'basic'
            ) {
              return;
            }

            const responseToCache = response.clone();
            cache.put(request, responseToCache);
          });
        })
      );
    })
  );
});
