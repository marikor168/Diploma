let modals = () => {

    let modalDesign = document.querySelector('.popup-design'),
        modalConsult = document.querySelector('.popup-consultation'),
        modalGift = document.querySelector('.popup-gift'),
        gift = document.querySelector('.fixed-gift'),
        body = document.querySelector('body');

    let modalOpen = (modal) => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    let modalClose = (modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    modalDesign.classList.add('animated');
    modalDesign.classList.add('fadeIn');
    modalConsult.classList.add('animated');
    modalConsult.classList.add('fadeIn');
    gift.classList.add('animated');
    modalGift.classList.add('animated');
    modalGift.classList.add('fadeIn');

    let clickBtn = false;

    body.addEventListener('click', (event) => {
        clickBtn = true;
        if (event.target.classList.contains('button-design')) {
            modalOpen(modalDesign);
        }
        if (event.target.classList.contains('button-consultation')) {
            modalOpen(modalConsult);
        }
        if (event.target.classList.contains('fixed-gift')) {
            modalOpen(modalGift);
            gift.style.display = 'none';
        }
        if (event.target.classList.contains('popup-design') || event.target.classList.contains('popup-close')) {
            modalClose(modalDesign);
        }
        if (event.target.classList.contains('popup-consultation') || event.target.classList.contains('popup-close')) {
            modalClose(modalConsult);
        }
        if (event.target.classList.contains('popup-gift') || event.target.classList.contains('popup-close')) {
            modalClose(modalGift);
        }
        
    });

    window.addEventListener('scroll', () => {
        if (((window.innerHeight + Math.abs(body.getBoundingClientRect().top)) >= document.body.offsetHeight) && !clickBtn) {
            modalOpen(modalGift);
            gift.style.display = 'none'; 
        }
    });

    setTimeout((modal) => {
        if (modalDesign.style.display == '' && modalConsult.style.display == '' && modalGift.style.display == '') {
            modalOpen(modalConsult); 
        }
    }, 60000);

};

module.exports = modals;