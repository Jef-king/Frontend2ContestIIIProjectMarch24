let email_box = document.getElementById('email')
let password_box= document.getElementById('password');
let emailError = document.getElementById('email-error');
let passwordError= document.getElementById('password-error');
let signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = email_box.value.trim();
    if (!emailValue.match(/^[\w-.]+@[\w-]+(\.[\w-]+)*$/)) {
        emailError.textContent = 'Invalid email address';
        return;
    }
    const passwordValue = password_box.value.trim();
    if (passwordValue.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        return;
    }
    emailError.textContent = '';
    passwordError.textContent = '';
    alert('Successful signup!');
    emailInput.value = '';
    passwordInput.value = '';
});
