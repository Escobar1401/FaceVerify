// Simulación del rol del usuario (esto luego vendrá del backend)
const userRole = "profesor"; // Puede ser "admin", "profesor" o "estudiante"

// Seleccionar elementos
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuNav = document.querySelector(".menu-nav ul");

// Opciones de menú según el rol del usuario
const menuOptions = {
    profesor: [
        { text: "Inicio", link: "#" },
        { text: "Gestión de asistencia", link: "#" },
        { text: "Consultas", link: "#" },
        { text: "Registros manuales", link: "#" },
        { text: "Observaciones", link: "#" },
        { text: "Listas", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    estudiante: [
        { text: "Inicio", link: "#" },
        { text: "Justificación de inasistencias", link: "#" },
        { text: "Excusas", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Soporte técnico", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    secretaria: [
        { text: "Inicio", link: "#" },
        { text: "Registro de estudiantes", link: "#" },
        { text: "Gestión de excusas", link: "#" },
        { text: "Eliminación de datos", link: "#" },
        { text: "Generación de informes", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    tutor: [
        { text: "Inicio", link: "#" },
        { text: "Perfiles de estudiantes", link: "#" },
        { text: "Notificaciones", link: "#" },
        { text: "Gestión de excusas", link: "#" },
        { text: "Listas", link: "#" },
        { text: "Estadísticas", link: "#" },
        { text: "Cerrar sesión", link: "#" },
    ],
    coordinador: [
        { text: "Inicio", link: "#" },
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
    });
}

// Inicializar el menú con el rol del usuario
renderMenu(userRole);

// Abrir menú
openMenu.addEventListener("click", function () {
    menuOverlay.style.display = "flex";
});

// Cerrar menú
closeMenu.addEventListener("click", function () {
    menuOverlay.style.display = "none";
});