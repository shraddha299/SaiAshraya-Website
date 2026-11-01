
/* =====================================
   SAIASHRAYA FAMILY WEBSITE
   JavaScript functionality
===================================== */


/* 1. MOBILE NAVIGATION MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    // Open and close the mobile menu
    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close the menu after clicking a navigation link
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");

            menuToggle.textContent = "☰";

        });

    });

}


/* 2. NEWS AND MEDIA FILTERS */

const filterButtons = document.querySelectorAll(".filter-btn");
const newsCards = document.querySelectorAll(".news-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get the selected category
        const selectedFilter = button.dataset.filter;

        // Update the active button
        filterButtons.forEach(function (filterButton) {

            filterButton.classList.remove("active");
            filterButton.setAttribute("aria-pressed", "false");

        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        // Display matching news cards
        newsCards.forEach(function (card) {

            const cardType = card.dataset.type;

            if (
                selectedFilter === "all" ||
                selectedFilter === cardType
            ) {

                card.hidden = false;

            } else {

                card.hidden = true;

            }

        });

    });

});

// Set initial accessibility state for news filters
filterButtons.forEach(function (button) {

    button.setAttribute(
        "aria-pressed",
        button.classList.contains("active") ? "true" : "false"
    );

});


/* 3. AUTOMATIC FOOTER YEAR */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* 4. SMOOTH SCROLL FOR INTERNAL LINKS */

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);

internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        // Ignore an empty anchor
        if (!targetId || targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* 5. CONSOLE MESSAGE */

console.log(
    "SaiAshraya Family website loaded successfully!"
);
