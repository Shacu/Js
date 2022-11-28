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
    card.innerHTML = ` <div class="cards card col-xl-3" style="width: 18rem;">
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

    boton.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado exitosamente al carrito",
            duration: 3000,
        }).showToast();
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

console.log("Bienvenido usuario, esta es una lista de todos nuestros productos")


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

vaciarCarrito.addEventListener("click", () => {
    Toastify({
        text: "El carrito se vacio correctamente",
        duration: 3000,
    }).showToast()
})

const proximamenteCard = document.getElementById("proximamenteCard");

const proximosProductos = "json/proximamente.json";

fetch(proximosProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
            datos.forEach(producto => {
                proximamenteCard.innerHTML += `
                <div class="card col-xl-3" style="width: 18rem;">
                            <img src=" ${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title"> ${producto.nombre} </h5>
                            <p class="card-text"> Precio estimado $ ${producto.precio} </p>
                            </div>
                        </div>
                `
            })
    })
    .catch(error => console.log(error));