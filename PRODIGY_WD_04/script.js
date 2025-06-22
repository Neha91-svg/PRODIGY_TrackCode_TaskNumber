// script.js
const menu = document.querySelector(".navlist");
const icon = document.querySelector("#menu-icon");

icon.addEventListener("click", () => {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
});
