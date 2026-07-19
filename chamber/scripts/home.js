//last modified js
const year = document.querySelector(".year");
year.textContent= new Date().getFullYear();
document.getElementById("date").textContent = document.lastModified


//nav js
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#primaryNav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});

