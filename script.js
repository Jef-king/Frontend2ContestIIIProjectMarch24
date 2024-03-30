// script.js
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let emailError = document.querySelector('#erEmail');
let passwordError = document.querySelector('#erPassword');
let signupForm = document.querySelector('#signUp');
let successMessage=document.querySelector('#success');
let submitBtn=document.querySelector("#checkSubmit")

emailInput.addEventListener("blur", () => {
    const validate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const email = emailInput.value;
    if (!validate.test(email)) {
      erEmail.textContent = "Make sure email is more than 3 characters and has @ and a .";
      submitBtn.disabled = true;
      successMessage.textContent=''
    } else {
      erEmail.textContent = "";
      emailContainer.style.borderColor = "";
      submitBtn.disabled = false;
    }
  });
passwordInput.addEventListener("blur", () => {
    let passwordValue=passwordInput.value;
    if (passwordValue.length < 8) {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        submitBtn.disabled = true;
        successMessage.textContent=''
    }else{
        passwordError.textContent = '';
        submitBtn.disabled = false;
    }
  });


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent='All good to go'
    emailInput.value = '';
    passwordInput.value = '';
});