function initVerMasButton() {
    const sinopsisText = document.getElementById("sinopsis-text");
    const btnVermas = document.getElementById("btnVerMas");

    if (!sinopsisText || !btnVermas) {
        return; // Salir si los elementos no existen en el DOM
    }

    function updateVerMasButton() {
        const totalHeight = sinopsisText.scrollHeight; // Altura total del texto
        const containerHeight = sinopsisText.clientHeight; // Altura visible del contenedor

        if (totalHeight > containerHeight) {
            btnVermas.style.display = "block"; // Muestra el botón si el texto no cabe
        } else {
            btnVermas.style.display = "none"; // Oculta el botón si todo el texto cabe
        }
    }

    btnVermas.addEventListener("click", function () {
        console.log("click");
        if (sinopsisText.classList.contains("expanded")) {
            sinopsisText.classList.remove("expanded");
            btnVermas.textContent = "Ver más";
        } else {
            sinopsisText.classList.add("expanded");
            btnVermas.textContent = "Ver menos";
        }
    });

    // Llama a la función al cargar la página
    updateVerMasButton();

    // Llama a la función cuando se cambia el tamaño de la ventana
    window.addEventListener("resize", updateVerMasButton);
}
