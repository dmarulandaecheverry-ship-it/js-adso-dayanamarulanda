// Caja registradora

// pedimos al usuario que llene la siguiente informacion de los productos
let precio = Number(prompt("cual es el precio unitario de tu producto: "))
let cantidad = Number(prompt("cual es la cantidad de tu producto: "))
let descuento1 = Number(prompt("cual es el descuento de este producto: "))
const iva = 0.19

//calculamos
if (Number.isNaN(precio) || Number.isNaN(cantidad) || Number.isNaN(descuento1)) {
alert("Revisa los datos no estan correctos");
}                                      
else {
let subtotal = precio * cantidad       // calculo el subtotal 
let descuento = subtotal - descuento1   // calculo el descuento
let iva1 = descuento * iva             // calculo el iva al 19%
let total = descuento + iva1 // calculo el total

//consola
console.log(`subtotal: ${subtotal}`)
console.log(`descuento: ${descuento}`)
console.log(`iva (19%): ${iva1}`)
console.log(`total: ${total}`)

}
