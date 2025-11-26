document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  // IntersectionObserver para animación de aparición
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));

  // Parallax lateral solo en .content
  window.addEventListener("scroll", () => {
    items.forEach(item => {
      const content = item.querySelector(".content");
      const rect = item.getBoundingClientRect();
      const speed = 0.05; // velocidad parallax lateral

      if (item.classList.contains("left")) {
        content.style.transform = `translateX(${-(window.innerHeight - rect.top) * speed}px)`;
      } else {
        content.style.transform = `translateX(${(window.innerHeight - rect.top) * speed}px)`;
      }
    });
  });
});
