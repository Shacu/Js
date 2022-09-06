alert("bienvenido al servicio de atencion al cliente de Telecentro: ");

let nombreUsuario = prompt("ingrese su nombre: ");


console.log("Buenas tardes " + nombreUsuario + " ¿en que lo podemos ayudar?")
console.log("Opcion 1: Administracion de las facturas de la cuenta")
console.log("Opcion 2: Soporte tecnico")
console.log("Opcion 3: Otras consultas")
console.log("Opcion 4: Contratar servicios")

let opcionElegida = parseInt(prompt("ingrese la opcion que necesite 1,2,3,4"));

while(opcionElegida != 1 && opcionElegida != 2 && opcionElegida != 3 && opcionElegida != 4){
    let opcionElegida = parseInt(prompt("ingrese la opcion que necesite 1,2,3,4"));
}
switch(opcionElegida){
    case 1:
        console.log("Paga las facturas y listo :)")
        break
    case 2:
        console.log("Disculpa, podemos solucionar tu problema ya pero tenemos ganas de que esperes entre 8 y 15 horas para que se arregle")
        break
    case 3:
        console.log("No tenemos otras respuestas")
        break
    case 4:
        console.log("Elija el servicio que desea contratar")
        break
}

if(opcionElegida = 4){
    console.log("Opcion 1: Internet 100M $1500")
    console.log("Opcion 2: Internet 100M + Tv $2000")
    console.log("Opcion 3: Internet 200M + Tv $3000")
    console.log("A todos los servicios se le suma el costo de instalacion de $500")

    const costoDeInstalacion = 500
    const opcionUno = 1500
    const opcionDos = 2000
    const opcionTres = 3000

    let servicioElegido = parseInt(prompt("Ingrese el servicio que desea: "))

    while(servicioElegido != 1 && servicioElegido != 2 && servicioElegido != 3){
        console.log(servicioElegido)
    }

    switch(servicioElegido){
        case 1:
            console.log("el costo total es de: " + (costoDeInstalacion + opcionUno))
            break
        case 2:
            console.log("El costo total es de: " + (costoDeInstalacion + opcionDos))
            break
        case 3:
            console.log("El costo total es de: " + (costoDeInstalacion + opcionTres))
            break
    }
}