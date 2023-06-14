// Smooth scrolling effect for anchor links
const navLinks = document.querySelectorAll("header nav ul a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add active class to the current navigation link based on scroll position
window.addEventListener("scroll", () => {
  const currentPos = window.scrollY;
  const sections = document.querySelectorAll("main section");

  sections.forEach((section) => {
    const top = section.offsetTop - 50;
    const bottom = top + section.offsetHeight;

    if (currentPos >= top && currentPos < bottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Add animation effect to project cards on hover
const projectCards = document.querySelectorAll(".grid_item");

projectCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("animate__animated", "animate__pulse");
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("animate__animated", "animate__pulse");
  });
});
