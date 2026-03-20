// Smooth scroll for navbar links
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}

// Toggle mobile menu
function togglemenu() {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("active");
}

// Scroll animations
const sections = document.querySelectorAll("section");
const options = { threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
