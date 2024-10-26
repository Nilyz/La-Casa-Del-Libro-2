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
                            <p id="sinopsis-text">
                                Una novela de mar, amor y aventuras en el Egeo durante los años de la Guerra Civil
                                española.
                                Abril de 1937. Mientras en España transcurre la guerra civil, el marino mercante
                                Miguel
                                Jordán Kyriazis es enviado por el bando sublevado para atacar de modo clandestino el
                                tráfico
                                naval que desde la Unión Soviética transporta ayuda militar para la República. En la
                                base de
                                operaciones, una pequeña isla del mar Egeo, la vida del corsario español se cruzará
                                en
                                turbio triángulo con la de los propietarios, el barón Katelios y su esposa: una
                                seductora
                                mujer madura que busca, con fría desesperación, el modo de escapar a su destino.
                                Una novela de mar, amor y aventuras en el Egeo durante los años de la Guerra Civil
                                española.
                                Abril de 1937. Mientras en España transcurre la guerra civil, el marino mercante
                                Miguel
                                Jordán Kyriazis es enviado por el bando sublevado para atacar de modo clandestino el
                                tráfico
                                naval que desde la Unión Soviética transporta ayuda militar para la República. En la
                                base de
                                operaciones, una pequeña isla del mar Egeo, la vida del corsario español se cruzará
                                en
                                turbio triángulo con la de los propietarios, el barón Katelios y su esposa: una
                                seductora
                                mujer madura que busca, con fría desesperación, el modo de escapar a su destino
                                Una novela de mar, amor y aventuras en el Egeo durante los años de la Guerra Civil
                                española.
                                Abril de 1937. Mientras en España transcurre la guerra civil, el marino mercante
                                Miguel
                                Jordán Kyriazis es enviado por el bando sublevado para atacar de modo clandestino el
                                tráfico
                                naval que desde la Unión Soviética transporta ayuda militar para la República. En la
                                base de
                                operaciones, una pequeña isla del mar Egeo, la vida del corsario español se cruzará
                                en
                                turbio triángulo con la de los propietarios, el barón Katelios y su esposa: una
                                seductora
                                mujer madura que busca, con fría desesperación, el modo de escapar a su destino
                            </p>
                            <p id="btnVerMas" class="sinopsis-ampliar">Ver más</p>
                        </div>
                    </div>

                    <div class="book-genres">
                        <div class="genres-genre">
                            <p id="categoria">Ficción</p>
                        </div>
                        <div class="genres-genre">
                            <p id="subgenero">Libros infantiles en inglés</p>
                        </div>
                    </div>

                </div>

                <div class="book-data">

                    <div class="data-basket">
                        <div class="basket-buy">
                            <div class="basket-price">
                                <p id="precio">20.00</p>
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
                                <p id="encuadernacion">Tapa dura</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>ISBN:</p>
                            </div>
                            <div class="content-data">
                                <p id="codigo_isbn">9788410299634</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Idioma:</p>
                            </div>
                            <div class="content-data">
                                <p id="idioma">Castellano</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Número de páginas:</p>
                            </div>
                            <div class="content-data">
                                <p id="numero_paginas">433</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Fecha de lanzamiento:</p>
                            </div>
                            <div class="content-data">
                                <p id="fecha_lanzamiento">21/06/2024</p>
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
                                <p id="encuadernacion">Tapa dura</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>ISBN:</p>
                            </div>
                            <div class="content-data">
                                <p id="codigo_isbn">9788410299634</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Idioma:</p>
                            </div>
                            <div class="content-data">
                                <p id="idioma">Castellano</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Número de páginas:</p>
                            </div>
                            <div class="content-data">
                                <p id="numero_paginas">433</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Fecha de lanzamiento:</p>
                            </div>
                            <div class="content-data">
                                <p id="fecha_lanzamiento">21/06/2024</p>
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
                            <p id="sinopsis-text">
                                Una novela de mar, amor y aventuras en el Egeo durante los años de la Guerra Civil
                                española.
                                Abril de 1937. Mientras en España transcurre la guerra civil, el marino mercante
                                Miguel
                                Jordán Kyriazis es enviado por el bando sublevado para atacar de modo clandestino el
                                tráfico
                                naval que desde la Unión Soviética transporta ayuda militar para la República. En la
                                base de
                                operaciones, una pequeña isla del mar Egeo, la vida del corsario español se cruzará
                                en
                                turbio triángulo con la de los propietarios, el barón Katelios y su esposa: una
                                seductora
                                mujer madura que busca, con fría desesperación, el modo de escapar a su destino.
                                Una novela de mar, amor y aventuras en el Egeo durante los años de la Guerra Civil
                                española.
                                Abril de 1937. Mientras en España transcurre la guerra civil, el marino mercante
                                Miguel
                                Jordán Kyriazis es enviado por el bando sublevado para atacar de modo clandestino el
                                tráfico
                                naval que desde la Unión Soviética transporta ayuda militar para la República. En la
                                base de
                                operaciones, una pequeña isla del mar Egeo, la vida del corsario español se cruzará
                                en
                                turbio triángulo con la de los propietarios, el barón Katelios y su esposa: una
                                seductora
                                mujer madura que busca, con fría desesperación, el modo de escapar a su destino
                                Una novela de mar, amor y aventuras en el Egeo durante los años de la Guerra Civil
                                española.
                                Abril de 1937. Mientras en España transcurre la guerra civil, el marino mercante
                                Miguel
                                Jordán Kyriazis es enviado por el bando sublevado para atacar de modo clandestino el
                                tráfico
                                naval que desde la Unión Soviética transporta ayuda militar para la República. En la
                                base de
                                operaciones, una pequeña isla del mar Egeo, la vida del corsario español se cruzará
                                en
                                turbio triángulo con la de los propietarios, el barón Katelios y su esposa: una
                                seductora
                                mujer madura que busca, con fría desesperación, el modo de escapar a su destino
                            </p>
                            <p id="btnVerMas" class="sinopsis-ampliar">Ver más</p>
                        </div>
                    </div>

                    <div class="book-genres">
                        <div class="genres-genre">
                            <p id="categoria">Ficción</p>
                        </div>
                        <div class="genres-genre">
                            <p id="subgenero">Libros infantiles en inglés</p>
                        </div>
                    </div>

                </div>

                <div class="book-data">

                    <div class="data-basket">
                        <div class="basket-buy">
                            <div class="basket-price">
                                <p id="precio">20.00</p>
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