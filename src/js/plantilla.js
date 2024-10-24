// Función para cambiar el contenido cuando el ancho es superior a 991 píxeles
function updateContent() {
    // Selecciona el contenedor que quieres cambiar
    const container = document.getElementById('book-basket-info-container');
    
    // Verifica si el ancho de la ventana es menor a 992 píxeles
    if (window.innerWidth < 992) {

        // Cambia el contenido HTML
        container.innerHTML = `
            <div class="book-basket">
                    <div class="book-price-container">
                        <div class="book-price">
                            <h2>21,75</h2>
                            <h2>€</h2>
                        </div>
                        <div class="book-text">
                            <h3>Envío gratis</h3>
                        </div>
                    </div>
                    <div class="book-basket-add">
                        <div class="book-basket-add-icon">
                            <img src="../imagenes/iconos/bag-shopping-svgrepo-com.svg" alt="Cesta">
                        </div>
                        <div class="book-basket-add-text">
                            <p>AÑADIR A LA CESTA</p>
                        </div>
                    </div>
                </div>
                <div class="book-data-container">
                    <div class="book-genres">
                        <div class="book-genres-genre">
                            <p>Ficción</p>
                        </div>
                        <div class="book-genres-genre">
                            <p>Libros infantiles en inglés</p>
                        </div>
                    </div>
                    <div class="book-data">
                        <div class="book-data-sinopsis">
                            <div class="book-data-sinopsis-title">
                                <h2>Sinopsis</h2>
                            </div>
                            <div class="book-data-sinopsis-text">
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
                                </p>
                                <p id="btnVerMas" class="book-data-sinopsis-ampliar">Ver más</p>
                            </div>
                        </div>
                        <div id="hr" class="hr">
                            <hr>
                        </div>
                        <div id="book-data-info" class="book-data-info">
                            <div class="info-content">
                                <div class="content-title">
                                    <p>Encuadernación:</p>
                                </div>
                                <div class="content-data">
                                    <p>Tapa dura</p>
                                </div>
                            </div>
                            <div class="info-content">
                                <div class="content-title">
                                    <p>ISBN:</p>
                                </div>
                                <div class="content-data">
                                    <p>9788410299634</p>
                                </div>
                            </div>
                            <div class="info-content">
                                <div class="content-title">
                                    <p>Idioma:</p>
                                </div>
                                <div class="content-data">
                                    <p>Castellano</p>
                                </div>
                            </div>
                            <div class="info-content">
                                <div class="content-title">
                                    <p>Número de páginas:</p>
                                </div>
                                <div class="content-data">
                                    <p>433</p>
                                </div>
                            </div>
                            <div class="info-content">
                                <div class="content-title">
                                    <p>Fecha de lanzamiento:</p>
                                </div>
                                <div class="content-data">
                                    <p>21/06/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }

    if (window.innerWidth >= 992) {

        // Cambia el contenido HTML
        container.innerHTML = `
            <div id="book-basket-info-container" class="book-basket-info-container">
                <div class="prueba">

                    <div class="book-basket">
                        <div class="book-price-container">
                            <div class="book-price">
                                <h2>21,75</h2>
                                <h2>€</h2>
                            </div>
                            <div class="book-text">
                                <h3>Envío gratis</h3>
                            </div>
                        </div>
                        <div class="book-basket-add">
                            <div class="book-basket-add-icon">
                                <img src="../imagenes/iconos/bag-shopping-svgrepo-com.svg" alt="Cesta">
                            </div>
                            <div class="book-basket-add-text">
                                <p>AÑADIR A LA CESTA</p>
                            </div>
                        </div>
                    </div>

                    <div class="book-data-info">
                        <div class="info-content">
                            <div class="content-title">
                                <p>Encuadernación:</p>
                            </div>
                            <div class="content-data">
                                <p>Tapa dura</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>ISBN:</p>
                            </div>
                            <div class="content-data">
                                <p>9788410299634</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Idioma:</p>
                            </div>
                            <div class="content-data">
                                <p>Castellano</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Número de páginas:</p>
                            </div>
                            <div class="content-data">
                                <p>433</p>
                            </div>
                        </div>
                        <div class="info-content">
                            <div class="content-title">
                                <p>Fecha de lanzamiento:</p>
                            </div>
                            <div class="content-data">
                                <p>21/06/2024</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div class="book-data-container">
                    <div class="book-genres">
                        <div class="book-genres-genre">
                            <p>Ficción</p>
                        </div>
                        <div class="book-genres-genre">
                            <p>Libros infantiles en inglés</p>
                        </div>
                    </div>
                    <div class="book-data">
                        <div class="book-data-sinopsis">
                            <div class="book-data-sinopsis-title">
                                <h2>Sinopsis</h2>
                            </div>
                            <div class="book-data-sinopsis-text">
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
                                <p id="btnVerMas" class="book-data-sinopsis-ampliar">Ver más</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        
        `;

    }
}

// Ejecutar la función al cargar la página
window.onload = updateContent;

// Llama a la función cuando se cambia el tamaño de la ventana
window.addEventListener("resize", updateContent);
