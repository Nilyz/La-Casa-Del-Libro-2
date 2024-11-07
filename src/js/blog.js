let btnMasInformacion = document.getElementById('btnMasInformacion');
let actualidad = document.getElementById('actualidad');

btnMasInformacion.addEventListener('click', () => {
    actualidad.scrollIntoView({ behavior: "smooth" });
});