const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("toggle-menu"),
  closeMenu = document.getElementById("close-menu"),
  closeMenuPack = document.getElementById("close-menu-pack"),
  closeMenuContact = document.getElementById("close-menu-contact"),
  closeMenuAbout = document.getElementById("close-menu-about"),
  closeMenuMovie = document.getElementById("close-menu-movie"),
  closeMenuComplain = document.getElementById("myBtn");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

closeMenuPack.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

closeMenuContact.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

closeMenuAbout.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

closeMenuMovie.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

closeMenuComplain.addEventListener("click", () => {
  navMenu.classList.remove("show");
});







window.addEventListener("scroll", (e) => {
  const header = document.querySelector(".shadow");
  if (window.pageYOffset > 0) {
    header.classList.add("add-shadow");
  } else {
    header.classList.remove("add-shadow");
  }
});

$("input").on("change", function () {
  $("body").toggleClass("blue");
});

