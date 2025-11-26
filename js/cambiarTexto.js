
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