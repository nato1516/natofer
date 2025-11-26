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