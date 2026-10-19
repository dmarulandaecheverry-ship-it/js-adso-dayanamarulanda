// // Tabla de multiplicar

// let usuario = Number(prompt("digite un numero para crearle su tabla"))
// for (let i = 0; i <= 10; i++) {
//   console.log(`${usuario} * ${i} = ${usuario * i}`);
// }

// let usuario1 = Number(prompt("digite un numero para crearle su tabla"))
// for (let i = 20; i >= 0; i--) {
//   console.log(`${usuario1} * ${i} = ${usuario1 * i}`);
// }

// //La alcancía
// let ahorro1 = Number(prompt("cantidad de dinaro que ahorras semanal"))

// let ahorro = 0
// let semanas = 0

// while (ahorro <= 100000) {
//     ahorro += ahorro1;
//     semanas += 1;
//     console.log(`Llegaste a ${ahorro} en ${semanas} semanas`);
// }

// //Suma y cuenta
// let number1 = Number(prompt("ingrese un numero"))
// let suma = 0
// contpares = 0
// contipares = 0
// for (let i = 1; i<= number1; i++){
//     suma += i
//     if (i % 2 == 0)
//         contpares +=1
//     else 
//         (i % 2 == 1)
//         contipares +=1
// }
// alert(`la suma de los numeros entre 1 y ${number1} es ${suma} y la cantidad de pares`)
// alert(`y la cantidad de pares es: ${contpares} y lols impares ${contipares} `)


// El portero insistente: do...while
// 



//Menú de la tienda (en casa)

let opcion;
let total = 0;

do {
opcion = prompt("1 Cuaderno $4.500 · 2 Lápiz $1.200 · 3 Borrador $800 · 0 Pagar");
switch (opcion) {
    case "1": total += 4500; break;
    case "2": total += 1200; break;
    case "3": total += 800; break;
    case "0": break;
    default: alert("Opción no válida");
}
console.log(`Llevas ${total}`);
} while (opcion !== "0");

alert(`Total a pagar: ${total}`);