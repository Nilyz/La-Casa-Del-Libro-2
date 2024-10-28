const container = document.getElementById('book-basket-info-container');

function updateContent() {
    // Selecciona el contenedor que quieres cambiar

    // Verifica si el ancho de la ventana es menor a 992 píxeles
    if (window.innerWidth > 964) {

        // Cambia el contenido del contenedor
        container.innerHTML = `
                <div class="book-info">

                    <div class="book-sinopsis">
                        <div class="sinopsis-title">
                            <h2>Sinopsis</h2>
                        </div>
                        <div class="sinopsis-text">
                            <p id="sinopsis-text"></p>
                            <p id="btnVerMas" class="sinopsis-ampliar">Ver más</p>
                        </div>
                    </div>

                    <div class="book-genres">
                        <div class="genres-genre">
                            <p id="categoria"></p>
                        </div>
                        <div class="genres-genre">
                            <p id="subgenero"></p>
                        </div>
                    </div>

                </div>

                <div class="book-data">

                    <div class="data-basket">
                        <div class="basket-buy">
                            <div class="basket-price">
                                <p id="precio"></p>
                                <p>€</p>
                            </div>
                            <div class="basket-text">
                                <p>Envío gratis</p>
                            </div>
                        </div>
                        <div class="basket-btn">
                            <div class="btn-icon">
                                <img src="../imagenes/iconos/bag-shopping-svgrepo-com.svg" alt="Cesta">
                            </div>
                            <div class="btn-text">
                                <p>AÑADIR A LA CESTA</p>
                            </div>
                        </div>
                    </div>

                    <div class="data-info">
                        <div class="info-content">
                            <div class="content-title">
                                <p>Encuadernación:</p>
                            </div>
                            <div class="content-data">
                                <p id="encuadernacion"></p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>ISBN:</p>
                            </div>
                            <div class="content-data">
                                <p id="codigo_isbn"></p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Idioma:</p>
                            </div>
                            <div class="content-data">
                                <p id="idioma"></p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Número de páginas:</p>
                            </div>
                            <div class="content-data">
                                <p id="numero_paginas"></p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Fecha de lanzamiento:</p>
                            </div>
                            <div class="content-data">
                                <p id="fecha_lanzamiento"></p>
                            </div>
                        </div>
                    </div>

                </div>
        `;

    } else {

        container.innerHTML = `
                <div class="book-info">

                    <div class="data-info">
                        <div class="info-content">
                            <div class="content-title">
                                <p>Encuadernación:</p>
                            </div>
                            <div class="content-data">
                                <p id="encuadernacion"></p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>ISBN:</p>
                            </div>
                            <div class="content-data">
                                <p id="codigo_isbn"></p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Idioma:</p>
                            </div>
                            <div class="content-data">
                                <p id="idioma"></p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Número de páginas:</p>
                            </div>
                            <div class="content-data">
                                <p id="numero_paginas"></p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Fecha de lanzamiento:</p>
                            </div>
                            <div class="content-data">
                                <p id="fecha_lanzamiento"></p>
                            </div>
                        </div>
                    </div>

                    <div class="hr">
                        <hr>
                    </div>

                    <div class="book-sinopsis">
                        <div class="sinopsis-title">
                            <h2>Sinopsis</h2>
                        </div>
                        <div class="sinopsis-text">
                            <p id="sinopsis-text"></p>
                            <p id="btnVerMas" class="sinopsis-ampliar">Ver más</p>
                        </div>
                    </div>

                    <div class="book-genres">
                        <div class="genres-genre">
                            <p id="categoria"></p>
                        </div>
                        <div class="genres-genre">
                            <p id="subgenero"></p>
                        </div>
                    </div>

                </div>

                <div class="book-data">

                    <div class="data-basket">
                        <div class="basket-buy">
                            <div class="basket-price">
                                <p id="precio"></p>
                                <p>€</p>
                            </div>
                            <div class="basket-text">
                                <p>Envío gratis</p>
                            </div>
                        </div>
                        <div class="basket-btn">
                            <div class="btn-icon">
                                <img src="../imagenes/iconos/bag-shopping-svgrepo-com.svg" alt="Cesta">
                            </div>
                            <div class="btn-text">
                                <p>AÑADIR A LA CESTA</p>
                            </div>
                        </div>
                    </div>           

                </div>
        `;
    }

    // Llamar a la funcion que rellena los datos del libro
    rellenarDatosLibro();

}


// Ejecutar la función al cargar la página
window.onload = updateContent;

// Llama a la función cuando se cambia el tamaño de la ventana
window.addEventListener("resize", updateContent);