// //*arreglo tren
// let tren = ["Ana", "Sofia", "Ricardo", "Rosalva", "Edison"]; //se crea una lista

// //? saber la cantidad de elementos
// console.log(tren.length) //para saber la cantidad de elementos, no se usan parentesis despues de length
// console.log(tren) //muestra la lista 
// console.log(tren[2]) //un elemento en x posicion
// console.log(tren[tren.length - 1]) //un elemento en la posicion final

// tren.push("Boris") //agrega un nuevo elemento a la lista
// console.log(tren)

// tren.unshift("pedro") //agrega el elemento ademas de ponerlo de primeras en la lista
// console.log(tren)

// tren.pop() // elimina el elemento de la ultima posicion
// console.log(tren)

// console.log(tren.includes("Sofia")) //si un elemento esta dentro de la lista
// console.log(tren.indexOf("Ricardo")) //la posicion donde esta el elemento

// console.log(tren.splice(3, -1)) // muestra desde donde inicia y donde terminan los elemtos
// for(let i = tren.length-1; i >= 3; i--){  // Recorre "tren" de atrás hacia adelante, hasta el índice  
//     console.log(i)
//     console.log(tren[i])
// }

// for (let i = 0; i < tren.length; i++){
//         console.log(`${i+1}. ${tren[i]}`) // muestra todos los elementos enumerados
// }
// for( const pasajero of tren){
//     console.log(pasajero) // muestra todos los elementos sun enumeracion
// }
// console.table(tren) // muestra los resultados en una tabla


// let nombre = "estefania"
// for(let n of nombre){
//         console.log(n)
// }

// let nombreArreglo = []
// for(let n of nombre){
//     console.log(n)
//     nombreArreglo.push(n)// inicia en la primera y siguiente(alderecho)
//     //nombreArreglo.unshift(n)  // inicia en la ultima y siguente (alrevez)
// }
// console.log(nombreArreglo.join("-")) // hace que el nombre me quede horizontal y no letra por letra


const compras =[]
let compra
do{
    compra = prompt("ingrese un producto para agregra\nO deje vacio para terminar")
    compras.push(compra)
}while (compra != "")
    compras.pop()

console.table(compras)

for (let i = 0; i < compras.length; i++){
        console.log(`${i+1}. ${compras[i]}`) 
}


let quitarproducto = prompt("digite el producto a eliminar")
let posicion = -1
posicion = compras.indexOf(quitarproducto)
console.log(posicion)
compras.splice(posicion, 1)
console.table(compras)

if (posicion == -1)
    console.log("no se elimino ningun prodecuto")
else 
    console.log(`producto ${quitarproducto} se elimino corectamente `)
