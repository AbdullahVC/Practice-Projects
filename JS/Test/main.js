const button = document.querySelector("#colorButton");
const box = document.querySelector("#colorBox");
const img = document.querySelector("img");
button.innerHTML = "Bas bakalım";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let isBig = false;
let clickCount = 0;

button.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 5) {
    img.style.cssText = `
        display: block;
        width: 100%;
        height: 100vh;`;
  }

  const randomColor = getRandomColor();
  box.style.backgroundColor = randomColor;
  if (isBig) {
    // Küçült
    box.style.width = "100px";
    box.style.height = "100px";
  } else {
    // Büyüt
    box.style.width = "200px";
    box.style.height = "200px";
  }
  isBig = !isBig;
});
