// Clasificador de notas SENA

// Pedir los datos
let nombre = prompt("Escribe el nombre del aprendiz");
let nota = parseFloat(prompt("Escribe la nota (0.0 a 5.0)")); //usamos parsefloat para convertir un numero a decimal

// Revisar si la nota es un número
if (isNaN(nota)) {
alert("La nota debe ser un número");
}
// Revisar si está fuera del rango
else if (nota < 0 || nota > 5) {
alert("La nota debe estar entre 0.0 y 5.0");
}
// Si es válida, clasificar
else {
let resultado = "";

if (nota >= 4.6) {
    resultado = " Excelente";
} else if (nota >= 4.0) {
    resultado = " Sobresaliente";
} else if (nota >= 3.0) {
    resultado = " Aprobado";
} else {
    resultado = " No aprobado";
}

  // Mostrar en consola
console.log("Nombre: " + nombre);
console.log("Nota: " + nota.toFixed(1));
console.log("Resultado: " + resultado);

  // Mostrar en alert
alert(resultado);
}