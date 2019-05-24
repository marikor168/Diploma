function modalGift() {
    let modal = document.querySelector('.popup-gift'),
        close = document.querySelector('.popup-gift .popup-close'),
        gift = document.querySelector('.fixed-gift');

    modal.classList.add('animated');
    modal.classList.add('fadeIn');

    gift.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        gift.style.display = 'none';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        gift.style.display = 'block';
    });

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-gift')) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});
}

module.exports = modalGift;