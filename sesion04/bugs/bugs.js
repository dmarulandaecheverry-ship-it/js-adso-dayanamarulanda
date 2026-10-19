//Pausa como en el VAR
let suma = 0;
const cantidad = 4;

for (let i = 1; i <= cantidad; i++) {
//suma = 0;
let nota = Number(prompt(`Nota ${i}:`));
suma = suma + nota;
}

console.log(`Promedio: ${suma / cantidad}`);