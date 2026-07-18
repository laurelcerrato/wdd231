//last modified js
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
document.getElementById("date").textContent = document.lastModified

//date js
const datefield = document.querySelector(".date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefield.innerHTML = `<em>${fulldateUK}</em>`;
//nav js
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#primaryNav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

const banner = document.querySelector(".banner");
//using the now variable that holds the current date I use getDay() to get the day of the week
const dayOfW = now.getDay();
if (dayOfW == 1 || dayOfW == 2){
    banner.style.display = "block";
}else{
    banner.style.display= "none";
}
document.querySelector(".banner__close").addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
});