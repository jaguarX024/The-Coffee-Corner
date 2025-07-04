// Header and navigation element selectors
let ham_icon = document.querySelector("#ham-icon");
let ham_menu = document.querySelector(".ham-menu");
let searcIcon = document.querySelector("#search-icon");
let searchBar = document.querySelector(".search-bar");
let media3_links_searchIcon = document.querySelector(".media3-links-searchIcon");
let searchBar_close = document.querySelector("#searchBar-close");
let Arrowsroll = document.querySelector("#scroll-arrow");
let job_arrow = document.querySelector("#jobTypes-Arrow");
let job_typesOptions = document.querySelector(".media3-jobsType");

// Hamburger menu toggle
if (ham_icon) {
    ham_icon.addEventListener("click", () => {
        ham_menu.classList.toggle("show-menu");
    });
}

// Search bar toggle in header
if (searcIcon) {
    searcIcon.addEventListener("click", () => {
        searchBar.classList.toggle("show-searchBar");
        searcIcon.classList.toggle("S-H-media3Links");
        ham_icon.classList.toggle("S-H-media3Links");
        media3_links_searchIcon.classList.toggle("S-H-media3Links");
    });
}

// Close search bar overlay
if (searchBar_close) {
    searchBar_close.addEventListener("click", () => {
        searchBar.classList.toggle("show-searchBar");
        searcIcon.classList.toggle("S-H-media3Links");
        ham_icon.classList.toggle("S-H-media3Links");
        media3_links_searchIcon.classList.toggle("S-H-media3Links");
    });
}

// Scroll down arrow button (scrolls main content)
if (Arrowsroll) {
    Arrowsroll.addEventListener("click", () => {
        if (window.scrollY < 600) {
            window.scrollTo({ top: 600, behavior: "smooth" });
        }
    });
}

// Jobs dropdown toggle in main nav
if (job_arrow) {
    job_arrow.addEventListener("click", () => {
        job_typesOptions.classList.toggle("show-jobTypes");
        job_arrow.classList.toggle("jobs-arrow");
    });
}

// Responsive behavior: handle screen resize for menu and dropdowns
let lastScreenIsLarge = window.innerWidth >= 980;
window.addEventListener("resize", () => {
    const isLarge = window.innerWidth >= 980;
    if (isLarge !== lastScreenIsLarge) {
        // Close hamburger menu when switching to large screens
        if (isLarge) {
            if (ham_menu.classList.contains("show-menu")) {
                ham_menu.classList.remove("show-menu");
            }
        } else {
            // Close jobs dropdown when switching to small screens
            if (job_typesOptions.classList.contains("show-jobTypes")) {
                job_typesOptions.classList.remove("show-jobTypes");
                job_arrow.classList.remove("jobs-arrow");
            }
        }
        lastScreenIsLarge = isLarge;
    }
});

// Global click handler: closes menus/dropdowns when clicking outside
document.body.addEventListener("click", (event) => {
    // Close hamburger menu if open and click is outside
    if (ham_menu.classList.contains("show-menu")) {
        if (ham_menu.contains(event.target) && !event.target.closest(".ham-menu-link")) {
            // Clicked inside menu, do nothing
        } else {
            if (!ham_icon.contains(event.target)) {
                ham_menu.classList.remove("show-menu");
            }
        }
    }

    // Close jobs dropdown if open and click is outside
    if (job_typesOptions.classList.contains("show-jobTypes")) {
        if (job_typesOptions.contains(event.target) && !event.target.closest(".media3-link")) {
            // Clicked inside dropdown, do nothing
        } else {
            if (!job_arrow.contains(event.target)) {
                job_typesOptions.classList.remove("show-jobTypes");
                job_arrow.classList.remove("jobs-arrow");
            }
        }
    }
});