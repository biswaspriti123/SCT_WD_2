let startTime = 0;
let interval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  if (!running) {
    running = true;
    startTime = Date.now() - (startTime || 0);
    interval = setInterval(updateDisplay, 10);
  }
});

stopBtn.addEventListener("click", () => {
  if (running) {
    running = false;
    clearInterval(interval);
  }
});

resetBtn.addEventListener("click", () => {
  running = false;
  clearInterval(interval);
  startTime = 0;
  display.textContent = "00:00:00.00";
});

function updateDisplay() {
  const elapsed = Date.now() - startTime;

  const ms = Math.floor((elapsed % 1000) / 10);
  const seconds = Math.floor((elapsed / 1000) % 60);
  const minutes = Math.floor((elapsed / 60000) % 60);
  const hours = Math.floor(elapsed / 3600000);

  display.textContent = 
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(ms)}`;
}

function pad(n) {
  return n.toString().padStart(2, "0");
}
