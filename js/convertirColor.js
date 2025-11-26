document.querySelectorAll('.glowing-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});
// Función para convertir hex a rgba con opacidad
function hexToRgba(hex, alpha = 0.5) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
document.querySelectorAll('.imgPorcentaje').forEach(container => {
  const number = container.querySelector('.porcentajeNumero');
  const porcentaje = parseInt(container.dataset.porcentaje, 10);
  const hexColor = container.dataset.color; // color del contenedor en hex
  const color = hexToRgba(hexColor, 0.5); // convertir a rgba con opacidad 0.5
  let current = 0;

  // Aplicar color de fondo
  container.querySelector('.porcentaje').style.backgroundColor = color;

  const interval = setInterval(() => {
    if (current >= porcentaje) {
      clearInterval(interval);
      current = porcentaje;
    }
    number.textContent = current + '%';
    current++;
  }, 30); // ajusta velocidad
});
/*
hace que el porcentaje cargue conforme van apareciendo las card en la pantalla
*/ 
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const porcentajes = entry.target.querySelectorAll(".imgPorcentaje");
        porcentajes.forEach(p => {
          const porcentajeFinal = parseInt(p.dataset.porcentaje);
          const numero = p.querySelector(".porcentajeNumero");
          let contador = 0;

          const intervalo = setInterval(() => {
            if (contador >= porcentajeFinal) {
              clearInterval(intervalo);
            } else {
              contador++;
              numero.textContent = contador + "%";
            }
          }, 20); // velocidad de la animación
        });

        // Para que no se repita la animación cada vez que vuelves a la tarjeta
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 }); // se activa cuando el 30% de la tarjeta es visible

  // Observar cada tarjeta individualmente
  const cards = document.querySelectorAll(".glowing-card");
  cards.forEach(card => observer.observe(card));
});