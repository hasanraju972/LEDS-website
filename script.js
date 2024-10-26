function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('user-info-section').style.display = 'none';
    document.getElementById('report-section').style.display = 'none';
}

function showRegistrationForm() {
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('user-info-section').style.display = 'none';
    document.getElementById('report-section').style.display = 'none';
}

function showForgotPasswordForm() {
    document.getElementById('forgot-password-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('user-info-section').style.display = 'none';
    document.getElementById('report-section').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    alert("Login successful!");
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('user-info-section').style.display = 'block';
    document.getElementById('report-section').style.display = 'block';
    document.getElementById('login-toggle').style.display = 'none'; // Hide the Login button
    populateUserInfo();
}

function handleRegistration(event) {
    event.preventDefault();
    alert("Registration successful!");
    showLoginForm();
}

function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Password reset link sent to ${email}`);
    showLoginForm();
}

function handleUpdateInfo(event) {
    event.preventDefault();
    alert("Information updated successfully!");
}

function populateUserInfo() {
    // Dummy data for demonstration, replace with real data if available
    document.getElementById('user-fullname').value = "Hasan Ahammad";
    document.getElementById('user-fathername').value = "Abdul Malek";
    document.getElementById('user-mothername').value = "Nur Nahar Begum";
    document.getElementById('user-nid').value = "123456789";
    document.getElementById('user-email').value = "hasanraju972@gmail.com";
    document.getElementById('user-phone').value = "01609988302";
    document.getElementById('user-address').value = "Noakhali, Chattogram, Bangladesh";
}

function updateProfilePicture(event) {
    const profilePicture = document.getElementById('profile-picture');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicture.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
