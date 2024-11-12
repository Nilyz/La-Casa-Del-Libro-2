let login = document.getElementById('login');
login.addEventListener('click', mostrarPopUp);


function mostrarPopUp() {
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');

    overlay.innerHTML = `
        <div class="popUpForm" id="loginForm">
            <div class="popup-left">
                <img src="src/imagenes/otros/login_fondo.jpg" alt="Libros" class="popup-image" />
                <div class="popup-text">
                    <p>Nuestra misión es proporcionar todos los libros,
                        sus historias y el conocimiento que albergan, a los amantes de la cultura.</p>
                    <p>Nuestra historia comienza en 1923, y hoy somos la cadena
                        de librerías más grande de España, con librerías ubicadas en las 
                        principales ciudades y una página web para la venta de libros online.</p>
                </div>
            </div>
            <div class="popup-right">
                <div class="x-popUp">
                    <button onclick="cerrarPopUp()">&times;</button>
                </div>
                <div class="top-PopUp">
                    <h2>Iniciar Sesión</h2>
                    <hr class="popUpLine">
                    <h2>Registro</h2>
                </div>
                <div class="middlePopUp">
                    <img src="src/imagenes/iconos/Logo_Casa_del_libro.png" alt="Logo Casa del Libro" class="popup-logo" />
                </div>
                <form class="loginForm" id="loginForm">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" id="email"/>
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="Contraseña" id="password" />
                    <div class="forgot-password">
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </div>
                    <button type="submit" class="popup-button">Iniciar Sesión</button>
                    <div id="loginError" style="color: red;"></div>
                </form>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    // Una vez que el pop-up está en el DOM, configura el evento de envío del formulario
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', inicioSesion);
    }
}

function cerrarPopUp() {
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        document.body.removeChild(overlay);
    }
}
