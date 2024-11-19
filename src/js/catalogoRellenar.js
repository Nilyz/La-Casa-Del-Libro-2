// Función para rellenar los libros del mostrador
function rellenarLibrosMostrador() {
    const urlParams = new URLSearchParams(window.location.search);
    const libroSlug = urlParams.get("slug");

    // Obtener los elementos del DOM donde se mostrará la información del libro
    const nombre = document.getElementById("nombre");
    const autor = document.getElementById("autor");
    const imagen = document.getElementById("imagen");
    const precio = document.getElementById("precio");

    // Cargar el archivo JSON
    fetch("../../../pruebas/libros.json")
        .then((response) => response.json())
        .then((data) => {
            // Buscar el libro en el JSON usando el "slug" de la URL
            const libro = data.find((libro) => libro.slug === libroSlug);

            if (libro) {
                // Actualizar los elementos del DOM con los datos del libro
                nombre.innerHTML = libro.nombre;
                autor.innerHTML = libro.autor;
                imagen.src = `../imagenes/libros/${libro.slug}.webp`; // Asumiendo que el nombre de la imagen es el mismo que el slug
                imagen.alt = libro.nombre;
                precio.innerHTML = libro.precio.toFixed(2); // Asegúrate de que sea un número para mostrar el precio con 2 decimales

                // Llamar a la función para generar libros de no ficción según el subgénero
                generateNoFiccionBooks(libro.subgenero, libro.nombre, libro.autor, libro.slug, libro.precio, data);
            }
        })
        .catch((error) => {
            console.error("Error al cargar el JSON:", error);
        });
}

// Función para generar los libros de no ficción en el mostrador según el subgénero
function generateNoFiccionBooks(subgenero, nombre, autor, slug, precio, data) {
    // Filtrar los libros por subgénero
    const booksInSubgenre = data.filter((libro) => libro.subgenero === subgenero);
    const container = document.getElementById(`books-${subgenero}`);

    // Limpiar el contenedor antes de agregar nuevos libros
    container.innerHTML = "";

    // Generar los libros en el contenedor correspondiente
    booksInSubgenre.forEach((libro) => {
        const book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
            <img src="../imagenes/libros/${libro.slug}.webp" alt="${libro.nombre}" class="book__img" />
            <div class="book__infoCont">
                <p class="book__title">${libro.nombre}</p>
                <hr />
                <p class="book__autor">${libro.autor}</p>
                <p class="book__price">${libro.precio}€</p>
            </div>
        `;
        container.appendChild(book);
    });
}

// Llamar a la función para llenar el mostrador
rellenarLibrosMostrador();
