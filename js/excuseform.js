// Validaciones en tiempo real
document.getElementById("student-name").addEventListener("input", function () {
    const error = document.getElementById("student-name-error");
    if (!this.value) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

document.getElementById("student-id").addEventListener("input", function () {
    const error = document.getElementById("student-id-error");
    if (!this.value) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

document.getElementById("student-email").addEventListener("input", function () {
    const error = document.getElementById("student-email-error");
    if (!this.value) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

document.getElementById("tutor-name").addEventListener("input", function () {
    const error = document.getElementById("tutor-name-error");
    if (!this.value) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

document.getElementById("tutor-phone").addEventListener("input", function () {
    const error = document.getElementById("tutor-phone-error");
    if (!this.value) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

document.getElementById("absence-date").addEventListener("change", function () {
    const error = document.getElementById("absence-date-error");
    const selectedDate = new Date(this.value);
    const today = new Date();

    if (selectedDate > today) {
        error.textContent = "La fecha no puede ser futura.";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

// Validación de archivos adjuntos
document.getElementById("excuse-file").addEventListener("change", function () {
    const file = this.files[0];
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (!allowedTypes.includes(file.type)) {
        alert("Solo se permiten archivos PDF, JPG o PNG.");
        this.value = ""; // Limpiar el campo
    } else if (file.size > maxSize) {
        alert("El archivo no puede ser mayor a 5 MB.");
        this.value = ""; // Limpiar el campo
    }
});

// Enviar datos del formulario
document.getElementById("excuseForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const studentname = document.getElementById("student-name").value;
    const studentid = document.getElementById("student-id").value;
    const studentemail = document.getElementById("student-email").value;
    const tutorname = document.getElementById("tutor-name").value;
    const tutorphone = document.getElementById("tutor-phone").value;
    const absencedate = document.getElementById("absence-date").value;

    const studentnameError = document.getElementById("student-name-error");
    const studentidError = document.getElementById("student-id-error");
    const studentemailError = document.getElementById("student-email-error");
    const tutornameError = document.getElementById("tutor-name-error");
    const tutorphoneError = document.getElementById("tutor-phone-error");
    const absencedateError = document.getElementById("absence-date-error");

    if (!studentname || !studentid || !studentemail || !tutorname || !tutorphone || !absencedate) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    const response = "ok"; // Simulación de respuesta del servidor

    if (response === "ok") {
        alert("Excusa enviada correctamente.");
        document.getElementById("excuseForm").reset();
    } else {
        alert("Error al enviar la excusa.");
    }

});
