document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recovery-form");
    const modal = document.getElementById("modal");
    const closeModalButton = document.querySelector(".close-modal");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe
        modal.style.display = "flex"; // Muestra el modal
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none"; // Oculta el modal
    });

    // Cerrar el modal si el usuario hace clic fuera de él
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});