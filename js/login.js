document.getElementById("loginButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("user-type").value;
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const userTypeError = document.getElementById("user-type-error");

    
    if (!userType) {
        userTypeError.style.display = "block";
    } else {
        userTypeError.style.display = "none";
    }

    if (!email) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }

    if (!password) {
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }

    if (email && password) {
        localStorage.setItem("userRole", userType);
        window.location.href = "../html/homepage.html";
    }
});
