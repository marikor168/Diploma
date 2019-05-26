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

    // console.log(body.getBoundingClientRect());
    // console.log(Math.abs(body.getBoundingClientRect().y) + body.getBoundingClientRect().bottom + 1);
    // console.log(body.clientHeight);
    console.log(body.scrollTop);
    window.addEventListener('scroll', () => {

        console.log(window.pageYOffset);
        console.log(document.documentElement.scrollTop);
        console.log(Math.abs(body.getBoundingClientRect().y));
    });

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
            gift.style.display = 'block';
        }
        
    });

    window.addEventListener('scroll', () => {

        if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && !clickBtn) {
            modalOpen(modalGift);
            gift.style.display = 'none'; 
        }
    });
};

module.exports = modals;