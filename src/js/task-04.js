const div = document.querySelector('#counter');
const span = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
let counterValue = 0;
btnDecrement.addEventListener('click', offClick)

function offClick() {
    counterValue -= 1;
    span.textContent = `${counterValue}`;
}

btnIncrement.addEventListener('click', onClick)

function onClick() {
    counterValue += 1;
    span.textContent = `${counterValue}`;
}