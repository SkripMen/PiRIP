"use strict";

let navbar;
let sticky;
let modal;
const ads = [
    "https://snake-io-19.herokuapp.com/",
    "https://C0smoCat.github.io/jsTest/tests/dots/index.html",
    "https://C0smoCat.github.io/jsTest/tests/maze/index.html",
    "https://C0smoCat.github.io/jsTest/tests/planets/index.html",
    "https://C0smoCat.github.io/Clonium/index.html"
];

window.onload = function () {
    document.getElementById("reklama").src = ads[Math.floor(Math.random() * ads.length)];
    navbar = document.getElementById("navbar");
    window.onscroll = fixNavbar;
    sticky = navbar.offsetTop;
    modal = document.getElementById("myModal");
    tns({
        container: '.slider2',
        items: 3,
        controls: false,
        slideBy: 'page',
        nav: false,
        arrowKeys: true,
        autoplayHoverPause: true,
        autoplayButton: false,
        loop: true,
        autoplay: false,
        touch: true,
        mouseDrag: true,
        fixedWidth: 400
        // высоту задаем в css
    });
};

function toggleNavbar() {
    if (navbar.classList.contains("responsive"))
        navbar.classList.remove("responsive");
    else
        navbar.classList.add("responsive");
}

function fixNavbar() {
    if (window.pageYOffset >= sticky)
        navbar.classList.add("sticky");
    else
        navbar.classList.remove("sticky");
}

function openForm() {
    modal.style.display = "block";
}

function closeForm() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};