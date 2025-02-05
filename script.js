// Get sidebar links and sections
const links = document.querySelectorAll(".sidebar ul li a");
const sections = document.querySelectorAll(".section");

// Add event listeners to navigation links
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active class from all links and sections
        links.forEach((l) => l.classList.remove("active"));
        sections.forEach((section) => section.classList.remove("active"));

        // Add active class to clicked link and corresponding section
        link.classList.add("active");
        const targetId = link.id.replace("home", "home-section").replace("attendance", "attendance-section")
            .replace("grades", "grades-section").replace("assignments", "assignments-section")
            .replace("notifications", "notifications-section").replace("profile", "profile-section");

        document.getElementById(targetId).classList.add("active");
    });
});
