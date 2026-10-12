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
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitButton = document.getElementById("submitButton");

contactForm.addEventListener("submit", function (event) {

    //! Evitar que se abra la página de Formspree
    event.preventDefault();

    //! Obtener los datos del formulario
    const formData = new FormData(contactForm);

    //! Mostrar mensaje de envío
    formStatus.textContent = "Enviando mensaje...";
    submitButton.disabled = true;

    //! Enviar los datos a Formspree
    fetch("https://formspree.io/f/mwlvbrkj", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })
    .then(function (response) {

        if (response.ok) {

            //! Mensaje de éxito
            formStatus.textContent = "Mensaje enviado correctamente";
            contactForm.reset();

        } else {

            //! Error de Formspree
            formStatus.textContent = "No se pudo enviar.Intente de nuevo";

        }

    })
    .catch(function () {

        //! Error de conexión
        formStatus.textContent = "Error de conexion. Intente de nuevo";

    })
    .finally(function () {

        //! Habilitar nuevamente el botón
        submitButton.disabled = false;

    });

});
