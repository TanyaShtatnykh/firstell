$(function () {
  $('.p-slider__more-btn').on('click', function() {
    $(this).parent('.p-slider').toggleClass('p-slider--open');
    $(this).toggleClass('p-slider__more-btn--open');
  });
});