//!Segundos a reloj

let segundos = Number(prompt("ingresa los segundos que deseas convertir"))

// idea clave
// 1 hora equivale a 3600 segundos
// 1 minuto equivales a 60 segundos 

// proceso
let hora = Math.floor( segundos / 3600)//calculo de segundos a horas
let sobrante = segundos % 3600         //sobrante de las horas
let minutos = Math.floor(sobrante / 60)//calculo de sobrante a segundos
let sobrante2 = sobrante %  60         //sobrante de los minutos

// consola
console.log(`${hora} hora, ${minutos} minutos, ${sobrante2} segundos:`)



//!Temperatura: 

let celsius = Number(prompt("Ingresa los grados Celsius: ")); //pedimos al usuario 

//proceso
if (isNaN(celsius)) {
    console.log("Error: debes ingresar un número válido.");    // pasamos por un filtro de verifiacion
} else {
let fahrenheit = celsius * 9 / 5 + 32;    //realizamos la operacion
console.log(celsius + " °C equivalen a " + fahrenheit.toFixed(1) + " °F");
}



//!Promedio

let nota1 = Number(prompt("ingresa tu nota #1"))
let nota2 = Number(prompt("ingresa tu nota #2"))
let nota3 = Number(prompt("ingresa tu nota #3"))

//proceso
let promedio = (nota1 + nota2 + nota3)/3

console.log(`el promedio de tus notas es: ${promedio.toFixed(1)}`)