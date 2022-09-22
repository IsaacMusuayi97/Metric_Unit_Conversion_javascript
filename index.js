let convertBtn = document.getElementById("convert--btn")
let inputbtn = document.getElementById("input--id")
let length = document.getElementById("length--id")
let volume = document.getElementById("volume--id")
let mass = document.getElementById("mass--id")

convertBtn.addEventListener("click", function(event) {
event.preventDefault()
let inputValue = inputbtn.value

let sentenceLength = `${inputValue} meters = ${Number(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${Number(inputValue * 3.280).toFixed(3)} meters `
let sentenceVolume = `${inputValue} liters = ${Number(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${Number(inputValue * 3.280).toFixed(3)} liters `
let sentenceMass = `${inputValue} kilos = ${Number(inputValue * 3.281).toFixed(3)} pounds | ${inputValue} pounds = ${Number(inputValue * 3.280).toFixed(3)} kilos`

displayOnLength(sentenceLength)
displayOnVolume(sentenceVolume)
displayOnMass(sentenceMass)
})

function displayOnLength(items) {
  length.textContent = items
  inputbtn.value = ""
}

function displayOnVolume(res) {
    volume.textContent = res
    inputbtn.value = ""
} 

function displayOnMass(ress) {
    mass.textContent = ress
    inputbtn.value = ""
} 