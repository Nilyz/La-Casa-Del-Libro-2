const sinopsisText = document.getElementById("sinopsis-text");
const btnVermas = document.getElementById("btnVerMas");
const hr = document.getElementById("hr");

function updateVerMasButton() {
    const totalHeight = sinopsisText.scrollHeight; // Altura total del texto
    const containerHeight = sinopsisText.clientHeight; // Altura visible del contenedor

    if (totalHeight > containerHeight) {
        btnVermas.style.display = "block"; // Muestra el botón si el texto no cabe
    } else {
        btnVermas.style.display = "none"; // Oculta el botón si todo el texto cabe
        hr.style.marginTop = "30px"; // Elimina el margen superior del separador
    }
}

btnVermas.addEventListener("click", function () {
    if (sinopsisText.classList.contains("expanded")) {
        sinopsisText.classList.remove("expanded");
        btnVermas.textContent = "Ver más";
    } else {
        sinopsisText.classList.add("expanded");
        btnVermas.textContent = "Ver menos";
    }
});

// Llama a la función al cargar la página
window.onload = updateVerMasButton;

// Llama a la función cuando se cambia el tamaño de la ventana
window.addEventListener("resize", updateVerMasButton);
