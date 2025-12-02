const palette = document.querySelector(".palette");
const btn = document.getElementById("generate");

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Create 5 boxes on load
for (let i = 0; i < 5; i++) {
  const box = document.createElement("div");
  box.className = "color";
  palette.appendChild(box);
}

btn.onclick = () => {
  const boxes = document.querySelectorAll(".color");
  boxes.forEach(box => {
    const c = randomColor();
    box.style.background = c;
    box.textContent = c;
    box.style.color = "#fff";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.fontWeight = "bold";
  });
};

// Add copy to clipboard
palette.addEventListener("click", e => {
  if (e.target.classList.contains("color")) {
    const color = e.target.textContent;
    navigator.clipboard.writeText(color);
    alert("Copied: " + color);
  }
});


