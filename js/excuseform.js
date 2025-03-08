// Leer el rol del usuario desde localStorage
const userRole = localStorage.getItem("userRole") || "estudiante"; // Valor predeterminado: "estudiante"

// Seleccionar elementos
const openMenu = document.getElementById("openMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuNav = document.querySelector(".menu-nav ul");

// Opciones de menú según el rol del usuario
const menuOptions = {
    estudiante: [
        { text: "Inicio", link: "homepage.html" },
        { text: "Justificación de inasistencias", link: "#" },
        { text: "Excusas", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Soporte técnico", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    profesor: [
        { text: "Inicio", link: "homepage.html" },
        { text: "Gestión de asistencia", link: "#" },
        { text: "Consultas", link: "#" },
        { text: "Registros manuales", link: "#" },
        { text: "Observaciones", link: "#" },
        { text: "Listas", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    "tutor-legal": [
        { text: "Inicio", link: "homepage.html" },
        { text: "Perfiles de estudiantes", link: "#" },
        { text: "Notificaciones", link: "#" },
        { text: "Gestión de excusas", link: "#" },
        { text: "Listas", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    coordinador: [
        { text: "Inicio", link: "homepage.html" },
        { text: "Alertas", link: "#" },
        { text: "Programación de asistencia", link: "#" },
        { text: "Carga de imágenes", link: "#" },
        { text: "Generación de informes", link: "#" },
        { text: "Correcciones", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    secretaria: [
        { text: "Inicio", link: "homepage.html" },
        { text: "Registro de estudiantes", link: "#" },
        { text: "Gestión de excusas", link: "#" },
        { text: "Eliminación de datos", link: "#" },
        { text: "Generación de informes", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    rector: [
        { text: "Inicio", link: "homepage.html" },
        { text: "Alertas", link: "#" },
        { text: "Programación de asistencia", link: "#" },
        { text: "Carga de imágenes", link: "#" },
        { text: "Generación de informes", link: "#" },
        { text: "Correcciones", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
};

// Generar el menú dinámico
function renderMenu(role) {
    menuNav.innerHTML = ""; // Limpiar el menú antes de agregar nuevas opciones
    menuOptions[role].forEach(option => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = option.link;
        a.textContent = option.text;
        li.appendChild(a);
        menuNav.appendChild(li);

        // Cerrar el menú al hacer clic en una opción
        a.addEventListener("click", () => {
            menuOverlay.classList.remove("active");
        });
    });
}

// Inicializar el menú con el rol del usuario
renderMenu(userRole);

// Abrir menú
openMenu.addEventListener("click", function () {
    menuOverlay.classList.add("active");
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener("click", (event) => {
    if (!menuOverlay.contains(event.target) && !openMenu.contains(event.target)) {
        menuOverlay.classList.remove("active");
    }
});

// Validar y enviar el formulario
document.getElementById("excuseForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío real del formulario

    // Validar que se haya seleccionado al menos una materia
    const checkboxes = document.querySelectorAll(".attendance-table input[type='checkbox']");
    let atLeastOneChecked = false;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            atLeastOneChecked = true;
        }
    });

    if (!atLeastOneChecked) {
        alert("Debes seleccionar al menos una materia.");
        return;
    }

    // Validar que se haya subido un archivo
    const fileInput = document.getElementById("excuse-file");
    if (fileInput.files.length === 0) {
        alert("Debes adjuntar un archivo de excusa.");
        return;
    }

    // Si todo está bien, mostrar un mensaje de éxito
    alert("Excusa enviada correctamente.");
    // Aquí podrías agregar lógica para enviar los datos al servidor
});