const navbutton = document.querySelector("#ham-btn");
navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navbar.classList.toggle("show");
});

const navbar = document.querySelector("#nav-bar");