const urlParams = new URLSearchParams(window.location.search);
const libroSlug = urlParams.get('slug'); // Obtiene el valor del parámetro "slug"

fetch('libros.json')
    .then(response => response.json())
    .then(data => {
        const libro = data.find(libro => libro.slug === libroSlug); // Busca el libro con el slug correspondiente
        if (libro) {
            const detailsDiv = document.getElementById('libro-details');
            detailsDiv.innerHTML = `
                <h1>${libro.nombre}</h1>
                <p>Autor: ${libro.autor}</p>
                <p>Sinopsis: ${libro.sinopsis}</p>
                <p>Editorial: ${libro.editorial}</p>
                <p>Género: ${libro.genero.categoria} - ${libro.genero.subgenero}</p>
                <p>Precio: ${libro.precio} €</p>
                <p>ISBN: ${libro.codigo_isbn}</p>
                <p>Idioma: ${libro.idioma}</p>
                <p>Nº de páginas: ${libro.numero_paginas}</p>
                <p>Fecha de lanzamiento: ${libro.fecha_lanzamiento}</p>
            `;
        } else {
            console.error('Libro no encontrado');
        }
    })
    .catch(error => console.error('Error al cargar los detalles del libro:', error));
