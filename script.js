// Ensures passwords match before submitting
function confirmPassword() {
    const password = document.getElementById('first-password');
    const check_password = document.getElementById('second-password');
    if (password.value === check_password.value) {
        // Alert was to check for correct functionality.
        // Will change CSS property to make the user notification less intrusive
        alert('Passwords match!');
    } else {
        alert('Passwords do not match!');
    }
}