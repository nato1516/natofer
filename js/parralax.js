const menuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.contendorNav');
const icon = menuBtn.querySelector('i'); // tu icono dentro de .menu-toggle

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Cambiar icono de hamburguesa a X
  if (navMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark'); // icono X
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars'); // vuelve a hamburguesa
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  // IntersectionObserver para animación de aparición vertical
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach(item => observer.observe(item));

  // Parallax lateral sutil
  window.addEventListener("scroll", () => {
    items.forEach(item => {
      const content = item.querySelector(".content");
      const rect = item.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.01; // movimiento muy sutil
        const offset = (window.innerHeight - rect.top) * speed;

        if (item.classList.contains("left")) {
          content.style.transform = `translateX(${-offset}px) translateY(${item.classList.contains('visible') ? '-10px' : '80px'})`;
        } else {
          content.style.transform = `translateX(${offset}px) translateY(${item.classList.contains('visible') ? '-10px' : '80px'})`;
        }
      }
    });
  });
});
