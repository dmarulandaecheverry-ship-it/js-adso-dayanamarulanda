// se crean las siguientes variables

const nombre = "dayana"; // variable fija
const programa = "ADSO"; // variable fija
const ficha = "3534466"; // variable fija 
let ciudad = "medellin"; // variable que puede cambiar
let frase = "si funciona, no lo toques"; // variable que puede cambiar

// muestra mis datos en la consola

console.log("=============================================================="); // muestra la informacion dentro de una tarjeta
console.log(`hola soy ${nombre}`);                                             // muestra mi nombre usando la variable "nombre"
console.log(`actualmente estoy estudiando ${programa} en la ficha ${ficha}`);  // Muestra el programa y la ficha
console.log(`vivo en ${ciudad}`);                                              //Muestra la ciudad donde vivo
console.log(frase);                                                            //Muestra mi frase personal
console.log("==============================================================");

// realizamos un cambio de la anterior variable "ciudad"

ciudad = "barranquilla"; // asigno una nueva ciudad a la anterior variables
console.log(`ahora vivo en ${ciudad}`);