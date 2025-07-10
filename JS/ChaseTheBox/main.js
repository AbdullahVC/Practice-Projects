const startButton = document.querySelector("#startGame");
const targetBox = document.querySelector("#targetBox");
const statusMessage = document.querySelector("#statusMessage");

let level = 1;
let timer;
const gameArea = document.querySelector("#gameArea");

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.style.display = "none"; // Başlat butonunu gizle
  statusMessage.innerHTML = `Seviye ${level} başladı! 5 saniyen var.`;
  spawnBox(); // Rastgele kutuyu oluştur
  startTimer(); // 5 saniyelik zamanlayıcı başlat
}

function spawnBox() {
  // Rastgele boyut ve konum ayarla
  const size = 100 - level * 10; // Seviye arttıkça kutu küçülür
  const maxWidth = gameArea.clientWidth - size;
  const maxHeight = gameArea.clientHeight - size;
  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;

  // Kutunun boyutunu ve konumunu ayarla
  targetBox.style.width = `${size}px`;
  targetBox.style.height = `${size}px`;
  targetBox.style.left = `${randomX}px`;
  targetBox.style.top = `${randomY}px`;
  targetBox.style.display = "block"; // Kutuyu göster
}

function startTimer() {
  clearTimeout(timer); // Önceki zamanlayıcıyı temizle
  timer = setTimeout(() => {
    statusMessage.innerHTML = "Kaybettin! Tekrar denemek için yenile.";
    targetBox.style.display = "none";
    startButton.style.display = "block"; // Oyunu başlat butonunu göster
  }, 5000); // 5 saniyelik zamanlayıcı
}

targetBox.addEventListener("click", () => {
  clearTimeout(timer); // Zamanlayıcıyı durdur
  level++; // Seviyeyi artır
  statusMessage.innerHTML = `Seviye ${level} başladı! 5 saniyen var.`;
  spawnBox(); // Yeni kutuyu oluştur
  startTimer(); // Yeni zamanlayıcı başlat
});
