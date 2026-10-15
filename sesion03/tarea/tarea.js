// 1. Año bisiesto
let anio = parseInt(prompt("Escribe un año"));
if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
console.log(anio + " es bisiesto");
} else {
console.log(anio + " no es bisiesto");
}

// 2. Calculadora
let a = parseFloat(prompt("Primer número"));
let b = parseFloat(prompt("Segundo número"));
let op = prompt("Operación (+, -, *, /)");

switch (op) {
case "+":
    console.log(a + b);
    break;
case "-":
    console.log(a - b);
    break;
case "*":
    console.log(a * b);
    break;
case "/":
    if (b == 0) {
    console.log("No se puede dividir entre cero");
    } else {
    console.log(a / b);
    }
    break;
default:
    console.log("Operación no válida");
}

// 3. IMC
let peso = parseFloat(prompt("Peso en kg"));
let estatura = parseFloat(prompt("Estatura en metros"));
let imc = peso / estatura ** 2;

if (imc < 18.5) {
    console.log("IMC " + imc.toFixed(1) + ": bajo peso");
} else if (imc < 25) {
    console.log("IMC " + imc.toFixed(1) + ": normal");
} else if (imc < 30) {
    console.log("IMC " + imc.toFixed(1) + ": sobrepeso");
} else {
    console.log("IMC " + imc.toFixed(1) + ": obesidad");
}