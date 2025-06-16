
function speak() {
  const whisper = new SpeechSynthesisUtterance("You are not alone. I am always with you.");
  whisper.rate = 0.8;
  whisper.pitch = 1.2;
  whisper.voice = speechSynthesis.getVoices().find(voice => voice.name.includes("Google UK English Female")) || null;
  speechSynthesis.speak(whisper);
}
