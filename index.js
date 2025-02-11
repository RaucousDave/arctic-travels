window.addEventListener("scroll", () => {
  let navbar = document.querySelectorAll("nav");
  let heroSection = document.querySelector(".hero");
  let navlinks = document.querySelectorAll(".navlinks");
  let logos = document.querySelectorAll(".logo");

  if (window.scrollY > heroSection.clientHeight - 50) {
    navbar.forEach((nav) => {
      nav.classList.add("scrolled");
    });
    navlinks.forEach((link) => {
      link.style.color = "black";
    });
    logos.forEach((logo) => {
      logo.style.color = "black";
    });
    menuToggle.style.color = "black";
  } else {
    navbar.forEach((nav) => {
      nav.classList.remove("scrolled");
    });
    navlinks.forEach((link) => {
      link.style.color = "white";
    });
    logos.forEach((logo) => {
      logo.style.color = "white";
    });
    menuToggle.style.color = "white";
  }
});

const resorts = () => {
  document.querySelector(".resorts").scrollIntoView({ behavior: "smooth" });
};

const regions = () => {
  document.querySelector(".regions").scrollIntoView({ behavior: "smooth" });
};
const passes = () => {
  document.querySelector(".passes").scrollIntoView({ behavior: "smooth" });
};
const contact = () => {
  document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
};

// Function to check if element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Function to apply animation when in view
function revealOnScroll() {
  const hiddenElements = document.querySelectorAll(".hidden");

  hiddenElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("show");
    } else {
      element.classList.remove("show"); // Remove when out of view
    }
  });
}

// Run on page load and on scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

const comeIntoView = () => {
  document
    .querySelector(".collections-box")
    .scrollIntoView({ behavior: "smooth" });
};
const sidebar = () => {
  mobileMenu.classList.toggle("active");
};
