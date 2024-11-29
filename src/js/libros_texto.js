fetch("../../../pruebas/libros.json")
    .then((response) => {
        if (!response.ok)
            throw new Error("No se pudo cargar el archivo review.json");
        return response.json();
    })
    .then((data) => {
        console.log("Datos recibidos:", data);
        generateFiccionContemporaneaBooks(data);
        generateFiccionClasicaBooks(data);
        generateFiccionTerrorBooks(data);
    });


function generateFiccionContemporaneaBooks(data) {
    const bookAmount = 5;
    const container = document.getElementById("books-Educacion-Infantil"); 
    for (let i = 0; i < bookAmount; i++) {
        const idLibro = i+61;
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
    // Escucha los clics en el contenedor del slider
    container.addEventListener('click', (event) => {
        const book = event.target.closest('.book');
        if (book) {
            const slug = book.querySelector('img').alt;
            console.log('click en trending');
            window.location.href = `../../src/plantilla/libro.html?slug=${slug}`;
        }
    });
}
function generateFiccionClasicaBooks(data) {
    const bookAmount = 5;
    const container = document.getElementById("books-Educacion-Primaria");
    for (let i = 0; i<bookAmount; i++){
        const idLibro = i+66;
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
    // Escucha los clics en el contenedor del slider
    container.addEventListener('click', (event) => {
        const book = event.target.closest('.book');
        if (book) {
            const slug = book.querySelector('img').alt;
            console.log('click en trending');
            window.location.href = `../../src/plantilla/libro.html?slug=${slug}`;
        }
    });
}
function generateFiccionTerrorBooks(data){
    const bookAmount = 5;
    const container = document.getElementById("books-Educacion-Secundaria");
    for(let i = 0; i<bookAmount; i++){
        const idLibro = i+71;
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
    // Escucha los clics en el contenedor del slider
    container.addEventListener('click', (event) => {
        const book = event.target.closest('.book');
        if (book) {
            const slug = book.querySelector('img').alt;
            console.log('click en trending');
            window.location.href = `../../src/plantilla/libro.html?slug=${slug}`;
        }
    });
}
// Llamadas a las funciones
generateFiccionContemporaneaBooks();
generateFiccionClasicaBooks();
generateFiccionTerrorBooks();
