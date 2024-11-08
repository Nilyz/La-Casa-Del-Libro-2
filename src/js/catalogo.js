function generateTrendingBooks() {
    const bookAmount = 5;
    const container = document.getElementById("ficcion-books"); 

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

generateTrendingBooks();
