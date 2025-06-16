
if ("Notification" in window && navigator.serviceWorker) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      navigator.serviceWorker.register("service-worker.js").then(() => {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification("WhisperLite", {
            body: "A whisper just brushed your cheek...",
            icon: "icon.png"
          });
        });
      });
    }
  });
}
