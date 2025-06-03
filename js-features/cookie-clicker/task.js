let counter = document.getElementById("clicker__counter");
let value = counter.textContent;
let cookie = document.getElementById("cookie");
let speed = document.getElementById("speed");
let speedClick = speed.textContent;

function mouseDown() {
    value++;
    counter.textContent = value;
    cookie.width = 250;

    let date = new Date;
    speedClick = counter.textContent / date.getSeconds();
    speed.textContent = speedClick.toFixed(2);
}

function mouseUp() {
    cookie.width = 200;
}

cookie.addEventListener("mousedown", mouseDown);
cookie.addEventListener("mouseup", mouseUp);