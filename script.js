document.addEventListener("DOMContentLoaded", function() {

const btn = document.getElementById("btn-inicio")
const carta = document.getElementById("container-carta")

btn.addEventListener("click", function() {

btn.style.display = "none"

const totalFotos = 17
const totalPosicoes = 34

for (let i = 0; i < totalPosicoes; i++) {

setTimeout(() => {

const img = document.createElement("img")
img.className = "mini-foto"

const num = (i % totalFotos) + 1
img.src = `fotos/foto${num}.jpg`

img.onerror = function() { this.remove() }

img.style.left = Math.random() * (window.innerWidth - 70) + "px"
img.style.top = "-120px"
img.style.opacity = "0"

document.body.appendChild(img)

setTimeout(() => {

const angulo = (i / totalPosicoes) * Math.PI * 2

const x = 16 * Math.pow(Math.sin(angulo), 3)
const y = -(13 * Math.cos(angulo) - 5 * Math.cos(2 * angulo) - 2 * Math.cos(3 * angulo) - Math.cos(4 * angulo))

const centroX = window.innerWidth / 2
const centroY = window.innerHeight / 2 - 80

const escala = window.innerWidth < 600 ? 10 : 18

img.style.left = (centroX + x * escala - 30) + "px"
img.style.top = (centroY + y * escala - 30) + "px"
img.style.opacity = "1"
img.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`

}, 100)

}, i * 150)

}

/* pulsar coração */

setTimeout(() => {

const fotos = document.querySelectorAll(".mini-foto")

fotos.forEach(f => {
f.style.transition = "transform 1.5s ease-in-out"
f.style.transform += " scale(1.15)"
})

}, 7000)

/* mostrar carta */

setTimeout(() => {

carta.classList.add("visivel")

document.body.style.overflowY = "auto"

window.scrollTo({
top: carta.offsetTop,
behavior: "smooth"
})

}, 8000)

})

})
