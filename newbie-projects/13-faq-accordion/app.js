const faqAccordions = document.querySelectorAll('.faq__accordion');

faqAccordions.forEach((faqAccordion) => {
  faqAccordion.addEventListener('click', (e) => {
    const angleDownIcon = e.currentTarget.children[0];
    const accordionHeading = e.currentTarget.children[1];
    const accordionContent = e.currentTarget.children[2];
    const angleUpIcon = e.currentTarget.children[3];

    if (accordionHeading.classList.contains('open')) {
      accordionContent;
    }

    if (accordionHeading.classList.contains('open')) {
      accordionHeading.classList.remove('open');
      accordionContent.classList.remove('show');

      angleDownIcon.style.display = 'block';
      angleUpIcon.style.display = 'none';
    } else {
      accordionHeading.classList.add('open');
      accordionContent.classList.add('show');

      angleDownIcon.style.display = 'none';
      angleUpIcon.style.display = 'block';
    }
  });
});
