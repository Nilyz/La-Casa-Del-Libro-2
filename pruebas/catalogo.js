fetch('libros.json')
    .then(response => response.json())
    .then(data => {
        const catalogoDiv = document.getElementById('catalogo');
        data.forEach(libro => {
            const libroDiv = document.createElement('div');
            libroDiv.innerHTML = `
                <h2>${libro.nombre}</h2>
                <p>Autor: ${libro.autor}</p>
            `;
            // Agregar evento de clic
            libroDiv.addEventListener('click', () => {
                // Redirigir a la página del libro usando el slug
                window.location.href = `../src/plantilla/libro.html?slug=${libro.slug}`;
            });
            catalogoDiv.appendChild(libroDiv);
        });
    })
    .catch(error => console.error('Error al cargar los libros:', error));
