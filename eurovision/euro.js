// Логіка роботи автоматичного слайдера
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
const totalSlides = slides.length;
const slideInterval = 4000; // Час показу одного слайда (4 секунди)
let autoSlideTimer;

function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
    currentIndex += direction;

    // Зациклення слайдера
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    updateSlidePosition();
    resetTimer(); // Скидаємо таймер при ручному кліку
}

function startTimer() {
    autoSlideTimer = setInterval(() => {
        moveSlide(1);
    }, slideInterval);
}

function resetTimer() {
    clearInterval(autoSlideTimer);
    startTimer();
}

// Запуск автоматичного перемикання при завантаженні сторінки
startTimer();


ScrollReveal().reveal('.anim-right', {
    origin: 'right',
    distance: '1000px',
    duration: 2000,
    delay: 1000,
});
ScrollReveal().reveal('.anim-left', {
    origin: 'left',
    distance: '1000px',
    duration: 2000,
    delay: 1000,
    reset: 'true'
});
ScrollReveal().reveal('.origin-country', {
    origin: 'top',
    distance: '100px',
    duration: 2000,
    delay: 1000,
    interval:100,
    reset: 'true'
});


// Ховаємо прелоадер після повного завантаження сторінки (всіх картинок і стилів)
window.addEventListener('load', function() {
    const preloader = document.getElementById('page-preloader');
    
    // Додаємо невелику штучну затримку (наприклад, 400мс), щоб анімація не мигтіла занадто швидко
    setTimeout(() => {
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000);
});
