let mainSlider = () => {
    let slideIndex = 1,
        slides = document.querySelectorAll('.main-slider-item');

    slides.forEach((item) => {
        item.classList.add('animated');
        item.classList.add('fadeInDown');
    });

    let showSlides = (n) => {

        if (n > slides.length) {
            slideIndex = 1;
        }
        
        slides.forEach((item) => {
            item.style.display = 'none';
        });
        slides[slideIndex - 1].style.display = 'block';     
    };

    showSlides(slideIndex);

    let plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    setInterval(plusSlides, 5000, 1);
   
};

module.exports = mainSlider;