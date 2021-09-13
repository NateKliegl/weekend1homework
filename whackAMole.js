let divs = document.querySelectorAll(".allBoxes");
const input = document.querySelectorAll("input");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", () => {
    lightCycle();
    input[i].addEventListener("click", () => {});
    timerCountdown();
  });

  function lightCycle() {
    let activeDiv = divs[Math.floor(Math.random() * divs.length)];

    activeDiv.style.backgroundColor = "red";

    setTimeout(() => {
      activeDiv.style.backgroundColor = "white";
      setTimeout(lightCycle, 500);
    }, 2000);
  }
}

let timer = document.getElementById("timer");
function timerCountdown() {
  let timerCountdown = 30;
  let intervalTimer = setInterval(() => {
    timer.innerText = timerCountdown;
    timerCountdown--;
  }, 1000);
  setTimeout(() => {
    document.getElementById("timer");
    clearInterval(intervalTimer);
  }, timerCountdown * 1000);
}
//const allBoxes = document.querySelectorAll(".allBoxes");
//for (let i = 0; i < allBoxes.length; i++)
//allBoxes[i].addEventListener("click", toggleElement);
