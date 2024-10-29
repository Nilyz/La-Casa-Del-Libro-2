
window.onscroll = function() {
    const header = document.querySelector("header"); // Seleccion
    const sticky = header.offsetTop; 

    if (window.scrollY > sticky) {
        header.style.backgroundColor = "var(--color-green)";
    } else {
        header.style.backgroundColor = "transparent";
    }
};

