// script.js
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate email
    const emailValue = emailInput.value.trim();
    if (!emailValue.match(/^[\w-.]+@[\w-]+(\.[\w-]+)*$/)) {
        emailError.textContent = 'Invalid email address';
        return;
    }

    // Validate password
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        return;
    }

    // All checks passed
    emailError.textContent = '';
    passwordError.textContent = '';
    alert('Successful signup!'); // Show confirmation

    // Clear input values
    emailInput.value = '';
    passwordInput.value = '';
});
