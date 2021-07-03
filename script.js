const navLinks = document.querySelectorAll(".nav-links a");
const nav = document.querySelector(".nav-links");

function openNav() {
  document.getElementById("open").style.display = "none";
  document.getElementById("nav-links").style.width = "100%";
}
function closeNav() {
  document.getElementById("nav-links").style.width = "0";
  document.getElementById("open").style.display = "block";
}

function closeLinks() {
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      nav.classList.toggle("toggle");
    });
  }
}

openNav();
closeNav();
closeLinks();
