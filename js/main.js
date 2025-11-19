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

const words = [
    "creatividad sin límites",
    "tecnología inteligente",
    "diseño funcional",
    "soluciones web",
    "experiencias únicas",
    "diseño atractivo"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById("typewriter");

function type() {
    const currentWord = words[index];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    el.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 1500); // pausa antes de borrar
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 100 : 280);
}

type();
gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            toggleActions: "play none none reverse"
        }
    });
});
