let login = document.getElementById('login');
login.addEventListener('click', mostrarPopUp);

let estado = false;

import { iniciarSesion } from '../bdd/firebase.js';
import { registrar } from '../bdd/firebase.js';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../bdd/firebase.js';

function mostrarPopUp() {
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
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" id="email"/>
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="Contraseña" id="password" />
                    <div class="forgot-password" id="forgot-password">
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </div>
                    <button type="submit" id="btnIniciarSesion" class="popup-button">Iniciar Sesión</button>
                    <div id="loginError" style="color: red;"></div>
                </form>
            </div>
        </div>
    `;

    // Verificar si el usuario ya está autenticado
    const user = auth.currentUser;
    if (user) {
        console.log("Ya estás autenticado.");
        return; // No continuar si ya hay un usuario conectado
    } else {
        // Agregar el overlay al body
        document.body.appendChild(overlay);
        // Funcionalidad de inicio de sesión/registro
        document.getElementById('btnIniciarSesion').addEventListener('click', (event) => {
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            event.preventDefault(); // Evita el envío del formulario

            if (estado === false) {
                // Llamar a la función para iniciar sesión si el estado es false
                iniciarSesion(email, password);
            } else {
                // Llamar a la función para registrar si el estado es true
                registrar(email, password);
            }
        });
    }



    // Evento para cambiar el formulario entre iniciar sesión y registro
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
    let hrLine = document.querySelector('.popUpLine'); 
    let logo = document.querySelector('.popup-logo');
    
    if (estado === false) {
        // Cambiar colores de las opciones
        iniciar.style.color = 'var(--color-white)';
        registrar.style.color = 'var(--color-green)';
        popupRight.style.backgroundColor = 'var(--color-yellow)';
        popUpForm.style.backgroundColor = 'var(--color-yellow)';
        btnIniciarSesion.innerHTML = 'Registrarse';
        btnIniciarSesion.style.backgroundColor = 'var(--color-green)';
        hrLine.classList.remove('popUpLine-active-login');
        hrLine.classList.add('popUpLine-active-register');

        // cambiar cursor a registrar
        registrar.style.cursor = 'default';
        // cambiar cursor a iniciar
        iniciar.style.cursor = 'pointer';

        // Ocultar el enlace de olvidar contraseña
        forgotPassword.style.visibility = 'hidden';

        logo.src = 'src/imagenes/iconos/Logo_Casa_del_libro_green.png';

        estado = true; // Cambiar estado a registro
    } else {
        iniciar.style.color = 'var(--color-yellow)';
        registrar.style.color = 'var(--color-white)';
        popupRight.style.backgroundColor = 'var(--color-green)';
        popUpForm.style.backgroundColor = 'var(--color-green)';
        btnIniciarSesion.innerHTML = 'Iniciar Sesión';
        btnIniciarSesion.style.backgroundColor = 'var(--color-yellow)';
        hrLine.classList.remove('popUpLine-active-register');
        hrLine.classList.add('popUpLine-active-login');

        // cambiar cursor a registrar
        registrar.style.cursor = 'pointer';
        // cambiar cursor a iniciar
        iniciar.style.cursor = 'default';

        // Mostrar el enlace de olvidar contraseña
        forgotPassword.style.visibility = 'visible';

        logo.src = 'src/imagenes/iconos/Logo_Casa_del_libro_yellow.png';

        estado = false; // Cambiar estado a inicio de sesión
    }
}

function cerrarPopUp() {
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        document.body.removeChild(overlay);
    }
}
export { cerrarPopUp };

