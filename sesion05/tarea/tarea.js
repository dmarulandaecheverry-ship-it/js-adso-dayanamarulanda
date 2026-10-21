//*esBisiesto(anio)

function añoBisiesto(){
let anio = parseInt(prompt("Escribe un año"));
if (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0)
    return `${anio} es un año bisiesto`
else 
    return `${anio} no es un año bisiesto`
}

console.log(añoBisiesto())


//*mayorDeTres(a, b, c)


function ordenarTres(a, b, c) {
    if (a >= b && a >= c) 
    return `el mumero mayor es ${a}`
    if (b >= a && b >= c) 
    return `el numero mayor es ${b}`
}
console.log(ordenarTres(6, 10, 3))  



//*precioFinal(precio, descuento = 0)

const precioFinal = (precio, descuento = 0) => {
    return ` el precio final es ${precio * 1 - descuento / 100}`
}
console.log(precioFinal(19.99, 15)) 