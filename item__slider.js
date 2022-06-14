const nextSlideButton = document.querySelector('.presentation__button-next');
const prevSlideButton = document.querySelector('.presentation__button-prev');
const presentationBackground = document.querySelector('.presentation__image');
let slideNumber = 1;

function nextSlide() {
    if(slideNumber == 1) {
        presentationBackground.style.backgroundImage = "url('./images/shosse1_reverse.png')";
        slideNumber = 1 + slideNumber;
    } return
}

function prevSlide() {
    if(slideNumber == 2) {
        presentationBackground.style.backgroundImage = "url('./images/shosse1.png')";
        slideNumber = slideNumber - 1;
    } return
}

nextSlideButton.addEventListener('click', nextSlide);
prevSlideButton.addEventListener('click', prevSlide);
