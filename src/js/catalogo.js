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
    const container = document.getElementById("ficcion-books-Contemporanea"); 
    for (let i = 0; i < bookAmount; i++) {
        const idLibro = i;
        
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="../imagenes/libros/${data[idLibro].slug}webp" alt="${data[idLibro].slug}" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">${data[idLibro].nombre}</p>
                <hr />
                <p class="book__autor">${data[idLibro].autor}</p>
                <p class="book__price">${data[idLibro].precio}€</p>
            </div>
        `;
        container.appendChild(book); 
    }
}
function generateFiccionClasicaBooks(data) {
    const bookAmount = 5;
    const container = document.getElementById("ficcion-books-Clasica");
    for (let i = 0; i<bookAmount; i++){
        const idLibro = i+5;
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
function generateFiccionTerrorBooks(data){
    const bookAmount = 5;
    const container = document.getElementById("ficcion-books-Terror");
    for(let i = 0; i<bookAmount; i++){
        const idLibro = i+10;
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
// Llamadas a las funciones
generateFiccionContemporaneaBooks();
generateFiccionClasicaBooks();
generateFiccionTerrorBooks();