
const menuToggle = document.querySelector(".menu-toggle");
const contendorNav = document.querySelector(".contendorNav");

menuToggle.addEventListener("click", () => {
    contendorNav.classList.toggle("active");
    menuToggle.classList.toggle("active");

    const abierto = menuToggle.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", abierto);
    menuToggle.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
});
