const toggleMenu = document.querySelector(".toggle-menu");
const closeMenu = document.querySelector(".close-menu");
const navMenu = document.querySelector(".primary-nav ul");
toggleMenu.addEventListener("click", function() {
    navMenu.style.display = "flex";
    closeMenu.style.display = "block";
    toggleMenu.style.display = "none"
});
closeMenu.addEventListener("click", function() {
    navMenu.style.display = "none";
    closeMenu.style.display = "none";
    toggleMenu.style.display = "block"
});
window.onresize = function(event) {
    if(window.innerWidth > 1200) {
        navMenu.style.display = "flex";
        closeMenu.style.display = "none";
        toggleMenu.style.display = "none"
    } else {
        navMenu.style.display = "none";
        closeMenu.style.display = "none";
        toggleMenu.style.display = "block"
    }
};