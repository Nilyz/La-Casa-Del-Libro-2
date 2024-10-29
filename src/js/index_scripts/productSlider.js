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

function generateTrendingBooks() {
    const bookAmount = 8;
    for (let i = 0; i < bookAmount; i++) {
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="src/imagenes/libros/la-isla-de-la-mujer-dormida.webp" alt="libro" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">La isla de la mujer dormida</p>
                <hr />
                <p class="book__autor">Autor del libro</p>
                <p class="book__price">12,50$</p>
            </div>
        `;
        slider.appendChild(book);
    }
}
generateTrendingBooks();

function generateNewBooks() {
    const bookAmount = 8;
    for (let i = 0; i < bookAmount; i++) {
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="src/imagenes/libros/la-isla-de-la-mujer-dormida.webp" alt="libro" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">La isla de la mujer dormida</p>
                <hr />
                <p class="book__autor">Autor del libro</p>
                <p class="book__price">12,50$</p>
            </div>
        `;
        sliderNewBooks.appendChild(book);
    }
}
generateNewBooks();
