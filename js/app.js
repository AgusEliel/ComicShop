let stockComics = [
    { id: 1, nombre: "Comic Batman", cantidad: 1, precio: 1200, img: "./comics/batman.jpg" },
    { id: 2, nombre: "Comic Flash", cantidad: 1, precio: 1200, img: "./comics/flash.jpg" },
    { id: 3, nombre: "Comic Spiderman", cantidad: 1, precio: 1200, img: "./comics/spiderman.jpg" },
    { id: 4, nombre: "Comic Superman", cantidad: 1, precio: 1200, img: "./comics/superman.jpg" },
    { id: 5, nombre: "Comic The Boys", cantidad: 1, precio: 1200, img: "./comics/theboys.jpg" },
    { id: 6, nombre: "Comic Gambito", cantidad: 1, precio: 1200, img: "./comics/gambito.jpg" },
    { id: 7, nombre: "Comic NightWing", cantidad: 1, precio: 1200, img: "./comics/nightwing.jpg" },
    { id: 8, nombre: "Comic Avengers", cantidad: 1, precio: 1200, img: "./comics/avengers.jpg" },
];

const contenedorComics = document.getElementById("shop__content");

const carritoComics = document.getElementById("comics__carrito");

let carrito = [];

stockComics.forEach((comic) => {
    const div = document.createElement("div");
    div.classList.add("comic");
    div.innerHTML = `
    <img src=${comic.img} alt="">
    <p class="shop__contenttitle__title">${comic.nombre}</p>
    <p class="shop__contenttitle__precio">Precio: $${comic.precio}</p>
    <button type='button' id="agregar${comic.id}" class="shop__content__art__btn">AGREGAR AL CARRITO</button>
    `;

    contenedorComics.appendChild(div);

    let boton = document.getElementById("agregar${comic.id}");
    boton.addEventListener("click", () => {
        agregarAlCarrito(comic.id);
    });
});

const agregarAlCarrito = (prodId) => {
    const item = stockComics.find((prod) => prod.id === prodId);
    carrito.push(item);
    actualizarCarrito();
    console.log(carrito);
};

const actualizarCarrito = () => {
    contenedorComics.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "comicEnCarrito";
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton__eliminar fas fa-trash-alt"></button>
        `;
        contenedorComics.appendChild(div);
    });
};
