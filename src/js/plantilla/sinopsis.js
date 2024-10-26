function initVerMasButton() {
    const sinopsisText = document.getElementById("sinopsis-text");
    const btnVerMas = document.getElementById("btnVerMas");

    if (!sinopsisText || !btnVerMas) {
        return; // Salir si los elementos no existen en el DOM
    }

    function updateVerMasButton() {
        const lineHeight = parseInt(window.getComputedStyle(sinopsisText).lineHeight); // Altura de cada línea
        const totalLines = Math.floor(sinopsisText.scrollHeight / lineHeight); // Número total de líneas

        if (totalLines > 8) {
            btnVerMas.style.display = "block"; // Muestra el botón si hay más de 8 líneas
            sinopsisText.style.maxHeight = `${8 * lineHeight}px`; // Limita la altura a 8 líneas
        } else {
            btnVerMas.style.display = "none"; // Oculta el botón si hay 8 líneas o menos
            sinopsisText.style.maxHeight = "none"; // Muestra el texto completo si es corto
        }
    }

    btnVerMas.addEventListener("click", function () {
        if (sinopsisText.classList.contains("expanded")) {
            sinopsisText.classList.remove("expanded");
            sinopsisText.style.maxHeight = `${8 * parseInt(window.getComputedStyle(sinopsisText).lineHeight)}px`;
            btnVerMas.textContent = "Ver más";
        } else {
            sinopsisText.classList.add("expanded");
            sinopsisText.style.maxHeight = "none"; // Quita la limitación para mostrar todo el texto
            btnVerMas.textContent = "Ver menos";
        }
    });

    // Llama a la función al cargar la página
    updateVerMasButton();

    // Llama a la función cuando se cambia el tamaño de la ventana
    window.addEventListener("resize", updateVerMasButton);
}

// Llama a la función para inicializar
initVerMasButton();
