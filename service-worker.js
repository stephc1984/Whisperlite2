
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function(event) {
  const data = event.data ? event.data.text() : 'A whisper waits...';
  event.waitUntil(
    self.registration.showNotification('WhisperLite', {
      body: data,
      icon: 'icon.png',
      badge: 'icon.png'
    })
  );
});
