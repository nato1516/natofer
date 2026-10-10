
/* =========================================================
ANIMACIÓN AL HACER SCROLL
========================================================= */

const elementosFormacion = document.querySelectorAll(
    ".educacionCard, .worldskillsCard, .experienceCard"
);

const observerFormacion = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observerFormacion.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

elementosFormacion.forEach((elemento) => {
    observerFormacion.observe(elemento);
});


/* =========================================================
SPOTLIGHT WORLDSKILLS
   ========================================================= */

const worldskills = document.querySelector(".worldskillsCard");

if (worldskills) {

    worldskills.addEventListener("mousemove", (e) => {

        const rect = worldskills.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        worldskills.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        worldskills.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

}

>>>>>>> 97d287d063c2017db4e0c59e4c8f35b5f4c5e0c8
