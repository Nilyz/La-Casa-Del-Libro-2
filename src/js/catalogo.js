function generateFiccionContemporaneaBooks() {
    const bookAmount = 5;
    const container = document.getElementById("ficcion-books-Contemporanea"); 

    for (let i = 0; i < bookAmount; i++) {
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="../imagenes/libros/anatomia-del-mal.webp" alt="libro" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">La isla de la mujer dormida</p>
                <hr />
                <p class="book__autor">Autor del libro</p>
                <p class="book__price">12,50$</p>
            </div>
        `;
        container.appendChild(book); 
    }
}

function generateFiccionClasicaBooks() {
    const bookAmount = 5;
    const container = document.getElementById("ficcion-books-Clasica");

    for (let i = 0; i < bookAmount; i++) {
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="../imagenes/libros/anatomia-del-mal.webp" alt="libro" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">La isla de la mujer dormida</p>
                <hr />
                <p class="book__autor">Autor del libro</p>
                <p class="book__price">12,50$</p>
            </div>
        `;
        container.appendChild(book); 
    }
}

function generateFiccionTerrorBooks() {
    const bookAmount = 5;
    const container = document.getElementById("ficcion-books-Terror");

    for (let i = 0; i < bookAmount; i++) {
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="../imagenes/libros/anatomia-del-mal.webp" alt="libro" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">La isla de la mujer dormida</p>
                <hr />
                <p class="book__autor">Autor del libro</p>
                <p class="book__price">12,50$</p>
            </div>
        `;
        container.appendChild(book); 
    }
}

// Llamadas a las funciones
generateFiccionContemporaneaBooks();
generateFiccionClasicaBooks();
generateFiccionTerrorBooks();
