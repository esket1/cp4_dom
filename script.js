const input = document.getElementById("input")
const result = document.getElementById("result")

const showValue = function () {
    let size = input.value;
    result.textContent = `Выбранное число: ${size}`
}
const hideValue = function () {
    result.textContent = `Выберите число!`
}

input.addEventListener("input", showValue)
input.addEventListener("mouseover", showValue)
input.addEventListener("mouseout", hideValue)