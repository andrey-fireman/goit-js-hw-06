const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output')



input.addEventListener("input", (event) => {
    span.textContent = event.currentTarget.value;
    if (!event.currentTarget.value) {
       span.textContent = "Anonymous";
}
    else {
    span.textContent = event.currentTarget.value;
    }

});

// input.addEventListener('input', offClick)

// function offClick(evt) {
//     span.textContent = evt.currentTarget.value;
//     if (document.querySelector('#name-input').value = ''){
//     input = ('Anonymous')
//     }
// }