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
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
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



