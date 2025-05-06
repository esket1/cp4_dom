const slider = document.getElementById("sliderTrack")
const thumb = document.getElementById("sliderThumb")
const progressBar = document.getElementById("sliderProgress")
const valueText = document.getElementById("sliderValue")

const minValue = 0
const maxValue = 100
let currentPosition = 50
let thumbDragging = false

function updateSliderPosition(newValue) {
const calculatedPercent = (newValue - minValue) / (maxValue - minValue) * 100
thumb.style.left = `${calculatedPercent}%`
progressBar.style.width = `${calculatedPercent}%`
valueText.textContent = newValue
currentPosition = newValue
}

function calculateNewValue(clientX) {
const sliderRect = slider.getBoundingClientRect()
let clickPosition = (clientX - sliderRect.left) / sliderRect.width
clickPosition = Math.min(Math.max(clickPosition, 0), 1)
return Math.round(minValue + clickPosition * (maxValue - minValue))
}

thumb.addEventListener("mousedown", (event) => {
thumbDragging = true
event.preventDefault()
})

document.addEventListener("mousemove", (event) => {
if (!thumbDragging) return
const newValue = calculateNewValue(event.clientX)
updateSliderPosition(newValue)
})

document.addEventListener("mouseup", () => {
thumbDragging = false
})

updateSliderPosition(currentPosition)