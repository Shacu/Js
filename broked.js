class Ropa{
    constructor (nombre, precio, id, img, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.img = img;
        this.cantidad = cantidad;
    }
}

const buzoUno = new Ropa ("buzo uno", 5000, 1, "./img/buzo.jpg", 1);
const buzoDos = new Ropa ("buzo dos", 5500, 2, "./img/buzo.jpg", 1);
const pantalonCargo = new Ropa ("pantalon cargo", 7000, 3, "./img/cargo.jpg", 1)
const remeraUno = new Ropa ("remera uno", 3000, 4, "./img/remera.jpg", 1)
const remeraDos = new Ropa ("remera dos", 3500, 5, "./img/remera.jpg", 1)

const prendas = [buzoUno, buzoDos, pantalonCargo, remeraUno, remeraDos]

let carrito = []

const cardPrendas = document.getElementById("cardPrendas");
const carritoHtml = document.getElementById("carritoHtml");
const vaciarCarrito = document.getElementById("vaciarCarrito");
const precioTotal = document.getElementById("precioTotal");

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("1234")){
        carrito = JSON.parse(localStorage.getItem("1234"))
        actualizarCarrito()
    }
})

prendas.forEach( ropa => {
    let card = document.createElement("card");
    card.innerHTML = ` <div class="card col-xl-3" style="width: 18rem;">
                            <img src=" ${ropa.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title"> ${ropa.nombre} </h5>
                            <p class="card-text"> Esta ropa es muy comoda, muy barata y you now :) tan solo por $ ${ropa.precio} </p>
                            <button id= "agregar${ropa.id}" class="btn btn-primary"> Compra aca! </button>
                            </div>
                        </div> `;

    cardPrendas.appendChild(card);

    const boton = document.getElementById(`agregar${ropa.id}`)

    boton.addEventListener(`click`, () => {
        agregarAlCarrito(ropa.id)
    })
})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId);

    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    }else {

    const item = prendas.find((prod) => prod.id === prodId)
    carrito.push(item)
}
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {
    carritoHtml.innerHTML = ""
    carrito.forEach((ropa) => {
        let div = document.createElement("div");
        div.innerHTML = ` <div class="card col-4" style="width: 18rem;">
                            <img src=" ${ropa.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title"> ${ropa.nombre} </h5>
                            <p class="card-text"> Esta ropa es muy comoda, muy barata y you now :) tan solo por $ ${ropa.precio} </p>
                            <p> ${ropa.cantidad} </p>
                            <button onClick="eliminarDelCarrito( ${ropa.id} )" class="btn btn-primary"> Eliminar prenda </button>
                            </div>
                        </div> `;

        carritoHtml.appendChild(div);

        localStorage.setItem("1234", JSON.stringify(carrito));
    })
    calcularTotalCompra();
   /*  guardadoStorage(); */
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    carrito.splice(carrito.indexOf(producto,1));
    actualizarCarrito();
}

vaciarCarrito.addEventListener("click", () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
});

const calcularTotalCompra = () => {
    let total = 0
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad
    });
    precioTotal.innerHTML = total;
};

/* const guardadoStorage = () => {
    carrito.forEach(producto => {
        productoJSON = JSON.stringify(producto);
    })
    localStorage.setItem("1234", productoJSON);
    console.log(productoJSON);
};
console.log(guardadoStorage); */


alert("Buenos dias! Bienvenido a nuestra tienda online");

let nombreUsuario = prompt("ingrese su nombre: ");

console.log("Bienvenido " + nombreUsuario + ", esta es una lista de todos nuestros productos")

/* for(let i = 0; i < prendas.length; i++ ){
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
console.log(carrito) */

const formDatos = document.getElementById("formDatos");

formDatos.addEventListener("submit", (e) => {
    e.preventDefault();

    const direccion = document.getElementById("direccion");
    const nombre = document.getElementById("nombre");

    alert(`su prenda sera enviada a ${direccion.value} y debera ser recibida por ${nombre.value}. Muchas gracias por su compra!`);

    formDatos.reset();
});

const direccionFinal = document.getElementById("direccionFinal");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    direccionFinal.innerText = `su prenda sera enviada a ${direccion.value} y debera ser recibida por ${nombre.value}. Muchas gracias por su compra!`;
});