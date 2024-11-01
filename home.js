// Image Slider JavaScript
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = 2;

function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 6000);



//NAVBAR Text Carousel JavaScript
let currentTextIndex = 0;
const textItems = document.querySelectorAll('.carousel-item');
const totalTextItems = textItems.length;

function showText(index) {
    textItems.forEach((item, idx) => {
        item.classList.toggle('active', idx === index);
    });
}

function nextText() {
    currentTextIndex = (currentTextIndex + 1) % totalTextItems;
    showText(currentTextIndex);
}

// Show the first text item initially
showText(currentTextIndex);

// Auto switch text every 3 seconds
setInterval(nextText, 5000);




let currentTwoColumnIndex = 0;
const totalTwoColumnSlides = document.querySelectorAll('.two-column-slide').length;
const dots = document.querySelectorAll('.dot');

function showTwoColumnSlide(index) {
    const offset = -index * 100;
    document.querySelector('.two-column-slides').style.transform = `translateX(${offset}%)`;
    currentTwoColumnIndex = index;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentTwoColumnIndex);
    });
}

function currentTwoColumnSlide(index) {
    showTwoColumnSlide(index);
}

// Initial display
showTwoColumnSlide(0);




// NAV BAR SLIDING MENU
function toggleCategoriesMenu() {
    const categoriesMenu = document.querySelector('.categories-menu');
    const isMenuOpen = categoriesMenu.style.left === '0px';

    if (isMenuOpen) {
        categoriesMenu.style.left = '-300px'; // Hide menu
    } else {
        categoriesMenu.style.left = '0px'; // Show menu
    }
}

//NAVBAR Toggle the cart visibility
function toggleCart() {
    const cartContainer = document.getElementById('cartContainer');
    const isCartOpen = cartContainer.style.right === '0px';

    if (isCartOpen) {
        cartContainer.style.right = '-300px'; // Hide cart
    } else {
        cartContainer.style.right = '0px'; // Show cart
    }
}


