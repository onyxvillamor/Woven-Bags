
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const slides = document.querySelectorAll('.carousel .slide');

    let currentSlide = 0;
    const intervalTime = 3000;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.setAttribute('data-active', '');
            } else {
                slide.removeAttribute('data-active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        nextSlide();
        autoSlide = setInterval(nextSlide, intervalTime);
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        prevSlide();
        autoSlide = setInterval(nextSlide, intervalTime);
    });

    let autoSlide = setInterval(nextSlide, intervalTime);

    showSlide(currentSlide); 

