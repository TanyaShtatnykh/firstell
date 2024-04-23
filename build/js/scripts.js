
$(function () {
  $('.header__burger-btn').on('click', function() {
    $(this).toggleClass('header__burger-btn--open');
    $('.header__menu').toggleClass('header__menu--open');
  })
});
$(function () {
  $('.owl-carousel').owlCarousel({
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
  $('.services__btn').on('click', function() {
    $('.service').toggleClass('service--open');
    $('.services__btn').toggleClass('services__btn--open');
  });
});


