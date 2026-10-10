
const proyectos = document.querySelectorAll(".proyectoCard");

const reducirMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (reducirMovimiento) {
    proyectos.forEach((proyecto) => {
        proyecto.classList.add("visible");
    });
} else {
    proyectos.forEach((proyecto, index) => {
        proyecto.classList.add("animarEntrada");

        proyecto.style.transitionDelay = `${index * 180}ms`;
    });

    const observador = new IntersectionObserver((entradas, observer) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observer.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.1
    });

    proyectos.forEach((proyecto) => {
        observador.observe(proyecto);
    });
}
