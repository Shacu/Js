class Ropa{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const buzoUno = new Ropa ("buzo uno", 5000);
const buzoDos = new Ropa ("buzo dos", 5500);
const pantalonCargo = new Ropa ("pantalon cargo", 7000)
const remeraUno = new Ropa ("remera uno", 3000)
const remeraDos = new Ropa ("remera dos", 3500)

const prendas = [buzoUno, buzoDos, pantalonCargo, remeraUno, remeraDos]

const carrito = []

alert("Buenos dias! Bienvenido a nuestra tienda online");

let nombreUsuario = prompt("ingrese su nombre: ");

console.log("Bienvenido " + nombreUsuario + ", esta es una lista de todos nuestros productos")

for(let i = 0; i < prendas.length; i++ ){
    console.log(prendas[i]);
}

let sumarCarrito = prompt("Ingrese el nombre del producto que desea sumar al carrito")
let precioCarrito = 0
let suma = (a, b) => {
    return a + b;
}
while(sumarCarrito != "buzo uno" && sumarCarrito != "buzo dos" && sumarCarrito != "pantalon cargo" && sumarCarrito != "remera uno" && sumarCarrito != "remera dos"){
    alert("no tenemos ese producto, por favor ingrese algun producto que tengamos en stock");
    sumarCarrito = prompt("Ingrese el nombre del producto que desea sumar al carrito")
}

if(sumarCarrito === "buzo uno" || sumarCarrito === "buzo dos" || sumarCarrito === "pantalon cargo" || sumarCarrito === "remera uno" || sumarCarrito === "remera dos"){
    switch(sumarCarrito){
        case "buzo uno":
            console.log("su buzo se agrego correctamente al carrito")
            console.log("el precio de su carrito es de: $" + suma(precioCarrito, buzoUno.precio))
            carrito.push(buzoUno)
            break
        case "buzo dos":
            console.log("su buzo se agrego correctamente al carrito")
            console.log("el precio de su carrito es de: $" + suma(precioCarrito, buzoDos.precio))
            carrito.push(buzoDos)
            break
        case "pantalon cargo":
            console.log("su pantalon fue agregado correctamente al carrito")
            console.log("el precio de su carrito es de: $" + suma(precioCarrito, pantalonCargo.precio))
            carrito.push(pantalonCargo)
            break
        case "remera uno":
            console.log("su remera fue agregada correctamente al carrito")
            console.log("el precio de su carrito es de: $" + suma(precioCarrito, remeraUno.precio))
            carrito.push(remeraUno)
            break
        case "remera dos":
            console.log("su remera fue agregada correctamente al carrito")
            console.log("el precio de su carrito es de: $" + suma(precioCarrito, remeraDos.precio))
            carrito.push(remeraDos)
            break
        default:
            break
    }
}
console.log(carrito)
