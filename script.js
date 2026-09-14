// ================================================
// TECHNOVA Website JavaScript
// ================================================

document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-menu");


    // ================================================
    // Header scroll effect
    // ================================================

    function updateHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    // ================================================
    // Mobile navigation
    // ================================================

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });


    // Close mobile menu after clicking a link

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

        });

    });


    // ================================================
    // Close menu when clicking outside
    // ================================================

    document.addEventListener("click", function (event) {

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle
        ) {
            navMenu.classList.remove("active");
        }

    });


    // ================================================
    // Simple reveal animation
    // ================================================

    const revealElements = document.querySelectorAll(
        ".about-image, .about-content, .product-card, .contact-title, .contact-info"
    );


    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.1
        }

    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });

});