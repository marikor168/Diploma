function modalDesign() {
    let modal = document.querySelector('.popup-design'),
        close = document.querySelector('.popup-design .popup-close'),
        btnDesign = document.querySelectorAll('.button-design');
   
    modal.classList.add('animated');
    modal.classList.add('fadeIn');        

    btnDesign.forEach((item) => {
        item.addEventListener('click', () => {
            modal.style.display = 'block'; 
            document.body.style.overflow = 'hidden'; 
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    });

    // modal.addEventListener('click', (event) => {
    //     if (!event.target.classList.contains('popup-content')) {

    //         modal.style.display = 'none';
    //         document.body.style.overflow = '';
    //     }
    // });
}

module.exports = modalDesign;