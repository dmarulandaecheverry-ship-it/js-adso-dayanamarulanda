// // Laboratorio de tipos

// const nombre = "Ana";
// let edad = 17;
// let estatura = 1.68;
// let esAprendiz = true;
// let apodo;

// console.log(typeof nombre, typeof edad, typeof estatura, typeof esAprendiz, typeof apodo);

// //Predice y comprueba

// console.log(7 / 2);     // 3.5
// console.log(7 % 2);     // 1
// console.log(2 ** 3);    // 8
// console.log(10 + 3 * 2);//16
// console.log((10 + 3) * 2);//26
// console.log(0.1 + 0.2); //0.3


// //La trampa del +

// console.log(typeof("5" + "5"))  //55 
// console.log(typeof("5" + 5))   //55 
// console.log(typeof( 5 + "5"))   //55 
// console.log(typeof( 5 + 5))     //10
// console.log(typeof("5" + 5 + 5))//555
// console.log(typeof( 5 + 5))     //105

// console.log("5" - 3);  //2
// console.log("5" * 3);  //15
// console.log(5 == "5"); //true ==
// console.log(5 === "5");//folse ===


// //El buzón: pedir datos

// let nombre1 = prompt("digite su nombre: ")
// let entrada = Number(prompt("digite su edad: ")) 

// let edad1 = 0Number(
// if (Number.isNaN(entrada)){
//     entrada = prompt("esto no es un numero")
// }else{
//     edad1 = entrada
// }
// let suma = edad1 + entrada
// console.log(`su nombre es ${nombre1} y su edad incrementada es ${suma}`)


// Promedio de 3 notas

let nota1 = Number(prompt("digite su nota #1: "))
let nota2 = Number(prompt("digite su nota #2: "))
let nota3 = Number(prompt("digite su nota #3: "))

let promedio = (nota1 + nota2 + nota3) / 3
console.log(`su promedio en javaScript es: ${promedio.toFixed(1)}`)

//Conversor de pesos a dólares

let pesos = Number(prompt("¿Cuántos pesos tienes?"));
let tasa = Number(prompt("¿Cuál es la tasa del dólar hoy?"));

let dolares = pesos / tasa;

console.log(pesos.toLocaleString("es-CO", { style: "currency", currency: "COP" }));
console.log("Equivale a US$ " + dolares.toFixed(2));