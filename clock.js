const displayTime = document.getElementById("clockTimeDisplay");
const watchDisplay = document.getElementById("stopwatchDisplay");


function updateTime() {
  const now = new Date();
  let clockHours = now.getHours();
  let clockMinutes = now.getMinutes();
  let clockSeconds = now.getSeconds();

  hours = String(clockHours).padStart(2, '0');
  minutes = String(clockMinutes).padStart(2, '0');
  seconds = String(clockSeconds).padStart(2, '0');

  const timeString = `${clockHours}:${clockMinutes}:${clockSeconds}`;
  displayTime.textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();


let timerInterval;
let startTime;
let elapsedTime = 0;
let running = false;

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    running = true;
  } else {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  running = false;
  updateDisplay();
}

function updateDisplay() {
  const currentTime = running ? Date.now() - startTime : elapsedTime;

  const milliseconds = Math.floor(currentTime % 1000);
  const seconds = Math.floor(currentTime / 1000) % 60;
  const minutes = Math.floor(currentTime / 60000) % 60;
  const hours = Math.floor(currentTime / 3600000);


  const formattedTime = `${pad(hours)}h:${pad(minutes)}m:${pad(seconds)}s:${pad(milliseconds, 3)}ms`;
  stopwatchDisplay.textContent = formattedTime;
}

function pad(number, digits = 2) {
  return String(number).padStart(digits, '0');
}
