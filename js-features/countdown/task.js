let timer = document.querySelector("#timer");
let count = timer.textContent;

function updateCounter() {
    count --;
    timer.textContent = count;

    if(count == 0) {
        clearInterval(timerID);
        alert("Вы победили в конкурсе!")
    }
}

const timerID = setInterval(updateCounter, 1000);

