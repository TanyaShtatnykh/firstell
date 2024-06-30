const parentSwiper = new Swiper('.p-slider__area', {
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});