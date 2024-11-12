let btnMasInformacion = document.getElementById('btnMasInformacion');
let actualidad = document.getElementById('actualidad');
let eventoArturoReverte = document.getElementById('eventoArturoReverte');

btnMasInformacion.addEventListener('click', () => {
    actualidad.scrollIntoView({ behavior: "smooth" });
});

eventoArturoReverte.addEventListener('click', () => {
    window.location.href = '../plantilla/libro.html?slug=la-isla-de-la-mujer-dormida';
});

function aplicarEstilos() {
    const eventos = document.querySelectorAll('.evento');
    const screenWidth = window.innerWidth;

    // Limpiar todos los bordes antes de aplicar los nuevos
    eventos.forEach(evento => {
        evento.style.borderBottom = 'none';
    });

    // Si el ancho de la pantalla es mayor o igual a 992px, aplica borde a los 2 primeros eventos
    if (screenWidth >= 992) {
        for (let i = 0; i < eventos.length - 2; i++) {
            eventos[i].style.borderBottom = '2px solid black';
        }
    }else{
        for (let i = 0; i < eventos.length - 1; i++) {
            eventos[i].style.borderBottom = '2px solid black';
        }
    }
}

// Aplica los estilos inicialmente
aplicarEstilos();

// Aplica los estilos cuando cambie el tamaño de la ventana
window.addEventListener('resize', aplicarEstilos);

