let el = document.querySelector(".box");
el.addEventListener("click", clickedBox, false);
let counterCount = 0;
let right = 1;
let down = 2;
let left = 3;
let top = 4;
function clickedBox(evt) {
  ++counterCount;
  
  el.style.top = '0px'

  if (counterCount == 1) {
    el.style.left = "300px";
    el.style.transition = `left 2s`;
  }
  else if (counterCount == 2) {
    el.style.top = "300px";
    el.style.transition = `top 2s`;
  }
  else if (counterCount == 3) {
    el.style.top = "300px";
    el.style.left = "0px";
    el.style.transition = `left 2s`;
  }
    else if (counterCount == 4) {
    el.style.top = "0px";
    el.style.transition = `top 2s`;
  }
  else {
    counterCount = 0;
  }
}