
const calculatorDisplay = document.getElementById("calcDisplay");
const calc0 = document.getElementById("calc0");
const calc1 = document.getElementById("calc1");
const calc2 = document.getElementById("calc2");
const calc3 = document.getElementById("calc3");
const calc4 = document.getElementById("calc4");
const calc5 = document.getElementById("calc5");
const calc6 = document.getElementById("calc6");
const calc7 = document.getElementById("calc7");
const calc8 = document.getElementById("calc8");
const calc9 = document.getElementById("calc9");
const add = document.getElementById("addbtn");
const sub = document.getElementById("subbtn");
const mult = document.getElementById("multbtn");
const div = document.getElementById("divbtn");
const equ = document.getElementById("calcEqual");
const ansBtn = document.getElementById("calcAns");
const calcClear = document.getElementById("calcClear");
var calcState = 'none';
var calcMath1 = '';
var calcMath2 = '';
var calcMathOp = '';
var ans = 'no answer yet';



calc0.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 0;
  calcState = 'one';
  calcMath1 = 0;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 0;
    calcState = 'ready';
    calcMath2 = 0;
  } else {
    return
  }
});

calc1.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 1;
  calcState = 'one';
  calcMath1 = 1;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 1;
    calcState = 'ready';
    calcMath2 = 1;
  } else {
    return
  }
});

calc2.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 2;
  calcState = 'one';
  calcMath1 = 2;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 2;
    calcState = 'ready';
    calcMath2 = 2;
  } else {
    return
  }
});

calc3.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 3;
  calcState = 'one';
  calcMath1 = 3;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 3;
    calcState = 'ready';
    calcMath2 = 3;
  } else {
    return
  }
});

calc4.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 4;
  calcState = 'one';
  calcMath1 = 4;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 4;
    calcState = 'ready';
    calcMath2 = 4;
  } else {
    return
  }
});

calc5.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 5;
  calcState = 'one';
  calcMath1 = 5;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 5;
    calcState = 'ready';
    calcMath2 = 5;
  } else {
    return
  }
});

calc6.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 6;
  calcState = 'one';
  calcMath1 = 6;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 6;
    calcState = 'ready';
    calcMath2 = 6;
  } else {
    return
  }
});

calc7.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 7;
  calcState = 'one';
  calcMath1 = 7;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 7;
    calcState = 'ready';
    calcMath2 = 7;
  } else {
    return
  }
});

calc8.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 8;
  calcState = 'one';
  calcMath1 = 8;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 8;
    calcState = 'ready';
    calcMath2 = 8;
  } else {
    return
  }
});

calc9.addEventListener("click", () => {
  if (calcState === 'none'){
  calculatorDisplay.textContent += 9;
  calcState = 'one';
  calcMath1 = 9;
  } else if(calcState === 'two') {
    calculatorDisplay.textContent += 9;
    calcState = 'ready';
    calcMath2 = 9;
  } else {
    return
  }
});

ansBtn.addEventListener("click", () => {
  if (ans === 'no answer yet' ){
    return;
  }else{
    if (calcState === 'none'){
      calculatorDisplay.textContent += ans;
      calcState = 'one';
      calcMath1 = ans;
    } else if(calcState === 'two') {
      calculatorDisplay.textContent += ans;
      calcState = 'ready';
      calcMath2 = ans;
    } else {
      return
    }
  }
});

add.addEventListener("click", () => {
  if(calcState === 'none' || calcState === 'two'){
    return
  } else if(calcState === 'one'){
  calculatorDisplay.textContent += '+';
  calcState = 'two';
  calcMathOp = 'add';
  }
});

sub.addEventListener("click", () => {
  if(calcState === 'none' || calcState === 'two'){
    return
  } else if(calcState === 'one') {
  calculatorDisplay.textContent += '-';
  calcState = 'two';
  calcMathOp = 'sub';
  }
});

mult.addEventListener("click", () => {
  if(calcState === 'none' || calcState === 'two'){
    return
  } else if(calcState === 'one'){
  calculatorDisplay.textContent += 'x';
  calcState = 'two';
  calcMathOp = 'mult';
  }
});

div.addEventListener("click", () => {
  if(calcState === 'none' || calcState === 'two'){
    return
  } else if(calcState === 'one'){
  calculatorDisplay.textContent += '÷';
  calcState = 'two';
  calcMathOp = 'div';
  }
});

equ.addEventListener("click", () => {
  if (calcState === "ready") {
    if (calcMathOp === "add") {
      let result = calcMath1 + calcMath2;
      calculatorDisplay.textContent += "=";
      calculatorDisplay.textContent += result;
      ans = result;
      calcState = "done";
    } else if (calcMathOp === "sub") {
      let result = calcMath1 - calcMath2;
      calculatorDisplay.textContent += "=";
      calculatorDisplay.textContent += result;
      ans = result;
      calcState = "done";
    } else if (calcMathOp === "mult") {
      let result = calcMath1 * calcMath2;
      calculatorDisplay.textContent += "=";
      calculatorDisplay.textContent += result;
      ans = result;
      calcState = "done";
    } else if (calcMathOp === "div") {
      let result = calcMath1 / calcMath2;
      calculatorDisplay.textContent += "=";
      calculatorDisplay.textContent += result;
      ans = result;
      calcState = "done";
    }
  } else {
    return;
  }
});

calcClear.addEventListener("click", () => {
  calculatorDisplay.textContent = '';
  calcMathOp = '';
  calcMath1 = '';
  calcMath2 = '';
  calcState = 'none';
});
