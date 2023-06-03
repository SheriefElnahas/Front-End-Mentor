const formElement = document.querySelector('form');
const buttonElement = document.querySelector('button');
const emailInputElement = document.querySelector('input');
const emailInputErrorElement = document.querySelector('.input__error');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
})

buttonElement.addEventListener('click', (e) => {

  if (emailInputElement.validationMessage.length > 0) {
    emailInputErrorElement.style.visibility = 'visible';
  }


})

emailInputElement.addEventListener('input', (e) => {
  if (e.target.validationMessage.length === 0) {
    emailInputErrorElement.style.visibility = 'hidden';
  }
})