// Select the navigation bar
const navbar = document.getElementById("navbar");

// Function to add/remove the 'scrolled' class based on scroll position
window.onscroll = function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
