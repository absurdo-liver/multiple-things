const select = document.getElementById("selectList");
const divToDo = document.getElementById("toDoDiv");
const divCalc = document.getElementById("calculator");
const divColour = document.getElementById("colourRandomizer");


select.addEventListener("change", () => {
  if (select.value === "none") {
    divToDo.classList.add("hidden");
    divCalc.classList.add("hidden");
    divColour.classList.add("hidden");
    document.querySelector(".colourRandomizerTextClass").style.color = "rgb(0,0,0)";
    document.querySelector("body").style.backgroundColor = "rgb(255,255,255)";
    document.querySelector(".colourRandomizerTextClass").style.textShadow = "0em 0em rgb(0,0,0)";
  } else if (select.value === "toDoList") {
    divToDo.classList.remove("hidden");
    divCalc.classList.add("hidden");
    divColour.classList.add("hidden");
    document.querySelector(".colourRandomizerTextClass").style.color = "rgb(0,0,0)";
    document.querySelector("body").style.backgroundColor = "rgb(255,255,255)";
    document.querySelector(".colourRandomizerTextClass").style.textShadow = "0em 0em rgb(0,0,0)";
  } else if (select.value === "calculator") {
    divCalc.classList.remove("hidden");
    divToDo.classList.add("hidden");
    divColour.classList.add("hidden");
    document.querySelector(".colourRandomizerTextClass").style.color = "rgb(0,0,0)";
    document.querySelector("body").style.backgroundColor = "rgb(255,255,255)";
    document.querySelector(".colourRandomizerTextClass").style.textShadow = "0em 0em rgb(0,0,0)";
  } else if (select.value === "colourRandomizer"){
    divColour.classList.remove("hidden");
    divToDo.classList.add("hidden");
    divCalc.classList.add("hidden");
  }
});
