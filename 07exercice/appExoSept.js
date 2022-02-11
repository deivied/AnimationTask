let red = document.querySelector('div#loader .red');
let blue = document.querySelector('div#loader .blue');
let green = document.querySelector('div#loader .green');



function randomColor() {
  return '#' + Math.random().toString(16).substr(-6);
}
// red.style.borderTop = `solid 2px gold`
let count = 1;


for(count;count<5;count++){
  setTimeout(function () {
    red.style.animation = `rotating 3s 4 linear`;
    green.style.animation = `rotating 3s 4 ease-in`
    blue.style.animation = `rotating 3s 4 ease `
    red.style.background = randomColor();
    green.style.background = randomColor();
    blue.style.background = randomColor();
    red.style.transition = `background 3s`
    green.style.transition = `background 3s`
    blue.style.transition = `background 3s`
  
  }, 3000*count);
}

// Toggle button code. Don't edit.
let loader = document.getElementById("loader");
let button = document.getElementById("button");
button.addEventListener("click", function () {
  if (loader.className === "loading") {
    loader.className = "";
  } else {
    loader.className = "loading";
  }
})