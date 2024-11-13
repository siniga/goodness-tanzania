let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.slide-indicator');

// Function to show the current slide
function showSlide(index) {
    // Hide all slides and remove "active" from indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Show the selected slide and add "active" to corresponding indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

// Automatically change slides every 5 seconds
function autoSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Change to a specific slide when indicator is clicked
function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

// Initial display
showSlide(currentSlideIndex);
setInterval(autoSlide, 5000); // 5 seconds interval
