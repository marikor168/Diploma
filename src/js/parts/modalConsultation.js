function modalConsultation() {
    let modal = document.querySelector('.popup-consultation'),
        close = document.querySelector('.popup-consultation .popup-close'),
        btnConsult = document.querySelectorAll('.button-consultation');
   
    modal.classList.add('animated');
    modal.classList.add('fadeIn');        

    btnConsult.forEach((item) => {
        item.addEventListener('click', () => {
            modal.style.display = 'block'; 
            document.body.style.overflow = 'hidden'; 
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    });

    modal.addEventListener('click', (event) => {
            if (event.target.classList.contains('popup-consultation')) {    
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
}

module.exports = modalConsultation;