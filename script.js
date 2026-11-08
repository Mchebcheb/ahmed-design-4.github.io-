// Esperamos a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {

    // 1. LÓGICA DEL MENÚ HAMBURGUESA (Lo que te faltaba)
    const menuBtn = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('show');
            // Cambiamos el icono de barras a X al abrir
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 2. HEADER DINÁMICO (Scroll)
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // 3. EFECTO REVELADO (Intersection Observer)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    console.log("Ahmed Design: Todo el sistema (Menú + Scroll + Revelado) cargado 🚀");
});
document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.getElementById("carrusel-slides");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const totalSlides = slidesContainer.querySelectorAll(".slide").length;

    let indexActual = 0;

    function actualizarCarrusel() {
        // Al estar limitado el padre, este transform moverá la foto limpia al 100%
        slidesContainer.style.transform = `translateX(-${indexActual * 100}%)`;
    }

    btnNext.addEventListener("click", function () {
        indexActual++;
        if (indexActual >= totalSlides) {
            indexActual = 0;
        }
        actualizarCarrusel();
    });

    btnPrev.addEventListener("click", function () {
        indexActual--;
        if (indexActual < 0) {
            indexActual = totalSlides - 1;
        }
        actualizarCarrusel();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contenedorSlides = document.getElementById("carrusel-slides-estirado");
    const botonPrev = document.getElementById("btn-prev-estirado");
    const botonNext = document.getElementById("btn-next-estirado");
    const totalDiapositivas = contenedorSlides.querySelectorAll(".slide-estirado").length;

    let posicionActual = 0;

    function moverDeslizador() {
        // Multiplica el índice por el 100% del contenedor controlado
        contenedorSlides.style.transform = `translateX(-${posicionActual * 100}%)`;
    }

    botonNext.addEventListener("click", function () {
        posicionActual++;
        if (posicionActual >= totalDiapositivas) {
            posicionActual = 0; // Reinicia al inicio
        }
        moverDeslizador();
    });

    botonPrev.addEventListener("click", function () {
        posicionActual--;
        if (posicionActual < 0) {
            posicionActual = totalDiapositivas - 1; // Salta a la última
        }
        moverDeslizador();
    });
});
