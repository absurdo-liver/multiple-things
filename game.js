const clickBtn = document.getElementById("clickBtn");
const clicksDisplay = document.getElementById("clicksDisplay");
var clicks = 0;

clickBtn.addEventListener("click", gameClick);

function gameClick(){
  clickBtn.classList.remove("normal");
  clickBtn.classList.add("abnormal");
  setTimeout(function(){
    clickBtn.classList.remove("abnormal");
    clickBtn.classList.add("normal");
  }, 100);
    
  clicks += 1;
  clicksDisplay.textContent = `${clicks}`;
}
