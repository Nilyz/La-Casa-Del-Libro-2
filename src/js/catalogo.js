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