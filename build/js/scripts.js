
$(function () {
  $('.services__btn').on('click', function() {
    $('.service').toggleClass('service--open');
    $('.services__btn').toggleClass('services__btn--open');
  });
});
$(function () {
  $('.header__burger-btn').on('click', function() {
    $(this).toggleClass('header__burger-btn--open');
    $('.header__menu').toggleClass('header__menu--open');
  })
});

