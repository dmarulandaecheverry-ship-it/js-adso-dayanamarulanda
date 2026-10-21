// //Tu primera licuadora

// // Definir la receta
// function saludar(nombre) {
// console.log(`Hola, ${nombre} 👋`);
// alert(`Hola, ${nombre} 👋`);
// }

// // Cocinar: llamar la función
// saludar("Ana");
// saludar("Luis");


// //Entregar el jugo: return
// function areaRectangulo(base, altura) {
//     return base * altura;
// }

// let area = areaRectangulo(5, 3);
// console.log(`El área es ${area}`);
// console.log(areaRectangulo(2, 2) + areaRectangulo(3, 3));



// //Vitrina vs. mano

// function dobleVitrina(n) {
//   console.log(n * 2);
// }
// function dobleMano(n) {
//   return n * 2;
// }

// let a = dobleVitrina(4);
// let b = dobleMano(4);
// console.log(a, b);


// Funciones que responden sí o no

// function esPar(numero) {
//     return numero % 2 === 0;
// }

// let n = Number(prompt("Escribe un número:"));
// if (esPar(n)) {
//     console.log(`${n} es par`);
// } else {
//     console.log(`${n} es impar`);
// }


/* Funciones flecha y valores por defecto */

// // Si no dicen la tasa, usa 19 %
// function calcularIVA(precio, tasa = 0.19) {
//     return precio * tasa;
// }
// console.log(calcularIVA(10000));
// console.log(calcularIVA(10000, 0.05));

// // La misma idea, más corta
// const doble = (n) => n * 2;
// const saludo = (nombre) => {
//     return `Hola, ${nombre}`;
// };
// console.log(doble(21), saludo("Sofía"));


//Mejora tu clasificador

function clasificarNota(nota){
    if(nota < 3)
        return `nota: ${nota } insuficiente, no aprovado`
    else if (nota < 4.1)
        return `nota: ${nota } aceptable, aprovado`
    else if (nota < 4.6)
        return `nota: ${nota } sobresaliente, aprovado`
    else
        return `nota: ${nota } exelente, aprovado`
}

console.log(clasificarNota(4.8));
console.log(clasificarNota(3.2));
console.log(clasificarNota(1.5));

