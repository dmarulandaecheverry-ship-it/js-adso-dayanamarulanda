//*contarPalabras(frase)


let frase = prompt("Ingresa tu frase"); //pedimos al usuario una frase

frase = frase.trim(); // usamos  trim()  para evitar que el conteo sume los espacios

let pal = 0; //variable que va sumando uno a uno

if (frase !== "") {   
    pal = frase.split(/\s+/).length; // separa las palabras por cada espacio
}

console.log(`${frase} = ${pal} palabras`); // conactena los resultados con la frase



//*formatoTitulo(frase

let frase1 = prompt("Ingresa una frase"); //pide una frase al usuario

let palabras = frase1.toLowerCase().split(" "); //convierte la frase en minuscula
let resultado = [];

for (let palabra of palabras) {
    resultado.push(palabra.charAt(0).toUpperCase() + palabra.slice(1)); // convierte solo la primera letra de la palabra en mayuscula
}

console.log(` ${frase1} = ${resultado.join(" ")}`); //une todos los elementos en un solo texto
