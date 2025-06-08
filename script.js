const title = document.getElementById("title");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("DOMContentLoaded", () => {
  // Position the "No" button beside the "Yes" button on initial load
  const yesRect = yesBtn.getBoundingClientRect();
  noBtn.style.left = (yesRect.right + 20) + "px"; // 20px gap
  noBtn.style.top = yesRect.top + "px";
});

// Yes button click event
yesBtn.addEventListener("click", () => {
  title.innerText = "I love you too ...💞";
  noBtn.style.display = "none"; // Hide the No button
  generateHearts();
});

// Reusable function to move the "No" button
function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Make the No button run away on hover (mouse)
noBtn.addEventListener("mouseover", moveNoButton);

// Make the No button run away on touch (mobile)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevent accidental tap
  moveNoButton();
});

// Function to generate falling hearts
function generateHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-40px";
    heart.style.animationDelay = `${Math.random() * 1.5}s`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2500);
  }
}
