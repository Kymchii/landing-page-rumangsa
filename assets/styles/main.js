document.addEventListener("scroll", function () {
    const navbar = document.querySelector("header .navbar-container");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-list li a");
    const currentPath = window.location.pathname; // Mendapatkan path URL saat ini

    navLinks.forEach(link => {
        // Periksa apakah href tautan cocok dengan path URL
        if (link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// JavaScript untuk toggle navbar
const toggler = document.getElementById('navbar-toggler');
const menu = document.getElementById('nav-list');
const icon = document.querySelector("#navbar-toggler i")

toggler.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
    const isActive = menu.classList.contains('active')

    icon.className = isActive
    ? 'fa-solid fa-x' : 'fa-solid fa-bars';
});