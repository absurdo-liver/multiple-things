const randButton = document.getElementById("randomizerButton");
const resetButton = document.getElementById("colourRandomizerResetButton");
const outputText = document.getElementById("colourRandomizerValueOutput");
const copyColour = document.getElementById("copyColourButton");
var randColour = "rgb(0,0,0)";

randButton.addEventListener("click", () => {
  outputText.textContent = '';
  
  let randomR = Math.floor(Math.random() * 256);
  outputText.textContent += "R:" + randomR + '\n';
  
  let randomG = Math.floor(Math.random() * 256);
  outputText.textContent += "G:" + randomG + '\n';
  
  let randomB = Math.floor(Math.random() * 256);
  outputText.textContent += "B:" + randomB + '\n';
  
  randColour = `rgb(${randomR},${randomG},${randomB})`;
  
  document.querySelector("body").style.backgroundColor = randColour;
  
  let newR = 255 - randomR;
  let newG = 255 - randomG;
  let newB = 255 - randomB;
  document.querySelector(".colourRandomizerTextClass").style.color = `rgb(${newR},${newG},${newB})`;
  
  let luminance = (0.299 * randomR) + (0.587 * randomG) + (0.114 * randomB);
  if(luminance < 128){
    document.querySelector(".colourRandomizerTextClass").style.textShadow = "0em 0.1em rgb(255,255,255)";
  } else {
    document.querySelector(".colourRandomizerTextClass").style.textShadow = "0em 0.1em rgb(0,0,0)";
  }
  
});

resetButton.addEventListener("click", () => {
  outputText.textContent = "";
  document.querySelector(".colourRandomizerTextClass").style.color = "rgb(0,0,0)";
  document.querySelector("body").style.backgroundColor = "rgb(255,255,255)";
  document.querySelector(".colourRandomizerTextClass").style.textShadow = "0em 0em rgb(0,0,0)";
  var randColour = "rgb(0,0,0)";
});

copyColour.addEventListener("click", () => {
  navigator.clipboard.writeText(randColour)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      alert('Failed to copy text: ', err);
    });
});


