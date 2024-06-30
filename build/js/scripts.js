


$(function () {
  $('.header__burger-btn').on('click', function() {
    $(this).toggleClass('header__burger-btn--open');
    $('.header__menu').toggleClass('header__menu--open');
  });
  $('.header__menu-link').on('click', function() {
    if ($('.header__burger-btn').hasClass('header__burger-btn--open')) {
      $('.header__burger-btn').removeClass('header__burger-btn--open');
      $('.header__menu').removeClass('header__menu--open');
    }
  })
});

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

$(function () {
  $('.portfolio__slider').owlCarousel({
    items: 1,
    loop: false,
    autoplay: false,
    smartSpeed: 1500,
    autoHeight:true,
    infiniti: false,
    navText: ["<img src='img/arrow-back.svg'>", "<img src='img/arrow-next.svg'>"],
    responsive: {
      0: {
        nav: false,
        dots: true,
      },
      576: {
        nav: true,
        dots: false,
      }
    }
  });
});

$(function () {
  $('.pricelist__container').owlCarousel({
    loop: true,
    autoplay: false,
    center: true,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    navText: ["<img src='img/arrow-back.svg'>", "<img src='img/arrow-next.svg'>"],
    responsive: {
      0: {
        items: 1,
        autoHeight:true,
      },
      768: {
        items: 2,
        autoHeight:false,
      },
      992: {
        items: 3,
      }
    }
  });
});



$(function () {
  $('.reviews__slides').owlCarousel({
    loop: true,
    autoplay: false,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    navText: ["<img src='img/arrow-back.svg'>", "<img src='img/arrow-next.svg'>"],
    responsive: {
      0: {
        items: 1,
        autoHeight:true,
        margin: 0,
      },
      768: {
        items: 2,
        autoHeight:false,
        margin: 20,
      },
      992: {
        items: 2,
        margin: 40,
      },
      1200: {
        items: 2,
        margin: 80,
      }
    }
  });
});

$(function () {
  $('.services__btn').on('click', function() {
    $('.service').toggleClass('service--open');
    $('.services__btn').toggleClass('services__btn--open');
  });
});

