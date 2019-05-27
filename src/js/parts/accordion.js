let accordion = () => {
    let accordionHeadings = document.querySelectorAll('.accordion-heading'),
        accordionBlocks = document.querySelectorAll('.accordion-block');

    accordionBlocks.forEach((item) => {
        item.style.display = 'none';
        item.classList.add('animated');
        item.classList.add('fadeIn');
    });

//   accordionHeadings.__proto__.forEach = [].__proto__.forEach;

let activePanel;
accordionHeadings.forEach((item, i, accordionHeadings) => {
  item.addEventListener('click', function(e) {
    //show new thingy;
    this.classList.add('ui-accordion-header-active');
    this.nextElementSibling.classList.add('ui-accordion-content-active');
    this.nextElementSibling.style.display = 'block';

    //hide old thingy
    if (activePanel) {
        activePanel.classList.remove('ui-accordion-header-active');
        activePanel.nextElementSibling.classList.remove('ui-accordion-content-active');
        activePanel.nextElementSibling.style.display = 'none';
    }
    //update thingy
    activePanel = (activePanel === this) ? 0 : this;
  });
});
};

module.exports = accordion;