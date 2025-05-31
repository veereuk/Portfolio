let isPlaying = false;

// 🎮 Play Button Logic
document.getElementById("play-button").addEventListener("click", function () {
  isPlaying = true;
  alert("Game has started! Press the drum buttons or keyboard keys to play.");
});

// 🔘 Button Clicks
document.querySelectorAll(".drum-button").forEach((button) => {
  button.addEventListener("click", function () {
    if (isPlaying) {
      const buttonKey = this.innerText;
      playSound(buttonKey);
      animateButton(this);
    }
  });
});

// 🎹 Key Presses
document.addEventListener("keydown", function (event) {
  if (isPlaying) {
    const key = event.key.toLowerCase();
    const matchingButton = Array.from(document.querySelectorAll(".drum-button"))
      .find(btn => btn.innerText.toLowerCase() === key);
    
    if (matchingButton) {
      playSound(key);
      animateButton(matchingButton);
    }
  }
});

// 🔊 Sound Player
function playSound(key) {
  const sounds = {
    w: "music/drum.mp3",
    a: "music/open hi hat.mp3",
    s: "music/hi hat.mp3",
    d: "music/crash cymbal.mp3",
    j: "music/crash cymbal 1.mp3",
    k: "music/tom drum high.mp3",
    l: "music/tom drum low.mp3",
  };

  const sound = sounds[key];
  if (sound) {
    const audio = new Audio(sound);
    audio.play();
  }
}

// ✨ Button Animation
function animateButton(button) {
  button.classList.add("animation");
  setTimeout(() => {
    button.classList.remove("animation");
  }, 100);
}
