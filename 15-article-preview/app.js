const linkShareDesktop = document.querySelector('.icon__share');
const toolTipDesktop = document.querySelector('.tooltip--desktop');
const userElement = document.querySelector('.user');

const footerContent = document.querySelector('.footer__content');





linkShareDesktop.addEventListener('click', () => {
  toolTipDesktop.classList.toggle('fadeInFromButtom');


  if (document.documentElement.clientWidth < 850) {
    userElement.classList.add('hide');

    // footerContent.style.display = 'none';
    // linkShareDesktop.style.display = 'none';
    // linkShareDesktop.classList.add('icon__share--mobile')
  }
});
