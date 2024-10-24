document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-text");
    const sinopsisText = document.querySelector(".sinopsis-text");

    toggleButton.addEventListener("click", function () {
        if (sinopsisText.classList.contains("expanded")) {
            sinopsisText.classList.remove("expanded");
            toggleButton.textContent = "Ver más";
        } else {
            sinopsisText.classList.add("expanded");
            toggleButton.textContent = "Ver menos";
        }
    });
});
