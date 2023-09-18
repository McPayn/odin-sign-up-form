// Ensures passwords match before submitting
var first_name;
var last_name;

function confirmPassword() {
    const password = document.getElementById('first-password');
    const check_password = document.getElementById('second-password');
    const error_message = document.querySelector('.error');
    if (password.value === check_password.value) {
        password.style.borderBottomColor = 'green';
        check_password.style.borderBottomColor = 'green';
        error_message.innerHTML = '';
    } else {
        password.style.borderBottomColor = 'red';
        check_password.style.borderBottomColor = 'red';
        error_message.innerHTML = 'Passwords do not match!'
    }
}

function login() {
    first_name = document.getElementById('first-name').value;
    last_name = document.getElementById('last-name').value;
}