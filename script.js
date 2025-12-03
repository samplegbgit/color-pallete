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
const saveBtn = document.getElementById("save");
const savedArea = document.getElementById("savedPalettes");

saveBtn.onclick = () => {
  const boxes = document.querySelectorAll(".color");
  const paletteColors = [];
  
  boxes.forEach(box => paletteColors.push(box.textContent));

  let saved = JSON.parse(localStorage.getItem("palettes")) || [];
  saved.push(paletteColors);
  localStorage.setItem("palettes", JSON.stringify(saved));

  renderSaved();
};

function renderSaved() {
  savedArea.innerHTML = "<h3>Saved Palettes:</h3>";
  const saved = JSON.parse(localStorage.getItem("palettes")) || [];

  saved.forEach(pal => {
    const row = document.createElement("div");
    row.className = "saved";
    pal.forEach(c => {
      const box = document.createElement("div");
      box.style.background = c;
      row.appendChild(box);
    });
    savedArea.appendChild(row);
  });
}

renderSaved();



