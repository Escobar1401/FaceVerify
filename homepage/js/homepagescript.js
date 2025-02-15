// Seleccionar elementos
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

// Abrir menú
openMenu.addEventListener("click", function () {
    menuOverlay.style.display = "flex";
});

// Cerrar menú
closeMenu.addEventListener("click", function () {
    menuOverlay.style.display = "none";
});