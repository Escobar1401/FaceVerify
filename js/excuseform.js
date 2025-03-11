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
    event.preventDefault();
});

document.getElementById("excuseButton").addEventListener("click", function () {
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

    
    if (!studentname) {
        studentnameError.style.display = "block";
    } else {
        studentnameError.style.display = "none";
    }

    if (!studentid) {
        studentidError.style.display = "block";
    } else {
        studentidError.style.display = "none";
    }

    if (!studentemail) {
        studentemailError.style.display = "block";
    } else {
        studentemailError.style.display = "none";
    }

    if (!tutorname) {
        tutornameError.style.display = "block";
    } else {
        tutornameError.style.display = "none";
    }

    if (!tutorphone) {
        tutorphoneError.style.display = "block";
    } else {
        tutorphoneError.style.display = "none";
    }

    if (!absencedate) {
        absencedateError.style.display = "block";
    } else {
        absencedateError.style.display = "none";
    }

    if ( studentname && studentid && studentemail && tutorname && tutorphone && absencedate) {
        // Si todo está bien, mostrar un mensaje de éxito
        alert("Excusa enviada correctamente.");
        // Limpiar el formulario
        document.getElementById("excuseForm").reset();
    }
});

