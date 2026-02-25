const startBtn = document.getElementById("startBtn");
const waterSound = document.getElementById("waterSound");
const bubblesContainer = document.getElementById("bubbles");

/* пузырьки */
for (let i = 0; i < 40; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = (4 + Math.random() * 6) + "s";
    bubble.style.opacity = Math.random();
    bubblesContainer.appendChild(bubble);
}

/* кнопка */
startBtn.addEventListener("click", () => {
    waterSound.play();
    document.querySelector(".start-screen").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".start-screen").style.display = "none";
    }, 1000);
});