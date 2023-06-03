const formElement = document.querySelector('form');
const emailInput = document.querySelector('input');
const errorMessage = document.querySelector('.error');
const errorIconElement = document.querySelector('.error__icon');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();


})

emailInput.addEventListener('input', (e) => {

  if (e.target.validationMessage.length === 0) {
    errorMessage.style.visibility = 'hidden';
    errorIconElement.style.visibility = 'hidden';
  } else {
    errorMessage.style.visibility = 'visible';
    errorIconElement.style.visibility = 'visible';
  }
})