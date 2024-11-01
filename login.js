function redirectToLogin(role) {
    if (role === 'user') {
        window.location.href = 'Login.html'; 
    } else if (role === 'admin') {
        window.location.href = 'admin-login.html'; 
    }
}

function togglePasswordVisibility(passwordFieldId, iconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const icon = document.getElementById(iconId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    icon.src = type === 'password' ? 'img/eye-icon.png' : 'img/eye-open.png';
}

const loginPasswordField = document.getElementById('login-password');
if (loginPasswordField) {
    document.getElementById('toggle-login-password').addEventListener('click', function() {
        togglePasswordVisibility('login-password', 'toggle-login-password');
    });
}

const signupPasswordField = document.getElementById('password');
if (signupPasswordField) {
    document.getElementById('toggle-password').addEventListener('click', function() {
        togglePasswordVisibility('password', 'toggle-password');
    });
}

document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup functionality coming soon!");
});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login functionality coming soon!");
});
