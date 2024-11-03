const sinopsisText = document.getElementById("sinopsis-text");
const btnVermas = document.getElementById("btnVerMas");

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
    if (sinopsisText.classList.contains("expanded")) {
        sinopsisText.classList.remove("expanded");
        btnVermas.textContent = "Ver más";
    } else {
        sinopsisText.classList.add("expanded");
        btnVermas.textContent = "Ver menos";
    }
});

// Llama a la función al cargar
window.onload = updateVerMasButton;
