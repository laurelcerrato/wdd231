//last modified js
const year = document.querySelector(".year");
year.textContent= new Date().getFullYear();
document.getElementById("date").textContent = document.lastModified


//nav js
const navbutton = document.querySelector("#ham-btn");
navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navbar.classList.toggle("show");
});

const navbar = document.querySelector("#nav-bar");



