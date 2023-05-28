const formElement = document.querySelector('form');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
});

const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');

const errorAlert = document.querySelector('.form__error');

buttonElement.addEventListener('click', () => {
  console.log(inputElement.value);

  if (!inputElement.value) {
    console.log('please provide value!');
    errorAlert.textContent = 'Please Provide An Email Address!';
    errorAlert.style.display = 'block';

    // setTimeout(() => {
    //   errorAlert.style.display = 'none';
    // }, 2000)
  }
});
