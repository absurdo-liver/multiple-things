const select = document.getElementById("selectList");
const divToDo = document.getElementById("toDoDiv");
const divCalc = document.getElementById("calculator");
const divColour = document.getElementById("colourRandomizer");
const divClock = document.getElementById("clock");
const divCounter = document.getElementById("counter");


select.addEventListener("change", () => {

  if (select.value === "none") {
    divToDo.classList.add("hidden");
    divCalc.classList.add("hidden");
    divColour.classList.add("hidden");
    divClock.classList.add("hidden");
    divCounter.classList.add("hidden");
    
  } else if (select.value === "toDoList") {
    divToDo.classList.remove("hidden");
    divCalc.classList.add("hidden");
    divColour.classList.add("hidden");
    divClock.classList.add("hidden");
    divCounter.classList.add("hidden");
    
  } else if (select.value === "calculator") {
    divCalc.classList.remove("hidden");
    divToDo.classList.add("hidden");
    divColour.classList.add("hidden");
    divClock.classList.add("hidden");
    divCounter.classList.add("hidden");
    
  } else if (select.value === "colourRandomizer"){
    divColour.classList.remove("hidden");
    divToDo.classList.add("hidden");
    divCalc.classList.add("hidden");
    divClock.classList.add("hidden");
    divCounter.classList.add("hidden");
  } else if(select.value === 'clock'){
    divClock.classList.remove("hidden");
    divToDo.classList.add("hidden");
    divCalc.classList.add("hidden");
    divColour.classList.add("hidden");
    divCounter.classList.add("hidden");
    
  } else if (select.value === 'counter'){
    divCounter.classList.remove("hidden");
    divClock.classList.add("hidden");
    divToDo.classList.add("hidden");
    divCalc.classList.add("hidden");
    divColour.classList.add("hidden");
    
  }
	
	const colourTextElement = document.querySelector("#colourRandomizer");
if (colourTextElement) {
  colourTextElement.style.color = "rgb(0,0,0)";
  document.body.style.backgroundColor = "rgb(255,255,255)";
  colourTextElement.style.textShadow = "0em 0em rgb(0,0,0)";
}

});
