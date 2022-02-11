let loader = document.getElementById("loader");
let button = document.getElementById("button");
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');

button.addEventListener("click", function () {
    if (loader.className === "loading") {
        red.style.animation = `rotating infinite ease-in`
        green.style.animation = `rotating infinite ease-in`
        blue.style.animation = `rotating infinite ease-in`


        //   console.log('class vide')
        loader.className = "";

    } else {
        red.style.animation = `rotating 3s infinite linear `
        green.style.animation = `rotating 3s infinite ease-in`
        blue.style.animation = `rotating 3s infinite ease `


        loader.className = "loading";
        // console.log('class loading')

    }
})

//loader.className ="";