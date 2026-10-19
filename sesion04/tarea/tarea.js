//*Tabla a pedido
let numero = Number(prompt("ingresa el numero que quieres multiplicar"))
for (let i = 0; i <= 10; i++){    //la tabla iniciara desde cero y  terminara cuando llegue a 10
    console.log(`${numero} * ${i}  = ${numero * i}`);
    }





//*Estadísticas del grupo

let cantidad; //creamos una variable vacia donde guardaremos las notas ingresadas

do {
    cantidad = Number(prompt("¿Cuántas notas vas a ingresar?"));
} while (!Number.isInteger(cantidad) || cantidad < 1);   //usamos isunteger para definir si el numero es entero,si no lo es vuelve a preguntar
//

let suma = 0;  //acomula
let mayor = 0;// guarda el valor mayor ingresado
let menor = 5; // guarda el valor mas bajo


for (let i = 1; i <= cantidad; i++) {  // Se repite una vez por cada nota
    let nota;
    do {
        nota = Number(prompt(`Nota ${i} (0 a 5):`));
    } while (isNaN(nota) || nota < 0 || nota > 5);   // repite si no es número o está fuera del rango

    suma += nota;                   //sumar la nota al total
    if (nota > mayor) mayor = nota;//actualizar la mayor si esta la supera
    if (nota < menor) menor = nota;//actualizar la menor si esta es más baja
}
// Mostrar resultados: promedio con 2 decimales, mayor y menor
alert(`Promedio: ${(suma / cantidad).toFixed(2)}\nMayor: ${mayor}\nMenor: ${menor}`);

