//*Generador de correos institucionales

// creamos un arreglo donde guardarempos los correos
let registros = []

do {
    usuario = prompt("Ingresa tu nombre completo \n y para finalizar agrega 0")// preguntamos al usuario su nombre completo

    if (usuario !== "" && usuario !== null) {  // verifica que el usuario no deje el campo vacio 
        usuario = usuario.toLowerCase()        // convierte en minusculas
        usuario = usuario.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n") // quita las tildes y cambia la ñ por una n

        partes = usuario.split(" ")  //separa las palabras por cada espacio

        const correo = "@adso.ejemplo.co" 
        let union = usuario[0] + partes[partes.length - 2] + correo//concatenamos solo la inicial del nombre + el primer apellido + el correo

        registros.push(union) //agregamos a la lista vacia
    }

} while (usuario !== "" && usuario !== null) // se repite mientras el usuario no deje el espacio vacio
for (let i = 0; i < registros.length; i++){
    console.log(`${i+1}. ${registros[i]}`)}  // organiza los corros por enumeracion
console.table(registros)//crea una tabla con todos sus valores
