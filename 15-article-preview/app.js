const shareIcon = document.querySelector('.icon__share');
const toolTipDesktop = document.querySelector('.tooltip');
const userElement = document.querySelector('.user');

const footerContent = document.querySelector('.footer__content');



shareIcon.addEventListener('click', () => {
  toolTipDesktop.classList.toggle('fadeInFromButtom');
  if (document.documentElement.clientWidth < 850) {
    userElement.classList.add('hide');
  }
});
