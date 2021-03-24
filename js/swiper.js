var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 4,
    slidesPerGroup: 1,
    speed: 800,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        // when window width is >= 320px
        600: {
          slidesPerView: 2,
          spaceBetween: 4,
          slidesPerGroup: 2,
        }
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,        
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });    