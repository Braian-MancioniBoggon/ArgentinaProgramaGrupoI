let menu = document.querySelector("#menuCelular");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open");
}