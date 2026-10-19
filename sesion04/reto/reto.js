// Adivina el número

let reto = Math.floor(Math.random() * 100) + 1.;

console.log(reto)

let intentos = 7
let acerto = false

while (intentos > 0 && !acerto){
let adivina = Number(prompt(`ingresa un nuevo numero te quedan ${intentos} intentos`))
intentos -= 1
if (adivina === reto){
    alert(`felicidades el numero era ${reto}`)
    acerto = true
}else if (reto < adivina){
    alert(`incorrecto el numero es menor, te quedan ${intentos} intentos`)
} else{
    alert(`incorrecto el numero es mayor, intentalo de nuevo te quedan ${intentos} intentos`)
}      
}
