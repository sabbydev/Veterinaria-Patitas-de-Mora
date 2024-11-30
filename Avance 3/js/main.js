const navLinks = document.querySelectorAll('.nav__a');
const menuCheckbox = document.getElementById('burger-menu');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Cerrar el menú (desmarcar el checkbox)
        menuCheckbox.checked = false;

        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtener la sección a la que apunta el enlace (el atributo href contiene el id del destino)
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Obtener la altura del header
        const headerHeight = document.querySelector('header').offsetHeight;

        // Realizar el desplazamiento con offset (para evitar que el header tape el contenido)
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});

const form = document.querySelector('.contacto__formulario');
form.addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !telefono || !mensaje) {
        event.preventDefault();
        alert('Por favor, completa todos los campos.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        event.preventDefault();
        alert('Por favor, ingresa un correo electrónico válido.');
    }
});

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío del formulario

    // Cambia la URL para activar la ventana flotante
    window.location.hash = 'ventana-flotante';
});

// Cerrar ventana emergente
document.querySelector('.cerrar').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.hash = '';  // Elimina el hash para ocultar la ventana
});