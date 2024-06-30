const childrenSwiper = new Swiper('.p-slide__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
  },
  effect: 'flip',
  flipEffect: {
    slideShadows: true,
    limitRoration: true,
  },
});