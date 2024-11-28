// Importa las funciones de Firebase desde los módulos con la versión correcta
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCZnhnXiP4s3wwTxdc88C3DFHHMhlaSPio",
    authDomain: "casa-del-libro-b7009.firebaseapp.com",
    projectId: "casa-del-libro-b7009",
    storageBucket: "casa-del-libro-b7009.firebasestorage.app",
    messagingSenderId: "680730593681",
    appId: "1:680730593681:web:10d57361a64e9bc9077230",
    measurementId: "G-HF4HTYXQJK"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };

// Verificar si el usuario está autenticado
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Si el usuario está autenticado, cambiar el estado y mostrar mensaje
        document.getElementById('login').disabled = true; // Deshabilitar el botón de inicio de sesión
        console.log("Usuario autenticado.");
    } else {
        // Si no está autenticado, permitir que inicie sesión o registre
        document.getElementById('login').disabled = false;
    }
});

// Ejemplo de autenticación con email y contraseña
function iniciarSesion(email, password) {
    console.log("Iniciando sesión...");
    console.log("Email: ", email);
    console.log("Contraseña: ", password);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        document.getElementById('loginError').innerText = "Inicio de sesión exitoso";
    })
    .catch((error) => {
        document.getElementById('loginError').innerText = "Correo o contraseña incorrectos";
    });

    // Cerrar el popup después de 2s
    //setTimeout(cerrarPopUp, 2000);
}

function registrar(email, password) {
    console.log("Registrando usuario...");
    console.log("Email: ", email);
    console.log("Contraseña: ", password);

    if (password.length < 6) {
        document.getElementById('loginError').innerText = "La contraseña debe tener al menos 6 caracteres";
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        document.getElementById('loginError').innerText = "Usuario registrado";
    })
    .catch((error) => {
        document.getElementById('loginError').innerText = "Error al registrar usuario";
    });

    // Cerrar el popup después de 2s
    //setTimeout(cerrarPopUp, 2000);

}

import { cerrarPopUp } from '../js/popup.js';
export { iniciarSesion };
export { registrar };
