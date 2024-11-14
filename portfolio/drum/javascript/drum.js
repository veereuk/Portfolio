
let isPlaying = false;

document.getElementById("play-button").addEventListener("click", function() {
    isPlaying = true;
    alert("Game has started! Press the drum buttons or keyboard keys to play.");
});


const drumButtons = document.querySelectorAll(".drum-button");
drumButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (isPlaying) { 
            const buttonKey = this.innerHTML;
            playSound(buttonKey);
            animateButton(buttonKey);
        }
    });
});


document.addEventListener("keypress", function(event) {
    if (isPlaying) {  
        playSound(event.key);
        animateButton(event.key);
    }
});


function playSound(key) {
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("music/drum.mp3");
            break;
        case "a":
            audio = new Audio("music/open hi hat.mp3");
            break;
        case "s":
            audio = new Audio("music/hi hat.mp3");
            break;
        case "d":
            audio = new Audio("music/crash cymbal.mp3");
            break;
        case "j":
            audio = new Audio("music/crash cymbal 1.mp3");
            break;
        case "k":
            audio = new Audio("music/tom drum high.mp3");
            break;
        case "l":
            audio = new Audio("music/tom drum low.mp3");
            break;
        default:
            console.log("No sound mapped to key: " + key);
            return; 
    }
    audio.play();
}

function animateButton(currentKey) {
    const activeButton = document.querySelector(`.drum-button:contains('${currentKey}')`);
    if (activeButton) {
        activeButton.classList.add("animation");
        setTimeout(() => {
            activeButton.classList.remove("animation");
        }, 100);
    }
}
