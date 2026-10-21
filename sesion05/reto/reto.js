//* Caja de herramientas de conversores



function Pesosadolares(){
    let pesos = Number(prompt("digite cuantos pesos tiene"))
    let dolares = Number(prompt("ingrese a cuanto esta el dolar"))
    return `la convercion de ${pesos}pesos  es ${pesos / dolares} dolares`
}

function temperatura(){
    let c = Number(prompt("digite cuantos grados hay"))
    return `los grados ${c} cemtigrados son en ${c*9/5+32} farenheit`
} 

function kmAMll(){
    let km = Number(prompt("digite la cantidad de kilometros"))
    return `${km} kilometros son ${km * 0.621371} millas`
}

function seg_horas(){
    let segundos = Number(prompt("digite la cantidad de segundos"))
    return `${segundos} segundos son ${segundos / 3600} horas`
}


let opc = prompt("menue:\n1. pesos a dolares\n2. °c a °f\n3. km a millas\n4. segundos a horas\n0. salir")

while (opc != 0){   
    switch (opc){
        case "1":
            console.log(Pesosadolares())
            break
        case "2":
            console.log(temperatura())
            break
        case "3":
            console.log(kmAMll())
            break
        case "4":
            console.log(seg_horas())
            break
        default:
            alert("debes elegir una opcion entre 0 y 4")
            console.log("debes elegir una opcion entre 0 y 4")
    }
    opc = prompt("menue:\n1. pesos a dolares\n2. °c a °f\n3. km a millas\n4. segundos a horas\n0. salir")
}
