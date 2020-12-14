const menuMobile = document.querySelector('.menu-mobile');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const info = document.querySelector('.info');
const play = document.querySelector('.play');
const menuMob = document.querySelector('.menu-mob');
menuMobile.addEventListener ('click', (event) => {
    menuMob.classList.toggle('is-open');
    info.classList.toggle('is-open');
    menuButton.classList.toggle('menu-button-active');
});
const menuLinks = document.querySelectorAll('.menu-link');
const height_win = window.innerHeight;
const playCol = document.querySelector ('.play-col');
let scroll = function (event) {
    event.preventDefault();
    console.log(height_win);
        scrollTo({
            top: height_win,
            behavior: 'smooth'
        });
}
menuLinks.forEach((ml) => {
    ml.addEventListener('click', scroll);
});

play.addEventListener('click', (event) => {
    sliderMain.slideNext(1000);
    sliderMain.autoplay.start();
    play.style = "display: none;";
});

let slider = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    watchOverflow: false,
    centeredSlides: true,
    spaceBetween: 100,
    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
    },
    breakpoints: {
        800: {
            spaceBetween: 30,
            width: 1680,
            centeredSlides: true,
            slidesPerView: 3,
        }
    },
  });
let sliderMain = new Swiper('.swiper-container-main', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 3000,
    autoplay: false,
    watchOverflow: false,
    speed: 1000,
    autoplay: {
        delay: 2500,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
});
sliderMain.autoplay.stop();
playCol.addEventListener('click', (event) => {
    if (event.target.id == "playcol") {
        sliderMain.autoplay.stop();
        play.style = "";
    }
})