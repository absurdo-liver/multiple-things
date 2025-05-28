const output = document.getElementById("outputElem");
const submit = document.getElementById("submitButton");
const textBox = document.getElementById("textBox");
const clrButton = document.getElementById("clearButton");


submit.addEventListener("click", () => {
  output.textContent += textBox.value + "\n";
});

textBox.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    output.textContent += textBox.value + "\n";
  }
});

clrButton.addEventListener("click", () => {
  output.textContent = "";
  textBox.value = "";
});
