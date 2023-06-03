const formElement = document.querySelector('form');
const firstNameInputElement = document.querySelector('#firstname');
const firstNameError = document.querySelector('#firstname-error');
const errorIcons = document.querySelectorAll('.error__icon');
console.log(errorIcons);

firstNameInputElement.addEventListener('input', (e) => {
  if (e.target.value.length > 0) {
    firstNameError.style.visibility = 'hidden';
    e.target.nextElementSibling.nextElementSibling.style.visibility = 'hidden';
  }
})


const lastNameInputElement = document.querySelector('#lastname');
const lastNameError = document.querySelector('#lastname-error')
lastNameInputElement.addEventListener('input', (e) => {
  if (e.target.value.length > 0) {
    lastNameError.style.visibility = 'hidden';
    e.target.nextElementSibling.nextElementSibling.style.visibility = 'hidden';
  }


})


const emailInputElement = document.querySelector('#email');
const emailError = document.querySelector('#email-error')

emailInputElement.addEventListener('input', (e) => {

  if (e.target.validationMessage.length === 0) {
    emailError.style.visibility = 'hidden';
    e.target.nextElementSibling.nextElementSibling.style.visibility = 'hidden';
  }

})

const passwordInputElement = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

passwordInputElement.addEventListener('input', (e) => {
  if (e.target.value.length > 0) {
    passwordError.style.visibility = 'hidden';
    e.target.nextElementSibling.nextElementSibling.style.visibility = 'hidden';
  }
})

formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  if (firstNameInputElement.value.length === 0) {
    firstNameError.style.visibility = 'visible';
    firstNameInputElement.nextElementSibling.nextElementSibling.style.visibility = 'visible';

  }

  if (lastNameInputElement.value.length === 0) {
    lastNameError.style.visibility = 'visible';
    lastNameInputElement.nextElementSibling.nextElementSibling.style.visibility = 'visible';
  }

  if (emailInputElement.value.length === 0) {
    emailError.style.visibility = 'visible';
    emailInputElement.nextElementSibling.nextElementSibling.style.visibility = 'visible';
  }

  if (passwordInputElement.value.length === 0) {
    passwordError.style.visibility = 'visible';
    passwordInputElement.nextElementSibling.nextElementSibling.style.visibility = 'visible';
  }

})

