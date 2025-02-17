const btn = document.querySelector(".btn");
const timerScreen = document.querySelector(".timer-screen");

let count = 10;
let stopInterval;

btn.addEventListener("click", () => {
  if (stopInterval) {
    clearInterval(stopInterval);

    stopInterval = undefined;
    btn.textContent = "Continue";
    return;
  }

  stopInterval = setInterval(() => {
    count = count - 1;
    btn.textContent = "STOP";
    timerScreen.innerHTML = `
          ${count}
        `;
    if (count < 4) {
      timerScreen.style.color = "red";
    }
    if (count === 0) {
      timerScreen.textContent = "You are a Loser";
      clearInterval(stopInterval);
    }
  }, 1000);
});
