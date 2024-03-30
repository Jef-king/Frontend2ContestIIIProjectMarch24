// script.js
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let emailError = document.querySelector('#erEmail');
let passwordError = document.querySelector('#erPassword');
let signupForm = document.querySelector('#signUp');
let successMessage=document.querySelector('#success');

emailInput.addEventListener("blur", () => {
    const validate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const email = emailInput.value;
    if (!validate.test(email)) {
      erEmail.textContent = "Make sure email is more than 3 characters and has @ and a .";
      successMessage.textContent='';
    } else {
      erEmail.textContent = "";
      successMessage.textContent='';
    }
  });
passwordInput.addEventListener("blur", () => {
    let passwordValue=passwordInput.value;
    if (passwordValue.length < 8) {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        successMessage.textContent='';
    }else{
        passwordError.textContent = '';
        successMessage.textContent='';
    }
  });


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = emailInput.value.trim();
    if (!emailValue.match(/^[\w-.]+@[\w-]+(\.[\w-]+)*$/)) {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
        return;
    } 
    let passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 8) {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        return;
    } 
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent='All good to go';
    emailInput.value = '';
    passwordInput.value = '';
});