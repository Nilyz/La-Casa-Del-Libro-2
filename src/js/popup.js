let login = document.getElementById('login');
login.addEventListener('click', mostrarPopUp);

let estado = false;
let popUpVisible = false;  // Nueva variable para controlar si el pop-up ya está visible


import { iniciarSesion } from '../bdd/firebase.js';
import { registrar } from '../bdd/firebase.js';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../bdd/firebase.js';

function mostrarPopUp() {

    // Evitar que se pueda abrir el pop-up varias veces si ya está visible
    if (popUpVisible) {
        return; // Si el pop-up ya está visible, no hacer nada
    }

    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');

    overlay.innerHTML = `
        <div class="popUpForm" id="loginForm">
            <div class="popup-left">
                <img src="src/imagenes/otros/login_fondo.jpg" alt="Libros" class="popup-image" />
                <div class="popup-text">
                    <p>Nuestra misión es proporcionar todos los libros, sus historias y el conocimiento que albergan, a los amantes de la cultura.</p>
                    <p>Nuestra historia comienza en 1923, y hoy somos la cadena de librerías más grande de España, con librerías ubicadas en las principales ciudades y una página web para la venta de libros online.</p>
                </div>
            </div>
            <div class="popup-right" id="popup-right">
                <div class="x-popUp">
                    <button class="close-button" id="btnCerrar">&times;</button>
                </div>
                <div class="top-PopUp">
                    <h2 class="iniciar" id="iniciar">Iniciar Sesión</h2>
                    <hr class="popUpLine">
                    <h2 class="registrar" id="registrar">Registro</h2>
                </div>
                <div class="middlePopUp">
                    <img src="src/imagenes/iconos/Logo_Casa_del_libro.png" alt="Logo Casa del Libro" class="popup-logo" />
                </div>
                <form class="loginForm" id="loginForm">
                    <div class="inputCont">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" id="email"/>
                    </div>
                    <div class="inputCont">
                        <label>Contraseña</label>
                        <input type="password" name="password" placeholder="Contraseña" id="password" />
                    </div>
                    <div id="confirm-password-container" class="inputCont" style="display: none;">
                        <label>Confirmar Contraseña</label>
                        <input type="password" name="confirm-password" placeholder="Confirmar Contraseña" id="confirm-password" />
                    </div>
                    <div class="forgot-password" id="forgot-password">
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </div>
                    <div id="loginError" style="color: #c0392b;"></div>
                    <button type="submit" id="btnIniciarSesion" class="popup-button">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    `;

    const user = auth.currentUser;
    if (user) {
        console.log("Ya estás autenticado.");
        return;
    } else {
        document.body.appendChild(overlay);
        popUpVisible = true;  // Marcar que el pop-up está visible
        document.getElementById('btnIniciarSesion').addEventListener('click', (event) => {
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            event.preventDefault();

            if (estado === false) {
                // Modo de iniciar sesión
                if (email.trim() === "" || password.trim() === "") {
                    document.getElementById('loginError').textContent = 'Por favor, rellena todos los campos.';
                    return;
                }
                iniciarSesion(email, password);
            } else {
                // Modo de registro
                let confirmPassword = document.getElementById('confirm-password').value;
                if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
                    document.getElementById('loginError').textContent = 'Por favor, rellena todos los campos.';
                    return;
                }

                if (password !== confirmPassword) {
                    document.getElementById('loginError').textContent = 'Las contraseñas no coinciden.';
                } else {
                    registrar(email, password);
                }
            }
        });
    }

    document.getElementById('registrar').addEventListener('click', cambiarFormulario);
    document.getElementById('iniciar').addEventListener('click', cambiarFormulario);
    document.getElementById('btnCerrar').addEventListener('click', cerrarPopUp);
}

function cambiarFormulario() {
    let iniciar = document.getElementById('iniciar');
    let registrar = document.getElementById('registrar');
    let popupRight = document.getElementById('popup-right');
    let popUpForm = document.getElementById('loginForm');
    let btnIniciarSesion = document.getElementById('btnIniciarSesion');
    let forgotPassword = document.getElementById('forgot-password');
    let confirmPasswordContainer = document.getElementById('confirm-password-container');
    let hrLine = document.querySelector('.popUpLine');
    let logo = document.querySelector('.popup-logo');
    let loginError = document.getElementById('loginError');

    if (estado === false) {
        iniciar.style.color = 'var(--color-white)';
        registrar.style.color = 'var(--color-green)';
        popupRight.style.backgroundColor = 'var(--color-yellow)';
        popUpForm.style.backgroundColor = 'var(--color-yellow)';
        btnIniciarSesion.innerHTML = 'Registrarse';
        btnIniciarSesion.style.backgroundColor = 'var(--color-green)';
        hrLine.classList.remove('popUpLine-active-login');
        hrLine.classList.add('popUpLine-active-register');

        registrar.style.cursor = 'default';
        iniciar.style.cursor = 'pointer';

        forgotPassword.style.display = 'none';
        confirmPasswordContainer.style.display = 'block';

        logo.src = 'src/imagenes/iconos/Logo_Casa_del_libro_green.png';
        logo.style.display = 'none';
        loginError.style.color = '#c0392b';

        estado = true;
    } else {
        iniciar.style.color = 'var(--color-yellow)';
        registrar.style.color = 'var(--color-white)';
        popupRight.style.backgroundColor = 'var(--color-green)';
        popUpForm.style.backgroundColor = 'var(--color-green)';
        btnIniciarSesion.innerHTML = 'Iniciar Sesión';
        btnIniciarSesion.style.backgroundColor = 'var(--color-yellow)';
        hrLine.classList.remove('popUpLine-active-register');
        hrLine.classList.add('popUpLine-active-login');

        registrar.style.cursor = 'pointer';
        iniciar.style.cursor = 'default';

        forgotPassword.style.display = 'block';
        confirmPasswordContainer.style.display = 'none';

        logo.src = 'src/imagenes/iconos/Logo_Casa_del_libro_yellow.png';
        loginError.style.color = '#e74c3c';

        estado = false;
    }
}

function cerrarPopUp() {
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        document.body.removeChild(overlay);
        popUpVisible = false;  // Marcar como que el pop-up ya no está visible  
    }
}

export { cerrarPopUp };
