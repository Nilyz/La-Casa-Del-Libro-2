const productListSection = document.getElementById("productListSection");
const cartCount = document.getElementById("cartCount");
const selectAllCheckbox = document.getElementById("selectAll");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

fetch("../../../src/json/libros.json")
    .then((response) => {
        if (!response.ok)
            throw new Error("No se pudo cargar el archivo libros.json");
        return response.json();
    })
    .then((data) => {
        console.log("Datos recibidos:", data);
        generateRandomBooks(data);
    })
    .catch((error) => {
        console.error("Error al cargar los datos:", error);
    });

// Función para generar libros
function generateBook(id, title, author, price, imgSrc, bookUnit) {
    const productBookCont = document.createElement("div");
    productBookCont.classList.add("productBookCont");

    const productBook = document.createElement("div");
    productBook.classList.add("productBook");
    productBook.id = `book-${id}`;

    productBook.innerHTML = `
        <input type="checkbox" data-id="${id}" data-price="${price}" />
        <div class="productBook__img">
            <img src="../imagenes/libros/${imgSrc}.webp" alt="${title}" />
        </div>
        <div class="productBook__info">
            <div class="productBook__info__title">
                <h4>${title}</h4>
                <p>${author}</p>
            </div>
            <div class="productBook__info__trash">
                <img src="../imagenes/iconos/trash-delete-svgrepo-com.svg" alt="trash" class="trash-icon" data-id="${id}" />
            </div>
            <div class="productBook__info__priceCount">
                <div class="productBook__info__price">
                    <p class="price">${price} €</p>
                </div>
                <div class="productBook__info__count">
                    <img src="../imagenes/iconos/minus-svgrepo-com.svg" alt="Decrementar" class="minus-icon" data-id="${id}" />
                    <p class="quantity" data-id="${id}">1</p>
                    <img src="../imagenes/iconos/plus-svgrepo-com.svg" alt="Incrementar" class="plus-icon" data-id="${id}" />
                </div>
            </div>
        </div>
    `;

    const hr = document.createElement("hr");
    productBookCont.appendChild(productBook);
    productBookCont.appendChild(hr);
    productListSection.appendChild(productBookCont);

    return productBookCont;
}

/*_________________ACTUALIZAR CANTIDAD DE LIBROS CLICKEANDO EL + Y -_____________________*/

function updateQuantity(target, change) {
    const quantityElement = target
        .closest(".productBook__info__count")
        .querySelector(".quantity");
    const currentQuantity = parseInt(quantityElement.textContent);

    // Calcular la nueva cantidad (asegurarse de que no sea menor que 1)
    const newQuantity = Math.max(1, currentQuantity + change);

    quantityElement.textContent = newQuantity;

    // Actualizar los precios según la nueva cantidad
    updatePrices();
}

/*_________________GENERAR LIBROS_____________________*/

// Función para generar libros de manera aleatoria
function generateRandomBooks(data) {
    const numberOfBooks = Math.floor(Math.random() * 10) + 6; // Número aleatorio de libros entre 6 y 15

    data.slice(0, numberOfBooks).forEach((randomBook) => {
        generateBook(
            randomBook.id,
            randomBook.nombre,
            randomBook.autor,
            randomBook.precio,
            randomBook.slug,
            1
        );
    });

    cartCount.innerHTML = numberOfBooks;
}

/*_________________ELIMINAR UN LIBRO_____________________*/

// Función para eliminar un libro
function deleteBook(event) {
    if (event.target && event.target.matches("img.trash-icon")) {
        // Obtener ID del libro que está asociado con el icono de la papelera
        const bookId = event.target.getAttribute("data-id");
        const bookElement = document.getElementById(`book-${bookId}`);

        if (bookElement) {
            const productBookCont = bookElement.closest(".productBookCont");
            if (productBookCont) {
                productBookCont.remove(); // Eliminar el contenedor completo del libro (incluyendo <hr />)
            }
            updateCartCount(); // Actualizar el contador del carrito
            updatePrices(); // Actualizar los precios después de eliminar el libro
        }
    }
}

// Actualizar el contador del carrito
function updateCartCount() {
    const remainingBooks = document.querySelectorAll(".productBookCont").length; // Contamos los contenedores completos
    cartCount.innerHTML = remainingBooks;
}
productListSection.addEventListener("click", deleteBook);

/*_________________SELECCIONAR TODO_____________________*/

function toggleSelectAll(event) {
    // Obtener el estado del checkbox de "Seleccionar todos"
    const isChecked = event.target.checked;

    const bookCheckboxes = productListSection.querySelectorAll(
        'input[type="checkbox"]'
    );

    bookCheckboxes.forEach((checkbox) => {
        checkbox.checked = isChecked;
    });

    updatePrices(); // Actualizar los precios después de cambiar la selección
}

selectAllCheckbox.addEventListener("click", toggleSelectAll);

/*_________________HACER CÁLCULOS_____________________*/
function updatePrices() {
    let subtotalValue = 0;
    const selectedCheckboxes = productListSection.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    // Calcular subtotal sumando precios de los libros seleccionados
    selectedCheckboxes.forEach((checkbox) => {
        const price = parseFloat(checkbox.getAttribute("data-price"));
        const quantity = checkbox
            .closest(".productBook")
            .querySelector(".quantity").textContent;

        // Multiplicar precio por cantidad
        subtotalValue += price * quantity;
    });

    subtotal.innerHTML = `${subtotalValue.toFixed(2)} €`;

    if (selectedCheckboxes.length > 0) {
        subtotalValue += 1.99;
    }

    total.innerHTML = `${subtotalValue.toFixed(2)} €`;
}

/*_________________EVENTOS_____________________*/
// Escuchar cambios en los checkboxes para actualizar precios
productListSection.addEventListener("change", updatePrices);

// Escuchar clics en los botones de incrementar y decrementar cantidad
productListSection.addEventListener("click", (event) => {
    const target = event.target;

    if (target.matches(".plus-icon")) {
        updateQuantity(target, 1);
    }

    if (target.matches(".minus-icon")) {
        updateQuantity(target, -1);
    }
});
