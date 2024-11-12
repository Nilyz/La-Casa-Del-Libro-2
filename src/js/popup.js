document.addEventListener("DOMContentLoaded", function () {
    const userIcon = document.querySelector(".navbar__icon");

    if (userIcon) {
        userIcon.addEventListener("click", function (event) {
            event.preventDefault();

            fetch("LoginPopUp.html")
                .then(response => response.text())
                .then(html => {
                    const popupContainer = document.createElement("div");
                    popupContainer.classList.add("popup-container");

                    const popupContent = document.createElement("div");
                    popupContent.classList.add("popUpForm");
                    popupContent.innerHTML = html;

                    popupContainer.appendChild(popupContent);
                    document.body.appendChild(popupContainer);

                    const closeButton = popupContent.querySelector(".x-popUp button");
                    closeButton.addEventListener("click", function () {
                        document.body.removeChild(popupContainer);
                    });

                    popupContainer.addEventListener("click", function (e) {
                        if (e.target === popupContainer) {
                            document.body.removeChild(popupContainer);
                        }
                    });
                })
                .catch(error => console.error("Error al cargar el pop-up:", error));
        });
    } else {
        console.error("No se encontró el icono de usuario");
    }
});
