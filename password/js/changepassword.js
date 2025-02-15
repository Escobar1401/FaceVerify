document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("change-password-form");
    const newPassword = document.getElementById("new-password");
    const confirmPassword = document.getElementById("confirm-password");
    const passwordError = document.getElementById("password-error");
    const modal = document.getElementById("modal");
    const closeModalButton = document.querySelector(".close-modal");

    // Validación en tiempo real
    confirmPassword.addEventListener("input", function () {
        if (confirmPassword.value !== newPassword.value) {
            passwordError.textContent = "Las contraseñas no coinciden.";
            confirmPassword.style.borderColor = "red";
        } else {
            passwordError.textContent = "";
            confirmPassword.style.borderColor = "#005f73";
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const password = newPassword.value;
        const confirmPass = confirmPassword.value;

        if (password !== confirmPass) {
            passwordError.textContent = "Las contraseñas no coinciden.";
            confirmPassword.style.borderColor = "red";
            return;
        }

        if (!isValidPassword(password)) {
            passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.";
            newPassword.style.borderColor = "red";
            return;
        }

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

    function isValidPassword(password) {
        return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    }
});
