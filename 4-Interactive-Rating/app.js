const componentRates = document.querySelectorAll('.component__rate');
let rateValue = 0;


componentRates.forEach((rateButton) => {
  rateButton.addEventListener('click', (e) => {
    // ADDS AND REMOVES ACTIVE CLASS ON TABLINKS
    componentRates.forEach(function (rateButton) {
      rateButton.classList.remove('selected');
    });
    rateButton.classList.add('selected');

    rateValue = rateButton.textContent;
  });
});


const submitButton = document.querySelector('.component__btn');
const submitComponent = document.querySelector('.component--submit');
const thanksComponent = document.querySelector('.component--thanks');
const alertText = document.querySelector('.component__alert');


submitButton.addEventListener('click', () => {
  // 1- Hide Rate Component
  submitComponent.style.display = 'none';

  // 2- Insert rate value in alert component
  alertText.textContent = `You selected ${rateValue} out of 5`;


  // 3- Show alert component
  thanksComponent.style.display = 'block';

  
})

