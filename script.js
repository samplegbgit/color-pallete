const palette = document.querySelector(".palette");

for (let i = 0; i < 5; i++) {
  const box = document.createElement("div");
  box.className = "color";
  palette.appendChild(box);
}

console.log("Day 2: Five color boxes added.");
