function rellenarLibrosMostrador(){
    const urlParams = new URLSearchParams(window.location.search);
    const libroSlug = urlParams.get('slug');

    const nombre = document.getElementById('nombre');
    const autor = document.getElementById('autor');
    const imagen = document.getElementById('imagen');
    const precio = document.getElementById('precio');

    console.log(libroSlug);
    // Cargar el archivo JSON y mostrar los datos
    fetch("../../../pruebas/libros.json")
        .then(response => response.json())
        .then(data => {
            //Buscar el libro en el JSON usando el "slug" de la URL
            const libro = data.find(libro => libro.slug === libroSlug);

            if (libro) {
                //
            }
        });
}
function generateFiccionContemporaneaBooks(data) {
    const bookAmount = 5;
    const container = document.getElementById(`ficcion-books-${libroSlug}`); 
    for (let i = 0; i < bookAmount; i++) {
        const idLibro = i+1;
        const bookData = data.find((book) => book.id === idLibro);
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="../imagenes/libros/${bookData.slug}.webp" alt="${bookData.slug}" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">${bookData.nombre}</p>
                <hr />
                <p class="book__autor">${bookData.autor}</p>
                <p class="book__price">${bookData.precio}€</p>
            </div>
        `;
        container.appendChild(book); 
    }
}
