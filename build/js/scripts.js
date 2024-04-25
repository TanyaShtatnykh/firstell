
$(function () {
  $('.header__burger-btn').on('click', function() {
    $(this).toggleClass('header__burger-btn--open');
    $('.header__menu').toggleClass('header__menu--open');
  })
});
$(function () {
  $('.portfolio__slider').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoHeight:true,
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
  $('.services__btn').on('click', function() {
    $('.service').toggleClass('service--open');
    $('.services__btn').toggleClass('services__btn--open');
  });
});

