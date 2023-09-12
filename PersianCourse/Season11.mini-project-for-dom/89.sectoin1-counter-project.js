// const minusSelection = document.getElementsByClassName("minus");

const incBtn = document.querySelector(".plus");
const counterValue = document.querySelector(".counter__value");
let count = Number(counterValue.textContent);

function increament() {
    count++;
    counterValue.textContent = count;
}

incBtn.addEventListener("click", increament);
