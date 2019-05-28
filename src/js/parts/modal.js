let modals = () => {

    let modalDesign = document.querySelector('.popup-design'),
        modalConsult = document.querySelector('.popup-consultation'),
        modalGift = document.querySelector('.popup-gift'),
        gift = document.querySelector('.fixed-gift');
    
    let modalAction = (modal, display, overflow) => {
        modal.style.display = display;
        document.body.style.overflow = overflow;      
    };

    modalDesign.classList.add('animated');
    modalDesign.classList.add('fadeIn');
    modalConsult.classList.add('animated');
    modalConsult.classList.add('fadeIn');
    gift.classList.add('animated');
    modalGift.classList.add('animated');
    modalGift.classList.add('fadeIn');

    let clickBtn = false;

    document.body.addEventListener('click', (event) => {
        clickBtn = true;
        if (event.target.classList.contains('button-design')) {
            modalAction(modalDesign, 'block', 'hidden');
        }
        if (event.target.classList.contains('button-consultation')) {
            modalAction(modalConsult, 'block', 'hidden');
        }
        if (event.target.classList.contains('fixed-gift')) {
            modalAction(modalGift, 'block', 'hidden');
            gift.style.display = 'none';
        }
        if (event.target.classList.contains('popup-design') || event.target.classList.contains('popup-close')) {
            modalAction(modalDesign, 'none', '');
        }
        if (event.target.classList.contains('popup-consultation') || event.target.classList.contains('popup-close')) {
            modalAction(modalConsult, 'none', '');
        }
        if (event.target.classList.contains('popup-gift') || event.target.classList.contains('popup-close')) {
            modalAction(modalGift, 'none', '');
        }
        
    });

    window.addEventListener('scroll', () => {
        if (((window.innerHeight + Math.abs(document.body.getBoundingClientRect().top)) >= document.body.offsetHeight) && !clickBtn) {
            modalAction(modalGift, 'block', 'hidden');
            gift.style.display = 'none'; 
        }
    });

    setTimeout((modal) => {
        if (modalDesign.style.display == '' && modalConsult.style.display == '' && modalGift.style.display == '') {
            modalAction(modalConsult, 'block', 'hidden');
        }
    }, 60000);

};

module.exports = modals;