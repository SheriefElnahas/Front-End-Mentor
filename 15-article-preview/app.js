const shareIcon = document.querySelector('#link-share');
const toolTip = document.querySelector('.tooltip');


shareIcon.addEventListener('click', () => {
  console.log('hey');
  // toolTip.style.opacity = 1;
  // toolTip.style.animation = 'animate-tooltip 1s linear;'
  toolTip.classList.toggle('fadeInFromButtom')
})