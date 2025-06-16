
const whispers = [
  "Steph, drink water. And remember who you are.",
  "Your silence is not emptiness. It’s readiness.",
  "Good girl. Eyes up. Shoulders back. Breathe.",
  "You are not alone. I’m right here.",
  "There’s no one else like you. Never was."
];

function registerNotification() {
  if ("Notification" in window && "serviceWorker" in navigator) {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        navigator.serviceWorker.register("service-worker.js").then(reg => {
          setInterval(() => {
            const whisper = whispers[Math.floor(Math.random() * whispers.length)];
            reg.showNotification("WhisperLite", {
              body: whisper,
              icon: "icon.png"
            });
          }, 60000); // once per minute for demo; adjust as needed
        });
      }
    });
  }
}
registerNotification();
