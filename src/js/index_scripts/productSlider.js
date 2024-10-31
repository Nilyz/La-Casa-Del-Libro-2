const arrowBack = document.getElementById("arrow-left-trending");
const arrowNext = document.getElementById("arrow-right-trending");
const slider = document.getElementById("trendingBooks-books");

const arrowBackNewBooks = document.getElementById("arrow-left-new");
const arrowNextNewBooks = document.getElementById("arrow-right-new");
const sliderNewBooks = document.getElementById("newBooks-books");

let currentOffset = 0;
let currentOffsetNewBooks = 0;

function moveSlider(direction, section) {
    if (section === "trending") {
        if (direction === "left") {
            // Solo puede retroceder si no está en el inicio
            if (currentOffset != 0) {
                console.log("retroceder");
                currentOffset += slider.offsetWidth / 2;
            } else {
                console.log("Está en el inicio");
            }
        } else {
            if (currentOffset == 0) {
                console.log("avanzar");
                currentOffset -= slider.offsetWidth / 2;
            } else {
                console.log("está en el final");
            }
        }
        slider.style.transform = `translateX(${currentOffset}px)`;
    }else if (section === "new") {
        if (direction === "left") {
            // Solo puede retroceder si no está en el inicio
            if (currentOffsetNewBooks != 0) {
                console.log("retroceder");
                currentOffsetNewBooks += sliderNewBooks.offsetWidth / 2;
            } else {
                console.log("Está en el inicio");
            }
        } else {
            if (currentOffsetNewBooks == 0) {
                console.log("avanzar");
                currentOffsetNewBooks -= sliderNewBooks.offsetWidth / 2;
            } else {
                console.log("está en el final");
            }
        }
        sliderNewBooks.style.transform = `translateX(${currentOffsetNewBooks}px)`;
    }

    
}

arrowBack.addEventListener("click", () => moveSlider("left", "trending"));
arrowNext.addEventListener("click", () => moveSlider("right", "trending"));
arrowBackNewBooks.addEventListener("click", () => moveSlider("left", "new"));
arrowNextNewBooks.addEventListener("click", () => moveSlider("right", "new"));


//PARA GENERAR LOS LIBROS

fetch("../../../pruebas/libros.json")
    .then((response) => {
        if (!response.ok)
            throw new Error("No se pudo cargar el archivo review.json");
        return response.json();
    })
    .then((data) => {
        console.log("Datos recibidos:", data);
        generateTrendingBooks(data);
        generateNewBooks(data);
    });



function generateTrendingBooks(data) {
    const bookAmount = 8;
    for (let i = 0; i < bookAmount; i++) {
        let randomNumber = Math.floor(Math.random() * 89) ;
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="../src/imagenes/libros/${data[randomNumber].slug}.webp" alt="${data[randomNumber].slug}" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">${data[randomNumber].nombre}</p>
                <hr />
                <p class="book__autor">${data[randomNumber].autor}</p>
                <p class="book__price">${data[randomNumber].precio}€</p>
            </div>
        `;
        slider.appendChild(book);
    }
}


function generateNewBooks(data) {
    const bookAmount = 8;
    for (let i = 0; i < bookAmount; i++) {
        let randomNumber = Math.floor(Math.random() * 89) ;
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="src/imagenes/libros/${data[randomNumber].slug}.webp" alt="${data[randomNumber].slug}" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">${data[randomNumber].nombre}</p>
                <hr />
                <p class="book__autor">${data[randomNumber].autor}</p>
                <p class="book__price">${data[randomNumber].precio}€</p>
            </div>
        `;
        sliderNewBooks.appendChild(book);
    }
}

// Escucha los clics en el contenedor del slider
slider.addEventListener('click', (event) => {
    const book = event.target.closest('.book');
    if (book) {
        const slug = book.querySelector('img').alt;
        console.log('click en trending');
        window.location.href = `../src/plantilla/libro.html?slug=${slug}`;
    }
});

// Escucha los clics en el contenedor de libros nuevos
sliderNewBooks.addEventListener('click', (event) => {
    const book = event.target.closest('.book');
    if (book) {
        const slug = book.querySelector('img').alt;
        console.log('click en nuevo');
        window.location.href = `../src/plantilla/libro.html?slug=${slug}`;
    }
});


