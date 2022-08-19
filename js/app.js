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

stockComics.forEach((comic) => {
    const div = document.createElement("div");
    div.classList.add("comic");
    div.innerHTML = `
    <img src=${comic.img} alt="">
    <h3>${comic.nombre}</h3>
    <p class="precioComic">Precio:$ ${comic.precio}</p>
    <button id="agregar${comic.id}" class="boton__agregar"></button>
    `;

    contenedorComics.appendChild(div);
});
