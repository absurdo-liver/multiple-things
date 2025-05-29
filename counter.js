const increase = document.getElementById("counterIncrease");
const increase10 = document.getElementById("counterIncrease10");
const increase100 = document.getElementById("counterIncrease100");
const decrease = document.getElementById("counterDecrease");
const decrease10 = document.getElementById("counterDecrease10");
const decrease100 = document.getElementById("counterDecrease100");
const resetBtn = document.getElementById("counterReset");
const display = document.getElementById("counterDisplay");
var counterNumber = 0;

increase.addEventListener("click", () =>{
  counterNumber += 1;
  display.textContent = counterNumber;
});

increase10.addEventListener("click", () =>{
  counterNumber += 10;
  display.textContent = counterNumber;
});

increase100.addEventListener("click", () =>{
  counterNumber += 100;
  display.textContent = counterNumber;
});

decrease.addEventListener("click", () =>{
  counterNumber -= 1;
  display.textContent = counterNumber;
});

decrease10.addEventListener("click", () =>{
  counterNumber -= 10;
  display.textContent = counterNumber;
});

decrease100.addEventListener("click", () =>{
  counterNumber -= 100;
  display.textContent = counterNumber;
});

resetBtn.addEventListener("click", () =>{
  counterNumber = 0;
  display.textContent = counterNumber;
});
