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
