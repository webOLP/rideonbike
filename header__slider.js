const nextSlideButton = document.querySelector('.header__controller-button-next');
const prevSlideButton = document.querySelector('.header__controller-button-prev');
const headerBackground = document.querySelector('.header__background');
let slideNumber = document.querySelector('.header__controller-frst-num');

function nextSlide() {
    console.log('aaa')
    if(slideNumber.textContent == 3) {
        headerBackground.style.backgroundImage = "url('./images/header__slide1.png')";
        slideNumber.textContent = 1 ;
    } else {
    if (slideNumber.textContent==1){
        console.log('aaa1')
        headerBackground.style.backgroundImage = "url('./images/header__slide2.png')";
        } else  
        {
            headerBackground.style.backgroundImage = "url('./images/header__slide3.png')";
        }
    slideNumber.textContent = 1 + Number(slideNumber.textContent);
}
}

function prevSlide() {
    if(slideNumber.textContent==1) {
        headerBackground.style.backgroundImage = "url('./images/header__slide3.png')";
        slideNumber.textContent = 3 ;
    } else {
    if (slideNumber.textContent==3){
    headerBackground.style.backgroundImage = "url('./images/header__slide2.png')";
    } else 
    {
        headerBackground.style.backgroundImage = "url('./images/header__slide1.png')";
    }
    slideNumber.textContent = Number(slideNumber.textContent) - 1;
}
}

nextSlideButton.addEventListener('click', nextSlide);
prevSlideButton.addEventListener('click', prevSlide);
setInterval(nextSlide, 8000);

