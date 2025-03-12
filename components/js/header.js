// Cargar el header en cada página
document.addEventListener("DOMContentLoaded", function () {
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            initMenu(); // Inicializa el menú después de cargar el header
        });
});

// Función para inicializar el menú (mismo código de antes)
function initMenu() {
    const userRole = localStorage.getItem("userRole") || "estudiante";

    const openMenu = document.getElementById("openMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const menuNav = document.querySelector(".menu-nav ul");

    const menuOptions = {
        estudiante: [
            { text: "Inicio", link: "homepage.html" },
            { text: "Justificación de inasistencias", link: "excuseform.html" },
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

    // Función para verificar permisos
    function checkPermission(link) {
        const allowedLinks = menuOptions[userRole].map(option => option.link);
        if (!allowedLinks.includes(link)) {
            alert("No tienes permiso para acceder a esta funcionalidad.");
            return false;
        }
        return true;
    }

    // Generar el menú dinámico
    function renderMenu(role) {
        menuNav.innerHTML = ""; // Limpiar el menú antes de agregar nuevas opciones
        menuOptions[role].forEach(option => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = option.link;
            a.textContent = option.text;
            a.addEventListener("click", (e) => {
                if (!checkPermission(option.link)) {
                    e.preventDefault(); // Evitar que el enlace funcione
                }
                menuOverlay.classList.remove("active");
            });
            li.appendChild(a);
            menuNav.appendChild(li);
        });
    }

    renderMenu(userRole);

    // Función para actualizar el menú
    function updateMenu() {
        const newRole = localStorage.getItem("userRole") || "estudiante";
        renderMenu(newRole);
    }

    // Escuchar cambios en el localStorage (opcional, solo si el rol cambia en la misma sesión)
    window.addEventListener("storage", (event) => {
        if (event.key === "userRole") {
            updateMenu();
        }
    });


    openMenu.addEventListener("click", function () {
        menuOverlay.classList.add("active");
    });

    document.addEventListener("click", (event) => {
        if (!menuOverlay.contains(event.target) && !openMenu.contains(event.target)) {
            menuOverlay.classList.remove("active");
        }
    });

    // Verificar permisos al cargar la página
    const currentPage = window.location.pathname.split("/").pop();
    const allowedPages = menuOptions[userRole].map(option => option.link.split("/").pop());
    if (!allowedPages.includes(currentPage)) {
        alert("No tienes permiso para acceder a esta página.");
        window.location.href = "homepage.html"; // Redirigir a la página principal
    }
}