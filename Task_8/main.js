const contentBox = document.querySelector(".content-box");
const redLight = document.querySelector(".red-color-circle");
const yellowLight = document.querySelector(".yellow-color-circle");
const greenLight = document.querySelector(".green-color-circle");

const activateLight = (element, color, duration) => {
  return new Promise((resolve) => {
    element.style.backgroundColor = color;
    setTimeout(() => {
      element.style.backgroundColor = "transparent";
      resolve();
    }, duration);
  });
};

const trafficLightCycle = async () => {
  while (true) {
    await activateLight(redLight, "red", 3000);
    await activateLight(yellowLight, "yellow", 1000);
    await activateLight(greenLight, "green", 3000);
  }
};

trafficLightCycle();