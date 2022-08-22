const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-list");

hamburger.addEventListener("click", move());

function move() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}