// Add your JavaScript here
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links-desk");

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    mobileMenu.classList.toggle("toggle");
  });
});

let mobileNavOpen = true;

function toggleMobileNav() {
  const navLinks = document.getElementById("nav-links");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileNavOpen) {
    navLinks.classList.remove("nav-active");
    mobileMenu.classList.remove("toggle");
  } else {
    navLinks.classList.add("nav-active");
    mobileMenu.classList.add("toggle");
  }

  mobileNavOpen = !mobileNavOpen;
}
