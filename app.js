const count = document.querySelector('.count');
const incrementBtn = document.querySelector('.increment');
const resetBtn = document.querySelector('.reset');
const decrementBtn = document.querySelector('.decrement');
let num = 0;

function increase() {
    num++;
    count.textContent = num;
    hue()
    console.log(num)
}

function decrease() {
    num--;
    count.textContent = num;
    hue()
    console.log(num);
}

function reset() {
    num = 0;
    count.textContent = num;
    console.log(num);
    hue();
}

function hue() {
    if (num > 0) {
        count.style.color = "green";
    } else if (num < 0) {
        count.style.color = "red";
    } else if (num === 0) {
        count.style.color = "black";
    }
}

incrementBtn.addEventListener('click', increase);
decrementBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);