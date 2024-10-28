function rellenarDatosLibro() {
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const libroSlug = urlParams.get('slug'); // Obtiene el valor del parámetro "slug" de la URL

    // Seleccionar elementos de la página donde se mostrarán los datos del libro
    const nombre = document.getElementById('nombre');
    const autor = document.getElementById('autor');
    const editorial = document.getElementById('editorial');
    const sinopsis = document.getElementById('sinopsis-text');
    const categoria = document.getElementById('categoria');
    const subgenero = document.getElementById('subgenero');
    const precio = document.getElementById('precio');
    const encuadernacion = document.getElementById('encuadernacion');
    const isbn = document.getElementById('codigo_isbn');
    const idioma = document.getElementById('idioma');
    const numero_paginas = document.getElementById('numero_paginas');
    const fecha_lanzamiento = document.getElementById('fecha_lanzamiento');
    const imagen = document.getElementById('imagen');

    console.log(libroSlug);

    // Cargar el archivo JSON y mostrar los datos
    fetch('../../pruebas/libros.json')
        .then(response => response.json())
        .then(data => {
            // Buscar el libro en el JSON usando el "slug" de la URL
            const libro = data.find(libro => libro.slug === libroSlug);

            if (libro) {
                // Asignar los valores obtenidos a los elementos HTML correspondientes
                nombre.innerHTML = libro.nombre;
                autor.innerHTML = libro.autor;
                editorial.innerHTML = libro.editorial;
                imagen.src = `../imagenes/libros/${libro.slug}.webp`; // Asegúrate de que la ruta sea correcta
                imagen.alt = libro.nombre;
                sinopsis.innerHTML = libro.sinopsis;
                categoria.innerHTML = libro.genero.categoria;
                subgenero.innerHTML = libro.genero.subgenero;
                precio.innerHTML = libro.precio;
                encuadernacion.innerHTML = libro.encuadernacion;
                isbn.innerHTML = libro.codigo_isbn;
                idioma.innerHTML = libro.idioma;
                numero_paginas.innerHTML = libro.numero_paginas;
                fecha_lanzamiento.innerHTML = libro.fecha_lanzamiento;

                document.title = libro.nombre;

                // Inicializar el botón "Ver más" después de cargar los datos
                initVerMasButton();
            } else {
                console.error('Libro no encontrado');
            }
        })
        .catch(error => console.error('Error al cargar los detalles del libro:', error));
}
