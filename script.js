const title = document.getElementById("title");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("DOMContentLoaded", () => {
  // Position the "No" button beside the "Yes" button on initial load
  const yesRect = yesBtn.getBoundingClientRect();
  noBtn.style.left = (yesRect.right + 20) + "px"; // 20px gap
  noBtn.style.top = yesRect.top + "px";
});

yesBtn.addEventListener("click", () => {
  title.innerText = "I love you too ...💞";
  generateHearts();
});

noBtn.addEventListener("mouseover", () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Calculate max boundaries within the viewport so the button stays fully visible
  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  // Pick a random spot within the viewport
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

function generateHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💗";
    // Random horizontal position, start at the top
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-40px";
    heart.style.animationDelay = `${Math.random() * 1.5}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2500);
  }
}
