//menu 
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Alternar entre claro y oscuro
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');

   
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-sun', 'fa-moon'); 
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun'); 
    }
}

// Cargar el tema almacenado al cargar la página
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    const icon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon'); 
    }
};


// carrusel de imagenes de proyecto 
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); 
    });
    slides[index].classList.add('active'); 
}

function changeSlide(direction) {
    currentSlide += direction;
   
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; 
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; 
    }
    
    showSlide(currentSlide);
}


setInterval(() => {
    changeSlide(1); 
}, 3000);


showSlide(currentSlide);


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para validar primero

    // Obtiene los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación simple de los campos
    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return; // Detiene la ejecución si hay campos vacíos
    }

    // Aquí puedes manejar el envío del formulario (ejemplo: usando fetch para enviar datos a un servidor)
    alert('¡Gracias por tu mensaje, ' + name + '! Me pondré en contacto contigo pronto.');

    // Limpia los campos del formulario después de enviar
    document.getElementById('contact-form').reset();
});





