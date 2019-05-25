let feedbackSlider = () => {
    let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');

    slides.forEach((item) => {
        item.classList.add('animated');
    });

    let showSlides = (n) => {
        
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';

        slides.forEach((item) => {
            item.classList.remove('fadeInLeft');
            item.classList.add('fadeInRight');
        });
    };

    showSlides(slideIndex);

    let plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    prev.addEventListener('click', () => {
        plusSlides(-1);

        slides[slideIndex - 1].classList.remove('fadeInRight');
        slides[slideIndex - 1].classList.add('fadeInLeft');
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    setInterval(plusSlides, 15000, 1);
};

module.exports = feedbackSlider;