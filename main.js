class Paquetes {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const plus = new Paquetes ("plus", 3500);
const oro = new Paquetes ("oro", 4000);
const platinum = new Paquetes ("platinum", 5000);

let paquetesPremium = [plus, oro, platinum];

alert("bienvenido al servicio de atencion al cliente de Telecentro: ");

let nombreUsuario = prompt("ingrese su nombre: ");


console.log("Buenas tardes " + nombreUsuario + " ¿en que lo podemos ayudar?")
console.log("Opcion 1: Administracion de las facturas de la cuenta")
console.log("Opcion 2: Soporte tecnico")
console.log("Opcion 3: Otras consultas")
console.log("Opcion 4: Contratar servicios")
console.log("Opcion 5: Paquetes premium")

let opcionElegida = parseInt(prompt("ingrese la opcion que necesite 1,2,3,4,5"));

while(opcionElegida != 1 && opcionElegida != 2 && opcionElegida != 3 && opcionElegida != 4 && opcionElegida != 5){
    opcionElegida = parseInt(prompt("ingrese la opcion que necesite 1,2,3,4,5"));
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
    case 5:
        console.log("Elija el paquete que desea contratar")
}

if(opcionElegida === 4){
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

if(opcionElegida === 5){
    console.log("Opcion 1: " + plus.nombre)
    console.log("Opcion 2: " + oro.nombre)
    console.log("Opcion 3: " + platinum.nombre)
    console.log("Opcion 4: Armar mi propio paquete")

    let opcionUno = 6000
    let opcionDos = 10000
    let opcionTres = 15000

    let paqueteElegido = parseInt(prompt("Ingrese el paquete que desea: "))

    while(paqueteElegido != 1 && paqueteElegido != 2 && paqueteElegido != 3 && paqueteElegido !=4){
        paqueteElegido = parseInt(prompt("Ingrese el paquete que desea: "))
    }

    switch(paqueteElegido){
        case 1:
            console.log("Su paquete tiene un costo todal de: " + plus.precio)
            break
        case 2:
            console.log("Su paquete tiene un costo todal de: " + oro.precio)
            break
        case 3:
            console.log("Su paquete tiene un costo todal de: " + platinum.precio)
            break
        case 4:
            console.log("Elija su paquete personalizado: ")
    }

    if(paqueteElegido === 4){
        console.log("Opcion 1: 1000m + tv gratiuta + instalacion sin costo")
        console.log("Opcion 2: 2000m + tv gratuita + instalacion sin costo")
        console.log("Opcion 3: 5000m + tv gratuita + instalacion sin costo")

        let paquetePersonalizado = parseInt(prompt("Ingrese la opcion que desea: "))

        while(paquetePersonalizado != 1 && paquetePersonalizado != 2 && paquetePersonalizado != 3){
            paquetePersonalizado = parseInt(prompt("Ingrese la opcion que desea: "))
        }

        switch(paquetePersonalizado){
            case 1:
                const paquetePersonalizadoElegidoUno = new Paquetes ("mi paquete", 6000)
                paquetesPremium.push(paquetePersonalizadoElegidoUno);
                console.log("Su paquete tiene un costo total de 6000$ ")
                break
            case 2:
                const paquetePersonalizadoElegidoDos= new Paquetes ("mi paquete", 10000)
                paquetesPremium.push(paquetePersonalizadoElegidoDos);
                console.log("Su paquete tiene un costo total de 10000$ ")
                break
            case 3:
                const paquetePersonalizadoElegidoTres = new Paquetes ("mi paquete", 15000)
                paquetesPremium.push(paquetePersonalizadoElegidoTres);
                console.log("Su paquete tiene un costo total de 15000$ ")
        }
        console.log(paquetesPremium)
    }

}